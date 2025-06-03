import Link from "next/link";

const notFound = () => {
  return ( 
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-8xl text-center text-red-600">404</h1>
      <h1 className="text-4xl font-bold text-center">Page Not Found</h1>
      <p className="text-center text-xl">The page you are looking for does not exist.</p>
      <p className="text-center">
        <Link href="/" className="text-blue-500 hover:underline text-xl">
          Go back to home
        </Link>
      </p>
    </div>
   );
}
 
export default notFound;