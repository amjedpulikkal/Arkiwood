// "use client";
// import { toast } from "sonner";
// import React, { useEffect, useState } from "react";
// import {
//   Star,
//   User,
//   MessageSquare,
//   Camera,
//   X,
//   Send,
//   CheckCircle,
//   AlertCircle,
//   Home,
//   Wrench,
//   Copy,
// } from "lucide-react";
// import { nanoid } from "nanoid";
// import ReviewRatingUI from "@/components/admin/testimonial";
// import Image from "next/image";

// const ReviewForm = ({
//   isOpen,
//   onClose,
//   type = "project",
//   itemData = null,
//   fetchData,
// }) => {
//   const [services, setServices] = useState([{}]);

//   const [isDynamicLinkEnabled, setIsDynamicLinkEnabled] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     rating: 0,
//     title: "",
//     review: "",
//     dynamic_link: "",
//     images: [],
//     projectPhase: "",
//     company: "",
//   });

//   const [hoveredRating, setHoveredRating] = useState(0);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState(null);
//   const handlecopy = () => {
//     navigator.clipboard
//       .writeText(`https://arkiwooduae.com/testimonial/${formData.dynamic_link}`)
//       .then(() => {
//         toast.success(
//           `Copied to clipboard: https://arkiwooduae.com/testimonial/${formData.dynamic_link}`
//         );
//       })
//       .catch((err) => {
//         console.error("Failed to copy!", err);
//       });
//   };
//   const handleInputChange = (field, value) => {
//     setFormData((prev) => ({ ...prev, [field]: value }));
//   };

//   const handleDinamicLink = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setIsDynamicLinkEnabled(e.target.checked);
//     if (e.target.checked) {
//       const id = nanoid(10);
//       setFormData((prev) => ({ ...prev, dynamic_link: id }));
//     } else {
//       setFormData((prev) => ({ ...prev, dynamic_link: "" }));
//     }
//     console.log("cliked", e);
//   };
//   const handleImageUpload = (e) => {
//     const files = Array.from(e.target.files);
//     if (files.length + formData.images.length > 1) {
//       alert("Maximum 1 images allowed");
//       return;
//     }

//     const newImages = files.map((file) => ({
//       file,
//       preview: URL.createObjectURL(file),
//       name: file.name,
//     }));

//     setFormData((prev) => ({
//       ...prev,
//       images: newImages,
//     }));
//   };

//   const removeImage = (index) => {
//     setFormData((prev) => ({
//       ...prev,
//       images: prev.images.filter((_, i) => i !== index),
//     }));
//   };

//   useEffect(() => {
//     const getData = async () => {
//       const res = await fetch("/api/services/getServices?serviceId=true");
//       const { data } = await res.json();
//       console.log("data", data);

//       setServices(data || []);
//     };
//     getData();
//   }, []);

//   const resetForm = () => {
//     setFormData({
//       name: "",
//       email: "",
//       rating: 0,
//       title: "",
//       review: "",
//       dynamic_link: "",
//       images: [],
//       projectPhase: type === "project" ? "completed" : "",

//       professionalism: type === "service" ? 5 : 0,
//     });
//     setSubmitStatus(null);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       // console.log(formData);
//       // // Simulate API call
//       // await new Promise((resolve) => setTimeout(resolve, 2000));
//       // setSubmitStatus("success");
//       // setTimeout(() => {
//       //   // onClose();
//       //   // resetForm();
//       // }, 2000);

//       const newForm = new FormData();
//       newForm.append("name", formData.name);
//       newForm.append("email", formData.email);

//       if (!isDynamicLinkEnabled) {
//         newForm.append("rating", formData.rating.toString());
//         newForm.append("review", formData.review);
//       } else {
//         newForm.append("isDynamicLinkEnabled", "true");
//       }
//       newForm.append("image", formData.images[0]?.file);
//       newForm.append("dynamic_link", formData.dynamic_link);
//       newForm.append("service_id", formData.projectPhase);
//       newForm.append("company", formData.company);
//       setIsSubmitting(true);

