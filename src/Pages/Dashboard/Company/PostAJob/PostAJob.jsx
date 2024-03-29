import React from 'react';
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import useAuth from '../../../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

// const image_hosting_key = import.meta.env.VITE_image_hosting_key;
// const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const PostAJob = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();
    const navigate = useNavigate();


    const onSubmit = async (data) => {
        console.log(data)
        // image upload imgBB
        // const imageFile = { image: data.image[0] }
        // const res = await axiosPublic.post(image_hosting_api, imageFile, {
        //     headers: {
        //         'content-type': 'multipart/form-data'
        //     }
        // })
        // // console.log(res.data);
        // if (res.data.success) {
        const jobDetails = {
            company_name: data.company_name,
            // company_logo: res.data.data.display_url,
            job_title: data.job_title,
            company_email: data.email,
            area: data.area,
            city: data.city,
            country: data.country,
            category: data.category,
            job_type: data.job_type,
            publish_date: data.publish_date,
            deadline_date: data.deadline_date,
            experience: data.experience,
            salary_range: data.salary_range,
            apply_role: "open",
            overview: data.overview,
            skills: data.skills,
            benefits: data.benefits,
            requirements: data.requirements,
            responsibilities: data.responsibilities,
        }
        const jobRes = await axiosPublic.post("/jobs", jobDetails);
        // console.log(jobRes, data)
        if (jobRes.data.insertedId) {
            reset();
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Job posted Successfully",
                showConfirmButton: false,
                timer: 1500
            });
            navigate('/findJobs')
        }
    }
    // }


    return (
        <div className='my-10 text-slate-700'>
            <h2 className='font-bold text-4xl pb-5 text-center'>Post A Job</h2>
            <hr className="dark:opacity-50 mb-6" />
            <div className=' space-y-6'>
                {/* <p className='w-full font-medium text-xl pb-2'>Create Post</p> */}
                <div className=''>
                    <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
                        {/* name & logo */}
                        <div className="flex flex-row items-center gap-5">
                            <div className="w-full form-control">
                                <label className="label">
                                    <span className="text-slate-500 font-medium text-base">Company Name</span>
                                </label>
                                <input type="text" {...register("company_name", { required: true })}
                                    placeholder="Enter company name"
                                    // value={user?.displayName}
                                    className="basis-3/6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                {errors.company_name && <span className="text-red-500">This field is required</span>}
                            </div>
                            {/* <div className="form-control w-full">
                                <label className="label">
                                    <span className="text-slate-500 font-medium text-base">Company logo</span>
                                </label>
                                <input {...register('image', { required: true })} type="file"
                                    className="file-input file-input-bordered my-1 " />
                                {errors.image && <span className="text-red-500">This field is required</span>}
                            </div> */}
                        </div>
                        {/* email &  job title */}
                        <div className="form-control">
                            <label className="label">
                                <span className="text-slate-500 font-medium text-base">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} value={user?.email}
                                placeholder="email" className="basis-3/6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            {errors.email && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-slate-500 font-medium text-base">Job Title</span>
                            </label>
                            <input type="text" {...register("job_title", { required: true })} placeholder="Enter job title" className="basis-3/6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            {errors.job_title && <span className="text-red-500">This field is required</span>}
                        </div>
                        {/* location */}
                        <div className="form-control">
                            <label className="label">
                                <span className="text-slate-500 font-medium text-base">Company Location</span>
                            </label>
                            <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
                                <input type="text" {...register("area", { required: true })} placeholder="area" className="basis-3/6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                {errors.area && <span className="text-red-500">This field is required</span>}
                                <input type="text" {...register("city", { required: true })} placeholder="city" className="basis-3/6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                {errors.city && <span className="text-red-500">This field is required</span>}
                                <input type="text" {...register("country", { required: true })} placeholder="country" className="basis-3/6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                {errors.country && <span className="text-red-500">This field is required</span>}

                            </div>
                        </div>
                        {/* category & type */}
                        <div className="flex items-center gap-5">
                            <div className="w-full form-control ">
                                <label className="label">
                                    <span className="text-slate-500 font-medium text-base">Job Category</span>
                                </label>
                                <select {...register("category", { required: true })} className='border-2 p-2 rounded-lg'>
                                    <option disabled selected>select category</option>
                                    <option value="full time">Full time</option>
                                    <option value="part time">Part time</option>
                                    <option value="internship">Internship</option>
                                </select>
                                {/* {errors.name && <span className="text-red-500">This field is required</span>} */}
                            </div>
                            <div className="w-full form-control">
                                <label className="label">
                                    <span className="text-slate-500 font-medium text-base">Job Type</span>
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
                                    <span className="text-slate-500 font-medium text-base">Experience</span>
                                </label>
                                <input type="text" {...register("experience")}
                                    placeholder="eg: Entry level/Expert" className="basis-3/6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                {/* {errors.name && <span className="text-red-500">This field is required</span>} */}
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="text-slate-500 font-medium text-base">Salary</span>
                                </label>
                                <input type="text" {...register("salary_range", { required: true })}
                                    placeholder="salary_range" className="basis-3/6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                {errors.name && <span className="text-red-500">This field is required</span>}
                            </div>
                            {/* publish date */}
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="text-slate-500 font-medium text-base">Publish Date</span>
                                </label>
                                <input type="date" {...register("publish_date", { required: true })}
                                    placeholder="date" className="basis-3/6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                {errors.publish_date && <span className="text-red-500">This field is required</span>}
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="text-slate-500 font-medium text-base">Deadline Date</span>
                                </label>
                                <input type="date" {...register("deadline_date", { required: true })}
                                    placeholder="date" className="basis-3/6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                {errors.deadline_date && <span className="text-red-500">This field is required</span>}
                            </div>
                        </div>
                        {/* Overveiw */}
                        <div className="form-control">
                            <label className="label">
                                <span className="text-slate-500 font-medium text-base">Overview</span>
                            </label>
                            <textarea type="text" {...register("overview")}
                                placeholder="overview" className="basis-3/6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" rows={4}></textarea>
                            {/* {errors.name && <span className="text-red-500">This field is required</span>} */}
                        </div>
                        {/* skills */}
                        <div className="form-control">
                            <label className="label">
                                <span className="text-slate-500 font-medium text-base">Skills</span>
                            </label>
                            <textarea type="text" {...register("skills")}
                                placeholder="e.g. HTML, CSS, JS, React"
                                className="basis-3/6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" rows={4}></textarea>
                            {/* {errors.name && <span className="text-red-500">This field is required</span>} */}
                        </div>
                        {/* benefits */}
                        <div className="form-control">
                            <label className="label">
                                <span className="text-slate-500 font-medium text-base">Benefits</span>
                            </label>
                            <textarea type="text" {...register("benefits")}
                                placeholder="Benefits"
                                className="basis-3/6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" rows={4}></textarea>
                            {/* {errors.name && <span className="text-red-500">This field is required</span>} */}
                        </div>
                        {/* requirements */}
                        <div className="form-control">
                            <label className="label">
                                <span className="text-slate-500 font-medium text-base">Requirements</span>
                            </label>
                            <textarea type="text" {...register("requirements")}
                                placeholder="Requirements"
                                className="basis-3/6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" rows={4}></textarea>
                            {/* {errors.name && <span className="text-red-500">This field is required</span>} */}
                        </div>
                        {/* responsibilities, */}
                        <div className="form-control">
                            <label className="label">
                                <span className="text-slate-500 font-medium text-base">Responsibilities</span>
                            </label>
                            <textarea type="text" {...register("responsibilities")}
                                placeholder="Responsibilities"
                                className="basis-3/6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                rows={4}></textarea>
                            {/* {errors.name && <span className="text-red-500">This field is required</span>} */}
                        </div>

                        {/* <hr className="mb-8 dark:opacity-25" /> */}
                        <div className='my-10'>
                            <button
                                className="primary-btn">Post</button>
                        </div>

                    </form>
                </div>
            </div>

        </div>
    );
};

export default PostAJob;