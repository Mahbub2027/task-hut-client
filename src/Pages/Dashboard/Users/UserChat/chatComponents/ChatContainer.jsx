import React from "react";
import { useContext } from "react";
import Input from "./Input";
import Messages from "./messages/Messages";
import { ChatContext } from "./../../../../../provider/ChatProvider";

const ChatContainer = () => {
  const { data } = useContext(ChatContext);
  return (
    <div className="h-full w-full rounded-r-xl flex flex-col">
      <div className="flex items-center gap-4 rounded-tr-xl bg-white border-b-2 border-b-slate-300 p-3 text-gray-200 lg:h-16">
        <img
          src={data.chatUser?.photoURL}
          className={
            data.chatUser?.photoURL
              ? "object-cover border-2 border-slate-800 w-12 h-12 rounded-full overflow-hidden"
              : "hidden"
          }
        />
        <span className="text-slate-700 text-lg font-semibold">
          {data.chatUser?.displayName}
        </span>
      </div>
      <Messages />
      { data.chatUser?.displayName &&  <Input /> }
    </div>
  );
};

export default ChatContainer;
