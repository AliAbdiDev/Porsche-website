"use client";

import { useState, ReactNode, useEffect } from "react";
import clsx from "clsx";
import DrawerToggleBtn from "./DrawerToggleBtn";
import DrawerCloseBtn from "./DrawerCloseBtn";
import useCloseOnEscape from "./hooks/useCloseOnEscape";
import useCloseClickOutSide from "./hooks/useCloseClickOutSide";
import { usePathname } from "next/navigation";

export default function DrawerComponent({ children }: { children: ReactNode }) {
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    const path = usePathname();

    // Toggle drawer visibility
    const toggleDrawer = () => setDrawerOpen((prev) => !prev);

    // Close drawer on pressing Escape key
    useCloseOnEscape(setDrawerOpen);

    // Close drawer on clicking outside and Lock Scroll
    useCloseClickOutSide({ setDrawerOpen, isDrawerOpen });

    // By changing path drawer closed
    useEffect(() => setDrawerOpen(false), [path])

    return (
        <>
            <DrawerToggleBtn onClick={toggleDrawer} />

            {/* Overlay for blurring and darkening */}
            {isDrawerOpen && (
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40  h-screen w-screen"
                    onClick={() => setDrawerOpen(false)}
                ></div>
            )}

            <aside
                className={clsx(
                    " drawer-content translate-x-0 fixed top-0 left-0 z-50 h-screen py-4 overflow-y-auto transition-transform duration-150 ease-linear bg-gray-100 dark:bg-gray-800 max-md:w-[70%] max-lg:w-[30%]",
                    isDrawerOpen ? "!translate-x-0" : "!-translate-x-full"
                )}
                aria-labelledby="drawer-label"
            >
                <DrawerCloseBtn onClick={toggleDrawer} />

                {/* Drawer Menu List */}
                <ul className="w-full space-y-5 mt-12 text-white">
                    {children}
                </ul>
            </aside>
        </>
    );
}
