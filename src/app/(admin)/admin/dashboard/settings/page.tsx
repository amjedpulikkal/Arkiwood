import AdminSettings from "@/components/admin/adminSettings";
import { supabase } from "@/lib/supabaseClient";
import React from "react";

export default async function page() {
  const { data } = await supabase.from("admin_dashboard").select("*");

  return (
    <div>
      <AdminSettings inistalData={data![0]} />
    </div>
  );
}
