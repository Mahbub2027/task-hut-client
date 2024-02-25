import React, { useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import { Link } from 'react-router-dom';

const CompanyTrustVerification = () => {

    const { user } = useAuth();

    let score = 30;
    let emailVerified = user?.emailVerified;
    let phoneVerified = user?.phoneNumber;

    if(emailVerified){
        score += 20;
    }
    if(emailVerified){
        score += 25;
    }
    if(emailVerified){
        score += 25;
    }

    

    return (
        <div>
            <div className='p-8'>
                <hr className="dark:opacity-25" />
                <div className='p-8 text-center space-y-4'>
                    <p className='w-full font-medium text-xl pb-2'>Score & Strength</p>
                    <ul className="steps w-full py-4">
                        <li className="step step-primary"></li>
                        <li className={`step ${score >= 30 && "step-primary"}`}>Low</li>
                        <li className={`step ${score >= 50 && "step-primary"}`}>Good</li>
                        <li className={`step ${score >= 70 && "step-primary"}`}>High</li>
                        <li className={`step ${score == 100 && "step-primary"}`}>Excellent</li>
                    </ul>
                    <p>Current Trust Score: <span>{score}</span></p>
                </div>
                <hr className="mb-8 dark:opacity-25" />
                <div className='flex justify-between items-center mb-8'>
                    <p className='text-lg font-semibold'>Email Address</p>
                    <div>
                        {emailVerified ?
                            <>
                                <span className='mr-8 text-green-600 font-semibold'>Verified</span>
                                <span className="text-white bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-500 shadow-md shadow-yellow-500/50  font-bold rounded-full text-md px-4 py-2 text-center">30 Points</span>
                            </> :
                            <>
                                <button className='primary-btn'>Verify</button>
                                <span className="bg-slate-300 font-bold rounded-full text-sm px-4 py-2">30 Points</span>
                            </>
                        }
                    </div>
                </div>
                <div className='flex justify-between items-center mb-8'>
                    <p className='text-lg font-semibold'>Phone Number</p>
                    <div className='flex items-center gap-4'>
                        {phoneVerified ?
                            <>
                                <span className='mr-8 text-green-600 font-semibold'>Verified</span>
                                <span className="text-white bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-500 shadow-md shadow-yellow-500/50  font-bold rounded-full text-md px-4 py-2 text-center">20 Points</span>
                            </> :
                            <>
                                <button className='primary-btn'>Verify</button>
                                <span className="bg-slate-300 font-bold rounded-full text-sm px-4 py-2">20 Points</span>
                            </>
                        }
                    </div>
                </div>
                <div className='flex justify-between items-center mb-8'>
                    <p className='text-lg font-semibold'>Company Website</p>
                    <div className='flex items-center gap-4'>
                        {false ?
                            <>
                                <span className='mr-8 text-green-600 font-semibold'>Verified</span>
                                <span className="text-white bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-500 shadow-md shadow-yellow-500/50  font-bold rounded-full text-md px-4 py-2 text-center">25 Points</span>
                            </> :
                            <>
                                <Link to='/dashboard/editProfile' className='primary-btn'>ADD</Link>
                                <span className="bg-slate-300 font-bold rounded-full text-sm px-4 py-2">25 Points</span>
                            </>
                        }
                    </div>
                </div>
                <div className='flex justify-between items-center mb-8'>
                    <p className='text-lg font-semibold'>Company Location</p>
                    <div className='flex items-center gap-4'>
                    {false ?
                            <>
                                <span className='mr-8 text-green-600 font-semibold'>Verified</span>
                                <span className="text-white bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-500 shadow-md shadow-yellow-500/50  font-bold rounded-full text-md px-4 py-2 text-center">25 Points</span>
                            </> :
                            <>
                                <Link to='/dashboard/editProfile' className='primary-btn'>ADD</Link>
                                <span className="bg-slate-300 font-bold rounded-full text-sm px-4 py-2">25 Points</span>
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyTrustVerification;