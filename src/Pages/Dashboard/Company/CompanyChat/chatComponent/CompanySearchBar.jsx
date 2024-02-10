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
} from "firebase/firestore";
import { db } from "../../../../../firebase/firebase.config";
import useAuth from "../../../../../hooks/useAuth";

const CompanySearchBar = () => {
  const [username, setUsername] = useState("");
  const [searchUser, setSearchUser] = useState(null);
  const [err, setErr] = useState(false);
  const { user } = useAuth();

  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
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
    <div className="border-b-2 h-14 items-center border-solid border-gray-400">
      <div className="p-3">
        <input
          type="text"
          placeholder="Find a user"
          className="bg-transparent ml-4 w-full border-none text text-white outline-none placeholder:text-gray-200"
          onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </div>
      {err && <span>User not found!</span>}
      {searchUser && (
        <div
          className="p-3 flex items-center  gap-3 text-white cursor-pointer hover:bg-purple-900 "
          onClick={handleSelect}
        >
          <img src="" alt="" className="w-12 h-12 rounded-full " />
          <div>
            <span className="font-bold text-lg ">{searchUser.displayName}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanySearchBar;
