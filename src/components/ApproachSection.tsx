import { ChartBar, Users, Globe, Lightbulb } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { type ReactNode, memo } from "react";

import gradientbg from "../assets/gradient.webp";

interface CardItem {
    icon: ReactNode;
    title: string;
    desc: string;
    gradient: string;
}

const cards: CardItem[] = [
    {
        icon: <ChartBar size={28} aria-hidden="true" />,
        title: "Data-Driven Insights",
        desc: "We leverage analytics to make informed, strategic investment decisions.",
        gradient: "from-indigo-500/30 to-purple-500/20",
    },
    {
        icon: <Users size={28} aria-hidden="true" />,
        title: "Collaborative Network",
        desc: "Partnering with experts to drive innovation and growth.",
        gradient: "from-purple-500/30 to-pink-500/20",
    },
    {
        icon: <Globe size={28} aria-hidden="true" />,
        title: "Global Perspective",
        desc: "Identifying opportunities across markets with a wide lens.",
        gradient: "from-pink-500/30 to-indigo-500/20",
    },
    {
        icon: <Lightbulb size={28} aria-hidden="true" />,
        title: "Innovation First",
        desc: "Embracing technology to redefine traditional investment models.",
        gradient: "from-yellow-400/30 to-indigo-500/20",
    },
];

// Motion variants
const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

function ApproachSection() {
    return (
            <section
                id="approach"
                className="relative w-full text-white py-24 px-6 lg:px-12 overflow-hidden"
                aria-labelledby="approach-heading"
            >
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <motion.div
                        className="text-center mb-20 relative z-10"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <h2
                            id="approach-heading"
                            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider leading-[1.2] min-h-[60px]"
                        >
                            Our <span className="gradient-text">Approach</span>
                        </h2>

                        <motion.p
                            className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed min-h-[64px]"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            Combining a clear strategy with forward-looking investments, we
                            focus on creating value through innovation and expertise.
                        </motion.p>
                    </motion.div>

                    {/* Cards Grid */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                    >
                        {cards.map((item) => (
                            <motion.article
                                key={item.title}
                                style={{
                                    backgroundImage: `url(${gradientbg})`,
                                    backgroundSize: "cover",
                                    backgroundRepeat: "no-repeat",
                                }}
                                variants={cardVariants}
                                className="relative group p-6 min-h-[220px] rounded-3xl bg-black/30 border border-white/10 shadow-lg hover:shadow-xl backdrop-blur-md hover:-translate-y-2 hover:scale-[1.03] transition-transform duration-500 will-change-transform"
                            >
                                {/* Glow Layer */}
                                <div
                                    className={`absolute -inset-[1px] rounded-3xl bg-gradient-to-br ${item.gradient} opacity-40 blur-2xl group-hover:opacity-70 transition`}
                                    aria-hidden="true"
                                />

                                {/* Content */}
                                <div className="relative flex flex-col items-start gap-5">
                                    <div
                                        className="p-4 rounded-xl icon"
                                        aria-hidden="true"
                                    >
                                        {item.icon}
                                    </div>
                                    <h3 className="font-semibold text-xl leading-snug min-h-[28px]">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed min-h-[40px]">
                                        {item.desc}
                                    </p>
                                </div>
                            </motion.article>
                        ))}
                    </motion.div>
                </div>

                {/* Background Accents */}
                <div
                    className="absolute -top-32 -left-32 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-indigo-500/20 to-purple-500/10 blur-[150px] -z-10"
                    aria-hidden="true"
                />
                <div
                    className="absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-pink-500/20 to-yellow-400/10 blur-[150px] -z-10"
                    aria-hidden="true"
                />
            </section>
    );
}

export default memo(ApproachSection);
