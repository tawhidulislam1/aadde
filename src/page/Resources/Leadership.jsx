
import { FiCompass, FiUsers, FiTrendingUp, FiHeart } from "react-icons/fi";

const Leadership = () => {
    return (
        <section className="max-w-6xl mx-auto px-6 py-16 mt-10">
            <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">
                Resources – Leadership
            </h1>

            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
                Leadership is not about a title or a position. It’s about influence,
                integrity, and impact. Great leaders empower, guide, and grow their
                teams and organizations.
            </p>

            {/* Leadership Traits */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="p-6 bg-blue-50 rounded-lg shadow hover:shadow-md transition">
                    <FiCompass className="text-3xl text-blue-600 mb-4" />
                    <h3 className="text-xl font-semibold text-gray-800">Vision</h3>
                    <p className="text-gray-700">
                        True leaders provide direction with a clear and compelling vision of
                        the future.
                    </p>
                </div>

                <div className="p-6 bg-blue-50 rounded-lg shadow hover:shadow-md transition">
                    <FiUsers className="text-3xl text-blue-600 mb-4" />
                    <h3 className="text-xl font-semibold text-gray-800">Collaboration</h3>
                    <p className="text-gray-700">
                        Leadership thrives through teamwork, inclusivity, and shared goals.
                    </p>
                </div>

                <div className="p-6 bg-blue-50 rounded-lg shadow hover:shadow-md transition">
                    <FiTrendingUp className="text-3xl text-blue-600 mb-4" />
                    <h3 className="text-xl font-semibold text-gray-800">Growth</h3>
                    <p className="text-gray-700">
                        Empowering others to grow is one of the core roles of a great
                        leader.
                    </p>
                </div>

                <div className="p-6 bg-blue-50 rounded-lg shadow hover:shadow-md transition">
                    <FiHeart className="text-3xl text-blue-600 mb-4" />
                    <h3 className="text-xl font-semibold text-gray-800">Empathy</h3>
                    <p className="text-gray-700">
                        Understanding people, emotions, and contexts is key to ethical
                        leadership.
                    </p>
                </div>
            </div>

            {/* Inspirational Quote */}
            <div className="mt-16 text-center max-w-2xl mx-auto">
                <blockquote className="italic text-lg text-gray-700 border-l-4 border-blue-600 pl-4">
                    "Leadership is not about being in charge. It is about taking care of
                    those in your charge." – Simon Sinek
                </blockquote>
            </div>
        </section>
    );
};

export default Leadership;
