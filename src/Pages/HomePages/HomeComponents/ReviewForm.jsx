import { Rating } from '@smastrom/react-rating';
import React, { useState } from 'react';
import { FaArrowRotateLeft } from "react-icons/fa6";

const ReviewForm = () => {

    const [rating, setRating] = useState(0);
    const [hoveredRating, setHoveredRating] = useState(0);

    function getRating(rating) {
        switch (rating) {
            case 1:
                return 'Poor 😠';
            case 2:
                return 'Nothing special 😢';
            case 3:
                return 'Average 😕';
            case 4:
                return 'Very good 👍';
            case 5:
                return 'Excellent 😍';
            default:
                return 'None';
        }
    }

    const handleOnSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const review = form.review.value;
        
        console.log(review)
        setRating(0);
        form.reset();
    }

    return (
        <div className='bg-indigo-500 space-y-20 py-20'>
            <div className='text-center space-y-4 w-2/3 mx-auto text-white'>
                <h2 className='text-5xl font-extrabold'>Share Your Thoughts With Us!</h2>
                <p className='text-2xl font-medium'>Elevate Your <span className='bg-yellow-500 p-1'>Experience:</span> Unleash the Power of Your <span className='bg-yellow-500 p-1'>Opinions.</span></p>
            </div>
            <div className='mx-auto text-center w-2/3 md:w-1/2 lg:w-1/3'>
                <form className='space-y-8' onSubmit={handleOnSubmit} >
                    <textarea className='outline-none w-full rounded-2xl focus:shadow-md focus:shadow-indigo-700 p-4 text-slate-700 ' name="review" id="" cols="60" rows="8" placeholder='Your experience/opinions here...'></textarea>
                    <div className='text-white'>
                        <div className='flex items-center justify-center gap-4'>
                            <div className='tooltip' data-tip={`${getRating(hoveredRating)}`}>
                                <Rating
                                    style={{ maxWidth: 200 }}
                                    value={rating}
                                    onChange={setRating}
                                    onHoverChange={setHoveredRating}
                                    isRequired
                                />
                            </div>
                            <div className='tooltip text-xl' data-tip='Reset rating' onClick={() => setRating(0)}>
                                <FaArrowRotateLeft />
                            </div>
                        </div>
                        <p className='text-md font-medium py-4'>You rated: {`${getRating(rating)}`}</p>
                    </div>
                    <div className="my-10 flex justify-center">
                        <input className="flex items-center gap-2 m-1 shadow-lg border-2 border-slate-50 rounded-lg font-medium bg-slate-100 px-8 py-2 hover:bg-white hover:scale-105 text-indigo-500 transition-all ease-out delay-0 duration-500" type='submit' />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ReviewForm;