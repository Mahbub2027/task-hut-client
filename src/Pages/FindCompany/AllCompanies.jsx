import React, { useEffect, useRef, useState } from 'react';
// import useAxiosPublic from '../../hooks/useAxiosPublic';
// import useAuth from '../../hooks/useAuth';
// import { useQuery } from '@tanstack/react-query';
import CompanyCard from './CompanyCard/CompanyCard';

const AllCompanies = () => {
    // const axiosPublic = useAxiosPublic();
    const searchRef = useRef();
    // const { user } = useAuth();

    // const { data: users = [] } = useQuery({
    //     queryKey: ['user'],
    //     queryFn: async () => {
    //         const res = await axiosPublic.get('/users')
    //         return res.data;
    //     }
    // })
    const [findCompany, setCompany] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => {
                setCompany(data)
            })
    }, [setCompany])

    const handleSearch = () => {
        const search = searchRef?.current?.value.toLowerCase();
        console.log(search);

        const jobFilter = findCompany.filter((item) => item.job_title.toLowerCase().includes(search));
        // console.log(jobFilter);
        setCompany(jobFilter);
    }

    return (
        <div className='w-11/12 flex flex-col md:flex-row mx-auto'>
            <h2>All Companies</h2>

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
                    type="text" placeholder="Type here"
                    className="input input-bordered w-full max-w-xs" />
                <div className='mt-5'>
                    <button onClick={handleSearch} className="w-full bg-purple-500 hover:bg-purple-700 p-2 rounded-lg font-bold text-white">Find Job</button>
                </div>
            </div>

            <div className='flex-1 flex flex-wrap gap-5'>
                {
                    findCompany.map(use => <div key={use._id} >
                        {
                            use.role === 'buyer' && <>
                                <CompanyCard use={use}></CompanyCard>
                            </>
                        }
                    </div>)
                }
            </div>
        </div>
    );
};

export default AllCompanies;