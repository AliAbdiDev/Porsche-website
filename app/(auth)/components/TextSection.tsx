import Register from "./Register";

function TextSection() {
    return (
        <div className="text-gray-300 max-lg:hidden">
            <h2 className="lg:text-5xl text-4xl font-extrabold lg:leading-[55px] ">
                Welcome to Porsche&lsquo;s website
            </h2>
            <p className="text-sm mt-6">
                Join our website to buy a car and get the latest information about Porsche company
            </p>

            <div className="mt-8">
                <Register />
            </div>
        </div>
    );
}

export default TextSection;