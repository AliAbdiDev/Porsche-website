function DrawerCloseBtn({ onClick }: { onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            className="text-gray-600 bg-transparent hover:text-gray-900 text-sm w-8 h-8 absolute top-2.5 end-2.5 flex items-center justify-center dark:text-gray-400 dark:hover:text-200"
        >
            <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
            >
                <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
            </svg>
        </button>
    );
}

export default DrawerCloseBtn;