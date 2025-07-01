/* eslint-disable no-unused-vars */
import { FiUsers, FiBookOpen, FiCheckCircle } from "react-icons/fi";
import { motion } from "framer-motion";

const coreFocus = [
    {
        icon: <FiUsers className="text-indigo-600 w-10 h-10" />,
        title: "Talent Acquisition",
        description:
            "Identify, attract, and onboard top-tier talent that fits both your skill requirements and company culture.",
    },
    {
        icon: <FiBookOpen className="text-blue-500 w-10 h-10" />,
        title: "Learning & Development",
        description:
            "Foster a culture of continuous learning through skill-building programs, mentorship, and knowledge sharing.",
    },
    {
        icon: <FiCheckCircle className="text-green-600 w-10 h-10" />,
        title: "Performance & Retention",
        description:
            "Implement systems to evaluate, motivate, and retain high-performing individuals while maintaining team alignment.",
    },
];

const principles = [
    "Empowerment",
    "Diversity & Inclusion",
    "Workplace Flexibility",
    "Growth Mindset",
    "Recognition & Rewards",
    "Clear Communication",
    "Transparency",
    "Employee Wellness",
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
                    Human Capital
                </h1>
                <p className="text-gray-700 text-lg max-w-2xl mx-auto">
                    At the core of every successful organization is its people. We focus
                    on acquiring, developing, and retaining exceptional talent — while
                    nurturing a culture of collaboration, empowerment, and innovation.
                </p>
            </motion.div>

            {/* Focus Areas */}
            <div className="grid md:grid-cols-3 gap-8">
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

            {/* Principles Section */}
            <div className="bg-indigo-50 p-10 rounded-lg shadow-inner">
                <h2 className="text-3xl font-bold text-indigo-700 text-center mb-8">
                    Core Human Capital Principles
                </h2>
                <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center text-indigo-800 font-medium">
                    {principles.map((principle, idx) => (
                        <motion.li
                            key={idx}
                            whileHover={{ scale: 1.1 }}
                            className="bg-white p-4 rounded shadow hover:bg-indigo-100 transition cursor-default"
                        >
                            {principle}
                        </motion.li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Service5;