import React, { useContext, useState } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
  getDoc,
  and,
  orderBy,
} from "firebase/firestore";
import { db } from "../../../../../firebase/firebase.config";
import useAuth from "../../../../../hooks/useAuth";
import { FaSearch } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

const CompanySearchBar = () => {
  const [username, setUsername] = useState("");
  const [searchUser, setSearchUser] = useState(null);
  const [err, setErr] = useState(false);
  const { user } = useAuth();

  const handleSearch = async () => {
    const q1= query(
      collection(db, "users"),
     and(where("displayName", "==", username), where("uid", "!=", user.uid)),orderBy("uid")
    );
    try {
      const querySnapshot = await getDocs(q1);
      querySnapshot.forEach((doc) => {
        console.log(("data= "+doc.data))
        setSearchUser(doc.data());
      });
    } catch (err) {
      console.log(err);
      setErr(true);
    }
  };
  //when user press enter after inputting a name
  const handleKey = async (e) => {
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = async () => {
    // comparing these to avoid creating 2 chats using same users which will misguide the chats
    const combinedId =
      user.uid > searchUser.uid
        ? user.uid + searchUser.uid
        : searchUser.uid + user.uid;

    try {
      const res = await getDoc(doc(db, "chats", combinedId));

      if (!res.exists()) {
        //create a chat in chats collection with name of combined id if does not exist
        await setDoc(doc(db, "chats", combinedId), { messages: [] });

        //update user chats
        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: searchUser.uid,
            displayName: searchUser.displayName,
            photoURL: searchUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
      //if chat already exists then adding new chat by updating these docs used update nested docs of firebase doc
      await updateDoc(doc(db, "userChats", searchUser.uid), {
        [combinedId + ".userInfo"]: {
          uid: user.uid,
          displayName: user.displayName,
          photoURL: user.photoURL,
        },
        [combinedId + ".date"]: serverTimestamp(),
      });
    } catch (err) {
      console.log(err);
    }

    setSearchUser(null);
    setUsername("");
  };

  return (
    <div className="border-b-2 items-center border-solid border-slate-400">
      <div className="p-3 flex justify-between">
        <input
          type="text"
          placeholder="Find a user"
          className="bg-transparent ml-4 w-full border-none text text-white outline-none placeholder:text-gray-200"
          onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        {username !="" ? <button onClick={()=>{setUsername("")}} className="rounded-full text-slate-300 hover:text-white p-2 text-xl"><MdCancel /></button>:""}
        <button onClick={handleSearch} className="rounded-full text-slate-300 hover:text-white p-2 text-xl"><FaSearch /></button>
      </div>
      {err && <span>User not found!</span>}
      {searchUser && (
        <div
          className="p-3 flex items-center gap-3 text-white cursor-pointer bg-slate-600 hover:bg-slate-800 z-50"
          onClick={handleSelect}
        >
          <img src={searchUser.photoURL} alt="" className="w-12 h-12 rounded-full " />
          <div>
            <span className="font-bold text-lg ">{searchUser.displayName}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanySearchBar;