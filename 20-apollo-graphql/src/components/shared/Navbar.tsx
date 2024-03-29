import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const handleChangeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const language = e.target.value;

    i18n.changeLanguage(language);
  };

  return (
    <div className="text-white text-xl bg-gray-700 flex items-center gap-x-12 py-4 px-6">
      <h1>
        <Link href="/">GraphQL</Link>
      </h1>
      <nav className="space-x-4 text-lg">
        <Link href="/" className="px-2 py-1 hover:bg-gray-600 transition ">
          {t("nav.home")}
        </Link>
        <Link
          href="/create"
          className="px-2 py-1 hover:bg-gray-600 transition "
        >
          {t("nav.create")}
        </Link>
      </nav>

      {/* LANGUAGE SWITCHER */}
      <select
        onChange={handleChangeLanguage}
        className="outline-none ml-auto bg-gray-600 px-2 py-1 focus:ring-1 focus:ring-blue-500"
      >
        <option value="en">English</option>
        <option value="tr">Türkçe</option>
      </select>
    </div>
  );
};

export default Navbar;
