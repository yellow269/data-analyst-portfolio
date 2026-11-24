"use client";

import Link from "next/link";

const experience = [
  {
    role: "Data Analyst Intern",
    company: "Koro Creek Golf Estate",
    location: "Mossel Bay, Western Cape, South Africa",
    period: "2022 – 2024",
    description: "Promoted from Data Entry Specialist to Data Analyst Intern. Built automated reporting solutions, dashboards, and data pipelines for business operations.",
    achievements: [
      "Built Power BI dashboards tracking KPIs across operations, finance, and membership departments",
      "Automated monthly financial reporting using Excel Power Query, reducing manual effort by 80%",
      "Designed SQL queries for membership analytics, retention tracking, and revenue forecasting",
      "Created Python scripts for automated data extraction and validation from multiple source systems",
      "Developed standardized data quality frameworks and documentation for reproducible analytics",
    ],
    technologies: ["Power BI", "Excel", "Power Query", "SQL", "Python", "Pandas", "DAX"],
  },
  {
    role: "Data Entry Specialist",
    company: "Koro Creek Golf Estate",
    location: "Mossel Bay, Western Cape, South Africa",
    period: "2019 – 2022",
    description: "Managed high-volume data entry and validation for membership, finance, and operations systems. Laid foundation for analytical work through data quality initiatives.",
    achievements: [
      "Processed 5,000+ monthly transactions with 99.8% accuracy across membership and POS systems",
      "Implemented data validation rules reducing entry errors by 65%",
      "Created Excel templates and macros for standardized monthly reporting workflows",
      "Collaborated with finance team on month-end close data preparation and reconciliation",
    ],
    technologies: ["Excel", "VBA", "Power Query", "SQL", "Data Validation"],
  },
  {
    role: "Freelance IT Consultant",
    company: "JPTeckSolutions",
    location: "Mossel Bay, Western Cape, South Africa (Remote)",
    period: "2020 – Present",
    description: "Independent consulting practice delivering data analytics, automation, and BI solutions for SMEs and international clients.",
    achievements: [
      "Delivered 15+ client projects across Excel automation, Power BI dashboards, and SQL analytics",
      "Built automated ETL pipelines reducing client reporting cycles from days to hours",
      "Designed financial models and KPI dashboards for hospitality, retail, and professional services",
      "Provided remote support across GMT+2, EST, and PST time zones",
    ],
    technologies: ["Excel", "Power BI", "SQL", "Python", "VBA", "Office Scripts", "Power Query"],
  },
];

const education = [
  {
    degree: "Data Analyst Certification",
    institution: "Optimi College",
    period: "2023",
    details: "Comprehensive program covering Python (pandas, NumPy, visualization), SQL, Power BI, Excel advanced, statistics, and data storytelling. Capstone project: Superstore Sales Dashboard.",
  },
  {
    degree: "National Senior Certificate (Matric)",
    institution: "Bridgton Secondary School",
    location: "Oudtshoorn, Western Cape",
    period: "2018",
    details: "Mathematics, Physical Sciences, Computer Applications Technology, Accounting, Life Sciences, English, Afrikaans.",
  },
];

const certifications = [
  "Optimi College Data Analyst Certification (2023)",
  "Microsoft Power BI Data Analyst Associate (In Progress)",
  "Google Data Analytics Professional Certificate (In Progress)",
];

const technicalSkills = {
  "Data Analysis & BI": ["Power BI", "DAX", "Power Query", "Data Modeling", "Dashboard Design", "Reporting"],
  "Programming & Analysis": ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter", "SQLAlchemy"],
  "Databases & SQL": ["PostgreSQL", "SQL Server", "MySQL", "CTEs", "Window Functions", "Query Optimization", "Stored Procedures"],
  "Spreadsheets & Automation": ["Excel", "Power Query", "Power Pivot", "VBA", "Office Scripts", "Financial Modeling", "Pivot Tables"],
  "Tools & Workflow": ["Git", "GitHub", "VS Code", "Jupyter", "Power BI Service", "SharePoint", "OneDrive"],
};

