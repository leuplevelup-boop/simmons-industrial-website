"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Services", href: "#services" },
  { name: "Case Studies", href: "#case-studies" },
  { name: "About", href: "#why-choose-us" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="bg-[#111118] border-b border-[#2a2a35] py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:02086883553" className="flex items-center gap-2 text-[#6b7280] hover:text-[#e8b923] transition-colors">
              <Phone size={14} />
              <span className="hidden sm:inline">020 8688 3553</span>
            </a>
            <a href="mailto:info@simmons-industrial.co.uk" className="flex items-center gap-2 text-[#6b7280] hover:text-[#e8b923] transition-colors">
              <Mail size={14} />
              <span className="hidden sm:inline">info@simmons-industrial.co.uk</span>
            </a>
          </div>
          <div className="text-[#6b7280] text-xs">
            Mon - Fri: 7:45am - 5:00pm
          </div>
        </div>
      </div>

      {/* Main nav */}
      <motion.nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "nav-blur shadow-lg" : "bg-[#0a0a0f]"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3">
              <Image
                src="/images/logo-icon.svg"
                alt="Simmons Industrial"
                width={48}
                height={48}
                className="w-10 h-10"
              />
              <div className="hidden sm:block">
                <div className="text-lg font-bold text-white leading-tight">
                  Simmons <span className="text-[#e8b923]">Industrial</span>
                </div>
                <div className="text-[10px] text-[#6b7280] tracking-widest uppercase">
                  Services Ltd
                </div>
              </div>
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-[#9ca3af] hover:text-[#e8b923] transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#e8b923] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
              <a
                href="tel:02086883553"
                className="btn-primary text-sm"
              >
                <Phone size={16} />
                Call Now
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-[#0a0a0f]/98 z-40 flex flex-col items-center justify-center gap-8 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-bold text-white hover:text-[#e8b923] transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="tel:02086883553"
              className="btn-primary mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Phone size={20} />
              020 8688 3553
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
