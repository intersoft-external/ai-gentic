import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { assets } from "../assets/assets.ts";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function OurTeam() {
    const team = [
        {
            name: "Jane Smith",
            role: "CEO & Founder",
            img: assets.team1,
            linkedin: "https://linkedin.com/in/jane",
            desc: "Jane leads our company with vision and passion.",
        },
        {
            name: "Michael Johnson",
            role: "Head of AI Engineering",
            img: assets.team2,
            linkedin: "https://linkedin.com/in/michael",
            desc: "Expert in AI with 10+ years building systems.",
        },
        {
            name: "Sophia Lee",
            role: "Chief Strategy Officer",
            img: assets.team3,
            linkedin: "https://linkedin.com/in/sophia",
            desc: "Focused on market expansion and growth.",
        },
        {
            name: "David Chen",
            role: "Head of Financial Markets",
            img: assets.team4,
            linkedin: "https://linkedin.com/in/david",
            desc: "Specialist in trading strategies and risk management.",
        },
        {
            name: "Olivia Brown",
            role: "Marketing Director",
            img: assets.team2,
            linkedin: "https://linkedin.com/in/olivia",
            desc: "Driving brand awareness and campaigns worldwide.",
        },
        {
            name: "Ethan Wilson",
            role: "Lead Software Engineer",
            img: assets.team1,
            linkedin: "https://linkedin.com/in/ethan",
            desc: "Full-stack dev making scalable applications.",
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        beforeChange: (_oldIndex: number, newIndex: number) =>
            setCurrentSlide(newIndex),
        responsive: [
            { breakpoint: 1280, settings: { slidesToShow: 3 } },
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 640, settings: { slidesToShow: 1 } },
        ],
    };

    return (
        <section className="w-full bg-black text-white py-20 px-6 lg:px-28">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl heading">
                        Our <span className="gradient-text">Team</span>
                    </h2>
                    <p className="mt-4 text-gray-400 max-w-3xl mx-auto">
                        Meet the people behind our success across technology,
                        strategy, and growth.
                    </p>
                </motion.div>

                {/* Slider */}
                <Slider {...settings}>
                    {team.map((member, i) => (
                        <div key={i} className="px-4">
                            <motion.div
                                className="group relative rounded-2xl shadow-lg h-[400px] overflow-hidden"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.03 }}
                            >
                                {/* Background Image */}
                                <img
                                    src={member.img}
                                    alt={member.name}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                                {/* Info */}
                                <div className="absolute bottom-6 left-6 right-6 z-10">
                                    <h5 className="text-xl font-semibold">
                                        {member.name}
                                    </h5>
                                    <p className="text-sm text-gray-300">
                                        {member.role}
                                    </p>
                                </div>

                                <motion.div
                                    initial={{ y: "100%" }}
                                    whileHover={{ y: 0 }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    className="absolute inset-0 backdrop-blur-md z-20 flex flex-col justify-center items-center p-6 text-center"
                                    style={{
                                        backgroundImage: `url(${assets.gradientbg})`,
                                    }}
                                >
                                    <p className="text-gray-300 mb-4">
                                        {member.desc}
                                    </p>
                                    <motion.a
                                        href={member.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 bg-blue-950 hover:bg-blue-700 text-white px-4 py-2 rounded-full"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <FaLinkedin className="w-5 h-5" />
                                        Connect
                                    </motion.a>
                                </motion.div>
                            </motion.div>
                        </div>
                    ))}
                </Slider>

                <div className="max-w-lg mx-auto mt-6 relative h-[2px] bg-gray-700">
                    <motion.div
                        className="absolute top-0 left-0 h-full bg-white"
                        animate={{
                            width: `${((currentSlide + 1) / team.length) * 100}%`,
                        }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    />
                </div>
            </div>
        </section>
    );
}
