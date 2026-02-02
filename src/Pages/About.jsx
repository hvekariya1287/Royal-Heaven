import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import {
  Crown,
  Target,
  Eye,
  Award,
  Users,
  Building2,
  Globe,
  ArrowRight,
  CheckCircle2,
  Linkedin,
  Twitter,
  Mail,
} from "lucide-react";

import SectionTitle from "@/Components/SectionTitle";

const timeline = [
  {
    year: "2009",
    title: "Foundation",
    description:
      "Royal Haven was established with a vision to redefine luxury real estate.",
  },
  {
    year: "2012",
    title: "First $100M Sale",
    description:
      "Achieved our first landmark sale, setting new standards in the market.",
  },
  {
    year: "2015",
    title: "Global Expansion",
    description:
      "Expanded operations to include properties across 15 countries.",
  },
  {
    year: "2018",
    title: "Award of Excellence",
    description: "Recognized as the leading luxury real estate firm by Forbes.",
  },
  {
    year: "2021",
    title: "$2 Billion Milestone",
    description: "Crossed $2 billion in total property transactions.",
  },
  {
    year: "2024",
    title: "The Future",
    description: "Continuing to set the gold standard in luxury real estate.",
  },
];

const team = [
  {
    name: "Alexander Sterling",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400",
    bio: "25+ years in luxury real estate",
  },
  {
    name: "Victoria Chase",
    role: "Head of Sales",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
    bio: "Former Christie's Director",
  },
  {
    name: "Marcus Wellington",
    role: "Chief Architect",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
    bio: "Award-winning designer",
  },
  {
    name: "Isabella Romano",
    role: "Client Relations",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400",
    bio: "Luxury concierge specialist",
  },
];

