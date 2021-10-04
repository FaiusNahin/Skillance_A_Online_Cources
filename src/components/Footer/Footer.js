import React from 'react';
import { NavLink } from 'react-router-dom';
import img from '../../images/skillance.png';

const Footer = () => {
    return (
        <div className="flex justify-center bg-indigo-900 py-24 px-80">
            <div className=" grid grid-cols-5 justify-items-center">

                {/* Footer Company Moto and Subscription  */}
                <div className="col-span-2">
                    <div className="flex items-center text-white">
                        <img className="w-16" src={img} alt="" />
                        <p className="text-4xl font-medium pl-3">SKILLANCE</p>
                    </div>
                    <p className="text-white text-2xl font-bold pt-1">Do You Need Help With
                        Anything?</p>
                    <p className="text-lg text-gray-500 py-4">Receive updates, hot deals, tutorials, discounts sent straignt in your inbox every month</p>
                    <form>
                        <input className="w-80 py-3.5 pl-5 rounded-l-md text-lg" type="text" placeholder="Email Address" />
                        <button className="text-lg text-white bg-heading py-3.5 px-5 rounded-r-md">Subscribe</button>
                    </form>
                </div>

                {/* Footer Quick Links */}
                <div className="flex flex-col items-center">
                    <p className="text-2xl font-bold text-white">Quick Links</p>
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
                <div className="flex flex-col items-center">
                    <p className="text-2xl font-bold text-white pb-1">Need Some Help?</p>
                    <NavLink to="/contact"
                        className="py-1 text-lg text-gray-500 hover:text-white"
                        activeStyle={{
                            color: "white",
                        }}
                    >Contact</NavLink>
                </div>

                {/* Footer Location */}
                <div className="flex flex-col items-center ">
                    <p className="text-2xl font-bold text-white pb-2">Location</p>
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