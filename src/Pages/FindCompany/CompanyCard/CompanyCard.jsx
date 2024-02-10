import React from 'react';
import { Link } from 'react-router-dom';

const CompanyCard = ({ company }) => {
    const {_id, company_name, company_logo, email, about } = company;

    return (
        <div className=' border rounded-lg gap-10 p-5 shadow-lg'>
            <Link to={`/companyDetails/${_id}`}><p><img className=' h-24 rounded-lg' src={company_logo} alt="" /></p></Link>
            <h2 className='text-xl font-bold'>{company_name}</h2>
            {
                about.length > 200 ? <p>{about.slice(0,150)}</p>  :
                <p>{about}</p>
            }
        </div>
    );
};

export default CompanyCard;