import React from 'react';

const PostAJob = () => {
    return (
        <div className='p-8'>
            <h2 className='font-bold text-2xl pb-2'>Post A Job</h2>
            <hr className="dark:opacity-50" />
            <div className='p-8 space-y-6'>
                <p className='w-full font-medium text-xl pb-2'>Create Post</p>
                <div className=''>
                    <form >
                        <label className='flex gap-8 justify-between mb-8'>
                            <input
                                className="basis-3/6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                type="text"
                                name="title"
                                placeholder="Job title"
                                defaultValue={``}
                            />
                            <input
                                className="basis-3/6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                type="text"
                                name="type"
                                placeholder="On-site | Remote"
                                defaultValue={``}
                            />
                            <input
                                className="basis-3/6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                type="text"
                                name="category"
                                placeholder="Full Time | Part Time | Intern"
                                defaultValue={``}
                            />
                            <input
                                className="basis-3/6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                type="text"
                                name="experience"
                                placeholder="Freshers | Juniors | Seniors | years"
                                defaultValue={``}
                            />
                            <input
                                className="basis-3/6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                type="date"
                                name="posted"
                                placeholder=""
                                defaultValue={``}
                            />
                            <input
                                className="basis-3/6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                type="date"
                                name="deadline"
                                placeholder=""
                                defaultValue={``}
                            />
                        </label>
                        <label className='w-full flex flex-col text-slate-700 text-lg font-medium gap-4 mb-8'>
                            About The Role 
                            <textarea
                                className="basis-6/12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                type="text"
                                name="aboutTheRole"
                                placeholder="About the role"
                                defaultValue={``}
                            />
                        </label>
                        <label className='w-full flex flex-col text-slate-700 text-lg font-medium gap-4 mb-8'>
                            Job Description 
                            <textarea
                                className="basis-6/12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                type="text"
                                name="description"
                                placeholder="Describe your profession"
                                defaultValue={``}
                            />
                        </label>
                        <label className='w-full flex flex-col text-slate-700 text-lg font-medium gap-4 mb-8'>
                            Responsibilities 
                            <textarea
                                className="basis-6/12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                type="text"
                                name="responsibility"
                                placeholder="Job Responsibilities"
                                defaultValue={``}
                            />
                        </label>
                        <label className='w-full flex flex-col text-slate-700 text-lg font-medium gap-4 mb-8'>
                            Requirements 
                            <textarea
                                className="basis-6/12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                type="text"
                                name="requirements"
                                placeholder="Job Requirements"
                                defaultValue={``}
                            />
                        </label>
                        <label className='w-full flex flex-col text-slate-700 text-lg font-medium gap-4 mb-8'>
                            Benefits 
                            <textarea
                                className="basis-6/12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                type="text"
                                name="benefits"
                                placeholder="Job Benefits"
                                defaultValue={``}
                            />
                        </label>
                        <label className='w-full flex flex-col text-slate-700 text-lg font-medium gap-4 mb-8'>
                            Apply Instructions
                            <textarea
                                className="basis-6/12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                type="text"
                                name="applyInstructions"
                                placeholder="Apply Instructions"
                                defaultValue={``}
                            />
                        </label>
                        <label className='w-full'>
                            <input
                                className="basis-3/12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                type="text"
                                name="salary"
                                placeholder="Salary"
                                defaultValue={``}
                            />
                        </label>
                    </form>
                </div>
            </div>
            <hr className="mb-8 dark:opacity-25" />
            <div className='text-end'>
                <button type="button" className=" text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Create</button>
            </div>
        </div>
    );
};

export default PostAJob;