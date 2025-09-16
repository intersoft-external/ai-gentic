import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { AiOutlineCopyright } from "react-icons/ai";
import { assets } from "../assets/assets.ts";
import { motion } from "framer-motion";

export default function Footer({
                                   companyName = "Aigentic",
                                   year = new Date().getFullYear(),
                                   aiSummary = { sentiment: "Bullish", score: 72 },
                               }) {
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <footer className="w-full bg-transparent pb-8 text-white">
            <div className="w-full px-0">
                <div className="rounded-none bg-gradient-to-b from-white/8 via-white/4 to-white/2 backdrop-blur-2xl border-t border-white/10 p-8 shadow-2xl">
                    <div className="mx-auto max-w-7xl md:flex md:items-start md:justify-between gap-8">
                        <motion.div
                            className="flex-1 min-w-0"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={itemVariants}
                        >
                            <div className="flex items-center gap-4">
                                <div>
                                    <img className={"h-12"} src={assets.logo} alt="" />
                                    <p className="mt-1 text-sm text-white/70 max-w-sm">
                                        AI-driven finance insights, portfolio intelligence, and
                                        automated alpha for modern investors.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-6 flex items-center gap-4 rounded-lg border border-white/6 bg-white/3 px-4 py-3 max-w-md">
                                <div
                                    className={`rounded-full px-3 py-1 text-sm font-medium ${
                                        aiSummary.sentiment === "Bullish"
                                            ? "bg-emerald-600/20 text-emerald-300"
                                            : "bg-rose-600/20 text-rose-300"
                                    }`}
                                >
                                    AI Sentiment
                                </div>
                                <div className="flex-1 text-sm">
                                    <div className="font-medium">
                                        Market outlook:{" "}
                                        <span className="font-semibold">{aiSummary.sentiment}</span>
                                    </div>
                                    <div className="text-xs text-white/70">
                                        Confidence:{" "}
                                        <span className="font-semibold">{aiSummary.score}%</span> — Updated by model
                                    </div>
                                </div>
                            </div>

                            {/* Newsletter */}
                            <motion.form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    alert(
                                        "Thanks for subscribing — wire this to your mailing list API"
                                    );
                                }}
                                className="mt-6 max-w-md"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <label htmlFor="email" className="sr-only">
                                    Subscribe to updates
                                </label>
                                <div className="relative flex items-center">
                                    <input
                                        id="email"
                                        type="email"
                                        required
                                        placeholder="Your work email"
                                        className="w-full rounded-l-md border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/30"
                                    />
                                    <button className="btn2 px-4 py-3 rounded-r-md">Subscribe</button>
                                </div>
                                <p className="mt-2 text-xs text-white/60">
                                    Receive monthly AI-driven market briefs and product updates.
                                </p>
                            </motion.form>
                        </motion.div>

                        <motion.div
                            className="mt-8 grid grid-cols-2 gap-6 md:mt-0 md:w-1/3"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={itemVariants}
                        >
                            <div>
                                <h4 className="text-sm font-semibold">Product</h4>
                                <ul className="mt-3 space-y-2 text-sm text-white/75">
                                    <li>
                                        <a href="#" className="hover:text-white">
                                            Platform
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-white">
                                            AI Signals
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-white">
                                            Integrations
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-white">
                                            Pricing
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold">Company</h4>
                                <ul className="mt-3 space-y-2 text-sm text-white/75">
                                    <li>
                                        <a href="#" className="hover:text-white">
                                            About
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-white">
                                            Careers
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-white">
                                            Blog
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-white">
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        className="mt-8 border-t border-white/8 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={itemVariants}
                    >
                        <div className="flex items-center gap-4 text-sm text-white/75">
              <span className="flex items-center gap-2">
                <AiOutlineCopyright /> {year} {companyName}. All rights reserved.
              </span>
                            <a href="#" className="ml-4 text-xs hover:text-white">
                                Privacy
                            </a>
                            <a href="#" className="ml-4 text-xs hover:text-white">
                                Terms
                            </a>
                        </div>

                        <div className="flex items-center justify-between gap-4">
                            <nav className="flex items-center gap-3">
                                <a
                                    href="#"
                                    aria-label="Github"
                                    className="rounded-md p-2 hover:bg-white/6"
                                >
                                    <FaGithub size={18} />
                                </a>
                                <a
                                    href="#"
                                    aria-label="Twitter"
                                    className="rounded-md p-2 hover:bg-white/6"
                                >
                                    <FaTwitter size={18} />
                                </a>
                                <a
                                    href="#"
                                    aria-label="LinkedIn"
                                    className="rounded-md p-2 hover:bg-white/6"
                                >
                                    <FaLinkedin size={18} />
                                </a>
                            </nav>

                            <div className="hidden md:flex items-center gap-2 text-xs text-white/70">
                                <IoMdMail size={18} />
                                <span>info@{companyName.toLowerCase()}.com.au</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </footer>
    );
}
