import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Navbar() {
    return (
        <div className="navbar bg-base-100 shadow">
            {/* Left Side: Logo + Mobile Dropdown */}
            <div className="navbar-start">
                {/* Mobile Dropdown Button */}
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
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
                        <li><Link to="/">Home</Link></li>

                        <li>
                            <details>
                                <summary>About</summary>
                                <ul className="p-2">
                                    <li><Link to="/about/team">Team</Link></li>
                                    <li><Link to="/about/approach">Approach</Link></li>
                                    <li><Link to="/about/affiliates">Affiliates</Link></li>
                                </ul>
                            </details>
                        </li>

                        <li>
                            <details>
                                <summary>Work</summary>
                                <ul className="p-2">
                                    <li><Link to="/work">Learning</Link></li>
                                </ul>
                            </details>
                        </li>

                        <li>
                            <details>
                                <summary>Services</summary>
                                <ul className="p-2">
                                    <li><Link to="#">Digital Transformation</Link></li>
                                    <li><Link to="#">Project Management</Link></li>
                                    <li><Link to="#">Brand Management</Link></li>
                                    <li><Link to="#">Strategy</Link></li>
                                    <li><Link to="#">Human Capital</Link></li>
                                </ul>
                            </details>
                        </li>

                        <li><Link to="#">Career</Link></li>
                        <li><Link to="#">Pro-Bono</Link></li>

                        <li>
                            <details>
                                <summary>Contact</summary>
                                <ul className="p-2">
                                    <li><Link to="#">Send Info</Link></li>
                                    <li><Link to="#">Ask for Consultation</Link></li>
                                </ul>
                            </details>
                        </li>

                        <li>
                            <details>
                                <summary>Resources</summary>
                                <ul className="p-2">
                                    <li><Link to="#">Data</Link></li>
                                    <li><Link to="#">C-Suite</Link></li>
                                    <li><Link to="#">Leadership</Link></li>
                                    <li><Link to="#">Brand Insights</Link></li>
                                    <li><Link to="#">Project Resources</Link></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>

                {/* Logo */}
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    <img
                        src={logo}
                        alt="ADE IT Logo"
                        className="h-8 w-auto sm:h-10 md:h-12"
                    />
                </Link>
            </div>

            {/* Desktop Menu */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/">Home</Link></li>

                    <li>
                        <details>
                            <summary>About</summary>
                            <ul className="p-2 bg-base-100 rounded-box w-52">
                                <li><Link to="/about/team">Team</Link></li>
                                <li><Link to="/about/approach">Approach</Link></li>
                                <li><Link to="/about/affiliates">Affiliates</Link></li>
                            </ul>
                        </details>
                    </li>

                    <li>
                        <details>
                            <summary>Work</summary>
                            <ul className="p-2 bg-base-100 rounded-box w-52">
                                <li><Link to="/work">Learning</Link></li>
                            </ul>
                        </details>
                    </li>

                    <li>
                        <details>
                            <summary>Services</summary>
                            <ul className="p-2 bg-base-100 rounded-box w-52">
                                <li><Link to="#">Digital Transformation</Link></li>
                                <li><Link to="#">Project Management</Link></li>
                                <li><Link to="#">Brand Management</Link></li>
                                <li><Link to="#">Strategy</Link></li>
                                <li><Link to="#">Human Capital</Link></li>
                            </ul>
                        </details>
                    </li>

                    <li><Link to="#">Career</Link></li>
                    <li><Link to="#">Pro-Bono</Link></li>

                    <li>
                        <details>
                            <summary>Contact</summary>
                            <ul className="p-2 bg-base-100 rounded-box w-52">
                                <li><Link to="#">Send Info</Link></li>
                                <li><Link to="#">Ask for Consultation</Link></li>
                            </ul>
                        </details>
                    </li>

                    <li>
                        <details>
                            <summary>Resources</summary>
                            <ul className="p-2 bg-base-100 rounded-box w-52">
                                <li><Link to="#">Data</Link></li>
                                <li><Link to="#">C-Suite</Link></li>
                                <li><Link to="#">Leadership</Link></li>
                                <li><Link to="#">Brand Insights</Link></li>
                                <li><Link to="#">Project Resources</Link></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>

            {/* Language Toggle */}
            <div className="navbar-end">
                <button className="btn btn-sm btn-outline">EN | FR</button>
            </div>
        </div>
    );
}