export default function ResumePage() {
  const handleDownloadCV = () => {
    // CV download - PDF not yet available
    alert(
      "CV Download: The PDF resume is not yet available.\n\n" +
      "To enable: Place your CV PDF at public/downloads/julian-lombard-cv.pdf and update the download link in the Resume component."
    );
  };

  return (
    <div className="min-h-screen bg-navy-950">
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-navy-950 to-navy-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-violet-500/10 text-violet-400 text-sm font-medium mb-4 animate-fade-in">
              Professional Resume
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-up">
              Julian Paul Lombard
            </h1>
            <p className="text-slate-300 text-lg max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: "100ms" }}>
              Junior Data Analyst | Power BI | Excel | SQL | Python
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8 animate-slide-up" style={{ animationDelay: "200ms" }}>
              <a
                href="mailto:julianlombard333@gmail.com"
                className="flex items-center gap-2 px-4 py-2 bg-navy-800 text-slate-300 hover:text-violet-400 hover:bg-navy-700 rounded-xl transition-all text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                julianlombard333@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/julian-lombard-21b877277/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-navy-800 text-slate-300 hover:text-blue-400 hover:bg-navy-700 rounded-xl transition-all text-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <button
                onClick={handleDownloadCV}
                className="flex items-center gap-2 px-4 py-2 bg-violet-500 hover:bg-violet-600 text-white rounded-xl transition-all text-sm font-medium"
                disabled
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                CV Download Pending
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-navy-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div className="glass-strong rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="w-2 h-8 bg-violet-500 rounded-full" />
                  Professional Experience
                </h2>
                <div className="space-y-8">
                  {experience.map((job, index) => (
                    <article key={job.role} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-slate-100">{job.role}</h3>
                          <p className="text-violet-400 font-medium">{job.company}</p>
                        </div>
                        <div className="text-right md:text-right flex-shrink-0">
                          <p className="text-sm text-slate-400">{job.period}</p>
                          <p className="text-sm text-slate-500">{job.location}</p>
                        </div>
                      </div>
                      <p className="text-slate-300 mb-4">{job.description}</p>
                      <ul className="space-y-2 mb-4">
                        {job.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                            <svg className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {job.technologies.map((tech) => (
                          <span key={tech} className="px-3 py-1 text-xs bg-navy-800 text-slate-300 rounded border border-navy-700">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <div className="glass-strong rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="w-2 h-8 bg-violet-500 rounded-full" />
                  Education
                </h2>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <article key={edu.degree} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-2">
                        <div>
                          <h3 className="text-lg font-bold text-slate-100">{edu.degree}</h3>
                          <p className="text-violet-400 font-medium">{edu.institution}</p>
                          {edu.location && <p className="text-sm text-slate-500">{edu.location}</p>}
                        </div>
                        <div className="text-right md:text-right flex-shrink-0">
                          <p className="text-sm text-slate-400">{edu.period}</p>
                        </div>
                      </div>
                      <p className="text-slate-300 text-sm">{edu.details}</p>
                    </article>
                  ))}
                </div>
              </div>

              <div className="glass-strong rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="w-2 h-8 bg-violet-500 rounded-full" />
                  Certifications
                </h2>
                <ul className="space-y-3">
                  {certifications.map((cert, index) => (
                    <li key={cert} className="animate-slide-up flex items-center gap-3 text-slate-300" style={{ animationDelay: `${index * 100}ms` }}>
                      <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div className="glass-strong rounded-2xl p-8 sticky top-24">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="w-2 h-8 bg-violet-500 rounded-full" />
                  Technical Skills
                </h2>
                <div className="space-y-6">
                  {Object.entries(technicalSkills).map(([category, skills], catIndex) => (
                    <div key={category} className="animate-slide-up" style={{ animationDelay: `${catIndex * 100}ms` }}>
                      <h3 className="font-semibold text-slate-200 mb-3 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-violet-500 rounded-full" />
                        {category}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {skills.map((skill) => (
                          <span key={skill} className="px-3 py-1.5 text-sm bg-navy-800 text-slate-300 rounded-lg border border-navy-700 hover:border-violet-500/50 transition-colors">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-strong rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="w-2 h-8 bg-violet-500 rounded-full" />
                  Quick Links
                </h2>
                <nav className="space-y-3">
                  <Link
                    href="#projects"
                    className="flex items-center gap-3 p-3 glass rounded-xl hover:glass-strong transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-400 group-hover:scale-110 transition-transform">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <span className="text-slate-300 group-hover:text-violet-400 transition-colors">View Projects</span>
                  </Link>
                  <Link
                    href="#services"
                    className="flex items-center gap-3 p-3 glass rounded-xl hover:glass-strong transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <span className="text-slate-300 group-hover:text-blue-400 transition-colors">Services & Pricing</span>
                  </Link>
                  <a
                    href="#contact"
                    className="flex items-center gap-3 p-3 glass rounded-xl hover:glass-strong transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400 group-hover:scale-110 transition-transform">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-slate-300 group-hover:text-green-400 transition-colors">Contact Me</span>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-navy-950 border-t border-navy-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-400 mb-4">
            Ready to discuss how I can help with your data challenges?
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-violet-500 hover:bg-violet-600 text-white font-semibold rounded-xl transition-all"
          >
            Let&apos;s Work Together
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}