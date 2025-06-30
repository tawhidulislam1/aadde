import logo from "../../assets/logo.png";

const Footer = () => {
    return (
        <div className="bg-gray-200">
            {/* Main Footer */}
            <footer className="grid grid-cols-1 md:grid-cols-4 gap-8 px-10 py-12 max-w-7xl mx-auto border-t text-sm">
                {/* Logo and Description */}
                <aside>
                    <img src={logo} alt="Company logo" className="h-12 w-auto mb-4" />
                    <p className="max-w-xs leading-relaxed">
                        <strong className="text-white">ADE IT</strong><br />
                        Empowering businesses through strategy, digital transformation, and project leadership.
                    </p>
                </aside>

                {/* Services */}
                <nav>
                    <h6 className="footer-title mb-2 font-semibold uppercase tracking-wide">Services</h6>
                    <ul className="space-y-1">
                        <li><a className="hover:underline cursor-pointer">Digital Transformation</a></li>
                        <li><a className="hover:underline cursor-pointer">Project Management</a></li>
                        <li><a className="hover:underline cursor-pointer">Brand Management</a></li>
                        <li><a className="hover:underline cursor-pointer">Strategy</a></li>
                        <li><a className="hover:underline cursor-pointer">Human Capital</a></li>
                    </ul>
                </nav>

                {/* Company */}
                <nav>
                    <h6 className="footer-title mb-2 font-semibold uppercase tracking-wide">Company</h6>
                    <ul className="space-y-1">
                        <li><a className="hover:underline cursor-pointer">About Us</a></li>
                        <li><a className="hover:underline cursor-pointer">Contact</a></li>
                        <li><a className="hover:underline cursor-pointer">Careers</a></li>
                        <li><a className="hover:underline cursor-pointer">Pro-Bono</a></li>
                    </ul>
                </nav>

                {/* Legal */}
                <nav>
                    <h6 className="footer-title mb-2 font-semibold uppercase tracking-wide">Legal</h6>
                    <ul className="space-y-1">
                        <li><a className="hover:underline cursor-pointer">Terms of Use</a></li>
                        <li><a className="hover:underline cursor-pointer">Privacy Policy</a></li>
                        <li><a className="hover:underline cursor-pointer">Cookie Policy</a></li>
                    </ul>
                </nav>
            </footer>

            {/* Bottom Bar */}
            <div className="text-center py-4 text-xs text-gray-500 border-t border-gray-700">
                © {new Date().getFullYear()} ADE IT. All rights reserved.
            </div>
        </div>
    );
};

export default Footer;
