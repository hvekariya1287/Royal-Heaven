import React from "react";
import { motion } from "framer-motion";

export default function SectionTitle({
  subtitle,
  title,
  description,
  centered = true,
  light = false,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${centered ? "text-center max-w-2xl mx-auto" : ""}`}
    >
      {subtitle && (
        <div className="flex items-center gap-3 mb-4 justify-center">
          <span className="w-8 h-0.5 bg-gradient-to-r from-[#d4af37] to-transparent" />
          <span
            className={`text-sm font-medium tracking-wider uppercase ${
              light ? "text-[#d4af37]" : "text-[#d4af37]"
            }`}
          >
            {subtitle}
          </span>
          <span className="w-8 h-0.5 bg-gradient-to-l from-[#d4af37] to-transparent" />
        </div>
      )}

      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 ${
          light ? "text-white" : "text-[#0b1c2d]"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`text-lg leading-relaxed ${
            light ? "text-white/70" : "text-gray-600"
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
