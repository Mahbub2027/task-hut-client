import React from 'react';

const Payment = () => {
    return (
        <div className='p-8'>
            <h2 className='font-bold text-2xl pb-2'>Payment</h2>
            <hr className="dark:opacity-50" />
            <div className='p-8 space-y-6'>
                <p className='w-full font-medium text-xl pb-2'>Payment Methods</p>
                <div className='flex gap-8 justify-between'>
                    
                </div>
            </div>
            <hr className="mb-8 dark:opacity-25" />
            <div className='text-end'>
                <button type="button" className=" text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Save Changes</button>
            </div>
        </div>
    );
};

export default Payment;