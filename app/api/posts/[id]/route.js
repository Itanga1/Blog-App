import connection from "@/lib/db";
import { NextResponse } from "next/server";

// Next.js route handler expects a Request object and sometimes context
export async function GET(req, { params }) {
  try {
    const { id } = await params;
    const [rows] = await connection.query("SELECT * FROM blogs WHERE id = ?", [id]);
    if (rows.length === 0) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    return NextResponse.json(rows[0]); // assuming you want a single post
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
