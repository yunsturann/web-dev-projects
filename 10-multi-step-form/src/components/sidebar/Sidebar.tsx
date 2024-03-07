import { sidebarItems } from "@/constants/constants";
import SidebarItem from "./SidebarItem";

const Sidebar = ({ step }: { step: number }) => {
  return (
    <div className="w-full lg:w-[30%] h-full relative bg-sidebar-desktop bg-no-repeat bg-center bg-cover rounded-xl text-white">
      {/* sidebar items contanier */}
      <div className="px-10 py-12 flex flex-row lg:flex-col max-lg:justify-center  gap-6">
        {sidebarItems.map((item) => {
          const isActive = item.id === step;
          return <SidebarItem key={item.id} {...item} isActive={isActive} />;
        })}
      </div>
    </div>
  );
};

export default Sidebar;