//       toast.promise(
//         fetch("/api/reviews/createReviews ", {
//           method: "POST",
//           body: newForm,
//         }),
//         {
//           loading: "Loading...",
//           success: () => {
//             resetForm();
//             onClose();
//             fetchData();
//             return `New project successfully added `;
//           },
//           error: "Error",
//         }
//       );
//     } catch (error) {
//       setSubmitStatus(error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const renderStarRating = (currentRating, onRate, size = "w-6 h-6") => {
//     return (
//       <div className="flex gap-1">
//         {[1, 2, 3, 4, 5].map((star) => (
//           <button
//             key={star}
//             type="button"
//             onClick={() => onRate(star)}
//             onMouseEnter={() => setHoveredRating(star)}
//             onMouseLeave={() => setHoveredRating(0)}
//             className="transition-colors"
//           >
//             <Star
//               className={`${size} transition-colors ${
//                 star <= (hoveredRating || currentRating)
//                   ? "fill-yellow-400 text-yellow-400"
//                   : "text-gray-400 hover:text-yellow-300"
//               }`}
//             />
//           </button>
//         ))}
//       </div>
//     );
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
//       <div className="backdrop-blur-xl bg-white/10 rounded-2xl border border-white/20 shadow-2xl max-w-4xl w-full max-h-[95vh] overflow-auto">
//         <div className="p-6">
//           {/* Header */}
//           <div className="flex items-center justify-between mb-6">
//             <div className="flex items-center gap-3">
//               {type === "project" ? (
//                 <Home className="w-8 h-8 text-blue-400" />
//               ) : (
//                 <Wrench className="w-8 h-8 text-green-400" />
//               )}
//               <div>
//                 <h2 className="text-2xl font-bold text-white">
//                   {type === "project" ? "Project Review" : "Service Review"}
//                 </h2>
//                 <p className="text-gray-300">
//                   {itemData?.title || `Share your ${type} experience`}
//                 </p>
//               </div>
//             </div>
//             <button
//               type="button"
//               onClick={onClose}
//               className="p-2 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition-colors"
//             >
//               <X className="w-6 h-6" />
//             </button>
//           </div>

//           <div className="grid md:grid-cols-2 gap-6">
//             {/* Left Column */}
//             <div className="space-y-6">
//               {/* Personal Information */}
//               <div className="backdrop-blur-sm bg-white/5 rounded-lg p-4">
//                 <h3 className="text-white font-medium mb-4 flex items-center gap-2">
//                   <User className="w-5 h-5 text-blue-400" />
//                   Your Information
//                 </h3>
//                 <div className="space-y-4">
//                   <div>
//                     <label className="block text-gray-300 text-sm mb-2">
//                       Full Name *
//                     </label>
//                     <input
//                       type="text"
//                       required
//                       value={formData.name}
//                       onChange={(e) =>
//                         handleInputChange("name", e.target.value)
//                       }
//                       className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
//                       placeholder="Your full name"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-gray-300 text-sm mb-2">
//                       Email Address *
//                     </label>
//                     <input
//                       type="email"
//                       required
//                       value={formData.email}
//                       onChange={(e) =>
//                         handleInputChange("email", e.target.value)
//                       }
//                       className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
//                       placeholder="your.email@example.com"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-gray-300 text-sm mb-2">
//                       Company/Organization *
//                     </label>
//                     <input
//                       type="text"
//                       required
//                       value={formData.company}
//                       onChange={(e) =>
//                         handleInputChange("company", e.target.value)
//                       }
//                       className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
//                       placeholder="company"
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* Overall Rating */}
//               <div
//                 className={`${
//                   !isDynamicLinkEnabled
//                     ? "opacity-100"
//                     : "opacity-75 cursor-not-allowed "
//                 } backdrop-blur-sm bg-white/5 rounded-lg p-4`}
//               >
//                 <h3 className="text-white font-medium mb-4">
//                   Overall Rating *
//                 </h3>
//                 <div className="flex items-center gap-4">
//                   {renderStarRating(
//                     formData.rating,
//                     (rating) => handleInputChange("rating", rating),
//                     "w-8 h-8"
//                   )}
//                   <span className="text-gray-300">
//                     {formData.rating > 0 && `${formData.rating}/5`}
//                   </span>
//                 </div>
//               </div>

