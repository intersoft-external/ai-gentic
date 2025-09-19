import { memo } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { assets } from "../assets/assets.ts";

const Clients = () => {
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

    return (
        <section className="relative py-10 md:py-16 overflow-hidden">
            <div className="px-6 md:px-12 max-w-7xl mx-auto">
                <div className="flex flex-col items-center text-center">
                    {/* Heading */}
                    <motion.h2
                        className="text-white text-xl md:text-2xl font-light"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        The <b className="font-semibold">smartest</b> financial leaders trust{" "}
                        <b className="font-semibold">AiGentic</b> to power <br /> market intelligence.
                    </motion.h2>

                    {/* Client logos carousel */}
                    <div className="relative mt-10 w-full">
                        {/* Edge fades */}
                        <div className="pointer-events-none absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-black to-transparent z-10" />
                        <div className="pointer-events-none absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-black to-transparent z-10" />

                        <Swiper
                            modules={[Autoplay]}
                            slidesPerView="auto"
                            spaceBetween={30}
                            loop
                            speed={5000}
                            autoplay={{ delay: 0, disableOnInteraction: false }}
                            watchSlidesProgress
                            breakpoints={{
                                480: { slidesPerView: 2 },
                                768: { slidesPerView: 3 },
                                1024: { slidesPerView: 5 },
                                1280: { slidesPerView: 5 },
                            }}
                        >
                            {logos.map((logo, i) => (
                                <SwiperSlide key={i} className="flex items-center justify-center">
                                    <img
                                        src={logo}
                                        alt={`Client logo ${i + 1}`}
                                        width={120}
                                        height={40}
                                        loading="lazy"
                                        className="max-h-10 object-contain invert brightness-100 hover:scale-105 transition-transform duration-300 ease-out"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>

            {/* Background glow */}
            <div className="absolute inset-0 -z-10 flex items-center justify-center">
                <div className="w-[40rem] h-[40rem] bg-gradient-to-tr from-[#e99b63]/30 via-transparent to-indigo-500/20 rounded-full blur-[120px]" />
            </div>
        </section>
    );
};

export default memo(Clients);
