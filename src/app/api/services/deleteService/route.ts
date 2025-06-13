import { supabase } from "@/lib/supabaseClient";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const serviceId = searchParams.get("serviceId");

  if (serviceId) {

    const {data,error } = await supabase.from("services").select("*").eq("id",serviceId)
   
    const { data: removeData } = await supabase.storage
      .from("static.images")
      .list(`projects/${data[0]?.service_name}`);

    const filesToRemove = removeData!.map(
      (x) => `projects/${data[0]?.title}/${x.name}`
    );

    
    if (filesToRemove.length) {
      await supabase.storage.from("static.images").remove(filesToRemove);
    }

    const {data:d,error:r}=await supabase.from("services").delete().eq("id", serviceId);
    console.log(d,r)

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json(data, { status: 200 });
  }
}
