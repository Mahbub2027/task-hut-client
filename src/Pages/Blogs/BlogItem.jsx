import React from "react";
import { Link } from "react-router-dom";
import { format } from "timeago.js";

const BlogItem = ({ item }) => {

  const { _id, title, img, description, bloggerImg, bloggerName, createdAt } = item;


  return (
    <div className="rounded-xl bg-white h-[550px] border-2">
      <div className="w-full h-1/2">
        <img src={img} alt="" className="w-full h-full object-fill rounded-t-xl" />
      </div>
      <div className="h-1/2 rounded-b-3xl px-4 py-2 text-slate-700 flex flex-col gap-8 xl:16">
        <div>
          <small className="text-sm text-slate-400">{format(createdAt)}</small>
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="text-sm text-slate-500 line-clamp-2 mt-2">{description}</p>
        </div>
        <div className="flex flex-col xl:flex-row justify-between pb-2 space-y-2">
          <div className="flex items-center gap-2">
            <img className="w-10 h-10 rounded-full" src={bloggerImg} alt="" />
            <h3 className="font-medium">{bloggerName}</h3>
          </div>
          <Link to={`/blogs/${_id}`} className="primary-btn">Read more</Link>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
