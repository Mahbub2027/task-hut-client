import React from 'react';

const Skills = ({ skills }) => {
    return (
        <div className='border-2 rounded-3xl p-4 h-full'>
            <h2 className='font-bold text-2xl text-start pb-2'>Skills</h2>
            <hr className="my-3 dark:opacity-50" />
            <p className='flex flex-wrap gap-1'>
                {
                    skills.split(',').map((skill, index) => <span key={index} className='font-medium text-md px-3 py-1 text-sm rounded-full bg-slate-100'>{skill}</span>)
                }
            </p>
        </div>
    );
};

export default Skills;