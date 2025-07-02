/* eslint-disable no-unused-vars */
import React from "react";
import { FiZap, FiSettings, FiTrendingUp, FiCheckCircle } from "react-icons/fi";
import { motion } from "framer-motion";
import clsx from "clsx";
import image from '../../assets/services.jpg';

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

const stepsData = [
    {
        title: "Initiation",
        icon: <FiZap size={28} className="text-yellow-500" />,
        description: `First step to launch digital transformation is initiate the process. Conceive the idea and ready to change in the game. Three core activities are here being Mind Set, Due Diligence (Check Up) and Start. Depending on culture of the organization it can start from any level but top down is better.`,
    },
    {
        title: "Implementation",
        icon: <FiSettings size={28} className="text-green-500" />,
        description: `Second step is to implement transformation. First task is to automate then training and process will follow. Executing these three actions will close to complete the transformation. It is better to try with a small unit and slowly integrate total business.`,
    },
    {
        title: "Impact",
        icon: <FiTrendingUp size={28} className="text-blue-500" />,
        description: `Final step of digital transformation is to understand and apply impact. Sometimes the impact may differ with object define at the beginning. Impact of a unit may not same for other unit and it will have better impact as an organization.`,
    },
];

const learnings = [
    {
        title: "Pull not Push",
        text: "Team must understand and accept transformation from their own necessity. It should feel like their growth, not just an organizational requirement.",
    },
    {
        title: "Culture over Process",
        text: "Digitization success depends more on culture, talent, and headcount—not just defined processes.",
    },
    {
        title: "Value over Volume",
        text: "Transformation should be value-driven. Focus on small, impactful units rather than large-scale volume.",
    },
    {
        title: "Iterative Approach",
        text: "Transformation isn’t a one-time launch. It’s better done step-by-step through an iterative process to achieve lasting results.",
    },
];

const digitalAreas = [
    "Digital Customer Experience",
    "Digital Operating Model Design",
    "Digital Business Design and Strategy",
    "Digital Growth Strategy",
    "Transformation Plan & Strategy",
];

const functionalTransformations = [
    "Marketing",
    "Sales and Channel",
    "Brand",
    "Operation",
    "Factory (Manufacturing)",
];

const items = [
    {
        icon: 'a',
        color: 'text-blue-600 border-blue-600',
        text: 'Infrastructure issue like internet speed, availability, company server, tools and machine.',
    },
    {
        icon: 'd',
        color: 'text-green-600 border-green-600',
        text: 'People ability and willing to change. Start from a department and best way to start with HR or other department who is ready to start.',
    },
    {
        icon: 'e',
        color: 'text-red-600 border-red-600',
        text: 'Workshop, motivational activity, and create better environment. Automation for easy way to operate, Patience like generation to adopt.',
    },
];

