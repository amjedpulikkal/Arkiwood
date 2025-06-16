// "use client";

// // import { motion } from "motion/react";
// // import Image from "next/image";
// import React, { useState } from "react";
// export default function ContactCom() {
//   const [formData, setFormData] = useState({
//     fullname: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   // const [_, setFocusedField] = useState("");
//   const handleInputChange = (
//     e: React.ChangeEvent<
//       HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
//     >
//   ) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const response = await fetch("/api/contact", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(formData),
//     });

//     const result = await response.json();
//     if (response.ok) {
//       alert("Message sent!");
//     } else {
//       alert(`Error: ${result.error}`);
//     }
//   };

//   return (
//     <>
//       <div
//         id="contact"
//         className="relative min-h-screen bg-gradient-to-br from-[#2C2C2C] via-[#3D3D3D] to-[#1A1A1A] overflow-hidden"
//       >
//         <div className="absolute inset-0 opacity-5">
//           <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fill-rule=evenodd%3E%3Cg fill=%23ffffff fill-opacity=0.1%3E%3Ccircle cx=7 cy=7 r=1/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
//         </div>

//         <div className="relative z-10 sm:flex justify-between gap-8 p-5 sm:p-10 sm:pt-20 text-white">
//           <div className="w-full lg:w-2/5 mt-14 space-y-8">
//             <div className="mb-12">
//               <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-[#D4C4B0] bg-clip-text text-transparent">
//                 Get In Touch
//               </h2>
//               <div className="w-20 h-1 bg-gradient-to-r from-[#7F6456] to-[#A68B7A]"></div>
//               <p className="text-[#D4C4B0] mt-4 text-lg">
//                 Ready to transform your space? Let&apos;start the conversation.
//               </p>
//             </div>

//             <div className="space-y-6">
//               <div className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300">
//                 <div className="w-12 h-12 bg-gradient-to-br from-[#7F6456] to-[#A68B7A] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
//                   <svg
//                     className="w-6 h-6 text-white"
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                   >
//                     <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
//                     <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
//                   </svg>
//                 </div>
//                 <div>
//                   <p className="text-[#D4C4B0] font-medium">Email</p>
//                   <p className="text-white text-lg">info@arkiwooduae.com</p>
//                 </div>
//               </div>

//               <div className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300">
//                 <div className="w-12 h-12 bg-gradient-to-br from-[#7F6456] to-[#A68B7A] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
//                   <svg
//                     className="w-6 h-6 text-white"
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                   >
//                     <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
//                   </svg>
//                 </div>
//                 <div>
//                   <p className="text-[#D4C4B0] font-medium">Phone</p>
//                   <p className="text-white text-lg">+971 457 599 06</p>
//                 </div>
//               </div>

