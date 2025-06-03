import createConnection from "@/lib/db";
import { NextResponse } from "next/server";
export default function GET(){
  const db = createConnection();
  db.query("SELECT * FROM blogs",(err,result)=>{
    if(err){
      console.error("Error fetching posts:", err);
      return NextResponse.json({error: "Error fetching posts"}, {status: 500});
    }else{
      return NextResponse.json(result, {status: 200});
    }
  })
}