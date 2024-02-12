import React from 'react';
import Sidebar from './chatComponent/Sidebar';
import ChatContainer from './chatComponent/ChatContainer';

const CompanyChat = () => {
  return (
    <div className="bg-slate-300 h-screen flex items-center justify-center">
      <div className="border-4 border-solid border-slate-400 rounded-2xl w-5/6 h-[80vh] flex shadow-md">
        <Sidebar />
        <ChatContainer />
      </div>
    </div>
  );
};

export default CompanyChat;