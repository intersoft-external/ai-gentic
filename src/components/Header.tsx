import {useState, useEffect} from "react";
import {X} from "lucide-react";
import {RiMenu3Line} from "react-icons/ri";
import {assets} from "../assets/assets.ts";
import { Link } from "react-scroll";
export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [showNav, setShowNav] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const navItems = ["Home", "About", "Approach", "Portfolio", "Team", "Contact"];

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
            {/*<img className="h-14" src={assets.logo} alt=""/>*/}
            {/*logo*/}
            <div className="flex items-center space-x-3 ">
                <div className="relative">
                    <img className={"rounded-md"} alt="AiGentic Group Logo"  width="48" height="24"
                                               src={assets.logo}/></div>
                <div className="flex flex-col">
                    <span className="text-xl font-bold text-[#B69231]">
                        AiGentic
                    </span>
                    <span className="text-xs text-brand-gray font-medium -mt-1">
                        GROUP
                    </span>
                </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-12">
                {navItems.map((item) => (
                    <Link
                        key={item}
                        to={item.toLowerCase()}
                        smooth={true}
                        duration={600}
                        offset={-80}
                        className="relative uppercase cursor-pointer text-base tracking-wider text-white transition-colors hover:text-[#B69231] z-50
                 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#B69231] after:transition-all after:duration-300 hover:after:w-full"
                    >
                        {item}
                    </Link>
                ))}
            </nav>

            {/* Desktop Button */}
            <Link
                to="contact"
                smooth={true}
                duration={600}
                offset={-80}
                className="hidden md:block py-2 px-6 rounded-full btn z-50 cursor-pointer"
            >
                Contact US
            </Link>


            {/* Hamburger */}
            <button className="md:hidden z-50" onClick={() => setIsOpen(!isOpen)}>
                <RiMenu3Line size={28}/>
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
                    <X size={28}/>
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
                    <Link
                        to="contact"
                        smooth={true}
                        duration={600}
                        offset={-80}
                        className="btn py-3 px-10 rounded-full cursor-pointer"
                        onClick={() => setIsOpen(false)}
                    >
                        Contact US
                    </Link>

                </div>
            </div>
        </header>
    );
}
