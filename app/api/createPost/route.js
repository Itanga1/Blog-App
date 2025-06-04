import connection from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  const {title, description} = await req.json();
  try{
    const sql = "INSERT INTO blogs (title, description) VALUES (?, ?)";
    const values = [title, description];
    const [result] = await connection.query(sql, values);

    return NextResponse.json({ message: "Post created successfully", id: result.insertId }, { status: 201 });
  }catch (err) {
    console.error("Error creating post:", err);
    return NextResponse.json(
      { error: "Error creating post", details: err.message },
      { status: 500 }
    );
  }
}