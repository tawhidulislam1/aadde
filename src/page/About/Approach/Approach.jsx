/* eslint-disable no-unused-vars */
import React from "react";
import { FiZap, FiLayers, FiRefreshCw, FiTrendingUp, FiUsers, FiCheckCircle } from "react-icons/fi";

const approaches = [
    {
        icon: FiZap,
        title: "Innovative Thinking",
        description:
            "We believe in creative and innovative solutions tailored to your unique business challenges.",
    },
    {
        icon: FiLayers,
        title: "Layered Strategy",
        description:
            "Our multi-layered approach ensures every aspect of your project is covered, from concept to delivery.",
    },
    {
        icon: FiRefreshCw,
        title: "Agile Process",
        description:
            "We adapt quickly to changes, maintaining transparency and collaboration throughout the development cycle.",
    },
    {
        icon: FiTrendingUp,
        title: "Growth Focused",
        description:
            "Our strategies are designed to fuel sustainable growth and maximize your ROI.",
    },
    {
        icon: FiUsers,
        title: "Customer Centric",
        description:
            "Your customers’ needs guide our approach to ensure solutions that delight users and drive loyalty.",
    },
    {
        icon: FiCheckCircle,
        title: "Quality Assurance",
        description:
            "We rigorously test and refine to deliver high-quality, reliable, and scalable products.",
    },
];

const Approach = () => {
    return (
        <section className="py-20 px-6 bg-gray-50 min-h-screen">
            <div className="max-w-5xl mx-auto text-center">
                <h1 className="text-5xl font-bold text-gray-800 mb-6">Our Approach</h1>
                <p className="text-gray-600 text-lg mb-16 max-w-3xl mx-auto">
                    At Tech-Monks, we follow a proven approach combining creativity, strategy, and agility to deliver exceptional digital solutions.
                </p>

                <div className="grid gap-12 md:grid-cols-2">
                    {approaches.map(({ icon: Icon, title, description }, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-lg p-8 shadow hover:shadow-lg transition duration-300"
                        >
                            <Icon className="text-blue-600 text-5xl mb-6 mx-auto" />
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
                            <p className="text-gray-600">{description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Approach;
