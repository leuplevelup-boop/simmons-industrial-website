"use client";

import { Calendar, Users, MapPin, CheckCircle } from "lucide-react";

const stats = [
  {
    icon: Calendar,
    value: "33+",
    label: "Years in Business",
    description: "Trusted since 1992",
  },
  {
    icon: Users,
    value: "1000+",
    label: "Projects Completed",
    description: "Across the UK & Europe",
  },
  {
    icon: MapPin,
    value: "25+",
    label: "Cities Covered",
    description: "Nationwide service",
  },
  {
    icon: CheckCircle,
    value: "100%",
    label: "Safety Record",
    description: "Zero compromise",
  },
];

export default function Stats() {
  return (
    <section className="py-20 bg-[#111118] border-y border-[#2a2a35]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-[#e8b923]/10 rounded-xl mb-4">
                <stat.icon size={28} className="text-[#e8b923]" />
              </div>
              <div className="stat-number text-4xl sm:text-5xl">
                {stat.value}
              </div>
              <div className="text-white font-semibold mt-2">{stat.label}</div>
              <div className="text-sm text-[#6b7280] mt-1">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
