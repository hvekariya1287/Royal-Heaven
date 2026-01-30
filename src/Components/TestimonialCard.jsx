import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export default function TestimonialCard({ testimonial }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl p-8 shadow-xl relative overflow-hidden group hover:shadow-2xl transition-shadow duration-300"
    >
      {/* Decorative Quote */}
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#d4af37]/10 rounded-full" />
      <Quote className="absolute top-6 right-6 w-10 h-10 text-[#d4af37]/20" />

      {/* Rating */}
      <div className="flex gap-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < testimonial.rating
                ? "text-[#d4af37] fill-current"
                : "text-gray-200"
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <p className="text-gray-600 leading-relaxed mb-8 relative z-10">
        "{testimonial.content}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#d4af37]/30">
          <img
            src={
              testimonial.client_image ||
              `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100`
            }
            alt={testimonial.client_name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-serif font-semibold text-[#0b1c2d]">
            {testimonial.client_name}
          </h4>
          <p className="text-sm text-gray-500">{testimonial.client_title}</p>
          {testimonial.property_purchased && (
            <p className="text-xs text-[#d4af37]">
              Purchased: {testimonial.property_purchased}
            </p>
          )}
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#d4af37] via-[#f4e4bc] to-[#d4af37] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
    </motion.div>
  );
}
