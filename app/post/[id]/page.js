"use server";
import { redirect } from "next/navigation";
import { DeleteButton } from "./deleteButton";

export default async function viewPost({ params }) {
  const { id } = await params;
  const response = await fetch(`${process.env.SERVER_URL}/api/posts/${id}`);
  const post = await response.json();
  if(post.error) {
    redirect('/'); // Redirect to home page if post not found
  }
  
  return (
    <div className="flex flex-col items-center justify-center mt-5 gap-3 min-h-[calc(50vh-90px)]">
      <h1 className="text-3xl font-bold text-center">Post Details</h1>
      <div className="flex flex-col bg-blue-100 rounded-lg shadow-md gap-2 w-5/7 p-5">
        <h2 className="text-2xl font-semibold">{post.title}</h2>
        <p>{post.description}</p>
        <div className=' flex flex-row justify-end gap-2 mt-2'>
          <DeleteButton id={id} />
          <button className=' py-[10px] px-[20] font-bold text-md text-white rounded-2xl bg-blue-500'>Update</button>
        </div>
      </div>
    </div>
  )
}