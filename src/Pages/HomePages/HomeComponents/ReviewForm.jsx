import { Rating } from '@smastrom/react-rating';
import React, { useContext, useState } from 'react';
import { FaArrowRotateLeft } from "react-icons/fa6";
import { AuthContext } from '../../../provider/AuthProvider';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const ReviewForm = () => {

    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    // console.log(user)
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

    const handleOnSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;

        if (!user) {
            Swal.fire({
                position: "center",
                icon: "info",
                title: "Please register yourself first.",
                showConfirmButton: false,
                timer: 2000
            });
            setRating(0);
            form.reset();
            return;
        }


        const review = form.review.value;
        const ratingMessage = getRating(rating);
        const date = new Date().toDateString();
        const name = user.displayname;
        const image = user.photoURL;
        const reviewData = { review, rating, ratingMessage, date, name, image }

        const reviews = await axiosPublic.post("/reviews", reviewData);
        // console.log(jobRes, data)
        if (reviews.data.insertedId) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Your review has been saved.",
                text: "You can now see your review in the reviews section or reviews page.",
                showConfirmButton: false,
                timer: 2000
            });
            // navigate('/findJobs')
        }
        // .then(res => res.json())
        // .then(data => {
        //     if (data.acknowledged) {
        //         Swal.fire({
        //             position: "center",
        //             icon: "success",
        //             title: "Your review has been saved.",
        //             text: "You can now see your review in the reviews section or reviews page.",
        //             showConfirmButton: false,
        //             timer: 2000
        //         });
        //     }
        // })

        // console.log(review)
        setRating(0);
        form.reset();
    }

    return (
        <div className='bg-indigo-500 space-y-10 lg:space-y-20 py-20'>
            <div className='text-center space-y-4 w-full mx-auto text-white'>
                <h2 className='text-3xl md:text-5xl font-extrabold'>Share Your Thoughts With Us!</h2>
                <p className='text-lg md:text-2xl font-medium'>Elevate Your <span className='bg-yellow-500 p-1'>Experience:</span> Unleash the Power of Your <span className='bg-yellow-500 p-1'>Opinions.</span></p>
            </div>
            <div className='mx-auto text-center w-3/4 md:w-2/3'>
                <form className='space-y-8' onSubmit={handleOnSubmit} >
                    <textarea required className='text-lg outline-none w-full rounded-2xl focus:shadow-md focus:shadow-indigo-700 p-4 text-slate-700 ' name="review" id="" cols="60" rows="8" placeholder='Your experience/opinions here...'></textarea>
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
                        <p className='text-lg md:text-2xl font-medium py-4 '>You rated: {`${getRating(rating)}`}</p>
                    </div>
                    <div className="my-10 flex justify-center">
                        <input className="tracking-widest text-xs lg:text-sm flex items-center gap-2 text-indigo-800 uppercase bg-gradient-to-r from-white via-indigo-100 to-white bg-[length:200%] hover:bg-right focus:ring-4 focus:outline-none focus:ring-indigo-300 shadow-lg shadow-indigo-50/30 font-medium rounded-full px-5 py-2.5 text-center transition-all ease-in-out delay-150 duration-500" type='submit' />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ReviewForm;