//               {/* Type-specific fields */}
//               {type === "project" ? (
//                 <div className="backdrop-blur-sm bg-white/5 rounded-lg p-4">
//                   <h3 className="text-white font-medium mb-4 flex items-center gap-2">
//                     <Home className="w-5 h-5 text-purple-400" />
//                     Service Details
//                   </h3>
//                   <div className="space-y-4">
//                     <div>
//                       <select
//                         value={formData.projectPhase}
//                         onChange={(e) =>
//                           handleInputChange("projectPhase", e.target.value)
//                         }
//                         className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
//                       >
//                         <option className="text-black" value="null">
//                           Select option
//                         </option>
//                         {services?.map((data) => (
//                           <option
//                             key={data.service_name + "option"}
//                             className="text-black"
//                             value={data.id}
//                           >
//                             {data.service_name}
//                           </option>
//                         ))}
//                       </select>
//                     </div>
//                     {/* <div>
//                       <label className="block text-gray-300 text-sm mb-2">
//                         Project Duration
//                       </label>
//                       <input
//                         type="text"
//                         value={formData.projectDuration}
//                         onChange={(e) =>
//                           handleInputChange("projectDuration", e.target.value)
//                         }
//                         className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
//                         placeholder="e.g., 3 months, 6 weeks"
//                       />
//                     </div> */}
//                   </div>
//                 </div>
//               ) : (
//                 <div className="backdrop-blur-sm bg-white/5 rounded-lg p-4">
//                   <h3 className="text-white font-medium mb-4 flex items-center gap-2">
//                     <Wrench className="w-5 h-5 text-green-400" />
//                     Service Details
//                   </h3>
//                   <div className="space-y-4">
//                     <div>
//                       <label className="block text-gray-300 text-sm mb-2">
//                         Service Date
//                       </label>
//                       <input
//                         type="date"
//                         value={formData.serviceDate}
//                         onChange={(e) =>
//                           handleInputChange("serviceDate", e.target.value)
//                         }
//                         className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-gray-300 text-sm mb-2">
//                         Response Time Rating
//                       </label>
//                       {renderStarRating(formData.responseTime, (rating) =>
//                         handleInputChange("responseTime", rating)
//                       )}
//                     </div>
//                     <div>
//                       <label className="block text-gray-300 text-sm mb-2">
//                         Professionalism Rating
//                       </label>
//                       {renderStarRating(formData.professionalism, (rating) =>
//                         handleInputChange("professionalism", rating)
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Right Column */}
//             <div className="space-y-6">
//               {/* Recommendation */}
//               <div className="backdrop-blur-sm bg-white/5 rounded-lg p-4">
//                 <div className="flex gap-4">
//                   <label className="flex items-center gap-2 cursor-pointer">
//                     <input
//                       type="checkbox"
//                       name="dynamic_link"
//                       checked={isDynamicLinkEnabled}
//                       onChange={handleDinamicLink}
//                       className="text-green-400 focus:ring-green-500"
//                     />
//                     <span>Auto-gen review link</span>
//                   </label>
//                 </div>
//                 {!!formData.dynamic_link.length && (
//                   <div className="flex gap-4 text-md ">
//                     <Copy
//                       className="text-white/40 hover:text-white/20  transition-colors cursor-pointer"
//                       onClick={() => handlecopy()}
//                     />
//                     <p className="text-blue-500 ">
//                       https://arkiwooduae.com/testimonial/
//                       {formData.dynamic_link}
//                     </p>
//                   </div>
//                 )}
//               </div>
//               {/* Review Content */}
//               <div
//                 className={`${
//                   !isDynamicLinkEnabled
//                     ? "opacity-100"
//                     : "opacity-75 cursor-not-allowed "
//                 } backdrop-blur-sm bg-white/5 rounded-lg p-4`}
//               >
//                 <h3 className="text-white font-medium mb-4 flex items-center gap-2">
//                   <MessageSquare className="w-5 h-5 text-yellow-400" />
//                   Your Review
//                 </h3>
//                 <div className="space-y-4">
//                   <div>
//                     <label className="block text-gray-300 text-sm mb-2">
//                       Detailed Review *
//                     </label>
//                     <textarea
//                       disabled={isDynamicLinkEnabled}
//                       required
//                       rows={6}
//                       value={formData.review}
//                       onChange={(e) =>
//                         handleInputChange("review", e.target.value)
//                       }
//                       className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 resize-none"
//                       placeholder={`Tell us about your ${type} experience. What did you like? What could be improved?`}
//                     />
//                   </div>
//                   <p className="text-red-600">
//                     {isDynamicLinkEnabled ? "Disabled" : ""}
//                   </p>
//                 </div>
//               </div>

