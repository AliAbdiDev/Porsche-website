import clsx from "clsx";
import Image from "next/image";
import SecondaryBtn from "../../buttons/SecondaryBtn";

interface Props {
    className?: string;
    src: string;
    title: string;
    description: string;
    href: string;
    btnTitle: string;
}
function DiscoverCard({ className = "", src = "", title, description , href, btnTitle }: Props) {
    return (
        <span className={clsx(
            className,
            "block discover-card lg:h-[19rem] bg-lig dark:bg-dark rounded-lg relative group"
        )}>

            <span className="block size-full">
                <Image
                    src={src}
                    draggable={false}
                    className="w-full h-full object-cover relative z-0"
                    alt="cares-photo"
                    width={600}
                    height={500}
                    loading="lazy"
                    unoptimized={true}
                />
          </span>

            <span className="block md:absolute md:bottom-0 md:left-0 px-4 py-5 w-full max-md:h-full md:bg-gradient-to-t from-gray-700/80 dark:from-gray-900/90 to-transparent">
                
                <span className="block ">
                    <h4 className="max-sm:text-2xl text-2xl max-lg:text-4xl  font-semibold">
                        {title}
                    </h4>

                    <p className="sm:text-base max-sm:text-sm lg:max-h-0 lg:group-hover:max-h-[7rem] lg:overflow-hidden transition-[max-height] duration-500 ease-in-out delay-100">
                        {description}
                    </p>
                </span>

                <span className="block pt-7">
                    <SecondaryBtn href={href} title={btnTitle} />
                </span>
            </span>
        </span>
    );
}

export default DiscoverCard;