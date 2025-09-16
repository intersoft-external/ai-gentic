import Slider from "react-slick";
import { motion } from "framer-motion";
import { assets } from "../assets/assets.ts";

export default function Clients() {
    const logos = [
        assets.partner1,
        assets.partner2,
        assets.partner3,
        assets.partner4,
        assets.partner5,
        assets.partner6,
        assets.partner7,
        assets.partner8,
    ];

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 5000,
        cssEase: "linear",
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        responsive: [
            { breakpoint: 1280, settings: { slidesToShow: 5 } },
            { breakpoint: 1024, settings: { slidesToShow: 4 } },
            { breakpoint: 768, settings: { slidesToShow: 3 } },
            { breakpoint: 480, settings: { slidesToShow: 2 } },
        ],
    };

    return (
        <section className="relative py-12 md:py-16 overflow-hidden">
            <div className="px-6 md:px-12 max-w-7xl mx-auto">
                <div className="flex flex-col items-center text-center">
                    <motion.h2
                        className="text-white text-2xl md:text-3xl font-light"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        The most <b className="font-semibold">innovative</b> financial leaders trust{" "}
                        <b className="font-semibold">AiGentic</b>
                        <br />
                        To power intelligence in the markets
                    </motion.h2>

                    <motion.div
                        className="relative mt-10 w-full"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            hidden: {},
                            visible: {
                                transition: { staggerChildren: 0.15 }
                            }
                        }}
                    >
                        {/* Fading edges */}
                        <div className="pointer-events-none absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-black to-transparent z-10"></div>
                        <div className="pointer-events-none absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-black to-transparent z-10"></div>

                        <Slider {...settings}>
                            {logos.map((logo, i) => (
                                <motion.div
                                    key={i}
                                    className="flex items-center justify-center"
                                    variants={{
                                        hidden: { opacity: 0, scale: 0.9 },
                                        visible: { opacity: 1, scale: 1 }
                                    }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                >
                                    <img
                                        src={logo}
                                        alt={`logo-${i}`}
                                        className="max-h-10 object-contain invert brightness-100 hover:scale-105 transition-transform"
                                    />
                                </motion.div>
                            ))}
                        </Slider>
                    </motion.div>

                    <motion.div
                        className="flex items-center justify-center mt-12 gap-4 w-full"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex-1 h-px bg-gray-700"></div>
                        <img
                            src={assets.star}
                            alt="star-spin"
                            className="animate-spin-slow w-6 h-6"
                        />
                        <div className="flex-1 h-px bg-gray-700"></div>
                    </motion.div>
                </div>
            </div>

            {/* Background Glow */}
            <motion.div
                className="absolute inset-0 -z-10 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <div className="w-[40rem] h-[40rem] bg-gradient-to-tr from-[#e99b63]/30 via-transparent to-indigo-500/20 rounded-full blur-[120px]"></div>
            </motion.div>
        </section>
    );
}
