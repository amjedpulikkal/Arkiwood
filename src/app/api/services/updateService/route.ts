// pages/api/services/updateService.ts

import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";
import { SubService } from "@/types/type";

export async function POST(req: Request) {
  const formData = await req.formData();

  try {
    // 1) Parse required fields
    const idRaw = formData.get("id");
    if (!idRaw) throw new Error("Missing service ID");
    const serviceId = Number(idRaw);
    if (isNaN(serviceId)) throw new Error("Invalid service ID");

    const service_name = formData.get("service_name") as string;
    const description = formData.get("description") as string;
    const raw = formData.get("sub_services");

    const servicesJson = (
      raw ? JSON.parse(raw.toString()) : null
    ) as SubService[];

    const raw_updatedSub_services = formData.get(
      "updatedSub_services"
    ) as string;
    const updatedSub_services = JSON.parse(raw_updatedSub_services) as
      | [{ id: number }]
      | [{ sub_service_name: string; features: string[] }];
    const cover_image = formData.get("cover_image") as string | File;
    const old_cover_image_path = formData.get("old_cover_image_path") as string;
    const images = formData.getAll("existing_images[]") as unknown as string[];
    const new_images = formData.getAll("new_images[]") as File[];
    const remove_images = formData.getAll("remove_images[]") as string[];
    const remove_subServices = formData.getAll("removeSubServices[]");

    if (remove_subServices.length > 0) {
      supabase.from("sub_services").delete().in("id", remove_subServices);
    }

    if (remove_images.length > 0) {
      supabase.storage.from("static.images").remove(remove_images);
    }

    const uploadedImagesObjects = [];

    images.forEach((path) => {
      const { data: urlData } = supabase.storage
        .from("static.images")
        .getPublicUrl(path);

      uploadedImagesObjects.push({ path, image_url: urlData.publicUrl });
    });

    for (const image of new_images) {
      const buffer = Buffer.from(await image.arrayBuffer());
      const path = `service/${service_name}/${Date.now()}-${image.name}`;

      await supabase.storage.from("static.images").upload(path, buffer, {
        contentType: image.type,
      });
      const { data: urlData } = supabase.storage
        .from("static.images")
        .getPublicUrl(path);

      uploadedImagesObjects.push({ path, image_url: urlData.publicUrl });
    }

    if (!service_name) throw new Error("serviceName is required");
    if (!description) throw new Error("description is required");
    if (!servicesJson) throw new Error("services JSON is required");

    let coverImage = null;
    console.log(cover_image);
    if (cover_image instanceof File) {
      if (!old_cover_image_path)
        throw new Error("old_cover_image_path is required");

      const { error } = await supabase.storage
        .from("static.images")
        .remove([old_cover_image_path]);

      if (error) throw new Error(error.message);

      const buffer = Buffer.from(await cover_image.arrayBuffer());
      const path = `service/${service_name}/${Date.now()}-${cover_image.name}`;

      await supabase.storage.from("static.images").upload(path, buffer, {
        contentType: cover_image.type,
      });
      const { data: urlData } = supabase.storage
        .from("static.images")
        .getPublicUrl(path);

      coverImage = { path, image_url: urlData.publicUrl };
    } else {
      const { data: urlData } = supabase.storage
        .from("static.images")
        .getPublicUrl(cover_image);
      coverImage = { path: cover_image, image_url: urlData.publicUrl };
    }

    await supabase
      .from("services")
      .update([
        {
          service_name,
          description,
          cover_image: coverImage,
          images: uploadedImagesObjects,
        },
      ])
      .eq("id", idRaw);

    console.log(updatedSub_services);
    updatedSub_services.forEach(async (sub) => {
      // @ts-expect-error : ignore
      if (sub.id) {
        // @ts-expect-error : ignore
        await supabase.from("sub_services").update(sub).eq("id", sub.id);
      } else {
        const subServicePayload = [
          {
            // @ts-expect-error : ignore
            sub_service_name: sub.sub_service_name,
            service_id: idRaw,
            // @ts-expect-error : ignore
            features: sub.features || [],
          },
        ];

        await supabase.from("sub_services").insert(subServicePayload);
      }
    });

    return NextResponse.json(
      { message: "Service updated successfully." },
      { status: 200 }
    );
  } catch (err) {
    // console.error("[SERVICE UPDATE ERROR]", err.message);
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
