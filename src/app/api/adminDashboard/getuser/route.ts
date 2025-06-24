import { createClient } from "@/lib/supabaseServar";

import {  NextResponse } from "next/server";

export async function GET() {
  const supabase = await createClient();
  const { data } = await supabase.auth.admin.listUsers();
  return NextResponse.json(data, {
    status: 200,
  });
}
