import React from 'react';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useForm } from 'react-hook-form';
import { useLoaderData, useNavigate } from 'react-router-dom';

// const image_hosting_key = import.meta.env.VITE_image_hosting_key;
// const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateCompanyProfile = () => {
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const {_id, company_name, about, company_size, founded_in, phone,
     linkedin, github, website, location,city, country} = useLoaderData();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        // console.log(data)
        // const imageFile = { image: data.image[0] }
        // const res = await axiosPublic.post(image_hosting_api, imageFile, {
        //     headers: {
        //         'content-type': 'multipart/form-data'
        //     }
        // })
        // console.log(res.data);
        // if (res.data.success) {
            const companyProfile = {
                // cover_img: res.data.data.display_url,
                company_name: data.company_name,
                about: data.about,
                company_size: data.company_size,
                founded_in: data.founded_in,
                phone: data.phone,
                // email: user?.email,
                linkedin: data.linkedin,
                github: data.github,
                website: data.website,
                location: data.location,
                city: data.city,
                country: data.country,
            }
            const result = await axiosPublic.put(`/companies/${_id}`, companyProfile)
            console.log(result, data);
            if (result.data.modifiedCount > 0) {
                reset();
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Company data Updated",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate("/viewProfile")
            }
        }
    
    return (
        <div className='w-10/12 mx-auto p-8'>
            <h2 className='font-bold text-2xl text-center pb-2'>Update Company Profile</h2>
            <hr className="dark:opacity-50" />
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='p-8 space-y-6'>
                    {/* <p className='w-full font-medium text-xl pb-2'>Company Logo & Website</p> */}
                    <div className='flex gap-3 '>
                        {/* <label className='w-1/2 space-y-2'><span className='text-xl font-semibold'>Cover photo</span>
                            <input {...register('image', { required: true })}
                                className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                type="file"
                                placeholder="Company Logo"

                            />
                            {errors.image && <span className="text-red-500">This field is required</span>}
                        </label> */}
                        <label className='w-full space-y-2'><span className='text-xl font-semibold'>Website link</span>
                            <input {...register('website', { required: true })}
                                className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500  p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                type="text" defaultValue={website}
                                placeholder="Website link"
                            />
                            {errors.website && <span className="text-red-500">This field is required</span>}
                        </label>
                    </div>
                    <p className='w-full font-medium text-xl pb-2'>Company info</p>
                    <label className='flex gap-8 justify-between'>
                        <input {...register('company_name')}
                            className="basis-3/6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text" value={company_name}
                            placeholder="Company Name"
                        />

                        <input {...register('founded_in')}
                            className="basis-3/6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

                            type="date"
                            // type="number"
                            // name="establishedDate"
                            placeholder="Established Date"
                            defaultValue={founded_in}
                        />
                    </label>
                    <label className='w-full flex flex-wrap gap-10'>
                        <input {...register('company_size')}
                            className="basis-3/12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text"
                            placeholder="Number of employees"
                            defaultValue={company_size}
                        />

                        <input {...register('github')}
                            className="basis-5/12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text" defaultValue={github}
                            placeholder="Github account link for open-source contribution"

                        />
                        <textarea {...register('about')}
                            className="basis-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="textarea" defaultValue={about}
                            placeholder="Describe company motivation/objective"

                        />
                    </label>
                    <p className='w-full font-medium text-xl pb-2'>Contact info</p>
                    <label className='flex gap-8 justify-between'>
                        <input {...register('phone')}
                            className="basis-3/6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text" defaultValue={phone}
                            placeholder="What's app number"

                        />
                        <input {...register('linkedin')}
                            className="basis-3/6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text" defaultValue={linkedin}
                            placeholder="Linkedin account link"

                        />

                    </label>
                    <p className='w-full font-medium text-xl pb-4'>Address</p>
                    <label>
                        <input {...register('location')}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text" defaultValue={location}
                            placeholder="Address"

                        />
                    </label>
                    <label className='flex gap-5 pb-4'>
                        <input {...register('city')}
                            className="basis-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text" defaultValue={city}
                            placeholder="City"

                        />

                        <input {...register('country')}
                            className="basis-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text" defaultValue={country}
                            placeholder="Country"

                        />
                    </label>
                </div>
                <hr className="mb-8 dark:opacity-25" />
                <div className='text-end'>
                    <button className="primary-btn">Update</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateCompanyProfile;