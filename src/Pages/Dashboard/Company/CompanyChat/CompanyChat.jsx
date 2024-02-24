import React from 'react';
import Sidebar from './chatComponent/Sidebar';
import ChatContainer from './chatComponent/ChatContainer';

const CompanyChat = () => {
  return (
    <div className="rounded-3xl ">
      <div className="border-4 border-solid border-slate-400 rounded-2xl w-full h-[85vh] flex shadow-md">
        <Sidebar />
        <ChatContainer />
      </div>
    </div>
  );
};

export default CompanyChat;