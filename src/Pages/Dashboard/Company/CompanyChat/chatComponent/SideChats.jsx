import React, { useContext, useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../../../../firebase/firebase.config";
import useAuth from './../../../../../hooks/useAuth';
import { ChatContext } from './../../../../../provider/ChatProvider';

const SideChats = () => {
  const [chats, setChats] = useState([]);
  const { user } = useAuth();
  const { dispatch } = useContext(ChatContext);
  const [isSelected, setSelected] = useState(null);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", user.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };
    console.log("uid=" + user.uid)

    user.uid && getChats();
  }, [user.uid]);

  const handleSelect = (usr) => {
    dispatch({ type: "CHANGE_USER", payload: usr });
  };
  // Array[0] contains ID and Array[1] contains Object while fetching from firebase 
  return (
    <div className="w-full bg-white overflow-y-auto">
      <h2 className="text-xl font-bold text-slate-500 px-4 py-2">Companies</h2>
      <hr className="mb-4"/>
      {Object.entries(chats)
        ?.sort((a, b) => b[1].date - a[1].date)
        .map((chat) => (
          console.log("data id=" + chat),
          <div className={isSelected == chat[1].userInfo.uid ? "mb-1 flex items-center gap-5 text-slate-600 cursor-pointer bg-slate-100 hover:bg-slate-100" : "flex items-center gap-5 text-slate-600 cursor-pointer hover:bg-slate-200 mb-1"} key={chat[0]} onClick={() => { handleSelect(chat[1].userInfo), setSelected(chat[1].userInfo.uid) }}>
            <div className="m-1 h-16 w-16">
              <img src={chat[1].userInfo.photoURL} alt="" className="h-full w-full rounded-full cursor-pointer object-cover" />
            </div>
            <div className="">
              <p className={isSelected == chat[1].userInfo.uid ? " sm:text-xs md:text-sm lg:text-lg font-extrabold" : "sm:text-xs md:text-sm lg:text-lg font-medium"}>{chat[1].userInfo.displayName}</p>
              <small className="lg:text-sm line-clamp-1 w-52">{chat[1].lastMessage?.text}</small>
            </div>
          </div>
        ))}
    </div>
  );
};

export default SideChats;
