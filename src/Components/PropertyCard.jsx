import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { MapPin, Bed, Bath, Square, ArrowUpRight, Heart } from "lucide-react";

export default function PropertyCard({ property, index = 0 }) {
  const formatPrice = (price) => {
    if (price >= 1000000) {
      return `$${(price / 1000000).toFixed(1)}M`;
    }
    return `$${(price / 1000).toFixed(0)}K`;
  };

  const defaultImage =
    "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <Link to={createPageUrl(`PropertyDetails?id=${property.id}`)}>
        <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
          {/* Image Container */}
          <div className="relative h-72 overflow-hidden">
            <img
              src={property.images?.[0] || defaultImage}
              alt={property.title}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Badges */}
            <div className="absolute top-4 left-4 flex gap-2">
              {property.featured && (
                <span className="px-3 py-1 bg-[#d4af37] text-[#0b1c2d] text-xs font-semibold rounded-full uppercase tracking-wider">
                  Featured
                </span>
              )}
              <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[#0b1c2d] text-xs font-medium rounded-full capitalize">
                {property.property_type}
              </span>
            </div>

            {/* Favorite Button */}
            <button
              onClick={(e) => e.preventDefault()}
              className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#d4af37] transition-colors group/fav"
            >
              <Heart className="w-5 h-5 text-[#0b1c2d] group-hover/fav:text-white" />
            </button>

            {/* Price */}
            <div className="absolute bottom-4 left-4">
              <p className="text-3xl font-serif font-bold text-white">
                {formatPrice(property.price)}
              </p>
            </div>

            {/* View Button */}
            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-12 h-12 bg-[#d4af37] rounded-full flex items-center justify-center">
                <ArrowUpRight className="w-5 h-5 text-[#0b1c2d]" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl font-serif font-semibold text-[#0b1c2d] mb-2 group-hover:text-[#d4af37] transition-colors">
              {property.title}
            </h3>

            <div className="flex items-center gap-2 text-gray-500 mb-4">
              <MapPin className="w-4 h-4 text-[#d4af37]" />
              <span className="text-sm">{property.location}</span>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent mb-4" />

            {/* Features */}
            <div className="flex items-center justify-between text-gray-600">
              <div className="flex items-center gap-2">
                <Bed className="w-4 h-4 text-[#d4af37]" />
                <span className="text-sm">{property.bedrooms} Beds</span>
              </div>
              <div className="flex items-center gap-2">
                <Bath className="w-4 h-4 text-[#d4af37]" />
                <span className="text-sm">{property.bathrooms} Baths</span>
              </div>
              <div className="flex items-center gap-2">
                <Square className="w-4 h-4 text-[#d4af37]" />
                <span className="text-sm">
                  {property.sqft?.toLocaleString()} sqft
                </span>
              </div>
            </div>
          </div>

          {/* Gold Accent Border */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#d4af37] via-[#f4e4bc] to-[#d4af37] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
        </div>
      </Link>
    </motion.div>
  );
}
