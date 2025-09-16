import { assets } from "../assets/assets.ts";
import { motion } from "framer-motion";

export default function PortfolioCompanies() {
    const companies = [
        {
            name: "AiGentic Labs",
            image: assets.portfolio1,
            desc: "Our technology development company building specialised AI systems for financial markets. AiGentic Labs creates the proprietary models and automated workflows that power our entire ecosystem, including advanced research systems, content generation tools, and specialised financial AI models.",
        },
        {
            name: "Discovery Alert",
            image: assets.portfolio2,
            desc: "Established financial media brand specialising in mining and energy sector coverage. Provides real-time alerts on significant mineral discoveries and comprehensive analysis of ASX-listed mining and energy companies. A proven revenue-generating platform with strong market presence.",
        },
        {
            name: "Stock Wire X",
            image: assets.about,
            desc: "AI-powered financial publication delivering in-depth analysis and commentary for ASX-listed companies in technology, biotechnology, healthcare, finance, and industrial sectors. Focused on providing clear, accessible insights for retail and professional investors.",
        },
    ];

    return (
        <section className="w-full bg-black text-white py-10 md:py-20 px-6 lg:px-28">
            <div className="max-w-7xl mx-auto">
                {/* Section Heading */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl headingt">
                        Our{" "}
                        <span className="gradient-text">
                            Portfolio Companies
                        </span>
                    </h2>
                    <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                        A curated portfolio of companies developing AI-powered technology and
                        media solutions for financial markets.
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
                        visible: {
                            transition: { staggerChildren: 0.2 }
                        }
                    }}
                >
                    {companies.map((c, i) => (
                        <motion.div
                            key={i}
                            variants={{
                                hidden: { opacity: 0, y: 40, scale: 0.95 },
                                visible: { opacity: 1, y: 0, scale: 1 }
                            }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-[#111] rounded-2xl overflow-hidden shadow-lg border border-gray-800 hover:border-purple-500/50 hover:shadow-purple-500/20 transition-all duration-300 flex flex-col"
                        >
                            {/* Image on Top */}
                            <div className="w-full h-40 overflow-hidden">
                                <motion.img
                                    src={c.image}
                                    alt={c.name}
                                    className="w-full h-full object-cover"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.4 }}
                                />
                            </div>

                            {/* Card Body */}
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center gap-3 mb-4">
                                    <h3 className="text-lg font-semibold">{c.name}</h3>
                                </div>

                                <p className="text-sm text-gray-300 flex-grow">
                                    {c.desc}
                                </p>

                                <div className="mt-6 flex items-center justify-between">
                                    <motion.button
                                        className="px-3 py-2 rounded-md btn2"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Visit Company
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
