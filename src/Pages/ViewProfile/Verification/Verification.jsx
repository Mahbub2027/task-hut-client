import React from 'react';
import { FaCheck, FaEnvelopeCircleCheck, FaFacebook, FaLinkedin, FaMobileRetro, FaMoneyCheckDollar, FaUserShield } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Verification = () => {
    return (
        <div className='shadow-md rounded-lg border-2 p-4 text-end text-slate-700'>
            <h2 className='font-bold text-2xl text-start pb-2'>Verification</h2>
            <hr className="my-3 dark:opacity-50" />
            <div className='flex flex-col gap-4 items-center p-2'>
                <div className='flex justify-between w-full'>
                    <div className='flex gap-2 items-center'>
                        <FaUserShield className='w-5 h-5' />
                        <p className='tooltip' data-tip='Not a member of our elite group of the best freelancers.'>Preferred Freelancer</p>
                    </div>
                    <Link to='' className='text-purple-500 hover:underline'>Join</Link>
                </div>
                <div className='flex justify-between w-full'>
                    <div className='flex gap-2 items-center'>
                        <FaMoneyCheckDollar className='w-5 h-5' />
                        <p className='tooltip' data-tip='Not verified to have a valid payment method.'>Payment Method Verified</p>
                    </div>
                    <Link to='' className='text-purple-500 hover:underline'>Verify</Link>
                </div>
                <div className='flex justify-between w-full'>
                    <div className='flex gap-2 items-center'>
                        <FaMobileRetro className='w-5 h-5' />
                        <p className='tooltip' data-tip='Phone number not verified tooltip message.'>Phone Number Verified</p>
                    </div>
                    <Link to='' className='text-purple-500 hover:underline'>Verify</Link>
                </div>
                <div className='flex justify-between w-full'>
                    <div className='flex gap-2 items-center'>
                        <FaEnvelopeCircleCheck className='w-5 h-5' />
                        <p className='tooltip' data-tip='Email account is verified.'>Email Verified</p>
                    </div>
                    <FaCheck className='w-5 h-5 text-green-500' />
                </div>
                <div className='flex justify-between w-full'>
                    <div className='flex gap-2 items-center'>
                        <FaLinkedin className='w-5 h-5' />
                        <p className='tooltip' data-tip='Linkedin account not verified.'>Linkedin Connected</p>
                    </div>
                    <Link to='' className='text-purple-500 hover:underline'>Connect</Link>
                </div>
                <div className='flex justify-between w-full'>
                    <div className='flex gap-2 items-center'>
                        <FaFacebook className='w-5 h-5' />
                        <p className='tooltip' data-tip='Facebook account not verified.'>Facebook Connected</p>
                    </div>
                    <Link to='' className='text-purple-500 hover:underline'>Connect</Link>
                </div>
            </div>
        </div>
    );
};

export default Verification;