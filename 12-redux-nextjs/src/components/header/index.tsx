import Link from "next/link";
import Basket from "../basket";
import { ProfileBar } from "../profile-bar";

function Header() {
  return (
    <header>
      <Link href="/">Logo</Link>
      <ProfileBar />
      <Basket />
    </header>
  );
}

export default Header;
