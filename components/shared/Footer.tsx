"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/r2rcarepurple.png";
import leftImage from "@/assets/leftImage.png";
import rightImage from "@/assets/rightImage.png";
import contactus from "@/assets/contact.png";
import pin from "@/assets/pin.png";
import msg from "@/assets/msg.png";
import phone from "@/assets/phone.png";

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#77429A] text-white overflow-visible pt-[100px] mt-[200px]   font-sans">
      <div className="absolute left-1/2 -translate-x-1/2 -top-[180px] sm:-top-40 md:-top-[180px] z-10 w-full flex justify-center px-4">
        <div className="max-w-[1290px] w-full relative flex flex-col items-center justify-center text-center rounded-2xl p-6 sm:p-10 shadow-lg h-auto sm:h-[326px] bg-linear-to-b from-[#77429A] to-[#E6D7FF]">
          {/* Background images */}
          <Image
            src={leftImage}
            alt="Left decorative"
            className="absolute left-0 top-0 w-[120px] sm:w-[180px] md:w-[220px] opacity-30 select-none pointer-events-none"
          />
          <Image
            src={rightImage}
            alt="Right decorative"
            className="absolute right-0 bottom-0 w-[120px] sm:w-[180px] md:w-[220px] opacity-30 select-none pointer-events-none"
          />

          {/* Text Content */}
          <h2 className="text-[22px] sm:text-[28px] md:text-[36px] font-semibold leading-tight mb-3 text-white max-w-[90%] sm:max-w-[80%]">
            4,000+ Startups Growing With{" "}
            <span className="italic font-serif">R2R Care</span>
          </h2>

          <p className="text-xs sm:text-sm text-white/90 mb-6 max-w-[90%]">
            ✓ 30-day free trial &nbsp;&nbsp; ✓ Personalized onboarding
            &nbsp;&nbsp; ✓ Access to all features
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button className="bg-[#77429A] hover:bg-[#6B3C8B] text-white rounded-full px-6 py-2 text-sm font-medium transition-all">
              Learn More
            </button>
            <button className="border border-white hover:bg-white hover:text-[#77429A] text-white rounded-full px-6 py-2 text-sm font-medium transition-all">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* 💬 Floating Customer Care Icon */}
      <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50">
        <button className="relative   bg-linear-to-b from-[#77429A] to-[#E6D7FF] rounded-full shadow-xl p-3 sm:p-4 hover:scale-105 transition-transform">
          <Image
            src={contactus}
            alt="Customer Care Icon"
            width={35}
            height={35}
            className="object-contain"
          />
        </button>
      </div>

      {/* 🧩 Main Footer Content */}
      <div className="max-w-[1290px] mx-auto py-12 sm:py-16 px-4 sm:px-6 md:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 border-t border-white/20 mt-20 relative z-5">
        {/* R2R Care */}
        <div>
          <h4 className="text-lg font-semibold mb-3 relative after:content-[''] after:block after:w-8 after:h-0.5 after:bg-white after:mt-2">
            R2R Care
          </h4>
          <ul className="space-y-2 text-sm text-[#E6D7FF]">
            <li>
              <Link href="#">Overview</Link>
            </li>
            <li>
              <Link href="#">Advantages</Link>
            </li>
            <li>
              <Link href="#">Pricing</Link>
            </li>
            <li>
              <Link href="#">Support</Link>
            </li>
            <li>
              <Link href="#">Register</Link>
            </li>
          </ul>
        </div>

        {/* Apps */}
        <div>
          <h4 className="text-lg font-semibold mb-3 relative after:content-[''] after:block after:w-8 after:h-0.5 after:bg-white after:mt-2">
            Apps
          </h4>
          <ul className="space-y-2 text-sm text-[#E6D7FF]">
            <li>
              <Link href="#">App for Management</Link>
            </li>
            <li>
              <Link href="#">App for Candidate</Link>
            </li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h4 className="text-lg font-semibold mb-3 relative after:content-[''] after:block after:w-8 after:h-0.5 after:bg-white after:mt-2">
            Policies
          </h4>
          <ul className="space-y-2 text-sm text-[#E6D7FF]">
            <li>
              <Link href="#">Privacy Policy</Link>
            </li>
            <li>
              <Link href="#">Data Protection Policy</Link>
            </li>
            <li>
              <Link href="#">Ethics Policy</Link>
            </li>
            <li>
              <Link href="#">Modern Anti-Slavery Policy</Link>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h4 className="text-lg font-semibold mb-3 relative after:content-[''] after:block after:w-8 after:h-0.5 after:bg-white after:mt-2">
            Contact Us
          </h4>
          <ul className="space-y-3 text-sm text-[#E6D7FF]">
            <li className="flex gap-2 items-start">
              <Image
                src={pin}
                alt="Address"
                width={30}
                height={30}
                className="mt-1"
              />
              <span>10, Skipper Close, Hemel Hempsted, HP2 7DG</span>
            </li>
            <li className="flex gap-2 items-center">
              <Image src={phone} alt="Phone" width={30} height={30} />
              <span>07983410935</span>
            </li>
            <li className="flex gap-2 items-center">
              <Image src={msg} alt="Email" width={30} height={30} />
              <span>Dev@R2Rcare.Co.Uk</span>
            </li>
          </ul>
        </div>
      </div>

      {/* ⚪ Bottom Bar */}
      <div className="bg-[#E5D6FF] relative z-5">
        <div className="max-w-[1290px] mx-auto py-4 flex flex-col md:flex-row items-center justify-between px-4 sm:px-6">
          <Image
            src={logo}
            alt="R2R Care Logo"
            width={110}
            height={40}
            className="mb-2 md:mb-0"
          />
          <p className="text-[11px] sm:text-xs text-[#77429A] mb-2 md:mb-0 text-center">
            Copyright©r2rcare 2025. All rights reserved
          </p>

          <div className="flex gap-3">
            <svg
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="35" height="35" rx="4.25" fill="#77429A" />
              <path
                d="M22.6788 14.7869H19.4019V12.7273C19.4019 11.9539 19.9369 11.7736 20.3136 11.7736C20.6895 11.7736 22.626 11.7736 22.626 11.7736V8.37324L19.4414 8.36133C15.9061 8.36133 15.1015 10.8974 15.1015 12.5203V14.7869H13.057V18.2908H15.1015C15.1015 22.7874 15.1015 28.2054 15.1015 28.2054H19.4019C19.4019 28.2054 19.4019 22.734 19.4019 18.2908H22.3037L22.6788 14.7869Z"
                fill="#E5D6FF"
              />
            </svg>

            <svg
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="35" height="35" rx="4.25" fill="#77429A" />
              <path
                d="M17.4472 13.5469C14.9472 13.5469 12.8757 15.4808 12.8757 17.8897C12.8757 20.2987 14.9114 22.2326 17.4472 22.2326C19.9829 22.2326 22.0186 20.2647 22.0186 17.8897C22.0186 15.5147 19.9472 13.5469 17.4472 13.5469ZM17.4472 20.6719C15.84 20.6719 14.5186 19.4165 14.5186 17.8897C14.5186 16.3629 15.84 15.1076 17.4472 15.1076C19.0543 15.1076 20.3757 16.3629 20.3757 17.8897C20.3757 19.4165 19.0543 20.6719 17.4472 20.6719Z"
                fill="#E5D6FF"
              />
              <path
                d="M22.1966 14.4288C22.7686 14.4288 23.2323 13.9883 23.2323 13.4449C23.2323 12.9015 22.7686 12.4609 22.1966 12.4609C21.6246 12.4609 21.1609 12.9015 21.1609 13.4449C21.1609 13.9883 21.6246 14.4288 22.1966 14.4288Z"
                fill="#E5D6FF"
              />
              <path
                d="M24.8753 10.9008C23.9467 9.98477 22.6253 9.50977 21.1253 9.50977H13.7682C10.661 9.50977 8.5896 11.4776 8.5896 14.4294V21.3848C8.5896 22.8437 9.0896 24.0991 10.0896 25.0151C11.0539 25.8973 12.3396 26.3383 13.8039 26.3383H21.0896C22.6253 26.3383 23.911 25.8633 24.8396 25.0151C25.8039 24.133 26.3039 22.8776 26.3039 21.4187V14.4294C26.3039 13.0044 25.8039 11.783 24.8753 10.9008ZM24.7325 21.4187C24.7325 22.4705 24.3396 23.3187 23.6967 23.8955C23.0539 24.4723 22.161 24.7776 21.0896 24.7776H13.8039C12.7325 24.7776 11.8396 24.4723 11.1967 23.8955C10.5539 23.2848 10.2325 22.4366 10.2325 21.3848V14.4294C10.2325 13.4116 10.5539 12.5633 11.1967 11.9526C11.8039 11.3758 12.7325 11.0705 13.8039 11.0705H21.161C22.2325 11.0705 23.1253 11.3758 23.7682 11.9866C24.3753 12.5973 24.7325 13.4455 24.7325 14.4294V21.4187Z"
                fill="#E5D6FF"
              />
            </svg>
            <svg
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="35" height="35" rx="4.25" fill="#77429A" />
              <path
                d="M12.668 25H9.03906V13.3164H12.668V25ZM10.8516 11.7227C9.69141 11.7227 8.75 10.7617 8.75 9.60156C8.75 9.04419 8.97141 8.50965 9.36553 8.11553C9.75965 7.72141 10.2942 7.5 10.8516 7.5C11.4089 7.5 11.9435 7.72141 12.3376 8.11553C12.7317 8.50965 12.9531 9.04419 12.9531 9.60156C12.9531 10.7617 12.0117 11.7227 10.8516 11.7227ZM26.2461 25H22.625V19.3125C22.625 17.957 22.5977 16.2188 20.7383 16.2188C18.8516 16.2188 18.5625 17.6914 18.5625 19.2148V25H14.9375V13.3164H18.418V14.9102H18.4688C18.9531 13.9922 20.1367 13.0234 21.9023 13.0234C25.5742 13.0234 26.25 15.4414 26.25 18.582V25H26.2461Z"
                fill="#E5D6FF"
              />
            </svg>
            <svg
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="35" height="35" rx="4.25" fill="#77429A" />
              <path
                d="M26.587 12.9198C26.3683 12.0969 25.7259 11.4511 24.9099 11.2323C23.4308 10.833 17.5002 10.833 17.5002 10.833C17.5002 10.833 11.5697 10.833 10.0905 11.2323C9.27452 11.4511 8.63216 12.0969 8.41341 12.9198C8.01758 14.4094 8.01758 17.5136 8.01758 17.5136C8.01758 17.5136 8.01758 20.6177 8.41341 22.1073C8.63216 22.9302 9.27452 23.5483 10.0905 23.767C11.5697 24.1663 17.5002 24.1663 17.5002 24.1663C17.5002 24.1663 23.4308 24.1663 24.9099 23.767C25.7259 23.5483 26.3683 22.9268 26.587 22.1073C26.9829 20.6177 26.9829 17.5136 26.9829 17.5136C26.9829 17.5136 26.9829 14.4094 26.587 12.9198ZM15.5627 20.333V14.6941L20.5176 17.5136L15.5627 20.333Z"
                fill="#E5D6FF"
              />
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
