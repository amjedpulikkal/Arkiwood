import AdminSettings from "@/components/admin/adminSettings";
import AdminUsersDashboard from "@/components/admin/adminUser";
import { supabase } from "@/lib/supabaseClient";
import { createClient } from "@/lib/supabaseServar";
import React from "react";

export default async function page() {
  const supabaseServar = await createClient();
  const { data } = await supabase.from("admin_dashboard").select("*");
  const { data: userData } = await supabaseServar.auth.admin.listUsers();
  
  return (
    <div>
      <AdminSettings inistalData={data![0]} />
      <AdminUsersDashboard userData={userData.users} />
    </div>
  );
}
