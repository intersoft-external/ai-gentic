import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { RiMenu3Line } from "react-icons/ri";
import { assets } from "../assets/assets.ts";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [showNav, setShowNav] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const navItems = ["Home", "About", "Portfolio", "Team", "Contact"];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setShowNav(false);
            } else {
                setShowNav(true);
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [isOpen]);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
                showNav ? "translate-y-0" : "-translate-y-full"
            } flex justify-between items-center py-4 px-4 lg:px-10 lg:py-3 bg-black/50 backdrop-blur-md`}
        >
            <img className="h-14" src={assets.logo} alt="" />

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-12">
                {navItems.map((item, i) => (
                    <a
                        key={i}
                        href="#"
                        className="uppercase text-base tracking-wider transition-colors hover:text-gray-300 z-50"
                    >
                        {item}
                    </a>
                ))}
            </nav>

            {/* Desktop Button */}
            <button className="hidden md:block py-2 px-6 rounded-full btn z-50">
                Contact US
            </button>

            {/* Hamburger */}
            <button className="md:hidden z-50" onClick={() => setIsOpen(!isOpen)}>
                <RiMenu3Line size={28} />
            </button>

            {/* Overlay (click to close) */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Mobile */}
            <div
                className={`fixed top-0 right-0 h-screen w-3/4 
          bg-black/80 backdrop-blur-2xl border-l border-white/20 
          z-50 transform transition-transform duration-500 ease-in-out 
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                {/* Close Button */}
                <button
                    className="absolute top-6 right-6 text-white hover:text-gray-300"
                    onClick={() => setIsOpen(false)}
                >
                    <X size={28} />
                </button>

                {/* Drawer Content */}
                <div className="flex flex-col items-center mt-28 h-full gap-10 text-white">
                    {navItems.map((item, i) => (
                        <a
                            key={i}
                            href="#"
                            className="text-lg uppercase tracking-wide font-medium hover:text-gray-300 transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            {item}
                        </a>
                    ))}
                    <button className="btn py-3 px-10 rounded-full"> Contact US</button>
                </div>
            </div>
        </header>
    );
}
