// ** React Imports
import React from "react";

// ** Next.js Imports
import Image from "next/image";

// ** Custom Container
import Container from "../shared/Container";
import Contact from "./Contact";
import { footerLinks, socialLinks } from "@/constants";
import Link from "next/link";
import Column from "./Column";

const Footer = () => {
  return (
    <div>
      {/* Contact */}
      <Contact />
      {/* Footer */}
      <footer className="bg-var-black text-white">
        <Container>
          {/* Footer */}
          <div className="py-16 md:py-24 flex flex-col max-lg:items-center max-lg:text-center lg:flex-row justify-between items-start gap-x-4 gap-y-12 md:gap-x-8 border-b border-var-light-gray">
            {/* About company */}
            <div className="max-w-[360px] w-full">
              <Image
                src="/images/brand.png"
                alt="brand-image"
                width={120}
                height={35}
                className="max-lg:mx-auto"
              />
              <p className="mt-4 md:mt-8 text-var-gray">
                Data analysis software is a type of software tool used for data
                analysis and reporting.
              </p>
              {/* Social Links */}
              <ul className="flex justify-center lg:justify-start items-center gap-x-3 mt-6">
                {socialLinks.map((item) => (
                  <li
                    key={item.name}
                    className="hover:opacity-80 transition"
                    title={item.name}
                  >
                    <Link href={item.href}>
                      <Image
                        src={item.icon}
                        alt={item.name}
                        width={36}
                        height={36}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Quick Links and Subscription*/}
            <div className="flex flex-wrap justify-center lg:justify-between items-start gap-x-16 gap-y-12">
              <Column links={footerLinks.company} title="Company" />
              <Column links={footerLinks.help} title="Help" />
              <div>
                <h3 className="text-lg font-semibold mb-6 md:mb-8">
                  Subscribe to Newsletter
                </h3>
                <form className="flex flex-col sm:flex-row gap-y-2 ">
                  <input
                    type="text"
                    placeholder="Enter email address"
                    className="max-sm:rounded-lg sm:rounded-l-lg pl-5 py-4 focus:outline-blue-400 text-black"
                  />
                  <button
                    type="submit"
                    className="p-4 w-full sm:w-[140px] text-white bg-var-blue max-sm:rounded-lg sm:rounded-r-lg"
                  >
                    Join
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* CopyRight */}
          <p className="py-5 md:py-8 text-center text-xs text-gray-200">
            © Copyright 2021, All Rights Reserved by stract
          </p>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
