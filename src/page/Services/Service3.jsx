import {
    FiLayers,
    FiDollarSign,
    FiMap,
    FiBook,
    FiClipboard,
    FiSmile,
    FiZap,
    FiRefreshCw,
    FiActivity,
    FiAward,
    FiPenTool,
    FiMonitor,
    FiBriefcase,
} from "react-icons/fi";

const brandService = [
    { title: "Brand Architecture", icon: <FiLayers className="w-12 h-12 text-blue-600" /> },
    { title: "Brand Valuation", icon: <FiDollarSign className="w-12 h-12 text-green-600" /> },
    { title: "Brand Strategy", icon: <FiMap className="w-12 h-12 text-indigo-600" /> },
    { title: "Brand Guideline", icon: <FiBook className="w-12 h-12 text-pink-500" /> },
    { title: "Brand Audit", icon: <FiClipboard className="w-12 h-12 text-yellow-500" /> },
    { title: "Brand Experience", icon: <FiSmile className="w-12 h-12 text-purple-500" /> },
    { title: "Brand Activation", icon: <FiZap className="w-12 h-12 text-red-500" /> },
    { title: "Brand Revive", icon: <FiRefreshCw className="w-12 h-12 text-emerald-500" /> },
    { title: "Brand Health Check-Up", icon: <FiActivity className="w-12 h-12 text-cyan-600" /> },
];

