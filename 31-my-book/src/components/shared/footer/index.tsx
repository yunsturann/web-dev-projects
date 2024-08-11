import { Link } from "react-router-dom";
import { navLinks } from "../../../constants";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <Link
          to={
            "https://www.figma.com/design/M8dd5JJWfH5d63GRxO8DeZ/Mybook---Bookshop-Landing-Page-(Community)?node-id=1-870&t=5C6KbKINPwQReVMH-0"
          }
          className="copyright"
          title="Design owner"
        >
          &copy; Click for Figma design I used it to practice
        </Link>
        <Link
          to={"https://yunsturann.vercel.app/"}
          className="me"
          title="my website"
        >
          2024 YUNUS TURAN
        </Link>

        <div className="links">
          {navLinks.map((link) => (
            <Link key={link.id} to={link.href} title={link.name + " page"}>
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
