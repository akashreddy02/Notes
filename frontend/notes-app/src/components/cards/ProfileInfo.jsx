import React from "react";
import { getInitials } from "../../utils/Helper";

const ProfileInfo = () => {
  const handleLogout = () => {
    console.log("Logged out!");
  };

  return (
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 flex items-center justify-center rounded-full text-slate-950 font-medium bg-slate-100">
        {getInitials("Akash Reddy")}
      </div>
      <div className="flex flex-col">
        <p className="text-sm font-medium">Akash Reddy</p>
        <button
          onClick={handleLogout}
          className="text-sm text-slate-700 underline"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfileInfo;
