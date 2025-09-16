import { Gem } from "lucide-react";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative w-full min-h-[60vh] md:min-h-[90vh] flex items-center overflow-hidden">
            <div className="relative z-10 grid grid-cols-12 gap-8 w-full max-w-[1400px] mx-auto px-6 lg:px-12">
                {/* Left section */}
                <div className="col-span-12 md:col-span-6 flex flex-col justify-center text-left pt-14">

                    <motion.div
                        className="relative w-fit mb-6"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="w-44 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full">
                            <div className="uppercase absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-2 text-sm tracking-wide text-white">
                                <Gem size={16} />
                                Introducing
                            </div>
                        </div>
                    </motion.div>

                    {/* Heading */}
                    <motion.h1
                        className="uppercase text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wide leading-tight text-white"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                    >
                        Smarter AI-Driven
                        <br />
                        Finance{" "}
                        <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                            Solutions
                        </span>
                    </motion.h1>

                    <motion.h3
                        className="mt-6 text-base md:text-lg lg:text-xl max-w-lg text-gray-300"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.6 }}
                    >
                        Empowering businesses with intelligent tools to automate,
                        scale, and thrive in the digital economy.
                    </motion.h3>

                    <motion.div
                        className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <button className="bg-gradient-to-r from-[#e99b63] to-[#a7a7a7] text-black py-3 px-8 rounded-full font-medium hover:opacity-90 transition-all duration-300 shadow-lg w-full sm:w-auto">
                            Explore Our Portfolio
                        </button>
                        <button className="border border-gray-400 text-white py-3 px-8 rounded-full font-medium hover:bg-white/10 transition-all duration-300 w-full sm:w-auto">
                            Contact Us
                        </button>
                    </motion.div>
                </div>
            </div>


            {/* Right side*/}
            <div className=" hidden md:block absolute top-0 right-0 w-full md:w-1/2 h-full pointer-events-auto z-10">
                <motion.div
                    className="w-full h-full scale-[0.9] md:scale-100 origin-top-right opacity-40 md:opacity-100"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <Spline scene="https://prod.spline.design/E8DOI9qC4iGcFj49/scene.splinecode" />
                </motion.div>
            </div>

            <motion.div
                className="hidden md:block absolute bottom-12 md:bottom-4 right-4 w-[180px] h-[60px] bg-white/10 backdrop-blur-md rounded-xl flex-col items-start justify-center p-2 shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300 z-20"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 1 }}
            >
                <span className="text-sm font-semibold text-white">AI-Driven</span> <br/>
                <span className="text-xs text-gray-200">Financial Services</span>
            </motion.div>

        </section>
    );
}
