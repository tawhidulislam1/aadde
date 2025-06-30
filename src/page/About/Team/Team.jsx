
import { teamData } from "../../../assets/Data/teamData";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Team = () => {
    return (
        <section className="py-16 px-6 bg-white">
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Amazing Team</h1>
                <p className="text-gray-600 text-lg mb-4">
                    At Tech-Monks, we believe people are the backbone of innovation. Our diverse team of experts collaborates to create scalable, intuitive, and user-first digital products.
                </p>
                <blockquote className="italic text-blue-700 font-medium">
                    “Alone we can do so little; together we can do so much.” — Helen Keller
                </blockquote>
            </div>
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {teamData.map((member, index) => (
                    <div
                        key={index}
                        className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-xl transition duration-300 transform hover:-translate-y-1 text-center"
                    >
                        <img
                            src={member.image}
                            alt={member.name}
                            className="w-24 h-24 mx-auto rounded-full object-cover mb-4 border-4 border-blue-500 hover:scale-105 transition"
                        />
                        <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                        <span className="text-sm inline-block px-3 py-1 mt-1 bg-blue-100 text-blue-800 rounded-full">
                            {member.role}
                        </span>
                        <p className="text-sm mt-3 text-gray-600 italic">"{member.bio}"</p>

                        {/* Social Icons */}
                        <div className="flex justify-center gap-4 mt-4">
                            {member.linkedin && (
                                <a href={member.linkedin} target="_blank" rel="noreferrer">
                                    <FaLinkedin className="text-blue-700 text-xl hover:text-blue-900" />
                                </a>
                            )}
                            {member.github && (
                                <a href={member.github} target="_blank" rel="noreferrer">
                                    <FaGithub className="text-gray-700 text-xl hover:text-black" />
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Team;