const Service3 = () => {
    return (
        <section className="max-w-6xl mx-auto px-6 py-20">
            {/* Header */}
            <h1 className="text-4xl font-bold text-blue-700 mb-10 text-center">
                Brand Management
            </h1>

            {/* Icon Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12 text-center mb-16">
                {brandService.map((service, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col items-center gap-4 p-6 hover:scale-105 transition-transform"
                    >
                        <div className="p-6 bg-indigo-50 rounded-full   flex items-center justify-center">
                            {service.icon}
                        </div>
                        <div className="text-base font-semibold  text-indigo-800">
                            {service.title}
                        </div>
                    </div>
                ))}
            </div>

            {/* Intro Text */}
            <div className="max-w-4xl mx-auto my-12 text-center">
                <p className="text-lg text-gray-700 leading-relaxed">
                    We believe brand as human. It is synonymous to brain, mind, heart, eye, and so on.
                    Managing brand is like managing business, relationship, and asset. Our focus is helping
                    client to optimize this asset better way. We love to work on many brands like personal,
                    corporate, and product. In product branding, different industry also focused such as pharma,
                    CPG (FMCG), financial, or life style brands.
                </p>
            </div>


            {/* Brand Architecture */}
            <div className="flex flex-col lg:flex-row gap-8 border-b p-10 bg-indigo-50 rounded my-4 ">
                <div className="flex-shrink-0 p-4 rounded-full  ">
                    <FiMap className="text-blue-500 w-14 h-14" />
                </div>
                <div>
                    <h2 className="text-3xl font-semibold  text-indigo-800 mb-4">Brand Architecture</h2>
                    <p className="text-lg text-gray-700 whitespace-pre-line leading-relaxed">
                        This is the personality of your brand that best fits with your business. You can leverage your brand’s personality to create memorable brand experience for your audience.

                        Businesses seek to optimize their brand portfolio or brand architecture. Our team of experts possesses an understanding of the intricate link between brand management and architecture, enabling us to visually and conceptually integrate diverse individual brands with their collective impact on the company’s overall identity.

                        This approach ensures that businesses can streamline their brand portfolio, enhance brand clarity, and unlock hidden potential for growth. With an organization, process, and local cultural insights, we meticulously assess customized solutions that resonate with diverse audiences.
                    </p>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-8 border-b p-10 bg-indigo-50 rounded my-4 ">
                <div className="flex-shrink-0 p-4 rounded-full  ">
                    <div className="text-4xl font-bold text-green-600">B</div>
                </div>
                <div>
                    <h2 className="text-3xl font-semibold  text-indigo-800 mb-4">Brand Valuation</h2>
                    <p className="text-lg text-gray-700 whitespace-pre-line leading-relaxed">
                        Brand is the asset of business and the value of a brand is important in today’s era. We assist organizations to assess value.

                        It is the process of analyzing the estimated worth of a brand, based on everything from financial performance to brand awareness, customer perception, and loyalty.

                        This is a financial value but also calculated by considering intangible assets too.
                    </p>
                </div>
            </div>

            {/* Brand Strategy Section */}
            <div className=" mb-20">
                <div className="flex flex-col lg:flex-row gap-8 border-b p-10 bg-indigo-50 rounded my-4 ">
                    <div className="flex-shrink-0 p-4 rounded-full  ">
                        <FiMap className="text-indigo-600 w-14 h-14" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-semibold  text-indigo-800 mb-4">Brand Strategy</h2>
                        <div className="text-lg text-gray-700 whitespace-pre-line leading-relaxed">
                            Brand strategy is important to build the brand.

                            <p className="text-lg text-gray-700 font-semibold mb-4">
                                Different types of brand strategies are:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
                                <li>Multi-Product Branding</li>
                                <li>Private-label Branding</li>
                                <li>House of Brand or Branded House</li>
                                <li>Brand Extension</li>
                            </ul>

                            <div className="mt-2 mb-2">
                                <h3 className="text-lg text-gray-700 font-semibold mb-4">
                                    The 9 Brand Strategy Elements
                                </h3>
                                <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
                                    <li>Brand Purpose</li>
                                    <li>Private Vision</li>
                                    <li>Brand Values</li>
                                    <li>Brand Voice</li>
                                    <li>Brand Personality</li>
                                    <li>Brand Tagline</li>
                                    <li>Audience</li>
                                    <li>Market Analysis</li>
                                    <li>Brand Awareness Goals</li>
                                </ul>
                            </div>

                            A clear understanding of brand strategy is one of the most important strategic decisions for a business.

                            A new business strategy serves as the compass guiding an organization towards its objectives, but its success hinges on the brand’s ability to embody and communicate this transformation effectively.

                            On the flipside, brand experiences can only be truly meaningful, propel the business to new heights, and enable growth outside of a business’ original category, if they are deeply rooted in a strategic foundation that is in sync with wider business decisions.

                            A brand is a representative of the company’s values. When a business embarks on a new strategy—whether it’s a pivot towards sustainability, digital innovation, or market expansion—the brand must evolve to mirror these changes. This alignment is indispensable for success.

                            A cohesive brand strategy reinforces the organization’s commitment to its stakeholders, fosters trust, and anchors it within the hearts and minds of consumers. In a rapidly evolving marketplace, a brand that remains static risks becoming irrelevant. To thrive, brands must adapt and evolve in sync with their strategic trajectory, ensuring a harmonious journey towards enduring success.
                        </div>
                    </div>
                </div>

                {/* Brand Manual Section */}
                <div className="flex flex-col lg:flex-row gap-8 border-b p-10 bg-indigo-50 rounded my-4">
                    <div className="flex-shrink-0 p-4 rounded-full  ">
                        <FiPenTool className="text-pink-500 w-14 h-14" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-semibold  text-indigo-800 mb-4">Brand Manual / Guideline</h2>
                        <div className="text-lg text-gray-700 whitespace-pre-line leading-relaxed">
                            Brand manual is required for standard brand management practices. Without brand manual, consistency is lost and brand building becomes a hard task.

                            What we do:

                            <div className="my-4">
                                <h3 className="text-2xl font-semibold  text-indigo-800 mb-4">
                                    Brand Guidelines Include the Following Brand Elements:
                                </h3>
                                <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
                                    <li>Audience personas (primary)</li>
                                    <li>Competitor Mapping</li>
                                    <li>Brand Positioning</li>
                                    <li>Brand Story</li>
                                    <li>Brand Values</li>
                                    <li>Brand Mission</li>
                                    <li>Brand Touchpoints</li>
                                    <li>Brand Messaging</li>
                                    <li>Tone of Voice</li>
                                    <li>And finally, your Brand Identity (Visual and Verbal)</li>
                                </ul>
                            </div>

                            This is the document of a brand—from start to finish.

                            <div className="my-8">
                                <h3 className="text-2xl font-semibold  text-indigo-800 mb-4">
                                    Why You Need a Brand Guideline:
                                </h3>
                                <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
                                    <li>Consistency and recognition</li>
                                    <li>Professionalism and trust</li>
                                    <li>Efficient collaboration</li>
                                    <li>Effective marketing</li>
                                    <li>Clear differentiation</li>
                                </ul>
                            </div>


                            A brand guideline is an essential tool to manage and optimize the brand.
                        </div>
                    </div>
                </div>
            </div>
            {/* Brand Audit */}
            <div className="flex flex-col lg:flex-row gap-8 border-b p-10 bg-indigo-50 rounded my-4 ">
                <div className="flex-shrink-0 p-4  rounded-full  ">
                    <FiClipboard className="text-yellow-500 w-14 h-14" />
                </div>
                <div>
                    <h2 className="text-3xl font-semibold  text-indigo-800 mb-4">Brand Audit</h2>
                    <div className="text-lg text-gray-700 whitespace-pre-line leading-relaxed">
                        A brand audit is an analytical approach to understand how a brand is performing in the market compared to its stated goals, and against the competition to evaluate how that performance positions the brand in the market.

                        A brand audit helps us understand the brand’s strength compared to the market and its competitors. We recommend that every brand audit covers four essential areas:

                        <div className="mt-8">
                            <h3 className="text-2xl font-semibold  text-indigo-800 mb-4">
                                Brand Audit Covers:
                            </h3>
                            <ul className="list-decimal list-inside space-y-4 text-lg text-gray-700">
                                <li>
                                    <span className="font-medium  text-indigo-800">Internal Branding:</span>
                                    <ul className="list-disc list-inside ml-6 space-y-1">
                                        <li>Core values</li>
                                        <li>Company infrastructure (HR, policies)</li>
                                        <li>Company culture and mission</li>
                                    </ul>
                                </li>

                                <li>
                                    <span className="font-medium  text-indigo-800">Brand Standing</span>
                                </li>

                                <li>
                                    <span className="font-medium  text-indigo-800">External Branding:</span>
                                    <ul className="list-disc list-inside ml-6 space-y-1">
                                        <li>Logo</li>
                                        <li>Visual assets</li>
                                        <li>Brand messaging</li>
                                    </ul>
                                </li>

                                <li>
                                    <span className="font-medium  text-indigo-800">Customer Experience:</span>
                                    <ul className="list-disc list-inside ml-6 space-y-1">
                                        <li>Sales processes</li>
                                        <li>Customer support</li>
                                        <li>User experience</li>
                                    </ul>
                                </li>
                            </ul>

                            <div className="mt-6">
                                <h4 className="text-xl font-semibold text-gray-800 mb-2">This also includes:</h4>
                                <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
                                    <li>Knowing the brand’s customers</li>
                                    <li>
                                        Reviewing Marketing Tools:
                                        <ul className="list-[lower-alpha] list-inside ml-6 space-y-1">
                                            <li>Web Analytics</li>
                                            <li>Social Data</li>
                                            <li>Sales Performance</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>


                        - Competitor Mapping and activity review compared to objectives
                    </div>
                </div>
            </div>
            {/* Brand Health Check-Up */}
            <div className="flex flex-col lg:flex-row gap-8 border-b p-10 bg-indigo-50 rounded my-4 ">
                <div className="flex-shrink-0 p-4 rounded-full  ">
                    <FiActivity className="text-cyan-600 w-14 h-14" />
                </div>
                <div>
                    <h2 className="text-3xl font-semibold  text-indigo-800 mb-4">Brand Health Check-Up</h2>
                    <div className="text-lg text-gray-700 whitespace-pre-line leading-relaxed">
                        Brand health refers to how well a company or brand delivers on its promises to customers. The more delighted customers are with the product or service, the better the brand’s health — and the stronger your brand positioning in the market.

                        A healthy brand delivers consistent, positive, and polished experiences for customers, employees, and everyone in-between.

                        <div className="mt-8">
                            <h3 className="text-2xl font-semibold  text-indigo-800 mb-4">
                                To Evaluate Brand Health, We Focus On:
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
                                <li>Customer satisfaction and loyalty</li>
                                <li>Brand awareness and recognition</li>
                                <li>Brand equity and perception</li>
                                <li>Employee engagement and advocacy</li>
                                <li>Market share and business growth</li>
                            </ul>
                        </div>

                        Regular check-ups allow us to spot weaknesses, identify growth opportunities, and ensure your brand is aligned with evolving customer expectations and strategic goals.
                    </div>
                </div>
            </div>
            {/* Brand Experience */}
            <div className="flex flex-col lg:flex-row gap-8 border-b p-10 bg-indigo-50 rounded my-4 ">
                <div className="flex-shrink-0 p-4  rounded-full  ">
                    <FiMonitor className="text-indigo-500 w-14 h-14" />
                </div>
                <div>
                    <h2 className="text-3xl font-semibold  text-indigo-800 mb-4">Brand Experience</h2>
                    <p className="text-lg text-gray-700 whitespace-pre-line leading-relaxed">
                        Brand experience is what the brand encounters with customers—starting from the moment it enters their mind to when they use it.

                        There are multiple stages of customer touchpoints with a brand, and each point delivers an experience. These experiences must be consistent to ensure the brand remains memorable and stays long-term in the customer's mind.

                        A brand is a representative of the company’s values. When a business embarks on a new strategy—whether it’s a pivot towards sustainability, digital innovation, or market expansion—the brand must evolve to mirror these changes. This alignment is indispensable for success.

                        A cohesive brand strategy reinforces the organization’s commitment to its stakeholders, fosters trust, and anchors it within the hearts and minds of consumers.

                        In a rapidly evolving marketplace, a brand that remains static risks becoming irrelevant. To thrive, brands must adapt and evolve in sync with their strategic trajectory, ensuring a harmonious journey toward enduring success.
                    </p>
                </div>
            </div>
            {/* Brand Revive */}
            <div className="flex flex-col lg:flex-row gap-8 border-b p-10 bg-indigo-50 rounded my-4 ">
                <div className="flex-shrink-0 p-4  rounded-full  ">
                    <FiRefreshCw className="text-emerald-500 w-14 h-14" />
                </div>
                <div>
                    <h2 className="text-3xl font-semibold  text-indigo-800 mb-4">Brand Revive</h2>
                    <p className="text-lg text-gray-700 whitespace-pre-line leading-relaxed">
                        Brand is a representative of the company’s values. When a business embarks on a new strategy—
                        whether it’s a pivot towards sustainability, digital innovation, or market expansion—the brand must
                        evolve to mirror these changes. This alignment is indispensable for success.

                        A cohesive brand strategy reinforces the organization’s commitment to its stakeholders, fosters
                        trust, and anchors it within the hearts and minds of consumers.

                        In a rapidly evolving marketplace, a brand that remains static risks becoming irrelevant. To thrive,
                        brands must adapt and evolve in sync with their strategic trajectory, ensuring a harmonious journey
                        towards enduring success.
                    </p>
                </div>
            </div>
            {/* Brand Activation */}
            <div className="flex flex-col lg:flex-row gap-8 border-b p-10 bg-indigo-50 rounded my-4 ">
                <div className="flex-shrink-0 p-4  rounded-full  ">
                    <FiZap className="text-red-500 w-14 h-14" />
                </div>
                <div>
                    <h2 className="text-3xl font-semibold  text-indigo-800 mb-4">Brand Activation</h2>
                    <p className="text-lg text-gray-700 whitespace-pre-line leading-relaxed">
                        Brand is a representative of the company’s values. When a business embarks on a new strategy,
                        whether it’s a pivot towards sustainability, digital innovation, or market expansion, the brand must
                        evolve to mirror these changes. This alignment is indispensable for success.

                        A cohesive brand strategy reinforces the organization’s commitment to its stakeholders, fosters
                        trust, and anchors it within the hearts and minds of consumers. In a rapidly evolving marketplace, a
                        brand that remains static risks becoming irrelevant. To thrive, brands must adapt and evolve in sync
                        with their strategic trajectory, ensuring a harmonious journey towards enduring success.
                    </p>
                </div>
            </div>
            {/* Human Capital */}
            <div className="flex flex-col lg:flex-row gap-8 border-b p-10 bg-indigo-50 rounded my-4 ">
                <div className="flex-shrink-0 p-4 rounded-full  ">
                    <FiBriefcase className="text-gray-700 w-14 h-14" />
                </div>
                <div>
                    <h2 className="text-3xl font-semibold  text-indigo-800 mb-4">Human Capital</h2>
                    <p className="text-lg text-gray-700 whitespace-pre-line leading-relaxed">
                        Human-centric management focuses on people as the core asset for building and growing business. Business strategies, objectives, processes, and all elements revolve around humans and their roles.

                        Even today’s technology is deeply connected to human factors. Regardless of economic status, humans are an integral part of accelerating the economy.

                        This is especially true in G8 and developing economies, as well as the Asian market.
                    </p>
                </div>
            </div>

            
        </section>
    );
};

export default Service3;
