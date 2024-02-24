import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../hooks/useAuth';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';
const image_hosting_key = import.meta.env.VITE_image_hosting_key;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const EditEmployeeProfile = () => {
    const {user} = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();

    const onSubmit = async (data) => {
        // console.log(data) 
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        // console.log(res.data);
        if(res.data.success){
            const employeeInfo = {
                name : data.name,
                employee_email: user?.email,
                date_birth : data.date_birth,
                cover_img: res.data.data.display_url,
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
        const employeeRes = await axiosPublic.post("/employees", employeeInfo)
        console.log(employeeRes, data)
        if(employeeRes.data.insertedId){
            reset();
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Profile info added Successfully",
                showConfirmButton: false,
                timer: 1500
              });
        }

        }
    }

    return (
        <div className='p-8'>
            <h2 className='font-bold text-2xl pb-2'>Employee Profile Details</h2>
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
                                defaultValue={''}
                            /> </label>
                        <label className='flex flex-col w-1/2'>
                            <p className='w-full font-medium text-xl pb-2'>Date of Birth</p>
                            <input {...register('date_birth', {required: true})}
                                className="basis-3/6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                type="date"
                                placeholder="Date of birth"
                                
                            />
                        </label>
                    </div>
                    <label className='flex flex-col w-1/2'>
                            <p className='w-full font-medium text-xl pb-2'>Cover photo</p>
                            <input {...register('image')}
                                className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                type="file" 
                                defaultValue={''}
                            /> </label>
                    <p className='w-full font-medium text-xl'>Contact info</p>
                    <label className='flex gap-8 justify-between'>
                        <input {...register('number', {required: true})}
                            className="basis-3/6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="number"
                            placeholder="What's app number"
                            defaultValue={``}
                        />
                        
                        <input {...register('linkedin', {required: true})}
                            className="basis-3/6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text"
                            placeholder="Linkedin account link"
                            defaultValue={``}
                        />
                        
                    </label>
                    <p className='w-full font-medium text-xl pb-4'>Address</p>
                    <label>
                        <input {...register('location', {required: true})}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text"
                            placeholder="area"
                            defaultValue={``}
                        />
                    </label>
                    <label className='flex gap-8 pb-4'>
                        <input {...register('city', {required: true})}
                            className="basis-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text"
                            placeholder="City"
                            defaultValue={``}
                        />
                       
                        <input {...register('country', {required: true})}
                            className="basis-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text"
                            placeholder="Country"
                            defaultValue={``}
                        />
                        
                    </label>
                    
                    {/* <hr className="dark:opacity-25" /> */}
                    <p className='w-full font-medium text-xl pb-2'>Developer info</p>
                    <label className='w-full flex  gap-8'>
                        <input {...register('profession', {required: true})}
                            className="basis-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text"
                            placeholder="Profession"
                            defaultValue={``}
                        />
                        <input {...register('experience', {required: true})}
                            className="basis-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="number"
                            placeholder="Years of experience"
                            defaultValue={``}
                        />
                    </label> 
                    <label className='w-full flex  gap-8'>
                        <select {...register("workPreference", { required: true })} 
                                className="basis-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"                                                    >
                                <option disabled selected>select category</option>
                                <option value="full time">Full time</option>
                                <option value="part time">Part time</option>
                                <option value="remote">Remote</option>
                                <option value="internship">Internship</option>
                            </select>
                    
                        <input {...register('resume')}
                            className="basis-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text"
                            placeholder="Resume"
                            defaultValue={``}
                        />
                    </label>
                     <label className='w-full flex flex-wrap gap-10'>
                        <input {...register('portfolio')}
                            className="basis-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text"
                            placeholder="Portfolio link"
                            defaultValue={``}
                        />
                        <input {...register('github')}
                            className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text"
                            placeholder="Github profile link"
                            defaultValue={``}
                        />
                        <input {...register('skills', {required: true})}
                            className="basis-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text"
                            placeholder="Add your skills"
                            defaultValue={``}
                        />
                        <textarea {...register('about', {required: true})}
                            className="basis-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="textarea"
                            placeholder="Describe yourself"
                            defaultValue={``}
                        />
                    </label>
                    
                </div>
                
                <div className='text-end'>
                    <button className=" text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Save Changes</button>
                </div>
            </form>
        </div>
    );
};

export default EditEmployeeProfile;
