import connection from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {;
  try {
    const sql = "SELECT * FROM blogs";
    const [posts] = await connection.query(sql);
    
    return NextResponse.json(posts, { status: 200 });
    
  } catch (err) {
    console.error("Error fetching posts:", err);
    return NextResponse.json( 
      { error: "Error fetching posts", details: err.message },
      { status: 500 }
    );
  }
}