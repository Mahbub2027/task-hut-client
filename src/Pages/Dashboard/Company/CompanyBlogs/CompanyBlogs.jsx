import React, { useState } from "react";
import FormData from "form-data";
import axios from "axios";
import { BiSolidImageAdd } from "react-icons/bi";
import useAuth from "./../../../../hooks/useAuth";
import { MdCancel } from "react-icons/md";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";

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
      const userRes = await axiosPublic.post("/blogs", blogData);

      console.log(userRes, data);
    }
    setDescription("");
    setTitle("");
    setImage(null);
  };

  return (
    <div className="w-full h-full mx-auto bg-violet-200">
      <div className="w-7/12 h-fit  mx-auto mt-8 rounded-3xl  bg-white shadow-xl">
        <div className=" p-10 w-full gap-y-5">
          <div className="flex items-center">
            <img
              className=" w-12 h-12 rounded-full my-3 object-cover mr-2"
              src={user?.photoURL}
              alt=""
            />
            <span className="font-bold text-lg text-gray-600">Post a blog</span>
          </div>
          <div>
            <div className="flex flex-col justify-between">
              <input
                placeholder="Add Title"
                value={title}
                className=" pl-3 border-solid border-gray-300 mb-2 border-2 rounded-md bg-white w-[450px] h-12 "
                onChange={(e) => setTitle(e.target.value)}
              />
              <textarea
                placeholder="Add Description"
                value={description}
                className=" border-solid border-2 pl-3 border-gray-300  rounded-md bg-white w-[450px] h-24 "
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            {image != null ? (
              <div className="relative mt-5 rounded-lg overflow-hidden w-11/12">
                <MdCancel
                  className=" absolute bg-gray-300 h-8 w-8 z-50 shadow-lg rounded-full right-1 top-1 cursor-pointer"
                  onClick={() => setImage(null)}
                />
                <img
                  src={URL.createObjectURL(image)}
                  alt=""
                  className="object-cover w-full h-[300px]"
                />
              </div>
            ) : (
              <div className="flex mt-4">
                <label className="flex items-center mr-3 cursor-pointer">
                  <BiSolidImageAdd color="tomato" className=" mr-1" size={25} />
                  <span className="shareOptionText text-sm font-semibold">
                    Add Photo
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

            <button
              className="h-8 w-20 border-none mt-8 justify-end hover:shadow-xl text-sm rounded-md bg-green-700 font-semibold cursor-pointer text-white"
              onClick={postBlog}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyBlogs;
