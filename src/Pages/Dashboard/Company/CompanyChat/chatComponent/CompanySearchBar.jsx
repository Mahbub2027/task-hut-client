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
    const q1 = query(
      collection(db, "users"), and(where("displayName", "==", username), where("uid", "!=", user.uid)), orderBy("uid")
    );
    try {
      const querySnapshot = await getDocs(q1);
      querySnapshot.forEach((doc) => {
        console.log(("data= " + doc.data))
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
    <div className="border-b-2 items-center border-slate-400/30">
      <div className="p-3 flex justify-between">
        <input
          type="text"
          placeholder="Find a user by user name"
          className="bg-transparent ml-4 w-full border-none text-lg text-slate-600 outline-none placeholder:text-slate-600"
          onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        {username != "" ? <button onClick={() => { setUsername("") }} className="rounded-full text-slate-300 hover:text-red-700 p-2 text-xl"><MdCancel /></button> : ""}
        <button onClick={handleSearch} className="rounded-full text-slate-400 hover:text-slate-700 p-2 text-xl"><FaSearch /></button>
      </div>
      {err && <span>User not found!</span>}
      {searchUser && (
        <div
          className="flex items-center text-slate-600 cursor-pointer bg-slate-100 hover:bg-slate-200 z-50"
          onClick={handleSelect}
        >
          <div className="w-28">
            <img src={searchUser.photoURL} alt="" className="w-3/4 h-20 rounded-r-full object-cover transition-all ease-in-out delay-0 duration-500" />
          </div>
          <div>
            <span className="font-bold text-lg ">{searchUser.displayName}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanySearchBar;
