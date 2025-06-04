import connection from "@/lib/db";
import { NextResponse } from "next/server";

export default async function DELETE({params}){
  const { id } = await params;
  const sql = "DELETE FROM blogs WHERE id = ?";
  const values = [id];
  try{
    await connection.query(sql, values);
    return NextResponse.json({message: "Post deleted successfully"}, {status: 200});
  }catch (error) {
    console.error("Error deleting post:", error);
    return NextResponse.json({error: "Failed to delete post"}, {status: 500});
  }
}
