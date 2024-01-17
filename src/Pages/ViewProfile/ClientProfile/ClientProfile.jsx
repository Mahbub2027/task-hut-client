import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { FaDollarSign, FaHandHoldingHeart, FaMapLocationDot, FaRegCalendarCheck, FaRegClock, FaShareNodes, FaUserTie } from 'react-icons/fa6';
import { Rating } from '@smastrom/react-rating';

const ClientProfile = () => {

    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
    const { data: users = [] } = useQuery({
        queryKey: ['users', user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/users?email=${user.email}`)
            return res.data;
        }
    })

    return (
        <div className='grid grid-cols-3 gap-4 shadow-md rounded-lg border-2 p-4'>
            <div className='col-span-1 shadow-lg rounded-md text-slate-700 p-4 relative'>
                {user?.emailVerified ?
                    <>
                        {
                            users.map(user => <div
                                key={user._id}>
                                <img className='w-full h-1/2 rounded-xl ' src={user.image} alt="" />
                            </div>
                            )
                        }
                    </> :
                    <FaUserTie className='w-full h-auto' />
                }
                <small className='bg-green-500 px-2 rounded-full border-2 border-green-300 text-white absolute top-6 right-2'>online</small>
                <p className='mt-4 flex items-center gap-3'><span className='bg-transparent border-2 border-slate-700 rounded-full p-1'><FaDollarSign className='w-3 h-3' /></span>$18 USD / hour</p>
                <p className='mt-4 flex items-center gap-3'><FaMapLocationDot className='w-6 h-6' />Sylhet Sadar, Bangladesh</p>
                <p className='mt-4 flex items-center gap-3'><FaRegClock className='w-6 h-6' />It's currently 2:13 PM here</p>
                <p className='mt-4 flex items-center gap-3'><FaRegCalendarCheck className='w-6 h-6' />Joined October 7, 2023</p>
                <p className='mt-4 flex items-center gap-3'><FaHandHoldingHeart className='w-6 h-6' />0 Recommendations</p>
            </div>
            <div className='col-span-2 text-slate-700 space-y-6'>
                <div className='flex justify-between items-start'>
                    <div>
                        <p className='text-3xl font-bold'>Sajid Abdullah<small className='text-lg italic font-medium mx-2'>@sajid21</small></p>
                        <p className='text-xl font-medium'>Web Developer(MERN Stack)</p>
                    </div>
                    <div className='flex flex-col-reverse items-end'>
                        <p>
                            <span className='text-3xl font-medium'>4.5</span>
                            <span className='text-md font-medium'>/5</span>
                        </p>
                        <Rating
                            style={{ maxWidth: 100 }}
                            value={4.5}
                            readOnly
                        />
                    </div>
                </div>
                <hr className='' />
                <div>
                    <p className='font-medium text-lg'>Summery</p>
                    <p className='text-justify'>About :: Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, velit similique necessitatibus corrupti accusamus iusto eveniet praesentium voluptatem veritatis laborum atque, qui earum at minima. Quaerat doloremque recusandae dignissimos et nisi, quibusdam quae tempore porro minima alias neque? Nulla sed eius harum provident modi voluptate reiciendis totam ut exercitationem tempore!</p>
                </div>
                <div className='flex justify-evenly bg-slate-200 py-4 rounded-lg'>
                    <p className='w-40 flex flex-col gap-1 items-center bg-white p-4 rounded-md shadow-md'>
                        <span className='text-5xl font-semibold'>0</span>
                        <span className='text-xs font-medium'>Job Completed</span>
                    </p>
                    <p className='w-40 flex flex-col gap-1 items-center bg-white p-4 rounded-md shadow-md'>
                        <span className='text-5xl font-semibold'>0</span>
                        <span className='text-xs font-medium'>Reviews</span>
                    </p>
                    <p className='w-40 flex flex-col gap-1 items-center bg-white p-4 rounded-md shadow-md'>
                        <span className='text-5xl font-semibold'>$0.00</span>
                        <span className='text-xs font-medium'>Earnings</span>
                    </p>
                </div>
                <div className='flex gap-4 items-center justify-end'>
                    <button class="inline-flex items-center justify-center overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 group-hover:from-purple-500 group-hover:to-purple-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80">

                        <span class="flex items-center gap-1 mx-1 my-1 ps-1.5 pe-3 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            <FaShareNodes />Share
                        </span>
                    </button>
                    <button type="button" className=" text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Edit Profile</button>
                </div>
            </div>
        </div>
    );
};

export default ClientProfile;