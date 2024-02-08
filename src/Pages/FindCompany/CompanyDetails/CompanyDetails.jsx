import { FaLocationDot } from "react-icons/fa6";
import { useLoaderData } from "react-router-dom";

const CompanyDetails = () => {
    const { company_logo, company_name, about, cover_img, company_size, founded_in, phone, 
        email, linkedin,github, website, location, city, country } = useLoaderData();

    return (
        <div className="w-11/12 mx-auto my-10 space-y-2">
            <p><img src={company_logo} alt="" /></p>
            <h2 className="text-3xl font-bold">{company_name}</h2>
            <div className="flex items-center gap-2">
                <FaLocationDot></FaLocationDot>
                <p>{location}</p>
                <p>{city}</p>
                <p>{country}</p>
            </div>
            <p><span className="font-bold">About</span> {about}</p>
            <p><span className="font-bold">Company size</span> {company_size}</p>
            <p><span className="font-bold">Founded</span> {founded_in}</p>
            <p><span className="font-bold">Phone</span> {phone}</p>
            <p><span className="font-bold">Email</span> {email}</p>
            <p><span className="font-bold">Linkedin</span> {linkedin}</p>
            <p><span className="font-bold">Github</span> {github}</p>
            <p><span className="font-bold">Website</span> {website}</p>
            
        </div>
    );
};

export default CompanyDetails;