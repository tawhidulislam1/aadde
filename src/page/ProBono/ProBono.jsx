import React from "react";
import { Link } from "react-router-dom";

const ProBono = () => {
    return (
        <section className="max-w-6xl mx-auto px-6 py-16 space-y-16">
            {/* Page Title */}
            <div className="text-center">
                <h1 className="text-4xl font-bold text-emerald-700 mb-4">Pro-Bono Services</h1>
                <p className="text-gray-700 max-w-2xl mx-auto">
                    At ADE, we believe in giving back. Our Pro-Bono initiatives help non-profits, early-stage social startups, and educational institutions with free or discounted digital solutions.
                </p>
            </div>

            {/* How it Works */}
            <div>
                <h2 className="text-2xl font-semibold text-emerald-800 mb-6 text-center">How It Works</h2>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    {[
                        {
                            title: "Apply",
                            desc: "Submit your organization’s profile and project needs via our Pro-Bono form.",
                        },
                        {
                            title: "Review",
                            desc: "Our team reviews your application and schedules an introductory call.",
                        },
                        {
                            title: "Support",
                            desc: "If approved, we provide full or partial service support — absolutely free.",
                        },
                    ].map(({ title, desc }, idx) => (
                        <div key={idx} className="p-6 bg-white rounded-lg shadow hover:shadow-md transition">
                            <h3 className="text-xl font-bold text-emerald-700 mb-2">{title}</h3>
                            <p className="text-gray-600">{desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Who is Eligible */}
            <div className="bg-emerald-50 p-8 rounded-lg shadow">
                <h2 className="text-2xl font-semibold text-emerald-800 mb-4 text-center">Who Can Apply?</h2>
                <ul className="list-disc list-inside text-gray-700 max-w-2xl mx-auto space-y-2">
                    <li>Registered non-profit organizations</li>
                    <li>Student-led tech or education initiatives</li>
                    <li>Startups working on social impact ideas</li>
                    <li>Organizations with limited funding but high potential impact</li>
                </ul>
            </div>

            {/* Call to Action */}
            <div className="text-center">
                <h3 className="text-2xl font-semibold text-emerald-700 mb-2">Need Support?</h3>
                <p className="text-gray-700 mb-4">
                    We’d love to hear about your project. Apply now to get Pro-Bono assistance.
                </p>
                <Link
                    to="#"
                    className="inline-block px-6 py-3 bg-emerald-600 text-white rounded-full hover:bg-emerald-700"
                >
                    Apply for Pro-Bono
                </Link>
            </div>
        </section>
    );
};

export default ProBono;
