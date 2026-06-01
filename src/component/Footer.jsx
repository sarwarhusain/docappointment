import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full">
      <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
        <nav className="grid grid-flow-col gap-4">
          <a className="">
            About us
          </a>
          <Link href={"/contact"} className="">
            Contact
          </Link>
          <Link href={"/all-appointment"} className="">
            All Appointment
          </Link>
          <Link href={"/dashboard"} className="">
            Dashboard
          </Link>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a href="https://x.com/">
              <FaTwitter />
            </a>
            <a href="https://facebook.com">
              <FaFacebook />
            </a>
            <a className="https://instagram.com">
              <FaInstagram />
            </a>
            <a className="https://linkedin.com">
              <FaLinkedin />
            </a>
          </div>
        </nav>
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            Developer Sarwar
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