//               {/* Image Upload */}
//               <div className="backdrop-blur-sm bg-white/5 rounded-lg p-4">
//                 <h3 className="text-white font-medium mb-4 flex items-center gap-2">
//                   <Camera className="w-5 h-5 text-purple-400" />
//                   Photos (Optional)
//                 </h3>
//                 <div className="space-y-4">
//                   <input
//                     type="file"
//                     multiple
//                     accept="image/*"
//                     onChange={handleImageUpload}
//                     className="hidden"
//                     id="image-upload"
//                   />
//                   <label
//                     htmlFor="image-upload"
//                     className="flex items-center justify-center gap-2 p-4 border-2 border-dashed border-white/20 rounded-lg cursor-pointer hover:border-white/40 transition-colors"
//                   >
//                     <Camera className="w-5 h-5 text-gray-400" />
//                     <span className="text-gray-400">Upload images (max 5)</span>
//                   </label>

//                   {formData.images.length > 0 && (
//                     <div className="grid grid-cols-3 gap-2">
//                       {formData.images.map((image, index) => (
//                         <div key={index} className="relative group">
//                           <Image
//                             fill
//                             src={image.preview}
//                             alt={`Upload ${index + 1}`}
//                             className="w-full h-20 object-cover rounded-lg"
//                           />
//                           <button
//                             type="button"
//                             onClick={() => removeImage(index)}
//                             className="absolute top-1 right-1 p-1 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
//                           >
//                             <X className="w-3 h-3 text-white" />
//                           </button>
//                         </div>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Submit Section */}
//           <div className="flex justify-end gap-3 mt-6 pt-6 border-t border-white/20">
//             <button
//               type="button"
//               onClick={onClose}
//               className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
//               disabled={isSubmitting}
//             >
//               Cancel
//             </button>
//             <button
//               type="button"
//               onClick={handleSubmit}
//               disabled={isSubmitting || formData.rating === 0}
//               className="px-6 py-2 bg-[#7F6456]/20 backdrop-blur-xl border border-[#7F6456]/30 rounded-lg text-amber-100 font-semibold hover:bg-[#7F6456]/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center gap-2"
//             >
//               {isSubmitting ? (
//                 <>
//                   <div className="animate-spin rounded-full h-4 w-4 border-2 border-amber-100/30 border-t-amber-100"></div>
//                   Submitting...
//                 </>
//               ) : (
//                 <>
//                   <Send className="w-4 h-4" />
//                   Submit Review
//                 </>
//               )}
//             </button>
//           </div>

