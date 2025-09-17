import { motion } from "framer-motion";
import { Brain, BarChart3, TrendingUp } from "lucide-react";
import { assets } from "../assets/assets";
import { CiShare1 } from "react-icons/ci";
import { Element } from "react-scroll";
import {type JSX, memo} from "react";

interface Company {
    name: string;
    tag: string;
    desc: string;
    focus: string[];
    image: string;
}

interface Highlight {
    number: string;
    text: string;
    icon: JSX.Element;
}

const companies: Company[] = [
    {
        name: "AiGentic Labs",
        tag: "Technology Development",
        desc: "Our technology development company building specialised AI systems for financial markets. AiGentic Labs creates the proprietary models and automated workflows that power our entire ecosystem, including advanced research systems, content generation tools, and specialised financial AI models.",
        focus: ["Technology", "AI Models"],
        image: assets.portfolio1,
    },
    {
        name: "Discovery Alert",
        tag: "Mining & Energy Media",
        desc: "Established financial media brand specialising in mining and energy sector coverage. Provides real-time alerts on significant mineral discoveries and comprehensive analysis of ASX-listed mining and energy companies. A proven revenue-generating platform with strong market presence.",
        focus: ["Mining", "Energy"],
        image: assets.portfolio2,
    },
    {
        name: "Stock Wire X",
        tag: "AI-Powered Financial Media",
        desc: "AI-powered financial publication delivering in-depth analysis and commentary for ASX-listed companies in technology, biotechnology, healthcare, finance, and industrial sectors. Focused on providing clear, accessible insights for retail and professional investors.",
        focus: ["Media", "Financial AI"],
        image: assets.about,
    },
];

const highlights: Highlight[] = [
    { number: "100%", text: "AI-Powered Solutions", icon: <Brain size={28} aria-hidden="true" /> },
    { number: "3", text: "Industry Sectors", icon: <BarChart3 size={28} aria-hidden="true" /> },
    { number: "Future", text: "Growth Potential", icon: <TrendingUp size={28} aria-hidden="true" /> },
];

function PortfolioCompanies() {
    return (
        <Element name="portfolio">
            <section
                className="w-full bg-black text-white py-16 md:py-24 px-6 lg:px-28"
                aria-labelledby="portfolio-heading"
            >
                <div className="max-w-7xl mx-auto">
                    {/* Section Heading */}
                    <motion.div
                        className="text-center mb-20"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <h2
                            id="portfolio-heading"
                            className="text-3xl md:text-4xl lg:text-5xl font-bold"
                        >
                            Our <span className="gradient-text">Portfolio Companies</span>
                        </h2>
                        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                            Discover the innovative companies in our portfolio, each leveraging
                            AI to transform industries and create lasting value.
                        </p>
                    </motion.div>

                    {/* Cards Grid */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            hidden: {},
                            visible: { transition: { staggerChildren: 0.2 } },
                        }}
                    >
                        {companies.map((c) => (
                            <motion.article
                                key={c.name}
                                variants={{
                                    hidden: { opacity: 0, y: 40, scale: 0.95 },
                                    visible: { opacity: 1, y: 0, scale: 1 },
                                }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                whileHover={{ y: -10, scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="bg-[#111] rounded-2xl border border-gray-800 hover:border-[#B69231] hover:shadow-sm hover:shadow-[#e6b345] transition-all duration-300 flex flex-col"
                            >
                                {/* Image */}
                                <div className="w-full h-40 overflow-hidden rounded-t-2xl">
                                    <motion.img
                                        src={c.image}
                                        alt={c.name}
                                        className="w-full h-full object-cover"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.4 }}
                                        loading="lazy"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <span className="text-xs uppercase text-[#B69231] tracking-wider mb-2">
                                        {c.tag}
                                    </span>
                                    <h3 className="text-xl font-semibold mb-3">{c.name}</h3>
                                    <p className="text-sm text-gray-300 flex-grow break-words">
                                        {c.desc}
                                    </p>

                                    {/* Key Focus Areas */}
                                    <div className="mt-4">
                                        <h4 className="text-xs uppercase text-gray-500 mb-2">
                                            Key Focus Areas
                                        </h4>
                                        <div className="flex gap-2 flex-wrap">
                                            {c.focus.map((f) => (
                                                <span
                                                    key={f}
                                                    className="text-xs px-3 py-1 rounded-full bg-purple-[#E7BE63] text border border-[#B69231]"
                                                >
                                                    {f}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* CTA */}
                                    <div className="mt-6">
                                        <motion.button
                                            className="text-[#B69231] flex items-center gap-2 cursor-pointer"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            aria-label={`Learn more about ${c.name}`}
                                        >
                                            Learn More
                                            <CiShare1 aria-hidden="true" />
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </motion.div>

                    {/* Bottom Highlights */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                        {highlights.map((h) => (
                            <div
                                key={h.text}
                                className="bg-[#111] p-8 rounded-2xl border border-gray-800 hover:border-[#B69231] hover:shadow-sm hover:shadow-[#e6b345] transition-all duration-300 flex flex-col items-center"
                            >
                                <div className="mb-4 p-3 rounded-xl icon">{h.icon}</div>
                                <h3 className="text-3xl font-bold mb-2">{h.number}</h3>
                                <p className="text text-sm">{h.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Element>
    );
}

export default memo(PortfolioCompanies);
