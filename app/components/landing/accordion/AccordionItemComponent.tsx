"use client"

import {
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

import clsx from "clsx";

import Data from "./accordion.interface";
interface Props extends Data {
    className?: string;
}

function AccordionItemComponent({ className, description, title, value }: Props) {
    return (
        <AccordionItem value={value} className=" text-black dark:text-gray-200 border-black dark:border-gray-200">

            <AccordionTrigger
                className={clsx(
                    className,
                    "w-full lg:text-lg stroke-black dark:stroke-white"
                )}
            >
                {title}
            </AccordionTrigger>

            <AccordionContent className="p-4 w-full lg:text-base font-normal">
                {description}
            </AccordionContent>
        </AccordionItem>
    );
}

export default AccordionItemComponent;
