// import { useQuery } from '@tanstack/react-query';
// import React from 'react';
// import useAxiosPublic from '../../../hooks/useAxiosPublic';

import { FaLocationDot, FaRegBookmark } from "react-icons/fa6";
import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
    const {_id, job_title,category,job_type,location, apply_role,company_name ,
        company_logo ,date,experience,salary_range,overview,requirements,skills,responsibilities} = useLoaderData();

    return (
        <div className="w-11/12 mx-auto my-10">
            <p><img className="w-24 h-24 rounded-md" src={company_logo} alt="" /></p>
            <p className="text-3xl font-bold">{job_title}</p>
            <p>by {company_name}</p>
            <p className="flex items-center gap-3"><FaLocationDot></FaLocationDot> {location}</p>
            <button className="flex items-center gap-3 text-xl"><FaRegBookmark></FaRegBookmark>Add to Bookmark</button>
            <button className="btn btn-outline">Apply now</button>
            <p>Date: {date}</p>
            <p className="capitalize">{job_type}</p>
            <p className="capitalize">{category}</p>
            <p className="text-lg font-bold">Experience </p>
            {
                experience === " " ? "N/A" : <p>{experience}</p>
            }
            <p className="text-lg font-bold">Salary</p>
            <p>{salary_range}</p>
            <p className="text-lg font-bold">Overview </p>
            <p>{overview}</p>
            <p className="text-lg font-bold">Requirements </p>
            <p>{requirements}</p>
            <p className="text-lg font-bold">Skills </p>
            <p>{skills}</p>
            <p className="text-lg font-bold">Responsibilities </p>
            <p>{responsibilities}</p>
        </div>
    );
};

export default JobDetails;