import SearchInput from "@/components/SearchInput";
import Image from "next/image";

const DashboardHeader = () => {
  return (
    <header className="w-full h-12 flex justify-between items-center">
      <div>
        <Image src={"/images/Logo1.png"} alt="Logo" width={100} height={50} />
      </div>
      <div>
        <SearchInput
          inputClassName="h-10 rounded-2xl text-base"
          placeholder="Search for.."
        />
      </div>
      <div></div>
    </header>
  );
};

export default DashboardHeader;
