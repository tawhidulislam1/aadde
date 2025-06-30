
import { FiAward, FiPenTool, FiMonitor } from "react-icons/fi";

const features = [
    {
        title: "Brand Strategy",
        icon: <FiAward className="text-yellow-500 w-10 h-10" />,
        description:
            "Craft a clear brand vision, mission, and values that resonate with your audience and set your positioning apart.",
    },
    {
        title: "Visual Identity",
        icon: <FiPenTool className="text-pink-500 w-10 h-10" />,
        description:
            "Design logos, typography, and color schemes that create a memorable and cohesive brand image.",
    },
    {
        title: "Brand Monitoring",
        icon: <FiMonitor className="text-purple-500 w-10 h-10" />,
        description:
            "Keep track of brand perception, manage reputation, and adapt strategies for consistent positive impact.",
    },
];

const keyElements = [
    "Consistent Messaging",
    "Customer Experience",
    "Competitive Analysis",
    "Brand Guidelines",
    "Social Media Presence",
    "Market Research",
    "Reputation Management",
    "Brand Loyalty Programs",
];

const Service3 = () => {
    return (
        <section className="max-w-6xl mx-auto px-6 py-16">
            {/* Header & Intro */}
            <div className="mb-16 flex flex-col md:flex-row items-center md:items-start gap-10">
                <div className="md:w-1/2">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
                        Brand Management
                    </h1>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        Building a strong brand is essential to connect emotionally with customers, differentiate yourself in the market, and foster loyalty.
                        Our approach combines strategy, creative design, and continuous monitoring to keep your brand ahead.
                    </p>
                </div>
                <div className="md:w-1/2 grid grid-cols-1 gap-8">
                    {features.map(({ title, icon, description }, idx) => (
                        <div
                            key={idx}
                            className="flex items-start gap-6 p-6 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 rounded-lg shadow-md hover:shadow-lg transition"
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

            {/* Key Elements Section */}
            <div className="bg-indigo-50 p-10 rounded-lg shadow-inner">
                <h2 className="text-3xl font-semibold text-indigo-900 mb-8 text-center">
                    Key Elements of Brand Management
                </h2>
                <ul className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 list-disc list-inside text-indigo-800 font-medium">
                    {keyElements.map((el, idx) => (
                        <li key={idx} className="hover:text-indigo-600 cursor-default">
                            {el}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Service3;