"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

function Register() {

    const path = usePathname();
    const isPath = path === "/login" ? "register" : "login";

    return (
        <p className="text-sm">
            You can {isPath} through this link: 
            <Link
                href={`/${isPath}`}
                className="text-emerald-500 font-semibold hover:underline ml-1"
            >
                {isPath}
            </Link>
        </p>
    );
}

export default Register;