"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";

export default function Contact() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: searchParams.get("service") || "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Simulate form submission delay - no backend connected
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // NOTE: This form does not currently send messages.
    // No backend API is connected. Submissions are not delivered.
    // For actual contact, use the email link in the contact information section.
    setStatus("success");
    setFormData({ name: "", email: "", company: "", service: "", message: "" });
  };

  const services = [
    { value: "excel-data-cleaning", label: "Excel Data Cleaning" },
    { value: "excel-automation", label: "Excel Automation" },
    { value: "powerbi-dashboards", label: "Power BI Dashboards" },
    { value: "sql-data-analysis", label: "SQL Data Analysis" },
    { value: "python-data-processing", label: "Python Data Processing" },
    { value: "business-reporting", label: "Business Reporting" },
    { value: "other", label: "Other / Not Sure" },
  ];

  return (
    <section
      id="contact"
      className="py-24 md:py-32 px-6"
      aria-labelledby="contact-title"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-violet-500/10 text-violet-400 text-sm font-medium mb-4 animate-fade-in">
            Get In Touch
          </span>
          <h2
            id="contact-title"
            className="text-4xl md:text-5xl font-bold mb-4 animate-slide-up"
          >
            Let&apos;s Work{" "}
            <span className="gradient-text">Together</span>
          </h2>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: "100ms" }}>
            Available for freelance projects, consulting engagements, and remote full-time roles.
            Based in Mossel Bay, South Africa (GMT+2) — timezone flexible for international clients.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8 animate-slide-up" style={{ animationDelay: "100ms" }}>
            <div className="glass-strong rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-violet-500 rounded-full" />
                Contact Information
              </h3>
              <div className="space-y-6">
                <a
                  href="mailto:julianlombard333@gmail.com"
                  className="flex items-center gap-4 p-4 glass rounded-xl hover:glass-strong transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center flex-shrink-0 text-violet-400 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 uppercase tracking-wider">Email</div>
                    <div className="text-lg font-medium text-slate-100 group-hover:text-violet-400 transition-colors">julianlombard333@gmail.com</div>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/julian-lombard-21b877277/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 glass rounded-xl hover:glass-strong transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0 text-blue-400 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 uppercase tracking-wider">LinkedIn</div>
                    <div className="text-lg font-medium text-slate-100 group-hover:text-blue-400 transition-colors">linkedin.com/in/julian-lombard-21b877277</div>
                  </div>
                </a>

                <a
                  href="https://github.com/julianlombard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 glass rounded-xl hover:glass-strong transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-500/10 flex items-center justify-center flex-shrink-0 text-slate-400 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 uppercase tracking-wider">GitHub</div>
                    <div className="text-lg font-medium text-slate-100 group-hover:text-slate-300 transition-colors">github.com/julianlombard</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 glass rounded-xl">
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0 text-green-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 uppercase tracking-wider">Location</div>
                    <div className="text-lg font-medium text-slate-100">Mossel Bay, Western Cape, South Africa (GMT+2)</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 glass rounded-xl">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0 text-amber-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 uppercase tracking-wider">Phone</div>
                    <div className="text-lg font-medium text-slate-100">+27 72 596 8603</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-strong rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-violet-500 rounded-full" />
                Availability
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 glass rounded-xl">
                  <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />
                  <div>
                    <div className="font-medium">Open to New Opportunities</div>
                    <div className="text-sm text-slate-400">Freelance, contract, and remote full-time roles</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 glass rounded-xl">
                  <div className="w-3 h-3 rounded-full bg-amber-400 animate-pulse" aria-hidden="true" />
                  <div>
                    <div className="font-medium">Remote-First</div>
                    <div className="text-sm text-slate-400">Timezone flexible (GMT+2 / PST / EST friendly)</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 glass rounded-xl">
                  <div className="w-3 h-3 rounded-full bg-blue-400 animate-pulse" aria-hidden="true" />
                  <div>
                    <div className="font-medium">Response Time</div>
                    <div className="text-sm text-slate-400">Typically within 24 hours on business days</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 glass rounded-xl">
                  <div className="w-3 h-3 rounded-full bg-violet-400 animate-pulse" aria-hidden="true" />
                  <div>
                    <div className="font-medium">Portfolio Domain</div>
                    <div className="text-sm text-slate-400">julianlombard.com</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-slide-up" style={{ animationDelay: "200ms" }}>
            <form onSubmit={handleSubmit} className="glass-strong rounded-2xl p-8" noValidate>
              <input type="hidden" name="form_type" value="contact" />
              <input type="hidden" name="_gotcha" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                      Full Name <span className="text-violet-400" aria-hidden="true">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      autoComplete="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-navy-900 border border-navy-700 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all"
                      placeholder="Julian Paul Lombard"
                      aria-required="true"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                      Email Address <span className="text-violet-400" aria-hidden="true">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      autoComplete="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-navy-900 border border-navy-700 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all"
                      placeholder="julian@company.com"
                      aria-required="true"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-2">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      autoComplete="organization"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 bg-navy-900 border border-navy-700 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all"
                      placeholder="Acme Corp"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-slate-300 mb-2">
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 bg-navy-900 border border-navy-700 rounded-xl text-slate-100 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all appearance-none bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 fill=%22none%22 viewBox=%220 0 24 24%22 stroke=%22%2364748b%22%3E%3Cpath stroke-linecap=%22round%22 stroke-linejoin=%22round%22 stroke-width=%222%22 d=%22M19 9l-7 7-7-7%22/%3E%3C/svg%3E')] bg-right-4 bg-center bg-no-repeat pr-10"
                    >
                      <option value="">Select a service...</option>
                      {services.map((s) => (
                        <option key={s.value} value={s.value}>
                          {s.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Project Details <span className="text-violet-400" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-navy-900 border border-navy-700 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all resize-none"
                    placeholder="Tell me about your project, timeline, budget range, and any specific requirements..."
                    aria-required="true"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all ${
                    status === "submitting"
                      ? "bg-navy-700 text-slate-500 cursor-not-allowed"
                      : "bg-violet-500 hover:bg-violet-600 text-white hover:shadow-[0_0_30px_rgba(127,34,254,0.4)]"
                  }`}
                >
                  {status === "submitting" ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </span>
                  ) : status === "success" ? (
                    <span className="flex items-center justify-center gap-2 text-amber-400">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      Form Submitted (Demo Only — Not Sent)
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>

                {status === "error" && (
                  <p className="text-red-400 text-center text-sm" role="alert">
                    Something went wrong. Please try again or email me directly at julianlombard333@gmail.com
                  </p>
                )}

                <p className="text-xs text-slate-500 text-center">
                  This form is a demo — no backend is connected. Messages are not sent.
                  For inquiries, email <a href="mailto:julianlombard333@gmail.com" className="text-violet-400 hover:underline">julianlombard333@gmail.com</a>
                  directly. See <a href="/privacy" className="text-violet-400 hover:underline">Privacy Policy</a>.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}