import Link from "next/link";
import React from "react";
import { FaHome } from "react-icons/fa";
import { FaSuitcaseRolling } from "react-icons/fa6";

const NotFound = () => {
  return (
    <div className="my-20 bg-base-100 flex items-center justify-center  m-30 p-30">
      
      <div className="">
        <div className="border rounded-3xl shadow-2xl p-10 text-center max-w-md w-full bg-white">
          <FaSuitcaseRolling className="text-7xl text-cyan-500 mx-auto mb-5" />

          <h1 className="text-3xl font-bold mb-3">Page Not Found!</h1>

          <Link href={'/'} className="text-gray-500 flex items-center gap-1 justify-center ">
            <FaHome /> Please Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
