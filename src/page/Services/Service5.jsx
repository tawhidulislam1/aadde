/* eslint-disable no-unused-vars */
import { FiUsers, FiBookOpen, FiCheckCircle, FiAward, FiHeart, FiLayers } from "react-icons/fi";
import { motion } from "framer-motion";

const coreFocus = [
    {
        icon: <FiUsers className="text-indigo-600 w-10 h-10" />,
        title: "Acquire",
        description: "Resource acquisition is the most important task for HR. A blend of art and science — focusing not just on experience, but also skill and attitude."
    },
    {
        icon: <FiHeart className="text-green-600 w-10 h-10" />,
        title: "Adopt",
        description: "Employees should feel this is the best place to grow. Culture and environment should make them feel belonged and empowered."
    },
    {
        icon: <FiAward className="text-yellow-500 w-10 h-10" />,
        title: "Award",
        description: "Recognize and motivate, especially Gen Z, with the right tools, flexibility, and feedback mechanisms."
    },
    {
        icon: <FiLayers className="text-blue-500 w-10 h-10" />,
        title: "Assist",
        description: "Supportive culture and impactful work ensures continuity and performance — not just loyalty."
    }
];

const insights = [
    "Pro-bono Initiatives",
    "Canada Market Focus",
    "Talent and Transformation",
    "C-Suite Development",
    "Retaining Talent",
    "Diversity, Equity & Inclusion (DEI)",
    "ESG and Sustainability",
    "Skill-based Talent Management",
    "HR Transformation",
    "Change Management"
];

const peopleStrategy = [
    "Employee Branding",
    "Digital Strategy",
    "People Risks & Business Resilience",
    "HR Transformation"
];

const learningDev = [
    "Skill Bank",
    "Job Architecture",
    "Skill Management",
    "HR Transformation",
    "Workday Services",
    "Workforce & Org Transformation",
    "Placement / Recruitment / Career Planning"
];

const Service5 = () => {
    return (
        <section className="max-w-6xl mx-auto px-6 py-16 space-y-20">
            {/* Title & Description */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
            >
                <h1 className="text-4xl font-extrabold text-indigo-800 mb-4">
                    Human Capital – 4A @C
                </h1>
                <p className="text-gray-700 text-lg max-w-2xl mx-auto">
                    People are the foundation of transformation. Our 4A model — Acquire, Adopt, Award, Assist — strengthens human capital for real impact.
                </p>
            </motion.div>

            {/* 4A Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {coreFocus.map((item, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white shadow-lg rounded-lg p-6 border hover:border-indigo-300"
                    >
                        <div className="mb-4">{item.icon}</div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            {item.title}
                        </h3>
                        <p className="text-gray-600">{item.description}</p>
                    </motion.div>
                ))}
            </div>

            {/* Insights */}
            <div className="bg-indigo-50 p-10 rounded-lg shadow-inner">
                <h2 className="text-3xl font-bold text-indigo-700 text-center mb-8">
                    Insights
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-indigo-800 font-medium">
                    {insights.map((item, idx) => (
                        <motion.li
                            key={idx}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white p-4 rounded shadow hover:bg-indigo-100 transition cursor-default"
                        >
                            {item}
                        </motion.li>
                    ))}
                </ul>
            </div>

            {/* People Strategy */}
            <div className="bg-white p-10 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-indigo-700 mb-6">People Strategy</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-indigo-900">
                    {peopleStrategy.map((item, idx) => (
                        <li key={idx} className="bg-indigo-50 p-4 rounded shadow hover:bg-indigo-100">
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Learning & Development */}
            <div className="bg-white p-10 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-indigo-700 mb-6">Learning & Development</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-indigo-900">
                    {learningDev.map((item, idx) => (
                        <li key={idx} className="bg-indigo-50 p-4 rounded shadow hover:bg-indigo-100">
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Service5;
