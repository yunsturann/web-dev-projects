import React from "react";
import Container from "../Container";
import Button from "../ui/Button";
import Logo from "../Navbar/Logo";
import { footerItems } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-white bg-dark-blue py-8 sm:py-16">
      <Container className="flex flex-col  lg:flex-row max-lg:items-center max-lg:gap-y-8 justify-between">
        {/* LEFT */}
        <div className="flex flex-col sm:flex-row max-sm:items-center gap-y-8 gap-x-12 lg:gap-x-24">
          <div className="flex flex-col gap-y-6 justify-between h-full">
            {/* LOGO */}
            <Logo color="#ffffff" />

            {/* SOCIAL LINKS */}
            <div className="flex gap-2">
              {footerItems.social.map((item) => (
                <Link href={item.link} key={item.name} title={item.name}>
                  <Image
                    unoptimized
                    src={item.icon}
                    alt={item.name}
                    width={24}
                    height={24}
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* NAVITEMS */}
          <div className="grid grid-cols-1 max-sm:text-center sm:grid-cols-2 gap-x-12 lg:gap-x-24 gap-y-3">
            {footerItems.nav.map((item) => (
              <Link href={item.link} key={item.name}>
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col justify-between items-center lg:items-end gap-6 ">
          <Button className="gradient rounded-full px-8 py-3 hover:opacity-80">
            Request Invite
          </Button>
          <p className="text-sm text-grayish-blue">
            @2024 Easybank. All Rights Reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
