import React from "react";
import Logo from "./Logo";
import Container from "../Container";
import NavItems from "./NavItems";
import Button from "../ui/Button";

const Navbar = () => {
  return (
    <div className="sticky top-0 shadow-md z-50 bg-white">
      <Container className="flex justify-between items-center ">
        {/* LOGO */}
        <div className="py-6">
          <Logo />
        </div>
        {/* NAV ITEMS */}
        <NavItems />
        {/* REQUEST INVITE BTN */}
        <Button className="gradient rounded-full px-8 py-3 hover:opacity-80 hidden lg:block ">
          Request Invite
        </Button>
      </Container>
    </div>
  );
};

export default Navbar;
