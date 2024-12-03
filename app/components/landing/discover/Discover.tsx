
import DiscoverBigCard from "./DiscoverBigCard";
import DiscoverCard from "./DiscoverCard";
interface DiscoverData {
    className?: string;
    src: string;
    title: string;
    description: string;
    href: string;
    btnTitle: string;
}

function Discover() {

    const discoverData: DiscoverData[] = [
        {
            className: "lg:basis-[32.5%]",
            src: "/pic/cares-photo1.webp",
            title: "Pursche",
            description: 'Every Toyota comes with a peace-of-mind two years of no cost maintenance and Roadside Assistance',
            btnTitle: "Show Me",
            href: "#"
        },
        {
            className: "lg:basis-[32.5%]",
            src: "/pic/zetong-lu-I3LkC7U8Lo4-unsplash-1024x683.jpg",
            title: "LEGO Porsche",
            description: 'Every Toyota comes with a peace-of-mind two years of no cost maintenance and Roadside Assistance',
            btnTitle: "Show Me",
            href: "#"
        },
        {
            className: "lg:md:basis-[34.9%]",
            src: "/pic/tykan-purshe.webp",
            title: "Porsche Taycan – Electrifying Power at Peak Performance",
            description: 'An exceptional electric driving experience with sporty design and outstanding performance.',
            btnTitle: "Show Me",
            href: "#"
        }
    ]

    return (
        <article className="flex-center flex-col gap-12 w-full h-fit pb-20 pt-16 text-black dark:text-gray-200">

            <div className="w-full">
                <h2 className="main-title">
                    Discover
                </h2>
            </div>

            <div className="size-full flex-center flex-col max-lg:gap-5 lg:gap-3">

                <div className="w-full flex-center max-lg:gap-5 lg:gap-3 max-lg:flex-wrap ">

                    <DiscoverBigCard />

                    <DiscoverCard
                        className="lg:basis-[34.4%]"
                        src="/pic/944-turbo.webp"
                        title={"Porsche 944 – Classic Performance with Timeless Design"}
                        description={" A perfect blend of iconic style and reliable performance from Porsche's golden era"}
                        btnTitle="Learn More"
                        href="#"
                    />
                </div>

                <div className="w-full flex-center max-lg:gap-5 lg:gap-3 max-lg:flex-wrap">
                    {
                        discoverData?.map((item, index) => (
                            <DiscoverCard
                                key={index}
                                src={item?.src}
                                className={item?.className}
                                title={item?.title}
                                description={item?.description}
                                btnTitle={item?.btnTitle}
                                href={item?.href}
                            />
                        ))

                    }

                </div>

            </div>

        </article>
    );
}

export default Discover;