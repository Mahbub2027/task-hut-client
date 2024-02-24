import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard/ReviewCard';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const AllReviews = () => {

    const [reviewData, setReviewData] = useState([]);
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        axiosPublic.get('/reviews')
            // .then(res => res.json())
            .then(reviewInfo => setReviewData(reviewInfo.data))
    }, [axiosPublic]);

    return (
        <div className='mx-auto py-10'>
            <div className='text-center space-y-4 w-2/3 mx-auto mb-20'>
                <h2 className='text-slate-700 text-5xl font-extrabold'>Insights and Delights</h2>
                <p className='text-slate-500 text-2xl font-medium'>Discover the real impact of our platform through the users.</p>
            </div>
            <div className='mx-auto grid grid-cols-1 gap-10 md:grid-cols-2 lg:w-9/12 lg:grid-cols-3'>
                {
                    reviewData.sort((a, b) => new Date(b.date) - new Date(a.date)).map(review => <ReviewCard key={review._id} reviews={review}></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default AllReviews;