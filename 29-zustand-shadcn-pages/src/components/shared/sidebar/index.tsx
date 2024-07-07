import { Button } from "@/components/ui/button";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { publicPages } from "@/constants";
import { useUserStore } from "@/store/use-user-store";
import Link from "next/link";
import { useRouter } from "next/router";
import { ThemeSwitcher } from "./ThemeSwitcher";

const Sidebar = () => {
  const router = useRouter();

  const user = useUserStore((state) => state.currentUser);
  const logout = useUserStore((state) => state.signOut);

  if (publicPages.includes(router.pathname)) {
    return <></>;
  }

  const handleLogout = async () => {
    await logout();
    router.push("/auth");
  };

  return (
    <Command className="w-72 h-screen hidden lg:flex justify-between py-6 px-3 shadow-md shadow-purple-200/50 bg-slate-50">
      <div>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions" className="">
            <CommandItem className="hover:bg-blue-400 cursor-pointer">
              Calendar
            </CommandItem>
            <CommandItem className="hover:bg-blue-400 cursor-pointer">
              Search Emoji
            </CommandItem>
            <CommandItem className="hover:bg-blue-400 cursor-pointer">
              Calculator
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem className="hover:bg-blue-400 cursor-pointer">
              Profile
            </CommandItem>
            <CommandItem className="hover:bg-blue-400 cursor-pointer">
              Billing
            </CommandItem>
            <CommandItem className="hover:bg-blue-400 cursor-pointer">
              Settings
            </CommandItem>
            {user !== null ? (
              <CommandItem className="hover:bg-blue-400 cursor-pointer">
                <button onClick={handleLogout}>Logout</button>
              </CommandItem>
            ) : (
              <Link href={"/auth"}>
                <CommandItem className="hover:bg-blue-400 cursor-pointer">
                  Login
                </CommandItem>
              </Link>
            )}
          </CommandGroup>
        </CommandList>
      </div>
      <div>
        <ThemeSwitcher />
      </div>
    </Command>
  );
};

export default Sidebar;
