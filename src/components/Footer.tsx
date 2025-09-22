import {FaGithub, FaTwitter, FaLinkedin} from "react-icons/fa";
import {IoMdMail} from "react-icons/io";
import {AiOutlineCopyright} from "react-icons/ai";
import {assets} from "../assets/assets";
import {motion} from "framer-motion";

interface FooterProps {
    companyName?: string;
    year?: number;
    aiSummary?: { sentiment: "Bullish" | "Bearish"; score: number };
}

export default function Footer({
                                   companyName = "Aigentic",
                                   year = new Date().getFullYear(),
                               }: FooterProps) {
    const itemVariants = {
        hidden: {opacity: 0, y: 20},
        visible: {opacity: 1, y: 0, transition: {duration: 0.6}},
    };

    const productLinks = ["AiGentic", "Labs Discovery", "Alert Stock Wire X"];
    const companyLinks = ["About", "Careers", "Blog", "Contact"];

    return (
        <footer className="w-full bg-transparent pb-8 text-white relative">
            <div className="w-full px-0">
                <div
                    className="bg-gradient-to-b from-white/8 via-white/4 to-white/2 backdrop-blur-2xl border-t border-white/10 p-8 shadow-2xl rounded-none">
                    <div className="mx-auto max-w-7xl md:flex md:items-start md:justify-between gap-8">

                        {/* Brand & AI Summary */}
                        <motion.div
                            className="flex-1 min-w-0"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: true}}
                            variants={itemVariants}
                        >
                            {/* Logo & Description */}
                            <div className="flex items-center space-x-2 cursor-pointer">
                                <div className="relative">
                                    <img
                                        className="rounded-md"
                                        alt="AiGentic Group Logo"
                                        width={40}
                                        height={20}
                                        src={assets.logo}
                                        loading="eager"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-lg font-bold text-[#B69231]">AiGentic</span>
                                    <span className="text-xs text-gray-400 font-medium -mt-1">GROUP</span>
                                </div>
                            </div>

                            <p className="mt-2 text-sm text-white/70 max-w-sm">
                                Investment holding company focused on AI-powered financial technology and media brands.
                            </p>

                        </motion.div>

                        {/* Navigation Links */}
                        <motion.nav
                            className="mt-8 grid grid-cols-2 gap-6 md:mt-0 md:w-1/3"
                            aria-label="Footer Navigation"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: true}}
                            variants={itemVariants}
                        >
                            <div>
                                <h2 className="text-sm font-semibold">Portfolio Companies</h2>
                                <ul className="mt-3 space-y-2 text-sm text-white/75">
                                    {productLinks.map((link) => (
                                        <li key={link}>
                                            <a href="#" className="hover:text-white">{link}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h2 className="text-sm font-semibold">Company</h2>
                                <ul className="mt-3 space-y-2 text-sm text-white/75">
                                    {companyLinks.map((link) => (
                                        <li key={link}>
                                            <a href="#" className="hover:text-white">{link}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.nav>
                    </div>

                    {/* Bottom Bar */}
                    <motion.div
                        className="mx-auto max-w-7xl mt-8 border-t border-white/8 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true}}
                        variants={itemVariants}
                    >
                        <div className="flex items-center gap-4 text-sm text-white/75 flex-wrap">
                            <span className="flex items-center gap-2">
                                <AiOutlineCopyright/> {year} {companyName}. All rights reserved.
                            </span>
                            <a href="#" className="text-xs hover:text-white">Privacy</a>
                            <a href="#" className="text-xs hover:text-white">Terms</a>
                        </div>

                        <div className="flex items-center gap-4">
                            <nav className="flex items-center gap-3" aria-label="Social Media">
                                <a href="#" aria-label="Github" className="rounded-md p-2 hover:bg-white/6"><FaGithub
                                    size={18}/></a>
                                <a href="#" aria-label="Twitter" className="rounded-md p-2 hover:bg-white/6"><FaTwitter
                                    size={18}/></a>
                                <a href="#" aria-label="LinkedIn"
                                   className="rounded-md p-2 hover:bg-white/6"><FaLinkedin size={18}/></a>
                            </nav>

                            <address className="hidden md:flex items-center gap-2 text-xs text-white/70 not-italic">
                                <IoMdMail size={18}/>
                                <a href={`mailto:info@${companyName.toLowerCase()}.com.au`}>
                                    info@{companyName.toLowerCase()}.com.au
                                </a>
                            </address>
                        </div>
                    </motion.div>
                </div>
            </div>
        </footer>
    );
}
