import React, { useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import { Link } from 'react-router-dom';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';



const CompanyTrustVerification = () => {

    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();

    const { data: companies = [] } = useQuery({
        queryKey: ['company'],
        queryFn: async () => {
            const companyRes = await axiosPublic.get("/companies")
            return companyRes.data;
        }
    })

    let score;

    companies.map(company => {
        score = 0;
        if (company.email === user?.email) {
            if (user.emailVerified != '') {
                score += 30;
            }
            if (company.phone != '') {
                score += 20;
            }
            if (company.linkedin != '') {
                score += 25;
            }
            if (company.website != '') {
                score += 25;
            }
        }
    })
    // console.log(score)


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
                        <li className={`step ${score >= 100 && "step-primary"}`}>Excellent</li>
                    </ul>
                </div>
                <hr className="mb-8 dark:opacity-25" />
                <div>
                    {
                        companies.map(company => <div key={company._id}>
                            {
                                (company.email === user?.email) && <>
                                    <div className='flex justify-between items-center mb-8'>
                                        <p className='text-lg font-semibold'>Email Address</p>
                                        <div>
                                            {user?.emailVerified ?
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
                                            {company.phone ?
                                                <>
                                                    <span className='mr-8 text-green-600 font-semibold'>Verified</span>
                                                    <span className="text-white bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-500 shadow-md shadow-yellow-500/50  font-bold rounded-full text-md px-4 py-2 text-center">20 Points</span>
                                                </> :
                                                <>
                                                    <Link to="/viewProfile" className='primary-btn'>update</Link>
                                                    <span className="bg-slate-300 font-bold rounded-full text-sm px-4 py-2">20 Points</span>
                                                </>
                                            }
                                        </div>
                                    </div>
                                    <div className='flex justify-between items-center mb-8'>
                                        <p className='text-lg font-semibold'>Company Website</p>
                                        <div className='flex items-center gap-4'>
                                            {company.website ?
                                                <>
                                                    <span className='mr-8 text-green-600 font-semibold'>Verified</span>
                                                    <span className="text-white bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-500 shadow-md shadow-yellow-500/50  font-bold rounded-full text-md px-4 py-2 text-center">25 Points</span>
                                                </> :
                                                <>
                                                    <Link to='/viewProfile' className='primary-btn'>ADD</Link>
                                                    <span className="bg-slate-300 font-bold rounded-full text-sm px-4 py-2">25 Points</span>
                                                </>
                                            }
                                        </div>
                                    </div>
                                    <div className='flex justify-between items-center mb-8'>
                                        <p className='text-lg font-semibold'>Company Linkedin</p>
                                        <div className='flex items-center gap-4'>
                                            {company.linkedin ?
                                                <>
                                                    <span className='mr-8 text-green-600 font-semibold'>Verified</span>
                                                    <span className="text-white bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-500 shadow-md shadow-yellow-500/50  font-bold rounded-full text-md px-4 py-2 text-center">25 Points</span>
                                                </> :
                                                <>
                                                    <Link to='/viewProfile' className='primary-btn'>ADD</Link>
                                                    <span className="bg-slate-300 font-bold rounded-full text-sm px-4 py-2">25 Points</span>
                                                </>
                                            }
                                        </div>
                                    </div>
                                </>
                            }
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default CompanyTrustVerification;