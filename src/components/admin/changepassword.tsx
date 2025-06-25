"use client";
import React, { useState } from "react";
import {  Save, } from "lucide-react";
// import { toast } from "sonner";

const ChangePassword = ({
  inistalData,
}: {
  inistalData: { phone_number: string; whatsApp_number: string };
}) => {
  const [contactInfo] = useState({
    landingPageNumber: inistalData.phone_number,
    whatsappNumber: inistalData.whatsApp_number,
  });
  // const [contactInfoError, setContactInfoError] = useState({
  //   landingPageNumber: false,
  //   whatsappNumber: false,
  // });

  // const [isEditing, setIsEditing] = useState(false);
  const [tempContactInfo, setTempContactInfo] = useState(contactInfo);

  // const isValidUAEPhoneNumber = (phoneNumber: string) => {
  //   if (!phoneNumber || typeof phoneNumber !== "string") {
  //     return false;
  //   }

  //   const cleanNumber = phoneNumber.replace(/[\s\-\(\)]/g, "");

  //   const uaePatterns = [
  //     /^\+971(5[024568]|[2-4679])\d{7}$/, // +971
  //     /^00971(5[024568]|[2-4679])\d{7}$/, // 00971
  //     /^0(5[024568]|[2-4679])\d{7}$/, // 0
  //     /^971(5[024568]|[2-4679])\d{7}$/, // 971
  //   ];

  //   return uaePatterns.some((pattern) => pattern.test(cleanNumber));
  // };

  // Enhanced validation with more detailed error messages
  // const validateUAEPhoneNumber = (phoneNumber: string) => {
  //   if (!phoneNumber || typeof phoneNumber !== "string") {
  //     return { isValid: false, error: "Phone number is required" };
  //   }

  //   const cleanNumber = phoneNumber.replace(/[\s\-\(\)]/g, "");

  //   // Check if it's a valid UAE number
  //   if (!isValidUAEPhoneNumber(cleanNumber)) {
  //     return {
  //       isValid: false,
  //       error:
  //         "Please enter a valid UAE phone number (e.g., +971 50 123 4567 or 050 123 4567)",
  //     };
  //   }

  //   return { isValid: true, error: null };
  // };
  const handleSave = () => {
    // if (!validateUAEPhoneNumber(tempContactInfo.landingPageNumber).isValid) {
    //   setContactInfoError((prv) => ({ ...prv, landingPageNumber: true }));
    //   return;
    // } else {
    //   setContactInfoError((prv) => ({ ...prv, landingPageNumber: false }));
    // }

    // if (!validateUAEPhoneNumber(tempContactInfo.whatsappNumber).isValid) {
    //   setContactInfoError((prv) => ({ ...prv, whatsappNumber: true }));
    //   return;
    // } else {
    //   setContactInfoError((prv) => ({ ...prv, whatsappNumber: false }));
    // }
    // setContactInfoError({ landingPageNumber: false, whatsappNumber: false });

    // const res = fetch("/api/adminDashboard/updateNumbers", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(tempContactInfo),
    // });

    // toast.promise(res, {
    //   loading: "Loading...",
    //   success: () => {
    //     setContactInfo(tempContactInfo);
    //     setIsEditing(false);

    //     return `phone number and whatsapp successfully updated`;
    //   },
    //   error: () => {
    //     setIsEditing(false);
    //     return `error`;
    //   },
    // });
  };

  // const handleCancel = () => {
  //   setTempContactInfo(contactInfo);
  //   setIsEditing(false);
  // };

  return (
    <div className=" pt-6">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Contact Information Section */}
        <div className="mb-8">
          <div className="backdrop-blur-md bg-white/10 rounded-2xl border border-white/20 shadow-2xl p-6 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-white flex items-center gap-3">
                {/* <Phone className="text-[#7F6456]" size={28} /> */}
                change password
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">
                  Old password
                </label>

                <input
                  type="tel"
                  value={tempContactInfo.landingPageNumber}
                  onChange={(e) =>
                    setTempContactInfo((prev) => ({
                      ...prev,
                      landingPageNumber: e.target.value,
                    }))
                  }
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7F6456] focus:border-transparent"
                />

                {/* {contactInfoError.landingPageNumber && (
                  <div>
                    Please enter a valid UAE phone number (e.g., +971 50 123
                    4567 or 050 123 4567)
                  </div> 
               )} */}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">
                  New Password
                </label>

                <input
                  type="tel"
                  value={tempContactInfo.whatsappNumber}
                  onChange={(e) =>
                    setTempContactInfo((prev) => ({
                      ...prev,
                      whatsappNumber: e.target.value,
                    }))
                  }
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7F6456] focus:border-transparent"
                />
                {/*                
                {contactInfoError.whatsappNumber && (
                  <div>
                    Please enter a valid UAE phone number (e.g., +971 50 123
                    4567 or 050 123 4567)
                  </div>
                )} */}
              </div>
            </div>

            <div className="flex gap-3 mt-6 pt-6 border-t border-white/10">
              <button
                onClick={handleSave}
                className="flex items-center gap-2 px-6 py-3 bg-[#7F6456] text-white rounded-lg hover:bg-[#7F6456]/80 transition-all duration-200 font-medium"
              >
                <Save size={16} />
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
