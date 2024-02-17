import React, { useContext, useState } from "react";
import useAuth from "../../../../../hooks/useAuth";
import {
  arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../../../../../firebase/firebase.config";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { MdCancel } from "react-icons/md";
import { IoSend } from "react-icons/io5";
import { ChatContext } from './../../../../../provider/ChatProvider';
import { BiSolidImageAdd } from "react-icons/bi";
import Swal from "sweetalert2";

const Input = () => {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);


  const { user } = useAuth();
  const { data } = useContext(ChatContext);

  const handleSend = async () => {
    if (img) {
      const storageRef = ref(storage, `chatImages/${uuid()}`);


      const uploadTask = await uploadBytesResumable(storageRef, img);


      getDownloadURL(storageRef).then(
        async (downloadURL) => {
          try {
            console.log("image uploaded");
            console.log("URL: " + downloadURL);
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: user.uid,
                date: Timestamp.now(),
                img: downloadURL,
              }),
            });
          } catch (e) { console.log("image upload error:" + e) }
        }
      );



    } else {
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: user.uid,
          date: Timestamp.now(),
        }),
      });
    }

    await updateDoc(doc(db, "userChats", user.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    await updateDoc(doc(db, "userChats", data.chatUser.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    setText("");
    setImg(null);
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSend();
  };

  return (
    <>
      <div className="flex-none h-16 mt-0 px-4 w-full bg-white rounded-br-xl overflow-hidden flex items-center justify-between">
        <input
          type="text"
          placeholder="Type something..."
          onChange={(e) => setText(e.target.value)}
          value={text}
          onKeyDown={handleKey}
          className="border rounded-full px-4 py-2 w-4/5 outline-none bg-slate-100 text-gray-700 text-lg "
        />
        <div className="flex items-center">
          {img ? (
            <div className="p-0 ml-2 bg-transparent w-full h-20 flex items-center">
              <img
                className="w-16 h-14 object-cover"
                src={URL.createObjectURL(img)}
                alt=""
              />
              <MdCancel
                className="bg-transparent h-6 w-6 z-50 rounded-full cursor-pointer text-red-600 mb-auto mt-2"
                onClick={() => setImg(null)}
              />
            </div>
            // Swal.fire({
            //   html: `<img src='${URL.createObjectURL(img)}'/>`,
            //   imageHeight: 200,
            //   confirmButtonColor: "#3085d6",
            //   showCancelButton: true,
            //   confirmButtonText: "Send",
            // }).then((result) => {
            //   console.log(result)
            //   if (result.isConfirmed) {
            //     handleSend()
            //   }
            //   // else if (result.isDenied) {
            //   //   Swal.fire("Changes are not saved", "", "info");
            //   // }
            // })
          ) : (
          <div>
            <input
              type="file"
              style={{ display: "none" }}
              id="file"
              onChange={(e) => setImg(e.target.files[0])}
              //new added this line
              accept="image/*"
            />
            <label htmlFor="file">
              <BiSolidImageAdd className="h-10 w-10 text-slate-600 hover:text-slate-800 hover:scale-90 transition-all ease-out delay-0 duration-500" />
            </label>
          </div>
          )}
          <div className="border-none flex items-center px-3 py-3 h-16 text-white bg-transparent ">
            <div className="p-3 rounded-full flex items-center justify-center cursor-pointer bg-slate-600 hover:bg-slate-800 hover:-rotate-[25deg] hover:scale-95 transition-all ease-out delay-0 duration-500">
              <IoSend onClick={handleSend} className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Input;
