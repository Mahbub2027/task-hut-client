import React from 'react';
import { FaCircleExclamation, FaMobileScreenButton, FaXmark } from 'react-icons/fa6';

const Security = () => {
    return (
        <div className='p-8'>
            <h2 className='font-bold text-2xl pb-2'>Security</h2>
            <hr className="dark:opacity-50" />
            <div className='p-8 space-y-6'>
                <p className='w-full font-medium text-xl pb-2'>Two Factor Authentication</p>
                <div className='space-y-8'>
                    <p className='flex items-center gap-3'><FaCircleExclamation className='w-6 h-6 text-orange-700' /> Your account does not have two-factor authentication turned on.</p>
                    <p className=''>Two-factor authentication ensures that only devices you trust are able to access your Freelancer.com account. Whenever a new device attempts to login to your account, you will be required to confirm the login by using a code sent to your email address or phone number.</p>
                    <button type="button" className=" text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Get Started</button>
                </div>
            </div>
            <hr className="mb-4 dark:opacity-25" />
            <div className='p-8 space-y-6'>
                <p className='w-full font-medium text-xl pb-2'>Login Devices</p>
                {/* if no devices are connected */}
                <span>There are no devices to show.</span>
                {/* else */}
                <p>The following are the most recent devices that have logged into your account in the last 30 days. See anything suspicious? Contact us at <a className='text-purple-500 underline' href='https://www.google.com' target='
                _blank'>taskhut@gmail.com</a></p>
                <div className='p-4 flex items-center justify-between'>
                    <div className='flex items-center gap-4'>
                        <FaMobileScreenButton className='w-10 h-10' />
                        <p className='flex flex-col'>
                            <span className='font-bold text-md'>Android (Chrome Generic for Android) (Web)</span>
                            <span>Sylhet, Bangladesh</span>
                            <span>Last login at January 14, 2024 at 4:01:12 PM GMT+6</span>
                        </p>
                    </div>
                    <button type="button" className="flex gap-2 items-center text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-4 py-2 text-center"><FaXmark className='w-6 h-6' />Remove Device</button>
                </div>
            </div>
        </div>
    );
};

export default Security;