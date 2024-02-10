import React, { useContext } from 'react';
import Input from "./Input";
import Messages from './messages/Messages';
import { ChatContext } from './../../../../../provider/ChatProvider';

const ChatContainer = () => {
    const { data } = useContext(ChatContext);
    return (
        <div className=" w-3/5  h-4/5">
        <div className="h-14 flex justify-center items-center rounded-tr-lg bg-purple-600 p-3 text-gray-200">
        <img src={data.chatUser?.photoURL} className="w-10 h-12 rounded-full mr-4 overflow-hidden"/>
          <span>{data.chatUser?.displayName}</span>
        </div>
        <Messages />
        <Input />
      </div>
    );
};

export default ChatContainer;