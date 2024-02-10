import React from 'react';
import { Link } from 'react-router-dom';

const CompanyCard = ({ company }) => {
    const { _id, company_name, company_logo, founded_in, country, about } = company;

    // console.log(company)
    return (
        <div className='border-2 hover:border-indigo-700 hover:shadow-lg p-4 text-slate-700 space-y-3 rounded-3xl transition-all ease-out delay-0 duration-500'>
            <div className='mb-2'>
                <img className='w-auto mx-auto h-20 object-fit' src={company_logo} alt="" />
            </div>
            <h2 className='font-bold text-2xl text-indigo-700' >{company_name}</h2>
            <div className='flex gap-2'>
                <p className='text-sm border rounded-full px-2 bg-slate-200'>Founded: {founded_in}</p>
                <p className='text-sm border rounded-full px-2 bg-slate-200'>Country: {country}</p>
            </div>
            <div className='pt-2'>
                <p className='font-medium'>About</p>
                <p>{about.split(' ').slice(0,10).join(' ')}... <Link to={`/companyDetails/${_id}`} className='tooltip tooltip-right text-indigo-700 font-semibold' data-tip='View company details'>read more</Link></p>
            </div>
        </div>
    );
};

export default CompanyCard;