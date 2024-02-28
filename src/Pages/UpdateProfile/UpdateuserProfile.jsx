import React from 'react';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import { useLoaderData, useNavigate } from 'react-router-dom';

// const image_hosting_key = import.meta.env.VITE_image_hosting_key;
// const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateuserProfile = () => {
    const {user} = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const {_id, name,employee_email,date_birth,cover_img,number,linkedin,location,city,country , profession ,
        experience,workPreference,resume,portfolio,github,skills,about} = useLoaderData();

    const onSubmit = async (data) => {
    // console.log(data) 
    //     const imageFile = { image: data.image[0] }
    //     const res = await axiosPublic.post(image_hosting_api, imageFile, {
    //     headers: {
    //         'content-type': 'multipart/form-data'
    //     }
    // })
    // // console.log(res.data);
    // if(res.data.success){
        const employeeInfo = {
            name : data.name,
            // employee_email: user?.email,
            date_birth : data.date_birth,
            // cover_img: res.data.data.display_url,
            number : data.number,
            linkedin : data.linkedin,
            location : data.location,
            city : data.city,
            country : data.country,
            profession : data.profession,
            experience : data.experience,
            workPreference : data.workPreference,
            resume : data.resume,
            portfolio : data.portfolio,
            github : data.github,
            skills : data.skills,
            about : data.about,
       }
    //    console.log(employeeInfo)
    const employeeRes = await axiosPublic.put(`/employees/${_id}`, employeeInfo)
    console.log(employeeRes, data)
    if(employeeRes.data.modifiedCount > 0){
        reset();
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Profile updated Successfully",
            showConfirmButton: false,
            timer: 1500
          });
          navigate('/viewProfile')
          
    }

    }
    return (
        <div className='w-10/12 mx-auto p-8'>
            <h2 className='font-bold text-2xl text-center pb-2'>Update your Profile </h2>
            <hr className="dark:opacity-50" />
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='p-8 space-y-6'>
                    <div className='flex gap-8 '>
                        <label className='flex flex-col w-1/2'>
                            <p className='w-full font-medium text-xl pb-2'>Name</p>
                            <input {...register('name', {required: true})}
                                className="basis-3/6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                type="text" 
                                placeholder=" Name"
                                value={name}
                            /> </label>
                        <label className='flex flex-col w-1/2'>
                            <p className='w-full font-medium text-xl pb-2'>Date of Birth</p>
                            <input {...register('date_birth', {required: true})}
                                className="basis-3/6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                type="date" defaultValue={date_birth}
                                placeholder="Date of birth"
                                
                            />
                        </label>
                    </div>
                    {/* <label className='flex flex-col w-1/2'>
                            <p className='w-full font-medium text-xl pb-2'>Cover photo</p>
                            <input {...register('image')}
                                className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                type="file"  
                                placeholder=''
                                // defaultValue={''}
                            /> </label> */}
                    <p className='w-full font-medium text-xl'>Contact info</p>
                    <label className='flex gap-8 justify-between'>
                        <input {...register('number', {required: true})}
                            className="basis-3/6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="tel"
                            placeholder="What's app number"
                            defaultValue={number}
                        />
                        
                        <input {...register('linkedin', {required: true})}
                            className="basis-3/6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="url"
                            placeholder="Linkedin account link"
                            defaultValue={linkedin}
                        />
                        
                    </label>
                    <p className='w-full font-medium text-xl pb-4'>Address</p>
                    <label>
                        <input {...register('location', {required: true})}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text"
                            placeholder="area"
                            defaultValue={location}
                        />
                    </label>
                    <label className='flex gap-8 pb-4'>
                        <input {...register('city', {required: true})}
                            className="basis-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text"
                            placeholder="City"
                            defaultValue={city}
                        />
                       
                        <input {...register('country', {required: true})}
                            className="basis-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text"
                            placeholder="Country"
                            defaultValue={country}
                        />
                        
                    </label>
                    
                    {/* <hr className="dark:opacity-25" /> */}
                    <p className='w-full font-medium text-xl pb-2'>Developer info</p>
                    <label className='w-full flex  gap-8'>
                        <input {...register('profession', {required: true})}
                            className="basis-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text"
                            placeholder="Profession"
                            defaultValue={profession}
                        />
                        <input {...register('experience', {required: true})}
                            className="basis-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="number"
                            placeholder="Years of experience"
                            defaultValue={experience}
                        />
                    </label> 
                    <label className='w-full flex  gap-8'>
                        <select {...register("workPreference", { required: true })}  defaultValue={workPreference}
                                className="basis-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"                                                    >
                                <option disabled selected>select category</option>
                                <option value="Full Time">Full time</option>
                                <option value="Part Time">Part time</option>
                                <option value="Internship">Internship</option>
                            </select>
                    
                        <input {...register('resume')} defaultValue={resume}
                            className="basis-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text" placeholder='resume'
                            // accept='application/pdf'
                            // defaultValue={`Resume`}
                        />
                    </label>
                     <label className='w-full flex flex-wrap gap-10'>
                        <input {...register('portfolio')}
                            className="basis-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="url"
                            placeholder="Portfolio link"
                            defaultValue={portfolio}
                        />
                        <input {...register('github')}
                            className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="url"
                            placeholder="Github profile link"
                            defaultValue={github}
                        />
                        <input {...register('skills', {required: true})}
                            className="basis-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text"
                            placeholder="Add your skills"
                            defaultValue={skills}
                        />
                        <textarea {...register('about', {required: true})}
                            className="basis-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="textarea"
                            placeholder="Describe yourself"
                            defaultValue={about}
                        />
                    </label>
                    
                </div>
                
                <div className='text-end'>
                    <button className=" text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                        Update</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateuserProfile;