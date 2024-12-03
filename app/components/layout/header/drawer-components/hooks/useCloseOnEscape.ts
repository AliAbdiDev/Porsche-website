import { Dispatch, SetStateAction, useEffect } from "react";

function useCloseOnEscape(setDrawerOpen: Dispatch<SetStateAction<boolean>>) {
    return (
        useEffect(() => {
            const closeOnEscape = (e: KeyboardEvent) => {
                return e.key === "Escape" && setDrawerOpen(false);
            };

            window.addEventListener("keydown", closeOnEscape);
            return () => window.removeEventListener("keydown", closeOnEscape);
        }, [])
    )
}

export default useCloseOnEscape;