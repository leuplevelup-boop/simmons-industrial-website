"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Users, MapPin, Calendar, CheckCircle } from "lucide-react";

const stats = [
  {
    icon: Calendar,
    value: 33,
    suffix: "+",
    label: "Years in Business",
    description: "Trusted since 1992",
  },
  {
    icon: Users,
    value: 1000,
    suffix: "+",
    label: "Projects Completed",
    description: "Across the UK & Europe",
  },
  {
    icon: MapPin,
    value: 25,
    suffix: "+",
    label: "Cities Covered",
    description: "Nationwide service",
  },
  {
    icon: CheckCircle,
    value: 100,
    suffix: "%",
    label: "Safety Record",
    description: "Zero compromise",
  },
];

function AnimatedCounter({
  value,
  suffix,
  isInView,
}: {
  value: number;
  suffix: string;
  isInView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-[#111118] border-y border-[#2a2a35]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-[#e8b923]/10 rounded-xl mb-4">
                <stat.icon size={28} className="text-[#e8b923]" />
              </div>
              <div className="stat-number text-4xl sm:text-5xl">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  isInView={isInView}
                />
              </div>
              <div className="text-white font-semibold mt-2">{stat.label}</div>
              <div className="text-sm text-[#6b7280] mt-1">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
