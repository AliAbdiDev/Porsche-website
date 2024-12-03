import { ReactNode } from "react";

interface Child {
    children: ReactNode
}

function LoginBtn({ children }:Child) {
    return ( 
        <button
            type="button"
            aria-label="توضیح عملکرد دکمه"
            className="border-none outline-none">
            {children}
        </button>

     );
}

export default LoginBtn;