import React from 'react';
import { FaBookmark, FaImage, FaRegBookmark } from 'react-icons/fa';
import { FaShield, FaShieldHalved } from 'react-icons/fa6';


const JobPostCard = ({ job }) => {

    const { title, type, category, experience, posted, deadline } = job;
    // console.log(job)    

    return (
        <div className='w-4/12 flex  border text-slate-700 p-2'>
            <div>
                <FaImage className='h-20 w-20 text-slate-700' />
                {/* <FaShield /> */}
                <FaShieldHalved />
            </div>
            <div>
                <p className='font-medium text-md'>Company Name</p>
                <hr />
                <p className='font-bold text-xl'>{title}</p>
                <p>{type}</p>
                <p>{category}</p>
                <p>Years of Experience: {experience} yr</p>
            </div>
            <div>
                {/* <FaBookmark /> */}
                <FaRegBookmark />
                <p>Posted: {posted}</p>
                <p>Deadline: {deadline}</p>
                <button>View Details</button>
            </div>
        </div>
    );
};

export default JobPostCard;