"use client";

import { motion } from "framer-motion";
import { Phone, ArrowRight, Shield, Clock, Award } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Industrial plant movement"
          fill
          className="object-cover"
          priority
        />
        <div className="hero-gradient absolute inset-0" />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#e8b923]/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="gold-line w-12" />
                <span className="text-[#e8b923] text-sm font-semibold tracking-widest uppercase">
                  Trusted Since 1992
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                Plant Handling{" "}
                <span className="text-gradient">Specialists</span>
              </h1>

              <p className="text-lg text-[#9ca3af] mb-8 max-w-xl leading-relaxed">
                Safe, efficient plant movement, machinery installation, crane hire
                & contract lifting across the UK & Europe. 33+ years of
                industrial expertise.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a href="tel:02086883553" className="btn-primary">
                  <Phone size={18} />
                  Call 020 8688 3553
                </a>
                <a href="#services" className="btn-outline">
                  Our Services
                  <ArrowRight size={18} />
                </a>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-6">
                {[
                  { icon: Shield, text: "Fully Insured" },
                  { icon: Clock, text: "33+ Years Experience" },
                  { icon: Award, text: "Industry Certified" },
                ].map((badge, index) => (
                  <motion.div
                    key={badge.text}
                    className="flex items-center gap-2 text-sm text-[#6b7280]"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <badge.icon size={18} className="text-[#e8b923]" />
                    {badge.text}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right - Stats cards */}
          <motion.div
            className="hidden lg:grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {[
              { number: "33+", label: "Years Experience" },
              { number: "1000+", label: "Projects Completed" },
              { number: "24/7", label: "Emergency Response" },
              { number: "100%", label: "Safety Record" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-[#1a1a24]/80 backdrop-blur-sm border border-[#2a2a35] rounded-xl p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.15 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="stat-number text-3xl">{stat.number}</div>
                <div className="text-sm text-[#6b7280] mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-[#e8b923]/50 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 bg-[#e8b923] rounded-full"
            animate={{ y: [0, 16, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
