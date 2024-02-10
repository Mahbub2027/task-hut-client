import React from 'react';
import ChatContainer from './chatComponents/ChatContainer';
import Sidebar from './chatComponents/Sidebar';

const UserChat = () => {
    return (
        <div className="bg-purple-300 h-screen flex items-center justify-center">
      <div className="border-2 border-solid border-white rounded-lg w-2/3 h-4/5 flex">
        <Sidebar />
        <ChatContainer />
      </div>
    </div>
    );
};

export default UserChat;