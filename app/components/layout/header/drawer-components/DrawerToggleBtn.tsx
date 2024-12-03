function DrawerToggleBtn({ onClick }: { onClick: () => void }) {

    return (
        <button
            onClick={onClick}
            className=" mb-2 space-y-1 group hover:pointer-events-auto"
            aria-controls="drawer"
        >
            <span className="block transition-all duration-300 ease-in-out w-[1.5rem] h-0.5 bg-black dark:bg-gray-700"></span>
            <span className="block transition-all duration-300 ease-in-out w-[1.5rem] h-0.5 bg-black dark:bg-gray-700 group-hover:w-[21px]"></span>
            <span className="block transition-all duration-300 ease-in-out w-[1.5rem] h-0.5 bg-black dark:bg-gray-700 group-hover:w-[18px]"></span>
        </button>
    );
}

export default DrawerToggleBtn;