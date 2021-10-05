import { useServices } from '../../hooks/useServices';
import Banner from '../Banner/Banner';
import Service from '../Service/Service';

const Home = () => {
    const [services] = useServices();

    const homeServices = services.filter(service => service.id <= 4);

    return (
        <div>
            {/* Banner */}
            <div>
                <Banner></Banner>
            </div>

            {/* Services Heading */}
            <div className="flex flex-col items-center text-center mt-28 mb-20 lg:mb-28">
                <h1 className="text-4xl mb-8 font-medium text-indigo-900 w-11/12 sm:w-full md:text-5xl">Explore Featured <span className="text-passion">Courses</span></h1>
                <p className="text-center text-gray-600 w-5/6 text-lg md:w-4/6 lg:w-3/4 xl:w-3/5 2xl:w-2/5">Skillance specializes in designing training programs tailored to meet your organization's specific needs, designed to get results within your specific time-frame and budget. </p>
            </div>

            {/* Services */}
            <div className="services flex justify-center itens-center pb-20">
                <div className="grid grid-cols-1 gap-10 w-11/12 md:w-3/5 lg:grid-cols-2 lg:w-card xl:w-9/12 2xl:w-7/12">
                    {
                        homeServices.map(service => <Service
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