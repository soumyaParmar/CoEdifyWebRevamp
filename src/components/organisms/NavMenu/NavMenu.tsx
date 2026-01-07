"use client";

import { useState, useEffect } from "react";
import { Menu, X, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Capabilities", href: "#capabilities" },
    { name: "Process", href: "#process" },
    { name: "Solutions", href: "#solutions" },
    { name: "Products", href: "#products" },
    { name: "Case Studies", href: "#case-studies" },
  ];

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    setActiveSection(href);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50  bg-transparent `}>
        <div
          className={cn(
            "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 mt-2",
            scrolled
              ? "bg-white/80 backdrop-blur-xl shadow-lg rounded-full"
              : "bg-transparent backdrop-blur-none"
          )}
        >
          <div className="flex justify-between items-center h-16 md:h-16">
            {/* Logo */}
            <div className="shrink-0 z-50">
              <a href="/" className="group flex items-center">
                <img src="/logo.png" alt="coedify" height={150} width={170} />
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={() => setActiveSection(link.href)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative group ${
                    activeSection === link.href
                      ? "text-gray-900"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-linear-to-r from-gray-900 to-gray-700 transition-all duration-300 group-hover:w-3/4 ${
                      activeSection === link.href ? "w-3/4" : ""
                    }`}
                  ></span>
                </a>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden md:block">
              <a
                href="https://calendar.app.google/PDsuNkzSCVGXvhio8"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-6 py-2.5 bg-blue-500 text-white rounded-xl font-semibold text-sm transition-all duration-300 overflow-hidden inline-flex items-center space-x-2"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <Calendar size={18} />
                  <span>Book a Call</span>
                </span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative z-50 p-2 rounded-lg text-gray-900 hover:bg-gray-100 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-0 left-0 w-full h-screen bg-white/95 backdrop-blur-xl transition-all duration-300 ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8 px-6">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                className={`text-2xl font-semibold transition-all duration-300 relative group ${
                  isOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <span
                  className={`transition-colors duration-300 ${
                    activeSection === link.href
                      ? "text-gray-900"
                      : "text-gray-600 group-hover:text-gray-900"
                  }`}
                >
                  {link.name}
                </span>
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-gray-900 to-gray-700 transition-all duration-300 group-hover:w-full ${
                    activeSection === link.href ? "w-full" : ""
                  }`}
                ></span>
              </a>
            ))}

            {/* Mobile CTA Button */}
            <a
              href="https://calendar.app.google/PDsuNkzSCVGXvhio8"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className={`group relative px-6 py-2.5 bg-blue-500 text-white rounded-xl font-semibold text-sm transition-all duration-300 overflow-hidden inline-flex items-center space-x-2 ${
                isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <Calendar size={20} />
              <span>Book a Call</span>
            </a>

            {/* Decorative Elements */}
            <div className="absolute top-20 right-10 w-32 h-32 bg-linear-to-br from-gray-200 to-gray-100 rounded-full filter blur-3xl opacity-50"></div>
            <div className="absolute bottom-20 left-10 w-40 h-40 bg-linear-to-br from-gray-300 to-gray-200 rounded-full filter blur-3xl opacity-50"></div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavMenu;
