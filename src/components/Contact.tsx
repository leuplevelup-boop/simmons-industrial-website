"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "020 8688 3553",
    href: "tel:02086883553",
    subtext: "Mon - Fri: 7:45am - 5:00pm",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@simmons-industrial.co.uk",
    href: "mailto:info@simmons-industrial.co.uk",
    subtext: "We reply within 24 hours",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Unit 3, Beddington Farm Road, Croydon, CR0 4WQ",
    href: "https://maps.google.com/?q=Simmons+Industrial+Croydon+CR0+4WQ",
    subtext: "Greater London, UK",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Monday - Friday",
    href: null,
    subtext: "7:45am - 5:00pm",
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="gold-line w-12" />
            <span className="text-[#e8b923] text-sm font-semibold tracking-widest uppercase">
              Get In Touch
            </span>
            <div className="gold-line w-12" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6">
            Contact <span className="text-gradient">Us</span>
          </h2>

          <p className="text-lg text-[#9ca3af] max-w-2xl mx-auto">
            Ready to discuss your project? Reach out and our team will get back
            to you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info) => (
              <div
                key={info.label}
                className="flex gap-4 p-4 bg-[#1a1a24] border border-[#2a2a35] rounded-xl hover:border-[#e8b923]/30 transition-colors"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-[#e8b923]/10 rounded-lg flex items-center justify-center">
                  <info.icon size={22} className="text-[#e8b923]" />
                </div>
                <div>
                  <div className="text-sm text-[#6b7280] mb-1">{info.label}</div>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-white font-semibold hover:text-[#e8b923] transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <div className="text-white font-semibold">{info.value}</div>
                  )}
                  <div className="text-sm text-[#6b7280] mt-1">{info.subtext}</div>
                </div>
              </div>
            ))}

            {/* Map placeholder */}
            <div className="mt-8 rounded-xl overflow-hidden border border-[#2a2a35] h-64 bg-[#1a1a24] flex items-center justify-center">
              <div className="text-center">
                <MapPin size={32} className="text-[#e8b923] mx-auto mb-2" />
                <p className="text-[#6b7280]">Croydon, Greater London</p>
                <p className="text-sm text-[#4b5563]">CR0 4WQ</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            {submitted ? (
              <div className="bg-[#1a1a24] border border-[#2a2a35] rounded-2xl p-12 text-center">
                <CheckCircle size={64} className="text-[#e8b923] mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">
                  Message Sent!
                </h3>
                <p className="text-[#9ca3af]">
                  Thank you for contacting us. We&apos;ll get back to you within 24
                  hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-[#1a1a24] border border-[#2a2a35] rounded-2xl p-8 space-y-6"
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John Smith"
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@company.com"
                      className="input-field"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="020 1234 5678"
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      placeholder="Your Company Ltd"
                      className="input-field"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Service Required *
                  </label>
                  <select required className="input-field">
                    <option value="">Select a service</option>
                    <option value="plant-installation">
                      Plant & Machinery Installation
                    </option>
                    <option value="crane-hire">
                      Mobile Crane Hire & Contract Lifting
                    </option>
                    <option value="logistics">Logistics & Transport</option>
                    <option value="engineering">Engineering Solutions</option>
                    <option value="lifting-assurance">
                      Lifting Assurance Advisors
                    </option>
                    <option value="storage">Storage & Warehousing</option>
                    <option value="other">Other / Multiple Services</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell us about your project..."
                    className="input-field resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full justify-center text-lg"
                >
                  <Send size={18} />
                  Send Message
                </button>

                <p className="text-xs text-[#6b7280] text-center">
                  By submitting this form, you agree to our privacy policy. We
                  never share your data with third parties.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
