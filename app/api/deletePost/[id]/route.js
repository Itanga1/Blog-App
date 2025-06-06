import connection from "@/lib/db";
import { NextResponse } from "next/server";

export async function DELETE(request, {params}){
  const { id } = params;
  const sql = "DELETE FROM blogs WHERE id = ?";
  try{
    const [checkResult] = await connection.query(
      "SELECT id FROM blogs WHERE id = ?", 
      [id]
    );
    if (checkResult.length === 0) {
      return NextResponse.json({error: "Post not found"}, {status: 404});
    }else{
      await connection.query(sql, [id]);
      return NextResponse.json({message: "Post deleted successfully"}, {status: 200});
    }
    
  }catch (error) {
    console.error("Error deleting post:", error);
    return NextResponse.json({error: "Failed to delete post"}, {status: 500});
  }
}
