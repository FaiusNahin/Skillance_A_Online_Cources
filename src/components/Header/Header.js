import React from 'react';
import { NavLink } from 'react-router-dom';
import img from '../../images/skillance.png';

// Navigation
const Header = () => {
    return (
        <div className="flex items-center justify-evenly pt-5">
            <div className="flex items-center">

                {/* Website Logo & Name */}
                <div className="flex items-center">
                    <img className="w-16" src={img} alt="" />
                    <p className="text-4xl font-medium text-indigo-900">SKILLANCE</p>
                </div>

                {/* All NavLinks */}
                <div className="pl-10 text-xl text-indigo-900">
                    <NavLink to="/home"
                        className="p-2 mx-1"
                        activeStyle={{
                            color: "#ec4524",
                            borderBottom: "2px solid #ec4524"
                        }}
                    >Home</NavLink>
                    <NavLink to="/services"
                        className="p-2 mx-1"
                        activeStyle={{
                            color: "#ec4524",
                            borderBottom: "2px solid #ec4524"
                        }}
                    >Services</NavLink>
                    <NavLink to="/about"
                        className="p-2 mx-1"
                        activeStyle={{
                            color: "#ec4524",
                            borderBottom: "2px solid #ec4524"
                        }}
                    >About</NavLink>
                    <NavLink to="/contact"
                        className="p-2 mx-1"
                        activeStyle={{
                            color: "#ec4524",
                            borderBottom: "2px solid #ec4524"
                        }}
                    >Contact</NavLink>
                </div>
            </div>

            {/* Getting Started Button */}
            <div>
                <button className="text-xl text-white bg-heading py-3 px-4 rounded">Get Started</button>
            </div>
        </div>
    );
};

export default Header;