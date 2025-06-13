import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const isGetServices = searchParams.get("getServices") == "true";
  if (isGetServices) {
    const { data, error } = await supabase.from("services").select("*");

    if (error)
      return NextResponse.json({ error: error.message }, { status: 500 });

    return NextResponse.json({ data }, { status: 200 });
  } else {
    const { data, error } = await supabase
      .from("services")
      .select("*,sub_services(*)");

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ data }, { status: 200 });
  }
}
