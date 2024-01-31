import React from 'react';

const Reviews = () => {
    return (
        <div className='shadow-md rounded-lg border-2 p-4 text-end'>
            <h2 className='font-bold text-2xl text-start pb-2'>Review</h2>
            <hr className="my-6 dark:opacity-50" />
            <div className='flex flex-col gap-4 items-center'>
                <p>No reviews to see here!</p>
            </div>
        </div>
    );
};

export default Reviews;