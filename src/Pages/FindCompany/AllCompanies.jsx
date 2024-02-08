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
            }
            )
    }, [axiosPublic])

    const handleSearch = () => {
        const search = searchRef?.current?.value.toLowerCase();
        console.log(search);

        const jobFilter = findCompany.filter((item) => item.company_name.toLowerCase().includes(search));
        // console.log(jobFilter);
        setCompany(jobFilter);
    }

    return (
        <div className='w-11/12  mx-auto my-14'>
            <h2 className="text-4xl font-bold text-center mb-20">All Major Companies in One Place</h2>

            <div className="flex flex-col md:flex-row-reverse gap-10">
                <div className='w-full lg:w-72 h-96 rounded-xl my-5 p-4 bg-purple-200'>

                    <p className='font-bold texl-lg mb-2'>Select Category</p>
                    <div className=' '>
                        <select className="select w-full max-w-xs">
                            <option disabled selected>Select category</option>
                            <option>FullTime</option>
                            <option>PartTime</option>
                            <option>Remote</option>
                            <option>Internship</option>
                        </select>
                    </div>
                    {/* search */}
                    <p className='font-bold texl-lg mt-8 mb-2'>Search Type</p>
                    <input ref={searchRef} defaultValue={''}
                        type="text" placeholder="Type company name"
                        className="input input-bordered w-full max-w-xs" />

                    <div className='mt-5'>
                        <button onClick={handleSearch}
                            className="w-full bg-purple-500 hover:bg-purple-700 p-2 rounded-lg font-bold text-white">Find Company</button>
                    </div>
                </div>

                <div className='flex-1 grid grid-cols-1 md:grid-cols-2 gap-5 '>
                    {
                        findCompany.map(company => <CompanyCard key={company._id} 
                            company={company}></CompanyCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllCompanies;