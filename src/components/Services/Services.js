import React from 'react';
import { useServices } from '../../hooks/useServices';
import AllServices from '../AllServices/AllServices';

const Services = () => {
    const [services] = useServices();

    return (
        <>
            {/* Services Heading */}
            <div className="flex flex-col items-center text-center mt-28 mb-4">
                <p className="text-xl font-semibold  pb-5 text-indigo-900"><span className="font-bold text-passion text-2xl">/</span> Our Courses</p>
                <h1 className="text-4xl mb-8 font-medium text-indigo-900 sm:w-4/5 sm:text-5xl md:w-10/12">We Provide <span className="text-passion">The Best Course</span> For You </h1>
                <p className="text-center text-gray-600 text-lg w-4/5 md:w-3/4 lg:w-2/4 xl:w-2/5 2xl:w-2/6">The more that you read, the more things you will know. The more that you learn, the more places you’ll go.</p>
            </div>

            {/* All Services */}
            <div className="services flex justify-center itens-center py-20">
                <div className="grid grid-cols-1 w-11/12 gap-6 sm:gap-8 sm:w-3/4 md:w-almost md:gap-5 md:grid-cols-2 lg:gap-8 lg:w-4/5 xl:grid-cols-3 xl:w-card xl:gap-5 2xl:w-3/4 2xl:gap-8">
                    {
                        services.map(service => <AllServices
                            key={service.id}
                            service={service}
                        ></AllServices>)
                    }
                </div>
            </div>
        </>
    );
};

export default Services;