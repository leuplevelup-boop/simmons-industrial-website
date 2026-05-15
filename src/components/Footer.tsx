"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";

const footerLinks = {
  services: [
    { name: "Plant & Machinery Installation", href: "#services" },
    { name: "Mobile Crane Hire", href: "#services" },
    { name: "Logistics & Transport", href: "#services" },
    { name: "Engineering Solutions", href: "#services" },
    { name: "Lifting Assurance", href: "#services" },
    { name: "Storage & Warehousing", href: "#services" },
  ],
  company: [
    { name: "About Us", href: "#why-choose-us" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "Certifications", href: "#" },
    { name: "Contact", href: "#contact" },
  ],
  locations: [
    "London",
    "Birmingham",
    "Manchester",
    "Bristol",
    "Cardiff",
    "Southampton",
    "Norwich",
    "Cambridge",
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#050508] border-t border-[#2a2a35]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/images/logo-icon.svg"
                alt="Simmons Industrial"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <div>
                <div className="text-lg font-bold text-white leading-tight">
                  Simmons <span className="text-[#e8b923]">Industrial</span>
                </div>
                <div className="text-[10px] text-[#6b7280] tracking-widest uppercase">
                  Services Ltd
                </div>
              </div>
            </div>
            <p className="text-sm text-[#6b7280] mb-6 leading-relaxed">
              Trusted since 1992. Safe, efficient plant movement, crane hire &
              industrial services across the UK & Europe.
            </p>
            <div className="space-y-3">
              <a
                href="tel:02086883553"
                className="flex items-center gap-2 text-sm text-[#9ca3af] hover:text-[#e8b923] transition-colors"
              >
                <Phone size={14} />
                020 8688 3553
              </a>
              <a
                href="mailto:info@simmons-industrial.co.uk"
                className="flex items-center gap-2 text-sm text-[#9ca3af] hover:text-[#e8b923] transition-colors"
              >
                <Mail size={14} />
                info@simmons-industrial.co.uk
              </a>
              <div className="flex items-start gap-2 text-sm text-[#9ca3af]">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" />
                <span>Unit 3, Beddington Farm Road, Croydon, CR0 4WQ</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-[#6b7280] hover:text-[#e8b923] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-[#6b7280] hover:text-[#e8b923] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-white font-bold mb-4">Areas Covered</h3>
            <div className="flex flex-wrap gap-2">
              {footerLinks.locations.map((location) => (
                <span
                  key={location}
                  className="px-3 py-1 bg-[#1a1a24] border border-[#2a2a35] rounded-full text-xs text-[#6b7280]"
                >
                  {location}
                </span>
              ))}
            </div>
            <p className="text-xs text-[#4b5563] mt-4">
              And many more locations across the UK & Europe
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#2a2a35]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#4b5563]">
            © {new Date().getFullYear()} Simmons Industrial Services Ltd. All
            rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm text-[#4b5563] hover:text-[#e8b923] transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-[#4b5563] hover:text-[#e8b923] transition-colors"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
