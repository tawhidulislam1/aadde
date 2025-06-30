import React from 'react';

const Hero = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="hero min-h-screen bg-gradient-to-r from-sky-50 to-blue-100 text-center flex flex-col justify-center items-center p-8">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-800">Welcome to ADE IT</h1>
                <p className="text-lg mt-4 max-w-2xl text-gray-600">
                    Empowering organizations through strategic consulting, digital transformation, and human capital innovation.
                </p>
                <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    Learn More
                </button>
            </section>

           
        </div>
    );
};

export default Hero;