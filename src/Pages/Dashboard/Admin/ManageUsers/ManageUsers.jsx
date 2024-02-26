import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import {FaTrashCan } from "react-icons/fa6";

const ManageUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { refetch, data: users = [] } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })

    console.log(users);
    
    const handleMakeAdmin = use => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to make admin",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, make it!"
        }).then((result) => {

            if (result.isConfirmed) {
                axiosSecure.patch(`/users/admin/${use._id}`)
                    .then(res => {
                        console.log(res.data)

                        if (res.data.modifiedCount > 0) {
                            refetch();
                            Swal.fire({
                                position: 'center',
                                icon: "success",
                                text: `${use.name} is admin now`,
                                showConfirmButton: false,
                                timer: 1500,
                            });
                        }
                    })


            }
        });
    }

    const handleDeleteUser = use =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete this",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {

            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${use._id}`)
                    .then(res => {
                        console.log(res.data)

                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                position: 'center',
                                icon: "success",
                                text: `${use.name} is delete now`,
                                showConfirmButton: false,
                                timer: 1500,
                            });
                        }
                    })


            }
        });
    }

    return (
        <div className="w-11/12 mx-auto my-8">
            <div className="overflow-x-auto">
                <h2 className="text-2xl font-bold text-center my-8">Total Users: {users.length}</h2>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((use, index) => <tr key={use._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <img className="w-10 h-10 rounded-full" src={use.image} alt="" />
                                </td>
                                <td>
                                    {use.name}
                                </td>
                                <td>{use.email}</td>
                                <td className="capitalize ">
                                    {use?.role ? <p className="font-bold">{use.role}</p> : <p>User</p>}
                                </td>
                                <td>
                                    {
                                        (use?.role === 'admin' || use?.role === 'buyer') ? <>
                                            <button disabled onClick={() => handleMakeAdmin(use)} className="btn btn-ghost btn-md">Make Admin</button>
                                        </> :
                                            <>
                                                <button onClick={() => handleMakeAdmin(use)} className="btn btn-ghost btn-md">Make Admin</button>
                                            </>
                                    }
                                </td>
                                <td>
                                    <button  onClick={()=> handleDeleteUser(use)}
                                    className="bg-red-500 text-white text-xl p-2 rounded-lg"
                                    > <FaTrashCan></FaTrashCan></button>
                                </td>
                            </tr>)
                        }


                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageUsers;