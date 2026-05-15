"use client";

import { Phone, ArrowRight, ClipboardCheck } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 bg-[#111118] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #e8b923 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-br from-[#1a1a24] to-[#111118] border border-[#2a2a35] rounded-2xl p-8 sm:p-12 lg:p-16 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#e8b923]/10 rounded-full mb-6">
            <ClipboardCheck size={32} className="text-[#e8b923]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6">
            Have a <span className="text-gradient">New Project?</span>
          </h2>

          <p className="text-lg text-[#9ca3af] mb-10 max-w-2xl mx-auto">
            Get a free, no-obligation site survey and quote. Our experts will
            assess your requirements and provide a detailed plan tailored to your
            project.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:02086883553" className="btn-primary text-lg px-8 py-4">
              <Phone size={20} />
              Call 020 8688 3553
            </a>
            <a href="#contact" className="btn-outline text-lg px-8 py-4">
              Get a Quote
              <ArrowRight size={20} />
            </a>
          </div>

          <p className="text-sm text-[#6b7280] mt-6">
            Free site survey • No obligation • Response within 24 hours
          </p>
        </div>
      </div>
    </section>
  );
}
