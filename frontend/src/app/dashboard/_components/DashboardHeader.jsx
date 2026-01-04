import SearchInput from "@/components/SearchInput";
import Image from "next/image";
import { Bell } from "lucide-react";
import { ChevronDown } from "lucide-react";

const DashboardHeader = () => {
  return (
    <header className="w-full shadow-sm">
      <div className="px-2 flex justify-between items-center">
        <div className="flex items-center">
          <Image src={"/images/Logo1.png"} alt="Logo" width={120} height={60} />
        </div>
        <div>
          <SearchInput
            inputClassName="h-10 rounded-2xl text-base"
            placeholder="Search for.."
          />
        </div>
        <div className="flex flex-row gap-4 items-center">
          <div className="relative mr-2">
            <Bell className="h-5 w-5 cursor-pointer" />
            <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-yellow-300" />
          </div>
          <div className="flex gap-1 justify-between items-center">
            <Image
              src={"/images/testimonials/emma.png"}
              alt="Emma"
              width={30}
              height={10}
              className="rounded-full"
            />
            <h3>Neda Imani</h3>
            <ChevronDown className="h-4 w-4" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
