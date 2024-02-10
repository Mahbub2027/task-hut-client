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
    <div className=" w-10/12 mx-auto h-fit grid grid-cols-3  gap-5 gap-y-12 bg-white pb-10 pl-10">
      {blogs.map((p) => (
        <BlogItem key={p._id} item={p} />
      ))}
    </div>
  );
};

export default Blogs;
