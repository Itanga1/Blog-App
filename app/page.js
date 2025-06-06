import Link from "next/link";
import connection from "@/lib/db";

export const dynamic = "force-dynamic";// this line ensures that the page is always revalidated and does not use static generation
// This is important for dynamic data fetching in Next.js 13+ with the app directory


export default async function Home() {
  const [rows] = await connection.query("SELECT * FROM blogs");
  const posts = rows;

  return (
    <div className="Home">
      <h1 className="text-3xl font-bold text-center">Blog posts</h1>
      <div className="flex flex-col items-center justify-center mt-5 gap-3">
        {
          posts?.map((post)=>{
            return(
              <div className="flex flex-col p-2 bg-blue-100 rounded-lg shadow-md gap-2 w-5/7" key={post.id}>
                <h2 className="text-2xl font-semibold">{post.title}</h2>
                <p>{post.description.slice(0,150)} {post.description.length>150?'....':''}</p>
                <Link href={`/post/${post.id}`} className="self-end pr-2 text-blue-500 underline">Read more</Link>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}