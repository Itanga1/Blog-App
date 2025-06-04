import Axios from 'axios';

export default async function viewPost({ params }) {
  const { id } = await params;
  const response = await fetch(`${process.env.SERVER_URL}/api/posts/${id}`);
  const post = await response.json();
  console.log("Post data:", post);
  return (
    <div className="flex flex-col items-center justify-center mt-5 gap-3">
      <h1 className="text-3xl font-bold text-center">Post Details</h1>
      <div className="flex flex-col p-2 bg-blue-100 rounded-lg shadow-md gap-2 w-5/7">
        <h2 className="text-2xl font-semibold">{post.title}</h2>
        <p>{post.description}</p>
      </div>
    </div>
  )
}