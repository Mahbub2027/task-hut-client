import React from 'react';
import ChatContainer from './chatComponents/ChatContainer';
import Sidebar from './chatComponents/Sidebar';

const UserChat = () => {
    return (
        <div className="bg-slate-300 h-screen flex items-center justify-center">
      <div className="border-4 border-solid border-slate-400 rounded-2xl w-5/6 h-[80vh] flex shadow-md">
        <Sidebar />
        <ChatContainer />
      </div>
    </div>
    );
};

export default UserChat;