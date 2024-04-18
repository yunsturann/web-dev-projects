import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="dark:bg-gray-900 h-screen flex items-center justify-center">
      {children}
    </div>
  );
};

export default Layout;
