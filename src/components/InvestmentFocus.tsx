import { Newspaper, BarChart3, Layers } from "lucide-react";
import { assets } from "../assets/assets";
import { motion, type Variants } from "framer-motion";
import { memo, type ReactNode } from "react";

interface FocusItem {
    icon: ReactNode;
    title: string;
    desc: string;
}

const focuses: FocusItem[] = [
    { icon: <Newspaper size={28} />, title: "AI-Powered Financial Media", desc: "Transforming how investors access insights through AI-driven content platforms." },
    { icon: <BarChart3 size={28} />, title: "Capital Markets Technology", desc: "Building next-generation tools that automate, predict, and optimize trading and investment strategies." },
    { icon: <Layers size={28} />, title: "Strategic Synergies", desc: "Creating interconnected brands that unlock greater long-term value together than apart." },
];

const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function InvestmentFocus() {
    return (
        <section
            className="relative w-full text-white py-20 px-6 lg:px-12 bg-gradient-to-br from-black via-[#0d0d0d] to-black"
            aria-labelledby="investment-focus-heading"
        >
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                {/* Left - Video */}
                <motion.div
                    className="relative w-full h-[420px] rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(182,146,49,0.25)] border border-white/10"
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <video
                        autoPlay
                        loop
                        playsInline
                        preload="none"
                        muted
                        src={assets.video}
                        className="w-full h-full object-cover rounded-3xl"
                        aria-label="Finance AI video"
                    />

                    {/* Floating Live AI Badge */}
                    <motion.div
                        className="absolute top-6 left-6 bg-black/60 backdrop-blur-md px-5 py-3 rounded-xl border border-[#B69231]/40 shadow-lg"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                    >
                        <div className="flex items-center gap-2">
                            <motion.span
                                className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_10px_red]"
                                animate={{ opacity: [1, 0.3, 1] }}
                                transition={{ repeat: Infinity, duration: 1.5 }}
                            />
                            <p className="text-sm font-semibold tracking-wide">Live AI Processing</p>
                        </div>
                        <p className="text-xs text-gray-400 mt-1">
                            Real-time financial data analysis and insights
                        </p>
                    </motion.div>
                </motion.div>

                {/* Right - Focus Points */}
                <motion.div
                    className="flex flex-col gap-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                >
                    <div className="mb-6">
                        <h2
                            id="investment-focus-heading"
                            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
                        >
                            Investment{" "}
                            <span className="gradient-text">
                                Focus
                            </span>
                        </h2>
                        <p className="mt-4 text-gray-400 text-lg max-w-lg leading-relaxed">
                            We focus on building brands and technologies that shape the future of finance and communication.
                        </p>
                    </div>

                    {focuses.map((item) => (
                        <motion.article
                            key={item.title}
                            className="flex items-start gap-5 group cursor-pointer will-change-transform"
                            variants={itemVariants}
                        >
                            {/* Icon */}
                            <div
                                className="p-4 rounded-2xl icon"
                                aria-hidden="true"
                            >
                                <div className="text-[#B69231]">{item.icon}</div>
                            </div>
                            {/* Text */}
                            <div>
                                <h3 className="text-lg font-semibold mb-2 group-hover:text-[#B69231] transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default memo(InvestmentFocus);
