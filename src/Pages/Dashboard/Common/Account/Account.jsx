import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { getAuth, deleteUser } from "firebase/auth";
import useAuth from "../../../../hooks/useAuth";
import { FaExclamationTriangle } from "react-icons/fa";

const auth = getAuth();
const user = auth.currentUser;

const Account = () => {
  // const uidToDelete = user.uid; // user uid

  const navigate = useNavigate();
  const { user } = useAuth();

  // Deactivate user
  function handleDeactivate() {
    // TODO : NULL
    const userID = user.uid;
    console.log(userID);
  }

  // Delete User

  const handleDeleteUser = () => {
    const mail = user?.email; // user uid
    console.log(uidToDelete);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete account!",
    }).then((result) => {
      if (result.isConfirmed) {
        //delete operation here

        //Delete from Firebase Authentication
        deleteUser(user)
          .then(() => {
            // User deleted.
            Swal.fire(
              "Deleted!",
              "Your account has been deleted from Authentication.",
              "success"
            );
          })
          .catch((error) => {
            console.log(error);
            // An error ocurred
            // ...
          });

        //Delete from MongoDB user collection

        fetch(`http://localhost:5000/deleteAccount/${mail}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            Swal.fire("Deleted!", "Your account has been deleted.", "success");
            console.log("Delete Confirmed.");
            navigate("/login");
          });
      }
    });
  };

  return (
    <div className="p-8">
      <h2 className="font-bold text-2xl pb-2">Delete Account</h2>
      <hr className="dark:opacity-50" />
      {/* <div className="p-8 space-y-6">
        <p className="w-full font-medium text-xl pb-2">Deactivate Account</p>
        <div className="p-6 border rounded shadow">
          <p>
            Deactivating your account will cause your profile and listings to
            disappear, and you will not receive any notifications from us. This
            can be undone later.
          </p>
          <button
            onClick={() => handleDeactivate()}
            type="button"
            className="mt-6 flex gap-2 items-center text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-full text-sm px-4 py-2 text-center"
          >
            Deactivate Account
          </button>
        </div>
      </div> */}
      <div className="p-10 flex justify-center">
        <div className="relative animate-bounce">
          <FaExclamationTriangle className="w-28 h-28 text-red-600/70" />
          <FaExclamationTriangle className="w-28 h-28 text-red-600/20 rotate-6 absolute top-5 left-5" />
        </div>
      </div>
      <div className="p-8 space-y-6">
        <div className="p-6 border border-red-600 rounded-xl hover:rounded-3xl shadow hover:shadow-xl transition-all ease-in-out delay-150 duration-500">
          <p className="w-full font-medium text-xl pb-2">Perform Permanent Deletion</p>
          <p>
            Deleting your account is permanent. When you delete your account,
            all of your content, transaction history and messages will be
            permanently erased and you will not be able to retrieve them.
          </p>
          <button
            type="button"
            onClick={() => handleDeleteUser()}
            className="mt-6 flex gap-2 items-center text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-full text-sm px-4 py-2 text-center"
          >
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Account;
