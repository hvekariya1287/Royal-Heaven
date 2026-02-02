import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { base44 } from "@/api/base44Client";
import {
  MapPin,
  Bed,
  Bath,
  Square,
  ChevronLeft,
  ChevronRight,
  Heart,
  Share2,
  Phone,
  Mail,
  Calendar,
  Check,
  Home,
  Car,
  Trees,
  Waves,
  Dumbbell,
  Wine,
  Shield,
  Wifi,
  Wind,
} from "lucide-react";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Textarea } from "@/Components/ui/textarea";
import { toast } from "sonner";

import Loader from "@/Components/Loader";

const amenityIcons = {
  "Swimming Pool": Waves,
  "Private Gym": Dumbbell,
  "Wine Cellar": Wine,
  "Smart Home": Wifi,
  "Security System": Shield,
  "Air Conditioning": Wind,
  Garage: Car,
  Garden: Trees,
};

export default function PropertyDetailsPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const propertyId = urlParams.get("id");

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    preferred_date: "",
  });

  const queryClient = useQueryClient();

  const { data: property, isLoading } = useQuery({
    queryKey: ["property", propertyId],
    queryFn: async () => {
      const properties = await base44.entities.Property.filter({
        id: propertyId,
      });
      return properties[0];
    },
    enabled: !!propertyId,
  });

  const createInquiry = useMutation({
    mutationFn: (data) => base44.entities.Inquiry.create(data),
    onSuccess: () => {
      toast.success(
        "Inquiry submitted successfully! We will contact you soon.",
      );
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        preferred_date: "",
      });
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await createInquiry.mutateAsync({
      ...formData,
      property_id: propertyId,
      inquiry_type: "property",
    });

    setIsSubmitting(false);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(price);
  };

  const defaultImages = [
    "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200",
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200",
  ];

  if (isLoading) {
    return <Loader />;
  }

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f9f6f1]">
        <div className="text-center">
          <h2 className="text-2xl font-serif font-bold text-[#0b1c2d] mb-4">
            Property Not Found
          </h2>
          <Link
            to={createPageUrl("Properties")}
            className="text-[#d4af37] hover:underline"
          >
            Back to Properties
          </Link>
        </div>
      </div>
    );
  }

  const images = property.images?.length > 0 ? property.images : defaultImages;
  const amenities = property.amenities || [
    "Swimming Pool",
    "Private Gym",
    "Wine Cellar",
    "Smart Home",
    "Security System",
    "Garage",
  ];

  return (
    <div className="bg-[#f9f6f1] min-h-screen">
      {/* Header */}
      <div className="bg-[#0b1c2d] pt-32 pb-8 px-6">
        <div className="max-w-7xl mx-auto">
          <Link
            to={createPageUrl("Properties")}
            className="inline-flex items-center gap-2 text-white/70 hover:text-[#d4af37] mb-6 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            Back to Properties
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <div>
              <span className="inline-block px-3 py-1 bg-[#d4af37] text-[#0b1c2d] text-sm font-medium rounded-full mb-4 capitalize">
                {property.property_type}
              </span>
              <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-2">
                {property.title}
              </h1>
              <div className="flex items-center gap-2 text-white/70">
                <MapPin className="w-5 h-5 text-[#d4af37]" />
                {property.location}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Heart className="w-5 h-5 text-white" />
              </button>
              <button className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Share2 className="w-5 h-5 text-white" />
              </button>
              <div className="text-right">
                <p className="text-white/60 text-sm">Price</p>
                <p className="text-3xl font-serif font-bold text-[#d4af37]">
                  {formatPrice(property.price)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <div className="relative rounded-2xl overflow-hidden">
              <motion.img
                key={currentImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                src={images[currentImageIndex]}
                alt={property.title}
                className="w-full h-[500px] object-cover"
              />

              {images.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      setCurrentImageIndex((i) =>
                        i === 0 ? images.length - 1 : i - 1,
                      )
                    }
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6 text-[#0b1c2d]" />
                  </button>
                  <button
                    onClick={() =>
                      setCurrentImageIndex((i) =>
                        i === images.length - 1 ? 0 : i + 1,
                      )
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                  >
                    <ChevronRight className="w-6 h-6 text-[#0b1c2d]" />
                  </button>
                </>
              )}

              {/* Thumbnails */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      idx === currentImageIndex
                        ? "bg-[#d4af37] scale-125"
                        : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-4 gap-4">
              {[
                { icon: Bed, value: property.bedrooms, label: "Bedrooms" },
                { icon: Bath, value: property.bathrooms, label: "Bathrooms" },
                {
                  icon: Square,
                  value: property.sqft?.toLocaleString(),
                  label: "Sq Ft",
                },
                { icon: Home, value: property.property_type, label: "Type" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-4 text-center shadow-sm"
                >
                  <stat.icon className="w-6 h-6 text-[#d4af37] mx-auto mb-2" />
                  <p className="text-xl font-bold text-[#0b1c2d] capitalize">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-serif font-bold text-[#0b1c2d] mb-4">
                Description
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {property.description ||
                  `Welcome to this magnificent ${property.property_type} located in the prestigious ${property.location}. This exceptional property offers ${property.bedrooms} luxurious bedrooms and ${property.bathrooms} elegantly appointed bathrooms, spanning ${property.sqft?.toLocaleString()} square feet of refined living space. Every detail has been meticulously crafted to provide the ultimate in luxury living, from the grand entrance to the private quarters. This is truly a once-in-a-lifetime opportunity to own a piece of architectural excellence.`}
              </p>
            </div>

            {/* Amenities */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-serif font-bold text-[#0b1c2d] mb-6">
                Amenities
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {amenities.map((amenity, idx) => {
                  const Icon = amenityIcons[amenity] || Check;
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3 bg-[#f9f6f1] rounded-xl"
                    >
                      <div className="w-10 h-10 bg-[#d4af37]/20 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[#d4af37]" />
                      </div>
                      <span className="text-gray-700">{amenity}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-serif font-bold text-[#0b1c2d] mb-6">
                Location
              </h2>
              <div className="rounded-xl overflow-hidden h-80 bg-gray-100">
                <iframe
                  src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(property.location || "Beverly Hills")}`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-6">
              {/* Agent Card */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100"
                    alt={property.agent_name || "Agent"}
                    className="w-16 h-16 rounded-full object-cover border-2 border-[#d4af37]"
                  />
                  <div>
                    <h3 className="font-serif font-semibold text-[#0b1c2d]">
                      {property.agent_name || "James Wellington"}
                    </h3>
                    <p className="text-sm text-gray-500">
                      Luxury Property Specialist
                    </p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <a
                    href={`tel:${property.agent_phone || "+1234567890"}`}
                    className="flex items-center gap-3 p-3 bg-[#f9f6f1] rounded-xl hover:bg-[#d4af37]/10 transition-colors"
                  >
                    <Phone className="w-5 h-5 text-[#d4af37]" />
                    <span className="text-gray-700">
                      {property.agent_phone || "+1 (234) 567-890"}
                    </span>
                  </a>
                  <a
                    href={`mailto:${property.agent_email || "agent@royalhaven.com"}`}
                    className="flex items-center gap-3 p-3 bg-[#f9f6f1] rounded-xl hover:bg-[#d4af37]/10 transition-colors"
                  >
                    <Mail className="w-5 h-5 text-[#d4af37]" />
                    <span className="text-gray-700 text-sm">
                      {property.agent_email || "agent@royalhaven.com"}
                    </span>
                  </a>
                </div>

                <div className="h-px bg-gray-100 my-6" />

                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h4 className="font-serif font-semibold text-[#0b1c2d]">
                    Schedule a Viewing
                  </h4>

                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                  <Input
                    type="tel"
                    placeholder="Your Phone"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                  <Input
                    type="date"
                    value={formData.preferred_date}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        preferred_date: e.target.value,
                      })
                    }
                  />
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={3}
                  />

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#d4af37] to-[#b8962e] text-[#0b1c2d] font-semibold py-6 hover:shadow-lg transition-all"
                  >
                    {isSubmitting ? "Sending..." : "Request Viewing"}
                  </Button>
                </form>
              </div>

              {/* Quick Actions */}
              <div className="bg-[#0b1c2d] rounded-2xl p-6">
                <h4 className="font-serif font-semibold text-white mb-4">
                  Need Assistance?
                </h4>
                <p className="text-white/60 text-sm mb-4">
                  Our luxury property experts are available 24/7 to help you.
                </p>
                <a
                  href="tel:+1234567890"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-[#d4af37] text-[#0b1c2d] font-semibold rounded-full hover:bg-[#f4e4bc] transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
