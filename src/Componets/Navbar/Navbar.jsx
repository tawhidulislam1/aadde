import logo from "../../assets/logo.png"

export default function Navbar() {
    return (
        <div className="navbar bg-base-100 shadow">
            {/* Left Side: Logo + Mobile Menu */}
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    {/* Mobile Menu */}
                    <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-64">
                        <li><a>Home</a></li>

                        <li className="dropdown dropdown-hover">
                            <a tabIndex={0}>About</a>
                            <ul className="menu dropdown-content bg-base-100 rounded-box p-2 shadow w-52">
                                <li><a>Team</a></li>
                                <li><a>Approach</a></li>
                                <li><a>Affiliates</a></li>
                            </ul>
                        </li>

                        <li className="dropdown dropdown-hover">
                            <a tabIndex={0}>Work</a>
                            <ul className="menu dropdown-content bg-base-100 rounded-box p-2 shadow w-52">
                                <li><a>Learning</a></li>
                            </ul>
                        </li>

                        <li className="dropdown dropdown-hover">
                            <a tabIndex={0}>Services</a>
                            <ul className="menu dropdown-content bg-base-100 rounded-box p-2 shadow w-52">
                                <li><a>Digital Transformation</a></li>
                                <li><a>Project Management</a></li>
                                <li><a>Brand Management</a></li>
                                <li><a>Strategy</a></li>
                                <li><a>Human Capital</a></li>
                            </ul>
                        </li>

                        <li><a>Career</a></li>
                        <li><a>Pro-Bono</a></li>

                        <li className="dropdown dropdown-hover">
                            <a tabIndex={0}>Contact</a>
                            <ul className="menu dropdown-content bg-base-100 rounded-box p-2 shadow w-52">
                                <li><a>Send Info</a></li>
                                <li><a>Ask for Consultation</a></li>
                            </ul>
                        </li>

                        <li className="dropdown dropdown-hover">
                            <a tabIndex={0}>Resources</a>
                            <ul className="menu dropdown-content bg-base-100 rounded-box p-2 shadow w-52">
                                <li><a>Data</a></li>
                                <li><a>C-Suite</a></li>
                                <li><a>Leadership</a></li>
                                <li><a>Brand Insights</a></li>
                                <li><a>Project Resources</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <a className="normal-case text-xl">
                    <img
                        src={logo}
                        alt="ADE IT Logo"
                        className="h-8 w-auto sm:h-10 md:h-12"
                    />
                </a>
            </div>

            {/* Desktop Menu */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>

                    <li className="dropdown dropdown-hover">
                        <a tabIndex={0}>About</a>
                        <ul className="menu dropdown-content bg-base-100 rounded-box p-2 shadow w-52">
                            <li><a>Team</a></li>
                            <li><a>Approach</a></li>
                            <li><a>Affiliates</a></li>
                        </ul>
                    </li>

                    <li className="dropdown dropdown-hover">
                        <a tabIndex={0}>Work</a>
                        <ul className="menu dropdown-content bg-base-100 rounded-box p-2 shadow w-52">
                            <li><a>Learning</a></li>
                        </ul>
                    </li>

                    <li className="dropdown dropdown-hover">
                        <a tabIndex={0}>Services</a>
                        <ul className="menu dropdown-content bg-base-100 rounded-box p-2 shadow w-52">
                            <li><a>Digital Transformation</a></li>
                            <li><a>Project Management</a></li>
                            <li><a>Brand Management</a></li>
                            <li><a>Strategy</a></li>
                            <li><a>Human Capital</a></li>
                        </ul>
                    </li>

                    <li><a>Career</a></li>
                    <li><a>Pro-Bono</a></li>

                    <li className="dropdown dropdown-hover">
                        <a tabIndex={0}>Contact</a>
                        <ul className="menu dropdown-content bg-base-100 rounded-box p-2 shadow w-52">
                            <li><a>Send Info</a></li>
                            <li><a>Ask for Consultation</a></li>
                        </ul>
                    </li>

                    <li className="dropdown dropdown-hover">
                        <a tabIndex={0}>Resources</a>
                        <ul className="menu dropdown-content bg-base-100 rounded-box p-2 shadow w-52">
                            <li><a>Data</a></li>
                            <li><a>C-Suite</a></li>
                            <li><a>Leadership</a></li>
                            <li><a>Brand Insights</a></li>
                            <li><a>Project Resources</a></li>
                        </ul>
                    </li>
                </ul>
            </div>

            {/* Language Button */}
            <div className="navbar-end">
                <button className="btn btn-sm btn-outline">EN | FR</button>
            </div>
        </div>
    );
}
