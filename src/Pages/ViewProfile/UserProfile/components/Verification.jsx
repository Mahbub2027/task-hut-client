import React from 'react';
import { FaCheck, FaEnvelopeCircleCheck, FaFacebook, FaGithub, FaLinkedin, FaMobileRetro, FaMoneyCheckDollar, FaUserShield } from 'react-icons/fa6';

const Verification = ({ number, email, linkedin, github }) => {

    return (
        <div className='rounded-3xl border-2 p-4 text-end text-slate-700 w-full'>
            <h2 className='font-bold text-2xl text-start pb-2'>Verification</h2>
            <hr className="my-3 dark:opacity-50" />
            <div className='flex flex-col gap-4 lg:items-center p-2 w-full'>
                <div className='flex justify-between w-full'>
                    <div className='flex gap-2 items-center'>
                        <FaMobileRetro className='w-5 h-5' />
                        <p>Phone Number Verified</p>
                    </div>
                    {number ?
                        <p data-tip="Verified" className='tooltip' ><FaCheck className='w-5 h-5 text-green-500' /></p> :
                        <p data-tip="Add number from Update Profile" className='text-red-500'>Add</p>
                    }
                </div>
                <div className='flex justify-between w-full'>
                    <div className='flex gap-2 items-center'>
                        <FaEnvelopeCircleCheck className='w-5 h-5' />
                        <p>Email Verified</p>
                    </div>
                    {email ?
                        <p data-tip="Verified" className='tooltip' ><FaCheck className='w-5 h-5 text-green-500' /></p> :
                        <p className='text-red-500'>Verify</p>
                    }
                </div>
                <div className='flex justify-between w-full'>
                    <div className='flex gap-2 items-center'>
                        <FaLinkedin className='w-5 h-5' />
                        <p>Linkedin Connected</p>
                    </div>
                    {linkedin ?
                        <p data-tip="Verified" className='tooltip' ><FaCheck className='w-5 h-5 text-green-500' /></p> :
                        <p data-tip="Add linkedin URL from Update Profile" className='tooltip text-red-500'>Add</p>
                    }
                </div>
                <div className='flex justify-between w-full'>
                    <div className='flex gap-2 items-center'>
                        <FaGithub className='w-5 h-5' />
                        <p>Github Connected</p>
                    </div>
                    {github ?
                        <p data-tip="Verified" className='tooltip' ><FaCheck className='w-5 h-5 text-green-500' /></p> :
                        <p data-tip="Add github URL from Update Profile" className='tooltip text-red-500'>Add</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default Verification;