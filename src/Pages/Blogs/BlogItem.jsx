import React from "react";
import { NavLink } from "react-router-dom";

const BlogItem = ({item}) => {

  const id = item?._id;
  let shortDesc;
  if (item.description) {
    shortDesc =
      item?.description.length > 150 ? item?.description.substr(0, 150) + "..." : item?.description;
  }
  console.log("id: " + id);

  return (
    <div className="card glass rounded-3xl shadow-2xl ">
      <figure>
        <img src={item?.img} alt="" className="max-h-48 w-full object-cover" />
      </figure>
      <div className="card-body bg-stone-200 rounded-b-3xl ">
        <h2 className="card-title text-gray-800">{item?.title}</h2>
        <p className="text-sm text-slate-600">{shortDesc}</p>
        <div className="card-actions justify-end">
          <NavLink to={`/blogs/${id}`}>
            {" "}
            <button className="border-white border-solid  border-2 text-gray-700 font-semibold bg-orange-50 rounded-3xl w-24 h-10 hover:bg-stone-300">
              View
            </button>{" "}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
