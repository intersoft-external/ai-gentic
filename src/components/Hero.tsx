import { memo, lazy, Suspense } from "react";
import { useInView } from "react-intersection-observer";
import { Gem } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { assets } from "../assets/assets.ts";
import * as React from "react";

// Lazy-load Spline only when in view
const Spline = lazy(() => import("@splinetool/react-spline"));

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
        window.scrollTo({
            top: section.offsetTop - 80,
            behavior: "smooth",
        });
    }
};

const Hero = () => {
    // detect when the Hero section is in view
    const { ref: heroRef, inView } = useInView({
        triggerOnce: true,
        rootMargin: "200px",
    });

    return (
        <section
            id="home"
            ref={heroRef}
            className="relative w-full max-w-7xl mx-auto h-[500px] md:h-[600px] flex items-center overflow-hidden pt-5 px-4 sm:px-6 md:px-12"
        >
            <motion.div
                className="grid grid-cols-12 gap-6 w-full"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Left section */}
                <div className="col-span-12 md:col-span-6 md:mt-10 flex flex-col justify-center text-left">
                    {/* Badge */}
                    <motion.div className="relative mb-4 sm:mb-6 w-max" variants={fadeUp}>
                        <div className="w-44 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full">
                            <div className="uppercase absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-2 text-sm tracking-wide text-white">
                                <Gem size={16} aria-hidden="true" />
                                <span>Introducing</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Heading */}
                    <motion.h1
                        className="uppercase font-bold text-white tracking-tight leading-tight break-words hyphens-auto"
                        style={{
                            fontSize: "clamp(1.25rem, 5vw, 3rem)",
                            lineHeight: "clamp(1.5rem, 6vw, 3.5rem)",
                        }}
                        variants={fadeUp}
                    >
                        Specialised AI
                        <br className="hidden sm:block" />
                        Portfolio <span className="gradient-text">Company</span>
                    </motion.h1>

                    {/* Subheading */}
                    <motion.h2
                        className="mt-3 text-gray-300 w-full break-words hyphens-auto"
                        style={{
                            fontSize: "clamp(0.75rem, 2.5vw, 1.25rem)",
                            lineHeight: "clamp(1rem, 3vw, 1.8rem)",
                        }}
                        variants={fadeUp}
                    >
                        Creating a portfolio of AI-powered companies that revolutionise financial content, market intelligence, and capital markets technology.


                    </motion.h2>

                    {/* Buttons */}
                    <motion.div
                        className="mt-5 flex flex-col sm:flex-row gap-3 w-full"
                        variants={fadeUp}
                    >
                        <a
                            href="portfolio"
                            className="cursor-pointer flex justify-center items-center rounded-full font-medium hover:opacity-90 transition-all duration-300 shadow-lg w-full sm:w-auto"
                            style={{
                                fontSize: "clamp(0.7rem, 2vw, 1rem)",
                                padding: "clamp(0.4rem, 1vw, 0.75rem) clamp(0.8rem, 3vw, 1.5rem)",
                                background: "linear-gradient(to right, #e99b63, #a7a7a7)",
                                color: "#000",
                            }}
                            onClick={(e) => handleLinkClick(e, "portfolio")}
                        >
                            Explore Our Portfolio
                        </a>

                        <a
                            href="about"
                            className="cursor-pointer flex justify-center items-center border border-gray-400 text-white rounded-full font-medium hover:bg-white/10 transition-all duration-300 w-full sm:w-auto"
                            style={{
                                fontSize: "clamp(0.7rem, 2vw, 1rem)",
                                padding: "clamp(0.4rem, 1vw, 0.75rem) clamp(0.8rem, 3vw, 1.5rem)",
                            }}
                            onClick={(e) => handleLinkClick(e, "about")}
                        >
                            Learn More
                        </a>
                    </motion.div>
                </div>

                {/* Right section */}
                <div className="hidden md:block absolute top-0 right-0 w-full md:w-1/2 h-full pointer-events-auto z-10">
                    <motion.div
                        className="w-full h-full scale-[0.9] md:scale-100 origin-top-right opacity-40 md:opacity-100"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        {/** Load Spline only when in view */}
                        {inView && (
                            <Suspense fallback={<div className="text-white">Loading 3D scene…</div>}>
                                <Spline scene="https://prod.spline.design/E8DOI9qC4iGcFj49/scene.splinecode" />
                            </Suspense>
                        )}
                    </motion.div>
                </div>
            </motion.div>

            {/* Floating Badge */}
            <motion.div
                className="hidden md:flex absolute bottom-12 md:bottom-4 right-4
       w-[220px] h-[80px] bg-gradient-to-r from-[#1c1c1c]/80 to-[#2a2a2a]/80
       backdrop-blur-xl rounded-2xl items-center gap-4 p-4
       shadow-[0_4px_20px_rgba(0,0,0,0.4)] border border-white/10
       cursor-pointer hover:scale-105
       hover:shadow-[0_0_25px_rgba(182,146,49,0.5)]
       focus:outline-none focus:ring-2 focus:ring-[#e99b63]
       transition-all duration-300 z-20"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 1 }}
                role="button"
                tabIndex={0}
                aria-label="AI-Driven Financial Services"
            >
                {/* Icon */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#e99b63] to-[#b88a4a] flex items-center justify-center shadow-md">
                    <img
                        src={assets.chatbot}
                        alt="AI-Driven Financial Services"
                        width={150}
                        height={150}
                        className="w-12 h-12 object-cover rounded-full"
                    />
                </div>

                {/* Text */}
                <div className="flex flex-col">
                    <span className="text-sm font-bold text-white tracking-wide">AI-Driven</span>
                    <span className="text-xs text-gray-300">Financial Services</span>
                </div>
            </motion.div>
        </section>
    );
};

export default memo(Hero);
