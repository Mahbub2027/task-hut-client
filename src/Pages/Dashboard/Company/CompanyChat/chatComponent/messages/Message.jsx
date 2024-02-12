import React, { useContext, useEffect, useRef } from "react";
import { ChatContext } from './../../../../../../provider/ChatProvider';
import useAuth from './../../../../../../hooks/useAuth';

const Message = ({ message }) => {
  const { user } = useAuth();
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div
      ref={ref}
      className={`flex gap-2 bg-transparent mb-4 ${message.senderId === user.uid ? "flex-row-reverse bg-transparent" : ""
        }`}
    >
      <div className="flex flex-col items-center gap-1 font-light">
        <img
          src={
            message.senderId === user.uid
              ? user.photoURL
              : data.chatUser.photoURL
          }
          alt=""
          className="border-2 border-slate-700 w-10 h-10 gap-1 rounded-full object-cover"
        />
        <span className="text-sm">{message.date.toDate().toLocaleTimeString('en-US')}</span>
      </div>
      <div className="max-w-80 flex flex-col gap-4 items-center text-white text-lg">
        {message.text === '' ? '' : <p className={`bg-white text-slate-700 p-3 rounded-xl rounded-tl-none max-w-max ${message.senderId === user.uid ? " bg-slate-700 rounded-xl rounded-tl-xl rounded-tr-none text-white" : ""} `}>{message.text}</p>}
        {message.img && <img src={message.img} className={`w-4/5 border-4 border-slate-300  overflow-hidden border-solid ${message.senderId === user.uid ? "rounded-xl rounded-tr-none" : "rounded-xl rounded-tl-none"}`} />}
      </div>
    </div>
  );
};

export default Message;
