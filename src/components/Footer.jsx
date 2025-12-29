import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import logoPng from "/images/more/logo.png";

const Footer = () => {
    return (
        <div className="bg-cover bg-center"
            style={{
                backgroundImage: `url('/images/more/footerBg.jpg')`,
            }}>
            <div className="footer flex flex-col md:flex-row justify-between items-center p-10 text-[#331A15] max-w-5xl mx-auto">
                <div className="w-full md:w-1/2">
                    {/* Brand Section */}
                    <aside className="w-full">
                        <img className="w-20 h-20 mb-4" src={logoPng} alt="Espresso Emporium Logo" />
                        <h1 className="font-rancho text-4xl mb-4 drop-shadow-md font-bold text-[#331A15]">Espresso Emporium</h1>
                        <p className="text-base font-raleway w-full md:w-4/5 mb-4">
                            Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.
                        </p>

                        <div className="flex gap-4 mt-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-primary transition-colors duration-300">
                                <FaFacebook />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-primary transition-colors duration-300">
                                <FaTwitter />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-primary transition-colors duration-300">
                                <FaInstagram />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-primary transition-colors duration-300">
                                <FaLinkedin />
                            </a>
                        </div>
                    </aside>

                    {/* Get in Touch Section */}
                    <nav className="w-full md:w-1/2">
                        <h6 className="font-rancho text-3xl mb-4 drop-shadow-md font-bold text-[#331A15] p-0">Get in Touch</h6>
                        <div className="flex flex-col gap-4 font-raleway text-base">
                            <div className="flex items-center gap-2">
                                <FaPhone className="text-lg" />
                                <p>+88 01533 333 333</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaEnvelope className="text-lg" />
                                <p>info@gmail.com</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaMapMarkerAlt className="text-lg" />
                                <p>72, Wall street, King Road, Dhaka</p>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="w-full md:w-1/2">
                    {/* Connect with Us Form Section */}
                    <form className="w-full flex flex-col gap-4">
                        <h6 className="font-rancho text-3xl mb-4 drop-shadow-md font-bold text-[#331A15]">Connect with Us</h6>
                        <input
                            type="text"
                            placeholder="Name"
                            className="input input-bordered w-full focus:outline-none focus:border-[#331A15] bg-white"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="input input-bordered w-full focus:outline-none focus:border-[#331A15] bg-white"
                        />
                        <textarea
                            className="textarea input-bordered w-full focus:outline-none focus:border-[#331A15] bg-white h-24 resize-none"
                            placeholder="Message"
                        ></textarea>
                        <button className="btn rounded-full border-2 border-[#331A15] hover:text-[#331A15] font-rancho text-xl hover:bg-white hover:text-[#331A15] capitalize w-fit px-6">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="bg-cover bg-center text-center py-4" style={{ backgroundImage: `url('/images/more/24.jpg')` }}>
                <div className="footer-center text-white text-base font-rancho tracking-wider">
                    <p>Copyright Espresso Emporium ! All Rights Reserved</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;