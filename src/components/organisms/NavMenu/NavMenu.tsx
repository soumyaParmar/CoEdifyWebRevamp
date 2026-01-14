"use client";

import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Calendar,
  ChevronDown,
  Users,
  GitMerge,
  TrendingUp,
  Cpu,
  Zap,
  UserCheck,
  FileSpreadsheet,
  Workflow,
  LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/atom/ThemeToggle";
import MegaMenuCard from "@/components/molecules/MegaMenuCard/MegaMenuCard";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavChild = {
  name: string;
  description: string;
  href: string;
  icon: LucideIcon;
  logoUrl?: string;
  logoBg?: string;
};

type NavLink = {
  name: string;
  href: string;
  children?: NavChild[];
};

import { BlogSummary } from "@/types/blogs";

interface NavMenuProps {
  latestBlogs?: BlogSummary[];
}

const NavMenu = ({ latestBlogs = [] }: NavMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const blogLinks: NavChild[] = [
    ...latestBlogs.map((blog) => ({
      name: blog.title,
      description: "",
      href: `/blogs/${blog.slug}`,
      icon: TrendingUp,
      logoUrl: blog.image,
    })),
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks: NavLink[] = [
    // { name: "Capabilities", href: "/#capabilities" },
    // { name: "Process", href: "/#process" },
    // { name: "Solutions", href: "/#solutions" },
    { name: "Hire Developers", href: "/hire-developers" },
    {
      name: "Products",
      href: "/#products",
      children: [
        {
          name: "Devsko",
          description: "AI-powered skill assessment and interview platform.",
          href: "/devsko",
          icon: Users,
          logoUrl: "/images/products/devsko/devsko_logo_no_name.png",
        },
        {
          name: "Revsko",
          description: "Intelligent claims and workflow automation engine.",
          href: "/revsko",
          icon: GitMerge,
          logoUrl: "/images/products/revsko/revsko_logo_no_name.png",
          logoBg: "bg-slate-950 dark:bg-transparent",
        },
      ],
    },
    {
      name: "Blogs",
      href: "/blogs",
      children: blogLinks,
    },
    {
      name: "Case Studies",
      href: "/#case-studies",
      children: [
        {
          name: "Hiring Automation",
          description: "Reducing time-to-hire by 70% with AI screening.",
          href: "/#case-studies",
          icon: UserCheck,
        },
        {
          name: "Claim Automation",
          description: "Processing CPG claims with 99.9% accuracy.",
          href: "/#case-studies",
          icon: FileSpreadsheet,
        },
        {
          name: "Enterprise Workflow",
          description: "Orchestrating complex human-in-the-loop systems.",
          href: "/#case-studies",
          icon: Workflow,
        },
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
          <div className="flex justify-between items-center min-h-14  md:min-h-14">
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
                  className="relative flex items-center h-full"
                  onMouseEnter={() => setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {link.children ? (
                    <Link
                      href={link.href}
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === link.name ? null : link.name
                        )
                      }
                      className={cn(
                        "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-1 cursor-pointer",
                        activeDropdown === link.name || pathname === link.href
                          ? "text-gray-900 dark:text-white"
                          : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                      )}
                    >
                      {link.name}
                      <ChevronDown
                        size={14}
                        className={cn(
                          "transition-transform duration-300",
                          activeDropdown === link.name ? "rotate-180" : ""
                        )}
                      />
                    </Link>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={handleLinkClick}
                      className={cn(
                        "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-1 relative",
                        pathname === link.href
                          ? "text-gray-900 dark:text-white"
                          : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                      )}
                    >
                      {link.name}
                      <span
                        className={cn(
                          "absolute bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-linear-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-400 transition-all duration-300 group-hover:w-3/4",
                          pathname === link.href ? "w-3/4" : ""
                        )}
                      ></span>
                    </Link>
                  )}

                  {/* Mega Dropdown Menu */}
                  {link.children && (
                    <div
                      className={cn(
                        "absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-300 origin-top z-50",
                        activeDropdown === link.name
                          ? "opacity-100 translate-y-0 visible"
                          : "opacity-0 -translate-y-2 invisible"
                      )}
                    >
                      <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-gray-100 dark:border-white/5 shadow-2xl rounded-2xl p-4 min-w-max">
                        <div className="flex flex-row flex-wrap gap-4 max-w-[900px]">
                          {link.children.map((child, childIndex) => (
                            <MegaMenuCard
                              key={childIndex}
                              title={child.name}
                              description={child.description}
                              href={child.href}
                              icon={child.icon}
                              logoUrl={child.logoUrl}
                              logoBg={child.logoBg}
                              onClick={handleLinkClick}
                            />
                          ))}
                        </div>
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

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden absolute top-0 left-0 w-full h-screen bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl transition-all duration-300",
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          )}
        >
          <div className="flex flex-col items-center justify-start min-h-full py-20 px-6 space-y-6 overflow-y-auto">
            {navLinks.map((link, index) => (
              <div key={index} className="w-full">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-between w-full">
                    {link.children ? (
                      <button
                        onClick={() =>
                          setActiveDropdown(
                            activeDropdown === link.name ? null : link.name
                          )
                        }
                        className={cn(
                          "flex items-center justify-between w-full text-base font-semibold transition-all duration-300",
                          activeDropdown === link.name || pathname === link.href
                            ? "text-blue-500"
                            : "text-gray-900 dark:text-white"
                        )}
                      >
                        <span>{link.name}</span>
                        <ChevronDown
                          size={28}
                          className={cn(
                            "transition-transform duration-300 text-gray-500",
                            activeDropdown === link.name ? "rotate-180" : ""
                          )}
                        />
                      </button>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={handleLinkClick}
                        className={cn(
                          "text-base font-semibold transition-all duration-300",
                          pathname === link.href
                            ? "text-blue-500"
                            : "text-gray-900 dark:text-white"
                        )}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>

                  {/* Mobile Mega Dropdown items as Accordion Cards */}
                  {link.children && (
                    <div
                      className={cn(
                        "w-full transition-all duration-500 origin-top overflow-hidden",
                        activeDropdown === link.name
                          ? "max-h-[1000px] opacity-100 mt-6"
                          : "max-h-0 opacity-0"
                      )}
                    >
                      <div className="grid grid-cols-1 gap-4">
                        {link.children.map((child, childIndex) => (
                          <Link
                            key={childIndex}
                            href={child.href}
                            onClick={handleLinkClick}
                            className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5"
                          >
                            <div
                              className={cn(
                                "shrink-0 w-14 h-14 rounded-xl flex items-center justify-center p-2",
                                child.logoUrl
                                  ? cn(
                                      "bg-transparent border border-gray-100 dark:border-white/5",
                                      child.logoBg
                                    )
                                  : "bg-blue-500/10 text-blue-500"
                              )}
                            >
                              {child.logoUrl ? (
                                <img
                                  src={child.logoUrl}
                                  alt={child.name}
                                  className="w-full h-full object-contain"
                                />
                              ) : (
                                <child.icon size={24} />
                              )}
                            </div>
                            <div className="text-left">
                              <h5 className="font-bold text-gray-900 dark:text-white">
                                {child.name}
                              </h5>
                              <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-1">
                                {child.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Mobile CTA Button */}
            <div className="w-full pt-8 pb-12 flex justify-center">
              <a
                href="https://calendar.app.google/PDsuNkzSCVGXvhio8"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className={`group relative px-8 py-2 bg-blue-500 text-white rounded-2xl font-bold transition-all duration-300 overflow-hidden inline-flex items-center space-x-3 shadow-xl shadow-blue-500/20 ${
                  isOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
              >
                <Calendar size={20} />
                <span>Book a Call</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavMenu;
