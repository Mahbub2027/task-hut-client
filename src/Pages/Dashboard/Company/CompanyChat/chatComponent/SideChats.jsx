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
    console.log("uid="+user.uid)

    user.uid && getChats();
  }, [user.uid]);

  const handleSelect = (usr) => {
    dispatch({ type: "CHANGE_USER", payload: usr });
  };
  // Array[0] contains ID and Array[1] contains Object while fetching from firebase 
  return (
    <div className="w-full bg-slate-900">
      {Object.entries(chats)
        ?.sort((a, b) => b[1].date - a[1].date)
        .map((chat) => (
          console.log("data id="+chat[1].userInfo.uid),
          <div className={`${isSelected==chat[1].userInfo.uid?"md:p-2 lg:p-4 flex items-center gap-3 text-white cursor-pointer bg-slate-800 hover:bg-slate-600":"md:p-2 lg:p-4 flex items-center gap-3 text-white cursor-pointer hover:bg-slate-700"}`} key={chat[0]} onClick={() => {handleSelect(chat[1].userInfo),setSelected(chat[1].userInfo.uid)}}>
            <img src={chat[1].userInfo.photoURL} alt="" className="h-10 w-10 rounded-full cursor-pointer" />
            <div className="">
              <span className={`${isSelected==chat[1].userInfo.uid ?" sm:text-xs md:text-sm lg:text-lg font-extrabold":"sm:text-xs md:text-sm lg:text-lg font-medium"}`}>{chat[1].userInfo.displayName}</span>
              <p className="lg:text-sm sm:text-xs">{chat[1].lastMessage?.text.split(' ').slice(0,5).join(' ')}...</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default SideChats;
