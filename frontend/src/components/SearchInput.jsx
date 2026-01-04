"use client";

import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

const SearchInput = ({ className, inputClassName, ...props }) => {
  return (
    <div className={cn("relative w-full", className)}>
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4" />
      <Input type="search" className={cn("pl-9", inputClassName)} {...props} />
    </div>
  );
};

export default SearchInput;
