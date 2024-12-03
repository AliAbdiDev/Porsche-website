import Image from "next/image";
import SecondaryBtn from "../../buttons/SecondaryBtn";

function DiscoverBigCard() {
    return ( 
        <span className="bg-lig dark:bg-dark flex-center discover-card lg:h-[19rem] lg:basis-[65%]">
            {/* image discover card  */}
            <div className=" w-full md:w-3/5 h-full">
                <Image
                    src="/pic/2023_porsche_911-sport-classic_left-side-green.webp"
                    className="size-full object-cover"
                    alt="cars"
                    width={600}
                    height={500}
                    loading="lazy"
                />
            </div>

            {/* text & btn discover card  */}
            <div className="flex flex-col w-full md:w-2/5 px-4 py-7  relative h-full">
                <span className="block mb-2 space-y-0.5 lg:absolute bottom-3">
                    <p >Pursche Brand</p>

                    <h4 className="max-sm:text-2xl text-4xl font-semibold">FEATURED STORIES</h4>

                    <p className="pt-2 md:text-sm lg:text-base ">
                        Discover Porsche&lsquo;s latest stories that capture the thrill of driving and the essence of superior design
                    </p>

                <span className="block pt-5">
                    <SecondaryBtn href="#" title="Learn More" />
                </span>
                </span>
            </div>

        </span>
     );
}

export default DiscoverBigCard;