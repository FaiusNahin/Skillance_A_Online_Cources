import React from 'react';
import { NavLink } from 'react-router-dom';
import img from '../../images/skillance.png';

// Navigation
const Header = () => {
    return (
        <div className="flex flex-col items-center justify-evenly py-5 xl:flex-row lg:flex-row md:flex-row">
            <div className="flex flex-col items-center xl:flex-row lg:flex-row md:flex-row">

                {/* Website Logo & Name */}
                <div className="flex items-center ">
                    <img className="w-14 lg:w-16" src={img} alt="" />
                    <p className="text-3xl lg:text-4xl font-medium text-indigo-900">SKILLANCE</p>
                </div>

                {/* All NavLinks */}
                <div className="mt-2 text-xl text-indigo-900 lg:pl-10 md:pl-4 md:mt-0">
                    <NavLink to="/home"
                        className="p-1.5 lg:mx-1 lg:p-2"
                        activeStyle={{
                            color: "#ec4524",
                            borderBottom: "2px solid #ec4524"
                        }}
                    >Home</NavLink>
                    <NavLink to="/services"
                        className="p-1.5 lg:mx-1 lg:p-2"
                        activeStyle={{
                            color: "#ec4524",
                            borderBottom: "2px solid #ec4524"
                        }}
                    >Services</NavLink>
                    <NavLink to="/about"
                        className="p-1.5 lg:mx-1 lg:p-2"
                        activeStyle={{
                            color: "#ec4524",
                            borderBottom: "2px solid #ec4524"
                        }}
                    >About</NavLink>
                    <NavLink to="/contact"
                        className="p-1.5 lg:mx-1 lg:p-2"
                        activeStyle={{
                            color: "#ec4524",
                            borderBottom: "2px solid #ec4524"
                        }}
                    >Contact</NavLink>
                </div>
            </div>

            {/* Getting Started Button */}
            <div className="md:pt-0 pt-6">
                <button className="text-xl text-white bg-heading rounded py-2 px-3 lg:py-3 lg:px-4">Get Started</button>
            </div>
        </div>
    );
};

export default Header;