import React from 'react';
import { FaBookmark, FaImage, FaRegBookmark } from 'react-icons/fa';
import { FaShield, FaShieldHalved } from 'react-icons/fa6';

const JobPostCard = () => {
    return (
        <div className='w-4/12 flex  border text-slate-700 p-2'>
            <div>
                <FaImage className='h-20 w-20 text-slate-700'/>
                {/* <FaShield /> */}
                <FaShieldHalved />
            </div>
            <div>
                <p className='font-medium text-md'>Company Name</p>
                <hr />
                <p className='font-bold text-xl'>Software Engineer</p>
                <p>On-site</p>
                <p>Full Time</p>
                <p>Years of Experience: 2 yr</p>
            </div>
            <div>
                {/* <FaBookmark /> */}
                <FaRegBookmark />
                <p>Posted: January 28, 24</p>
                <p>Deadline: January 31, 24</p>
                <button>View Details</button>
            </div>
        </div>
    );
};

export default JobPostCard;