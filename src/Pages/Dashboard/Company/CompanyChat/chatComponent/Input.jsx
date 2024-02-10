import React, { useContext, useState } from "react";
import useAuth from "../../../../../hooks/useAuth";
import {
  arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { db,storage } from "../../../../../firebase/firebase.config";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { MdCancel } from "react-icons/md";
import { IoSend } from "react-icons/io5";
import { ChatContext } from './../../../../../provider/ChatProvider';
import imgIcon from '../../../../../assets/icons/img.png'


const Input = () => {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);
  

  const { user } = useAuth();
  const { data } = useContext(ChatContext);

  const handleSend = async () => {
    if (img ) {
      const storageRef = ref(storage, `chatImages/${uuid()}`);

  
        const uploadTask =await uploadBytesResumable(storageRef, img);

       
        getDownloadURL(storageRef).then(
          async (downloadURL) => {
            try{
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
          }catch(e){console.log("image upload error:"+e)}
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
      <div className=" h-16 mt-0 w-full bg-white pl-4 rounded-br-lg overflow-hidden flex items-center justify-between">
        <input
          type="text"
          placeholder="Type something..."
          onChange={(e) => setText(e.target.value)}
          value={text}
          onKeyDown={handleKey}
          className="w-3/5 border-none outline-none bg-white text-gray-700 text-lg"
        />
        <div className="flex items-center gap-5">
         {/* attach files code deleted from here */}

          {img ? (
            <div className="relative p-0  w-16 h-16 ">
              <MdCancel
                className=" absolute bg-transparent h-4 w-4 z-50 rounded-full right-0 top-1 cursor-pointer"
                onClick={() => setImg(null)}
              />
              <img
                className=" relative w-full h-16 object-cntain bg-gray-400"
                src={URL.createObjectURL(img)}
                alt=""
              />
            </div>
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
                <img
                  src={imgIcon}
                  alt=""
                  className="cursor-pointer bg-transparent h-6 w-6"
                />
              </label>
            </div>
          )}
          <div className="border-none flex items-center px-3 py-3 h-16 text-white bg-transparent ">
            <div className="rounded-full w-14 h-14 flex items-center justify-center  cursor-pointer bg-gray-600">
              {" "}
              <IoSend onClick={handleSend} className=" h-10 w-10" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Input;
