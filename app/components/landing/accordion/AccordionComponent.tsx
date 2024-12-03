import Data from "./accordion.interface";       // ایمپورت تایپ داده‌ها
import accordionData from "./AccordionData";    // ایمپورت داده‌ها
import { Accordion } from "@/components/ui/accordion";
import AccordionItemComponent from "./AccordionItemComponent";  // ایمپورت کامپوننت آیتم

function AccordionComponent() {
    // فراخوانی داده‌ها
    const data: Data[] = accordionData() || [];

    return (
        <article className=" text-black dark:text-gray-200">
            <h3 className="main-title">
                Find Out More About Pursche
            </h3>

            <div className="size-full pb-20 pt-7">
                <Accordion type="single" collapsible className="w-full">
                    {data.map((item, index) => (
                        <AccordionItemComponent
                            key={index}
                            value={item.value}
                            title={item.title}
                            description={item.description}
                        />
                    ))}
                </Accordion>
            </div>
        </article>
    );
}

export default AccordionComponent;
