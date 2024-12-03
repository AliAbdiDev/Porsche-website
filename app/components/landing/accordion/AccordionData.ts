import Data from "./accordion.interface";
function AccordionData() {

    const data: Data[] = [
        {
            title: "Why Choose Porsche?",
            description: "Porsche represents the pinnacle of German engineering excellence. With over 70 years of sports car manufacturing experience, Porsche delivers an unmatched combination of performance, luxury, and everyday usability. Each Porsche vehicle is meticulously engineered and crafted from the finest materials, ensuring an extraordinary driving experience that sets the benchmark in automotive excellence.",
            value: "why-porsche"
        },
        {
            title: "After-Sales Service",
            description: "We provide comprehensive maintenance services, a 4-year warranty, 24/7 support, and access to Porsche-trained technicians. Our service centers use only genuine Porsche parts and the latest diagnostic equipment. Additionally, our Porsche Approved program offers certified pre-owned vehicles with guaranteed quality and extended warranty coverage.",
            value: "after-sales"
        },
        {
            title: "Financing Options",
            description: "We offer flexible financing solutions including leasing, installment purchases, and bank financing with competitive rates. Our financial experts are ready to help you find the perfect solution tailored to your needs. Special programs are available for both new and Certified Pre-Owned Porsche vehicles, making luxury car ownership more accessible.",
            value: "financing"
        },
        {
            title: "Vehicle Customization",
            description: "Through the Porsche Exclusive Manufaktur program, you can personalize your vehicle to your exact specifications. From unique paint colors to custom leather and carbon fiber interior trim, and performance upgrades, we transform your Porsche into a one-of-a-kind masterpiece. Our design consultants will guide you through every option to create your perfect Porsche.",
            value: "customization"
        }
    ]

    return data;
}

export default AccordionData;