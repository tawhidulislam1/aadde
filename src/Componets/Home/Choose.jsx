import React from 'react';

const Choose = () => {
    return (
        <div>
            {/* Why Choose Us Section */}
            <section className="py-16 bg-gray-50 px-6 mb-10">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Why Choose ADE IT?</h2>
                <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
                    <div className="flex-1 bg-white p-6 shadow rounded">
                        <h3 className="font-bold text-xl mb-2">Expert Consultants</h3>
                        <p>Our team brings decades of experience across industries.</p>
                    </div>
                    <div className="flex-1 bg-white p-6 shadow rounded">
                        <h3 className="font-bold text-xl mb-2">Client-Centric Approach</h3>
                        <p>We tailor every solution to meet your exact business needs.</p>
                    </div>
                    <div className="flex-1 bg-white p-6 shadow rounded">
                        <h3 className="font-bold text-xl mb-2">End-to-End Delivery</h3>
                        <p>From strategy to execution, we deliver real results.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Choose;