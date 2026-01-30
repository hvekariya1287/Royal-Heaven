import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ServiceCard({ service, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1c2d]/80 via-[#0b1c2d]/20 to-transparent" />

        {/* Icon */}
        <div className="absolute bottom-4 left-6">
          <div className="w-16 h-16 bg-[#d4af37] rounded-2xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
            <service.icon className="w-8 h-8 text-[#0b1c2d]" />
          </div>
        </div>

        {/* Arrow */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
            <ArrowUpRight className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-serif font-semibold text-[#0b1c2d] mb-3 group-hover:text-[#d4af37] transition-colors">
          {service.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {service.description}
        </p>
      </div>

      {/* Gold Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#d4af37] via-[#f4e4bc] to-[#d4af37] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
    </motion.div>
  );
}
