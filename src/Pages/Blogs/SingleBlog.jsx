import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
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
  }, []);

  return (
    <>
      <div className="w-9/12 mx-auto">
        <div className="bg-slate-100 p-4">
          <img
            className="w-full h-[500px] rounded-2xl object-cover shadow-2xl"
            src={blog.img}
            alt=""
          />
          <div className="flex justify-between my-5 text-lg font-semibold font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <img className="w-10 h-10 rounded-full" src={blog.bloggerImg} alt="" />
              <h3 className="font-medium text-slate-700">{blog.bloggerName}</h3>
            </div>
            <span>{format(blog.createdAt)}</span>
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
