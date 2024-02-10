import React, { useContext, useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../../../../firebase/firebase.config";
import useAuth from './../../../../../hooks/useAuth';
import { ChatContext } from './../../../../../provider/ChatProvider';
const SideChats = () => {
  const [chats, setChats] = useState([]);
  const { user } = useAuth();
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", user.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    user.uid && getChats();
  }, [user.uid]);

  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };
// Array[0] contains ID and Array[1] contains Object while fetching from firebase 
  return (
    <div className="w-full text-sm bg-purple-900">
      {Object.entries(chats)
        ?.sort((a, b) => b[1].date - a[1].date)
        .map((chat) => (
          <div className="p-3 flex items-center  gap-3 text-white cursor-pointer hover:bg-purple-700" key={chat[0]} onClick={()=>handleSelect(chat[1].userInfo)}>
            <img src={chat[1].userInfo.photoURL} alt="" className="h-10 rounded-full cursor-pointer" />
            <div className=" text-gray-300">
              <span>{chat[1].userInfo.displayName}</span>
              <p>{chat[1].lastMessage?.text}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default SideChats;
