"use client";

import { authClient } from "@/lib/auth-client";
// import { authClient } from "@/lib/auth-client";
import { Bars, XmarkShape } from "@gravity-ui/icons";
import { Avatar, Button, Dropdown, Label } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import { CiUser } from "react-icons/ci";
import { MdAccountCircle } from "react-icons/md";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { data: session } = authClient.useSession();
  // console.log(session);
  const user = session?.user;
  const handleSignOut = async () => {
    await authClient.signOut();
    toast.success("logout");
  };
  return (
    <nav className="container mx-auto bg-[#FFFFFF]">
      <div className="bg-white/70 backdrop-blur-xl fixed top-0 left-0 right-0 z-50 opacity-90">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-5">
          {/* Logo */}
          <div className="">Square Hospital</div>

          <div className="hidden md:flex gap-8">
            <Link
              href="/"
              className="relative text-gray-700 hover:text-cyan-600 transition group font-medium"
            >
              Home
              {/* <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-linear-to-r from-cyan-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span> */}
            </Link>

            <Link
              href="/doctors"
              className="relative text-gray-700 hover:text-cyan-600 transition group font-medium"
            >
              
              Doctors
            </Link>
            <Link
              href="/dashboard"
              className="relative text-gray-700 hover:text-cyan-600 transition group font-medium"
            >
              DashBoard
            </Link>
          </div>

          {/* login and logout */}

          {user ? (
            <div className="flex items-center gap-1">
              <Avatar>
                <Avatar.Image alt={user?.name} src={user?.image} />
                <Avatar.Fallback>
                  {user.name ? user.name : "SH"}
                </Avatar.Fallback>
              </Avatar>
              <Button
                onClick={handleSignOut}
                // className={"rounded-none hidden md:flex"}
                variant="ghost"
              >
                Sign Out
              </Button>
            </div>
          ) : (
            <>
              {" "}
              <Dropdown>
                <Button
                  aria-label="Menu"
                  className={"underline"}
                  variant="ghost"
                >
                  <MdAccountCircle /> My Account
                </Button>
                <Dropdown.Popover>
                  <Dropdown.Menu
                    onAction={(key) => console.log(`Selected: ${key}`)}
                  >
                    <>
                      <Dropdown.Item
                        id="Signin"
                        textValue="Signin"
                        className="block w-full"
                      >
                        <Link href={"/login"}>
                          <Label className="flex items-center gap-1 w-full">
                            <CiUser /> Log In
                          </Label>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item
                        id="Signup"
                        textValue="Signup"
                        className="block w-full"
                      >
                        <Link href={"/signup"}>
                          <Label className="flex items-center gap-1">
                            <CiUser /> Sign Up
                          </Label>
                        </Link>
                      </Dropdown.Item>
                    </>
                  </Dropdown.Menu>
                </Dropdown.Popover>
              </Dropdown>
            </>
          )}

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
          <Link
            href="/doctors"
            onClick={() => setOpen(false)}
            className="block text-gray-700 hover:text-cyan-600 text-lg transition font-medium"
          >
            
            Doctors
          </Link>
          <Link
            href="/signup"
            onClick={() => setOpen(false)}
            className="block text-gray-700 hover:text-cyan-600 text-lg transition font-medium"
          >
            SignUp
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
