import { Rating } from '@smastrom/react-rating';
import React from 'react';

const ReviewCard = ({ reviews }) => {

    const { review, rating, ratingMessage, date, name, image } = reviews;

    return (
        <div className="group flex max-w-xl flex-col items-center justify-center shadow shadow-indigo-200 rounded-xl bg-white p-4 hover:bg-indigo-500 transition-all ease-out delay-0 duration-500">
            <div className="p-4">
                <p className="text-md text-center leading-6 text-slate-700 group-hover:text-white font-medium">"{review}"</p>
            </div>
            <div className="flex gap-2">
                <Rating
                    style={{ maxWidth: 96 }}
                    value={rating}
                    readOnly
                />
                <p className="text-slate-700 group-hover:text-white">{ratingMessage}</p>
            </div>
            <p className="text-slate-400">---</p>
            <p className="text-slate-700 group-hover:text-white">{date}</p>
            <p className="lg:text-start font-semibold text-slate-700 group-hover:text-white">{name}</p>
            <img src={image} alt="" className="my-1 h-8 w-8 rounded-full bg-gray-50 border-2 border-indigo-800" />
        </div>
    );
};

export default ReviewCard;