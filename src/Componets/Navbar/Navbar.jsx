import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useState } from "react";

// Reusable Expandable Menu Component for Mobile
function ExpandableMenu({ title, children }) {
    const [open, setOpen] = useState(false);

    return (
        <li>
            <div
                onClick={() => setOpen(!open)}
                className="flex justify-between items-center cursor-pointer py-2"
            >
                <span>{title}</span>
                <svg
                    className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </div>
            {open && <ul className="ml-4 space-y-1">{children}</ul>}
        </li>
    );
}

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleLinkClick = () => setMenuOpen(false);

    return (
        <div className="bg-base-100 shadow-md fixed top-0 w-full z-50 px-4 lg:px-8">
            {/* Navbar Container */}
            <div className="flex items-center justify-between h-16">
                {/* Logo */}
                <Link to="/" className="flex items-center">
                    <img src={logo} alt="ADE IT Logo" className="h-10 w-auto" />
                </Link>

                {/* Hamburger Icon (Mobile) */}
                <button
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
                </button>

                {/* Desktop Menu */}
                <ul className="hidden lg:flex menu menu-horizontal gap-x-4">
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
                                <li><Link to="/contact/send-info">Send Info</Link></li>
                                <li><Link to="/contact/consultation">Ask for Consultation</Link></li>
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

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="lg:hidden fixed top-16 left-0 w-full h-[calc(100vh-4rem)] bg-base-100 shadow-md z-50 overflow-y-auto">
                    <ul className="menu p-4 space-y-2 w-full max-w-md mx-auto">
                        <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>

                        <ExpandableMenu title="About">
                            <li><Link to="/about/team" onClick={handleLinkClick}>Team</Link></li>
                            <li><Link to="/about/approach" onClick={handleLinkClick}>Approach</Link></li>
                            <li><Link to="/about/affiliates" onClick={handleLinkClick}>Affiliates</Link></li>
                        </ExpandableMenu>

                        <ExpandableMenu title="Work">
                            <li><Link to="/work" onClick={handleLinkClick}>Learning</Link></li>
                        </ExpandableMenu>

                        <ExpandableMenu title="Services">
                            <li><Link to="/Service1" onClick={handleLinkClick}>Digital Transformation</Link></li>
                            <li><Link to="/Service2" onClick={handleLinkClick}>Project Management</Link></li>
                            <li><Link to="/Service3" onClick={handleLinkClick}>Brand Management</Link></li>
                            <li><Link to="/Service4" onClick={handleLinkClick}>Strategy</Link></li>
                            <li><Link to="/Service5" onClick={handleLinkClick}>Human Capital</Link></li>
                        </ExpandableMenu>

                        <li><Link to="/career" onClick={handleLinkClick}>Career</Link></li>
                        <li><Link to="/ProBono" onClick={handleLinkClick}>Pro-Bono</Link></li>

                        <ExpandableMenu title="Contact">
                            <li><Link to="/contact/send-info" onClick={handleLinkClick}>Send Info</Link></li>
                            <li><Link to="/contact/consultation" onClick={handleLinkClick}>Ask for Consultation</Link></li>
                        </ExpandableMenu>

                        <ExpandableMenu title="Resources">
                            <li><Link to="/resources/data" onClick={handleLinkClick}>Data</Link></li>
                            <li><Link to="/resources/c-suite" onClick={handleLinkClick}>C-Suite</Link></li>
                            <li><Link to="/resources/leadership" onClick={handleLinkClick}>Leadership</Link></li>
                            <li><Link to="/resources/brand" onClick={handleLinkClick}>Brand Insights</Link></li>
                            <li><Link to="/resources/project" onClick={handleLinkClick}>Project Resources</Link></li>
                        </ExpandableMenu>
                    </ul>
                </div>
            )}
        </div>
    );
}
