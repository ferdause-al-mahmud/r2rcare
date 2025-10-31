"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/r2rLogo.png";
import { navlinks } from "@/const/navlinks";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "w-full z-50 top-0 transition-all duration-300   font-sans",
        isScrolled
          ? "fixed backdrop-blur-md bg-white/70 shadow-sm"
          : "absolute bg-transparent"
      )}
    >
      {/* Top info bar */}
      <div className="max-w-[1890px] mx-auto bg-[#77429A] text-white text-xs py-1.5 my-1.5 flex items-center justify-center rounded-lg font-normal tracking-tight">
        <span className="flex items-center gap-1">
          Join Us On{" "}
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="inline-block"
          >
            <path
              d="M9.002 6.65C9.002 7.077 8.687 7.427 8.288 7.427C7.896 7.427 7.574 7.077 7.574 6.65C7.574 6.223 7.889 5.873 8.288 5.873C8.687 5.873 9.002 6.223 9.002 6.65ZM5.733 5.873C5.334 5.873 5.019 6.223 5.019 6.65C5.019 7.077 5.341 7.427 5.733 7.427C6.132 7.427 6.447 7.077 6.447 6.65C6.454 6.223 6.132 5.873 5.733 5.873ZM13.125 1.442V14C11.3615 12.4416 11.9255 12.9574 9.877 11.053L10.248 12.348H2.31C1.519 12.348 0.875 11.704 0.875 10.906V1.442C0.875 0.644 1.519 0 2.31 0H11.69C12.481 0 13.125 0.644 13.125 1.442ZM11.13 8.078C11.13 5.824 10.122 3.997 10.122 3.997C9.114 3.241 8.155 3.262 8.155 3.262L8.057 3.374C9.247 3.738 9.8 4.263 9.8 4.263C8.1372 3.35166 6.18395 3.3515 4.571 4.06C4.312 4.179 4.158 4.263 4.158 4.263C4.158 4.263 4.739 3.71 5.999 3.346L5.929 3.262C5.929 3.262 4.97 3.241 3.962 3.997C3.962 3.997 2.954 5.824 2.954 8.078C2.954 8.078 3.542 9.093 5.089 9.142C5.089 9.142 5.348 8.827 5.558 8.561C4.669 8.295 4.333 7.735 4.333 7.735C4.43598 7.80708 4.60578 7.90051 4.62 7.91C5.80152 8.57166 7.47983 8.78845 8.988 8.155C9.233 8.064 9.506 7.931 9.793 7.742C9.793 7.742 9.443 8.316 8.526 8.575C8.736 8.841 8.988 9.142 8.988 9.142C10.535 9.093 11.13 8.078 11.13 8.078Z"
              fill="white"
            />
          </svg>
          <Link
            href="https://discord.com"
            target="_blank"
            className="font-normal underline-offset-2 hover:underline"
          >
            Discord
          </Link>
          . We Have Lots of Information
        </span>
      </div>

      {/* Main navigation */}
      <nav className="max-w-[1290px] mx-auto flex items-center justify-between px-6 sm:px-8 py-2 relative">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={logo}
            alt="R2R Care Logo"
            width={180}
            height={60}
            priority
            className="object-contain w-28 sm:w-36 md:w-44 lg:w-48 h-auto"
          />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center" style={{ gap: "32px" }}>
          {navlinks.map((item) => (
            <div
              key={item}
              className="flex items-center gap-1.5 cursor-pointer group"
            >
              <span className="font-inter font-medium text-[17px] leading-[28.9px] text-[#484A61] group-hover:text-[#77429A] transition-colors duration-200">
                {item}
              </span>
              <ChevronDown className="w-4 h-4 text-[#484A61] group-hover:text-[#77429A] transition-colors duration-200" />
            </div>
          ))}
          <Link
            href="/pricing"
            className="font-inter font-medium text-[17px] leading-[28.9px] text-[#484A61] hover:text-[#77429A] transition-colors duration-200"
          >
            Pricing
          </Link>
        </div>

        {/* Right Buttons (Hidden on mobile) */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            className={cn(
              "bg-[#77429A] hover:bg-[#6A3D8C]  cursor-pointer text-white rounded-full px-6 py-2 text-[15px] font-medium transition-colors duration-200"
            )}
          >
            Book A Demo
          </Button>
          <Button
            variant="outline"
            className="border-[#77429A] text-[#77429A]  cursor-pointer rounded-full px-6 py-2 text-[15px] font-medium hover:bg-[#F9F5FC] transition-colors duration-200"
          >
            Login
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden flex items-center justify-center text-[#77429A]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-md border-t border-gray-100 md:hidden z-50 transition-all duration-300">
            <div className="flex flex-col items-start gap-4 px-6 py-4">
              {navlinks.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 cursor-pointer group"
                >
                  <span className="font-inter font-medium text-[16px] text-[#484A61] group-hover:text-[#77429A] transition-colors duration-200">
                    {item}
                  </span>
                  <ChevronDown className="w-4 h-4 text-[#484A61] group-hover:text-[#77429A]" />
                </div>
              ))}
              <Link
                href="/pricing"
                className="font-inter font-medium text-[16px] text-[#484A61] hover:text-[#77429A] transition-colors duration-200"
              >
                Pricing
              </Link>

              <div className="flex flex-col w-full gap-3 mt-3">
                <Button className="w-full bg-[#77429A] hover:bg-[#6A3D8C]  cursor-pointer text-white rounded-full text-[15px] font-medium">
                  Book A Demo
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-[#77429A] text-[#77429A] cursor-pointer rounded-full text-[15px] font-medium hover:bg-[#F9F5FC]"
                >
                  Login
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
