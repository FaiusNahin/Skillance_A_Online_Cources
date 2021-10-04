import React from 'react';
import img from '../../images/banner.jpg'

const Banner = () => {
    return (
        <div className="flex items-center px-60 py-32" >
            {/* Banner Image */}
            <div className="w-2/4 pr-4">
                <img src={img} alt="" />
            </div>

            {/* Banner Text */}
            <div className="w-2/4 pl-4">
                <p className="text-xl font-semibold  pb-5 text-indigo-900"><span className="font-bold text-passion text-2xl">/</span> Push Your Passion</p>
                <h1 className="text-6xl font-semibold text-indigo-900 w-4/5 pb-10">Build Your <span className="text-passion">Skills</span> With Online Courses</h1>
                <p className="text-lg text-blue-900 pl-2">Skillance is a leading supplier of business, project and quality management solutions. We aim to create an inspiring learning environment that helps teams to achieve their full potential.</p>

            </div >
        </div >
    );
};

export default Banner;