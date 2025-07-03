import React from 'react';

const Service2 = () => {
    return (
        <div>
            <section className="max-w-6xl mx-auto px-6 py-16">
                <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
                    Project Management
                </h1>

                <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
                    As a consulting services with project management expertise combined with PMI membership and certification, our proven ability to deliver business priorities ranging from organizational process improvements to the implementing project management and strategy execution services to assist organizations and their people perform to maximum potential is why ADE is awarded the project management assignment.
                </p>

                <h2 className="text-2xl font-semibold text-green-600 mb-8 text-left">What we do:</h2>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {[
                        {
                            icon: '🛠️',
                            title: 'Project Feasibility Study',
                        },
                        {
                            icon: '⚠️',
                            title: 'Project Risk Management Study',
                        },
                        {
                            icon: '📊',
                            title: 'Project Finance',
                        },
                        {
                            icon: '👨‍💼',
                            title: 'We can set-up PMO and Provide relevant PMO services such as framework development. PMO maturity assessment and interate Project Management Office with business.',
                        },
                        {
                            icon: '🧠',
                            title: 'Project Resource Management, Staffing, Organization specific PM training, and Project Plan. And Prepare for Organization for change. Project Execution assistance.',
                        },
                        {
                            icon: '📋',
                            title: 'Project Reporting, Portfolio, Develop Requirements / RFP,',
                        },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="bg-indigo-50 text-indigo-800 p-6 rounded-xl shadow hover:shadow-md transition"
                        >
                            <div className="text-3xl mb-4">{item.icon}</div>
                            <p className="text-base">{item.title}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 bg-indigo-50 text-indigo-800 p-6 rounded-xl shadow-md">
                    <p className="mb-2">And</p>
                    <p className="mb-4">
                        Implement <span className="text-green-600 underline">Agile Approaches</span> and Methodology development.
                    </p>

                    <h3 className="font-semibold text-lg mb-2">Project Assessments and Diagnostics:</h3>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Project and Program health checkup and Audits</li>
                        <li>Strategic Initiatives Prioritization</li>
                        <li>Project diagnostic assessments and recommendations.</li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default Service2;
