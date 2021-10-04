import React from 'react';
import { useServices } from '../../hooks/useServices';
import AllServices from '../AllServices/AllServices';

const Services = () => {
    const [services] = useServices();

    return (
        <>
            {/* Services Heading */}
            <div className="flex flex-col items-center mt-28 mb-4">
                <p className="text-xl font-semibold  pb-5 text-indigo-900"><span className="font-bold text-passion text-2xl">/</span> Our Courses</p>
                <h1 className="text-5xl mb-8 font-medium text-indigo-900">We Provide <span className="text-passion">The Best Course</span> For You </h1>
                <p className="text-center w-2/4 text-gray-600 text-lg">The more that you read, the more things you will know. The more that you learn, the more places you’ll go.</p>
            </div>

            {/* All Services */}
            <div className="services flex justify-center itens-center py-20">
                <div className="grid grid-cols-3 w-4/6 gap-5">
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