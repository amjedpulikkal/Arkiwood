import { supabase } from "@/lib/supabaseClient";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const rating = parseInt(formData.get("rating") as string) || 0;
    const review = formData.get("review") as string;
    const dynamic_link = formData.get("dynamic_link") as string;
    const is_dynamic = formData.get("isDynamicLinkEnabled") === "true";
    const service_id = formData.get("service_id") as string;
    const company = formData.get("company") as string;

    const mainImage = formData.get("image") as File;
    const path = `reviews/${formData.get(
      "service_id"
    )}/${email}/${Date.now()}-${mainImage.name}`;

    if (mainImage) {
      const buffer = Buffer.from(await mainImage.arrayBuffer());
      await supabase.storage.from("static.images").upload(path, buffer, {
        contentType: mainImage.type,
      });
    }

    const { data: image_url } = supabase.storage
      .from("static.images")
      .getPublicUrl(path);

    const { data: inserted, error } = await supabase.from("reviews").insert([
      {
        name,
        email,
        rating,
        review,
        dynamic_link,
        is_dynamic,
        service_id,
        images: {
          path,
          image_url: image_url.publicUrl,
        },
        company,
      },
    ]);

    console.log(inserted, error);
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
