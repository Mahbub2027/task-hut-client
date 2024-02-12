import React, { useEffect, useState } from "react";
import BlogItem from "./BlogItem";
import useAxiosPublic from "../../hooks/useAxiosPublic";

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
  }, []);

  return (
    <div className="mb-20">
      <div className='text-center text-white space-y-4 w-full mx-auto mb-10 py-20 bg-indigo-500'>
        <h2 className='text-5xl font-extrabold'>Company Blogs</h2>
        {/* <p className='text-slate-500 text-2xl font-medium'>Apply for new <span className='bg-yellow-300 p-1'>Career</span> by searching through <span className='bg-yellow-300 p-1'>110 Jobs</span></p> */}
      </div>
      <div className="w-9/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 bg-white">
        {blogs.map((p) => (
          <BlogItem key={p._id} item={p} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
