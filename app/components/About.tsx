"use client";

export default function About() {
  const experience = [
    {
      role: "Senior Data Analyst",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description:
        "Leading data analytics initiatives for enterprise clients. Designed and implemented Power BI dashboards serving 200+ users. Automated reporting workflows reducing manual effort by 80%. Collaborated with stakeholders to define KPIs and build self-service analytics platforms.",
    },
    {
      role: "Data Analyst",
      company: "Analytics Pro Ltd.",
      period: "2020 - 2022",
      description:
        "Performed exploratory data analysis on large datasets using SQL and Python. Built predictive models for customer churn and sales forecasting. Created automated Excel reporting templates used across departments. Presented insights to C-level executives quarterly.",
    },
    {
      role: "Junior Data Analyst",
      company: "DataDrive Consulting",
      period: "2019 - 2020",
      description:
        "Supported senior analysts in data cleaning, validation, and visualization projects. Developed SQL queries for data extraction and transformation. Assisted in Power BI dashboard development and maintenance. Learned best practices in data governance and documentation.",
    },
  ];

  const education = [
    {
      degree: "M.Sc. Business Analytics",
      school: "University of Technology",
      year: "2019",
    },
    {
      degree: "B.Sc. Computer Science",
      school: "State University",
      year: "2017",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 md:py-32 px-6"
      aria-labelledby="about-title"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-violet-500/10 text-violet-400 text-sm font-medium mb-4 animate-fade-in">
            About Me
          </span>
          <h2
            id="about-title"
            className="text-4xl md:text-5xl font-bold mb-4 animate-slide-up"
          >
            Turning Complex Data into{" "}
            <span className="gradient-text">Clear Business Value</span>
          </h2>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: "100ms" }}>
            With over 5 years of experience in data analytics and business intelligence,
            I specialize in transforming raw, messy data into actionable insights that
            drive strategic decision-making and business growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="glass-strong rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-violet-500 rounded-full" />
                Professional Journey
              </h3>
              <div className="space-y-8">
                {experience.map((exp, index) => (
                  <div
                    key={exp.role}
                    className="relative pl-8 border-l border-navy-700 last:border-0 animate-slide-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-violet-500 border-4 border-navy-950" />
                    <div className="pb-6">
                      <div className="flex flex-wrap items-baseline gap-2 mb-2">
                        <span className="text-lg font-semibold">{exp.role}</span>
                        <span className="text-violet-400 font-medium">{exp.company}</span>
                      </div>
                      <div className="text-sm text-slate-500 mb-3">{exp.period}</div>
                      <p className="text-slate-300">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-strong rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-violet-500 rounded-full" />
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div
                    key={edu.degree}
                    className="flex items-start gap-4 p-4 glass rounded-xl animate-slide-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold">{edu.degree}</div>
                      <div className="text-slate-400">{edu.school}</div>
                      <div className="text-xs text-slate-500">{edu.year}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="glass-strong rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-violet-500 rounded-full" />
                What I Do
              </h3>
              <div className="grid gap-4">
                {[
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    ),
                    title: "Data Analysis & Reporting",
                    desc: "Comprehensive data analysis, statistical modeling, and automated reporting solutions tailored to your business needs.",
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    ),
                    title: "Power BI Dashboards",
                    desc: "Interactive, real-time dashboards with DAX measures, row-level security, and enterprise-grade deployment.",
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                      </svg>
                    ),
                    title: "SQL Database Analysis",
                    desc: "Complex queries, stored procedures, performance optimization, and data modeling for relational databases.",
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    ),
                    title: "Python Automation",
                    desc: "ETL pipelines, data cleaning scripts, predictive modeling, and custom analytics tools using pandas, NumPy, and scikit-learn.",
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    ),
                    title: "Excel & Advanced Modeling",
                    desc: "Complex financial models, dynamic dashboards, Power Query, Power Pivot, and VBA automation.",
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    ),
                    title: "Data Visualization",
                    desc: "Custom visualizations, chart selection best practices, and storytelling with data for executive presentations.",
                  },
                ].map((service, index) => (
                  <div
                    key={service.title}
                    className="flex items-start gap-4 p-4 glass rounded-xl hover:glass-strong transition-all animate-slide-up"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center flex-shrink-0 text-violet-400">
                      {service.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{service.title}</h4>
                      <p className="text-sm text-slate-400">{service.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-strong rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-violet-500 rounded-full" />
                Core Values
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: "Accuracy First", desc: "Every insight is validated through rigorous testing and cross-verification." },
                  { title: "Business Impact", desc: "Analytics must drive decisions. I focus on actionable outcomes, not just charts." },
                  { title: "Continuous Learning", desc: "Staying current with evolving tools, techniques, and industry best practices." },
                ].map((value, index) => (
                  <div
                    key={value.title}
                    className="text-center p-6 glass rounded-xl animate-slide-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-400">
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold mb-2">{value.title}</h4>
                    <p className="text-sm text-slate-400">{value.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}