//           {/* Status Messages */}
//           {submitStatus === "success" && (
//             <div className="mt-4 p-4 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center gap-2 text-green-400">
//               <CheckCircle className="w-5 h-5" />
//               Review submitted successfully! Thank you for your feedback.
//             </div>
//           )}

//           {submitStatus === "error" && (
//             <div className="mt-4 p-4 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center gap-2 text-red-400">
//               <AlertCircle className="w-5 h-5" />
//               Failed to submit review. Please try again.
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// // Demo component to show usage
// const ReviewFormDemo = () => {
//   const [showProjectReview, setShowProjectReview] = useState(false);
//   const [reviews, setReviews] = useState([]);

//   const fetchData = async () => {
//     const res = await fetch("/api/reviews/getReviews");

//     const data = await res.json();

//     setReviews(data);
//   };
//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <>
//       <div className="min-h-screen p-6">
//         <div className=" mx-auto">
//           <div className="flex justify-end">
//             <button
//               onClick={() => setShowProjectReview(true)}
//               className="px-6 py-3 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 rounded-lg text-blue-400 font-semibold transition-all duration-300 flex items-center gap-2 justify-center"
//             >
//               Add review
//             </button>
//           </div>

//           <ReviewForm
//             isOpen={showProjectReview}
//             onClose={() => setShowProjectReview(false)}
//             type="project"
//             fetchData={fetchData}
//             // itemData={sampleProject}
//           />

//           <ReviewRatingUI reviews={reviews} fetchData={fetchData} />
//         </div>
//       </div>
//     </>
//   );
// };

// export default ReviewFormDemo;

"use client";
import { toast } from "sonner";
import React, { JSX, useEffect, useState } from "react";
import {
  Star,
  User,
  MessageSquare,
  Camera,
  X,
  Send,
  CheckCircle,
  AlertCircle,
  Home,
  Wrench,
  Copy,
} from "lucide-react";
import { nanoid } from "nanoid";
import ReviewRatingUI from "@/components/admin/testimonial";
import Image from "next/image";
import { supabase } from "@/lib/supabaseClient";

// Type definitions
interface Service {
  id: string;
  service_name: string;
}

interface ImageFile {
  file: File;
  preview: string;
  name: string;
}

interface FormData {
  name: string;
  email: string;
  rating: number;
  title: string;
  review: string;
  dynamic_link: string;
  images: ImageFile[];
  projectPhase: string;
  company: string;
  serviceDate?: string;
  responseTime?: number;
  professionalism?: number;
  projectDuration?: string;
}

interface ItemData {
  title?: string;
  [key: string]: unknown;
}

interface Review {
  id: number;
  name: string;
  email: string;
  rating: number;
  review: string;
  company: string;
  service_id: number;
  dynamic_link?: string;
  is_readed: boolean;
  is_dynamic: boolean;
  showOnLanding: boolean;
  image?: string;
  created_at: string;
  [key: string]: unknown;
}

interface ReviewFormProps {
  isOpen: boolean;
  onClose: () => void;
  type?: "project" | "service";
  itemData?: ItemData | null;
  fetchData: () => Promise<void>;
}

type SubmitStatus = "success" | "error" | null;

