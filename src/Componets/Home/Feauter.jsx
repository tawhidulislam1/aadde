import React from "react";
import { featuresData } from "../../assets/Data/featuresData";
import Card from "../Card";


const Features = () => {
    return (
        <section id="features" className="space-y-12 mb-12">
            <div className="mx-auto container px-4">
                <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
                    Our services
                </h2>
                <div className="container flex flex-col mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
                    <div className="flex flex-col space-y-12 md:w-1/2">
                        <div className="flex flex-wrap gap-8 flex-col md:flex-row">
                            {featuresData.map((item) => {
                                return (
                                    <div className="md:w-2/5 transform transition-transform duration-300 ease-in-out hover:-translate-y-3 h-72">
                                        <Card {...item} text={item.title} key={item.id} />
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="flex flex-col space-y-8 md:w-1/2">
                        {featuresData.map(({ id, description, title }) => {
                            return (
                                <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                                    {/* Heading */}
                                    <div className="rounded-l-full bg-brightYellowSupLight md:bg-transparent">
                                        <div className="flex items-center space-x-2">
                                            <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightYellow">
                                                {id}
                                            </div>
                                            <h3 className="text-base font-bold md:mb-4 md:hidden">
                                                {title}
                                            </h3>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="hidden mb-4 text-lg font-bold md:block">
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
        </section>
    );
};

export default Features;