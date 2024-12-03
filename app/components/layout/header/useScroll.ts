import { useEffect, useState } from "react";

function useScrool() {
    const [isScroll, setScrool] = useState<boolean>(false);

    useEffect(() => {

        const handeleScroll = () => {

            window.requestAnimationFrame(() => {
                
                if (window.scrollY > 0) return setScrool(true);
    
                return setScrool(false)
            })
        }
        
        // Initial action
        handeleScroll();

        window.addEventListener("scroll", handeleScroll);
        return () => {
            window.removeEventListener("scroll", handeleScroll);
        }

    }, []);

    return {isScroll , setScrool};
}

export default useScrool;