const ReviewForm: React.FC<ReviewFormProps> = ({
  isOpen,
  onClose,
  type = "project",
  itemData = null,
  fetchData,
}) => {
  const [services, setServices] = useState<Service[]>([]);
  const [isDynamicLinkEnabled, setIsDynamicLinkEnabled] =
    useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    rating: 0,
    title: "",
    review: "",
    dynamic_link: "",
    images: [],
    projectPhase: "",
    company: "",
  });

  const [hoveredRating, setHoveredRating] = useState<number>(0);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null);

  const handlecopy = (): void => {
    navigator.clipboard
      .writeText(`https://arkiwooduae.com/testimonial/${formData.dynamic_link}`)
      .then(() => {
        toast.success(
          `Copied to clipboard: https://arkiwooduae.com/testimonial/${formData.dynamic_link}`
        );
      })
      .catch((err) => {
        console.error("Failed to copy!", err);
      });
  };

  const handleInputChange = (
    field: keyof FormData,
    value: string | number | ImageFile[]
  ): void => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleDinamicLink = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setIsDynamicLinkEnabled(e.target.checked);
    if (e.target.checked) {
      const id = nanoid(10);
      setFormData((prev) => ({ ...prev, dynamic_link: id }));
    } else {
      setFormData((prev) => ({ ...prev, dynamic_link: "" }));
    }
    console.log("clicked", e);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const files = Array.from(e.target.files || []);
    if (files.length + formData.images.length > 1) {
      alert("Maximum 1 images allowed");
      return;
    }

    const newImages: ImageFile[] = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
      name: file.name,
    }));

    setFormData((prev) => ({
      ...prev,
      images: newImages,
    }));
  };

  const removeImage = (index: number): void => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  useEffect(() => {
    const getData = async (): Promise<void> => {
      try {
        const res = await fetch("/api/services/getServices?serviceId=true");
        const { data }: { data: Service[] } = await res.json();
        console.log("data", data);
        setServices(data || []);
      } catch (error) {
        console.error("Error fetching services:", error);
        setServices([]);
      }
    };
    getData();
  }, []);

  const resetForm = (): void => {
    setFormData({
      name: "",
      email: "",
      rating: 0,
      title: "",
      review: "",
      dynamic_link: "",
      images: [],
      projectPhase: type === "project" ? "completed" : "",
      company: "",
      professionalism: type === "service" ? 5 : 0,
    });
    setSubmitStatus(null);
  };
  const uploadImage = async (name: string, file: File) => {
    const path = `projects/${name}/${nanoid()}-${file.name}`;

    const { error } = await supabase.storage
      .from("static.images")
      .upload(path, file, { contentType: file.type });

    if (error) console.log(error);

    const url = supabase.storage.from("static.images").getPublicUrl(path)
      .data.publicUrl;
    console.log(url);
    return { image_url: url, path };
  };
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const newForm = new FormData();
      newForm.append("name", formData.name);
      newForm.append("email", formData.email);

      if (!isDynamicLinkEnabled) {
        newForm.append("rating", formData.rating.toString());
        newForm.append("review", formData.review);
      } else {
        newForm.append("isDynamicLinkEnabled", "true");
      }

      if (formData.images[0]?.file) {
        const data = await uploadImage(
          formData.projectPhase,
          formData.images[0].file
        );
        newForm.append("image", JSON.stringify(data));
      }

      newForm.append("dynamic_link", formData.dynamic_link);
      newForm.append("service_id", formData.projectPhase);
      newForm.append("company", formData.company);

      toast.promise(
        fetch("/api/reviews/createReviews", {
          method: "POST",
          body: newForm,
        }),
        {
          loading: "Loading...",
          success: () => {
            resetForm();
            onClose();
            fetchData();
            return "New project successfully added";
          },
          error: "Error",
        }
      );
    } catch (error) {
      console.error("Submit error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStarRating = (
    currentRating: number,
    onRate: (rating: number) => void,
    size: string = "w-6 h-6"
  ): JSX.Element => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => onRate(star)}
            onMouseEnter={() => setHoveredRating(star)}
            onMouseLeave={() => setHoveredRating(0)}
            className="transition-colors"
          >
            <Star
              className={`${size} transition-colors ${
                star <= (hoveredRating || currentRating)
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-400 hover:text-yellow-300"
              }`}
            />
          </button>
        ))}
      </div>
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="backdrop-blur-xl bg-white/10 rounded-2xl border border-white/20 shadow-2xl max-w-4xl w-full max-h-[95vh] overflow-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              {type === "project" ? (
                <Home className="w-8 h-8 text-blue-400" />
              ) : (
                <Wrench className="w-8 h-8 text-green-400" />
              )}
              <div>
                <h2 className="text-2xl font-bold text-white">
                  {type === "project" ? "Project Review" : "Service Review"}
                </h2>
                <p className="text-gray-300">
                  {itemData?.title || `Share your ${type} experience`}
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Personal Information */}
              <div className="backdrop-blur-sm bg-white/5 rounded-lg p-4">
                <h3 className="text-white font-medium mb-4 flex items-center gap-2">
                  <User className="w-5 h-5 text-blue-400" />
                  Your Information
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-300 text-sm mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm mb-2">
                      Company/Organization *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) =>
                        handleInputChange("company", e.target.value)
                      }
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                      placeholder="company"
                    />
                  </div>
                </div>
              </div>

              {/* Overall Rating */}
              <div
                className={`${
                  !isDynamicLinkEnabled
                    ? "opacity-100"
                    : "opacity-75 cursor-not-allowed "
                } backdrop-blur-sm bg-white/5 rounded-lg p-4`}
              >
                <h3 className="text-white font-medium mb-4">
                  Overall Rating *
                </h3>
                <div className="flex items-center gap-4">
                  {renderStarRating(
                    formData.rating,
                    (rating) => handleInputChange("rating", rating),
                    "w-8 h-8"
                  )}
                  <span className="text-gray-300">
                    {formData.rating > 0 && `${formData.rating}/5`}
                  </span>
                </div>
              </div>

              {/* Type-specific fields */}
              {type === "project" ? (
                <div className="backdrop-blur-sm bg-white/5 rounded-lg p-4">
                  <h3 className="text-white font-medium mb-4 flex items-center gap-2">
                    <Home className="w-5 h-5 text-purple-400" />
                    Service Details
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <select
                        value={formData.projectPhase}
                        onChange={(e) =>
                          handleInputChange("projectPhase", e.target.value)
                        }
                        className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                      >
                        <option className="text-black" value="">
                          Select option
                        </option>
                        {services?.map((data) => (
                          <option
                            key={data.service_name + "option"}
                            className="text-black"
                            value={data.id}
                          >
                            {data.service_name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="backdrop-blur-sm bg-white/5 rounded-lg p-4">
                  <h3 className="text-white font-medium mb-4 flex items-center gap-2">
                    <Wrench className="w-5 h-5 text-green-400" />
                    Service Details
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-300 text-sm mb-2">
                        Service Date
                      </label>
                      <input
                        type="date"
                        value={formData.serviceDate || ""}
                        onChange={(e) =>
                          handleInputChange("serviceDate", e.target.value)
                        }
                        className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm mb-2">
                        Response Time Rating
                      </label>
                      {renderStarRating(formData.responseTime || 0, (rating) =>
                        handleInputChange("responseTime", rating)
                      )}
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm mb-2">
                        Professionalism Rating
                      </label>
                      {renderStarRating(
                        formData.professionalism || 0,
                        (rating) => handleInputChange("professionalism", rating)
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Recommendation */}
              <div className="backdrop-blur-sm bg-white/5 rounded-lg p-4">
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer text-white">
                    <input
                      type="checkbox"
                      name="dynamic_link"
                      checked={isDynamicLinkEnabled}
                      onChange={handleDinamicLink}
                      className="text-green-400 focus:ring-green-500"
                    />
                    <span>Auto-gen review link</span>
                  </label>
                </div>
                {!!formData.dynamic_link.length && (
                  <div className="flex gap-4 text-md ">
                    <Copy
                      className="text-white/40 hover:text-white/20 transition-colors cursor-pointer"
                      onClick={handlecopy}
                    />
                    <p className="text-blue-500 ">
                      https://arkiwooduae.com/testimonial/
                      {formData.dynamic_link}
                    </p>
                  </div>
                )}
              </div>

              {/* Review Content */}
              <div
                className={`${
                  !isDynamicLinkEnabled
                    ? "opacity-100"
                    : "opacity-75 cursor-not-allowed "
                } backdrop-blur-sm bg-white/5 rounded-lg p-4`}
              >
                <h3 className="text-white font-medium mb-4 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-yellow-400" />
                  Your Review
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-300 text-sm mb-2">
                      Detailed Review *
                    </label>
                    <textarea
                      disabled={isDynamicLinkEnabled}
                      required
                      rows={6}
                      value={formData.review}
                      onChange={(e) =>
                        handleInputChange("review", e.target.value)
                      }
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 resize-none"
                      placeholder={`Tell us about your ${type} experience. What did you like? What could be improved?`}
                    />
                  </div>
                  <p className="text-red-600">
                    {isDynamicLinkEnabled ? "Disabled" : ""}
                  </p>
                </div>
              </div>

              {/* Image Upload */}
              <div className="backdrop-blur-sm bg-white/5 rounded-lg p-4">
                <h3 className="text-white font-medium mb-4 flex items-center gap-2">
                  <Camera className="w-5 h-5 text-purple-400" />
                  Photos 
                </h3>
                <div className="space-y-4">
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="image-upload"
                  />
                  <label
                    htmlFor="image-upload"
                    className="flex items-center justify-center gap-2 p-4 border-2 border-dashed border-white/20 rounded-lg cursor-pointer hover:border-white/40 transition-colors"
                  >
                    <Camera className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-400">Upload images 1</span>
                  </label>

                  {formData.images.length > 0 && (
                    <div className="grid grid-cols-3 gap-2">
                      {formData.images.map((image, index) => (
                        <div key={index} className="relative group">
                          <div className="relative w-full h-20">
                            <Image
                              fill
                              src={image.preview}
                              alt={`Upload ${index + 1}`}
                              className="object-cover rounded-lg"
                            />
                          </div>
                          <button
                            type="button"
                            onClick={() => removeImage(index)}
                            className="absolute top-1 right-1 p-1 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <X className="w-3 h-3 text-white" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Submit Section */}
          <div className="flex justify-end gap-3 mt-6 pt-6 border-t border-white/20">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting || formData.rating === 0}
              className="px-6 py-2 bg-[#7F6456]/20 backdrop-blur-xl border border-[#7F6456]/30 rounded-lg text-amber-100 font-semibold hover:bg-[#7F6456]/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-amber-100/30 border-t-amber-100"></div>
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Submit Review
                </>
              )}
            </button>
          </div>

          {/* Status Messages */}
          {submitStatus === "success" && (
            <div className="mt-4 p-4 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center gap-2 text-green-400">
              <CheckCircle className="w-5 h-5" />
              Review submitted successfully! Thank you for your feedback.
            </div>
          )}

          {submitStatus === "error" && (
            <div className="mt-4 p-4 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center gap-2 text-red-400">
              <AlertCircle className="w-5 h-5" />
              Failed to submit review. Please try again.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Demo component to show usage
const ReviewFormDemo: React.FC = () => {
  const [showProjectReview, setShowProjectReview] = useState<boolean>(false);
  const [reviews, setReviews] = useState<Review[]>([]);

  const fetchData = async (): Promise<void> => {
    try {
      const res = await fetch("/api/reviews/getReviews");
      const data: Review[] = await res.json();
      setReviews(data);
    } catch (error) {
      console.error("Error fetching reviews:", error);
      setReviews([]);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="min-h-screen p-6">
        <div className="mx-auto">
          <div className="flex justify-end">
            <button
              onClick={() => setShowProjectReview(true)}
              className="px-6 py-3 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 rounded-lg text-blue-400 font-semibold transition-all duration-300 flex items-center gap-2 justify-center"
            >
              Add review
            </button>
          </div>

          <ReviewForm
            isOpen={showProjectReview}
            onClose={() => setShowProjectReview(false)}
            type="project"
            fetchData={fetchData}
          />

          <ReviewRatingUI reviews={reviews} fetchData={fetchData}  />
        </div>
      </div>
    </>
  );
};

export default ReviewFormDemo;
