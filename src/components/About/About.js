import React from 'react';
import image from '../../images/look.jpg';

const About = () => {
    return (
        <div className="flex flex-col-reverse items-center justify-center py-28 px-6 lg:px-20 lg:flex-row xl:px-36 2xl:px-72">
            <div className="sm:pl-20 md:pl-28 lg:w-2/4 lg:pl-10 xl:pl-16 2xl:pl-24">
                {/* About Heading */}
                <p className="text-xl font-semibold pb-2 text-indigo-900"><span className="font-bold text-passion text-2xl">/</span> About Skillance</p>
                <h1 className="text-3xl font-bold text-gray-700 pb-6">What We Do & Our Aim</h1>
                <p className="w-almost sm:w-4/5 md:w-2/3 lg:w-10/12 xl:w-almost 2xl:w-10/12">We are comitted to provide best services in our courses and we enshure that there will be no compromise to provide you support.</p>

                {/* Facilities */}
                <div className="text-gray-700 font-bold sm:text-lg mb-8 pt-3">
                    <p className="my-4"><span><i className="fas fa-check text-passion bg-red-50 p-2.5 rounded-full sm:mr-2.5"></i></span> Full Lifetime Access</p>

                    <p className="my-4"><span><i className="fas fa-check text-passion bg-red-50 p-2.5 rounded-full sm:mr-2.5"></i></span> 200+ Downloadable Resources</p>

                    <p className="my-4"><span><i className="fas fa-check text-passion bg-red-50 p-2.5 rounded-full sm:mr-2.5"></i></span> Certificate Of Completion</p>

                    <p className="my-4"><span><i className="fas fa-check text-passion bg-red-50 p-2.5 rounded-full sm:mr-2.5"></i></span> Free Trial 30 Days</p>
                </div>

                {/* Enroll Now Button */}
                <button className="text-xl text-white bg-heading px-7 py-2.5 md:px-8 rounded">Enroll Now</button>
            </div>
            {/* About Page Image */}
            <div className="flex justify-center mb-14 lg:mb-0 md:w-4/5 lg:w-2/4 2xl:pr-10">
                <img className="sm:w-4/5 md:w-11/12 lg:w-full" src={image} alt="" />
            </div>
        </div>
    );
};

export default About;