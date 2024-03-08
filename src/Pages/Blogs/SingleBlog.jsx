import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { format } from "timeago.js";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { FacebookIcon, FacebookShareButton } from "react-share";
import { FaFacebookF, FaShareNodes } from "react-icons/fa6";

const SingleBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axiosPublic.get(`/blogs/${id}`);
      console.log(res.data);
      setBlog(res.data);
    };
    fetchPosts();
  }, [axiosPublic, id]);

  return (
    <>
      <div className="w-9/12 mx-auto my-10 ">
        <div className="bg-slate-100 p-4 relative rounded-2xl">
          <img
            className="w-full h-[500px] rounded-2xl object-cover shadow-2xl"
            src={blog.img}
            alt=""
          />
          <div className="bg-slate-600/50 rounded-full text-white absolute top-5 flex gap-3 items-center my-5 text-lg font-semibold p-4 ml-3">
            <img className="w-16 h-16 rounded-full shadow-xl" src={blog.bloggerImg} alt="" />
            <div className="flex flex-col gap-2">
              <h3 className="font-medium text-2xl">{blog.bloggerName}</h3>
              <p className="text-sm italic">{format(blog.createdAt)}</p>
            </div>
          </div>
          <h1 className="text-slate-700 font-bold my-5 text-3xl">{blog.title}</h1>
          <p className="text-lg text-justify first-letter:text-2xl first-letter:font-bold text-slate-500 bg-white p-2 border-8 border-white rounded-2xl">
            {blog.description}
          </p>
        </div>
        <div className="mt-10 flex flex-row gap-5 items-center justify-end"> 
          <p className="font-bold text-xl">--- Share on </p>
        {/* <button className="inline-flex items-center justify-center overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 group-hover:from-purple-500 group-hover:to-purple-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80"> */}
          <FacebookShareButton url={window?.location?.href}>
            <FacebookIcon className="w-12 h-12 rounded-full"></FacebookIcon>
            {/* <span className="flex items-center gap-1 mx-1 my-1 ps-1.5 pe-3 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              <FaShareNodes />Share <FaFacebookF></FaFacebookF></span> */}
          </FacebookShareButton>
        {/* </button> */}
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
