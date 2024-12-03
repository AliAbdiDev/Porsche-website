"use client"

import Image from 'next/image';
import React, { useState } from 'react';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        email: '',
        subject: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, subject, message } = formData;

        if (!inputValidation(email) || !inputValidation(subject) || !inputValidation(message)) {
            console.log("Please fill in all fields");
            return;
        }

        console.log({ email, subject, message });
        // اینجا می‌توانید داده‌ها را ارسال کنید
    };

    const inputValidation = (input) => {
        return input.trim() !== '';
    };

    return (
        <section className="relative h-screen w-full">
            <div className="absolute bg-white dark:bg-gray-900 size-full">
                {/* bacground img  */}
                <div className="absolute top-0 size-full z-10 max-sm:hidden">
                    <Image
                        src="/pic/6.jpeg"
                        alt="purche"
                        className="size-full object-cover"
                        width={500}
                        height={500}
                    />
                </div>
                {/* blur effect  */}
                <span className="block bg-gray-800/40 backdrop-blur-md absolute top-0 z-20 size-full"></span>

                {/* content */}
                <div className="py-8 flex items-center justify-center gap-7 lg:py-16 w-full px-[4%] relative z-30 h-full">
                    <div className="max-md:hidden w-1/2 ">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                            Contact Us
                        </h2>
                        <p className="mb-7 font-light text-gray-500 dark:text-gray-200 sm:text-xl">
                            Thank you for choosing Porsche. We are dedicated to providing an exceptional experience for our valued customers. If you have any questions or feedback, our support team is here to assist you in creating a remarkable Porsche experience.
                        </p>
                    </div>
                    <form className="space-y-7 w-full md:w-1/2" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-50">Your email</label>
                            <input
                                type="email"
                                id="email"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-500 dark:border-gray-300 dark:placeholder-gray-300 dark:text-white"
                                placeholder="name@flowbite.com"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-50">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-500 dark:border-gray-300 dark:placeholder-gray-300 dark:text-white"
                                placeholder="Let us know how we can help you"
                                value={formData.subject}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-50">Your message</label>
                            <textarea
                                id="message"
                                rows="6"
                                className="resize-none block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-500 dark:border-gray-300 dark:placeholder-gray-300 dark:text-white"
                                placeholder="Leave a comment..."
                                value={formData.message}
                                onChange={handleInputChange}
                            ></textarea>
                        </div>
                        <button type="submit" className="py-2 px-5 font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit focus:outline-none">
                            Send message
                        </button>
                    </form>
                </div>
            </div>
        </section>

    );
};

export default ContactUs;
