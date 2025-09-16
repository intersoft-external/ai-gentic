import { Newspaper, BarChart3, Layers } from "lucide-react";
import { assets } from "../assets/assets.ts";
import { motion } from "framer-motion";

export default function InvestmentFocus() {
    const focuses = [
        {
            icon: <Newspaper size={32} />,
            title: "AI-Powered Financial Media",
            desc: "Transforming how investors access insights through AI-driven content platforms."
        },
        {
            icon: <BarChart3 size={32} />,
            title: "Capital Markets Technology",
            desc: "Building next-generation tools that automate, predict, and optimize trading and investment strategies."
        },
        {
            icon: <Layers size={32} />,
            title: "Strategic Synergies",
            desc: "Creating interconnected brands that unlock greater long-term value together than apart."
        }
    ];

    return (
        <section className="relative w-full text-white py-20 px-6 lg:px-28 bg-black">
            {/* Heading */}
            <motion.div
                className="text-center mb-14"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl md:text-4xl lg:text-5xl heading">
                    Investment{" "}
                    <span className="gradient-text">Focus</span>
                </h2>
                <motion.p
                    className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    We focus on building brands and technologies that shape the future of finance and communication.
                </motion.p>
            </motion.div>

            {/* Card Container */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-hide"
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
                {focuses.map((item, i) => (
                    <motion.div
                        key={i}
                        variants={{
                            hidden: { opacity: 0, y: 40, scale: 0.95 },
                            visible: { opacity: 1, y: 0, scale: 1 }
                        }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        whileHover={{ y: -8, scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        className="group snap-center flex-shrink-0 bg-black/30 border border-white/10 rounded-2xl p-8 shadow-lg backdrop-blur-md relative cursor-pointer"
                        style={{ backgroundImage: `url(${assets.gradientbg})` }}
                    >
                        {/* Glow Accent */}
                        <div className="h-0 w-[12rem] absolute top-[20%] right-[2%] shadow-[0_0_900px_20px_#e99b63] -rotate-[30deg] -z-10"></div>

                        {/* Gradient Accent Border */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition"></div>

                        {/* Icon */}
                        <div className="relative mb-6 p-4 inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 text-indigo-300 shadow-md">
                            {item.icon}
                        </div>

                        {/* Title */}
                        <h3 className="relative font-semibold text-xl mb-3">{item.title}</h3>

                        {/* Description */}
                        <p className="relative text-gray-400 leading-relaxed">{item.desc}</p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
