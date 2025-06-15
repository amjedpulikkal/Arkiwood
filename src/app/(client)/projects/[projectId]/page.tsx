import React from "react";



import { notFound } from "next/navigation";
import ProjectDetails from "./projectDetails";
import { supabase } from "@/lib/supabaseClient";
import { Project } from "@/types/type";

type tParams = Promise<{ projectId: string }>;

export default async function page({ params }: { params: tParams }) {
  const title = decodeURIComponent((await params)?.projectId || "")
    .split("-")
    .join(" ");

  const { data, error } = await supabase
    .from("projects")
    .select("*,project_gallery(image_url)")
    .eq("title", title);

  // const data = projects.find((data) => data.title === title);
  if (!data || error) {
    notFound();
  }

  return (
    <>
      <ProjectDetails project={data[0] as unknown as Project} />
    </>
  );
}
