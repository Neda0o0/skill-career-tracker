import { Loader2 } from "lucide-react";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center py-10 text-gray-500">
      <Loader2 className="h-6 w-6 animate-spin" />
      <span className="ml-2 text-sm">Loading...</span>
    </div>
  );
};

export default LoadingSpinner;
