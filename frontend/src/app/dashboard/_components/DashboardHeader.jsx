"use client";

import SearchInput from "@/components/SearchInput";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import UserStatusBell from "@/app/dashboard/_components/UserStatusBell";

const DashboardHeader = () => {
  return (
    <header className="w-full shadow-sm z-11">
      <div className="px-2 flex justify-between items-center">
        <div className="relative w-30 h-15">
          <Image
            src="/images/Logo1.png"
            alt="Logo"
            fill
            sizes="120px"
            className="object-contain"
            priority
          />
        </div>

        <div>
          <SearchInput
            inputClassName="h-10 rounded-2xl text-base"
            placeholder="Search for.."
          />
        </div>
        <div className="flex flex-row gap-4 items-center">
          <UserStatusBell />
          <div className="flex gap-1 justify-between items-center cursor-pointer">
            <Image
              src={"/images/testimonials/emma.png"}
              alt="User avatar"
              width={30}
              height={30}
              className="rounded-full"
            />
            <span className="text-sm font-medium">Neda Imani</span>
            <ChevronDown className="h-4 w-4" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
