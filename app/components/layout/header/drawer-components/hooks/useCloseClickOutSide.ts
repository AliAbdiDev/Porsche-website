import { Dispatch, SetStateAction, useEffect } from "react";

interface Props {
    setDrawerOpen: Dispatch<SetStateAction<boolean>>;
    isDrawerOpen: boolean;
}

function useCloseClickOutSide(
    {
        setDrawerOpen,
        isDrawerOpen,
    }: Props
) {
    return (

        useEffect(() => {
            const handleClickOutside = (e: MouseEvent) => {
                const target = e.target as HTMLElement;
                // Check if clicked outside of drawer area
                if (!target.closest(".drawer-content") && isDrawerOpen) {
                    setDrawerOpen(false);
                }
            };

            //lock scroll 
            document.body.classList.toggle("!overflow-hidden", isDrawerOpen);

            window.addEventListener("mousedown", handleClickOutside);
            return () => window.removeEventListener("mousedown", handleClickOutside);
        }, [isDrawerOpen])
    );
}

export default useCloseClickOutSide;