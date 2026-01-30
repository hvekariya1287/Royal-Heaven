import React from "react";
import { motion } from "framer-motion";
import { Crown } from "lucide-react";

export default function Loader({ fullScreen = true }) {
  const containerClass = fullScreen
    ? "fixed inset-0 bg-[#0b1c2d] flex items-center justify-center z-50"
    : "flex items-center justify-center py-20";

  return (
    <div className={containerClass}>
      <div className="text-center">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 2, repeat: Infinity, ease: "linear" },
            scale: { duration: 1, repeat: Infinity },
          }}
          className="inline-block mb-4"
        >
          <Crown className="w-16 h-16 text-[#d4af37]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-serif font-bold text-white mb-2">
            ROYAL <span className="text-[#d4af37]">HAVEN</span>
          </h2>
          <div className="flex items-center justify-center gap-1">
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
    </div>
  );
}
