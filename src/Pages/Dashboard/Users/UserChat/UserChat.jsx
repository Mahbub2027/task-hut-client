import React from 'react';
import ChatContainer from './chatComponents/ChatContainer';
import Sidebar from './chatComponents/Sidebar';

const UserChat = () => {
  return (
    <div className="rounded-3xl mt-10">
      <div className="border-4 border-solid border-slate-400/30 rounded-2xl w-full h-[85vh] flex shadow-md">
        <Sidebar />
        <ChatContainer />
      </div>
    </div>
  );
};

export default UserChat;