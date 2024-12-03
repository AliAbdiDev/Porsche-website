"use client"
import { useState } from "react"; // اضافه کردن useState
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import SliderCard from "./SliderCard";

export default function Slider() {
    // index counter 
    const [activeIndex, setActiveIndex] = useState(0);

    // The number of cards in different sizes of devices
    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 1 },
    };

    const sliderCardComponent: JSX.Element[] = SliderCard();

    const itemCount = sliderCardComponent.length; //length items
    const isFirstSlide = activeIndex === 0; // Being on the first slide
    const isLastSlide = activeIndex === itemCount - 1; //Being on the last slide

    const handleSlideChange = (event) => {
        setActiveIndex(event.item);
    };

    return (
        <>
            <div className="pt-12 pb-9 ">
                <h1 className="main-title"> New Cars </h1>
            </div>

            <AliceCarousel
                mouseTracking
                items={sliderCardComponent}
                animationDuration={500}
                responsive={responsive}
                disableDotsControls
                renderPrevButton={() => (
                    <button
                        className="text-black dark:text-white mt-5 mx-1"
                        style={{ opacity: isFirstSlide ? 0.5 : 1 }}
                        disabled={isFirstSlide}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-7"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 19.5 8.25 12l7.5-7.5"
                            />
                        </svg>
                    </button>
                )}
                renderNextButton={() => (
                    <button
                        className="text-black dark:text-white mt-5 mx-1"
                        style={{ opacity: isLastSlide ? 0.5 : 1 }}
                        disabled={isLastSlide} // غیرفعال کردن دکمه اگر در آخرین اسلاید هستیم
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-7"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m8.25 4.5 7.5 7.5-7.5 7.5"
                            />
                        </svg>
                    </button>
                )}
                onSlideChanged={handleSlideChange}
            />
        </>
    )
}

