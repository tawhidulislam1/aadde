import React from "react";
import { FiDatabase, FiBarChart2, FiPieChart } from "react-icons/fi";

const Data = () => {
    return (
        <section className="max-w-6xl mx-auto px-6 py-16 mt-10">
            <h1 className="text-4xl font-bold text-center text-blue-800 mb-10">
                Resources – Data
            </h1>

            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
                Data is at the heart of informed decision-making. Our approach focuses
                on gathering, analyzing, and visualizing data to empower businesses and
                social enterprises.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Block 1: Data Collection */}
                <div className="p-6 bg-blue-50 rounded-lg shadow hover:shadow-md transition">
                    <FiDatabase className="text-3xl text-blue-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">
                        Data Collection
                    </h3>
                    <p className="text-gray-700">
                        We gather reliable datasets from multiple sources tailored to the
                        needs of each project, ensuring quality and relevance.
                    </p>
                </div>

                {/* Block 2: Data Analysis */}
                <div className="p-6 bg-blue-50 rounded-lg shadow hover:shadow-md transition">
                    <FiBarChart2 className="text-3xl text-blue-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">
                        Data Analysis
                    </h3>
                    <p className="text-gray-700">
                        We interpret complex data and extract actionable insights to
                        support strategic planning and decision-making.
                    </p>
                </div>

                {/* Block 3: Data Visualization */}
                <div className="p-6 bg-blue-50 rounded-lg shadow hover:shadow-md transition">
                    <FiPieChart className="text-3xl text-blue-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">
                        Data Visualization
                    </h3>
                    <p className="text-gray-700">
                        Presenting data through clear charts, graphs, and dashboards that
                        help communicate the story behind the numbers.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Data;
