import React from 'react';

const Service2 = () => {
    return (
        <div>
            <section className="max-w-5xl mx-auto px-6 py-16 bg-white rounded shadow-md">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
                    Project Management
                </h1>

                <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
                    Effective project management ensures your team meets deadlines and delivers quality results.
                    It requires clear planning, strong communication, and flexibility.
                </p>

                <div className="grid gap-10 md:grid-cols-3">
                    <div className="border rounded p-6 shadow-sm hover:shadow-md transition">
                        <h2 className="text-xl font-semibold mb-3">Planning</h2>
                        <p className="text-gray-600">
                            Define project goals, scope, timeline, and allocate resources effectively to set a strong foundation.
                        </p>
                    </div>

                    <div className="border rounded p-6 shadow-sm hover:shadow-md transition">
                        <h2 className="text-xl font-semibold mb-3">Execution</h2>
                        <p className="text-gray-600">
                            Coordinate your team, track progress, manage risks, and communicate clearly throughout the project.
                        </p>
                    </div>

                    <div className="border rounded p-6 shadow-sm hover:shadow-md transition">
                        <h2 className="text-xl font-semibold mb-3">Closure</h2>
                        <p className="text-gray-600">
                            Finalize deliverables, gather feedback, and document lessons learned to improve future projects.
                        </p>
                    </div>
                </div>

                <div className="mt-16">
                    <h3 className="text-2xl font-semibold mb-6 text-center">Key Tools & Practices</h3>
                    <ul className="max-w-xl mx-auto grid grid-cols-2 gap-4 list-disc list-inside text-gray-700">
                        <li>Clear Communication</li>
                        <li>Defined Roles</li>
                        <li>Regular Progress Monitoring</li>
                        <li>Risk Management</li>
                        <li>Stakeholder Engagement</li>
                        <li>Adaptability & Flexibility</li>
                        <li>Documentation</li>
                        <li>Time & Budget Tracking</li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default Service2;