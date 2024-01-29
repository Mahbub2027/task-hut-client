import React from 'react';
import { FaBookmark, FaImage, FaRegBookmark } from 'react-icons/fa';
import { FaShield, FaShieldHalved } from 'react-icons/fa6';
const EmployeeCard = () => {
    return (
        <div className='w-4/12 flex  border text-slate-700 p-2'>
            <div>
                <FaImage className='h-20 w-20 text-slate-700'/>
                {/* <FaShield /> */}
                <FaShieldHalved />
            </div>
            <div>
                <p className='font-medium text-md'>Profession</p>
                <hr />
                <p className='font-bold text-xl'>JS | React | Tailwind</p>
                <p>Sajid Abdullah</p>
                <p>Available</p>
                <p>Sylhet, Bangladesh</p>
            </div>
            <div>
                {/* <FaBookmark /> */}
                <FaRegBookmark />
                <p>Experience: 0 yrs</p>
                <button>View Details</button>
            </div>
        </div>
    );
};

export default EmployeeCard;