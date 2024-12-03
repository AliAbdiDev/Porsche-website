'use client'
import { usePathname } from "next/navigation";
import React, { ReactNode, } from "react";

interface Props {
    children: ReactNode;
    handleSubmit: () => void;
}

function Form({ children, handleSubmit }: Props) {

    const path = usePathname();
    const title = () => {
        if (path === "/login") return 'Login';
        else if (path === "/register") return 'Sign Up';
    }
    console.log(path);

    return (
        <form
            onSubmit={handleSubmit}
            className='max-w-md w-full text-gray-200 bg-zinc-900 p-5 rounded-lg'
        >
            <h3 className="text-3xl font-extrabold mb-8">
                {
                    title()
                }
            </h3>

            {children}
        </form>
    );
}

export default React.memo(Form);
