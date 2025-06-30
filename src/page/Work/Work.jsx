import React, { useState } from "react";

const Work = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="py-20 px-6 max-w-5xl mx-auto">
            {/* Page Title */}
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Our Work</h1>
            <p className="text-gray-600 mb-10 text-lg">
                At ADE, we take pride in our collaborative efforts to deliver strategic,
                innovative, and transformative results. Explore how we empower clients
                through knowledge sharing and modern learning systems.
            </p>

            {/* Learning Dropdown */}
            <div className="border rounded-lg shadow p-6 bg-white">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full flex justify-between items-center text-left text-xl font-semibold text-blue-700"
                >
                    Learning
                    <svg
                        className={`h-6 w-6 transform transition-transform ${isOpen ? "rotate-180" : ""
                            }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </button>

                {isOpen && (
                    <div className="mt-4 text-gray-700 space-y-4">
                        <p>
                            Our learning initiatives are designed to equip teams with practical
                            knowledge in technology, leadership, and innovation. We provide:
                        </p>
                        <ul className="list-disc list-inside ml-2 space-y-1">
                            <li>Customized team workshops and training</li>
                            <li>Online learning portals for continuous development</li>
                            <li>One-on-one mentorship sessions</li>
                            <li>Access to case studies and resources</li>
                        </ul>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Work;
