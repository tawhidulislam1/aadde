
import { FiBriefcase, FiClipboard } from "react-icons/fi";
import { featuresData } from "../../assets/Data/featuresData";
import Card from "../Card";


const Features = () => {
    return (
        <section>
            <div id="features" className="space-y-12 mb-12">
                <div className="mx-auto container px-4">
                    <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
                        Our services
                    </h2>
                    <div className="container flex flex-col mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
                        <div className="flex flex-col space-y-12 md:w-1/2">
                            <div className="flex flex-wrap gap-8 flex-col md:flex-row">
                                {featuresData.map((item, idx) => {
                                    return (
                                        <div key={idx} className="md:w-2/5 transform transition-transform duration-300 ease-in-out hover:-translate-y-3 h-72">
                                            <Card {...item} text={item.title} key={item.id} />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="flex flex-col space-y-8 md:w-1/2">
                            {featuresData.map(({ id, description, title }) => {
                                return (
                                    <div key={id} className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                                        {/* Heading */}
                                        <div className="rounded-l-full bg-brightYellowSupLight md:bg-transparent">
                                            <div className="flex items-center space-x-2">

                                                <h3 className=" font-bold md:mb-4 md:hidden text-indigo-900 text-2xl">
                                                    {title}
                                                </h3>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="hidden mb-4 text-lg font-bold md:block text-indigo-900">
                                                {title}
                                            </h3>
                                            <p className="text-darkGrayishBlue">{description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                    </div>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-8 border-b p-10 bg-indigo-50 rounded my-4  max-w-6xl mx-auto">
                <div className="flex-shrink-0 p-4 rounded-full ">
                    <FiClipboard className="text-blue-700 w-14 h-14" />
                </div>
                <div>
                    <h2 className="text-3xl font-semibold text-indigo-800 mb-4">Organization Design</h2>
                    <p className="text-lg text-gray-700 whitespace-pre-line leading-relaxed">
                        Organization design is key to building a sustainable and profitable business. We aim to create a robust organization, but structure is critical—and not always easy to get right.

                        Processes heavily depend on how the organization is structured. We study job functions in detail—from start to finish—to determine the ideal structure for each unit that contributes to the complete system.

                        Whether it's a one-person business coordinating with vendors or a 1,000-person enterprise running like a symphony, structure matters.

                        Human capital is the prime asset—unlike machines, AI, or technology. That’s why we design organizations using a balanced combination of people, processes, and technology to deliver optimal operational results.
                    </p>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 border-b p-10 bg-indigo-50 rounded-xl my-4 max-w-6xl mx-auto">
                <div className="flex-shrink-0 p-4 rounded-full ">
                    <FiBriefcase className="text-indigo-700 w-14 h-14" />
                </div>
                <div>
                    <h2 className="text-3xl font-semibold text-indigo-800 mb-4">Career Planning</h2>
                    <p className="text-lg text-gray-700 whitespace-pre-line leading-relaxed">
                        Customized one to one service for making long term plan. Leadership and Governance Coaching and Performance Coaching
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Features;