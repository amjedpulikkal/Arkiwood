import TestimonialForm from "@/components/review";
import { supabase } from "@/lib/supabaseClient";
import React from "react";

export default async function page({ params }) {
  const id = decodeURIComponent((await params)?.id || "");
  

  const {data }=await supabase.from("reviews").select("*").eq("dynamic_link",id)
   
  console.log(data)
  return (
    <>
      <TestimonialForm data={data[0]} />
    </>
  );
}
