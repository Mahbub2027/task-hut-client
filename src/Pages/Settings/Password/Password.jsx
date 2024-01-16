import React, { useState } from 'react';
import { FaTriangleExclamation } from 'react-icons/fa6';

const Password = () => {

    const [isShow, setShow] = useState(false);

    return (
        <div className='p-8'>
            <h2 className='font-bold text-2xl pb-2'>Password</h2>
            <hr className="dark:opacity-50" />
            <div className='p-8 space-y-6'>
                <p className='w-full font-medium text-xl pb-2'>Change Password</p>
                <div className='flex gap-8 justify-between'>
                    <label htmlFor="" className='basis-3/6 relative'>
                        <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type={isShow ? 'text' : 'password'}
                            name="old-password"
                            placeholder="Old Password"
                            defaultValue={``}
                        />
                        <span className='text-xs text-red-600 flex items-center gap-2 py-2'><FaTriangleExclamation />error message</span>
                        <button onClick={() => setShow(!isShow)} className='text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-2 py-1 text-center absolute right-2 top-2'>{isShow ? 'hide' : 'show'}</button>
                    </label>
                    <label htmlFor="" className='basis-3/6 relative'>
                        <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text"
                            name="new-password"
                            placeholder="New Password"
                            defaultValue={``}
                        />
                        <span className='text-xs text-red-600 flex items-center gap-2 py-2'><FaTriangleExclamation />error message</span>
                    </label>
                    <label htmlFor="" className='basis-3/6 relative'>
                        <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text"
                            name="confirm-password"
                            placeholder="Confirm Password"
                            defaultValue={``}
                        />
                        <span className='text-xs text-red-600 flex items-center gap-2 py-2'><FaTriangleExclamation />error message</span>
                    </label>
                </div>
            </div>
            <hr className="mb-8 dark:opacity-25" />
            <div className='text-end'>
                <button type="button" className=" text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Save Changes</button>
            </div>
        </div>
    );
};

export default Password;