//               <div className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300">
//                 <div className="w-12 h-12 bg-gradient-to-br from-[#7F6456] to-[#A68B7A] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
//                   <svg
//                     className="w-6 h-6 text-white"
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 </div>
//                 <div>
//                   <p className="text-[#D4C4B0] font-medium">Address</p>
//                   <p className="text-white text-lg leading-relaxed">
//                     Office 204, Dar Al Nahda Building,
//                     <br />
//                     Hor Al Anz East - Dubai, UAE
//                     <br />
//                     PO Box: 17736
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-[#7F6456]/20 h-64">
//               <iframe
//                 className="w-full h-full"
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28863.266637976303!2d55.33414840390514!3d25.27366900801435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d9eb53dae23%3A0xb67c5e75a9851be1!2sDar%20Al%20Nahda%20Building%20%23%2041!5e0!3m2!1sen!2sin!4v1741098838758!5m2!1sen!2sin"
//                 style={{ border: 0 }}
//                 loading="lazy"
//               />
//             </div>
//           </div>

//           <div className="w-full lg:w-3/5 lg:pl-8 ">
//             <div className="bg-gradient-to-br  sm:mt-0 mt-10 from-white/10 to-white/5 backdrop-blur-sm rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
//               <div className="p-8 sm:p-12">
//                 <div className="mb-8">
//                   <h3 className="text-3xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-[#D4C4B0] to-[#7F6456] bg-clip-text text-transparent leading-tight">
//                     Let&apos;Build Your Dream Together
//                   </h3>
//                   <p className="text-[#D4C4B0] text-xl font-light">
//                     Your perfect space is just a call away.
//                   </p>
//                 </div>

//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   {/* Full Name */}
//                   <div className="group">
//                     <label className="block text-[#D4C4B0] font-medium mb-2 transition-colors duration-300 group-focus-within:text-[#7F6456]">
//                       Full Name
//                     </label>
//                     <input
//                       type="text"
//                       name="fullname"
//                       value={formData.fullname}
//                       onChange={handleInputChange}
//                       // onFocus={() => setFocusedField("fullname")}
//                       // onBlur={() => setFocusedField("")}
//                       className="w-full bg-transparent border-b-2 border-white/30 pb-3 text-white text-lg placeholder:text-white/50 focus:outline-none focus:border-[#7F6456] transition-colors duration-300"
//                       placeholder="Enter your full name"
//                     />
//                   </div>

//                   {/* Email */}
//                   <div className="group">
//                     <label className="block text-[#D4C4B0] font-medium mb-2 transition-colors duration-300 group-focus-within:text-[#7F6456]">
//                       Email
//                     </label>
//                     <input
//                       type="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleInputChange}
//                       // onFocus={() => setFocusedField("email")}
//                       // onBlur={() => setFocusedField("")}
//                       className="w-full bg-transparent border-b-2 border-white/30 pb-3 text-white text-lg placeholder:text-white/50 focus:outline-none focus:border-[#7F6456] transition-colors duration-300"
//                       placeholder="Enter your email"
//                     />
//                   </div>

//                   {/* Phone */}
//                   <div className="group">
//                     <label className="block text-[#D4C4B0] font-medium mb-2 transition-colors duration-300 group-focus-within:text-[#7F6456]">
//                       Phone Number
//                     </label>
//                     <input
//                       type="tel"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleInputChange}
//                       // onFocus={() => setFocusedField("phone")}
//                       // onBlur={() => setFocusedField("")}
//                       className="w-full bg-transparent border-b-2 border-white/30 pb-3 text-white text-lg placeholder:text-white/50 focus:outline-none focus:border-[#7F6456] transition-colors duration-300"
//                       placeholder="Enter your phone number"
//                     />
//                   </div>

//                   {/* Message */}
//                   <div className="group">
//                     <label className="block text-[#D4C4B0] font-medium mb-2 transition-colors duration-300 group-focus-within:text-[#7F6456]">
//                       Message
//                     </label>
//                     <textarea
//                       name="message"
//                       value={formData.message}
//                       onChange={handleInputChange}
//                       // onFocus={() => setFocusedField("message")}
//                       // onBlur={() => setFocusedField("")}
//                       // rows="4"
//                       className="w-full bg-white/5 border-2 border-white/20 rounded-2xl p-4 text-white text-lg placeholder:text-white/50 focus:outline-none focus:border-[#7F6456] focus:bg-white/10 transition-all duration-300 resize-none"
//                       placeholder="Tell us about your project..."
//                     />
//                   </div>

//                   {/* Submit Button */}
//                   <button
//                     type="submit"
//                     className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#7F6456] to-[#A68B7A] text-white font-semibold text-lg rounded-full hover:from-[#6B5447] hover:to-[#7F6456] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#7F6456]/30"
//                   >
//                     <span className="flex items-center justify-center gap-2">
//                       Send Message
//                       <svg
//                         className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
//                         fill="currentColor"
//                         viewBox="0 0 20 20"
//                       >
//                         <path
//                           fillRule="evenodd"
//                           d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
//                           clipRule="evenodd"
//                         />
//                       </svg>
//                     </span>
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


"use client";

import React, { useState } from "react";

interface FormData {
  fullname: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  fullname?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default function ContactCom() {
  const [formData, setFormData] = useState<FormData>({
    fullname: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Validation functions
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    // UAE phone number pattern: +971 followed by 8-9 digits or local format
    const uaePhoneRegex = /^(\+971|00971|971)?[\s-]?[0-9]{8,9}$/;
    const cleanPhone = phone.replace(/[\s-]/g, '');
    return uaePhoneRegex.test(cleanPhone) || /^[0-9]{8,15}$/.test(cleanPhone);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Full name validation
    if (!formData.fullname.trim()) {
      newErrors.fullname = "Full name is required";
    } else if (formData.fullname.trim().length < 2) {
      newErrors.fullname = "Full name must be at least 2 characters";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.fullname.trim())) {
      newErrors.fullname = "Full name should only contain letters and spaces";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    } else if (formData.message.trim().length > 1000) {
      newErrors.message = "Message must be less than 1000 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }

    // Reset submit status when user modifies form
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          // Sanitize data before sending
          fullname: formData.fullname.trim(),
          email: formData.email.trim().toLowerCase(),
          phone: formData.phone.trim(),
          message: formData.message.trim(),
        }),
      });

      const result = await response.json();
      
      if (response.ok) {
        setSubmitStatus('success');
        // Reset form on success
        setFormData({
          fullname: "",
          email: "",
          phone: "",
          message: "",
        });
        setErrors({});
      } else {
        setSubmitStatus('error');
        console.error("Submission error:", result.error);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error("Network error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getFieldClassName = (fieldName: keyof FormErrors, baseClassName: string) => {
    const hasError = errors[fieldName];
    return `${baseClassName} ${hasError ? 'border-red-400 focus:border-red-400' : 'focus:border-[#7F6456]'}`;
  };

  return (
    <>
      <div
        id="contact"
        className="relative min-h-screen bg-gradient-to-br from-[#2C2C2C] via-[#3D3D3D] to-[#1A1A1A] overflow-hidden"
      >
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fill-rule=evenodd%3E%3Cg fill=%23ffffff fill-opacity=0.1%3E%3Ccircle cx=7 cy=7 r=1/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>

        <div className="relative z-10 sm:flex justify-between gap-8 p-5 sm:p-10 sm:pt-20 text-white">
          <div className="w-full lg:w-2/5 mt-14 space-y-8">
            <div className="mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-[#D4C4B0] bg-clip-text text-transparent">
                Get In Touch
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#7F6456] to-[#A68B7A]"></div>
              <p className="text-[#D4C4B0] mt-4 text-lg">
                Ready to transform your space? Let&apos;s start the conversation.
              </p>
            </div>

            <div className="space-y-6">
              <div className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-[#7F6456] to-[#A68B7A] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#D4C4B0] font-medium">Email</p>
                  <p className="text-white text-lg">info@arkiwooduae.com</p>
                </div>
              </div>

              <div className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-[#7F6456] to-[#A68B7A] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#D4C4B0] font-medium">Phone</p>
                  <p className="text-white text-lg">+971 457 599 06</p>
                </div>
              </div>

              <div className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-[#7F6456] to-[#A68B7A] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-[#D4C4B0] font-medium">Address</p>
                  <p className="text-white text-lg leading-relaxed">
                    Office 204, Dar Al Nahda Building,
                    <br />
                    Hor Al Anz East - Dubai, UAE
                    <br />
                    PO Box: 17736
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-[#7F6456]/20 h-64">
              <iframe
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28863.266637976303!2d55.33414840390514!3d25.27366900801435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d9eb53dae23%3A0xb67c5e75a9851be1!2sDar%20Al%20Nahda%20Building%20%23%2041!5e0!3m2!1sen!2sin!4v1741098838758!5m2!1sen!2sin"
                style={{ border: 0 }}
                loading="lazy"
                title="Office Location Map"
              />
            </div>
          </div>

          <div className="w-full lg:w-3/5 lg:pl-8">
            <div className="bg-gradient-to-br sm:mt-0 mt-10 from-white/10 to-white/5 backdrop-blur-sm rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
              <div className="p-8 sm:p-12">
                <div className="mb-8">
                  <h3 className="text-3xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-[#D4C4B0] to-[#7F6456] bg-clip-text text-transparent leading-tight">
                    Let&apos;s Build Your Dream Together
                  </h3>
                  <p className="text-[#D4C4B0] text-xl font-light">
                    Your perfect space is just a call away.
                  </p>
                </div>

                {/* Success/Error Messages */}
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-xl">
                    <p className="text-green-300 font-medium">
                      ✓ Message sent successfully! We&apos;ll get back to you soon.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-xl">
                    <p className="text-red-300 font-medium">
                      ✗ Failed to send message. Please try again or contact us directly.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  {/* Full Name */}
                  <div className="group">
                    <label 
                      htmlFor="fullname"
                      className="block text-[#D4C4B0] font-medium mb-2 transition-colors duration-300 group-focus-within:text-[#7F6456]"
                    >
                      Full Name *
                    </label>
                    <input
                      id="fullname"
                      type="text"
                      name="fullname"
                      value={formData.fullname}
                      onChange={handleInputChange}
                      className={getFieldClassName(
                        'fullname',
                        "w-full bg-transparent border-b-2 border-white/30 pb-3 text-white text-lg placeholder:text-white/50 focus:outline-none transition-colors duration-300"
                      )}
                      placeholder="Enter your full name"
                      required
                      aria-describedby={errors.fullname ? "fullname-error" : undefined}
                    />
                    {errors.fullname && (
                      <p id="fullname-error" className="mt-2 text-red-400 text-sm">
                        {errors.fullname}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="group">
                    <label 
                      htmlFor="email"
                      className="block text-[#D4C4B0] font-medium mb-2 transition-colors duration-300 group-focus-within:text-[#7F6456]"
                    >
                      Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={getFieldClassName(
                        'email',
                        "w-full bg-transparent border-b-2 border-white/30 pb-3 text-white text-lg placeholder:text-white/50 focus:outline-none transition-colors duration-300"
                      )}
                      placeholder="Enter your email"
                      required
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-2 text-red-400 text-sm">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="group">
                    <label 
                      htmlFor="phone"
                      className="block text-[#D4C4B0] font-medium mb-2 transition-colors duration-300 group-focus-within:text-[#7F6456]"
                    >
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={getFieldClassName(
                        'phone',
                        "w-full bg-transparent border-b-2 border-white/30 pb-3 text-white text-lg placeholder:text-white/50 focus:outline-none transition-colors duration-300"
                      )}
                      placeholder="Enter your phone number"
                      required
                      aria-describedby={errors.phone ? "phone-error" : undefined}
                    />
                    {errors.phone && (
                      <p id="phone-error" className="mt-2 text-red-400 text-sm">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="group">
                    <label 
                      htmlFor="message"
                      className="block text-[#D4C4B0] font-medium mb-2 transition-colors duration-300 group-focus-within:text-[#7F6456]"
                    >
                      Message * ({formData.message.length}/1000)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className={getFieldClassName(
                        'message',
                        "w-full bg-white/5 border-2 border-white/20 rounded-2xl p-4 text-white text-lg placeholder:text-white/50 focus:outline-none focus:bg-white/10 transition-all duration-300 resize-none"
                      )}
                      placeholder="Tell us about your project..."
                      required
                      aria-describedby={errors.message ? "message-error" : undefined}
                      maxLength={1000}
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-2 text-red-400 text-sm">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#7F6456] to-[#A68B7A] text-white font-semibold text-lg rounded-full hover:from-[#6B5447] hover:to-[#7F6456] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#7F6456]/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    <span className="flex items-center justify-center gap-2">
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      {!isSubmitting && (
                        <svg
                          className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}