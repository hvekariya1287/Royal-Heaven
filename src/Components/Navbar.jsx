import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Crown, Phone, Mail } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "Home" },
    { name: "Properties", path: "Properties" },
    { name: "About", path: "About" },
    { name: "Services", path: "Services" },
    { name: "Contact", path: "Contact" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-[#0b1c2d] text-white py-2">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a
              href="tel:+1234567890"
              className="flex items-center gap-2 hover:text-[#d4af37] transition-colors"
            >
              <Phone className="w-4 h-4" />
              +1 (234) 567-890
            </a>
            <a
              href="mailto:info@royalhaven.com"
              className="flex items-center gap-2 hover:text-[#d4af37] transition-colors"
            >
              <Mail className="w-4 h-4" />
              info@royalhaven.com
            </a>
          </div>
          <div className="text-[#d4af37]">Experience Luxury Living</div>
        </div>
      </div>

      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0b1c2d]/95 backdrop-blur-lg shadow-2xl py-3"
            : "bg-transparent py-6"
        }`}
        style={{ top: scrolled ? 0 : "40px" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              to={createPageUrl("Home")}
              className="flex items-center gap-3 group"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <Crown className="w-10 h-10 text-[#d4af37]" />
                <div className="absolute inset-0 bg-[#d4af37]/20 blur-xl rounded-full" />
              </motion.div>
              <div>
                <h1 className="text-2xl font-serif font-bold text-white tracking-wider">
                  ROYAL <span className="text-[#d4af37]">HAVEN</span>
                </h1>
                <p className="text-[10px] text-white/60 tracking-[0.3em] uppercase">
                  Luxury Estates
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={createPageUrl(link.path)}
                  className="relative group"
                >
                  <span
                    className={`text-sm font-medium tracking-wide transition-colors ${
                      location.pathname.includes(link.path.toLowerCase()) ||
                      (link.path === "Home" && location.pathname === "/")
                        ? "text-[#d4af37]"
                        : "text-white hover:text-[#d4af37]"
                    }`}
                  >
                    {link.name}
                  </span>
                  <motion.span
                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#d4af37] to-[#f4e4bc]"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              ))}
              <Link
                to={createPageUrl("Contact")}
                className="ml-4 px-6 py-3 bg-gradient-to-r from-[#d4af37] to-[#b8962e] text-[#0b1c2d] font-semibold text-sm rounded-full hover:shadow-lg hover:shadow-[#d4af37]/30 transition-all duration-300 transform hover:scale-105"
              >
                Book a Visit
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white p-2"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-[#0b1c2d]/98 backdrop-blur-lg border-t border-[#d4af37]/20"
            >
              <div className="px-6 py-8 space-y-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={createPageUrl(link.path)}
                    onClick={() => setIsOpen(false)}
                    className={`block text-lg font-medium ${
                      location.pathname.includes(link.path.toLowerCase())
                        ? "text-[#d4af37]"
                        : "text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  to={createPageUrl("Contact")}
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-[#d4af37] to-[#b8962e] text-[#0b1c2d] font-semibold rounded-full"
                >
                  Book a Visit
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
