import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard/ReviewCard';

const AllReviews = () => {

    const [reviewData, setReviewData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000')
            .then(res => res.json())
            .then(data => setReviewData(data))
    }, [reviewData]);

    return (
        <div className='mx-auto py-10'>
            <div className='text-center space-y-4 w-2/3 mx-auto mb-20'>
                <h2 className='text-slate-700 text-5xl font-extrabold'>Insights and Delights</h2>
                <p className='text-slate-500 text-2xl font-medium'>Discover the real impact of our platform through the users.</p>
            </div>
            <div className='mx-auto grid grid-cols-1 gap-10 md:grid-cols-2 lg:w-9/12 lg:grid-cols-3'>
                {
                    reviewData.map(review => <ReviewCard key={review._id} reviews={review}></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default AllReviews;