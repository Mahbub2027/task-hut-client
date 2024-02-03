import React from 'react';

const CompanyCard = ({ use }) => {
    const { name, image, email } = use;

    return (
        <div className='w-80 border-2 gap-5 p-5'>
            <p><img className='w-24 h-24' src={image} alt="" /></p>
            <h2>{name}</h2>
            <p>{email}</p>
            {/* <div className="card bg-base-100 shadow-xl">
                <figure className=" pt-10">
                    <img src={image} alt="Shoes" className="w-24 h-24 rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="">{name}</h2>
                    <p>If a dog chews shoes whose shoes </p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default CompanyCard;