import { FaEnvelope, FaGithub, FaGlobe, FaLinkedin, FaLocationDot, FaPhoneVolume } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";
import coverImg from '../../../assets/images/banner 3.jpg'
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useEffect, useState } from "react";

const CompanyDetails = () => {
    // const {user} = useAuth();
    const axiosPublic = useAxiosPublic();
    const [jobs, setJobs] = useState([])
    const { company_logo, company_name, about, cover_img, company_size, founded_in, phone,
        email, linkedin, github, website, location, city, country } = useLoaderData();

    // const {data: jobs=[]} = useQuery({
    //     queryKey: ['job'],
    //     queryFn: async()=>{
    //         const res = await axiosPublic.get("/jobs");
    //         return res.data;
    //     }
    // })
    useEffect(() => {
        axiosPublic.get('/jobs')
            .then(result => {
                const jobsData = result.data.filter((item) => item.email === email);
                setJobs(jobsData);

            })

    }, [axiosPublic, email])

    return (
        <div className="w-11/12 lg:w-9/12 mx-auto my-10 ">
            <div className='w-full h-[50vh] relative group mb-20'>
                <img className='w-full h-full object-cover rounded-3xl group-hover:shadow-md' src={coverImg} alt="" />
                {/* <img className='w-full h-full object-cover rounded-3xl group-hover:shadow-md' src={cover_img} alt="" /> */}
                <h2 className="bg-slate-800/70 rounded-3xl group-hover:bg-transparent group-hover:hidden font-extrabold text-white text-7xl absolute inset-0 flex justify-center items-center transition-all ease-out delay-0 duration-5000">{company_name}</h2>
                <p className="bg-white rounded-3xl rounded-l-none border-l-8 border-8 border-transparent w-64 p-2 absolute -bottom-10 left-0">
                    <img className="h-20 w-full object-fill" src={company_logo} alt="" />
                </p>
            </div>
            <div className="flex items-center gap-4 p-4">
                <p className="tooltip font-medium text-md border rounded-full hover:text-indigo-700 hover:border-indigo-700 flex items-center gap-2 px-4 py-2 transition-all ease-out delay-0 duration-500" data-tip={phone}><FaPhoneVolume /> Phone</p>
                <p className="tooltip font-medium text-md border rounded-full hover:text-indigo-700 hover:border-indigo-700 flex items-center gap-2 px-4 py-2 transition-all ease-out delay-0 duration-500" data-tip={email}><FaEnvelope /> Email</p>
                <a href={linkedin} target='_blank' className="tooltip font-medium text-md border rounded-full hover:text-indigo-700 hover:border-indigo-700 flex items-center gap-2 px-4 py-2 transition-all ease-out delay-0 duration-500" data-tip={linkedin}><FaLinkedin /> Linkedin</a>
                <a href={github} target='_blank' className="tooltip font-medium text-md border rounded-full hover:text-indigo-700 hover:border-indigo-700 flex items-center gap-2 px-4 py-2 transition-all ease-out delay-0 duration-500" data-tip={github}><FaGithub />Github</a>
                <a href={website} target='_blank' className="tooltip font-medium text-md border rounded-full hover:text-indigo-700 hover:border-indigo-700 flex items-center gap-2 px-4 py-2 transition-all ease-out delay-0 duration-500" data-tip={website}><FaGlobe /> Website</a>
            </div>
            <div className='p-4 bg-white rounded-2xl space-y-2'>
                <h3 className='font-semibold text-2xl'>About {company_name}</h3>
                <p className='text-lg text-slate-500'>{about}</p>
            </div>
            <div className="flex gap-5 my-5 p-4">
                <p><span className="font-bold">Founded:</span> {founded_in}</p>
                <p><span className="font-bold">Company size:</span> {company_size} employees</p>
                <div className="flex items-center gap-2">
                    <FaLocationDot></FaLocationDot>
                    <p>{location}</p>
                    <p>{city}</p>
                    <p>{country}</p>
                </div>
            </div>
            <div >
                <h2 className="text-3xl font-bold mb-7">Available Jobs </h2>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        jobs.map(job =>
                            <div key={job._id}>
                                
                                <div className='relative border-2 text-slate-700 p-4 space-y-3 rounded-3xl hover:shadow-md hover:border-indigo-400 transition-all ease-out delay-0 duration-500'>
                                    {
                                        job.apply_role === 'open' ? <p className='absolute top-4 right-4 text-xs font-light text-white bg-green-600 px-2 border-2 border-green-300 rounded-full'>{job.apply_role}</p>
                                            : <p className='absolute top-4 right-4 text-xs font-light text-white bg-red-600 px-2 border-2 border-red-300 rounded-full'>{job.apply_role}</p>
                                    }
                                    <div className=''>
                                        <div className='flex gap-2 mb-2'>
                                            <p className='px-3 py-1 text-sm rounded-full bg-indigo-100 text-indigo-700'>{job.job_type}</p>
                                            <p className='px-3 py-1 text-sm rounded-full bg-indigo-100 text-indigo-700'>{job.category}</p>
                                        </div>
                                        <Link to={`/jobDetails/${job._id}`} className='tooltip tooltip-right font-bold text-2xl hover:text-indigo-700 transition-all ease-out delay-0 duration-500' data-tip='View job details'>{job.job_title}</Link>
                                        <p className='flex flex-wrap gap-1 items-center'><FaLocationDot /> {location}</p>
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <div className='space-y-1'>
                                            <h3 className='font-medium text-lg'>{job.company_name}</h3>
                                            <p className='text-sm'>{job.date} Posted</p>
                                            <p className='text-sm'>{job.date} Deadline</p>
                                        </div>
                                        <Link to={''} className='tooltip tooltip-left rounded-2xl border-2 hover:border-2 hover:border-indigo-700 hover:shadow-md transition-all ease-out delay-0 duration-500' data-tip='View company details'>
                                            <img className='w-16 h-16 rounded-2xl' src={job.company_logo} alt="" />
                                        </Link>
                                    </div>
                                </div>

                            </div>)
                    }
                </div>

            </div>
        </div>
    );
};

export default CompanyDetails;