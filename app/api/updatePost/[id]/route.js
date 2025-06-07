import connection from "@/lib/db";
import { NextResponse } from "next/server";
export async function PUT(request, { params }) {
  const {id} = await params;
  const { title, description } = await request.json();
  const sql = "UPDATE blogs SET title = ?, description = ? WHERE id = ?";
  try{
    await connection.query(sql,[title, description, id]);
    return NextResponse.json({message: "Post updated successfully"}, {status: 200});
  }catch (error) {
    console.error("Error updating post:", error);
    return NextResponse.json({error: "Failed to update post"}, {status: 500});
  }
}