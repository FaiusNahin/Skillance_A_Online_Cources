import React from 'react';

const Contact = () => {
    return (
        <div className="flex flex-col-reverse items-center justify-center py-12 gap-4 lg:py-28 lg:flex-row lg:px-8 lg:gap-6 xl:px-28 xl:gap-20 2xl:px-72">
            {/* Feedback */}
            <div className="flex flex-col items-start justify-center text-center w-almost sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-2/4 2xl:w-5/12">

                <div className=" px-4 py-12 mx-2 rounded-xl shadow-contact md:px-12 lg:px-8 xl:px-12 lg:py-8 xl:py-14">

                    {/* Leave A Message */}
                    <h2 className="text-gray-700 text-3xl font-semibold pb-4">Leave A Message</h2>
                    <p className=" text-gray-600 text-lg mb-2">You die, but most of what you have accumulated will not be lost; you are leaving a message in a bottle. </p>

                    {/* Input Fields */}
                    <div className="flex flex-col my-5 w-full pt-5 sm:pt-0 sm:flex-row sm:gap-4 md:gap-6">
                        <input className="border pl-3 py-3.5 rounded-md text-lg sm:w-2/4" type="text" placeholder="Your Name" />
                        <input className="border pl-3 py-3.5 mt-5 rounded-md text-lg sm:w-2/4 sm:mt-0" type="text" placeholder="Your Email" />
                    </div>
                    <input className="border pl-3 py-3.5 rounded-md text-lg w-full mb-5" type="text" placeholder="Subject" />
                    <textarea className="border pl-3 py-3.5 rounded-md text-lg w-full h-32 mb-5" placeholder="Message"></textarea>

                    {/* Send Message Button */}
                    <button className="text-xl text-white bg-heading py-3.5 w-full rounded">Send Message</button>
                </div>
            </div>

            <div className="px-8 mt-12 sm:w-4/5 md:px-0 md:w-3/4 lg:mt-0 lg:w-2/3 lg:pl-4 xl:w-2/4 mb-20 ml-4 lg:ml-0 lg:mb-0">

                {/* Contact Us Heading */}
                <div className="">
                    <p className="text-xl font-semibold  pb-4 text-indigo-900"><span className="font-bold text-passion text-2xl">/</span> Contact Us</p>
                    <h1 className="text-4xl mb-5 font-medium text-gray-700 md:text-5xl">Get In <span className="text-passion">Touch</span></h1>
                    <p className=" text-gray-600 text-lg sm:w-3/5 md:w-4/6">Whenever you need us we are here to seve you. Feel free to share your opinion.</p>
                </div>

                {/* Contact Info */}
                <div className="pt-8 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:gap-x-16 xl:gap-16">

                    {/* Location */}
                    <div className="flex items-center gap-6 lg:gap-4 xl:gap-6">
                        <div>
                            <p><i className="far fa-map text-5xl text-passion"></i></p>
                        </div>
                        <div className="text-gray-700">
                            <p className="text-2xl font-semibold">Location</p>
                            <p className="">Narayanganj, Dhaka</p>
                        </div>
                    </div>
                    {/* Phone */}
                    <div className="flex items-center gap-6 lg:gap-4 xl:gap-6">
                        <div>
                            <p><i className="fas fa-phone-alt text-5xl text-passion"></i></p>
                        </div>
                        <div className="text-gray-700">
                            <p className="text-2xl font-semibold">Phone</p>
                            <p className="">(+02) 855456</p>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-center gap-6 lg:gap-4 xl:gap-6">
                        <div>
                            <p><i className="fas fa-envelope-open-text text-5xl text-passion"></i></p>
                        </div>
                        <div className="text-gray-700">
                            <p className="text-2xl font-semibold">Email</p>
                            <p className="">skillance@support.com</p>
                        </div>
                    </div>

                    {/* Opening Hours */}
                    <div className="flex items-center gap-6 lg:gap-4 xl:gap-4">
                        <div>
                            <p><i className="far fa-clock text-5xl text-passion"></i></p>
                        </div>
                        <div className="text-gray-700">
                            <p className="text-2xl font-semibold">Opening Hours
                            </p>
                            <p className="">Everyday 09:00 - 18:00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Contact;