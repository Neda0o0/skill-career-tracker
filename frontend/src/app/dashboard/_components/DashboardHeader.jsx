"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import SearchInput from "@/components/SearchInput";
import Image from "next/image";
import { ChevronDown, Menu } from "lucide-react";
import UserStatusBell from "@/app/dashboard/_components/UserStatusBell";

const DashboardHeader = ({ onMenuClick }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const queryFromUrl = searchParams.get("q") || "";
  const [value, setValue] = useState(queryFromUrl);

  // Sync input when URL changes (back / forward navigation)
  useEffect(() => {
    setValue(queryFromUrl);
  }, [queryFromUrl]);

  const handleSearchChange = (e) => {
    const nextValue = e.target.value;
    setValue(nextValue);

    const params = new URLSearchParams(searchParams.toString());

    if (nextValue) {
      params.set("q", nextValue);
    } else {
      params.delete("q");
    }

    router.replace(`${pathname}?${params.toString()}`, {
      scroll: false,
    });
  };

  return (
    <header className="w-full shadow-sm z-20 bg-white">
      <div className="px-4 h-16 flex justify-between items-center gap-4">
        {/* Mobile menu button */}
        <button
          onClick={onMenuClick}
          className="md:hidden p-2 rounded-md hover:bg-gray-100"
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Logo */}
        <div className="relative w-28 h-10">
          <Image
            src="/images/Logo1.png"
            alt="Logo"
            fill
            sizes="120px"
            className="object-contain"
            priority
          />
        </div>

        {/* Search */}
        <div className="hidden md:block flex-1 max-w-md">
          <SearchInput
            value={value}
            onChange={handleSearchChange}
            inputClassName="h-10 rounded-2xl text-base"
            placeholder="Search for.."
          />
        </div>

        {/* Right */}
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
