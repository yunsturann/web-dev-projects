import { sidebarItems } from "@/constants/constants";
import SidebarItem from "./SidebarItem";

const Sidebar = ({ step }: { step: number }) => {
  return (
    <>
      <div className=" hidden sm:block w-full lg:w-[30%] lg:h-full  relative bg-sidebar-desktop bg-no-repeat bg-center bg-cover rounded-xl text-white">
        {/* sidebar items contanier */}
        <div className="px-10 py-12 flex flex-row lg:flex-col max-lg:justify-center gap-2 sm:gap-6">
          {sidebarItems.map((item) => {
            const isActive = item.id === step;
            return <SidebarItem key={item.id} {...item} isActive={isActive} />;
          })}
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className="block sm:hidden absolute top-0  h-1/4 inset-x-0 bg-sidebar-mobile bg-no-repeat bg-center bg-cover -z-10">
        <div className="flex flex-row justify-center gap-3 text-white pt-8">
          {sidebarItems.map((item) => {
            const isActive = item.id === step;
            return <SidebarItem key={item.id} {...item} isActive={isActive} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
