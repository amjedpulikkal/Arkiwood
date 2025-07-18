import { supabase } from "@/lib/supabaseClient";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const projectId = searchParams.get("projectId");

  if (!projectId) {
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .eq("showOnLanding", true);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json(data, { status: 200 });
  } else {
    const { data, error } = await supabase
      .from("projects")
      .select("*,project_gallery(image_url)")
      .eq("id", projectId);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json(data, { status: 200 });
  }
}
