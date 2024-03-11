import { getSession } from "@/lib/authActions";
import NavLinks from "./components/NavLinks";
import { navLinks } from "@/contants/contants";
import Link from "next/link";
import MobileMenu from "./components/MobileMenu";

const Navbar = async () => {
  const session = await getSession();

  return (
    <header className="bg-gray-600 text-white p-4 sm:p-6 flex justify-between items-center relative">
      {/*Logo */}
      <Link href="/" title="homepage">
        <h1 className=" text-3xl sm:text-4xl bg-gradient-to-br bg-clip-text text-transparent from-blue-500 to-green-300 font-bold uppercase">
          Todo
        </h1>
      </Link>

      {/*Desktop Nav */}
      <div className="hidden sm:flex">
        <NavLinks links={navLinks} isLoggedIn={session.isLoggedIn} />
      </div>

      {/*Mobile Nav */}
      <MobileMenu isLoggedIn={session.isLoggedIn} />
    </header>
  );
};

export default Navbar;
