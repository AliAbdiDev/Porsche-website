"use client"
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
    name: string;
    href: string;
    className?: string;
}

function LI({ name, href, className }: Props) {
    const isActiveNavItem = usePathname() === href;

    return (
        <li
            className={clsx(
                className, //custom class
                " text-emerald-800 max-lg:text-emerald-600 max-lg:px-3 max-lg:mx-2 font-[550]", //general class
                (isActiveNavItem) && "bg-gray-200 dark:max-lg:bg-gray-700 lg:bg-transparent max-lg:py-2 max-lg:rounded-md lg:border-b border-b-emerald-800" //dynamic class
            )}
        >
            <Link href={href}>{name}</Link>
        </li>
    );
}

export default LI;
