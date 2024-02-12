import React from 'react';
import SideChats from './SideChats';
import CompanySearchBar from './CompanySearchBar';

const Sidebar = () => {
    return (
        <div className='w-1/4 bg-slate-500 rounded-l-xl overflow-hidden'>
            {/* <Topbar/> */}


            <CompanySearchBar />
            <SideChats />
        </div>
    );
};

export default Sidebar;