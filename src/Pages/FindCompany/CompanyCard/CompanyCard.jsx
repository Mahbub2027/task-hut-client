import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const CompanyCard = ({ company }) => {
    const axiosPublic = useAxiosPublic();
    const { _id, company_name, email, company_logo, founded_in, country, about } = company;

    const {data: users=[]}= useQuery({
        queryKey: ['user'],
        queryFn: async ()=>{
            const resCompany = await axiosPublic.get("/users")
            return resCompany.data;
        }
    })
    // console.log(company)
    return (
        <div className='border-2 hover:border-indigo-700 hover:shadow-lg p-4 text-slate-700 space-y-3 rounded-3xl transition-all ease-out delay-0 duration-500'>
            <div className='mb-2'>
                {
                    users.map(use => <div key={use._id}>
                        {
                            use.email === email && <>
                            <img className='w-auto mx-auto h-20 object-fit' src={use.image} alt="" />
                            </>
                        }
                    </div>)
                }
                
            </div>

            <h2 className='font-bold text-lg md:text-2xl text-indigo-700' >{company_name}</h2>
            <div className='flex flex-col md:flex-row items-start gap-2'>
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