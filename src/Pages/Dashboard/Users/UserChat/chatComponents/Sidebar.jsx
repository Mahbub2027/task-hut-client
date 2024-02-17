import React from 'react';
import SideChats from './SideChats';

const Sidebar = () => {
    return (
        <div className='w-1/3 md:w-5/12 lg:w-2/5 bg-slate-500 rounded-l-xl overflow-hidden'>
    
        <SideChats/>
    </div>
    );
};

export default Sidebar;