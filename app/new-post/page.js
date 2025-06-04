"use client";
import Axios from "axios";
import { useState} from "react";
export default function NewBlog(){
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const createPost = (e)=>{
    e.preventDefault();
    console.log(process.env.NEXT_PUBLIC_SERVER_URL)
    try{
      Axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/createPost`, {
        title,
        description
      }).then((response)=>{
        if(response.data.message){
          console.log(response.data.message);
          setTitle("");
          setDescription("");
        }else{
          console.error(response.data.error);
        }
      })
    }catch (error) {
      console.error("Error creating post:", error);
    }
  }

  return(
    <div className=" flex flex-col items-center justify-center gap-3 h-[calc(100vh-170px)]">
      <h1 className="text-3xl font-bold text-center">Add New Post</h1>
      <form className=" flex flex-col shadow-lg p-10 mt-2 justify-evenly min-h-[400px] w-[600px]" onSubmit={createPost}>
        <label>Post title: </label>
        <input value={title} type="text" className=" border rounded-lg py-[10px] px-[20px]" onChange={(e)=>setTitle(e.target.value)} required/>
        <label>Description:</label>
        <textarea value={description} name="" id="" placeholder="Type post description" className="border rounded-lg py-[10px] px-[20px] h-[80px] resize-none" onChange={(e)=>setDescription(e.target.value)} minLength={150} required></textarea>
        <button className=" text-white bg-blue-500 rounded-lg px-20 py-3 cursor-pointer font-bold" type="submit">Create Post</button>
      </form>
    </div>
  )
}