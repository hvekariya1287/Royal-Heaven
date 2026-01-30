import React, { useState } from "react";
import { motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import { base44 } from "@/api/base44Client";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

import SectionTitle from "@/components/SectionTitle";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["123 Royal Avenue", "Beverly Hills, CA 90210", "United States"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+1 (234) 567-890", "+1 (234) 567-891"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@royalhaven.com", "sales@royalhaven.com"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: [
      "Monday - Friday: 9AM - 6PM",
      "Saturday: 10AM - 4PM",
      "Sunday: By Appointment",
    ],
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiry_type: "general",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const createInquiry = useMutation({
    mutationFn: (data) => base44.entities.Inquiry.create(data),
    onSuccess: () => {
      setSubmitted(true);
      toast.success("Message sent successfully!");
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createInquiry.mutateAsync(formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-[#f9f6f1]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 bg-[#0b1c2d] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1c2d]/50 to-[#0b1c2d]" />

        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-12 h-0.5 bg-gradient-to-r from-transparent to-[#d4af37]" />
              <span className="text-[#d4af37] text-sm font-medium tracking-wider uppercase">
                Contact Us
              </span>
              <span className="w-12 h-0.5 bg-gradient-to-l from-transparent to-[#d4af37]" />
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
              Get in <span className="text-[#d4af37]">Touch</span>
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Ready to find your dream property? Our team of luxury real estate
              experts is here to help you every step of the way.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 px-6 -mt-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow"
              >
                <div className="w-14 h-14 bg-[#d4af37]/10 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-[#d4af37]" />
                </div>
                <h3 className="text-lg font-serif font-semibold text-[#0b1c2d] mb-3">
                  {item.title}
                </h3>
                <div className="space-y-1">
                  {item.details.map((detail, dIdx) => (
                    <p key={dIdx} className="text-gray-600 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-0.5 bg-gradient-to-r from-[#d4af37] to-transparent" />
                <span className="text-[#d4af37] text-sm font-medium tracking-wider uppercase">
                  Send a Message
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0b1c2d] mb-6">
                We'd Love to <span className="text-[#d4af37]">Hear</span> From
                You
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and one of our luxury property
                specialists will get back to you within 24 hours.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 rounded-2xl p-8 text-center"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-serif font-semibold text-green-800 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-green-600">
                    Thank you for reaching out. We'll be in touch soon.
                  </p>
                  <Button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        inquiry_type: "general",
                        message: "",
                      });
                    }}
                    className="mt-6 bg-green-600 hover:bg-green-700"
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">
                        Full Name *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        required
                        className="py-6"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">
                        Email Address *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="py-6"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">
                        Phone Number
                      </label>
                      <Input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (234) 567-890"
                        className="py-6"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">
                        Inquiry Type
                      </label>
                      <Select
                        value={formData.inquiry_type}
                        onValueChange={(v) =>
                          setFormData({ ...formData, inquiry_type: v })
                        }
                      >
                        <SelectTrigger className="py-6">
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">
                            General Inquiry
                          </SelectItem>
                          <SelectItem value="property">
                            Property Interest
                          </SelectItem>
                          <SelectItem value="booking">
                            Schedule Viewing
                          </SelectItem>
                          <SelectItem value="consultation">
                            Consultation
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Your Message *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your requirements..."
                      required
                      rows={5}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={createInquiry.isPending}
                    className="w-full py-6 bg-gradient-to-r from-[#d4af37] to-[#b8962e] text-[#0b1c2d] font-semibold text-lg hover:shadow-lg hover:shadow-[#d4af37]/30 transition-all"
                  >
                    {createInquiry.isPending ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Map & Quick Contact */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-xl h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.0766508088766!2d-118.40066768429055!3d34.07362858060152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6d147ab%3A0xd6c7c379fd081ed1!2sBeverly%20Hills%2C%20CA%2090210!5e0!3m2!1sen!2sus!4v1635959562000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>

              {/* Quick Contact Box */}
              <div className="bg-[#0b1c2d] rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4af37]/10 rounded-full blur-3xl" />

                <div className="relative">
                  <h3 className="text-2xl font-serif font-bold text-white mb-4">
                    Need Immediate Assistance?
                  </h3>
                  <p className="text-white/60 mb-6">
                    Our luxury property consultants are available 24/7 for your
                    convenience.
                  </p>

                  <div className="space-y-4">
                    <a
                      href="tel:+1234567890"
                      className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors group"
                    >
                      <div className="w-12 h-12 bg-[#d4af37] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Phone className="w-6 h-6 text-[#0b1c2d]" />
                      </div>
                      <div>
                        <p className="text-white/60 text-sm">
                          Call Us Directly
                        </p>
                        <p className="text-white font-semibold">
                          +1 (234) 567-890
                        </p>
                      </div>
                    </a>

                    <a
                      href="https://wa.me/1234567890"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors group"
                    >
                      <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <MessageCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-white/60 text-sm">
                          Chat on WhatsApp
                        </p>
                        <p className="text-white font-semibold">
                          Start Conversation
                        </p>
                      </div>
                    </a>
                  </div>

                  {/* Social Links */}
                  <div className="mt-8 pt-8 border-t border-white/10">
                    <p className="text-white/60 text-sm mb-4">Follow Us</p>
                    <div className="flex gap-4">
                      {[Facebook, Instagram, Twitter, Linkedin].map(
                        (Icon, idx) => (
                          <a
                            key={idx}
                            href="#"
                            className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#d4af37] transition-colors group"
                          >
                            <Icon className="w-5 h-5 text-white/60 group-hover:text-[#0b1c2d]" />
                          </a>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            subtitle="FAQ"
            title={
              <>
                Frequently Asked{" "}
                <span className="text-[#d4af37]">Questions</span>
              </>
            }
            description="Find answers to common questions about our services"
          />

          <div className="space-y-4">
            {[
              {
                q: "What areas do you cover?",
                a: "We specialize in luxury properties across Beverly Hills, Malibu, Miami Beach, Manhattan, and select international destinations including Monaco, London, and Dubai.",
              },
              {
                q: "How do I schedule a property viewing?",
                a: "You can schedule a viewing by filling out our contact form, calling us directly, or sending us an email. Our team will arrange a private viewing at your convenience.",
              },
              {
                q: "Do you offer virtual tours?",
                a: "Yes, we offer comprehensive virtual tours and video walkthroughs for all our properties, allowing you to explore from anywhere in the world.",
              },
              {
                q: "What is your commission structure?",
                a: "Our commission rates are competitive and vary based on the property and services required. Contact us for a personalized consultation.",
              },
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#f9f6f1] rounded-xl p-6"
              >
                <h4 className="text-lg font-serif font-semibold text-[#0b1c2d] mb-2">
                  {faq.q}
                </h4>
                <p className="text-gray-600">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
