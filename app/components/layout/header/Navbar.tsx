"use client";

import LI from "./LI";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { navItems } from "./navData";
import ThemeBtn from "../../ThemeBtn";
import DrawerComponent from "./drawer-components/Drawer";

function Navbar() {

    const dataNav = navItems || [];
    const menuItems: React.JSX.Element[] = dataNav?.map((items, index) => (
        <LI
            key={index}
            href={items?.href}
            name={items?.name}
        />
    ))
    return (

        <nav
            className="transition-colors duration-150 w-full flex items-center justify-between fixed top-0 z-40 py-2 px-5 bg-white/60 dark:bg-gray-300/60 backdrop-blur-md"

        >
            {/* desctop menu */}
            <ul className="flex gap-5 items-center px-3 max-lg:hidden">
                {menuItems}
            </ul>

            {/* mobile menu */}
            <div className="lg:hidden">
                <DrawerComponent >
                    {menuItems}
                </DrawerComponent>
            </div>

            <div className="space-x-5 inline-flex justify-center items-center">
                <ThemeBtn />

                {/* lang Btn */}
                <button type="button">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6 text-black dark:text-gray-700">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
                    </svg>
                </button>
                {/* vertical line between icons and Avatar component */}
                <span className="block h-7 w-px bg-gray-800 dark:bg-white"></span>

                <Link href="/login"
                    className="cursor-pointer">
                    <Avatar>
                        <AvatarImage src="/pic/personal-pic-one.jpg" alt="Profile-pic" className="object-cover" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </Link>

            </div>
        </nav>

    );
}

export default Navbar;