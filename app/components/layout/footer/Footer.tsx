import Link from "next/link";
import Image from "next/image";
import SocialLinks from "./SocialLinks ";
function Footer() {
    return (
        <footer className="bg-lig dark:bg-dark text-black dark:text-gray-200">

            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link href="#" className="flex items-center max-md:w-full max-md:justify-center">
                            <Image
                                className="h-36 w-52"
                                loading="lazy"
                                unoptimized={true}
                                width={160}
                                height={112}
                                src="/pic/Porsche-Logo-1-1155x770-removebg-preview.png"
                                alt="Porsche Logo"
                            />
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 text-emerald-800 dark:text-emerald-700 sm:pt-3">
                        <div>
                            <h3 className="mb-6 text-sm font-bold uppercase text-emerald-900 dark:text-emerald-600">Porsche Guide</h3>
                            <ul className="font-medium">
                                <li className="mb-4">
                                    <a href="#" className="">Buying Guide</a>
                                </li>
                                <li>
                                    <a href="#" className="">Blog & Articles</a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="mb-6 text-sm font-bold uppercase text-emerald-900 dark:text-emerald-600">Connect With Us</h3>
                            <ul className="font-medium">
                                <li className="mb-4">
                                    <a href="#" className="">Social Media</a>
                                </li>
                                <li>
                                    <a href="#" className="">News & Events</a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="mb-6 text-sm font-bold uppercase text-emerald-900 dark:text-emerald-600">Legal</h3>
                            <ul className="font-medium">
                                <li className="mb-4">
                                    <a href="#" className="">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#" className="">Terms & Conditions</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="text-sm font-semibold sm:text-center flex items-center space-x-2">
                        <p>Created by</p>
                        <Link href="#" className="underline text-emerald-800 dark:text-emerald-600" target="_blank">
                            Ali Abdi
                        </Link>
                        <p>from</p>
                        <Link href="https://ponisha.ir/profile/loratech" className="text-[#226FFB] underline" target="_blank">
                            Loratech
                        </Link>
                        <p>Team</p>
                    </div>

                    <SocialLinks />
                </div>
            </div>
        </footer>
    );
}

export default Footer;