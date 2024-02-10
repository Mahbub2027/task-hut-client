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
    <div className="w-full bg-stone-200">
      <div className="w-9/12 mx-auto">
        <div className="p-20 lg:p-20 lg:pr-0">
          <img
            className="w-full h-[500px] rounded-2xl object-cover shadow-2xl"
            src={blog.img}
            alt=""
          />
          <h1 className="text-center mt-10 text-gray-800 font-semibold mb-5 text-3xl ">{blog.title}</h1>
          <div className="flex justify-between mb-5 text-lg font-semibold font-mono text-violet-500">
            <span>
              Author:
              <b className="ml-1">
                <Link className="link" to="/profile?username=mahfuzuser">
                  {blog.bloggerName}
                </Link>
              </b>
            </span>
            <span>{format(blog.createdAt)}</span>
          </div>
          <p className="text-lg first-letter:text-2xl first-letter:font-bold text-stone-600">
            {blog.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
