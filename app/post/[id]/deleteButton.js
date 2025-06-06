"use client";
import { useRouter } from "next/navigation";
import axios from "axios";

export function DeleteButton({id}) {
  const router = useRouter();
  const handleDelete = async () => {
    try{
      const deleteResponse = await axios.delete(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/deletePost/${id}`);
      const feedback = deleteResponse.data;
      if(feedback.error){
        console.error(feedback.error);
      }else if(feedback.message){
        console.log(feedback.message);
        router.push('/');
        router.refresh();
      }
    }catch (error) {
      console.error("Error deleting post:", error);
    } 
  }
  return (
    <button onClick={handleDelete} className=' py-[10px] px-[20] font-bold text-md text-white rounded-2xl bg-red-500'>Delete</button>
  )
}