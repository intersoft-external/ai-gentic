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

    const productLinks = ["Platform", "AI Signals", "Integrations", "Pricing"];
    const companyLinks = ["About", "Careers", "Blog", "Contact"];

    return (
        <footer className="w-full bg-transparent pb-8 text-white">
            <div className="w-full px-0">
                <div className="rounded-none bg-gradient-to-b from-white/8 via-white/4 to-white/2 backdrop-blur-2xl border-t border-white/10 p-8 shadow-2xl">
                    <div className="mx-auto max-w-7xl md:flex md:items-start md:justify-between gap-8">
                        {/* Brand + Summary */}
                        <motion.div
                            className="flex-1 min-w-0"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={itemVariants}
                        >
                            <div className="flex items-center gap-4">
                                <div>
                                    <div className="flex items-center space-x-3">
                                        <div className="relative">
                                            <img
                                                className="rounded-md"
                                                alt={`${companyName} Logo`}
                                                width="48"
                                                height="24"
                                                src={assets.logo}
                                            />
                                        </div>
                                        <div className="flex flex-col">
                      <span className="text-xl font-bold text-[#B69231]">
                        {companyName}
                      </span>
                                            <span className="text-xs text-brand-gray font-medium -mt-1">
                        GROUP
                      </span>
                                        </div>
                                    </div>
                                    <p className="mt-1 text-sm text-white/70 max-w-sm">
                                        AI-driven finance insights, portfolio intelligence, and
                                        automated alpha for modern investors.
                                    </p>
                                </div>
                            </div>

                            {/* AI Sentiment */}
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
                                        <span className="font-semibold">{aiSummary.score}%</span> —
                                        Updated by model
                                    </div>
                                </div>
                            </div>

                            {/* Newsletter */}
                            <motion.form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    alert("Thanks for subscribing — wire this to your mailing list API");
                                }}
                                className="mt-6 max-w-md"
                                aria-label="Subscribe to newsletter"
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
                                    <button
                                        type="submit"
                                        className="btn px-6 py-2 rounded-r-md"
                                    >
                                        Subscribe
                                    </button>
                                </div>
                                <p className="mt-2 text-xs text-white/60">
                                    Receive monthly AI-driven market briefs and product updates.
                                </p>
                            </motion.form>
                        </motion.div>

                        {/* Links */}
                        <motion.nav
                            className="mt-8 grid grid-cols-2 gap-6 md:mt-0 md:w-1/3"
                            aria-label="Footer Navigation"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={itemVariants}
                        >
                            <div>
                                <h4 className="text-sm font-semibold">Product</h4>
                                <ul className="mt-3 space-y-2 text-sm text-white/75">
                                    {productLinks.map((link, i) => (
                                        <li key={i}>
                                            <a href="#" className="hover:text-white">
                                                {link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold">Company</h4>
                                <ul className="mt-3 space-y-2 text-sm text-white/75">
                                    {companyLinks.map((link, i) => (
                                        <li key={i}>
                                            <a href="#" className="hover:text-white">
                                                {link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.nav>
                    </div>

                    {/* Bottom Bar */}
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
                            <nav className="flex items-center gap-3" aria-label="Social Media">
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

                            <address className="hidden md:flex items-center gap-2 text-xs text-white/70 not-italic">
                                <IoMdMail size={18} />
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
