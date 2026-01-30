import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Calendar, ArrowUp, Crown } from "lucide-react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

export default function Layout({ children }) {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation(); // This tracks the current page URL

  // Scroll to top whenever the URL changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    // Simulate initial load screen
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Initial loading screen
  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-[#0b1c2d] flex items-center justify-center z-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <Crown className="w-16 h-16 text-[#d4af37] mx-auto" />
          </motion.div>
          <h2 className="text-2xl font-serif font-bold text-white mt-4">
            ROYAL <span className="text-[#d4af37]">HAVEN</span>
          </h2>
          <div className="flex justify-center gap-1 mt-4">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                className="w-2 h-2 bg-[#d4af37] rounded-full"
              />
            ))}
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f9f6f1]">
      {/* Dynamic Font and Root Styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
        
        :root {
          --royal-blue: #0b1c2d;
          --gold: #d4af37;
          --ivory: #f9f6f1;
        }
        
        * {
          font-family: 'Inter', sans-serif;
        }
        
        .font-serif {
          font-family: 'Playfair Display', serif;
        }
        
        ::-webkit-scrollbar {
          width: 10px;
        }
        
        ::-webkit-scrollbar-track {
          background: var(--ivory);
        }
        
        ::-webkit-scrollbar-thumb {
          background: var(--gold);
          border-radius: 5px;
        }
        
        ::selection {
          background: var(--gold);
          color: var(--royal-blue);
        }
      `,
        }}
      />

      {/* Navbar */}
      <Navbar />

      {/* Page Content with Key to force re-render on navigation */}
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname} // This forces the transition to play when you switch pages
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {children}
        </motion.main>
      </AnimatePresence>

      {/* Footer */}
      <Footer />

      {/* Floating Book Visit Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-24 right-6 z-40"
      >
        <Link
          to={createPageUrl("Contact")}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#d4af37] to-[#b8962e] text-[#0b1c2d] font-semibold rounded-full shadow-lg hover:shadow-xl hover:shadow-[#d4af37]/30 transition-all group"
        >
          <Calendar className="w-5 h-5" />
          <span className="hidden sm:inline">Book a Visit</span>
        </Link>
      </motion.div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 w-12 h-12 bg-[#0b1c2d] text-white rounded-full shadow-lg hover:bg-[#152a3d] transition-colors flex items-center justify-center"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
