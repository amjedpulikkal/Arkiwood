import AdminDashboard from "@/components/admin/adminDashboardClint";
import { supabase } from "@/lib/supabaseClient";
import React from "react";

export default async function page() {
  const { data } = await supabase.from("admin_dashboard").select("*");

  return (
    <div>
      <AdminDashboard inistalData={data![0]} />
    </div>
  );
}
