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
      className={`flex gap-2 bg-transparent mb-4 ${
        message.senderId === user.uid ? "flex-row-reverse bg-transparent" : ""
      }`}
    >
      <div className="flex flex-col text-gray-500 font-light">
        <img
          src={
            message.senderId === user.uid
              ? user.photoURL
              : data.chatUser.photoURL
          }
          alt=""
          className="w-10 h-10 gap-1 rounded-full object-cover"
        />
        <span>{message.date.toDate().toLocaleTimeString('en-US')}</span>
      </div>
      <div className="max-w-80 flex flex-col gap-4">
        <p className={`bg-white p-3 rounded-lg max-w-max ${
        message.senderId === user.uid ? " bg-slate-300" : ""
      } `}>{message.text}</p>
        {message.img && <img src={message.img} alt="" className="w-4/5 border-4 border-slate-400 rounded-md overflow-hidden border-solid" />}
      </div>
    </div>
  );
};

export default Message;
