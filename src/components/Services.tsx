"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Truck,
  Forklift,
  Settings,
  ShieldCheck,
  Warehouse,
  Wrench,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";

const services = [
  {
    icon: Wrench,
    title: "Plant & Machinery Installation",
    description:
      "Expert handling, offloading and positioning of heavy industrial equipment. From chillers and generators to printing presses and MRI scanners.",
    image: "/images/plant-installation-1.jpg",
    href: "#plant-installation",
    features: [
      "Factory relocations",
      "Equipment positioning",
      "Mechanical & electrical",
      "Precision alignment",
    ],
  },
  {
    icon: Truck,
    title: "Logistics & Transport",
    description:
      "FORS accredited road transport across the UK and Europe. Safe, efficient delivery of your valuable equipment with full tracking.",
    image: "/images/logistics-1.jpg",
    href: "#logistics",
    features: [
      "UK & European coverage",
      "FORS accredited",
      "Just-in-time delivery",
      "Specialist vehicles",
    ],
  },
  {
    icon: Forklift,
    title: "Mobile Crane Hire & Contract Lifting",
    description:
      "CPA contract lifting with fully insured operations. From 10te city cranes to 500te heavy lifters — we manage the entire lift.",
    image: "/images/crane-hire-1.jpg",
    href: "#crane-hire",
    features: [
      "CPA contract lifting",
      "Appointed person",
      "Lift supervision",
      "Method statements",
    ],
  },
  {
    icon: Settings,
    title: "Engineering Solutions",
    description:
      "Bespoke fabrication, steelwork modifications and onsite engineering. We make the 'round peg fit the square hole'.",
    image: "/images/engineering-1.jpg",
    href: "#engineering",
    features: [
      "Custom fabrication",
      "Steelwork modifications",
      "Onsite welding",
      "Design & build",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Lifting Assurance Advisors",
    description:
      "Expert consultancy for safe lifting operations. Pre-lift planning, method statements, risk assessments and compliance auditing.",
    image: "/images/lifting-1.jpg",
    href: "#lifting-assurance",
    features: [
      "Lift planning",
      "Risk assessments",
      "LOLER compliance",
      "Safety audits",
    ],
  },
  {
    icon: Warehouse,
    title: "Storage & Warehousing",
    description:
      "Safe, dry storage at our Surrey and Kent facilities. Secure warehousing with just-in-time delivery across the UK.",
    image: "/images/storage-1.jpg",
    href: "#storage",
    features: [
      "Secure facilities",
      "Climate controlled",
      "Inventory management",
      "Nationwide distribution",
    ],
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="service-card group relative bg-[#1a1a24] border border-[#2a2a35] rounded-xl overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a24] to-transparent" />
        <div className="absolute top-4 left-4 w-12 h-12 bg-[#e8b923] rounded-lg flex items-center justify-center">
          <service.icon size={24} className="text-[#0a0a0f]" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#e8b923] transition-colors">
          {service.title}
        </h3>
        <p className="text-[#9ca3af] text-sm mb-4 leading-relaxed">
          {service.description}
        </p>

        <ul className="space-y-2 mb-6">
          {service.features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-2 text-sm text-[#6b7280]"
            >
              <div className="w-1.5 h-1.5 bg-[#e8b923] rounded-full" />
              {feature}
            </li>
          ))}
        </ul>

        <a
          href={service.href}
          className="inline-flex items-center gap-2 text-[#e8b923] font-semibold text-sm hover:gap-3 transition-all"
        >
          Learn More
          <ArrowRight size={16} />
        </a>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="services" className="py-24 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={headerRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="gold-line w-12" />
            <span className="text-[#e8b923] text-sm font-semibold tracking-widest uppercase">
              What We Do
            </span>
            <div className="gold-line w-12" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6">
            Our{" "}
            <span className="text-gradient">Services</span>
          </h2>

          <p className="text-lg text-[#9ca3af] max-w-2xl mx-auto">
            Complete industrial solutions from plant movement to storage.
            One partner for all your heavy lifting and logistics needs.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
