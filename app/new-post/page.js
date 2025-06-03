export default function NewBlog(){
  return(
    <div className=" flex flex-col items-center justify-center gap-3 h-[calc(100vh-90px)]">
      <h1 className="text-3xl font-bold text-center">Add New Post</h1>
      <form className=" flex flex-col shadow-lg p-10 mt-2 justify-evenly min-h-[400px] w-[600px]" >
        <label>Post title: </label>
        <input type="text" className=" border rounded-lg py-[10px] px-[20px]"/>
        <label>Description:</label>
        <textarea name="" id="" placeholder="Type post description" className="border rounded-lg py-[10px] px-[20px] h-[80px] resize-none" ></textarea>
        <button className=" text-white bg-blue-500 rounded-lg px-20 py-3 cursor-pointer font-bold">Create Post</button>
      </form>
    </div>
  )
}