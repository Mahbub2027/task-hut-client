import { Link } from "react-router-dom";
import { format } from "timeago.js";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import axios from 'axios';


const BlogItem = ({ item,items,setItems }) => {

  const { _id, title, img, description, bloggerImg, bloggerName, createdAt } = item;

//   const handleDelete = (_id) => {
//     console.log(_id);
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     }).then((result) => {
//       if (result.isConfirmed) {

//         fetch(`https://tusk-hut-server.vercel.app/blogs/${_id}`,{
//             method: 'DELETE'
//         })
//           .then((res) => res.json())
//           .then((data) => {
//             console.log(data);
//             if (data.deletedCount > 0) {
//               Swal.fire("Deleted!", 
//               "The blog has been deleted.", 
//               "success");
//             const remaining = items.filter(blog=>blog._id !== _id);
//             setItems(remaining);
//         }
//           });
//       }
//     });
//   };




const handleDelete = (_id) => {
  console.log(_id);
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      axios.delete(`https://tusk-hut-server.vercel.app/blogs/${_id}`)
        .then((response) => {
          const data = response.data;
          console.log(data);
          if (data.deletedCount > 0) {
            Swal.fire("Deleted!", "The blog has been deleted.", "success");
            const remaining = items.filter(blog => blog._id !== _id);
            setItems(remaining);
          }
        })
        .catch((error) => {
          console.error("Error deleting blog:", error);
        });
    }
  });
};



  return (
    <div className="rounded-xl bg-white h-[550px] border-2">
      <div className="w-full h-1/2">
        <img src={img} alt="" className="w-full h-full object-fill rounded-t-xl" />
      </div>
      <div className="h-1/2 rounded-b-3xl px-4 py-2 text-slate-700 flex flex-col gap-8 xl:16">
        <div>
          <div className="flex justify-between">
            <p><small className="text-sm text-slate-400">{format(createdAt)}</small></p>
            <button onClick={() => handleDelete(_id)} className="text-red-600 text-2xl"><MdDelete/></button>
          </div>
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="text-sm text-slate-500 line-clamp-2 mt-2">{description}</p>
        </div>
        <div className="flex flex-col xl:flex-row justify-between pb-2 space-y-2">
          <div className="flex items-center gap-2">
            <img className="w-10 h-10 rounded-full" src={bloggerImg} alt="" />
            <h3 className="font-medium">{bloggerName}</h3>
          </div>
          <Link to={`/blogs/${_id}`} className="primary-btn">Read more</Link>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
