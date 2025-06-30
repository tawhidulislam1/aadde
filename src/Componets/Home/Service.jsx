/* eslint-disable no-unused-vars */

import { FiMonitor, FiLayers, FiBriefcase, FiTarget, FiUsers, FiCpu } from "react-icons/fi";

const ServicesPreview = () => {
    const services = [
        { name: "Digital Transformation", icon: FiMonitor },
        { name: "Project Management", icon: FiLayers },
        { name: "Brand Management", icon: FiBriefcase },
        { name: "Strategy", icon: FiTarget },
        { name: "Human Capital", icon: FiUsers },
        { name: "ERP Implementation", icon: FiCpu }
    ];

    return (
        <section className="py-16 px-6 bg-white">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Core Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {services.map(({ name, icon: Icon }, idx) => (
                
                    <div
                        key = { idx }
                        className = "p-6 border rounded-lg shadow hover:shadow-lg transition duration-300 flex flex-col items-start gap-4"
                    >
                        <Icon className="text-4xl text-blue-600" />
                        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
                        <p className="text-gray-600">
                            Discover how our {name.toLowerCase()} services can streamline your business operations and drive innovation.
                        </p>
                    </div>
                ))}
        </div>
        </section >
    );
};

export default ServicesPreview;