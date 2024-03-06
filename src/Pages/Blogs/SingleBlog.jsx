import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { format } from "timeago.js";
import useAxiosPublic from "../../hooks/useAxiosPublic";

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
      <div className="w-9/12 mx-auto">
        <div className="bg-slate-100 p-4 relative">
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
          <p className="text-lg first-letter:text-2xl first-letter:font-bold text-slate-500 bg-white p-2 border-8 border-white rounded-2xl">
            {blog.description}
          </p>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
