import React from 'react';

const AllReviews = () => {
    return (
        <div>
            <div className='text-center space-y-4 w-2/3 mx-auto mb-20'>
                <h2 className='text-slate-700 text-5xl font-extrabold'>Insights and Delights</h2>
                <p className='text-slate-500 text-2xl font-medium'>Discover the real impact of our platform through the users.</p>
            </div>
            <blockquote className=" text-xl italic font-semibold text-gray-900 dark:text-white">
                <svg className="w-8 h-8 text-indigo-600 dark:text-gray-600 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                </svg>
                <p className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-4xl font-bold mt-8">Unlocking potential, forging success – where careers thrive and opportunities flourish.</p>
                <p className="text-slate-400 text-base font-normal mt-4">- TaskHut -</p>
            </blockquote>
        </div>
    );
};

export default AllReviews;