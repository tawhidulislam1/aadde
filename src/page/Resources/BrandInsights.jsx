import React from "react";
import { FiEye, FiMessageCircle, FiGlobe, FiZap } from "react-icons/fi";

const BrandInsights = () => {
    return (
        <section className="max-w-6xl mx-auto px-6 py-16 mt-10">
            <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">
                Resources – Brand Insights
            </h1>

            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
                Brand Insights help organizations understand their identity, connect with audiences, and position themselves for long-term impact. Explore key elements that shape strong brands.
            </p>

            {/* Insights Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="p-6 bg-purple-50 rounded-lg shadow hover:shadow-md transition">
                    <FiEye className="text-3xl text-blue-600 mb-4" />
                    <h3 className="text-xl font-semibold text-gray-800">Brand Perception</h3>
                    <p className="text-gray-700">
                        How people see your brand is more powerful than what you say about it. Perception shapes loyalty.
                    </p>
                </div>

                <div className="p-6 bg-purple-50 rounded-lg shadow hover:shadow-md transition">
                    <FiMessageCircle className="text-3xl text-blue-600 mb-4" />
                    <h3 className="text-xl font-semibold text-gray-800">Voice & Story</h3>
                    <p className="text-gray-700">
                        Consistent messaging and authentic storytelling create a strong emotional bond with your audience.
                    </p>
                </div>

                <div className="p-6 bg-purple-50 rounded-lg shadow hover:shadow-md transition">
                    <FiGlobe className="text-3xl text-blue-600 mb-4" />
                    <h3 className="text-xl font-semibold text-gray-800">Market Position</h3>
                    <p className="text-gray-700">
                        Knowing your market position ensures clarity, relevance, and competitive advantage.
                    </p>
                </div>

                <div className="p-6 bg-purple-50 rounded-lg shadow hover:shadow-md transition">
                    <FiZap className="text-3xl text-blue-600 mb-4" />
                    <h3 className="text-xl font-semibold text-gray-800">Visual Identity</h3>
                    <p className="text-gray-700">
                        A bold logo, typography, and color palette build recognition and convey your values instantly.
                    </p>
                </div>
            </div>

            {/* Quote */}
            <div className="mt-16 text-center max-w-2xl mx-auto">
                <blockquote className="italic text-lg text-gray-700 border-l-4 border-blue-600 pl-4">
                    "A brand is no longer what we tell the consumer it is—it is what consumers tell each other it is." – Scott Cook
                </blockquote>
            </div>
        </section>
    );
};

export default BrandInsights;
