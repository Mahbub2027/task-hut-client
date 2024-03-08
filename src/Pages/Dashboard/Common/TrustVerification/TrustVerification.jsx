import React from 'react';
import useBuyer from '../../../../hooks/useBuyer';
import CompanyTrustVerification from '../../Company/CompanyTrustVerification/CompanyTrustVerification';
import EmployeeTrustVerification from '../../Users/EmployeeTrustVerification/EmployeeTrustVerification';

const TrustVerification = () => {

    const [isBuyer] = useBuyer();

    return (
        <div className='p-8'>
            <h2 className='font-bold text-2xl pb-2'>Trust & Verification</h2>
            <hr className="dark:opacity-50" />
            <div className='p-8 my-5 space-y-6 rounded-2xl bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200'>
                <p className='w-full font-medium text-2xl text-slate-600 pb-2'>What is a trust score?</p>
                <p className='text-lg text-slate-700'>The User Trust Score is at the core of how we handle verification and trust. The Trust Score is a value that indicates to what extent we have been able to verify who a user says they are. Employers and Companies who are the safest to work with are those who put in more effort to verify themselves to become highly trusted users.</p>
            </div>
            {
                isBuyer ? <CompanyTrustVerification /> : <EmployeeTrustVerification />
            }
        </div>
    );
};

export default TrustVerification;