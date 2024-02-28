import React from 'react';
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import { useLoaderData, useNavigate } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';

const UpdateJob = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const axiosPublic = useAxiosPublic();
    const {user} = useAuth();
    const navigate = useNavigate();
    const {_id, job_title, category, job_type, company_email, area, city, country, company_name,
        publish_date, deadline_date, benefits, experience, salary_range, overview, requirements, skills, responsibilities} = useLoaderData();


    // update
    const onSubmit = async (data) => {
        console.log(data)
            const jobDetails = {

                company_name: data.company_name,
                job_title: data.job_title,
                // company_email: data.company_email,
                area: data.area,
                city: data.city,
                country: data.country,
                category: data.category,
                job_type: data.job_type,
                publish_date: data.publish_date,
                deadline_date: data.deadline_date,
                experience: data.experience,
                salary_range: data.salary_range,
                // apply_role: "open",
                overview: data.overview,
                skills: data.skills,
                benefits: data.benefits,
                requirements: data.requirements,
                responsibilities: data.responsibilities,
            }
            const jobRes = await axiosPublic.put(`/jobs/${_id}`, jobDetails);
            // console.log( jobRes, data)
            if (jobRes.data.modifiedCount > 0) {
                // reset();
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Data updated Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/dashboard/companyPosts')
            }
        }
    return (
        <div className='w-10/12 mx-auto my-10'>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
                    {/* name & logo */}

                    <div className="flex flex-row items-center gap-5">
                        <div className="w-full form-control">
                            <label className="label">
                                <span className="text-slate-500 font-medium text-base">Company Name</span>
                            </label>
                            <input type="text" {...register("company_name")}
                                placeholder="Enter company name" value={company_name}
                                className="basis-3/6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            {errors.company_name && <span className="text-red-500">This field is</span>}
                        </div>

                    </div>
                    {/* email &  job title */}
                    {/* <div className="form-control">
                            <label className="label">
                                <span className="text-slate-500 font-medium text-base">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} value={user?.email}
                                placeholder="email" className="basis-3/6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            {errors.email && <span className="text-red-500">This field is required</span>}
                        </div> */}
                    <div className="form-control">
                        <label className="label">
                            <span className="text-slate-500 font-medium text-base">Job Title</span>
                        </label>
                        <input type="text" {...register("job_title")} defaultValue={job_title} className="basis-3/6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        {errors.job_title && <span className="text-red-500">This field is</span>}
                    </div>
                    {/* location */}
                    <div className="form-control">
                        <label className="label">
                            <span className="text-slate-500 font-medium text-base">Company Location</span>
                        </label>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
                            <input type="text" {...register("area")} defaultValue={area} placeholder="area" className="basis-3/6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            {errors.area && <span className="text-red-500">This field is</span>}
                            <input type="text" {...register("city")} defaultValue={city} placeholder="city" className="basis-3/6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            {errors.city && <span className="text-red-500">This field is</span>}
                            <input type="text" {...register("country")} defaultValue={country} placeholder="country" className="basis-3/6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            {errors.country && <span className="text-red-500">This field is</span>}

                        </div>
                    </div>
                    {/* category & type */}
                    <div className="flex items-center gap-5">
                        <div className="w-full form-control ">
                            <label className="label">
                                <span className="text-slate-500 font-medium text-base">Job Category</span>
                            </label>
                            <select {...register("category")} defaultValue={category} className='border-2 p-2 rounded-lg'>
                                <option disabled selected>select category</option>
                                <option value="full time">Full time</option>
                                <option value="part time">Part time</option>
                                <option value="remote">Remote</option>
                                <option value="internship">Internship</option>
                            </select>
                            {/* {errors.name && <span className="text-red-500">This field is</span>} */}
                        </div>
                        <div className="w-full form-control">
                            <label className="label">
                                <span className="text-slate-500 font-medium text-base">Job Type</span>
                            </label>
                            <select {...register("job_type")} defaultValue={job_type} className='border-2 p-2 rounded-lg'>
                                <option disabled selected>select type</option>
                                <option value="onsite">Onsite</option>
                                <option value="remote">Remote</option>
                            </select>
                            {/* {errors.name && <span className="text-red-500">This field is</span>} */}
                        </div>
                    </div>
                    {/* experience , salary, date */}
                    <div className="flex items-center gap-3">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="text-slate-500 font-medium text-base">Experience</span>
                            </label>
                            <input type="text" {...register("experience")} defaultValue={experience}
                                placeholder="eg: Entry level/Expert" className="basis-3/6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            {/* {errors.name && <span className="text-red-500">This field is</span>} */}
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="text-slate-500 font-medium text-base">Salary</span>
                            </label>
                            <input type="text" {...register("salary_range")} defaultValue={salary_range}
                                placeholder="salary_range" className="basis-3/6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            {errors.name && <span className="text-red-500">This field is</span>}
                        </div>
                        {/* publish date */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="text-slate-500 font-medium text-base">Publish Date</span>
                            </label>
                            <input type="date" {...register("publish_date")} defaultValue={publish_date}
                                placeholder="date" className="basis-3/6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            {errors.publish_date && <span className="text-red-500">This field is</span>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="text-slate-500 font-medium text-base">Deadline Date</span>
                            </label>
                            <input type="date" {...register("deadline_date")} defaultValue={deadline_date}
                                placeholder="date" className="basis-3/6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            {errors.deadline_date && <span className="text-red-500">This field is</span>}
                        </div>
                    </div>
                    {/* Overveiw */}
                    <div className="form-control">
                        <label className="label">
                            <span className="text-slate-500 font-medium text-base">Overview</span>
                        </label>
                        <input type="text" {...register("overview")} defaultValue={overview}
                            placeholder="overview" className="basis-3/6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        {/* {errors.name && <span className="text-red-500">This field is</span>} */}
                    </div>
                    {/* skills */}
                    <div className="form-control">
                        <label className="label">
                            <span className="text-slate-500 font-medium text-base">Skills</span>
                        </label>
                        <input type="text" {...register("skills")}
                            placeholder="e.g. HTML, CSS, JS, React" defaultValue={skills}
                            className="basis-3/6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        {/* {errors.name && <span className="text-red-500">This field is</span>} */}
                    </div>
                    {/* benefits */}
                    <div className="form-control">
                        <label className="label">
                            <span className="text-slate-500 font-medium text-base">Benefits</span>
                        </label>
                        <input type="text" {...register("benefits")}
                            placeholder="Benefits" defaultValue={benefits}
                            className="basis-3/6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        {/* {errors.name && <span className="text-red-500">This field is</span>} */}
                    </div>
                    {/* requirements */}
                    <div className="form-control">
                        <label className="label">
                            <span className="text-slate-500 font-medium text-base">Requirements</span>
                        </label>
                        <input type="text" {...register("requirements")}
                            placeholder="Requirements" defaultValue={requirements}
                            className="basis-3/6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        {/* {errors.name && <span className="text-red-500">This field is</span>} */}
                    </div>
                    {/* responsibilities, */}
                    <div className="form-control">
                        <label className="label">
                            <span className="text-slate-500 font-medium text-base">Responsibilities</span>
                        </label>
                        <input type="text" {...register("responsibilities")}
                            placeholder="Responsibilities" defaultValue={responsibilities}
                            className="basis-3/6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                        {/* {errors.name && <span className="text-red-500">This field is</span>} */}
                    </div>

                    {/* <hr className="mb-8 dark:opacity-25" /> */}
                    <div className='my-10'>
                        <button className="primary-btn">update</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default UpdateJob;