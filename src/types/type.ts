type ProjectFeature = {
  feature: string;
};

type ProjectGalleryItem = {
  image_url: { path: string; image_url: string };
};

type ProjectMaterial = {
  material: string;
};

type ProjectTestimonial = {
  role: string;
  quote: string;
  author: string;
};

export type Project = {
  id: number;
  title: string;
  location: string;
  category: string;
  status: string;
  area: string;
  rooms: string;
  year: string;
  main_image: { path: string; image_url: string }; // URL string
  description: string;
  project_features: ProjectFeature[];
  project_gallery: ProjectGalleryItem[];
  project_materials: ProjectMaterial[];
  project_testimonials: ProjectTestimonial[];
};

// type ViewMode = "grid" | "list";

export type SubService = {
  id?: number;
  sub_service_name?: string;
  service_id?: number;
  created_at?: string;
  features: string[]
};

export type Image = {
  image_url?: string;
  path?: string;
};

export type Service = {
  
  service_id:number;
  id: number;
  service_name: string;
  description: string;
  cover_image: string;
  created_at: string;
  sub_services: SubService[];
  images: Image[];
  testimonials?:[{name:string,rating:number,text:string}]
};
