"use client";

import { Bars, XmarkShape } from "@gravity-ui/icons";
import { Avatar, Button } from "@heroui/react";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <div className="bg-white/70 backdrop-blur-xl border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-5">
          {/* Logo */}
          <div className="">
            DocAppointment
            {/* <Image
              src={"/assets/W"}
              width={150}
              height={150}
              alt="logo"
            /> */}
          </div>

          <div className="hidden md:flex gap-8">
            <Link
              href="/"
              className="relative text-gray-700 hover:text-cyan-600 transition group font-medium"
            >
              Home
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-linear-to-r from-cyan-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link
              href="/all-appointment"
              className="relative text-gray-700 hover:text-cyan-600 transition group font-medium"
            >
              All Appointment
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-linear-to-r from-cyan-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/dashboard"
              className="relative text-gray-700 hover:text-cyan-600 transition group font-medium"
            >
              DashBoard
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-linear-to-r from-cyan-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* login and logout */}
          {/* <ul className="hidden md:flex items-center gap-3">
            <Avatar>
              <Avatar.Image alt="John Doe" />
              <Avatar.Fallback>User</Avatar.Fallback>
            </Avatar>
            <Button className={"rounded-none "} variant="danger">
              Sign Out
            </Button>

            <Link href="/signup">
              <button>SignUp</button>
            </Link>
            <Link href="/login">
              <button>Login</button>
            </Link>
          </ul> */}

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-700 hover:text-cyan-600 transition hover:scale-110"
          >
            {open ? <XmarkShape size={30} /> : <Bars size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white/90 backdrop-blur-xl border-t border-gray-200 px-6 py-5 space-y-4 overflow-hidden transition-all duration-500 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div>
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="block text-gray-700 hover:text-cyan-600 text-lg transition font-medium"
          >
            Home
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
