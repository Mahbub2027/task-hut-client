import React from 'react';

const Account = () => {
    return (
        <div className='p-8'>
            <h2 className='font-bold text-2xl pb-2'>Deactivate or Delete Account</h2>
            <hr className="dark:opacity-50" />
            <div className='p-8 space-y-6'>
                <p className='w-full font-medium text-xl pb-2'>Deactivate Account</p>
                <div className='p-6 border rounded shadow'>
                    <p>Deactivating your account will cause your profile and listings to disappear, and you will not receive any notifications from us. This can be undone later.</p>
                    <button type="button" className="mt-6 flex gap-2 items-center text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-4 py-2 text-center">Deactivate Account</button>
                </div>
            </div>
            <div className='p-8 space-y-6'>
                <p className='w-full font-medium text-xl pb-2'>Request Permanent Deletion</p>
                <div className='p-6 border border-red-600 rounded shadow'>
                    <p>Deleting your account is permanent. When you delete your account, all of your content, transaction history and messages will be permanently erased and you will not be able to retrieve them.</p>
                    <button type="button" className="mt-6 flex gap-2 items-center text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-4 py-2 text-center">Delete Account</button>
                </div>
            </div>
        </div>
    );
};

export default Account;