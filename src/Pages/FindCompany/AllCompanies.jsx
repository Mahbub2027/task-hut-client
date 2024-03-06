import React, { useEffect, useRef, useState } from 'react';
import CompanyCard from './CompanyCard/CompanyCard';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const AllCompanies = () => {
    const searchRef = useRef();
    const axiosPublic = useAxiosPublic();
    const [allCompany, setAllCompany] = useState([]);
    const [findCompany, setCompany] = useState([]);
    const [resetBtn, setResetBtn] = useState(false);

    useEffect(() => {
        axiosPublic.get('/companies')
            .then(res => {
                setAllCompany(res.data);
                setCompany(res.data);
            })
    }, [axiosPublic])

    const handleSearch = () => {
        setResetBtn(true);
        const search = searchRef?.current?.value.toLowerCase();

        const jobFilter = allCompany.filter((item) => item.company_name.toLowerCase().includes(search));
        setCompany(jobFilter);
    }

    const handleReset = () => {
        setCompany(allCompany);
        setResetBtn(false);
    }

    const handleKey = async (e) => {
        e.code === "Enter" && handleSearch();
    };

    return (
        <div>
            <div className='bg-gradient-to-br from-indigo-100 via-indigo-200 to-indigo-200'>
                <div className="text-center w-full md:w-2/3 mx-auto py-10 lg:mb-20 lg:pt-10 lg:pb-20">
                    <h2 className="text-indigo-800 text-3xl md:text-5xl font-extrabold">
                        Companies
                    </h2>
                    <p className="text-indigo-600 text-lg md:text-2xl font-medium leading-6 mt-4 flex items-center flex-wrap justify-center">
                        Search talented{" "}
                        <span className="bg-indigo-500 text-white p-1">professionals</span> for your
                        company by our top{" "}
                        <span className="bg-indigo-500 text-white p-1">Categories</span>
                    </p>
                    <div className="w-full md:w-2/3 lg:w-1/2 mx-auto flex flex-col md:flex-row justify-center items-center gap-4 mt-10 lg:mt-20">
                        <label className="grow input input-bordered rounded-full flex items-center gap-2">
                            <input
                                onKeyDown={handleKey}
                                ref={searchRef}
                                type="text"
                                className="grow text-sm lg:text-base"
                                placeholder="Search employee by name"
                            />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="w-4 h-4 opacity-70"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </label>
                        {resetBtn ?
                            <button onClick={handleReset} className="secondary-btn">Reset</button> :
                            <button onClick={handleSearch} className="primary-btn">Search</button>
                        }
                    </div>
                </div>
            </div>

            
            <div className='w-full my-14 lg:w-11/12 mx-auto flex flex-col lg:flex-row-reverse gap-8'>

                {/* <h2 className="text-4xl font-bold text-center mb-20">All Major Companies in One Place</h2> */}

                <div className='flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 p-4'>
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