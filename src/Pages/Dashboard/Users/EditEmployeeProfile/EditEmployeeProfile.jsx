import React, { useState } from 'react';
import { FaTriangleExclamation } from 'react-icons/fa6';

const EditEmployeeProfile = () => {
    const [isShow, setShow] = useState(false);

    return (
        <div className='p-8'>
            <h2 className='font-bold text-2xl pb-2'>Employee Profile Details</h2>
            <hr className="dark:opacity-50" />
            <div className='p-8 space-y-6'>
                <p className='w-full font-medium text-xl pb-2'>Image & Presentation</p>
                <label className='flex gap-8 justify-between'>
                    <input
                        className="basis-3/6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="file"
                        name="profileImage"
                        placeholder="Choose a professional image"
                        defaultValue={``}
                    />
                    <input
                        className="basis-3/6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="file"
                        name="presentation"
                        placeholder="Give a presentation about you and your profession"
                        defaultValue={``}
                    />
                </label>
                <p className='w-full font-medium text-xl pb-2'>Name</p>
                <label className='flex gap-8 justify-between'>
                    <input
                        className="basis-3/6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="text"
                        name="first"
                        placeholder="First Name"
                        defaultValue={``}
                    />
                    <input
                        className="basis-3/6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="text"
                        name="last"
                        placeholder="Last Name"
                        defaultValue={``}
                    />
                    <input
                        className="basis-3/6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="date"
                        name="dob"
                        placeholder="Date of birth"
                        defaultValue={`12/14/2024`}
                    />
                </label>
                <p className='w-full font-medium text-xl pb-2'>Contact info</p>
                <label className='flex gap-8 justify-between'>
                    <input
                        className="basis-3/6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="text"
                        name="phone"
                        placeholder="What's app number"
                        defaultValue={``}
                    />
                    <input
                        className="basis-3/6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="text"
                        name="facebook"
                        placeholder="Facebook account link"
                        defaultValue={``}
                    />
                    <input
                        className="basis-3/6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="text"
                        name="linkedin"
                        placeholder="Linkedin account link"
                        defaultValue={``}
                    />
                    <input
                        className="basis-3/6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="text"
                        name="instagram"
                        placeholder="Instagram account link"
                        defaultValue={``}
                    />
                </label>
                <p className='w-full font-medium text-xl pb-4'>Address</p>
                <label>
                    <input
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="text"
                        name="address"
                        placeholder="Address"
                        defaultValue={``}
                    />
                </label>
                <label className='flex justify-between pb-4'>
                    <input
                        className="basis-1/6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="text"
                        name="city"
                        placeholder="City"
                        defaultValue={``}
                    />
                    <input
                        className="basis-1/6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="text"
                        name="zip"
                        placeholder="ZIP"
                        defaultValue={``}
                    />
                    <input
                        className="basis-1/6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="text"
                        name="country"
                        placeholder="Country"
                        defaultValue={``}
                    />
                    <input
                        className="basis-2/6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="text"
                        name="time-zone"
                        placeholder="Time Zone"
                        defaultValue={``}
                    />
                </label>
                <hr className="dark:opacity-25" />
                <p className='w-full font-medium text-xl my-8'>Update Email</p>
                <label className='flex gap-8 items-center justify-between my-4 pb-4'>
                    <input
                        className="basis-1/3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="email"
                        name="email"
                        placeholder="Email"
                        defaultValue={``}
                    />
                    <input
                        className="basis-1/3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="password"
                        name="password"
                        placeholder="Password"
                        defaultValue={``}
                    />
                    <button type="" className="basis-1/3 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Update Your Email</button>
                </label>
                <p className='w-full font-medium text-xl pb-2'>Change Password</p>
                <div className='flex gap-8 justify-between'>
                    <label htmlFor="" className='basis-3/6 relative'>
                        <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type={isShow ? 'text' : 'password'}
                            name="old-password"
                            placeholder="Old Password"
                            defaultValue={``}
                        />
                        <span className='text-xs text-red-600 flex items-center gap-2 py-2'><FaTriangleExclamation />error message</span>
                        <button onClick={() => setShow(!isShow)} className='text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-2 py-1 text-center absolute right-2 top-2'>{isShow ? 'hide' : 'show'}</button>
                    </label>
                    <label htmlFor="" className='basis-3/6 relative'>
                        <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text"
                            name="new-password"
                            placeholder="New Password"
                            defaultValue={``}
                        />
                        <span className='text-xs text-red-600 flex items-center gap-2 py-2'><FaTriangleExclamation />error message</span>
                    </label>
                    <label htmlFor="" className='basis-3/6 relative'>
                        <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text"
                            name="confirm-password"
                            placeholder="Confirm Password"
                            defaultValue={``}
                        />
                        <span className='text-xs text-red-600 flex items-center gap-2 py-2'><FaTriangleExclamation />error message</span>
                    </label>
                </div>
                <hr className="dark:opacity-25" />
                <p className='w-full font-medium text-xl pb-2'>Developer info</p>
                <label className='w-full flex flex-wrap gap-10'>
                    <input
                        className="basis-3/12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="text"
                        name="profession"
                        placeholder="Profession"
                        defaultValue={``}
                    />
                    <input
                        className="basis-3/12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="number"
                        name="experience-years"
                        placeholder="Years of experience"
                        defaultValue={``}
                    />
                    <input
                        className="basis-3/12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="text"
                        name="workPreference"
                        placeholder="On-site | Remote"
                        defaultValue={``}
                    />
                    <input
                        className="basis-5/12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="text"
                        name="cv"
                        placeholder="CV"
                        defaultValue={``}
                    />
                    <input
                        className="basis-5/12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="text"
                        name="resume"
                        placeholder="Resume"
                        defaultValue={``}
                    />
                    <input
                        className="basis-5/12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="text"
                        name="portfolio"
                        placeholder="Portfolio link"
                        defaultValue={``}
                    />
                    <input
                        className="basis-5/12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="text"
                        name="github"
                        placeholder="Github profile link"
                        defaultValue={``}
                    />
                    <input
                        className="basis-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="text"
                        name="skills"
                        placeholder="Add your skills"
                        defaultValue={``}
                    />
                    <input
                        className="basis-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="textarea"
                        name="description"
                        placeholder="Describe your profession"
                        defaultValue={``}
                    />
                </label>
                <hr className="dark:opacity-25" />
                <p className='w-full font-medium text-xl my-8 pb-4'>Select Website Browsing Language</p>
                <label>
                    <input
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="select"
                        name="language"
                        placeholder="Choose Language"
                        defaultValue={``}
                    />
                </label>
            </div>
            <hr className="mb-8 dark:opacity-25" />
            <div className='text-end'>
                <button type="button" className=" text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Save Changes</button>
            </div>
        </div>
    );
};

export default EditEmployeeProfile;