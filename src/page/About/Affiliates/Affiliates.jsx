const affiliates = [
    {
        id: 1,
        name: "TechPartner Inc.",
        website: "https://techpartner.example.com",
        description: "Innovative cloud solutions to scale your business.",
    },
    {
        id: 2,
        name: "Dev Solutions",
        website: "https://devsolutions.example.com",
        description: "Full-stack development and agile project management experts.",
    },
    {
        id: 3,
        name: "Design Pros",
        website: "https://designpros.example.com",
        description: "Creative design agency crafting stunning UI/UX experiences.",
    },
];

const Affiliates = () => {
    return (
        <section className="py-20 px-6 bg-gradient-to-b from-blue-50 to-white min-h-screen">
            <div className="max-w-6xl mx-auto text-center mb-16">
                <h1 className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
                    Our Affiliates
                </h1>
                <p className="text-gray-600 max-w-3xl mx-auto text-lg font-medium">
                    We collaborate with trusted partners who share our passion for innovation and quality.
                </p>
            </div>

            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 grid-cols-1">
                {affiliates.map(({ id, name, website, description }) => (
                    <a
                        key={id}
                        href={website}
                        target="_blank"
                        rel="noreferrer"
                        className="relative group bg-white rounded-xl p-6 shadow-lg border-4 border-transparent bg-gradient-to-br from-blue-600 to-purple-600
              hover:border-white transform hover:-translate-y-2 hover:shadow-2xl transition duration-500"
                        style={{ perspective: "1000px" }}
                    >
                        {/* Inner card for tilt effect */}
                        <div
                            className="bg-white rounded-lg p-6 h-full transform transition-transform duration-500 group-hover:rotate-y-6"
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            {/* Ribbon tag */}
                            <div className="absolute top-0 right-0 bg-purple-600 text-white px-3 py-1 rounded-bl-lg font-semibold text-sm tracking-wide">
                                Partner
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 mb-3">{name}</h3>
                            <p className="text-gray-700 mb-5">{description}</p>
                            <button
                                className="inline-block px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md font-semibold
                shadow-md hover:brightness-110 transition"
                            >
                                Visit Website
                            </button>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Affiliates;
