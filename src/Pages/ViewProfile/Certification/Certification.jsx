import React from 'react';
import { FaAward } from 'react-icons/fa6';

const Certification = () => {
    return (
        <div className='shadow-md rounded-lg border-2 p-4 text-end'>
            <h2 className='font-bold text-2xl text-start pb-2'>Certification</h2>
            <hr className="my-3 dark:opacity-50" />
            <div className='flex flex-col gap-4 items-center'>
                <FaAward className='w-20 h-auto'/>
                <p>You don't have any certifications yet.</p>
                <button type="button" className=" text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Get Certified</button>
            </div>
        </div>
    );
};

export default Certification;