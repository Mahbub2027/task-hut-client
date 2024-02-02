import React from 'react';
import findEmployeeImg from '../../assets/images/employee-search.jpg';
import hiringImg from '../../assets/images/hiring.jpg';
import contactImg from '../../assets/images/contact-emplyee.png';

const Services = () => {
    return (
        <div className='flex flex-wrap gap-10 w-9/12 mx-auto my-20'>
            <div className='relative w-64 lg:w-2/12'>
                <div className='w-full h-full bg-indigo-500 rounded-3xl absolute top-0 left-0'></div>
                <div className='z-10 p-8 bg-white border shadow rounded-3xl transition ease-in-out delay-150 hover:-translate-y-5 hover:rotate-3 rotate-2 translate-x-2'>
                    <img src={findEmployeeImg} className="w-full h-32 mb-4" />
                    <h2 className='text-indigo-600 font-semibold text-xl'>Find Employee</h2>
                    <p className='text-slate-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, voluptatibus.</p>
                </div>
            </div>
            <div className='relative w-64 lg:w-2/12'>
                <div className='w-full h-full bg-indigo-500 rounded-3xl absolute top-0 left-0'></div>
                <div className='z-10 p-8 bg-white border shadow rounded-3xl transition ease-in-out delay-150 hover:-translate-y-5 hover:rotate-3 rotate-2 translate-x-2'>
                    <img src={hiringImg} className="w-full h-32 mb-4" />
                    <h2 className='text-indigo-600 font-semibold text-xl'>Post a Job</h2>
                    <p className='text-slate-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, voluptatibus.</p>
                </div>
            </div>
            <div className='relative w-64 lg:w-2/12'>
                <div className='w-full h-full bg-indigo-500 rounded-3xl absolute top-0 left-0'></div>
                <div className='z-10 p-8 bg-white border shadow rounded-3xl transition ease-in-out delay-150 hover:-translate-y-5 hover:rotate-3 rotate-2 translate-x-2'>
                    <img src={contactImg} className="w-full h-32 mb-4" />
                    <h2 className='text-indigo-600 font-semibold text-xl'>Message</h2>
                    <p className='text-slate-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, voluptatibus.</p>
                </div>
            </div>
            <div className='relative w-64 lg:w-2/12'>
                <div className='w-full h-full bg-indigo-500 rounded-3xl absolute top-0 left-0'></div>
                <div className='z-10 p-8 bg-white border shadow rounded-3xl transition ease-in-out delay-150 hover:-translate-y-5 hover:rotate-3 rotate-2 translate-x-2'>
                    <img src={findEmployeeImg} className="w-full h-32 mb-4" />
                    <h2 className='text-indigo-600 font-semibold text-xl'>Post a Job</h2>
                    <p className='text-slate-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, voluptatibus.</p>
                </div>
            </div>
            <div className='relative w-64 lg:w-2/12'>
                <div className='w-full h-full bg-indigo-500 rounded-3xl absolute top-0 left-0'></div>
                <div className='z-10 p-8 bg-white border shadow rounded-3xl transition ease-in-out delay-150 hover:-translate-y-5 hover:rotate-3 rotate-2 translate-x-2'>
                    <img src={findEmployeeImg} className="w-full h-32 mb-4" />
                    <h2 className='text-indigo-600 font-semibold text-xl'>Post a Job</h2>
                    <p className='text-slate-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, voluptatibus.</p>
                </div>
            </div>
        </div>
    );
};

export default Services;