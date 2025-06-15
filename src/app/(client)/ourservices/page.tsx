import OurServices from "@/components/ourServices";
import { supabase } from "@/lib/supabaseClient";
import { Service } from "@/types/type";
import React from "react";

export default async function page() {
  const { data } = await supabase
    .from("services")
    .select("*,sub_services(*)");

  return <OurServices data={data as Service[]} />;
}
