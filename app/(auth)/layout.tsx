import TextSection from "./components/TextSection";

interface FormClass {
    container: string;
    wrapper: string;
}

function FormLayout({

    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const { container, wrapper }: FormClass = {
        container: "font-[sans-serif] min-h-screen flex flex-col items-center justify-center pt-[4%] px-4 max-lg:pt-28",
        wrapper: "flex flex-col md:flex-row items-center gap-10 max-w-6xl w-full justify-center",
    }

    return ( 
        <div className={`${container} mx-auto max-lg:py-5`}>
            <div className={wrapper}>
                <TextSection />
                {children}
            </div>
        </div>
     );
}

export default FormLayout;