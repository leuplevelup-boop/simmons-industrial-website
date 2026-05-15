"use client";

import {
  Shield,
  Award,
  Clock,
  Users,
  MapPin,
  HeadphonesIcon,
} from "lucide-react";
import Image from "next/image";

const reasons = [
  {
    icon: Shield,
    title: "Fully Insured & Compliant",
    description:
      "CPA contract lifting, fully insured operations. All work carried out to LOLER regulations with comprehensive risk assessments.",
  },
  {
    icon: Award,
    title: "Industry Certified",
    description:
      "CHAS, SafeContractor, Constructionline, Elite GB certified. Ariba Network registered and Builder's Profile approved.",
  },
  {
    icon: Clock,
    title: "33+ Years Experience",
    description:
      "Trusted since 1992. Decades of expertise in plant movement, crane operations and industrial logistics across the UK.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description:
      "Qualified appointed persons, lift supervisors, riggers and engineers. CSCS, CPCS and NPORS certified operatives.",
  },
  {
    icon: MapPin,
    title: "UK & European Coverage",
    description:
      "Based in Croydon with nationwide coverage. European logistics network for cross-border equipment transport.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description:
      "Emergency response available around the clock. Dedicated project managers for every job, big or small.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-24 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/images/plant-installation-2.jpg"
                alt="Simmons Industrial team at work"
                width={600}
                height={500}
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/60 to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#e8b923] text-[#0a0a0f] p-6 rounded-xl shadow-2xl">
              <div className="text-4xl font-extrabold">33+</div>
              <div className="text-sm font-semibold">Years of Excellence</div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="gold-line w-12" />
              <span className="text-[#e8b923] text-sm font-semibold tracking-widest uppercase">
                Why Simmons
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6">
              Why Hire <span className="text-gradient">Simmons?</span>
            </h2>

            <p className="text-lg text-[#9ca3af] mb-10">
              We don't just move equipment — we solve complex industrial
              challenges. From hospitals to data centres, our expertise ensures
              your project is completed safely, on time and on budget.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {reasons.map((reason) => (
                <div
                  key={reason.title}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-[#1a1a24] border border-[#2a2a35] rounded-lg flex items-center justify-center">
                    <reason.icon size={22} className="text-[#e8b923]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">{reason.title}</h3>
                    <p className="text-sm text-[#6b7280] leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
