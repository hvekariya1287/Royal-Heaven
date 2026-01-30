import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import {
  Home,
  Palette,
  Building2,
  Hammer,
  Key,
  Shield,
  ArrowRight,
  Check,
  Phone,
} from "lucide-react";

import SectionTitle from "@/components/SectionTitle";

const services = [
  {
    icon: Home,
    title: "Luxury Home Sales",
    subtitle: "Find Your Dream Estate",
    description:
      "Our expert agents specialize in matching discerning buyers with extraordinary properties. From waterfront mansions to hillside villas, we have access to the most exclusive listings worldwide.",
    features: [
      "Access to off-market properties",
      "Personalized property matching",
      "Virtual and private viewings",
      "Comprehensive market analysis",
      "Negotiation expertise",
    ],
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
  },
  {
    icon: Palette,
    title: "Royal Interior Design",
    subtitle: "Transform Your Space",
    description:
      "Our world-class interior designers create bespoke living environments that reflect your unique style and sophistication. Every detail is carefully curated to exceed your expectations.",
    features: [
      "Personalized design consultations",
      "Access to exclusive furniture brands",
      "Custom art curation",
      "Smart home integration",
      "Complete project management",
    ],
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800",
  },
  {
    icon: Building2,
    title: "Property Management",
    subtitle: "Protect Your Investment",
    description:
      "Comprehensive property management services ensure your investment is maintained to the highest standards. From routine maintenance to tenant relations, we handle everything.",
    features: [
      "24/7 property monitoring",
      "Preventive maintenance programs",
      "Tenant screening and management",
      "Financial reporting",
      "Emergency response services",
    ],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800",
  },
  {
    icon: Hammer,
    title: "Palace Construction",
    subtitle: "Build Your Vision",
    description:
      "From architectural masterpieces to ground-up custom builds, our construction division brings your vision to life with uncompromising quality and attention to detail.",
    features: [
      "Custom architectural design",
      "Premium material sourcing",
      "Project timeline management",
      "Quality assurance inspections",
      "Post-construction support",
    ],
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800",
  },
  {
    icon: Key,
    title: "Luxury Rentals",
    subtitle: "Premium Living, Flexible Terms",
    description:
      "Experience luxury living without the commitment. Our rental portfolio includes the finest properties available for short-term and long-term stays.",
    features: [
      "Fully furnished properties",
      "Concierge services",
      "Flexible lease terms",
      "Premium amenities included",
      "Housekeeping services",
    ],
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800",
  },
  {
    icon: Shield,
    title: "Asset Protection",
    subtitle: "Secure Your Legacy",
    description:
      "Comprehensive insurance and asset protection services to safeguard your valuable real estate investments for generations to come.",
    features: [
      "Custom insurance solutions",
      "Estate planning consultation",
      "Risk assessment",
      "Legal documentation support",
      "Succession planning",
    ],
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800",
  },
];

const process = [
  {
    step: "01",
    title: "Consultation",
    description:
      "We begin with an in-depth consultation to understand your needs and preferences.",
  },
  {
    step: "02",
    title: "Curation",
    description:
      "Our experts curate a selection of properties or solutions tailored to you.",
  },
  {
    step: "03",
    title: "Experience",
    description: "Enjoy private viewings and presentations of your options.",
  },
  {
    step: "04",
    title: "Execution",
    description: "We handle all details to ensure a seamless transaction.",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-[#f9f6f1]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 bg-[#0b1c2d] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=1920')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1c2d]/50 to-[#0b1c2d]" />

        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-12 h-0.5 bg-gradient-to-r from-transparent to-[#d4af37]" />
              <span className="text-[#d4af37] text-sm font-medium tracking-wider uppercase">
                Our Services
              </span>
              <span className="w-12 h-0.5 bg-gradient-to-l from-transparent to-[#d4af37]" />
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
              Premium <span className="text-[#d4af37]">Services</span>
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Comprehensive luxury real estate services designed to exceed your
              expectations at every touchpoint
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto space-y-32">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                idx % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`relative ${idx % 2 === 1 ? "lg:col-start-2" : ""}`}
              >
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1c2d]/50 via-transparent to-transparent" />
                </div>
                <div
                  className={`absolute -bottom-8 ${idx % 2 === 1 ? "-left-8" : "-right-8"} w-64 h-64 bg-[#d4af37]/20 rounded-2xl`}
                />
                <div
                  className={`absolute -top-8 ${idx % 2 === 1 ? "-right-8" : "-left-8"} w-48 h-48 border-2 border-[#d4af37]/30 rounded-2xl`}
                />

                {/* Icon Badge */}
                <div className="absolute -bottom-6 left-6 w-20 h-20 bg-[#d4af37] rounded-2xl flex items-center justify-center shadow-xl z-20">
                  <service.icon className="w-10 h-10 text-[#0b1c2d]" />
                </div>
              </div>

              {/* Content */}
              <div className={idx % 2 === 1 ? "lg:col-start-1" : ""}>
                <span className="text-[#d4af37] text-sm font-medium tracking-wider uppercase">
                  {service.subtitle}
                </span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0b1c2d] mt-2 mb-6">
                  {service.title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  {service.description}
                </p>

                <ul className="space-y-4 mb-8">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#d4af37]/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-[#d4af37]" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={createPageUrl("Contact")}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#0b1c2d] text-white font-semibold rounded-full hover:bg-[#152a3d] transition-colors group"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6 bg-[#0b1c2d] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto">
          <SectionTitle
            subtitle="Our Process"
            title={
              <>
                How We <span className="text-[#d4af37]">Work</span>
              </>
            }
            description="A seamless journey from consultation to completion"
            light
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative"
              >
                {/* Connector Line */}
                {idx < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-[#d4af37] to-transparent z-0" />
                )}

                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#d4af37]/30 transition-colors">
                  <span className="text-5xl font-serif font-bold text-[#d4af37]/30">
                    {step.step}
                  </span>
                  <h3 className="text-xl font-serif font-semibold text-white mt-4 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-white/60 text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-gradient-to-br from-[#d4af37] to-[#b8962e] rounded-3xl p-12 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0b1c2d] mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-[#0b1c2d]/70 text-lg mb-8 max-w-xl mx-auto">
              Our team of experts is ready to help you with all your luxury real
              estate needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to={createPageUrl("Contact")}
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#0b1c2d] text-white font-semibold rounded-full hover:bg-[#152a3d] transition-colors group"
              >
                Schedule Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+1234567890"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/20 text-[#0b1c2d] font-semibold rounded-full hover:bg-white/30 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call Us Now
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
