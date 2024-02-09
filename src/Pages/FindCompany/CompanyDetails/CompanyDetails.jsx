import { FaEnvelope, FaGithub, FaGlobe, FaLinkedin, FaLocationDot, FaPhoneVolume } from "react-icons/fa6";
import { useLoaderData } from "react-router-dom";
import coverImg from '../../../assets/images/banner 3.jpg'

const CompanyDetails = () => {
    const { company_logo, company_name, about, cover_img, company_size, founded_in, phone,
        email, linkedin, github, website, location, city, country } = useLoaderData();

    return (
        <div className="w-11/12 lg:w-9/12 mx-auto my-10 ">
            <div className='w-full h-[50vh] relative group mb-20'>
                <img className='w-full h-full object-cover rounded-3xl group-hover:shadow-md' src={coverImg} alt="" />
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
            <div>
                <h2 className="text-3xl font-bold">Available Jobs <small className="text-xl font-normal italic">10</small></h2>
            </div>
        </div>
    );
};

export default CompanyDetails;