// import React from 'react';

import { useQuery } from "@tanstack/react-query";
// import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ManageUsers = () => {
    // const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const { refetch, data: users = [] } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })
    
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
                .then(res=>{
                    console.log(res.data)

                    if(res.data.modifiedCount > 0){
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
                                <td>
                                    {use?.role ? <p>{use.role}</p> : <p>User</p>}
                                </td>
                                <td>
                                    <button onClick={() => handleMakeAdmin(use)} className="btn btn-ghost btn-md">Make Admin</button>
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