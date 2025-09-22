import { useState, memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";

import { assets } from "../assets/assets";
import { FaLinkedin } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface TeamMember {
    name: string;
    role: string;
    img: string;
    linkedin: string;
    desc: string;
}

const team: TeamMember[] = [
    { name: "Jane Smith", role: "CEO & Founder", img: assets.team1, linkedin: "https://linkedin.com/in/jane", desc: "Jane leads our company with vision and passion." },
    { name: "Michael Johnson", role: "Head of AI Engineering", img: assets.team2, linkedin: "https://linkedin.com/in/michael", desc: "Expert in AI with 10+ years building systems." },
    { name: "Sophia Lee", role: "Chief Strategy Officer", img: assets.team3, linkedin: "https://linkedin.com/in/sophia", desc: "Focused on market expansion and growth." },
    { name: "David Chen", role: "Head of Financial Markets", img: assets.team4, linkedin: "https://linkedin.com/in/david", desc: "Specialist in trading strategies and risk management." },
    { name: "Olivia Brown", role: "Marketing Director", img: assets.team2, linkedin: "https://linkedin.com/in/olivia", desc: "Driving brand awareness and campaigns worldwide." },
    { name: "Ethan Wilson", role: "Lead Software Engineer", img: assets.team1, linkedin: "https://linkedin.com/in/ethan", desc: "Full-stack dev making scalable applications." },
];

function OurTeam() {
    const [currentSlide, setCurrentSlide] = useState(0);

    return (
            <section id={"team"} className="w-full bg-black text-white py-20 px-6 lg:px-28 relative" aria-labelledby="team-heading">
                <div className="relative max-w-7xl mx-auto">

                    {/* Header */}
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <h2 id="team-heading" className="text-3xl md:text-4xl lg:text-5xl heading">
                            Our <span className="gradient-text">Team</span>
                        </h2>
                        <p className="mt-4 text-gray-400 max-w-3xl mx-auto">
                            Meet the people behind our success across technology, strategy, and growth.
                        </p>
                    </motion.div>

                    {/* Swiper */}
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={20}
                        loop
                        navigation={{
                            prevEl: ".custom-prev",
                            nextEl: ".custom-next",
                        }}
                        breakpoints={{
                            1280: { slidesPerView: 4 },
                            1024: { slidesPerView: 3 },
                            768: { slidesPerView: 2 },
                            0: { slidesPerView: 1 },
                        }}
                        onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
                        aria-roledescription="carousel"
                    >
                        {team.map((member) => (
                            <SwiperSlide key={member.name}>
                                <motion.article
                                    className="group relative rounded-2xl shadow-lg h-[400px] overflow-hidden will-change-transform"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -5, scale: 1.02 }}
                                >
                                    {/* Background Image */}
                                    <img
                                        src={member.img}
                                        alt={`${member.name}, ${member.role}`}
                                        className="absolute inset-0 w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                                    {/* Info */}
                                    <div className="absolute bottom-6 left-6 right-6 z-10">
                                        <h3 className="text-xl font-semibold">{member.name}</h3>
                                        <p className="text-sm text-gray-300">{member.role}</p>
                                    </div>

                                    {/* Hover Overlay */}
                                    <div
                                        className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out backdrop-blur-md z-20 flex flex-col justify-center items-center p-6 text-center"
                                        style={{ backgroundImage: `url(${assets.gradientbg})` }}
                                    >
                                        <p className="text-gray-300 mb-4">{member.desc}</p>
                                        <a
                                            href={member.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 bg-blue-950 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition-transform duration-200"
                                            aria-label={`Connect with ${member.name} on LinkedIn`}
                                        >
                                            <FaLinkedin className="w-5 h-5" aria-hidden="true" />
                                            Connect
                                        </a>
                                    </div>
                                </motion.article>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Progress Bar */}
                    <div className="max-w-lg mx-auto mt-6 relative h-[2px] bg-gray-700">
                        <motion.div
                            className="absolute top-0 left-0 h-full bg-white"
                            animate={{ width: `${((currentSlide + 1) / team.length) * 100}%` }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        />
                    </div>

                    {/* Custom Arrows */}
                    <button
                        className="custom-prev absolute top-1/2 left-2 md:left-5 lg:-left-12 translate-y-4 z-20 bg-[#B69231] text-black rounded-full p-2 shadow-md hover:text-white transition"
                        aria-label="Previous team member"
                    >
                        <ChevronLeft className="w-6 h-6" aria-hidden="true" />
                    </button>

                    <button
                        className="custom-next absolute top-1/2 right-2 md:right-5 lg:-right-12 translate-y-4 z-20 bg-[#B69231] text-black rounded-full p-2 shadow-md hover:text-white transition"
                        aria-label="Next team member"
                    >
                        <ChevronRight className="w-6 h-6" aria-hidden="true" />
                    </button>
                </div>
            </section>
    );
}

export default memo(OurTeam);
