import React from 'react';
import img from '../../images/banner.jpg'

const Banner = () => {
    return (
        <div className="flex flex-col items-center px-6 my-14 md:px-4 md:flex-row lg:px-24 lg:my-0 lg:py-24 xl:px-24 xl:py-32 2xl:px-52" >
            {/* Banner Image */}
            <div className="w-full md:w-2/4 lg:pr-4">
                <img className="xl:w-almost" src={img} alt="" />
            </div>

            {/* Banner Text */}
            <div className="md:w-2/4 pl-5 mt-6 md:mt-0 lg:pl-0 xl:pl-4">
                <p className="text-xl font-semibold pb-3 text-indigo-900 lg:pb-5"><span className="font-bold text-passion text-2xl">/</span> Push Your Passion</p>
                <h1 className="text-4xl font-semibold text-indigo-900 pb-5 md:text-5xl md:w-almost lg:pb-8 lg:w-full lg:text-6xl xl:w-header xl:pb-10 2xl:w-heading">Build Your <span className="text-passion">Skills</span> With Online Courses</h1>
                <p className="text-blue-900 md:text-lg md:pl-2 xl:w-10/12">Skillance is a leading supplier of business, project and quality management solutions. We aim to create an inspiring learning environment that helps teams to achieve their full potential.</p>
            </div >
        </div >
    );
};

export default Banner;