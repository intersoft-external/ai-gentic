import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";
import { RiMenu3Line } from "react-icons/ri";
import { assets } from "../assets/assets.ts";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [showNav, setShowNav] = useState(true);
    const lastScrollY = useRef(0);

    const navItems = ["Home", "About", "Approach", "Portfolio", "Team"];

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            if (currentScroll > lastScrollY.current) {
                setShowNav(false);
            } else {
                setShowNav(true);
            }
            lastScrollY.current = currentScroll;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
    }, [isOpen]);

    // Smooth scroll handler
    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
        e.preventDefault();
        const section = document.getElementById(id);
        if (section) {
            window.scrollTo({
                top: section.offsetTop - 80,
                behavior: "smooth",
            });
        }
        setIsOpen(false);
    };

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 
                ${showNav ? "translate-y-0" : "-translate-y-full"} 
                bg-black/50 backdrop-blur-md`}
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4 lg:px-10 lg:py-3">
                {/* Logo */}
                <div className="flex items-center space-x-2 cursor-pointer">
                    <img
                        className="rounded-md"
                        alt="AiGentic Group Logo"
                        width={40}
                        height={20}
                        src={assets.logo}
                        loading="lazy"
                        decoding="async"
                    />
                    <div className="flex flex-col">
                        <span className="text-lg font-bold text-[#B69231]">AiGentic</span>
                        <span className="text-xs text-gray-400 font-medium -mt-1">GROUP</span>
                    </div>
                </div>

                {/* Desktop Nav */}
                <nav className="hide-desktop hidden md:flex items-center gap-12">
                    {navItems.map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="relative uppercase cursor-pointer text-base tracking-wider text-white transition-colors hover:text-[#B69231] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#B69231] after:transition-all after:duration-300 hover:after:w-full"
                            onClick={(e) => handleLinkClick(e, item.toLowerCase())}
                        >
                            {item}
                        </a>
                    ))}
                </nav>

                {/* Desktop CTA */}
                <a
                    href="contact"
                    className="hide-desktop hidden md:block py-2 px-6 rounded-full btn cursor-pointer"
                    onClick={(e) => handleLinkClick(e, "contact")}
                >
                    Contact US
                </a>

                {/* Hamburger */}
                <button
                    className="show-hamburger md:hidden z-50"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle navigation menu"
                >
                    <RiMenu3Line size={28} />
                </button>
            </div>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
                    onClick={() => setIsOpen(false)}
                    aria-hidden="true"
                />
            )}

            {/* Mobile Drawer */}
            <div
                className={`fixed top-0 right-0 h-screen w-3/4 
                    bg-black/80 backdrop-blur-2xl border-l border-white/20 
                    z-50 transform transition-transform duration-500 ease-in-out 
                    ${isOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                <button
                    className="absolute top-6 right-6 text-white hover:text-gray-300"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close navigation menu"
                >
                    <X size={28} />
                </button>

                <div className="flex flex-col items-center mt-28 h-full gap-10 text-white">
                    {navItems.map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-lg uppercase tracking-wide font-medium hover:text-gray-300 transition-colors"
                            onClick={(e) => handleLinkClick(e, item.toLowerCase())}
                        >
                            {item}
                        </a>
                    ))}
                    <a
                        href="contact"
                        className="btn py-3 px-10 rounded-full cursor-pointer"
                        onClick={(e) => handleLinkClick(e, "contact")}
                    >
                        Contact US
                    </a>
                </div>
            </div>
        </header>
    );
}
