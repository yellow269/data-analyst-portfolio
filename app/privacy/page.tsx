import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Julian Lombard's Data Analyst portfolio website.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-navy-950">
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-navy-950 to-navy-900">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-violet-500/10 text-violet-400 text-sm font-medium mb-4 animate-fade-in">
              Privacy Policy
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-up">
              Privacy Policy
            </h1>
            <p className="text-slate-300 text-lg animate-slide-up" style={{ animationDelay: "100ms" }}>
              Last updated: {new Date().toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto space-y-10">
          <article className="glass-strong rounded-2xl p-8 animate-slide-up">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <span className="w-2 h-8 bg-violet-500 rounded-full" />
              Information We Collect
            </h2>
            <p className="text-slate-300 mb-4">
              When you use the contact form on this website, we collect the following personal information:
            </p>
            <ul className="space-y-2 text-slate-300 list-disc list-inside">
              <li>Full name</li>
              <li>Email address</li>
              <li>Company or organization name (optional)</li>
              <li>Service of interest (optional)</li>
              <li>Project details and message content</li>
            </ul>
            <p className="text-slate-300 mt-4">
              We do not collect any other personal data, browsing history, or tracking information through cookies,
              analytics scripts, or third-party services on this website.
            </p>
          </article>

          <article className="glass-strong rounded-2xl p-8 animate-slide-up" style={{ animationDelay: "100ms" }}>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <span className="w-2 h-8 bg-violet-500 rounded-full" />
              How We Use Your Information
            </h2>
            <p className="text-slate-300 mb-4">
              The information you provide through the contact form is used solely to:
            </p>
            <ul className="space-y-2 text-slate-300 list-disc list-inside">
              <li>Respond to your inquiry or project request</li>
              <li>Communicate with you about potential freelance, contract, or employment opportunities</li>
              <li>Provide quotes or proposals for the services you requested</li>
            </ul>
            <p className="text-slate-300 mt-4">
              Your information is not used for marketing emails, newsletters, or any purpose unrelated to your
              specific inquiry.
            </p>
          </article>

          <article className="glass-strong rounded-2xl p-8 animate-slide-up" style={{ animationDelay: "200ms" }}>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <span className="w-2 h-8 bg-violet-500 rounded-full" />
              Data Storage and Handling
            </h2>
            <p className="text-slate-300 mb-4">
              <strong>Current implementation:</strong> The contact form on this website is a front-end demonstration.
              Form submissions are not currently sent to a backend server, database, or email service.
              When you submit the form, you will see a simulated success message, but no data is actually
              transmitted or stored.
            </p>
            <p className="text-slate-300 mb-4">
              <strong>Future implementation:</strong> If a backend service is added (e.g., a form endpoint,
              email service, or CRM integration), submitted data will be:
            </p>
            <ul className="space-y-2 text-slate-300 list-disc list-inside">
              <li>Transmitted over HTTPS/TLS encryption</li>
              <li>Stored only for as long as necessary to respond to your inquiry</li>
              <li>Not shared with third parties except as required to deliver the requested service</li>
              <li>Protected with reasonable security measures appropriate to the sensitivity of the data</li>
            </ul>
            <p className="text-slate-300 mt-4">
              This website does not use cookies, localStorage, sessionStorage, or any client-side tracking
              technologies.
            </p>
          </article>

          <article className="glass-strong rounded-2xl p-8 animate-slide-up" style={{ animationDelay: "300ms" }}>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <span className="w-2 h-8 bg-violet-500 rounded-full" />
              Your Rights
            </h2>
            <p className="text-slate-300 mb-4">
              You have the right to:
            </p>
            <ul className="space-y-2 text-slate-300 list-disc list-inside">
              <li>Request access to any personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your personal data</li>
              <li>Object to processing of your data</li>
              <li>Withdraw consent at any time (where processing is based on consent)</li>
            </ul>
            <p className="text-slate-300 mt-4">
              To exercise any of these rights, or if you have questions about this policy, please contact:
            </p>
            <p className="text-slate-300 mt-2">
              <strong>Julian Paul Lombard</strong><br />
              Email: julianlombard333@gmail.com
            </p>
          </article>

          <article className="glass-strong rounded-2xl p-8 animate-slide-up" style={{ animationDelay: "400ms" }}>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <span className="w-2 h-8 bg-violet-500 rounded-full" />
              Third-Party Links
            </h2>
            <p className="text-slate-300 mb-4">
              This website contains links to external websites (LinkedIn, GitHub, email). This privacy policy
              applies only to this website. We are not responsible for the privacy practices or content of
              third-party sites. Please review their privacy policies before providing any personal information.
            </p>
          </article>

          <article className="glass-strong rounded-2xl p-8 animate-slide-up" style={{ animationDelay: "500ms" }}>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <span className="w-2 h-8 bg-violet-500 rounded-full" />
              Changes to This Policy
            </h2>
            <p className="text-slate-300 mb-4">
              We may update this privacy policy from time to time. Any changes will be posted on this page
              with an updated &ldquo;Last updated&rdquo; date. We encourage you to review this policy periodically.
            </p>
          </article>

          <article className="glass-strong rounded-2xl p-8 animate-slide-up" style={{ animationDelay: "600ms" }}>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <span className="w-2 h-8 bg-violet-500 rounded-full" />
              Contact
            </h2>
            <p className="text-slate-300">
              If you have any questions about this privacy policy or our data practices, please contact:
            </p>
            <p className="text-slate-300 mt-2">
              <strong>Julian Paul Lombard</strong><br />
              Email: julianlombard333@gmail.com<br />
              Location: Mossel Bay, Western Cape, South Africa
            </p>
          </article>
        </div>
      </section>

      <section className="py-16 px-6 bg-navy-950 border-t border-navy-800">
        <div className="max-w-7xl mx-auto text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-violet-500 hover:bg-violet-600 text-white font-semibold rounded-xl transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
}