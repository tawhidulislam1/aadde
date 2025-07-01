
import { FiClipboard, FiUsers, FiActivity, FiCalendar, FiTool } from "react-icons/fi";

const ProjectResources = () => {
    return (
        <section className="max-w-6xl mx-auto px-6 py-16 mt-10">
            {/* Page Title */}
            <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">
                Project Resources
            </h1>

            {/* Description */}
            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
                Explore a curated list of tools, guides, and frameworks to manage your projects effectively and drive consistent success.
            </p>

            {/* Resource Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* 1 */}
                <div className="bg-blue-50 p-6 rounded-lg shadow text-center">
                    <FiClipboard className="text-3xl text-blue-600 mx-auto mb-3" />
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">Planning Templates</h3>
                    <p className="text-gray-700 text-sm">
                        Access downloadable templates for timelines, scope documents, and task lists.
                    </p>
                </div>

                {/* 2 */}
                <div className="bg-blue-50 p-6 rounded-lg shadow text-center">
                    <FiUsers className="text-3xl text-blue-600 mx-auto mb-3" />
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">Team Collaboration</h3>
                    <p className="text-gray-700 text-sm">
                        Learn how to enhance collaboration across teams using proven practices and tools.
                    </p>
                </div>

                {/* 3 */}
                <div className="bg-blue-50 p-6 rounded-lg shadow text-center">
                    <FiActivity className="text-3xl text-blue-600 mx-auto mb-3" />
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">Project Lifecycle</h3>
                    <p className="text-gray-700 text-sm">
                        Understand each phase of project management—from planning to delivery.
                    </p>
                </div>

                {/* 4 */}
                <div className="bg-blue-50 p-6 rounded-lg shadow text-center">
                    <FiCalendar className="text-3xl text-blue-600 mx-auto mb-3" />
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">Scheduling Tools</h3>
                    <p className="text-gray-700 text-sm">
                        Explore calendar planning, Kanban boards, and sprint timelines for agile execution.
                    </p>
                </div>

                {/* 5 */}
                <div className="bg-blue-50 p-6 rounded-lg shadow text-center">
                    <FiTool className="text-3xl text-blue-600 mx-auto mb-3" />
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">Tech Stack</h3>
                    <p className="text-gray-700 text-sm">
                        Recommended tools: Trello, Asana, Notion, GitHub Projects, Jira, and more.
                    </p>
                </div>
            </div>

            {/* Quote */}
            <div className="mt-16 text-center">
                <p className="text-gray-700 italic text-lg">
                    "Good project management is not just about tasks—it's about empowering people and ensuring progress."
                </p>
            </div>
        </section>
    );
};

export default ProjectResources;
