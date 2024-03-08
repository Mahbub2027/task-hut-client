import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone, FaVoicemail, FaWeibo } from 'react-icons/fa6';
import { ImProfile } from "react-icons/im";

const DeveloperInfo = ({ email, number, linkedin, github, resume }) => {

    return (
        <div className='border-2 rounded-3xl p-4 h-full'>
            <h2 className='font-bold text-2xl text-start pb-2'>Developer Info</h2>
            <hr className="my-3 dark:opacity-50" />
            <div className='space-y-3 p-2'>
                <p className='flex items-center flex-wrap gap-3 hover:underline hover:text-indigo-600'><FaEnvelope className='w-4 h-4 lg:w-6 lg:h-6 text-slate-600' />{email}</p>
                <p className='flex items-center flex-wrap gap-3 hover:underline hover:text-indigo-600'><FaPhone className='w-4 h-4 lg:w-6 lg:h-6 text-slate-600' />{number}</p>
                <div className='flex items-center gap-3 hover:underline hover:text-indigo-600'>
                    <p><FaLinkedin className='w-4 h-4 lg:w-6 lg:h-6 text-slate-600' /></p>
                    <a className='overflow-x-hidden' href={linkedin} target="_blank">{linkedin}</a>
                </div>
                <div className='flex items-center gap-3 hover:underline hover:text-indigo-600'>
                    <p><FaGithub className='w-4 h-4 lg:w-6 lg:h-6 text-slate-600' /></p>
                    <a className='overflow-x-hidden' href={github} target="_blank">{github}</a>
                </div>
                <div className='flex items-center gap-3 hover:underline hover:text-indigo-600'>
                    <p><ImProfile className='w-4 h-4 lg:w-6 lg:h-6 text-slate-600' /></p>
                    <a className='overflow-x-hidden' href={resume} target="_blank">{resume}</a>
                </div>
            </div>
        </div>
    );
};

export default DeveloperInfo;