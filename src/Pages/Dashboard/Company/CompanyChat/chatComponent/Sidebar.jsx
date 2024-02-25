import React from 'react';
import SideChats from './SideChats';
import CompanySearchBar from './CompanySearchBar';

const Sidebar = () => {
    return (
        <div className='w-1/3 md:w-5/12 lg:w-2/5 bg-slate-50 rounded-l-xl overflow-hidden'>
            <CompanySearchBar />
            <SideChats />
        </div>
    );
};

export default Sidebar;