import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Julian Lombard
          </h1>

          <p className="text-cyan-400 text-xl md:text-2xl font-semibold mb-4">
            Data Analyst | Business Intelligence | Data Visualization
          </p>

          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Transforming raw data into meaningful insights through analytics,
            dashboards, and business intelligence solutions.
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <a
              href="#projects"
              className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg font-semibold transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-cyan-500 hover:bg-cyan-500 px-6 py-3 rounded-lg font-semibold transition"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="px-6 py-20 bg-slate-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-cyan-400">
            About Me
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            I am a Data Analyst passionate about helping businesses make
            informed decisions through data. My experience includes data
            cleaning, reporting, dashboard development, and business
            intelligence using tools such as Excel, SQL, Power BI, and Python.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-10 text-cyan-400">
            Skills
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Microsoft Excel",
              "Power BI",
              "SQL",
              "Python",
              "Data Cleaning",
              "Data Visualization",
              "Business Intelligence",
              "Dashboard Development",
              "Reporting & Analytics",
            ].map((skill) => (
              <div
                key={skill}
                className="bg-slate-900 p-6 rounded-xl border border-slate-800"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="px-6 py-20 bg-slate-900"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-10 text-cyan-400">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-950 p-6 rounded-xl">
              <h3 className="text-2xl font-semibold mb-3">
                Sales Dashboard
              </h3>
              <p className="text-gray-400">
                Interactive Power BI dashboard showing sales performance,
                trends, and KPIs.
              </p>
            </div>

            <div className="bg-slate-950 p-6 rounded-xl">
              <h3 className="text-2xl font-semibold mb-3">
                Customer Analytics
              </h3>
              <p className="text-gray-400">
                Customer segmentation and behavioral analysis using SQL and
                Excel.
              </p>
            </div>

            <div className="bg-slate-950 p-6 rounded-xl">
              <h3 className="text-2xl font-semibold mb-3">
                Data Cleaning Automation
              </h3>
              <p className="text-gray-400">
                Automated data preparation workflows using Python and Excel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-10 text-cyan-400">
            Services
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-900 p-6 rounded-xl">
              Data Analysis & Reporting
            </div>

            <div className="bg-slate-900 p-6 rounded-xl">
              Power BI Dashboard Development
            </div>

            <div className="bg-slate-900 p-6 rounded-xl">
              Excel Automation & Reporting
            </div>

            <div className="bg-slate-900 p-6 rounded-xl">
              SQL Database Analysis
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="px-6 py-20 bg-slate-900"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-cyan-400">
            Contact Me
          </h2>

          <p className="text-gray-300 mb-6">
            Available for freelance projects, consulting, and remote work.
          </p>

          <div className="space-y-2 text-lg">
            <p>Email: jptecksolutions269@gmail.com</p>
            <p>LinkedIn: www.linkedin.com/in/julian-lombard-21b877277</p>
            <p>GitHub: github.com/yellow269</p>
          </div>
        </div>
      </section>
    </main>
  );
}