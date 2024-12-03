'use client'
import { usePathname } from "next/navigation";

function FormBtn() {

    const path = usePathname();
    const isPath = path === "/login" ? "login" : "Sign Up";

    return (
        <div className="!mt-8">
            <button
                type="submit"
                className="w-full transition-colors duration-100 shadow-xl py-2.5 px-4 text-sm font-semibold rounded text-gray-100 bg-emerald-600 hover:bg-emerald-500 focus:outline-none">
                {isPath.charAt(0).toUpperCase() + isPath.slice(1)}
            </button>
        </div>
    );
}

export default FormBtn;