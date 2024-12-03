import Image from "next/image";
import React from "react";

function HeroSection() {
    return (
        <>
            {/* desctop size */}
            <section className="relative lg:h-screen w-full max-lg:border-b max-lg:border-b-gray-500">
                {/* bg img */}
                <div className="absolute inset-0 w-full h-full max-lg:hidden">

                    <Image

                        src="/pic/IMG_9956.jpeg"
                        alt="Porsche"
                        fill
                        className="w-full h-full object-cover"
                        unoptimized={true}
                        loading="eager"
                    />

                </div>


                {/* text section */}
                <div className="relative z-30 flex flex-col justify-end h-full space-y-3 max-lg:py-20 max-lg:text-center">

                    {/* logo img visible in desctop size  */}
                    <div className="w-full flex items-center justify-center">
                        <span className="block size-64 lg:hidden">
                            <Image
                                src='/pic/Porsche-Logo-1-1155x770-removebg-preview.png'
                                className="size-full object-cover"
                                alt="logo"
                                width={150}
                                height={150}
                                unoptimized={true}
                            />
                        </span>
                    </div>

                    <div className="lg:ms-[2%] lg:pb-5">
                        <span className="block">
                            <h1
                                className="text-5xl max-lg:text-6xl max-sm:text-5xl font-extrabold text-transparent bg-clip-text"
                                style={{
                                    backgroundImage: "linear-gradient(270deg, rgba(114,199,175,1) 0%, rgba(6,95,70,1) 110%)",
                                }}
                            >
                                Porsche unique 911
                            </h1>

                            <p className="lg:font-semibold py-5 md:text-2xl max-lg:text-3xl bg-clip-text text-transparent"
                                style={{
                                    backgroundImage: "linear-gradient(270deg, rgba(114,199,175,1) 0%, rgba(6,95,70,1) 130%)",
                                }}
                            >
                                symbol of unparalleled design and exceptional performance<br />
                                in the automotive world
                            </p>
                        </span>

                        <span className="flex items-center justify-center gap-7 lg:mx-3  w-fit max-lg:w-full max-lg:pt-5 ">

                            <button className="px-7 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 transition-colors duration-200">Explore</button>

                            <button className="text-black  max-lg:dark:text-white font-semibold group" type="button">
                                Other Cars
                                <span className="block w-0 h-0.5 bg-black max-lg:dark:bg-white group-hover:w-full max-lg:w-full transition-all duration-200 delay-100"></span>
                            </button>
                        </span>
                    </div>
                </div>
            </section>

        </>
    );
}

export default HeroSection;
