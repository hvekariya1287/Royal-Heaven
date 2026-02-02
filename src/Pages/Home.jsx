import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { base44 } from "@/api/base44Client";
import {
  Home as HomeIcon,
  Building2,
  Palette,
  Hammer,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

import Hero from "../Components/Hero";
import PropertyCard from "../components/PropertyCard";
import TestimonialCard from "../components/TestimonialCard";
import ServiceCard from "../components/ServiceCard";
import SectionTitle from "../components/SectionTitle";
import Loader from "../components/Loader";

const services = [
  {
    icon: HomeIcon,
    title: "Luxury Home Sales",
    description:
      "Discover exceptional properties with our curated selection of premium real estate offerings.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600",
  },
  {
    icon: Palette,
    title: "Royal Interior Design",
    description:
      "Transform your space with our world-class interior design services tailored to your taste.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600",
  },
  {
    icon: Building2,
    title: "Property Management",
    description:
      "Comprehensive property management services ensuring your investment is well maintained.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600",
  },
  {
    icon: Hammer,
    title: "Palace Construction",
    description:
      "Build your dream estate from the ground up with our expert construction team.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600",
  },
];

export default function HomePage() {
  const { data: properties = [], isLoading: loadingProperties } = useQuery({
    queryKey: ["properties", "featured"],
    queryFn: () =>
      base44.entities.Property.filter({ featured: true }, "-created_date", 6),
  });

  const { data: allProperties = [] } = useQuery({
    queryKey: ["properties", "all"],
    queryFn: () => base44.entities.Property.list("-created_date", 6),
  });

  const { data: testimonials = [], isLoading: loadingTestimonials } = useQuery({
    queryKey: ["testimonials"],
    queryFn: () => base44.entities.Testimonial.list("-created_date", 6),
  });

  const displayProperties = properties.length > 0 ? properties : allProperties;

  return (
    <div className="bg-[#f9f6f1]">
      {/* Hero Section */}
      <Hero />

      {/* Featured Properties */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            subtitle="Featured Properties"
            title={
              <>
                Exclusive <span className="text-[#d4af37]">Luxury</span>{" "}
                Listings
              </>
            }
            description="Handpicked properties that represent the pinnacle of luxury living"
          />

          {loadingProperties ? (
            <Loader fullScreen={false} />
          ) : displayProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayProperties.slice(0, 6).map((property, idx) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  index={idx}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-500 mb-4">No properties available yet.</p>
              <Link
                to={createPageUrl("Properties")}
                className="text-[#d4af37] font-medium hover:underline"
              >
                Check back soon
              </Link>
            </div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to={createPageUrl("Properties")}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#0b1c2d] text-white font-semibold rounded-full hover:bg-[#152a3d] transition-colors group"
            >
              View All Properties
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#0b1c2d] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1c2d] via-[#0b1c2d]/95 to-[#0b1c2d]" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "15+", label: "Years of Excellence" },
              { value: "500+", label: "Properties Sold" },
              { value: "50+", label: "Expert Agents" },
              { value: "25", label: "Countries Served" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <p className="text-5xl md:text-6xl font-serif font-bold text-[#d4af37] mb-2">
                  {stat.value}
                </p>
                <p className="text-white/60">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            subtitle="Our Services"
            title={
              <>
                Premium <span className="text-[#d4af37]">Services</span> We
                Offer
              </>
            }
            description="Comprehensive luxury real estate services tailored to your needs"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <ServiceCard key={idx} service={service} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800"
                  alt="Luxury Home"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[#d4af37]/20 rounded-2xl" />
              <div className="absolute -top-8 -left-8 w-48 h-48 border-2 border-[#d4af37]/30 rounded-2xl" />

              {/* Stats Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-8 -left-8 bg-white rounded-2xl shadow-xl p-6"
              >
                <p className="text-4xl font-serif font-bold text-[#d4af37]">
                  $2B+
                </p>
                <p className="text-gray-600 text-sm">Properties Sold</p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-0.5 bg-gradient-to-r from-[#d4af37] to-transparent" />
                <span className="text-sm font-medium tracking-wider uppercase text-[#d4af37]">
                  Why Choose Us
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0b1c2d] mb-6">
                Experience the <span className="text-[#d4af37]">Royal</span>{" "}
                Difference
              </h2>

              <p className="text-gray-600 leading-relaxed mb-8">
                At Royal Haven, we don't just sell properties – we curate
                lifestyles. With over 15 years of excellence in luxury real
                estate, we understand what discerning clients truly desire.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Exclusive access to off-market properties",
                  "Personalized concierge service",
                  "Global network of luxury estates",
                  "White-glove transaction management",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#d4af37]/20 flex items-center justify-center">
                      <ChevronRight className="w-4 h-4 text-[#d4af37]" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                to={createPageUrl("About")}
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#0b1c2d] text-white font-semibold rounded-full hover:bg-[#152a3d] transition-colors group"
              >
                Learn More About Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-[#0b1c2d] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto">
          <SectionTitle
            subtitle="Testimonials"
            title={
              <>
                What Our <span className="text-[#d4af37]">Clients</span> Say
              </>
            }
            description="Hear from those who have experienced the Royal Haven difference"
            light
          />

          {loadingTestimonials ? (
            <Loader fullScreen={false} />
          ) : testimonials.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.slice(0, 3).map((testimonial) => (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  id: 1,
                  client_name: "Alexandra Sterling",
                  client_title: "CEO, Sterling Industries",
                  content:
                    "Royal Haven exceeded all expectations. Their attention to detail and understanding of luxury living is unparalleled.",
                  rating: 5,
                  client_image:
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
                },
                {
                  id: 2,
                  client_name: "Marcus Wellington",
                  client_title: "Investment Banker",
                  content:
                    "The team at Royal Haven made finding our dream estate an absolute pleasure. Professional, discrete, and exceptional.",
                  rating: 5,
                  client_image:
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
                },
                {
                  id: 3,
                  client_name: "Victoria Chase",
                  client_title: "Art Collector",
                  content:
                    "From viewing to closing, every step was handled with the utmost care. Truly a royal experience.",
                  rating: 5,
                  client_image:
                    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
                },
              ].map((testimonial) => (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1920')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-[#0b1c2d]/90" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Ready to Find Your{" "}
            <span className="text-[#d4af37]">Dream Home</span>?
          </h2>
          <p className="text-white/70 text-lg mb-10">
            Let our expert team guide you to the property of your dreams.
            Schedule a private consultation today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to={createPageUrl("Properties")}
              className="px-8 py-4 bg-gradient-to-r from-[#d4af37] to-[#b8962e] text-[#0b1c2d] font-semibold rounded-full hover:shadow-xl hover:shadow-[#d4af37]/30 transition-all"
            >
              Explore Properties
            </Link>
            <Link
              to={createPageUrl("Contact")}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
