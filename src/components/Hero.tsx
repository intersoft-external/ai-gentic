import {Gem} from "lucide-react";
import Spline from "@splinetool/react-spline";
import {motion} from "framer-motion";
import {Link} from "react-scroll";
import {memo} from "react";
import {assets} from "../assets/assets.ts";

const Hero = () => {
    return (
        <section
            id="hero"
            className="relative w-full min-h-[50vh] md:min-h-[90vh] flex items-center overflow-hidden pt-24 md:pt-20"
        >
            <div className="relative z-10 grid grid-cols-12 gap-8 w-full max-w-7xl mx-auto px-1 lg:px-12">
                {/* Left section */}
                <div
                    className="col-span-12 md:col-span-6 flex flex-col justify-center text-left pt-10 sm:pt-14 px-4 sm:px-6 md:px-0">
                    {/* Badge */}
                    <motion.div
                        className="relative mb-4 sm:mb-6 w-max"
                        initial={{opacity: 0, y: -20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6, delay: 0.2}}
                    >
                        <div
                            className="w-44 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full">
                            <div
                                className="uppercase absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-2 text-sm tracking-wide text-white">
                                <Gem size={16} aria-hidden="true"/>
                                <span>Introducing</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Heading */}
                    <motion.h1
                        className="uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl heading"
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.7, delay: 0.4}}
                    >
                        Smarter AI-Driven
                        <br className="hidden sm:block"/>
                        Finance <span className="gradient-text">Solutions</span>
                    </motion.h1>

                    {/* Subheading */}
                    <motion.h2
                        className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 w-full max-w-full break-words"
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.7, delay: 0.6}}
                    >
                        Trusted by financial leaders worldwide,{" "}
                        <strong className="font-semibold">AiGentic</strong> delivers
                        <strong className="font-semibold"> AI-powered financial solutions</strong>{" "}
                        that help businesses automate workflows, scale efficiently, and
                        succeed in the digital economy.
                    </motion.h2>

                    {/* Buttons */}
                    <motion.div
                        className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full"
                        initial={{opacity: 0, y: 40}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, delay: 0.8}}
                    >
                        <Link
                            to="portfolio"
                            aria-label="Explore Our Portfolio"
                            smooth
                            duration={600}
                            className="cursor-pointer bg-gradient-to-r from-[#e99b63] to-[#a7a7a7] text-black py-2.5 sm:py-3 px-4 sm:px-6 rounded-full font-medium hover:opacity-90 transition-all duration-300 shadow-lg w-full sm:w-auto text-sm sm:text-base"
                        >
                            Explore Our Portfolio
                        </Link>

                        <Link
                            to="about"
                            aria-label="Learn More About AiGentic"
                            smooth
                            duration={600}
                            className="cursor-pointer border border-gray-400 text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-full font-medium hover:bg-white/10 transition-all duration-300 w-full sm:w-auto text-sm sm:text-base"
                        >
                            Learn More
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Right section */}
            <div className="hidden md:block absolute top-0 right-0 w-full md:w-1/2 h-full pointer-events-auto z-10">
                <motion.div
                    className="w-full h-full scale-[0.9] md:scale-100 origin-top-right opacity-40 md:opacity-100"
                    initial={{opacity: 0, scale: 0.95}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 1, delay: 0.5}}
                >
                    <Spline scene="https://prod.spline.design/E8DOI9qC4iGcFj49/scene.splinecode"/>
                </motion.div>
            </div>

            {/* Floating Badge */}
            <motion.div
                className="hidden md:flex absolute bottom-12 md:bottom-4 right-4 w-[220px] h-[80px] bg-gradient-to-r from-[#1c1c1c]/80 to-[#2a2a2a]/80 backdrop-blur-xl rounded-2xl items-center gap-4 p-4 shadow-[0_4px_20px_rgba(0,0,0,0.4)] border border-white/10 cursor-pointer
             hover:scale-105 hover:shadow-[0_0_25px_rgba(182,146,49,0.5)] transition-all duration-300 z-20"
                initial={{opacity: 0, x: 50}}
                animate={{opacity: 1, x: 0}}
                transition={{duration: 0.7, delay: 1}}
            >
                {/* Icon */}
                <div
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-[#e99b63] to-[#b88a4a] flex items-center justify-center shadow-md">
                    <img src={assets.chatbot} alt="AI Chatbot" className="w-14 h-14"/>
                </div>

                {/* Text */}
                <div className="flex flex-col">
    <span className="text-sm font-bold text-white tracking-wide">
      AI-Driven
    </span>
                    <span className="text-xs text-gray-300">
      Financial Services
    </span>
                </div>
            </motion.div>

        </section>
    );
};

// Memoized export to prevent unnecessary re-renders
export default memo(Hero);
