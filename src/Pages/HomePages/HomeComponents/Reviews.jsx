import { Rating } from "@smastrom/react-rating"
import { FaArrowRightLong } from "react-icons/fa6"
import { Link } from "react-router-dom"
import ReviewCard from "../../AllReviews/ReviewCard/ReviewCard";
import { useEffect, useState } from "react";


export default function Reviews() {
    const [reviewData, setReviewData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000')
            .then(res => res.json())
            .then(data => setReviewData(data))
    }, [setReviewData]);

    return (
        <div className="py-20 sm:py-12 text-center bg-slate-200">
            <div className='text-center space-y-4 w-full md:w-2/3 mx-auto mb-20'>
                <h2 className='text-slate-700 text-3xl md:text-5xl font-extrabold'>Insights and Delights</h2>
                <p className='text-slate-500 text-lg md:text-2xl font-medium'>Discover the real impact of our platform through the users.</p>
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-10 md:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 items-center">
                    <blockquote className="text-xl italic font-semibold text-gray-900 dark:text-white">
                        <svg className="w-8 h-8 text-indigo-600 dark:text-gray-600 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                        </svg>
                        <p className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-xl md:text-4xl font-bold mt-8">Unlocking potential, forging success – where careers thrive and opportunities flourish.</p>
                        <p className="text-slate-400 text-base font-normal mt-4">- TaskHut -</p>
                    </blockquote>
                    {
                        reviewData.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0,5).map(review => <ReviewCard key={review._id} reviews={review}></ReviewCard>)
                    }
                </div>
            </div>
            <div className="my-10 flex justify-center">
                <Link to="/allReviews" className="group flex items-center gap-2 text-white uppercase bg-gradient-to-r from-indigo-400 via-indigo-700 to-indigo-600 bg-[length:200%] hover:bg-right focus:ring-4 focus:outline-none focus:ring-indigo-300 shadow-lg shadow-indigo-500/50 font-medium rounded-full px-5 py-2.5 text-center transition-all ease-in-out delay-150 duration-500">All Reviews<FaArrowRightLong className="hidden group-hover:block"/></Link>
            </div>
        </div>
    )
}
