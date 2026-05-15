"use client";

import { useState } from "react";
import { ArrowRight, ArrowLeft, MapPin, Building2 } from "lucide-react";
import Image from "next/image";

const caseStudies = [
  {
    title: "Vital – Kidbrooke, South London",
    location: "Kidbrooke, South London",
    sector: "District Heating",
    description:
      "Offloaded and positioned all plant required for the District Heating Scheme Energy Centre comprising thermal stores, CHPs and boilers. The plantroom floor was 3m below ground level and all plant had to be posted and lowered through a small opening.",
    image: "/images/plant-installation-1.jpg",
    tags: ["Plant Movement", "Limited Access", "Energy Centre"],
  },
  {
    title: "Optimum Group – Grosvenor Crescent W1",
    location: "Grosvenor Crescent, London W1",
    sector: "Cooling Towers",
    description:
      "Dismantled and lifted down two cooling towers on two consecutive weekends using a 500te crane with its full complement of fixed fly to achieve the required radius.",
    image: "/images/crane-hire-1.jpg",
    tags: ["500te Crane", "Cooling Towers", "Weekend Work"],
  },
  {
    title: "Southend Hospital – Generator Delivery",
    location: "Southend Hospital, Essex",
    sector: "Healthcare",
    description:
      "Transported and positioned a number of items of plant for the new energy centre including PHEs, fuel tanks, vessels, chillers, switchboards and a generator. The generator was installed within 30 minutes despite challenging dimensions.",
    image: "/images/plant-installation-3.jpg",
    tags: ["Hospital", "Generator", "Energy Centre"],
  },
  {
    title: "Inktec – Printing Machinery Move",
    location: "Suffolk",
    sector: "Manufacturing",
    description:
      "Moved printing machinery for a regular client. The client had to cut a hole in the wall to allow access, then we got the machinery up, through and into its final position using specialist lifting equipment.",
    image: "/images/engineering-2.jpg",
    tags: ["Printing Press", "Restricted Access", "Machinery Move"],
  },
  {
    title: "Shepherd Engineering – Kings Cross",
    location: "Kings Cross, London",
    sector: "Construction",
    description:
      "Lifted into place 54 sections of modular riser and fixed them through the floors. Some risers had to be modified by our fabrication team on site after approval from the manufacturer and client.",
    image: "/images/engineering-1.jpg",
    tags: ["Modular Risers", "Onsite Fabrication", "High Rise"],
  },
  {
    title: "Great Ormond Street Hospital",
    location: "Great Ormond Street, London",
    sector: "Healthcare",
    description:
      "Collected two metal 'ship's masts' from the manufacturer, transported to site and craned into position using our 10te Kato City crane designed for tight working environments. Rigging team used chain hoists to orientate the masts.",
    image: "/images/lifting-2.jpg",
    tags: ["Hospital", "City Crane", "Precision Lifting"],
  },
];

export default function CaseStudies() {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((prev) => (prev + 1) % caseStudies.length);
  const prev = () =>
    setActiveIndex(
      (prev) => (prev - 1 + caseStudies.length) % caseStudies.length
    );

  const active = caseStudies[activeIndex];

  return (
    <section id="case-studies" className="py-24 bg-[#111118]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="gold-line w-12" />
            <span className="text-[#e8b923] text-sm font-semibold tracking-widest uppercase">
              Our Work
            </span>
            <div className="gold-line w-12" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6">
            Case <span className="text-gradient">Studies</span>
          </h2>

          <p className="text-lg text-[#9ca3af] max-w-2xl mx-auto">
            Real projects, real challenges, real results. See how we&apos;ve helped
            clients across the UK.
          </p>
        </div>

        {/* Featured case study */}
        <div
          className="bg-[#1a1a24] border border-[#2a2a35] rounded-2xl overflow-hidden mb-8"
          key={activeIndex}
        >
          <div className="grid lg:grid-cols-2">
            {/* Image */}
            <div className="relative h-64 lg:h-auto">
              <Image
                src={active.image}
                alt={active.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1a1a24]/80 lg:bg-gradient-to-l" />
            </div>

            {/* Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex flex-wrap gap-2 mb-4">
                {active.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-[#e8b923]/10 text-[#e8b923] text-xs font-semibold rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                {active.title}
              </h3>

              <div className="flex flex-wrap gap-4 mb-6 text-sm text-[#6b7280]">
                <span className="flex items-center gap-1">
                  <MapPin size={14} className="text-[#e8b923]" />
                  {active.location}
                </span>
                <span className="flex items-center gap-1">
                  <Building2 size={14} className="text-[#e8b923]" />
                  {active.sector}
                </span>
              </div>

              <p className="text-[#9ca3af] leading-relaxed mb-8">
                {active.description}
              </p>

              <a
                href="#contact"
                className="btn-primary w-fit"
              >
                Discuss Your Project
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-3 rounded-full transition-all ${
                  index === activeIndex
                    ? "bg-[#e8b923] w-8"
                    : "bg-[#2a2a35] hover:bg-[#3a3a45] w-3"
                }`}
              />
            ))}
          </div>

          <div className="flex gap-3">
            <button
              onClick={prev}
              className="w-12 h-12 bg-[#1a1a24] border border-[#2a2a35] rounded-full flex items-center justify-center hover:bg-[#2a2a35] transition-colors"
            >
              <ArrowLeft size={20} className="text-[#e8b923]" />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 bg-[#1a1a24] border border-[#2a2a35] rounded-full flex items-center justify-center hover:bg-[#2a2a35] transition-colors"
            >
              <ArrowRight size={20} className="text-[#e8b923]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
