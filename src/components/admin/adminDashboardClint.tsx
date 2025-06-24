"use client";
import React from "react";
import {
  Settings,
  Briefcase,
  FolderOpen,
  Mail,
  Star,
} from "lucide-react";
import { useRouter } from "next/navigation";

const AdminDashboard = () => {
  const router = useRouter();

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
