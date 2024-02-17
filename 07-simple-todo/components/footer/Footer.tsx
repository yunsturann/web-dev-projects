import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-600 flex justify-between text-white py-2 px-6 text-sm">
      <p>to learn server actions & practice typescript</p>
      <p>
        simple todo{" "}
        <Link
          href={"https://yunsturann.vercel.app/"}
          title="personal-page"
          className="hover:text-blue-300 transition"
          target="_blank"
        >
          yunsturann
        </Link>{" "}
        &copy; all rights reserved{" "}
      </p>
    </footer>
  );
};

export default Footer;
