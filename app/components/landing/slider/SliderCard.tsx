import Image from "next/image";
import SliderData from "./SliderData";
import SecondaryBtn from "../../buttons/SecondaryBtn";
import OutlineBtn from "../../buttons/OutlineBtn";
type Data = {
    id: number;
    year: string;
    name: string;
    slogan: string;
    price: number;
    img: string;
}[]
// card Component 
function SliderCard() {
    const data: Data = SliderData() || [];
    return (
        data?.map((item) => (
            <div
                className="lg:h-96 mx-1 bg-lig dark:bg-dark text-black dark:text-gray-200 rounded-lg flex items-center justify-center max-lg:flex-col max-lg:max-w-xl overflow-hidden"
                data-value={item?.id}
                key={item?.id}
            >
                <span className="block w-full h-[180px] lg:w-1/2 lg:h-full">
                    <Image
                        src={item?.img}
                        alt={item?.name}
                        width={300}
                        height={300}
                        draggable={false}
                        className="size-full object-cover"
                        unoptimized={true}
                    />
                </span>

                <span className="flex items-center justify-between flex-col size-full lg:w-1/2 max-lg:h-1/2">

                    <span className="flex flex-col items-start justify-center size-full p-3 md:p-5 space-y-3">

                        <h3 className="card-title">{item?.name}</h3>

                        <div className=" md:text[20px] space-y-3">
                            <p>{item?.year}</p>
                            <p>{item?.slogan}</p>
                            <p>${item?.price}</p>
                        </div>
                    </span>

                    <span className="flex items-center justify-start gap-3 pt-7 pb-5 px-3 w-full h-1/2">

                        <SecondaryBtn href="#" title="Detail" />

                        <OutlineBtn title="Comparison" href='#' />

                    </span>
                </span>
            </div>
        ))
    );
}

export default SliderCard;