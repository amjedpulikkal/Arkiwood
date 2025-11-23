import EnhancedProjectsSection from "@/components/client/projectClinetside";
import { supabase } from "@/lib/supabaseClient";
import { Project } from "@/types/type";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top Project Management Companies in Dubai | Arkiwood UAE",
  description:
    "Arkiwood UAE stands among the top project management companies in Dubai, offering expert project management services UAE for residential and commercial projects.",
};

export default async function page() {
  const { data } = await supabase
    .from("projects")
    .select("*")
    .eq("showOnLanding", true);

  return <EnhancedProjectsSection projects={data as Project[]} />;
}
