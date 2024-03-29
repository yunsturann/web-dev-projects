import { GetFlagModel } from "@/services/homepage/types/GetFlagModel";
import Image from "next/image";
import React, { FC } from "react";

interface FlagListProps {
  flags: GetFlagModel[];
}

const FlagList: FC<FlagListProps> = ({ flags }) => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-12 pb-20">
      {flags.map((flag) => (
        // CARD
        <li
          key={flag.name.official}
          className="bg-white dark:bg-dark-blue-dm min-h-[360px] rounded-lg shadow-md"
        >
          {/* IMAGE */}
          <div className="h-1/2 relative">
            <Image
              unoptimized
              src={flag.flags.png}
              alt={flag.name.common}
              fill
              className="object-cover rounded-t-lg"
            />
          </div>
          {/* CONTENT */}
          <div className="h-1/2 py-5 px-6">
            <h3 className="mb-3 text-lg font-bold line-clamp-2">
              {flag.name.official}
            </h3>
            <div className="">
              <p>
                <b className="opacity-90">Population:</b> {flag.population}
              </p>
              <p>
                <b className="opacity-90">Region:</b> {flag.region}
              </p>
              <p>
                <b className="opacity-90">Capital:</b> {flag.capital}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default FlagList;
