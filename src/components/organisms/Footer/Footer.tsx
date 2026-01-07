"use client";

import { useState } from "react";
import {
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
  Home,
  Phone,
  Mail,
} from "lucide-react";

export default function Footer() {
  const [hoveredLink, setHoveredLink] = useState<number | null>(null);
  const [hoveredSocial, setHoveredSocial] = useState<number | null>(null);

  const exploreLinks = [
    { name: "Capabilities", href: "#capabilities" },
    { name: "Solutions", href: "#solutions" },
    { name: "Products", href: "#products" },
    { name: "Architecture", href: "#architecture" },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/coedifytechnology",
      text: "Follow us on Instagram",
    },
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://www.facebook.com/coedifytechnology",
      text: "Like our Facebook Page",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/company/coedify/mycompany/?viewAsMember=true",
      text: "Connect on LinkedIn",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://twitter.com/CoEdifyTech",
      text: "Follow on Twitter",
    },
  ];

  return (
    <footer className="bg-white text-black border-t border-gray-200 mt-20">
      <div className="lg:w-[1200px] mx-auto px-6 lg:px-0 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="shrink-0 z-50">
              <a href="/" className="group flex items-center -ml-2">
                <img src="/logo.png" alt="coedify" height={150} width={170} />
              </a>
            </div>
            <p className="text-gray-600 leading-relaxed text-sm">
              At CoEdify, we take immense pride in being your trusted partner in
              achieving your goals and exceeding your expectations. Our
              unwavering commitment to excellence is reflected in every facet of
              our services. With a track record of successfully resolving
              complex engineering challenges and optimizing software systems.
            </p>
          </div>

          {/* Explore Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold relative inline-block">
              Explore
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-linear-to-r from-gray-800 to-transparent"></span>
            </h3>
            <ul className="space-y-3">
              {exploreLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onMouseEnter={() => setHoveredLink(index)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className="text-gray-600 hover:text-gray-900 transition-all duration-300 inline-flex items-center group"
                  >
                    <span
                      className={`inline-block transition-transform duration-300 ${
                        hoveredLink === index ? "translate-x-2" : ""
                      }`}
                    >
                      {link.name}
                    </span>
                    <span
                      className={`inline-block ml-2 opacity-0 transition-all duration-300 ${
                        hoveredLink === index ? "opacity-100" : ""
                      }`}
                    >
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold relative inline-block">
              Get in Touch
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-linear-to-r from-gray-800 to-transparent"></span>
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group cursor-pointer">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-gray-200 group-hover:scale-110">
                  <Home size={18} className="text-gray-700" />
                </div>
                <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                  C-89, Second Floor Sector-2, Noida, 201301 Uttar Pradesh
                </p>
              </div>

              <a
                href="tel:+917834906274"
                className="flex items-center space-x-3 group"
              >
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-gray-200 group-hover:scale-110">
                  <Phone size={18} className="text-gray-700" />
                </div>
                <p className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                  +91 7834906274
                </p>
              </a>

              <a
                href="mailto:contact@coedify.com"
                className="flex items-center space-x-3 group"
              >
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-gray-200 group-hover:scale-110">
                  <Mail size={18} className="text-gray-700" />
                </div>
                <p className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                  contact@coedify.com
                </p>
              </a>
            </div>
          </div>
        </div>

        {/* Quick Links / Social Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-center md:text-left">
              <h4 className="text-sm font-semibold mb-4">Quick Links</h4>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    onMouseEnter={() => setHoveredSocial(index)}
                    onMouseLeave={() => setHoveredSocial(null)}
                    className="group relative"
                    aria-label={social.text}
                  >
                    <div
                      className={`w-11 h-11 bg-gray-100 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        hoveredSocial === index
                          ? "bg-gray-800 scale-110 rotate-6"
                          : "hover:bg-gray-200"
                      }`}
                    >
                      <social.icon
                        size={20}
                        className={`transition-colors duration-300 ${
                          hoveredSocial === index
                            ? "text-white"
                            : "text-gray-700"
                        }`}
                      />
                    </div>
                    <span
                      className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-600 whitespace-nowrap transition-opacity duration-300 ${
                        hoveredSocial === index ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="text-center md:text-right text-sm text-gray-600">
              <p>© {new Date().getFullYear()} CoEdify. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
