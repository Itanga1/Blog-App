"use client"
import { useEffect, useState } from "react";
import Axios from "axios";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function updatePost(){
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const {id} = useParams();
  const fetchPost = async () => {
    const response = await Axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/posts/${id}`);
    const post = response.data;
    setTitle(post.title);
    setDescription(post.description);
  }
  const handleUpdate = async(e)=>{
    e.preventDefault();
    try{
      Axios.put(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/updatePost/${id}`, {
        title,
        description
      }).then((response)=>{
        if(response.data.message){
          console.log(response.data.message);
          router.push(`/post/${id}`);
          router.refresh();
        }else{
          console.error(response.data.error);
          alert("Error updating post. Please try again.");
        }
      })
    }catch (error) {
      console.error("Error updating post:", error);
      alert("An error occurred while updating the post. Please try again.");
    }
  }
  useEffect(()=>{
    fetchPost();
  }, [])
  return(
    <div className=" flex flex-col items-center justify-center gap-3 h-[calc(100vh-170px)]">
      <h1 className="text-3xl font-bold text-center">Update Post</h1>
      <form className=" flex flex-col shadow-lg p-10 mt-2 justify-evenly min-h-[400px] w-[600px]" onSubmit={(e)=>handleUpdate(e)}>
        <label>Post title: </label>
        <input value={title} type="text" className=" border rounded-lg py-[10px] px-[20px]" onChange={(e)=>setTitle(e.target.value)} required/>
        <label>Description:</label>
        <textarea value={description} name="" id="" placeholder="Type post description" className="border rounded-lg py-[10px] px-[20px] h-[80px] resize-none" onChange={(e)=>setDescription(e.target.value)} minLength={150} required></textarea>
        <button className=" text-white bg-blue-500 rounded-lg px-20 py-3 cursor-pointer font-bold" type="submit">Update Post</button>
      </form>
    </div>
  )
}