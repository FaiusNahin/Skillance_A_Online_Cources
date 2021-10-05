import React from 'react';
import { NavLink } from 'react-router-dom';
import img from '../../images/skillance.png';

const Footer = () => {
    return (
        <div className="flex justify-center bg-indigo-900 py-12 px-12 md:px-28 lg:py-24 lg:px-24 xl:px-44 2xl:px-72">
            <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-5">

                {/* Footer Company Moto and Subscription  */}
                <div className="lg:col-span-2">
                    <div className="flex items-center text-white">
                        <img className="w-10 md:w-14 lg:w-16" src={img} alt="" />
                        <p className="text-3xl md:text-4xl font-medium pl-3">SKILLANCE</p>
                    </div>
                    <p className="w-11/12 lg:w-full text-white text-xl md:text-2xl font-bold pt-3 lg:pt-2">Do You Need Help With
                        Anything?</p>
                    <p className="text-lg text-gray-500 py-4 w-11/12">Receive updates, hot deals, tutorials, discounts sent straignt in your inbox every month</p>
                    <form>
                        <input className="pl-2 w-32 py-2.5 md:pl-3 md:w-medium lg:w-52 xl:w-60 md:py-3 lg:py-3.5 rounded-l-md md:text-lg" type="text" placeholder="Email Address" />
                        <button className="py-2.5 px-2.5 md:text-lg text-white bg-heading md:py-3 lg:py-3.5 md:px-3 lg:px-4 rounded-r-md">Subscribe</button>
                    </form>
                </div>

                {/* Footer Quick Links */}
                <div className="flex flex-col items-center mt-8 lg:mt-0">
                    <p className="text-xl font-bold text-white">Quick Links</p>
                    <div className="flex flex-col items-center pt-2">
                        <NavLink to="/home"
                            className="py-1 text-lg text-gray-500 hover:text-white"
                            activeStyle={{
                                color: "white",
                            }}
                        >Home</NavLink>
                        <NavLink to="/services"
                            className="py-1 text-lg text-gray-500 hover:text-white"
                            activeStyle={{
                                color: "white",
                            }}
                        >Services</NavLink>
                        <NavLink to="/about"
                            className="py-1 text-lg text-gray-500 hover:text-white"
                            activeStyle={{
                                color: "white",
                            }}
                        >About</NavLink>
                    </div>
                </div>

                {/* Footer Contact Us */}
                <div className="flex flex-col items-center mt-8 md:mt-14 lg:mt-0 text-center">
                    <p className="text-xl font-bold text-white pb-1">Need Some Help?</p>
                    <NavLink to="/contact"
                        className="py-1 text-lg text-gray-500 hover:text-white"
                        activeStyle={{
                            color: "white",
                        }}
                    >Contact</NavLink>
                </div>

                {/* Footer Location */}
                <div className="flex flex-col items-center mt-8 md:mt-14 lg:mt-0">
                    <p className="text-xl font-bold text-white pb-2">Location</p>
                    <div className="flex flex-col items-center text-lg text-gray-500">
                        <p className="py-1 hover:text-white">Narayanganj, Dhaka</p>
                        <p className="py-1 hover:text-white">skillance@support.com</p>
                        <p className="py-1 hover:text-white">(+02) 855456</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;