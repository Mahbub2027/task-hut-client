import React from 'react';
import Sidebar from './chatComponent/Sidebar';
import ChatContainer from './chatComponent/ChatContainer';

const CompanyChat = () => {
    return (
        <div className="bg-purple-300 h-screen flex items-center justify-center">
        <div className="border-2 border-solid border-white rounded-lg w-5/6 h-4/5 flex">
          <Sidebar />
          <ChatContainer />
        </div>
      </div>
    );
};

export default CompanyChat;