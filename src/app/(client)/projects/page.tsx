import EnhancedProjectsSection from "@/components/client/projectClinetside";
import { supabase } from "@/lib/supabaseClient";
import { Project } from "@/types/type";
import React from "react";

export default async function page() {
  const { data } = await supabase
    .from("projects")
    .select("*")
    .eq("showOnLanding", true);

  return <EnhancedProjectsSection projects={data as Project[]} />;
}
