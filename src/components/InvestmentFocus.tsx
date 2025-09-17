import { Newspaper, BarChart3, Layers } from "lucide-react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { memo, type ReactNode } from "react";

interface FocusItem {
    icon: ReactNode;
    title: string;
    desc: string;
}

const focuses: FocusItem[] = [
    {
        icon: <Newspaper size={28} aria-hidden="true" />,
        title: "AI-Powered Financial Media",
        desc: "Transforming how investors access insights through AI-driven content platforms.",
    },
    {
        icon: <BarChart3 size={28} aria-hidden="true" />,
        title: "Capital Markets Technology",
        desc: "Building next-generation tools that automate, predict, and optimize trading and investment strategies.",
    },
    {
        icon: <Layers size={28} aria-hidden="true" />,
        title: "Strategic Synergies",
        desc: "Creating interconnected brands that unlock greater long-term value together than apart.",
    },
];

function InvestmentFocus() {
    return (
        <section
            className="relative w-full text-white py-20 px-6 lg:px-28 bg-black"
            aria-labelledby="investment-focus-heading"
        >
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left - Video */}
                <motion.div
                    className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-2xl"
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <video
                        autoPlay
                        loop
                        playsInline
                        muted
                        src={assets.video}
                        className="w-full h-full object-cover rounded-2xl"
                        aria-label="Finance AI video"
                    />

                    {/* Floating Live AI Badge */}
                    <motion.div
                        className="absolute top-6 left-6 bg-black/70 backdrop-blur-md px-5 py-3 rounded-xl border border-purple-500/30 shadow-lg"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                    >
                        <div className="flex items-center gap-2">
                            <motion.span
                                className="w-2.5 h-2.5 rounded-full bg-red-500"
                                animate={{ opacity: [1, 0.3, 1] }}
                                transition={{ repeat: Infinity, duration: 1.5 }}
                                aria-hidden="true"
                            />
                            <p className="text-sm font-semibold">Live AI Processing</p>
                        </div>
                        <p className="text-xs text-gray-400 mt-1">
                            Real-time financial data analysis and insights
                        </p>
                    </motion.div>
                </motion.div>

                {/* Right - Focus Points */}
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-10"
                >
                    <div className="mb-6">
                        <h2
                            id="investment-focus-heading"
                            className="text-3xl md:text-4xl lg:text-5xl font-bold"
                        >
                            Investment <span className="gradient-text">Focus</span>
                        </h2>
                        <p className="mt-4 text-gray-400 text-lg max-w-lg">
                            We focus on building brands and technologies that shape the
                            future of finance and communication.
                        </p>
                    </div>

                    {focuses.map((item, i) => (
                        <motion.article
                            key={item.title}
                            className="flex items-start gap-5 group"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.2 }}
                            viewport={{ once: true }}
                        >
                            {/* Icon */}
                            <div
                                className="p-4 rounded-xl icon"
                                aria-hidden="true"
                            >
                                {item.icon}
                            </div>
                            {/* Text */}
                            <div>
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default memo(InvestmentFocus);
