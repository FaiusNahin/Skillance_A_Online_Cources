import React from 'react';

const Contact = () => {
    return (
        <div className="flex items-center justify-center px-72 py-28">
            <div className="w-2/4">
                <iframe className="w-4/5 h-96" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7306.151294808885!2d90.51389427537843!3d23.708992474850085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1633357163838!5m2!1sen!2sbd" allowfullscreen="" loading="lazy"></iframe>
            </div>
            <div className="">
                <p className="text-xl font-semibold  pb-4 text-indigo-900"><span className="font-bold text-passion text-2xl">/</span> Contact Us</p>
                <h1 className="text-5xl mb-5 font-medium text-gray-700">Get In <span className="text-passion">Touch</span></h1>
                <p className="w-4/6 text-gray-600 text-lg">Whenever you need us we are here to seve you. Feel free to share your opinion.</p>
                <div className="pt-8 grid grid-cols-2 gap-10">
                    <div className="flex items-center gap-6">
                        <div>
                            <p><i className="far fa-map text-5xl text-passion"></i></p>
                        </div>
                        <div className="text-gray-700">
                            <p className="text-2xl font-semibold">Location</p>
                            <p className="">Narayanganj, Dhaka</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <div>
                            <p><i className="fas fa-phone-alt text-5xl text-passion"></i></p>
                        </div>
                        <div className="text-gray-700">
                            <p className="text-2xl font-semibold">Phone</p>
                            <p className="">(+02) 855456</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <div>
                            <p><i className="fas fa-envelope-open-text text-5xl text-passion"></i></p>
                        </div>
                        <div className="text-gray-700">
                            <p className="text-2xl font-semibold">Email</p>
                            <p className="">skillance@support.com</p>
                        </div>
                    </div>
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