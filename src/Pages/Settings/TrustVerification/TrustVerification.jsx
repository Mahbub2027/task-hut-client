import React from 'react';

const TrustVerification = () => {
    return (
        <div className='p-8'>
            <h2 className='font-bold text-2xl pb-2'>Trust & Verification</h2>
            <hr className="dark:opacity-50" />
            <div className='p-8 space-y-6'>
                <p className='w-full font-medium text-xl pb-2'>What is a trust score?</p>
                <p>The Freelancer Trust Score is at the core of how we handle verification, trust, and payments. The Trust Score is a value that indicates to what extent we have been able to verify who a user says they are. Employers and freelancers who are the safest to work with are those who put in more effort to verify themselves to become highly trusted users.</p>
            </div>
            <hr className="dark:opacity-25" />
            <div className='p-8 text-center space-y-4'>
                <p className='w-full font-medium text-xl text-start pb-2'>Score & Strength</p>
                <ul className="steps w-full py-4">
                    <li className="step step-primary"></li>
                    <li className="step step-primary">Low</li>
                    <li className="step">Good</li>
                    <li className="step">Excellent</li>
                </ul>
                <p>Current Trust Score: <span>20</span></p>
                <p>Strength: <span>Low</span></p>
            </div>
            <hr className="mb-8 dark:opacity-25" />
            <div className='flex justify-between items-center mb-8'>
                <p className='text-lg font-semibold'>Email Address</p>
                <div>
                    <span className='mr-8 text-green-600 font-semibold'>Verified</span>
                    <span className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-bold rounded-full text-md px-4 py-2 text-center">5 Points</span>
                </div>
            </div>
            <div className='flex justify-between items-center mb-8'>
                <p className='text-lg font-semibold'>Phone Number</p>
                <div>
                    <span className='mr-8 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>Add Phone Number</span>
                    <span className="bg-gray-300 font-bold rounded-full text-sm px-4 py-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">20 Points</span>
                </div>
            </div>
            <div className='flex justify-between items-center mb-8'>
                <p className='text-lg font-semibold'>Facebook</p>
                <div>
                    <span className='mr-8 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>Connect with facebook</span>
                    <span className="bg-gray-300 font-bold rounded-full text-sm px-4 py-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">30 Points</span>
                </div>
            </div>
            <div className='flex justify-between items-center mb-8'>
                <p className='text-lg font-semibold'>Linkedin</p>
                <div>
                    <span className='mr-8 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>Connect with linkedin</span>
                    <span className="bg-gray-300 font-bold rounded-full text-sm px-4 py-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">30 Points</span>
                </div>
            </div>
        </div>
    );
};

export default TrustVerification;