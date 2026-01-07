"use client";

import { useState, useEffect } from "react";
import { Menu, X, Calendar, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/atom/ThemeToggle";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLink = {
  name: string;
  href: string;
  children?: { name: string; href: string }[];
};

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks: NavLink[] = [
    { name: "Capabilities", href: "/#capabilities" },
    { name: "Process", href: "/#process" },
    { name: "Solutions", href: "/#solutions" },
    {
      name: "Products",
      href: "/#products",
      children: [
        { name: "Devsko", href: "/devsko" },
        { name: "Revsko", href: "/revsko" },
      ],
    },
    {
      name: "Blogs",
      href: "#",
      children: [
        { name: "AI Engineering Trends", href: "#" },
        { name: "MLOps Best Practices", href: "#" },
        { name: "Future of Automation", href: "#" },
      ],
    },
    {
      name: "Case Studies",
      href: "/#case-studies",
      children: [
        { name: "Hiring Automation", href: "/#case-studies" },
        { name: "CPG Claim Automation", href: "/#case-studies" },
        { name: "Enterprise Workflow", href: "/#case-studies" },
      ],
    },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50  bg-transparent `}>
        <div
          className={cn(
            "max-w-7xl md:mx-auto px-1 sm:px-6 lg:px-8 transition-all duration-300 mt-2 mx-2",
            scrolled
              ? "bg-white/80 backdrop-blur-xl shadow-lg rounded-full dark:bg-slate-900/80 dark:border dark:border-white/5"
              : "bg-transparent backdrop-blur-none"
          )}
        >
          <div className="flex justify-between items-center h-14  md:h-14">
            {/* Logo */}
            <div className="shrink-0 z-50">
              <a href="/" className="group flex items-center">
                <img
                  src="/logo.png"
                  alt="coedify"
                  height={150}
                  width={170}
                  className="dark:invert dark:brightness-200 transition-all duration-300 pb-1"
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link, index) => (
                <div
                  key={index}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    onClick={handleLinkClick}
                    className={cn(
                      "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-1",
                      pathname === link.href
                        ? "text-gray-900 dark:text-white"
                        : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                    )}
                  >
                    {link.name}
                    {link.children && (
                      <ChevronDown
                        size={14}
                        className={cn(
                          "transition-transform duration-300",
                          activeDropdown === link.name ? "rotate-180" : ""
                        )}
                      />
                    )}
                    <span
                      className={cn(
                        "absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-linear-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-400 transition-all duration-300 group-hover:w-3/4",
                        pathname === link.href ? "w-3/4" : ""
                      )}
                    ></span>
                  </Link>

                  {/* Dropdown Menu */}
                  {link.children && (
                    <div
                      className={cn(
                        "absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-300 origin-top w-48",
                        activeDropdown === link.name
                          ? "opacity-100 translate-y-0 visible"
                          : "opacity-0 -translate-y-2 invisible"
                      )}
                    >
                      <div className="bg-white dark:bg-slate-900 border border-gray-100 dark:border-white/5 shadow-xl rounded-2xl overflow-hidden p-2">
                        {link.children.map((child, childIndex) => (
                          <Link
                            key={childIndex}
                            href={child.href}
                            onClick={handleLinkClick}
                            className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-white/5 rounded-xl transition-colors"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop CTA Button & Theme Toggle */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="https://calendar.app.google/PDsuNkzSCVGXvhio8"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-6 py-2.5 bg-blue-500 text-white rounded-xl font-semibold text-sm transition-all duration-300 overflow-hidden inline-flex items-center space-x-2 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <Calendar size={18} />
                  <span>Book a Call</span>
                </span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <ThemeToggle />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative z-50 p-2 rounded-lg text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        <div
          className={cn(
            "md:hidden absolute top-0 left-0 w-full h-screen bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl transition-all duration-300",
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          )}
        >
          <div className="flex flex-col items-center justify-center min-h-full py-20 px-6 space-y-4 overflow-y-auto">
            {navLinks.map((link, index) => (
              <div key={index} className="w-full text-center">
                <div className="flex flex-col items-center">
                  <div className="flex items-center gap-2">
                    <Link
                      href={link.href}
                      onClick={() => !link.children && handleLinkClick()}
                      className={cn(
                        "text-2xl font-semibold transition-all duration-300",
                        pathname === link.href
                          ? "text-blue-500"
                          : "text-gray-900 dark:text-white"
                      )}
                    >
                      {link.name}
                    </Link>
                    {link.children && (
                      <button
                        onClick={() =>
                          setActiveDropdown(
                            activeDropdown === link.name ? null : link.name
                          )
                        }
                        className="p-2 text-gray-500"
                      >
                        <ChevronDown
                          size={24}
                          className={cn(
                            "transition-transform duration-300",
                            activeDropdown === link.name ? "rotate-180" : ""
                          )}
                        />
                      </button>
                    )}
                  </div>

                  {/* Mobile Dropdown items */}
                  {link.children && (
                    <div
                      className={cn(
                        "overflow-hidden transition-all duration-300 space-y-4 pt-4",
                        activeDropdown === link.name
                          ? "max-h-[300px] opacity-100"
                          : "max-h-0 opacity-0"
                      )}
                    >
                      {link.children.map((child, childIndex) => (
                        <Link
                          key={childIndex}
                          href={child.href}
                          onClick={handleLinkClick}
                          className="block text-xl text-gray-600 dark:text-gray-400 hover:text-blue-500"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
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
            <div className="absolute top-20 right-10 w-32 h-32 bg-linear-to-br from-gray-200 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-full filter blur-3xl opacity-50"></div>
            <div className="absolute bottom-20 left-10 w-40 h-40 bg-linear-to-br from-gray-300 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-full filter blur-3xl opacity-50"></div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavMenu;
