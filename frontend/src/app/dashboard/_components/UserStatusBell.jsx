"use client";

import { useState } from "react";
import { Bell } from "lucide-react";

const UserStatusBell = () => {
  const [status, setStatus] = useState("online");

  const statusColorMap = {
    online: "bg-green-500",
    invisible: "bg-gray-400",
    offline: "bg-red-500",
  };

  const statusLabelMap = {
    online: "Online",
    invisible: "Invisible",
    offline: "Offline",
  };

  return (
    <div className="relative cursor-default" title={statusLabelMap[status]}>
      <Bell className="h-5 w-5" />
      <span
        className={`absolute -top-1.5 -right-1 h-2.5 w-2.5 rounded-full ${statusColorMap[status]}`}
      />
    </div>
  );
};

export default UserStatusBell;
