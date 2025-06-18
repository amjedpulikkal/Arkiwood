"use client";
import React, { useState } from "react";
import {
  Phone,
  MessageCircle,
  Settings,
  Briefcase,
  FolderOpen,
  Mail,
  Save,
  Edit3,
  Star,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const AdminDashboard = () => {
  const router = useRouter();
  const [contactInfo, setContactInfo] = useState({
    landingPageNumber: "+1 (555) 123-4567",
    whatsappNumber: "+1 (555) 987-6543",
  });
  const [contactInfoError, setContactInfoError] = useState({
    landingPageNumber: false,
    whatsappNumber: false,
  });

  const [isEditing, setIsEditing] = useState(false);
  const [tempContactInfo, setTempContactInfo] = useState(contactInfo);
  const isValidUAEPhoneNumber = (phoneNumber: string) => {
    if (!phoneNumber || typeof phoneNumber !== "string") {
      return false;
    }

    // Remove all spaces, dashes, and parentheses
    const cleanNumber = phoneNumber.replace(/[\s\-\(\)]/g, "");

    // UAE phone number patterns:
    // Mobile: +971 5X XXX XXXX (050, 052, 054, 055, 056, 058)
    // Landline: +971 X XXX XXXX (02, 03, 04, 06, 07, 09)

    const uaePatterns = [
      // With country code +971
      /^\+971(5[02456]|[2-4679])\d{7}$/,
      // With country code 00971
      /^00971(5[02456]|[2-4679])\d{7}$/,
      // Without country code (domestic format)
      /^0(5[02456]|[2-4679])\d{7}$/,
      // International format without + or 00
      /^971(5[02456]|[2-4679])\d{7}$/,
    ];

    return uaePatterns.some((pattern) => pattern.test(cleanNumber));
  };

  // Enhanced validation with more detailed error messages
  const validateUAEPhoneNumber = (phoneNumber: string) => {
    if (!phoneNumber || typeof phoneNumber !== "string") {
      return { isValid: false, error: "Phone number is required" };
    }

    // const cleanNumber = phoneNumber.replace(/[\s\-\(\)]/g, "");

    // Check if it's a valid UAE number
    if (!isValidUAEPhoneNumber(phoneNumber)) {
      return {
        isValid: false,
        error:
          "Please enter a valid UAE phone number (e.g., +971 50 123 4567 or 050 123 4567)",
      };
    }

    return { isValid: true, error: null };
  };
  const handleSave = () => {
    if (!validateUAEPhoneNumber(tempContactInfo.landingPageNumber).isValid) {
      setContactInfoError((prv) => ({ ...prv, landingPageNumber: true }));
      return;
    } else {
      setContactInfoError((prv) => ({ ...prv, landingPageNumber: false }));
    }

    if (!validateUAEPhoneNumber(tempContactInfo.whatsappNumber).isValid) {
      setContactInfoError((prv) => ({ ...prv, whatsappNumber: true }));
      return;
    } else {
      setContactInfoError((prv) => ({ ...prv, whatsappNumber: false }));
    }
    setContactInfoError({ landingPageNumber: false, whatsappNumber: false });

    const res = fetch("/api/adminDashboard/updateNumbers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(tempContactInfo),
    });

    toast.promise(res, {
      loading: "Loading...",
      success: () => {
        setContactInfo(tempContactInfo);
        setIsEditing(false);

        return `phone number and whatsapp successfully updated`;
      },
      error: () => {
        setIsEditing(false);
        return `error`;
      },
    });
  };

  const handleCancel = () => {
    setTempContactInfo(contactInfo);
    setIsEditing(false);
  };

  const shortcuts = [
    {
      name: "Services Section",
      icon: Settings,
      description: "Manage service offerings",
      action: "/admin/dashboard/services",
    },
    {
      name: "Projects Section",
      icon: FolderOpen,
      description: "View and edit projects",
      action: "/admin/dashboard/projects",
    },
    {
      name: "Messages",
      icon: Mail,
      description: "Customer inquiries",
      action: "/admin/dashboard/messages",
    },
    {
      name: "Review Management",
      icon: Star,
      description: "Customer Review",
      action: "/admin/dashboard/review",
    },
  ];

  return (
    <div className="min-h-screen  p-6">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-10">
        {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div> */}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold  mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Admin Dashboard
          </h1>
          <p className="text-gray-300">
            Manage your website content and services
          </p>
        </div>

        {/* Contact Information Section */}
        <div className="mb-8">
          <div className="backdrop-blur-md bg-white/10 rounded-2xl border border-white/20 shadow-2xl p-6 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-white flex items-center gap-3">
                <Phone className="text-[#7F6456]" size={28} />
                Contact Information
              </h2>
              <button
                onClick={() =>
                  isEditing ? handleCancel() : setIsEditing(true)
                }
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#7F6456]/20 border border-[#7F6456]/30 text-[#7F6456] hover:bg-[#7F6456]/30 transition-all duration-200"
              >
                <Edit3 size={16} />
                {isEditing ? "Cancel" : "Edit"}
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">
                  Landing Page Phone Number
                </label>
                {isEditing ? (
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
                ) : (
                  <div className="flex items-center gap-3 px-4 py-3 bg-white/5 rounded-lg border border-white/10">
                    <Phone className="text-[#7F6456]" size={20} />
                    <span className="text-white font-mono">
                      {contactInfo.landingPageNumber}
                    </span>
                  </div>
                )}
                {contactInfoError.landingPageNumber && (
                  <div>
                    Please enter a valid UAE phone number (e.g., +971 50 123
                    4567 or 050 123 4567)
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">
                  WhatsApp Number
                </label>
                {isEditing ? (
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
                ) : (
                  <div className="flex items-center gap-3 px-4 py-3 bg-white/5 rounded-lg border border-white/10">
                    <MessageCircle className="text-green-400" size={20} />
                    <span className="text-white font-mono">
                      {contactInfo.whatsappNumber}
                    </span>
                  </div>
                )}
                {contactInfoError.whatsappNumber && (
                  <div>
                    Please enter a valid UAE phone number (e.g., +971 50 123
                    4567 or 050 123 4567)
                  </div>
                )}
              </div>
            </div>

            {isEditing && (
              <div className="flex gap-3 mt-6 pt-6 border-t border-white/10">
                <button
                  onClick={handleSave}
                  className="flex items-center gap-2 px-6 py-3 bg-[#7F6456] text-white rounded-lg hover:bg-[#7F6456]/80 transition-all duration-200 font-medium"
                >
                  <Save size={16} />
                  Save Changes
                </button>
                <button
                  onClick={handleCancel}
                  className="px-6 py-3 bg-white/10 text-white rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-200"
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Quick Shortcuts Section */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
            <Briefcase className="text-[#7F6456]" size={28} />
            Quick Access
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shortcuts.map((shortcut, index) => {
              const IconComponent = shortcut.icon;
              return (
                <div
                  key={shortcut.name}
                  onClick={() => router.push(shortcut.action)}
                  className="group backdrop-blur-md bg-white/10 rounded-2xl border border-white/20 shadow-2xl p-6 hover:bg-white/15 hover:scale-105 transition-all duration-300 cursor-pointer"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-r bg-[#7F6456] shadow-lg`}
                    >
                      <IconComponent className="text-white" size={24} />
                    </div>
                    {/* <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div> */}
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#7F6456] transition-colors duration-200">
                    {shortcut.name}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {shortcut.description}
                  </p>

                  <div className="mt-4 pt-4 border-t border-white/10">
                    <span className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors duration-200">
                      Click to access →
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Floating Action Buttons */}
      </div>
    </div>
  );
};

export default AdminDashboard;
