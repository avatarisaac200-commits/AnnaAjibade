"use client";

import { useState } from "react";
import { HiLocationMarker, HiMail, HiPhone } from "react-icons/hi";
import { FiLinkedin, FiMessageCircle, FiTwitter } from "react-icons/fi";
import useRevealRefs from "@/components/useRevealRefs";

const WHATSAPP_NUMBER = "2349162057661";

export default function Contact() {
  const setRef = useRevealRefs();
  const [formData, setFormData] = useState({
    name: "",
    organisation: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappMessage = [
      "Hello Anna, I'd like to discuss a project with you.",
      "",
      `Name: ${formData.name}`,
      `Organisation: ${formData.organisation || "Not provided"}`,
      `Email: ${formData.email}`,
      `Service: ${formData.service || "Not selected"}`,
      `Message: ${formData.message}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="site-section bg-ink">
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-gold/5 blur-[120px]" />

      <div className="section-frame relative z-10">
        <div className="mb-20 text-center">
          <p
            ref={setRef(0)}
            className="reveal mb-4 font-mono text-xs uppercase tracking-[0.3em] text-gold"
          >
            Get In Touch
          </p>
          <h2
            ref={setRef(1)}
            className="reveal delay-1 mb-6 font-display text-4xl font-black leading-tight md:text-6xl lg:text-7xl"
          >
            Ready to structure your{" "}
            <span className="gold-text italic">next project?</span>
          </h2>
          <p
            ref={setRef(2)}
            className="reveal delay-2 mx-auto max-w-xl text-lg text-cream/55"
          >
            Whether you need clarity, execution support, or embedded project
            management, this is the place to start the conversation.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          <div ref={setRef(3)} className="reveal delay-2">
            <form
              onSubmit={handleSubmit}
              className="space-y-5 rounded-3xl border border-gold/15 bg-cream/3 p-6 md:p-8"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block font-mono text-xs uppercase tracking-widest text-cream/50">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full rounded-xl border border-gold/20 bg-ink px-4 py-3 text-sm text-cream placeholder:text-cream/25 transition-colors focus:border-gold/50 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-2 block font-mono text-xs uppercase tracking-widest text-cream/50">
                    Organisation
                  </label>
                  <input
                    type="text"
                    name="organisation"
                    value={formData.organisation}
                    onChange={handleChange}
                    placeholder="Your organisation"
                    className="w-full rounded-xl border border-gold/20 bg-ink px-4 py-3 text-sm text-cream placeholder:text-cream/25 transition-colors focus:border-gold/50 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block font-mono text-xs uppercase tracking-widest text-cream/50">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full rounded-xl border border-gold/20 bg-ink px-4 py-3 text-sm text-cream placeholder:text-cream/25 transition-colors focus:border-gold/50 focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block font-mono text-xs uppercase tracking-widest text-cream/50">
                  What do you need?
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full appearance-none rounded-xl border border-gold/20 bg-ink px-4 py-3 text-sm text-cream transition-colors focus:border-gold/50 focus:outline-none"
                >
                  <option value="">Select a service</option>
                  <option>Ignite Session</option>
                  <option>Implementation Partnership</option>
                  <option>Impact Execution</option>
                  <option>Retention Model</option>
                  <option>Not sure yet</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block font-mono text-xs uppercase tracking-widest text-cream/50">
                  Message
                </label>
                <textarea
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-xl border border-gold/20 bg-ink px-4 py-3 text-sm text-cream placeholder:text-cream/25 transition-colors focus:border-gold/50 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full rounded-xl bg-gold py-4 text-sm font-semibold tracking-wide text-ink transition-all duration-300 hover:bg-gold-light"
              >
                Send Message
              </button>

              <p className="text-center text-xs text-cream/45">
                This currently opens WhatsApp with your message prefilled.
              </p>
            </form>
          </div>

          <div
            ref={setRef(4)}
            className="reveal delay-3 flex flex-col justify-between gap-8"
          >
            <div>
              <h3 className="mb-6 font-display text-2xl font-bold text-cream">
                Prefer a direct line?
              </h3>
              <div className="space-y-5">
                {[
                  {
                    icon: HiMail,
                    label: "Email",
                    value: "theluciusbrand@gmail.com",
                    href: "mailto:theluciusbrand@gmail.com",
                  },
                  {
                    icon: HiPhone,
                    label: "Call",
                    value: "+2349162057661",
                    href: "tel:+2349162057661",
                  },
                  {
                    icon: FiMessageCircle,
                    label: "WhatsApp",
                    value: "Send a WhatsApp message",
                    href: "https://wa.me/2349162057661?text=Hello%20Anna%2C%20I%27d%20like%20to%20discuss%20a%20project%20with%20you.",
                  },
                  {
                    icon: HiLocationMarker,
                    label: "Based in",
                    value: "Available globally",
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gold/20 bg-gold/10">
                      <item.icon className="text-gold" size={16} />
                    </div>
                    <div>
                      <p className="mb-0.5 font-mono text-xs uppercase tracking-widest text-cream/40">
                        {item.label}
                      </p>
                      {"href" in item && item.href ? (
                        <a
                          href={item.href}
                          target={item.label === "WhatsApp" ? "_blank" : undefined}
                          rel={item.label === "WhatsApp" ? "noreferrer" : undefined}
                          className="text-sm text-cream transition-colors hover:text-gold"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm text-cream">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-4 font-mono text-xs uppercase tracking-widest text-cream/40">
                Connect
              </p>
              <div className="flex gap-4">
                {[
                  { icon: FiLinkedin, label: "LinkedIn", href: "#" },
                  { icon: FiTwitter, label: "Twitter", href: "#" },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold/20 text-cream/50 transition-all duration-300 hover:border-gold/50 hover:text-gold"
                  >
                    <item.icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-sage/30 bg-sage/5 p-6">
              <div className="mb-2 flex items-center gap-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-sage-light" />
                <span className="font-mono text-xs uppercase tracking-widest text-sage-light">
                  Currently available
                </span>
              </div>
              <p className="text-sm text-cream/60">
                Open to new project engagements, implementation partnerships,
                and embedded support arrangements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
