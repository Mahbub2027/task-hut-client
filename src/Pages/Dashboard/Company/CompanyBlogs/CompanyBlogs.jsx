import React, { useState } from "react";
import FormData from "form-data";
import axios from "axios";
import { BiSolidImageAdd } from "react-icons/bi";
import useAuth from "./../../../../hooks/useAuth";
import { MdCancel } from "react-icons/md";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const CompanyBlogs = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  let data = new FormData();

  const postBlog = async (e) => {
    e.preventDefault();
    const image_hosting_key = import.meta.env.VITE_image_hosting_key;
    const img_upload_url = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
    data.append("image", image);

    const res = await axios.post(img_upload_url, data, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    console.log(res.data);
    console.log("image Url: " + res.data.data.display_url);
    if (res.data.success) {
      const blogData = {
        bloggerId: user.uid,
        bloggerImg: user.photoURL,
        bloggerName: user.displayName,
        title: title,
        description: description,
        img: res.data.data.display_url,
        createdAt: new Date().getTime(),
      };

      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes"
      }).then(async (result) => {
        if (result.isConfirmed) {
          const userRes = await axiosPublic.post("/blogs", blogData).then(() => {
            Swal.fire({
              title: "Posted!",
              text: "You can see your post in the blogs page.",
              icon: "success"
            });
          });
          console.log(userRes, data);
          setDescription("");
          setTitle("");
          setImage(null);
        }
      });
    }

  };

  return (
    <>
      <div className="w-2/3 h-fit mx-auto mt-8 rounded-3xl bg-indigo-50 shadow-xl">
        <div className="p-10 w-full space-y-6">
          <div className="">
            <h2 className="font-bold text-2xl text-slate-700">Post a Blog</h2>
          </div>
          <div className="w-full space-y-6">
            {image != null ? (
              <div className="relative rounded-lg overflow-hidden w-full h-1/2 mx-auto">
                <MdCancel
                  className=" absolute bg-white text-red-600 h-8 w-8 z-50 shadow-lg rounded-full right-1 top-1 cursor-pointer"
                  onClick={() => setImage(null)}
                />
                <img
                  src={URL.createObjectURL(image)}
                  alt=""
                  className="object-cover object-center w-full h-1/2"
                  required
                />
              </div>
            ) : (
              <div className="flex w-full mx-auto h-1/2 text-slate-700">
                <label className="w-full flex flex-col items-center justify-center cursor-pointer border-4 border-dashed rounded-3xl hover:border-indigo-400 transition-all ease-out delay-0 duration-500">
                  <BiSolidImageAdd className="w-1/3 h-1/2" />
                  <span className="text-lg font-semibold text-center">
                    Add Photo <br /> (1440px x 500px)
                  </span>
                  <input
                    style={{ display: "none" }}
                    type="file"
                    id="file"
                    accept=".png,.jpeg,.jpg"
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                </label>
              </div>
            )}
            <div className="flex flex-col justify-between space-y-6">
              <input
                placeholder="Add Title"
                value={title}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500 transition-all ease-out delay-0 duration-500"
                onChange={(e) => setTitle(e.target.value)}
                required
              />
              <textarea
                rows={5}
                placeholder="Add Description"
                value={description}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500 transition-all ease-out delay-0 duration-500"
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
            <button
              className="primary-btn"
              onClick={postBlog}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyBlogs;
