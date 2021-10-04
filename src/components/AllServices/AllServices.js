import React from 'react';

const AllServices = (props) => {
    const { title, type, enrolled, hour, img, instructor, instructorThumb, lecture, level, minutes, price } = props.service;

    return (
        <div className="shadow-all p-3 rounded-lg">
            <div className="">
                <div className="">
                    <img className="rounded w-full" src={img} alt="" />
                </div>
                <div className="pt-3 px-1">
                    <div className="flex justify-between">
                        <p className="bg-indigo-50 text-indigo-600 py-1 px-5 rounded-3xl text-lg">{type}</p>
                        <p><span className="font-semibold text-lg">{enrolled}</span> Enrolled</p>
                    </div>

                    <h2 className="font-semibold text-xl py-3.5">{title}</h2>

                    <div className="flex items-center text-base text-gray-600 pb-4">
                        <p className=" mr-6"><span className="text-pink-600 text-base"><i className="fas fa-clock"></i></span> {hour} hr {minutes} min</p>
                        <p className=" mr-6"><span className="text-passion text-base"><i className="fas fa-video"></i></span> {lecture} Lectures</p>
                        <p className=" mr-6"><span className="text-indigo-900 text-base"><i class="fas fa-signal"></i></span> {level}</p>
                    </div>
                    <div className="border-t flex justify-between items-center py-3.5 px-1">
                        <div className="flex items-center gap-4 text-lg">
                            <img className="w-10 rounded-full" src={instructorThumb} alt="" />
                            <p>{instructor}</p>
                        </div>
                        <p className="font-bold text-xl text-gray-600">$<span className="text-passion text-2xl">{price}</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllServices;