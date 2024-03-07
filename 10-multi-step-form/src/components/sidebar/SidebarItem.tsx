import React from "react";

interface SideBarItemProps {
  title: string;
  desc: string;
  id: number;
  isActive: boolean;
}

const SideBarItem: React.FC<SideBarItemProps> = ({
  title,
  desc,
  id,
  isActive,
}) => {
  return (
    <div className="flex gap-x-4 ">
      {/* Circle / STEP NUMBER */}
      <div
        className={`size-12 border rounded-full flex items-center justify-center ${
          isActive && "bg-light-blue border-light-blue text-marine-blue"
        }`}
      >
        <span className="text-lg font-semibold">{id}</span>
      </div>

      {/* CONTENT */}
      <div className="uppercase hidden lg:block">
        <h3 className="text-light-gray ">{title}</h3>
        <p className="font-semibold tracking-wider">{desc}</p>
      </div>
    </div>
  );
};

export default SideBarItem;
