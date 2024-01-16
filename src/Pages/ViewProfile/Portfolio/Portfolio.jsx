import React from 'react';
import { FaRegImages } from 'react-icons/fa6';

const Portfolio = () => {
    return (
        <div className='shadow-md rounded-lg border-2 p-4 text-end'>
            <h2 className='font-bold text-2xl text-start pb-2'>Portfolio</h2>
            <hr className="my-6 dark:opacity-50" />
            <div className='flex flex-col gap-4 items-center'>
                <FaRegImages className='w-32 h-auto' />
                <p>No portfolio items have been added yet</p>
            </div>
            <hr className="my-6 dark:opacity-50" />
            <button type="button" className=" text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Edit Profile</button>
        </div>
    );
};

export default Portfolio;