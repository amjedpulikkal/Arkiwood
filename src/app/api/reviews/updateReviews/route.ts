// import { supabase } from "@/lib/supabaseClient";
import { NextResponse } from "next/server";

export async function POST() {
//   const { id, rating, testimonial } = await req.json();
//   //   console.log(await req.json());
//   await supabase
//     .from("reviews")
//     .update({ rating, review: testimonial, updated_at: new Date() })
//     .eq("id", id);


  return NextResponse.json("ok", { status: 200 });
}
