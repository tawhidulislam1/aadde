
import { FiUsers, FiBriefcase, FiAward } from "react-icons/fi";

const CSuite = () => {
    return (
        <section className="max-w-6xl mx-auto px-6 py-16 mt-10">
            <h1 className="text-4xl font-bold text-center text-blue-800 mb-10">
                Resources – C-Suite
            </h1>

            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
                The C-Suite holds the key roles that define organizational vision,
                strategy, and culture. Understanding these positions helps align your
                business for success and sustainability.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* CEO */}
                <div className="p-6 bg-blue-50 rounded-lg shadow hover:shadow-md transition">
                    <FiUsers className="text-3xl text-blue-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">CEO</h3>
                    <p className="text-gray-700">
                        The Chief Executive Officer is the visionary leader responsible for
                        overall company performance and growth strategy.
                    </p>
                </div>

                {/* COO */}
                <div className="p-6 bg-blue-50 rounded-lg shadow hover:shadow-md transition">
                    <FiBriefcase className="text-3xl text-blue-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">COO</h3>
                    <p className="text-gray-700">
                        The Chief Operating Officer focuses on operational efficiency,
                        ensuring smooth day-to-day execution of strategy.
                    </p>
                </div>

                {/* CFO */}
                <div className="p-6 bg-blue-50 rounded-lg shadow hover:shadow-md transition">
                    <FiAward className="text-3xl text-blue-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">CFO</h3>
                    <p className="text-gray-700">
                        The Chief Financial Officer manages financial planning, risk
                        management, and drives fiscal responsibility.
                    </p>
                </div>
            </div>

            {/* Additional Text */}
            <div className="mt-16 text-center text-gray-600 max-w-3xl mx-auto">
                <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                    Why C-Suite Matters?
                </h2>
                <p>
                    Each C-Suite role brings a unique perspective and responsibility. When
                    aligned, these leaders create a powerful, resilient, and innovative
                    organization ready to adapt and thrive in any industry.
                </p>
            </div>
        </section>
    );
};

export default CSuite;
