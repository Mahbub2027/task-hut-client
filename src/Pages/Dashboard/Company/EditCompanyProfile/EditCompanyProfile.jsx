import React from 'react';
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import useAuth from '../../../../hooks/useAuth';

const image_hosting_key = import.meta.env.VITE_image_hosting_key;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const EditCompanyProfile = () => {
    // const [isShow, setShow] = useState(false);
    const {user} = useAuth();
    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit, reset ,formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        console.log(data)
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        console.log(res.data);
        if (res.data.success) {
            const companyProfile = {
                company_logo: res.data.data.display_url,
                company_name: data.company_name,
                about: data.about,
                company_size: data.company_size,
                founded_in: data.founded_in,
                phone: data.phone,
                email: user?.email,
                linkedin: data.linkedin,
                github: data.github,
                website: data.website,
                location: data.location,
                city: data.city,
                country: data.country,
            }
            const result = await axiosPublic.post("/companies", companyProfile)
            console.log(result, data);
            if(result.data.insertedId){
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
            <h2 className='font-bold text-2xl pb-2'>Company Profile Details</h2>
            <hr className="dark:opacity-50" />
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='p-8 space-y-6'>
                    <p className='w-full font-medium text-xl pb-2'>Company Logo & Website</p>
                    <label className='flex gap-8 justify-between'>
                        <input {...register('image', {required: true})}
                            className="basis-3/6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="file"
                            placeholder="Company Logo"
                            
                        />
                        {errors.image && <span className="text-red-500">This field is required</span>}

                        <input {...register('website', {required: true})}
                            className="basis-3/6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text"
                            placeholder="Website link"
                        />
                        {errors.website && <span className="text-red-500">This field is required</span>}
                    </label>
                    <p className='w-full font-medium text-xl pb-2'>Company info</p>
                    <label className='flex gap-8 justify-between'>
                        <input {...register('company_name')}
                            className="basis-3/6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text"
                            placeholder="Company Name"
                        />
                        
                        <input {...register('founded_in')}
                            className="basis-3/6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="number"
                            placeholder="Established Date"
                            
                        />
                    </label>
                    <label className='w-full flex flex-wrap gap-10'>
                        <input {...register('company_size')}
                            className="basis-3/12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text"
                            placeholder="Number of employees"
                            
                        />
                       
                        <input {...register('github')}
                            className="basis-5/12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text"
                            placeholder="Github account link for open-source contribution"
                            
                        />
                        <textarea {...register('about')}
                            className="basis-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="textarea"
                            placeholder="Describe company motivation/objective"
                            
                        />
                    </label>
                    <p className='w-full font-medium text-xl pb-2'>Contact info</p>
                    <label className='flex gap-8 justify-between'>
                        <input {...register('phone')}
                            className="basis-3/6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text"
                            placeholder="What's app number"
                            
                        />
                        <input {...register('linkedin')}
                            className="basis-3/6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text"
                            placeholder="Linkedin account link"
                            
                        />
                        
                    </label>
                    <p className='w-full font-medium text-xl pb-4'>Address</p>
                    <label>
                        <input {...register('location')}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text"
                            placeholder="Address"
                            
                        />
                    </label>
                    <label className='flex gap-5 pb-4'>
                        <input {...register('city')}
                            className="basis-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text"
                            placeholder="City"
                            
                        />
                        
                        <input {...register('country')}
                            className="basis-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text"
                            placeholder="Country"
                            
                        />
                    </label>
                </div>
                <hr className="mb-8 dark:opacity-25" />
                <div className='text-end'>
                    <button className=" text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Save Changes</button>
                </div>
            </form>
        </div>
    );
};

export default EditCompanyProfile;