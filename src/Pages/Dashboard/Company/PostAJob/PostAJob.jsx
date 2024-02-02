import React from 'react';
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';

const image_hosting_key = import.meta.env.VITE_image_hosting_key;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const PostAJob = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const axiosPublic = useAxiosPublic();

    const onSubmit = async (data) => {
        console.log(data)
        // image upload imgBB
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        // console.log(res.data);
        if (res.data.success) {
            const jobDetails= {
                company_name: data.company_name,
                company_logo: res.data.data.display_url,
                job_title: data.job_title,
                location: data.location,
                category: data.category,
                job_type: data.job_type,
                date: data.date,
                experience: data.experience,
                salary_range: data.salary_range,
                apply_role : "open",
                overview : data.overview,
                skills : data.skills,
                requirements : data.requirements,
                responsibilities : data.responsibilities,
            }
            const jobRes = await axiosPublic.post("/jobs", jobDetails);
            // console.log(jobRes, data)
            if(jobRes.data.insertedId){
                reset();
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Job posted Successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
    }
}


return (
    <div className='p-8'>
        <h2 className='font-bold text-2xl pb-2'>Post A Job</h2>
        <hr className="dark:opacity-50" />
        <div className='p-8 space-y-6'>
            {/* <p className='w-full font-medium text-xl pb-2'>Create Post</p> */}
            <div className=''>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* name & logo */}
                    <div className="flex flex-row items-center gap-5">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-bold text-base">Company Name</span>
                            </label>
                            <input type="text" {...register("company_name", { required: true })} placeholder="Enter your name" className="input input-bordered" required />
                            {errors.name && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-bold text-base">Company logo</span>
                            </label>
                            <input {...register('image')} type="file" className="file-input file-input-bordered my-1 w-full max-w-xs" />
                            {/* <input type="text" {...register("company_logo")} placeholder="Enter your name" className="input input-bordered" required /> */}
                            {/* {errors.name && <span className="text-red-500">This field is required</span>} */}
                        </div>
                    </div>
                    {/* job title */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold text-base">Job Title</span>
                        </label>
                        <input type="text" {...register("job_title", { required: true })} placeholder="Enter your name" className="input input-bordered " required />
                        {errors.name && <span className="text-red-500">This field is required</span>}
                    </div>
                    {/* location */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold text-base">Company Location</span>
                        </label>
                        <input type="text" {...register("location", { required: true })} placeholder="Enter your name" className="input input-bordered" required />
                        {errors.name && <span className="text-red-500">This field is required</span>}
                    </div>
                    {/* category & type */}
                    <div className="flex items-center gap-5">
                        <div className="w-full form-control ">
                            <label className="label">
                                <span className="label-text font-bold text-base">Job Category</span>
                            </label>
                            <select {...register("category", { required: true })} className='border-2 p-2 rounded-lg'>
                                <option disabled selected>select category</option>
                                <option value="full time">Full time</option>
                                <option value="part time">Part time</option>
                                <option value="remote">Remote</option>
                                <option value="internship">Internship</option>
                            </select>
                            {/* {errors.name && <span className="text-red-500">This field is required</span>} */}
                        </div>
                        <div className="w-full form-control">
                            <label className="label">
                                <span className="label-text font-bold text-base">Job Type</span>
                            </label>
                            <select {...register("job_type", { required: true })} className='border-2 p-2 rounded-lg'>
                                <option disabled selected>select type</option>
                                <option value="onsite">Onsite</option>
                                <option value="remote">Remote</option>
                            </select>
                            {/* {errors.name && <span className="text-red-500">This field is required</span>} */}
                        </div>
                    </div>
                    {/* experience , salary, date */}
                    <div className="flex items-center gap-3">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-bold text-base">Experience</span>
                            </label>
                            <input type="text" {...register("experience")}
                                placeholder="Enter your name" className="input input-bordered" />
                            {/* {errors.name && <span className="text-red-500">This field is required</span>} */}
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-bold text-base">Salary</span>
                            </label>
                            <input type="text" {...register("salary_range", { required: true })}
                                placeholder="salary_range" className="input input-bordered" required />
                            {errors.name && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-bold text-base">Date</span>
                            </label>
                            <input type="date" {...register("date", { required: true })}
                                placeholder="date" className="input input-bordered" required />
                            {errors.name && <span className="text-red-500">This field is required</span>}
                        </div>
                    </div>
                    {/* Overveiw */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold text-base">Overview</span>
                        </label>
                        <input type="text" {...register("overview")}
                            placeholder="overview" className="input input-bordered" />
                        {/* {errors.name && <span className="text-red-500">This field is required</span>} */}
                    </div>
                    {/* skills */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold text-base">Skills</span>
                        </label>
                        <input type="text" {...register("skills")}
                            placeholder="e.g. HTML, CSS, JS, React etc." className="input input-bordered" />
                        {/* {errors.name && <span className="text-red-500">This field is required</span>} */}
                    </div>
                    {/* requirements */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold text-base">Requirements</span>
                        </label>
                        <input type="text" {...register("requirements")}
                            placeholder="Requirements" className="input input-bordered" />
                        {/* {errors.name && <span className="text-red-500">This field is required</span>} */}
                    </div>
                    {/* responsibilities, */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold text-base">Responsibilities</span>
                        </label>
                        <input type="text" {...register("responsibilities")}
                            placeholder="Responsibilities" className="input input-bordered" />
                        {/* {errors.name && <span className="text-red-500">This field is required</span>} */}
                    </div>

                    {/* <hr className="mb-8 dark:opacity-25" /> */}
                    <div className='my-10'>
                        <button
                            className="w-full text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-base px-5 py-3 text-center me-2 mb-2">Post</button>
                    </div>

                    {/* <label className='flex gap-8 justify-between mb-8'>
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
                        </label> */}
                </form>
            </div>
        </div>

    </div>
);
};

export default PostAJob;