import {
    FiMap,
    FiRefreshCw,
    FiTarget,
    FiBriefcase,
    FiLayers,
} from "react-icons/fi";

const strategyItems = [
  {
    title: "Corporate Strategy",
    icon: <FiMap className="w-14 h-14 text-indigo-600" />,
  },
  {
    title: "Transformation",
    icon: <FiRefreshCw className="w-14 h-14 text-green-600" />,
  },
  {
    title: "Market Entry GoTM",
    icon: <FiTarget className="w-14 h-14 text-red-500" />,
  },
  {
    title: "Merger and Acquisitions",
    icon: <FiBriefcase className="w-14 h-14 text-blue-700" />,
  },
  {
    title: "Organizational Strategy",
    icon: <FiLayers className="w-14 h-14 text-gray-800" />,
  },
  {
    title: "Sustainability Strategy",
    icon: <div className="text-4xl font-bold text-blue-500">a</div>,
  },
  {
    title: "Operational Strategy",
    icon: <div className="text-4xl font-bold text-red-500">e</div>,
  },
  {
    title: "Digital Strategy",
    icon: <div className="text-4xl font-bold text-green-600">d</div>,
  },
];
const strategyTools = [
    "Business Strategy",
    "Customer Experience / Journey Mapping",
    "Data Strategies",
    "Pricing Strategies",
    "Channel Strategies",
    "Product Strategies & Process Architecture",
    "Business Architecture",
    "Regional Planning",
    "Strategic Action Planning",
    "Strategic Action Implementation",
    "Research – Data, Information and Report",
    "Best Practices",
    "Environmental Scans",
    "Market Intelligence",
    "Competitor Intelligence",
    "Jurisdictional Scanning",
    "Due Diligence",
];

const Service4 = () => {
    return (
        <section className="max-w-6xl mx-auto px-6 py-16 space-y-16">
            {/* Title */}
            <h2 className="text-2xl font-semibold text-sky-600 mb-10 text-center">
                Strategy Consulting: what we do
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 text-center">
                {strategyItems.map((item, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col items-center gap-3 p-4 hover:scale-105 transition-transform"
                    >
                        <div className="p-6 bg-indigo-50 rounded-full flex items-center justify-center">
                            {item.icon}
                        </div>
                        <div className="text-sm font-medium text-gray-800">{item.title}</div>
                    </div>
                ))}
            </div>


            {/* Strategy Philosophy Section */}
            <div className="bg-indigo-50 p-8 rounded-lg shadow-inner space-y-6">
                <h3 className="text-2xl font-bold text-indigo-800">Strategic Philosophy</h3>
                <p className="text-gray-700 leading-relaxed">
                    Strategy that creates value and opportunities for everyone is at the core of what we do. Our
                    approach enables virtuous cycles of loyalty, trust, increased sales, and sustainable long-term
                    profit—going far beyond cost reduction alone.
                </p>
                <p className="text-gray-700 leading-relaxed">
                    We focus on driving revenue to levels that support not just operational costs but strategic
                    growth. Our popular sales strategies are tailored to each client’s unique capabilities and
                    market needs—recommending only what is achievable and client-centric.
                </p>
                <p className="text-gray-700 leading-relaxed">
                    ESG (Environment, Sustainability, Governance) is a core lens, and we recognize its varying
                    priorities between Asian and North American markets. While principles may overlap, we adapt
                    based on region-specific demands.
                </p>
            </div>

            {/* Tools and Frameworks */}
            <div className="bg-green-50 p-8 rounded-lg shadow-inner">
                <h3 className="text-2xl font-bold text-green-900 mb-4">
                    Strategy Tools and Services (45+)
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-green-800 list-disc list-inside font-medium">
                    {strategyTools.map((tool, idx) => (
                        <li key={idx} className="hover:text-green-600 cursor-default">
                            {tool}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Service4;
