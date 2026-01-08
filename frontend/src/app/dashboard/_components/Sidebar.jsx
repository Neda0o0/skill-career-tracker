"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Book,
  TrendingUp,
  Badge,
  Settings,
  HelpCircle,
  X,
} from "lucide-react";

const Sidebar = ({ open, onClose }) => {
  const pathname = usePathname();
  const navList = [
    {
      id: 1,
      label: "Dashboard",
      icon: LayoutDashboard,
      href: "/dashboard",
    },
    {
      id: 2,
      label: "Courses",
      icon: Book,
      href: "/dashboard/courses",
    },
    {
      id: 3,
      label: "My Courses",
      icon: Book,
      href: "/dashboard/mycourses",
    },
    {
      id: 4,
      label: "Progress",
      icon: TrendingUp,
      href: "/dashboard/progress",
    },
    {
      id: 5,
      label: "Certificates",
      icon: Badge,
      href: "/dashboard/certificates",
    },
    {
      id: 6,
      label: "Settings",
      icon: Settings,
      href: "/dashboard/settings",
    },
    {
      id: 7,
      label: "Help & Support",
      icon: HelpCircle,
      href: "/dashboard/help",
    },
  ];

  const isActive = (href) => {
    if (href === "/dashboard") return pathname === "/dashboard";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Backdrop (mobile) */}
      {open && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={` fixed md:static top-0 left-0 min-h-screen w-64 bg-white shadow-md z-40 md:z-10 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0
        `}
      >
        {/* Close button (mobile) */}
        <div className="md:hidden flex justify-end p-4">
          <button onClick={onClose}>
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-col py-6">
          {/* User */}
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src={"/images/testimonials/emma.png"}
              alt="User avatar"
              width={50}
              height={50}
              className="rounded-full"
            />
            <h3 className="text-sm font-medium">Neda Imani</h3>
          </div>

          {/* Nav */}
          <ul className="text-md px-6 py-8 space-y-1">
            {navList.map(({ id, label, icon, href }) => {
              const Icon = icon;
              const active = isActive(href);
              return (
                <li key={id}>
                  <Link
                    href={href}
                    onClick={onClose}
                    className={`flex items-center gap-3 rounded-md px-3 py-2 hover:bg-gray-100 transition ${
                      active
                        ? "bg-blue-100 text-blue-700 font-medium"
                        : "hover:bg-gray-100 text-gray-700"
                    }`}
                  >
                    <Icon
                      className={`h-5 w-5 ${
                        active ? "text-blue-600" : "text-gray-500"
                      }`}
                    />
                    <span>{label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
