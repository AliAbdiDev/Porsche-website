import Link from "next/link";

function OutlineBtn({ title, href }: { title: string, href: string; }) {
    return (
        <Link href={href}
            className="font-semibold py-2.5 px-5 rounded-full border transition-colors duration-150 ease-in-out
                text-black border-black hover:bg-black hover:text-white
                 dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black"
            type="button"
        >
            {title}
        </Link>
    );
}

export default OutlineBtn;