import React from 'react';
import SideChats from './SideChats';
import CompanySearchBar from './CompanySearchBar';

const Sidebar = () => {
    return (
        <div className='w-2/5 bg-purple-800 rounded-l-lg overflow-hidden'>
        {/* <Topbar/> */}


        <CompanySearchBar/>
        <SideChats/>
    </div>
    );
};

export default Sidebar;