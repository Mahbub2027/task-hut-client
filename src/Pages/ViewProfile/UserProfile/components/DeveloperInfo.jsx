import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone, FaVoicemail, FaWeibo } from 'react-icons/fa6';
import { ImProfile } from "react-icons/im";

const DeveloperInfo = ({ email, number, linkedin, github, resume}) => {

    return (
        <div className='border-2 rounded-3xl p-4 h-full'>
            <h2 className='font-bold text-2xl text-start pb-2'>Developer Info</h2>
            <hr className="my-3 dark:opacity-50" />
            <div className='space-y-3 p-2'>
                <p className='flex items-center flex-wrap gap-3 hover:underline hover:text-indigo-600'><FaEnvelope className='w-4 h-4 lg:w-6 lg:h-6 text-slate-600'/>{email}</p>
                <p className='flex items-center flex-wrap gap-3 hover:underline hover:text-indigo-600'><FaPhone className='w-4 h-4 lg:w-6 lg:h-6 text-slate-600'/>{number}</p>
                <p className='flex items-center flex-wrap gap-3 hover:underline hover:text-indigo-600'><FaLinkedin className='w-4 h-4 lg:w-6 lg:h-6 text-slate-600'/><a className='text-wrap' href={linkedin}>{linkedin}</a></p>
                <p className='flex items-center flex-wrap gap-3 hover:underline hover:text-indigo-600'><FaGithub className='w-4 h-4 lg:w-6 lg:h-6 text-slate-600'/><a className='text-wrap' href={github}>{github}</a></p>
                <p className='flex items-center flex-wrap gap-3 hover:underline hover:text-indigo-600'><ImProfile  className='w-4 h-4 lg:w-6 lg:h-6 text-slate-600'/><a className='text-wrap' href={resume}>{resume}</a></p>
            </div>
        </div>
    );
};

export default DeveloperInfo;