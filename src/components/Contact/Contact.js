import React from 'react';

const Contact = () => {
    return (
        <div className="flex items-center justify-center px-72 py-28 gap-4">
            {/* Feedback */}
            <div className="flex flex-col items-start justify-center w-2/4">
                <div className="w-5/6 px-12 py-14 mx-2 rounded-xl shadow-contact">

                    {/* Leave A Message */}
                    <h2 className="text-gray-700 text-3xl font-semibold pb-4">Leave A Message</h2>
                    <p className=" text-gray-600 text-lg mb-2">You die, but most of what you have accumulated will not be lost; you are leaving a message in a bottle. </p>

                    {/* Input Fields */}
                    <div className="flex gap-6 my-5 w-full">
                        <input className="border pl-3 py-3.5 rounded-md text-lg w-2/4" type="text" placeholder="Your Name" />
                        <input className="border pl-3 py-3.5 rounded-md text-lg w-2/4" type="text" placeholder="Your Email" />
                    </div>
                    <input className="border pl-3 py-3.5 rounded-md text-lg w-full mb-5" type="text" placeholder="Subject" />
                    <textarea className="border pl-3 py-3.5 rounded-md text-lg w-full h-32 mb-5" placeholder="Message"></textarea>

                    {/* Send Message Button */}
                    <button className="text-xl text-white bg-heading py-3.5 w-full rounded">Send Message</button>
                </div>
            </div>

            <div className="">

                {/* Contact Us Heading */}
                <p className="text-xl font-semibold  pb-4 text-indigo-900"><span className="font-bold text-passion text-2xl">/</span> Contact Us</p>
                <h1 className="text-5xl mb-5 font-medium text-gray-700">Get In <span className="text-passion">Touch</span></h1>
                <p className="w-4/6 text-gray-600 text-lg">Whenever you need us we are here to seve you. Feel free to share your opinion.</p>

                {/* Contact Info */}
                <div className="pt-8 grid grid-cols-2 gap-10">

                    {/* Location */}
                    <div className="flex items-center gap-6">
                        <div>
                            <p><i className="far fa-map text-5xl text-passion"></i></p>
                        </div>
                        <div className="text-gray-700">
                            <p className="text-2xl font-semibold">Location</p>
                            <p className="">Narayanganj, Dhaka</p>
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center gap-6">
                        <div>
                            <p><i className="fas fa-phone-alt text-5xl text-passion"></i></p>
                        </div>
                        <div className="text-gray-700">
                            <p className="text-2xl font-semibold">Phone</p>
                            <p className="">(+02) 855456</p>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-center gap-6">
                        <div>
                            <p><i className="fas fa-envelope-open-text text-5xl text-passion"></i></p>
                        </div>
                        <div className="text-gray-700">
                            <p className="text-2xl font-semibold">Email</p>
                            <p className="">skillance@support.com</p>
                        </div>
                    </div>

                    {/* Opening Hours */}
                    <div className="flex items-center gap-6">
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
        </div>
    );
};

export default Contact;