import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Service from '../Service/Service';

const Home = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./fakedata.JSON')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <div>
            {/* Banner */}
            <div>
                <Banner></Banner>
            </div>

            {/* Services Heading */}
            <div className="flex flex-col items-center my-14">
                <h1 className="text-5xl mb-8 font-medium text-indigo-900">Explore Featured <span className="text-passion">Courses</span></h1>
                <p className="text-center w-2/4 text-gray-600 text-lg">Skillance specializes in designing training programs tailored to meet your organization's specific needs, designed to get results within your specific time-frame and budget. </p>
            </div>

            {/* Services */}
            <div className="services flex justify-center itens-center py-20">
                <div className="grid grid-cols-2 w-3/5 gap-10">
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;