const values = [
  {
    icon: Crown,
    title: "Excellence",
    description:
      "We pursue perfection in every transaction and client interaction.",
  },
  {
    icon: Users,
    title: "Discretion",
    description: "Your privacy and confidentiality are our highest priority.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "Access to exclusive properties across the world's most prestigious locations.",
  },
  {
    icon: Award,
    title: "Integrity",
    description:
      "Honest, transparent dealings form the foundation of our relationships.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[#f9f6f1]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 bg-[#0b1c2d] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1c2d]/50 to-[#0b1c2d]" />

        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-0.5 bg-gradient-to-r from-[#d4af37] to-transparent" />
              <span className="text-[#d4af37] text-sm font-medium tracking-wider uppercase">
                About Us
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
              A Legacy of <span className="text-[#d4af37]">Luxury</span>{" "}
              Excellence
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              For over 15 years, Royal Haven has been the trusted partner for
              discerning clients seeking the world's most exceptional
              properties. Our commitment to excellence has made us the premier
              choice in luxury real estate.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800"
                alt="Our Story"
                className="rounded-2xl shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[#d4af37]/20 rounded-2xl" />
              <div className="absolute -top-8 -left-8 w-48 h-48 border-2 border-[#d4af37]/30 rounded-2xl" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-0.5 bg-gradient-to-r from-[#d4af37] to-transparent" />
                <span className="text-[#d4af37] text-sm font-medium tracking-wider uppercase">
                  Our Story
                </span>
              </div>
              <h2 className="text-4xl font-serif font-bold text-[#0b1c2d] mb-6">
                Where Dreams Meet{" "}
                <span className="text-[#d4af37]">Reality</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Royal Haven was born from a simple vision: to transform the
                luxury real estate experience. Founded in 2009 by Alexander
                Sterling, our firm has grown from a boutique agency to a global
                powerhouse in premium properties.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Today, we represent some of the world's most extraordinary
                estates, from historic European châteaux to modern architectural
                masterpieces. Our success is built on one principle: treating
                every client like royalty.
              </p>

              <div className="grid grid-cols-3 gap-6">
                {[
                  { value: "500+", label: "Properties Sold" },
                  { value: "$2B+", label: "Total Value" },
                  { value: "25", label: "Countries" },
                ].map((stat, idx) => (
                  <div key={idx}>
                    <p className="text-3xl font-serif font-bold text-[#d4af37]">
                      {stat.value}
                    </p>
                    <p className="text-gray-500 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#0b1c2d] rounded-2xl p-10 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4af37]/10 rounded-full blur-3xl" />
              <Target className="w-12 h-12 text-[#d4af37] mb-6" />
              <h3 className="text-2xl font-serif font-bold text-white mb-4">
                Our Mission
              </h3>
              <p className="text-white/70 leading-relaxed">
                To provide unparalleled service in luxury real estate,
                connecting exceptional properties with discerning clients who
                appreciate the finest things in life. We strive to exceed
                expectations at every turn, delivering experiences that are as
                extraordinary as the homes we represent.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-[#d4af37] to-[#b8962e] rounded-2xl p-10 relative overflow-hidden"
            >
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <Eye className="w-12 h-12 text-[#0b1c2d] mb-6" />
              <h3 className="text-2xl font-serif font-bold text-[#0b1c2d] mb-4">
                Our Vision
              </h3>
              <p className="text-[#0b1c2d]/80 leading-relaxed">
                To be the world's most trusted name in luxury real estate,
                recognized for our integrity, expertise, and commitment to
                excellence. We envision a future where Royal Haven is synonymous
                with the highest standards of luxury property representation
                globally.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            subtitle="Our Values"
            title={
              <>
                The Pillars of{" "}
                <span className="text-[#d4af37]">Excellence</span>
              </>
            }
            description="The principles that guide everything we do"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow text-center group"
              >
                <div className="w-16 h-16 bg-[#d4af37]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#d4af37] transition-colors">
                  <value.icon className="w-8 h-8 text-[#d4af37] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-[#0b1c2d] mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6 bg-[#0b1c2d] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto">
          <SectionTitle
            subtitle="Our Journey"
            title={
              <>
                A History of <span className="text-[#d4af37]">Achievement</span>
              </>
            }
            description="Key milestones that shaped Royal Haven"
            light
          />

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#d4af37] via-[#d4af37]/50 to-transparent hidden md:block" />

            <div className="space-y-12">
              {timeline.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`flex items-center gap-8 ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div
                    className={`flex-1 ${idx % 2 === 0 ? "md:text-right" : "md:text-left"}`}
                  >
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                      <span className="text-[#d4af37] font-bold text-lg">
                        {item.year}
                      </span>
                      <h4 className="text-xl font-serif font-semibold text-white mt-2 mb-2">
                        {item.title}
                      </h4>
                      <p className="text-white/60 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="hidden md:flex w-4 h-4 bg-[#d4af37] rounded-full relative z-10 flex-shrink-0">
                    <div className="absolute inset-0 bg-[#d4af37] rounded-full animate-ping opacity-30" />
                  </div>

                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            subtitle="Our Team"
            title={
              <>
                Meet the <span className="text-[#d4af37]">Experts</span>
              </>
            }
            description="The passionate professionals behind Royal Haven"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <div className="relative rounded-2xl overflow-hidden mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1c2d] via-transparent to-transparent" />

                  {/* Social Links */}
                  <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    {[Linkedin, Twitter, Mail].map((Icon, i) => (
                      <button
                        key={i}
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#d4af37] transition-colors"
                      >
                        <Icon className="w-4 h-4 text-white" />
                      </button>
                    ))}
                  </div>
                </div>

                <h3 className="text-xl font-serif font-semibold text-[#0b1c2d]">
                  {member.name}
                </h3>
                <p className="text-[#d4af37] text-sm font-medium">
                  {member.role}
                </p>
                <p className="text-gray-500 text-sm mt-1">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-[#0b1c2d] to-[#152a3d]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Ready to Experience the{" "}
            <span className="text-[#d4af37]">Royal</span> Treatment?
          </h2>
          <p className="text-white/70 text-lg mb-10">
            Let us help you find the property of your dreams or sell your luxury
            estate.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to={createPageUrl("Properties")}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#d4af37] to-[#b8962e] text-[#0b1c2d] font-semibold rounded-full hover:shadow-xl hover:shadow-[#d4af37]/30 transition-all group"
            >
              View Properties
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
