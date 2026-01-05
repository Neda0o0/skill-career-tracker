"use client";

import Image from "next/image";
import Link from "next/link";
import {
  LayoutDashboard,
  Book,
  TrendingUp,
  Badge,
  Settings,
  HelpCircle,
} from "lucide-react";

const Sidebar = () => {
  const navList = [
    {
      id: 1,
      label: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      id: 2,
      label: "My Courses",
      icon: Book,
    },
    {
      id: 3,
      label: "Progress",
      icon: TrendingUp,
    },
    {
      id: 4,
      label: "Certificates",
      icon: Badge,
    },
    {
      id: 5,
      label: "Settings",
      icon: Settings,
    },
    {
      id: 6,
      label: "Help & Support",
      icon: HelpCircle,
    },
  ];
  return (
    <section className="w-64 shadow-md min-h-screen">
      <div className="flex flex-col py-8">
        <div className="flex flex-col justify-center items-center">
          <Image
            src={"/images/testimonials/emma.png"}
            alt="User avatar"
            width={50}
            height={50}
            className="rounded-full"
          />
          <h3 className="text-sm font-medium">Neda Imani</h3>
        </div>
        <ul className="text-md font-sans px-8 py-8">
          {navList.map(({ id, label, icon }) => {
            const Icon = icon;
            return (
              <li key={id}>
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-gray-100 transition"
                >
                  <Icon className="h-5 w-5" />
                  <span>{label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Sidebar;
