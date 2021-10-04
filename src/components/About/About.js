import React from 'react';
import image from '../../images/look.jpg';

const About = () => {
    return (
        <div className="flex items-center justify-center px-72 py-28">
            <div className="w-2/4 pl-28">
                {/* About Heading */}
                <p className="text-xl font-semibold  pb-2 text-indigo-900"><span className="font-bold text-passion text-2xl">/</span> About Skillance</p>
                <h1 className="text-3xl font-bold text-gray-700 pb-6">What We Do & Our Aim</h1>
                <p className="w-4/5">We are comitted to provide best services in our courses and we enshure that there will be no compromise to provide you support.</p>

                {/* Facilities */}
                <div className="text-gray-700 font-bold text-lg mb-8 pt-3">
                    <p className="my-4"><span><i className="fas fa-check text-passion bg-red-50 p-2.5 rounded-full mr-2.5"></i></span> Full Lifetime Access</p>
                    <p className="my-4"><span><i className="fas fa-check text-passion bg-red-50 p-2.5 rounded-full mr-2.5"></i></span> 200+ Downloadable Resources</p>
                    <p className="my-4"><span><i className="fas fa-check text-passion bg-red-50 p-2.5 rounded-full mr-2.5"></i></span> Certificate Of Completion</p>
                    <p className="my-4"><span><i className="fas fa-check text-passion bg-red-50 p-2.5 rounded-full mr-2.5"></i></span> Free Trial 30 Days</p>
                </div>

                {/* Enroll Now Button */}
                <button className="text-xl text-white bg-heading py-2.5 px-8 rounded">Enroll Now</button>
            </div>
            {/* About Page Image */}
            <div className="flex justify-center w-2/4 pr-8">
                <img className="w-10/12" src={image} alt="" />
            </div>
        </div>
    );
};

export default About;