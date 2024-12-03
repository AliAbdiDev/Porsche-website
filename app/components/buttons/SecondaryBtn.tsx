import Link from "next/link";

function SecondaryBtn({ href, title }: { href: string, title: string }) {
    {
        return (
            <Link href={href}
                className="font-semibold py-2.5 px-5 bg-gray-200 dark:text-white dark:bg-black rounded-full"
                type="button"
            >
                {title}
            </Link>
        );
    }
}
export default SecondaryBtn;