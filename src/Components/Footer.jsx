import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import {
  Crown,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#0b1c2d] text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link
              to={createPageUrl("Home")}
              className="flex items-center gap-3 mb-6"
            >
              <Crown className="w-10 h-10 text-[#d4af37]" />
              <div>
                <h3 className="text-xl font-serif font-bold tracking-wider">
                  ROYAL <span className="text-[#d4af37]">HAVEN</span>
                </h3>
                <p className="text-[10px] text-white/60 tracking-[0.2em] uppercase">
                  Luxury Estates
                </p>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Discover unparalleled luxury living with Royal Haven. Where dreams
              meet reality in the most exquisite properties across the globe.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, idx) => (
                <motion.a
                  key={idx}
                  href="#"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="w-10 h-10 rounded-full bg-white/5 border border-[#d4af37]/20 flex items-center justify-center hover:bg-[#d4af37] hover:border-[#d4af37] transition-all duration-300 group"
                >
                  <Icon className="w-4 h-4 text-[#d4af37] group-hover:text-[#0b1c2d]" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gradient-to-r from-[#d4af37] to-transparent" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Home", "Properties", "About", "Services", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <Link
                      to={createPageUrl(link)}
                      className="text-white/60 hover:text-[#d4af37] text-sm flex items-center gap-2 group transition-colors"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gradient-to-r from-[#d4af37] to-transparent" />
              Property Types
            </h4>
            <ul className="space-y-3">
              {[
                "Luxury Mansions",
                "Private Villas",
                "Penthouses",
                "Royal Estates",
                "Beach Properties",
              ].map((type) => (
                <li key={type}>
                  <Link
                    to={createPageUrl("Properties")}
                    className="text-white/60 hover:text-[#d4af37] text-sm flex items-center gap-2 group transition-colors"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {type}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gradient-to-r from-[#d4af37] to-transparent" />
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                <span className="text-white/60 text-sm">
                  123 Royal Avenue, Beverly Hills,
                  <br />
                  California 90210, USA
                </span>
              </li>
              <li>
                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-3 text-white/60 hover:text-[#d4af37] text-sm transition-colors"
                >
                  <Phone className="w-5 h-5 text-[#d4af37]" />
                  +1 (234) 567-890
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@royalhaven.com"
                  className="flex items-center gap-3 text-white/60 hover:text-[#d4af37] text-sm transition-colors"
                >
                  <Mail className="w-5 h-5 text-[#d4af37]" />
                  info@royalhaven.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-white/10 pt-12 mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-2xl font-serif font-semibold mb-4">
              Subscribe to Our{" "}
              <span className="text-[#d4af37]">Newsletter</span>
            </h4>
            <p className="text-white/60 text-sm mb-6">
              Stay updated with our latest luxury listings and exclusive offers
            </p>
            <div className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 bg-white/5 border border-white/10 rounded-full text-white placeholder:text-white/40 focus:outline-none focus:border-[#d4af37]/50"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-[#d4af37] to-[#b8962e] text-[#0b1c2d] font-semibold rounded-full hover:shadow-lg hover:shadow-[#d4af37]/30 transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <p>© 2024 Royal Haven. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#d4af37] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#d4af37] transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-[#d4af37] transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
