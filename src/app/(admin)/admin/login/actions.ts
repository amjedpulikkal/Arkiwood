"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabaseServar";

export async function login(formData: FormData, captchaToken: string) {
  const supabase = await createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string, 
  };
  // console.log(captchaToken);
  const { error } = await supabase.auth.signInWithOtp({
    email: data.email,
    options: {
      emailRedirectTo: `/api/auth/callback`,
      captchaToken,
    },
  });

  if (error) {
    console.log(error);
    // redirect("/error");
  } else {
    revalidatePath("/dashboard", "layout");
    redirect("/dashboard");
  }
}
