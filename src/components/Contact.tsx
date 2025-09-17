"use client";

import { motion } from "framer-motion";
import { Element } from "react-scroll";

export default function Contact() {
    return (
        <Element name="contact">
            <section
                className="relative w-full min-h-screen bg-black text-white py-20 px-6 lg:px-28"
                aria-labelledby="contact-heading"
            >
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left - Info */}
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <h1
                            id="contact-heading"
                            className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wide leading-tight"
                        >
                            Powering{" "}
                            <span className="gradient-text">smarter</span>{" "}
                            financial solutions with AI.
                        </h1>
                        <p className="text-gray-300 text-lg">
                            We help businesses and individuals unlock the future of
                            finance through AI-driven insights, automated strategies,
                            and innovative digital solutions designed to accelerate growth.
                        </p>

                        <motion.address
                            className="mt-6 space-y-4 text-gray-400 not-italic"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                visible: { transition: { staggerChildren: 0.2 } },
                            }}
                        >
                            {[
                                {
                                    label: "Email",
                                    value: (
                                        <a
                                            href="mailto:info@aigenticgroup.com.au"
                                            className="hover:underline"
                                        >
                                            info@aigenticgroup.com.au
                                        </a>
                                    ),
                                },
                                {
                                    label: "Head Office",
                                    value: "Perth, Western Australia",
                                },
                                {
                                    label: "Note",
                                    value: "For investment opportunities and strategic partnerships.",
                                },
                            ].map((item, i) => (
                                <motion.p
                                    key={i}
                                    className="text-gray-400"
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0 },
                                    }}
                                >
                                    <span className="font-bold text-gray-100">
                                        {item.label}:
                                    </span>{" "}
                                    {item.value}
                                </motion.p>
                            ))}
                        </motion.address>
                    </motion.div>

                    {/* Right - Contact Form */}
                    <motion.div
                        className="bg-gray-900/80 backdrop-blur-md p-10 rounded-2xl shadow-xl"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <form
                            className="space-y-6"
                            aria-label="Contact form"
                            onSubmit={(e) => e.preventDefault()}
                        >
                            <div className="flex flex-col md:flex-row gap-4">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name*"
                                    aria-label="Your name"
                                    required
                                    className="flex-1 bg-transparent border-b border-gray-600 py-2 px-1 placeholder-gray-400 focus:outline-none focus:border-blue-800"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email*"
                                    aria-label="Your email"
                                    required
                                    className="flex-1 bg-transparent border-b border-gray-600 py-2 px-1 placeholder-gray-400 focus:outline-none focus:border-blue-800"
                                />
                            </div>
                            <textarea
                                name="message"
                                rows={5}
                                placeholder="Comment*"
                                aria-label="Your message"
                                required
                                className="w-full bg-transparent border-b border-gray-600 py-2 px-1 placeholder-gray-400 focus:outline-none focus:border-blue-800 resize-none"
                            ></textarea>
                            <motion.button
                                type="submit"
                                className="btn py-3 px-10 rounded-full"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Send Inquiry
                            </motion.button>
                        </form>
                    </motion.div>
                </div>

                {/* Background Gradient */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-transparent to-[#e99b63] opacity-40 pointer-events-none"></div>
            </section>
        </Element>
    );
}
