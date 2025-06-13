"use client";

import { useEffect, useState, useRef } from "react";
import {
  BarChart3,
  Users,
  X,
  Home,
  Settings,
  LogOut,
  Mail,
  Bell,
  Star,
  LucideIcon,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import { toast } from "sonner";

// Type definitions
interface SidebarItem {
  icon: LucideIcon;
  label: string;
  href: string;
}

interface InitialData {
  count: number;
}

interface DashboardNavbarProps {
  initialData: InitialData;
}

// interface ContactMessage {
//   id: string;
//   fullname: string;
//   email: string;
//   phone: string;
//   message: string;
//   is_readed: boolean;
//   action_status: string;
// }

// interface SupabasePayload {
//   new: ContactMessage;
//   old: ContactMessage;
// }

const DashboardNavbar: React.FC<DashboardNavbarProps> = ({ initialData }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [messageCount, setMessageCount] = useState<number>(initialData.count);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/mixkit-software-interface-start-2574.mp3");
    audioRef.current.preload = "auto";
  }, []);

  const sidebarItems: SidebarItem[] = [
    { icon: Users, label: "Service", href: "/admin/dashboard/services" },
    { icon: BarChart3, label: "Project", href: "/admin/dashboard/projects" },
    { icon: Star, label: "Review", href: "/admin/dashboard/review" },
    { icon: Settings, label: "Settings", href: "/admin/dashboard/settings" },
  ];

  // Supabase real-time subscription
  supabase
    .channel("global-message-changes")
    .on(
      "postgres_changes",
      {
        event: "INSERT",
        schema: "public",
        table: "contact_messages",
      },
      (payload) => {
        console.log("insert---------");
        if (payload.new) {
          if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play().catch(console.error);
          }
          toast(`New message ${payload.new.fullname}`);
          setMessageCount((pre) => pre + 1);
        }
      }
    )
    .on(
      "postgres_changes",
      {
        event: "UPDATE",
        schema: "public",
        table: "contact_messages",
      },
      (payload) => {
        console.log(payload);
        if (
          payload.new &&
          payload.new.is_readed &&
          payload.new.action_status === payload.old.action_status
        ) {
          setMessageCount((pre) => pre - 1);
        }
      }
    )
    .subscribe();

  const handleNavigation = (href: string): void => {
    router.push(href);
  };

  const handleSidebarToggle = (): void => {
    setSidebarOpen(false);
  };

  const isActiveRoute = (href: string): boolean => {
    if (href === "/admin/dashboard") {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  const getButtonClasses = (href: string): string => {
    return `w-full flex items-center space-x-3 p-3 rounded-xl transition-all duration-200 hover:bg-white/10 ${
      isActiveRoute(href) ? "bg-[#7F6456]/20 border border-[#7F6456]/30" : ""
    }`;
  };

  const getTextClasses = (href: string): string => {
    return isActiveRoute(href) ? "text-[#7F6456]" : "text-gray-300";
  };

  return (
    <>
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="h-full backdrop-blur-xl bg-white/10 border-r border-white/20 shadow-2xl">
          <div className="flex items-center justify-between p-6 border-b border-white/20">
            <h2 className="text-xl font-bold text-white">Admin Panel</h2>
            <button
              onClick={handleSidebarToggle}
              className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors text-white"
              aria-label="Close sidebar"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="p-4 space-y-2">
            {/* Dashboard Button */}
            <button
              onClick={() => handleNavigation("/admin/dashboard")}
              className={getButtonClasses("/admin/dashboard")}
              aria-label="Navigate to Dashboard"
            >
              <Home size={20} className={getTextClasses("/admin/dashboard")} />
              <span className={getTextClasses("/admin/dashboard")}>
                Dashboard
              </span>
            </button>

            {/* Messages Button with Notification Badge */}
            <button
              onClick={() => handleNavigation("/admin/dashboard/messages")}
              className={getButtonClasses("/admin/dashboard/messages")}
              aria-label="Navigate to Messages"
            >
              <Mail
                size={20}
                className={getTextClasses("/admin/dashboard/messages")}
              />
              <span className={getTextClasses("/admin/dashboard/messages")}>
                Messages
              </span>
              {messageCount > 0 && (
                <div className="relative ml-auto p-2 rounded-xl hover:bg-white/10 transition-colors">
                  <Bell size={20} className="text-gray-300" />
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                    {messageCount > 99 ? "99+" : messageCount}
                  </span>
                </div>
              )}
            </button>

            {/* Dynamic Sidebar Items */}
            {sidebarItems.map((item: SidebarItem, index: number) => (
              <button
                onClick={() => handleNavigation(item.href)}
                key={index}
                className={getButtonClasses(item.href)}
                aria-label={`Navigate to ${item.label}`}
              >
                <item.icon size={20} className={getTextClasses(item.href)} />
                <span className={getTextClasses(item.href)}>{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Logout Button */}
          <div className="absolute bottom-4 left-4 right-4">
            <button
              className="w-full flex items-center space-x-3 p-3 rounded-xl hover:bg-red-500/20 transition-colors text-red-400"
              aria-label="Logout"
              onClick={() => {
                // Add logout logic here
                console.log("Logout clicked");
              }}
            >
              <LogOut size={20} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardNavbar;
