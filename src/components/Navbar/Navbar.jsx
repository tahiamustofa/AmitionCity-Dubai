import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import Subheader from "../Subheader/Subheader";

// Tabs Data
const TABS = [
    { id: 1, title: "Service", Component: () => <Subheader /> },
    { id: 2, title: "Business Setup", Component: () => (
        <div className="px-8 py-3">
            <h3 className="mb-2 text-sm font-medium">Tour Packages</h3>
            <a href="#" className="block text-sm text-black">Adventure Trips</a>
            <a href="#" className="block text-sm text-black">Honeymoon Packages</a>
            <a href="#" className="block text-sm text-black">Cultural Tours</a>
        </div>
    )},
    { id: 3, title: "Airlines Ticket", Component: () => (
        <div className="px-8 py-3">
            <h3 className="mb-2 text-sm font-medium">Company Info</h3>
            <a href="#" className="block text-sm text-black">Our Story</a>
            <a href="#" className="block text-sm text-black">Meet the Team</a>
            <a href="#" className="block text-sm text-black">Contact Us</a>
        </div>
    )}
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-[#fdfaf5] relative  z-50 px-3 md:px-5 w-full max-w-full mx-auto">
            <div className="container mx-auto flex justify-center items-center p-4">
                {/* Desktop Navigation */}
                <div className="hidden md:flex lg:space-x-4 md:space-x-2 items-center">
                    <NavLink to="/" className="hover:text-gray-500 text-sm">Home</NavLink>
                    <Tabs />
                    <NavLink to="/service" className="hover:text-gray-500 text-sm">Gallery</NavLink>
                    <NavLink to="/business-setup" className="hover:text-gray-500 text-sm">About us</NavLink>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-xl" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FaTimes /> : <button className="flex  gap-0.5 justify-center items-center"> Menu <FaBars /></button> }
                </button>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="md:hidden bg-white p-4 shadow-md flex flex-col space-y-2 w-full"
                    >
                        <NavLink to="/" className="block py-2" onClick={() => setIsOpen(false)}>Home</NavLink>
                        <MobileTabs />
                        <NavLink to="/service" className="block py-2" onClick={() => setIsOpen(false)}>Gallery</NavLink>
                        <NavLink to="/business-setup" className="block py-2" onClick={() => setIsOpen(false)}>About us</NavLink>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

// Desktop Tabs
const Tabs = () => {
    const [selected, setSelected] = useState(null);
    const [dir, setDir] = useState(null);

    const handleSetSelected = (val) => {
        if (typeof selected === "number" && typeof val === "number") {
            setDir(selected > val ? "r" : "l");
        } else if (val === null) {
            setDir(null);
        }
        setSelected(val);
    };

    return (
        <div onMouseLeave={() => handleSetSelected(null)} className="relative flex gap-2">
            {TABS.map((t) => (
                <Tab key={t.id} selected={selected} handleSetSelected={handleSetSelected} tab={t.id}>
                    {t.title}
                </Tab>
            ))}
            <AnimatePresence>
                {selected && <Content dir={dir} selected={selected} />}
            </AnimatePresence>
        </div>
    );
};

// Mobile Tabs
const MobileTabs = () => {
    const [selected, setSelected] = useState(null);

    return (
        <div className="flex flex-col space-y-2">
            {TABS.map((t) => (
                <div key={t.id}>
                    <button
                        className="w-full flex justify-between items-center py-2 text-sm font-medium text-left border-b"
                        onClick={() => setSelected(selected === t.id ? null : t.id)}
                    >
                        {t.title}
                        <FiChevronDown className={`transition-transform ${selected === t.id ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                        {selected === t.id && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="pl-4 pt-2"
                            >
                                <t.Component />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
};

// Tab Component
const Tab = ({ children, tab, handleSetSelected, selected }) => {
    return (
        <button
            id={`shift-tab-${tab}`}
            onMouseEnter={() => handleSetSelected(tab)}
            onClick={() => handleSetSelected(tab)}
            className={`flex items-center gap-1 text-sm transition-colors ${selected === tab ? "text-black" : "text-gray-700"}`}
        >
            <span>{children}</span>
            <FiChevronDown className={`transition-transform ${selected === tab ? "rotate-180" : ""}`} />
        </button>
    );
};

// Content Component for Tabs
const Content = ({ selected, dir }) => {
    return (
        <motion.div
            id="overlay-content"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="absolute left-0 top-[calc(100%_+_10px)] md:w-[550px] lg:w-[600px] xl:w-[700px] bg-white p-2 shadow-lg"
        >
            {TABS.map((t) => (
                selected === t.id && (
                    <motion.div
                        key={t.id}
                        initial={{ opacity: 0, x: dir === "l" ? 100 : dir === "r" ? -100 : 0 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                        <t.Component />
                    </motion.div>
                )
            ))}
        </motion.div>
    );
};

export default Navbar;
