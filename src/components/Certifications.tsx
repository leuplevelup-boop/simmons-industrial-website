"use client";

import Image from "next/image";

const certifications = [
  {
    name: "Ariba Network",
    image: "/images/ariba.png",
    description: "Registered supplier on the Ariba Network for procurement.",
  },
  {
    name: "Builder's Profile",
    image: "/images/builders-profile.jpg",
    description: "Approved contractor with verified health and safety credentials.",
  },
  {
    name: "Elite GB",
    image: "/images/brochure.jpg",
    description: "Elite GB certified for quality and compliance standards.",
  },
  {
    name: "CHAS",
    image: "/images/chas.png",
    description: "Contractors Health and Safety Assessment Scheme accredited.",
  },
  {
    name: "SafeContractor",
    image: "/images/safecontractor.jpg",
    description: "SafeContractor approved for health and safety excellence.",
  },
  {
    name: "Social Value",
    image: "/images/social-value.webp",
    description: "Committed to delivering social value in all our operations.",
  },
];

export default function Certifications() {
  return (
    <section className="py-20 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="gold-line w-12" />
            <span className="text-[#e8b923] text-sm font-semibold tracking-widest uppercase">
              Accreditations
            </span>
            <div className="gold-line w-12" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Certified <span className="text-gradient">Excellence</span>
          </h2>

          <p className="text-[#9ca3af] max-w-2xl mx-auto">
            We maintain the highest industry standards. Fully accredited and
            compliant across all our operations.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="group bg-[#1a1a24] border border-[#2a2a35] rounded-xl p-6 text-center hover:border-[#e8b923]/50 transition-all hover:scale-105"
            >
              <div className="relative w-16 h-16 mx-auto mb-4">
                <Image
                  src={cert.image}
                  alt={cert.name}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-sm font-bold text-white mb-2">{cert.name}</h3>
              <p className="text-xs text-[#6b7280] opacity-0 group-hover:opacity-100 transition-opacity">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
