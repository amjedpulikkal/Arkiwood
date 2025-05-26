import React from "react";

import projects from "../data.json";

import { notFound } from "next/navigation";
import ProjectDetails from "./projectDetails";

type tParams = Promise<{ projectId: string }>;

export default async function page({ params }: { params: tParams }) {
  const title = (decodeURIComponent((await params)?.projectId || "")).split("-").join(" ")  
  const data = projects.find((data) => data.title === title);
  if (!data) {
    notFound();
  }

  return (
    <>
      <ProjectDetails project={data} />
    </>
  );
}
