import React from 'react';
import { FaRegImages } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Portfolio = ({ url }) => {

    return (
        <div className='w-full rounded-3xl border-2 p-4 text-end'>
            <h2 className='font-bold text-2xl text-start pb-2'>Portfolio</h2>
            <hr className="my-6 dark:opacity-50" />
            <div className='rounded-xl border'>
                <iframe className='rounded-xl w-full' src={url} height="600px" frameborder="0" allowfullscreen></iframe>
            </div>
            <hr className="my-6 dark:opacity-50" />
            <button type="button" className="primary-btn"><Link to={url} target='_blank'>Goto New Tab</Link></button>
        </div>
    );
};

export default Portfolio;