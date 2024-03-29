import React, { useEffect, useState } from "react";
import BlogItem from "./BlogItem";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { FaBloggerB } from "react-icons/fa";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await axiosPublic.get("/blogs");
      setBlogs(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };
    fetchBlogs();
  }, [axiosPublic]);

  return (
    <div className="mb-20">
      <div className='relative px-10 text-white space-y-4 w-full mx-auto mb-10 py-20 bg-gradient-to-br from-sky-400 via-sky-500 to-sky-600'>
        <h2 className='text-3xl lg:text-5xl font-extrabold'>Company Blogs</h2>
        <p className='text-slate-50 text-lg lg:text-2xl font-medium'>Explore a Wealth of Knowledge, Trends, and Stories from the Corporate World</p>
        <div className="absolute top-8 right-32">
          <div className="relative animate-bounce">
            <FaBloggerB className="w-28 h-28 text-white/70" />
            <FaBloggerB className="w-28 h-28 text-white/20 rotate-6 absolute top-5 left-5" />
          </div>
        </div>
      </div>
      <div className="w-9/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-x-5 lg:gap-y-16 bg-white">
        {blogs.map((p) => (
          <BlogItem key={p._id} item={p} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
