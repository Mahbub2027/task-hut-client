import React, { useEffect, useRef, useState } from 'react';
import CompanyCard from './CompanyCard/CompanyCard';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const AllCompanies = () => {
    const axiosPublic = useAxiosPublic();
    const searchRef = useRef();
    const [findCompany, setCompany] = useState([]);

    useEffect(() => {
        axiosPublic.get('/companies')
            .then(res => {
                setCompany(res.data);
            })
    }, [axiosPublic])

    const handleSearch = () => {
        const search = searchRef?.current?.value.toLowerCase();

        const jobFilter = findCompany.filter((item) => item.company_name.toLowerCase().includes(search));
        setCompany(jobFilter);
    }

    return (
        <div className='w-11/12 lg:w-9/12 mx-auto my-14 flex flex-row-reverse gap-8'>
            {/* <h2 className="text-4xl font-bold text-center mb-20">All Major Companies in One Place</h2> */}

            <div className='w-full lg:w-72 h-96 rounded-xl my-5 p-4 bg-slate-100'>
                <p className='font-bold text-md mb-2'>Select Category</p>
                <div className=' '>
                    <select className="select w-full max-w-xs">
                        <option disabled selected>Select category</option>
                        <option>FullTime</option>
                        <option>PartTime</option>
                        <option>Internship</option>
                    </select>
                </div>
                {/* search */}
                <p className='font-bold text-md mt-8 mb-2'>Search Company</p>
                <input ref={searchRef} defaultValue={''}
                    type="text" placeholder="Type here"
                    className="input input-bordered w-full max-w-xs" />
                <div className='mt-5 w-full'>
                    <button onClick={handleSearch} className="m-1 w-full shadow-lg border-2 border-indigo-800 rounded-lg font-medium bg-indigo-800 px-8 py-2 text-white hover:bg-indigo-500 hover:border-indigo-500 hover:text-white transition-all ease-out delay-0 duration-500">Search Company</button>
                </div>
            </div>

            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    findCompany.map(company => <CompanyCard key={company._id}
                        company={company}></CompanyCard>)
                }
            </div>
        </div>
    );
};

export default AllCompanies;