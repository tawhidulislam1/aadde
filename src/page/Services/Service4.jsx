import { FiTarget, FiTrendingUp, FiCompass } from "react-icons/fi";

const strategySteps = [
    {
        title: "Vision & Goals",
        icon: <FiTarget className="text-green-500 w-10 h-10" />,
        description:
            "Define clear and measurable goals that align with your business vision and set the direction for all strategic initiatives.",
    },
    {
        title: "Market Analysis",
        icon: <FiTrendingUp className="text-blue-500 w-10 h-10" />,
        description:
            "Understand your industry landscape, competitors, and customer needs to identify opportunities and threats.",
    },
    {
        title: "Execution Plan",
        icon: <FiCompass className="text-yellow-500 w-10 h-10" />,
        description:
            "Develop actionable roadmaps, allocate resources efficiently, and monitor progress to ensure successful strategy implementation.",
    },
];

const keyPrinciples = [
    "Clarity",
    "Flexibility",
    "Data-Driven Decisions",
    "Customer Focus",
    "Innovation",
    "Collaboration",
    "Continuous Improvement",
    "Sustainability",
];

const Service4 = () => {
    return (
        <section className="max-w-6xl mx-auto px-6 py-16">
            {/* Header and Intro */}
            <div className="mb-16 flex flex-col md:flex-row items-center md:items-start gap-10">
                <div className="md:w-1/2">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
                        Strategy
                    </h1>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        Strategy is the foundation of business success. We help you craft clear goals, analyze your market, and create execution plans that drive growth and innovation.
                    </p>
                </div>
                <div className="md:w-1/2 grid grid-cols-1 gap-8">
                    {strategySteps.map(({ title, icon, description }, idx) => (
                        <div
                            key={idx}
                            className="flex items-start gap-6 p-6 bg-gradient-to-r from-green-50 via-blue-50 to-yellow-50 rounded-lg shadow-md hover:shadow-lg transition"
                        >
                            <div className="flex-shrink-0">{icon}</div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    {title}
                                </h3>
                                <p className="text-gray-700">{description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Key Principles Section */}
            <div className="bg-green-50 p-10 rounded-lg shadow-inner">
                <h2 className="text-3xl font-semibold text-green-900 mb-8 text-center">
                    Key Principles of Effective Strategy
                </h2>
                <ul className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 list-disc list-inside text-green-800 font-medium">
                    {keyPrinciples.map((principle, idx) => (
                        <li key={idx} className="hover:text-green-600 cursor-default">
                            {principle}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Service4;