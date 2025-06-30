
import { Link } from "react-router-dom";

const jobOpenings = [
  {
    title: "Frontend Developer",
    location: "Remote | Full-Time",
    desc: "Looking for a skilled React developer with strong UI/UX sense and experience with Tailwind CSS. Must be team-oriented.",
  },
  {
    title: "UI/UX Designer",
    location: "Dhaka Office | Contract",
    desc: "Join our team to create clean, intuitive interfaces using Figma and design systems.",
  },
  {
    title: "Project Manager",
    location: "Remote | Full-Time",
    desc: "Coordinate projects with cross-functional teams. Requires experience with Agile tools and clear communication.",
  },
];

const Career = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 space-y-16">
      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-indigo-800 mb-4">Join Our Team</h1>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Be part of a passionate and innovative tech team. Help us build impactful digital solutions for tomorrow.
        </p>
        <Link
          to="#openings"
          className="inline-block mt-6 px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700"
        >
          View Open Positions
        </Link>
      </div>

      {/* Open Roles */}
      <div id="openings">
        <h2 className="text-3xl font-semibold text-center text-indigo-700 mb-10">
          Current Job Openings
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {jobOpenings.map((job, idx) => (
            <div key={idx} className="p-6 border rounded-lg shadow bg-white">
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{job.title}</h3>
              <p className="text-sm text-gray-500 mb-3">{job.location}</p>
              <p className="text-gray-700 mb-4">{job.desc}</p>
              <Link
                to="#"
                className="text-indigo-600 font-medium hover:underline"
              >
                Apply Now
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-indigo-50 p-8 rounded-lg shadow text-center">
        <h3 className="text-2xl font-semibold text-indigo-800 mb-2">
          Can’t find your position?
        </h3>
        <p className="text-gray-700 mb-4">
          We're always interested in great talent. Send your CV and tell us how you'd like to contribute.
        </p>
        <Link
          to="#"
          className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700"
        >
          Send Resume
        </Link>
      </div>
    </section>
  );
};

export default Career;
