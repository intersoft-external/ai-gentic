import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "./ui/accordion";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { Element } from "react-scroll";
import {type FC, memo } from "react";

const About: FC = () => {
    const accordionItems = [
        {
            title: "AI-powered fintech solutions",
            desc: "Driving innovation in capital markets through automation, data-driven insights, and predictive analytics.",
        },
        {
            title: "Media & communication",
            desc: "Building platforms that connect investors, innovators, and markets through AI-enhanced content and engagement.",
        },
        {
            title: "Portfolio synergy",
            desc: "Developing a network of complementary brands that collectively generate superior long-term value.",
        },
    ];

    return (
        <Element name="about">
            <section
                id="about"
                className="relative w-full text-white py-16 md:py-24 px-6 lg:px-12 overflow-hidden"
                aria-labelledby="about-heading"
            >
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
                    {/* Left Side */}
                    <motion.div
                        className="lg:col-span-6 flex flex-col gap-6"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2
                            id="about-heading"
                            className="text-3xl md:text-4xl lg:text-5xl heading"
                        >
                            About{" "}
                            <span className="gradient-text relative">
                AiGentic Group
                <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-gradient-to-r from-[#B69231] via-[#171717] to-[#e6b345] rounded-full animate-pulse"></span>
              </span>
                        </h2>

                        <p className="text-gray-300 text-lg leading-relaxed">
                            <strong>AiGentic Group</strong> is a holding company specialising
                            in <strong>AI-powered financial technology</strong> and media
                            brands. We develop companies that leverage{" "}
                            <strong>artificial intelligence</strong> to transform how
                            financial markets operate and communicate.
                        </p>

                        <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                            Our focus is on building a portfolio of synergistic brands that
                            collectively create superior value in the{" "}
                            <strong>capital markets ecosystem</strong>.
                        </p>

                        {/* Accordion */}
                        <Accordion type="single" collapsible className="w-full mt-6">
                            {accordionItems.map((item, i) => (
                                <AccordionItem key={i} value={`item-${i}`}>
                                    <AccordionTrigger className="text-lg font-medium !no-underline hover:text-indigo-400 transition-colors relative group">
                                        {item.title}
                                        <span className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-indigo-400/0 via-purple-500/60 to-pink-500/0 scale-x-0 group-hover:scale-x-100 origin-center transition-transform"></span>
                                    </AccordionTrigger>
                                    <AccordionContent className="text-gray-400 leading-relaxed">
                                        {item.desc}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </motion.div>

                    {/* Right Side */}
                    <motion.div
                        className="lg:col-span-6 flex justify-center lg:justify-end items-center"
                        initial={{ opacity: 0, x: 80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="relative w-full max-w-md mx-auto lg:mx-0">
                            {/* glow border */}
                            <div className="absolute -bottom-6 -right-6 w-[95%] h-[95%] rounded-2xl bg-gradient-to-r from-[#e6b345] to-[#B69231] shadow-lg"></div>

                            {/* Main image */}
                            <img
                                src={assets.about}
                                alt="About AiGentic Group - AI-powered financial technology"
                                loading="lazy"
                                decoding="async"
                                className="relative z-10 w-full rounded-2xl shadow-[0_0_40px_rgba(139,92,246,0.3)]"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>
        </Element>
    );
};

export default memo(About);
