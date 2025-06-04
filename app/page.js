import Link from "next/link";
import Axios from "axios";


export default async function Home() {
  let posts = [];
  try{
    const response = await Axios.get(`${process.env.SERVER_URL}/api/posts`);
    posts = response.data;
  }catch (error) {
    console.error("Error fetching posts:", error);
  }

  return (
    <div className="Home">
      <h1 className="text-3xl font-bold text-center">Blog posts</h1>
      <div className="flex flex-col items-center justify-center mt-5 gap-3">
        {
          posts.map((post)=>{
            return(
              <div className="flex flex-col p-2 bg-blue-100 rounded-lg shadow-md gap-2 w-5/7" key={post.id}>
                <h2 className="text-2xl font-semibold">{post.title}</h2>
                <p>{post.description.slice(0,150)} {post.description.length>150?'....':''}</p>
                <Link href={'/blog'} className="self-end pr-2 text-blue-500 underline">View more</Link>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}