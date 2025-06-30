import React from 'react';

const Service = () => {
    return (
        <div>
            {/* Services Preview Section */}
            <section className="py-16 px-6 bg-white">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Core Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {[
                        "Digital Transformation",
                        "Project Management",
                        "Brand Management",
                        "Strategy",
                        "Human Capital",
                        "ERP Implementation"
                    ].map((service, idx) => (
                        <div key={idx} className="p-6 border rounded-lg shadow hover:shadow-lg transition duration-300">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{service}</h3>
                            <p className="text-gray-600">
                                Discover how our {service.toLowerCase()} services can streamline your business operations and drive innovation.
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Service;