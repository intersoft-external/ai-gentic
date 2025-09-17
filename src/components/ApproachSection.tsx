import { ChartBar, Users, Globe, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";
import { Element } from "react-scroll";
import {type ReactNode, memo } from "react";

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

function ApproachSection() {
    return (
        <Element name="approach">
            <section
                className="relative w-full text-white py-24 px-6 lg:px-28 overflow-hidden"
                aria-labelledby="approach-heading"
            >
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
                        className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider"
                    >
                        Our <span className="gradient-text">Approach</span>
                    </h2>

                    <motion.p
                        className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg"
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
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.15 } },
                    }}
                >
                    {cards.map((item) => (
                        <motion.article
                            key={item.title}
                            style={{ backgroundImage: `url(${assets.gradientbg})` }}
                            variants={{
                                hidden: { opacity: 0, y: 30, scale: 0.95 },
                                visible: { opacity: 1, y: 0, scale: 1 },
                            }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="relative group p-6 rounded-3xl bg-black/30 border border-white/10 shadow-lg hover:shadow-xl backdrop-blur-md hover:-translate-y-2 hover:scale-[1.03] transition-transform duration-500"
                        >

                            {/* Glow Layer */}
                            <div
                                className={`absolute -inset-[1px] rounded-3xl bg-gradient-to-br ${item.gradient} opacity-40 blur-2xl group-hover:opacity-70 transition`}
                                aria-hidden="true"
                            ></div>

                            {/* Content */}
                            <div className="relative flex flex-col items-start gap-5">
                                <div
                                    className="p-4 rounded-xl bg-black/50 border border-white/10 shadow-md group-hover:scale-110 transition-transform duration-300"
                                    aria-hidden="true"
                                >
                                    {item.icon}
                                </div>
                                <h3 className="font-semibold text-xl">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>

                {/* Background Accents */}
                <div
                    className="absolute -top-32 -left-32 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-indigo-500/20 to-purple-500/10 blur-[150px] -z-10"
                    aria-hidden="true"
                ></div>
                <div
                    className="absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-pink-500/20 to-yellow-400/10 blur-[150px] -z-10"
                    aria-hidden="true"
                ></div>
            </section>
        </Element>
    );
}

export default memo(ApproachSection);
