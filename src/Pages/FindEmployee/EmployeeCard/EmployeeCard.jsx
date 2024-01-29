import React from 'react';
import { FaBookmark, FaImage, FaRegBookmark } from 'react-icons/fa';
import { FaShield, FaShieldHalved } from 'react-icons/fa6';
const EmployeeCard = ({ employee }) => {
    const { profileImage, profession, skills, firstName, lastName, availability, location, years_of_experience } = employee;



    return (
        <div className='w-4/12 flex  border text-slate-700 p-2'>
            <div>
                <FaImage className='h-20 w-20 text-slate-700' />
                {/* <FaShield /> */}
                <FaShieldHalved />
            </div>
            <div>
                <p className='font-medium text-md'>{profession}</p>
                <hr />
                <p className='font-bold text-xl'>{skills.join(' | ')}</p>
                <p>{firstName} {lastName}</p>
                <p>{availability}</p>
                <p>{location.address}, {location.city}</p>
            </div>
            <div>
                {/* <FaBookmark /> */}
                <FaRegBookmark />
                <p>Experience: {years_of_experience} yrs</p>
                <button>View Details</button>
            </div>
        </div>
    );
};

export default EmployeeCard;