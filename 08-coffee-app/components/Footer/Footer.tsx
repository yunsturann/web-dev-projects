import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="py-10 sm:py-14 min-h-[400px] relative ">
      {/* BG IMAGE */}
      <div className="absolute inset-0 -z-30">
        <Image
          src={"/images/f2.jpg"}
          alt="footer-bg"
          fill
          className="object-cover"
        />
      </div>
      {/* BG OVERLAY */}
      <div className="absolute inset-0 -z-20 bg-black/60"></div>
      {/* CONTAINER */}
      <div className="container flex max-md:flex-col gap-8 text-light">
        {/* LEFT */}
        <div className="basis-full md:basis-2/5 space-y-4">
          <h2 className="text-3xl md:text-3xl font-semibold font-pacifiko">
            CoffeApp
          </h2>
          <p>
            I learned animations while making this application. Design is not
            mine but codes are mine. Design is from{" "}
            <b className="text-yellow-300">Efe Görkem Ümit</b>. Thanks to him
            for this design and I learned how to use swiper and aos libraries.
            You can reach his youtube channel from link below.
          </p>
          <button className="border-2 border-white px-6 py-2 bg-red-700 hover:bg-red-800 hover:scale-105 rounded-full transition duration-300">
            <Link
              href={"https://www.youtube.com/@EfeGorkemUmit"}
              target="_blank"
            >
              Visit His Channel
            </Link>
          </button>
        </div>
        {/* RIGHT LINKS*/}
        <div className="basis-full md:basis-3/5 flex justify-between flex-wrap gap-6">
          {/* IMPORTANT LINKS */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold font-poppins">
              Important Links
            </h3>
            <ul className="space-y-3">
              <li className="hover:text-yellow-300 hover:scale-105 transition duration-300">
                <Link href="#services">Services</Link>
              </li>
              <li className="hover:text-yellow-300 hover:scale-105 transition duration-300">
                <Link href="#testimonials">Testimonials</Link>
              </li>
              <li className="hover:text-yellow-300 hover:scale-105 transition duration-300">
                <Link href="#download">Download</Link>
              </li>
            </ul>
          </div>
          {/* Quick LINKS */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold font-poppins">Quick Links</h3>
            <ul className="space-y-3">
              <li className="hover:text-yellow-300 hover:scale-105 transition duration-300">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:text-yellow-300 hover:scale-105 transition duration-300">
                <Link href="/about">About</Link>
              </li>
              <li className="hover:text-yellow-300 hover:scale-105 transition duration-300">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          {/* Quick LINKS */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold font-poppins">Address</h3>
            <ul className="space-y-3">
              <li>Turkey Eskişehir</li>
              <li>+90 555 555 55 55</li>
              <li className="flex flex-wrap gap-4">
                <BsInstagram
                  size={24}
                  className="hover:text-yellow-300 transition"
                />
                <BsTwitter
                  size={24}
                  className="hover:text-yellow-300 transition"
                />
                <BsYoutube
                  size={24}
                  className="hover:text-yellow-300 transition"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
