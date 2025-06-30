/* eslint-disable no-unused-vars */
import React from "react";
import { FiZap, FiSettings, FiTrendingUp } from "react-icons/fi";
import { motion } from "framer-motion";
import clsx from "clsx";

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

const stepsData = [
    {
        title: "Initiation",
        icon: <FiZap size={28} className="text-blue-600" />,
        description:
            "First step to launch digital transformation is initiate the process. Conceive the idea and ready to change the game. Three core activities are Mind Set, Due Diligence (Check Up), and Start.",
    },
    {
        title: "Implementation",
        icon: <FiSettings size={28} className="text-blue-600" />,
        description:
            "Second step is to implement transformation. First task is to automate then training and process will follow. Try with a small unit and slowly integrate the total business.",
    },
    {
        title: "Impact",
        icon: <FiTrendingUp size={28} className="text-blue-600" />,
        description:
            "Final step is to understand and apply impact. Impact may differ from initial objectives. Unit impacts vary but the overall organization benefits.",
    },
];

const elements = [
    "Value",
    "Pull",
    "Iterative",
    "Transparency",
    "Culture & Talent",
    "Process and Head Count",
    "Reinvest",
    "Volume",
    "Push",
    "Big Bang",
    "Silos",
    "Process",
    "Realization",
];

const learningPoints = [
    "Value",
    "Pull",
    "Iterative",
    "Transparency",
    "Culture & Talent",
    "Process and Head Count",
    "Reinvest",
    "Volume",
    "Push",
    "Big Bang",
    "Silos",
    "Process",
    "Realization",
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

            {/* Intro */}
            <motion.p
                className="text-center text-gray-700 max-w-3xl mx-auto text-lg"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                Mindset is the prime Leadership perspective of C-Suite. Process-driven:
                Step-by-step process for long-term (generation). Specific client focus
                solution depends on culture, industry, and more.
            </motion.p>

            {/* Steps */}
            <div className="grid md:grid-cols-3 gap-10">
                {stepsData.map(({ title, description, icon }, idx) => (
                    <motion.div
                        key={idx}
                        className="p-6 border rounded-lg shadow hover:shadow-lg bg-blue-50 cursor-default"
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.6, delay: idx * 0.2 }}
                    >
                        <div className="flex items-center gap-3 mb-3">
                            {icon}
                            <h3 className="text-2xl font-semibold text-blue-900">{title}</h3>
                        </div>
                        <p className="text-gray-700">{description}</p>
                    </motion.div>
                ))}
            </div>

            {/* Elements Grid */}
            <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6, delay: 0.8 }}
            >
                <h2 className="text-3xl font-semibold text-blue-700 mb-8 text-center">
                    Digital Transformation Elements
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {elements.map((el, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ scale: 1.1, backgroundColor: "#bfdbfe" }}
                            className={clsx(
                                "p-4 rounded-md bg-blue-100 text-center text-blue-800 font-medium shadow cursor-pointer select-none"
                            )}
                        >
                            {el}
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Learning Points */}
            <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6, delay: 1.2 }}
            >
                <h2 className="text-3xl font-semibold text-blue-700 mb-6 text-center">
                    Digital Transformation Our Learning
                </h2>
                <ul className="max-w-xl mx-auto list-disc list-inside space-y-2 text-gray-700">
                    {learningPoints.map((point, idx) => (
                        <li key={idx} className="hover:text-blue-600 cursor-default">
                            {point}
                        </li>
                    ))}
                </ul>
            </motion.div>
        </section>
    );
};

export default Service1;