const Service1 = () => {
    return (
        <section className="max-w-6xl mx-auto px-6 py-16 space-y-20 bg-white rounded-lg shadow-lg">
            {/* Title */}
            <motion.h1
                className="text-4xl font-extrabold text-center text-blue-700 mb-6"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6 }}
            >
                Digital Transformation
            </motion.h1>

            {/* Introduction */}
            <motion.p
                className="text-center text-gray-700 max-w-3xl mx-auto text-lg"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                Mindset is the prime Leadership perspective of C-Suite. Process-driven: Step-by-step process for long-term (generation). Specific client focus solution depends on culture, industry, and more.
            </motion.p>

            {/* Steps */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-10">
                {stepsData.map(({ title, description, icon }, idx) => (
                    <motion.div
                        key={idx}
                        className="p-6 border-l-4 rounded-lg shadow hover:shadow-lg bg-blue-50 cursor-default"
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.6, delay: idx * 0.2 }}
                    >
                        <div className="flex items-center gap-3 mb-3">
                            {icon}
                            <h3 className="text-2xl font-semibold text-blue-900">{title}</h3>
                        </div>
                        <p className="text-gray-700 whitespace-pre-line">{description}</p>
                    </motion.div>
                ))}
            </div>

            {/* Our Learning Section */}
            <motion.section
                className="max-w-5xl mx-auto py-16 px-6 bg-white shadow-lg rounded-lg space-y-10"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6 }}
            >
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-blue-700 flex items-center justify-center gap-2">
                        <FiZap className="text-yellow-500" size={28} />
                        Our Learning
                    </h2>
                    <p className="text-gray-600 mt-2 text-lg">
                        Insights gained from real digital transformation journeys.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-8">
                    {learnings.map(({ title, text }, idx) => (
                        <motion.div
                            key={idx}
                            className="bg-blue-50 p-6 rounded-md shadow hover:shadow-md border-l-4 border-blue-500"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h4 className="text-xl font-semibold text-blue-800 mb-2">{title}</h4>
                            <p className="text-gray-700">{text}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Bangladesh Perspective */}
            <motion.div className="p-6 max-w-5xl mx-auto" variants={fadeInUp} initial="hidden" animate="visible">
                <h2 className="text-xl font-semibold text-blue-700 mb-4">Bangladesh Perspective</h2>
                <div className="space-y-4">
                    {items.map((item, idx) => (
                        <div key={idx} className="flex items-start border rounded-md p-4">
                            <div className={`text-4xl font-bold mr-4 ${item.color}`}>{item.icon}</div>
                            <p className="text-gray-800">{item.text}</p>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Triangle Approach */}
            <motion.div className="max-w-4xl mx-auto px-4 py-10" variants={fadeInUp} initial="hidden" animate="visible">
                <h2 className="text-2xl font-semibold text-blue-700 mb-8 text-center">
                    Connectivity through Website or Apps – Triangle Approach
                </h2>

                <div className="text-center">
                    <img src={image} alt="Triangle Connectivity" />
                </div>

                <div className="mt-10 text-sm text-gray-800 space-y-2 px-2">
                    <p>
                        Website is the core in the connectivity of consumer, supplier, and employee.
                        This is replacement of physical office location. This will facilitate as an alternative office for everybody.
                    </p>
                    <p>
                        Website can be the launching as one of the step of digitization.
                    </p>
                </div>
            </motion.div>

            {/* Digital Transformation Elements */}
            <motion.div className="max-w-7xl mx-auto px-4 py-10" variants={fadeInUp} initial="hidden" animate="visible">
                <h2 className="text-2xl font-semibold text-blue-800 mb-8 text-center">
                    Digital Transformation Elements
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-center text-sm">
                    <div className="space-y-2">
                        <div className="text-3xl">📊</div>
                        <h3 className="font-semibold text-red-600">Analytics</h3>
                        <p className="text-gray-800">Data <span className="text-blue-600">8</span></p>
                    </div>
                    <div className="space-y-2">
                        <div className="text-3xl">🙋</div>
                        <h3 className="font-semibold text-green-600">Customer Experience</h3>
                        <p className="text-gray-800">Customer Experience <span className="text-blue-600">6</span></p>
                    </div>
                    <div className="space-y-2">
                        <div className="text-3xl">⚙️</div>
                        <h3 className="font-semibold text-red-500">Process</h3>
                        <p className="text-gray-800">Organizational Process</p>
                        <p className="text-gray-800">Agility <span className="text-blue-600">5</span></p>
                    </div>
                    <div className="space-y-2">
                        <div className="text-3xl">🧑‍🤝‍🧑</div>
                        <h3 className="font-semibold text-orange-600">Organization</h3>
                        <p className="text-gray-800">Organizational Agility</p>
                        <p className="text-gray-800">People – <span className="text-blue-600">1</span></p>
                        <p className="text-gray-800">Culture – <span className="text-blue-600">3</span></p>
                    </div>
                    <div className="space-y-2">
                        <div className="text-3xl">👥</div>
                        <h3 className="font-semibold text-blue-600">Culture</h3>
                        <p className="text-gray-800">Workforce Enablement</p>
                        <p className="text-gray-800">Leadership – <span className="text-blue-600">2</span></p>
                        <p className="text-gray-800">Change Acceptance <span className="text-blue-600">4</span></p>
                    </div>
                    <div className="space-y-2">
                        <div className="text-3xl">🌐</div>
                        <h3 className="font-semibold text-red-600">Technology</h3>
                        <p className="text-gray-800">Digital Tech Integration</p>
                    </div>
                </div>

                <div className="mt-10 bg-green-600 text-white font-semibold py-2 px-4 text-center text-sm rounded-md">
                    7 T E C H N O L O G Y Interface
                </div>
            </motion.div>

            {/* Final Section */}
            <motion.section
                className="max-w-6xl mx-auto py-16 px-6 space-y-12 bg-white rounded-lg shadow-lg"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6 }}
            >
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-blue-700 mb-3">
                        Digital Transformation Also Includes
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Supporting areas that elevate business strategy and operations.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {digitalAreas.map((item, idx) => (
                        <motion.div
                            key={idx}
                            className="flex items-start gap-3 bg-blue-50 p-4 rounded-md shadow-sm border-l-4 border-blue-600"
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.3 }}
                        >
                            <FiCheckCircle size={24} className="text-blue-600 mt-1" />
                            <p className="text-blue-900 font-medium">{item}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center">
                    <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                        Functional Business Transformation
                    </h3>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                    {functionalTransformations.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-white border border-blue-200 rounded-lg text-center py-4 px-2 shadow hover:bg-blue-100 hover:text-blue-800 transition"
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </motion.section>
        </section>
    );
};

export default Service1;
