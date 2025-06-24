import bcrypt from "bcryptjs";
import { createClient } from "@/lib/supabaseServar";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = (await req.json()) as {
      email: string;
      password: string;
      captchaToken: string;
    };

    console.log(data);
    const supabase = await createClient();

    const { data: allUserData, error: errorData } =
      await supabase.auth.admin.listUsers();
    if (errorData) throw errorData;

    const user = allUserData.users.find((user) => user.email === data.email);

    //  const da= await supabase.auth.admin.updateUserById(
    //     "fd6508a3-3a48-4ffc-b2c0-f20580d19e46",
    //     {
    //       user_metadata: {
    //         first_name: "John",
    //         last_name: "Doe",
    //         role: "premium_user",
    //         password: (await bcrypt.hash(data.password, saltRounds)),
    //       },
    //     }
    //   );

    const user_metadata = user?.user_metadata || {};

    if (user_metadata.password) {
      const isMatch = await bcrypt.compare(
        data.password,
        user_metadata.password
      );
      if (!isMatch) throw "password not match";
    }

    const { error } = await supabase.auth.signInWithOtp({
      email: data.email,
      options: {
        emailRedirectTo: `/api/auth/callback`,
        captchaToken: data.captchaToken,
      },
    });
    if (error) throw error;

    // revalidatePath("/dashboard", "layout");
    return NextResponse.json("email send to admin", { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(error, { status: 500 });
  }
}
