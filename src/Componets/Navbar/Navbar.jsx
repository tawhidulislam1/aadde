import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useState } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLinkClick = () => setMenuOpen(false);

    return (
        <div className="navbar bg-base-100 shadow-md fixed top-0 w-full z-50">
            {/* Navbar Start */}
            <div className="navbar-start">
                {/* Mobile Dropdown Button */}
                <div className="dropdown">
                    <label
                        tabIndex={0}
                        className="btn btn-ghost lg:hidden"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </label>

                    {/* Mobile Menu */}
                    {menuOpen && (
                        <ul className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-64">
                            <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
                            <li>
                                <details>
                                    <summary>About</summary>
                                    <ul className="p-2">
                                        <li><Link to="/about/team" onClick={handleLinkClick}>Team</Link></li>
                                        <li><Link to="/about/approach" onClick={handleLinkClick}>Approach</Link></li>
                                        <li><Link to="/about/affiliates" onClick={handleLinkClick}>Affiliates</Link></li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <details>
                                    <summary>Work</summary>
                                    <ul className="p-2">
                                        <li><Link to="/work" onClick={handleLinkClick}>Learning</Link></li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <details>
                                    <summary>Services</summary>
                                    <ul className="p-2">
                                        <li><Link to="/Service1" onClick={handleLinkClick}>Digital Transformation</Link></li>
                                        <li><Link to="/Service2" onClick={handleLinkClick}>Project Management</Link></li>
                                        <li><Link to="/Service3" onClick={handleLinkClick}>Brand Management</Link></li>
                                        <li><Link to="/Service4" onClick={handleLinkClick}>Strategy</Link></li>
                                        <li><Link to="/Service5" onClick={handleLinkClick}>Human Capital</Link></li>
                                    </ul>
                                </details>
                            </li>
                            <li><Link to="/career" onClick={handleLinkClick}>Career</Link></li>
                            <li><Link to="/ProBono" onClick={handleLinkClick}>Pro-Bono</Link></li>
                            <li>
                                <details>
                                    <summary>Contact</summary>
                                    <ul className="p-2">
                                        <li><Link to="/contact/info" onClick={handleLinkClick}>Send Info</Link></li>
                                        <li><Link to="/contact/consult" onClick={handleLinkClick}>Ask for Consultation</Link></li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <details>
                                    <summary>Resources</summary>
                                    <ul className="p-2">
                                        <li><Link to="/resources/data" onClick={handleLinkClick}>Data</Link></li>
                                        <li><Link to="/resources/c-suite" onClick={handleLinkClick}>C-Suite</Link></li>
                                        <li><Link to="/resources/leadership" onClick={handleLinkClick}>Leadership</Link></li>
                                        <li><Link to="/resources/brand" onClick={handleLinkClick}>Brand Insights</Link></li>
                                        <li><Link to="/resources/project" onClick={handleLinkClick}>Project Resources</Link></li>
                                    </ul>
                                </details>
                            </li>
                        </ul>
                    )}
                </div>

                {/* Logo */}
                <Link to="/" className="ml-2">
                    <img
                        src={logo}
                        alt="ADE IT Logo"
                        className="h-10 w-auto"
                    />
                </Link>
            </div>

            {/* Desktop Menu */}
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/">Home</Link></li>
                    <li>
                        <details>
                            <summary>About</summary>
                            <ul className="p-2 bg-base-100 rounded-box">
                                <li><Link to="/about/team">Team</Link></li>
                                <li><Link to="/about/approach">Approach</Link></li>
                                <li><Link to="/about/affiliates">Affiliates</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Work</summary>
                            <ul className="p-2 bg-base-100 rounded-box">
                                <li><Link to="/work">Learning</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Services</summary>
                            <ul className="p-2 bg-base-100 rounded-box">
                                <li><Link to="/Service1">Digital Transformation</Link></li>
                                <li><Link to="/Service2">Project Management</Link></li>
                                <li><Link to="/Service3">Brand Management</Link></li>
                                <li><Link to="/Service4">Strategy</Link></li>
                                <li><Link to="/Service5">Human Capital</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li><Link to="/career">Career</Link></li>
                    <li><Link to="/ProBono">Pro-Bono</Link></li>
                    <li>
                        <details>
                            <summary>Contact</summary>
                            <ul className="p-2 bg-base-100 rounded-box">
                                <li><Link to="/contact/info">Send Info</Link></li>
                                <li><Link to="/contact/consult">Ask for Consultation</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Resources</summary>
                            <ul className="p-2 bg-base-100 rounded-box">
                                <li><Link to="/resources/data">Data</Link></li>
                                <li><Link to="/resources/c-suite">C-Suite</Link></li>
                                <li><Link to="/resources/leadership">Leadership</Link></li>
                                <li><Link to="/resources/brand">Brand Insights</Link></li>
                                <li><Link to="/resources/project">Project Resources</Link></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    );
}
