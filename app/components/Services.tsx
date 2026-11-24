"use client";

import Link from "next/link";

const services = [
  {
    id: "data-analysis",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Data Analysis & Reporting",
    description:
      "End-to-end analytical projects from data discovery to executive presentations. Statistical analysis, hypothesis testing, cohort analysis, and automated reporting pipelines.",
    features: [
      "Exploratory Data Analysis (EDA)",
      "Statistical Modeling & Hypothesis Testing",
      "Automated Report Generation",
      "Executive Dashboards & Presentations",
      "Ad-hoc Analysis & Deep Dives",
    ],
    deliverables: [
      "Jupyter Notebooks / R Markdown",
      "Automated PDF/Excel Reports",
      "Interactive Dashboards",
      "Documented Methodology",
    ],
    price: "Starting at $2,500",
    timeline: "2-4 weeks",
    popular: false,
  },
  {
    id: "powerbi-dashboards",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Power BI Dashboard Development",
    description:
      "Enterprise Power BI solutions: data modeling, DAX measures, row-level security, DirectQuery optimization, deployment pipelines, and user training.",
    features: [
      "Star Schema Data Modeling",
      "Advanced DAX & Time Intelligence",
      "Row-Level Security (RLS)",
      "DirectQuery & Composite Models",
      "Deployment Pipelines (Dev/Test/Prod)",
      "User Training & Documentation",
    ],
    deliverables: [
      ".PBIX Files with Documentation",
      "Data Model Diagram & Dictionary",
      "DAX Measure Library",
      "RLS Configuration Guide",
      "Admin & User Training Sessions",
    ],
    price: "Starting at $3,500",
    timeline: "3-6 weeks",
    popular: true,
  },
  {
    id: "sql-database",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    title: "SQL Database & Analytics",
    description:
      "Database design, query optimization, data warehouse architecture, ETL/ELT pipelines, and real-time analytics layers. PostgreSQL, SQL Server, Snowflake, BigQuery.",
    features: [
      "Dimensional Data Warehouse Design",
      "Query Tuning & Index Optimization",
      "ETL/ELT Pipeline Development",
      "Materialized Views & Caching",
      "Data Quality & Testing Frameworks",
      "Migration & Modernization",
    ],
    deliverables: [
      "ER Diagrams & Schema Scripts",
      "Optimized Queries & Indexes",
      "dbt/Airflow Pipeline Code",
      "Data Quality Test Suite",
      "Performance Benchmark Report",
    ],
    price: "Starting at $3,000",
    timeline: "3-5 weeks",
    popular: false,
  },
  {
    id: "python-ml",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "Python Automation & ML",
    description:
      "Custom Python solutions for ETL automation, forecasting, anomaly detection, NLP, and machine learning. Production-ready code with testing, CI/CD, and monitoring.",
    features: [
      "ETL Pipeline Frameworks",
      "Time Series Forecasting (Prophet/ML)",
      "Anomaly Detection Systems",
      "NLP & Text Analytics",
      "ML Model Training & Deployment",
      "API Development (FastAPI/Flask)",
    ],
    deliverables: [
      "Modular, Tested Python Package",
      "Docker Container & K8s Manifests",
      "CI/CD Pipeline (GitHub Actions)",
      "Monitoring & Alerting Setup",
      "Model Cards & Documentation",
    ],
    price: "Starting at $4,000",
    timeline: "4-8 weeks",
    popular: false,
  },
  {
    id: "excel-automation",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    title: "Excel Automation & Modeling",
    description:
      "Advanced Excel solutions: financial models, dynamic dashboards, Power Query ETL, Power Pivot/DAX, VBA macros, Office Scripts, and custom add-ins.",
    features: [
      "3-Statement Financial Models",
      "Dynamic Dashboard Templates",
      "Power Query Data Pipelines",
      "VBA / Office Scripts Automation",
      "Custom Ribbon & Add-ins",
      "Model Auditing & Documentation",
    ],
    deliverables: [
      ".XLSB/.XLSM Model Files",
      "User Guide & Assumptions Doc",
      "VBA/TypeScript Source Code",
      "Validation & Test Cases",
      "Handoff Training Session",
    ],
    price: "Starting at $2,000",
    timeline: "2-4 weeks",
    popular: false,
  },
  {
    id: "consulting-advisory",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Data Strategy & Advisory",
    description:
      "Strategic consulting for data maturity assessment, tool selection, team structure, governance frameworks, and analytics roadmap development.",
    features: [
      "Data Maturity Assessment",
      "Tool & Platform Selection",
      "Analytics Roadmap Development",
      "Data Governance Framework",
      "Team Structure & Hiring Guidance",
      "KPI Definition & Measurement",
    ],
    deliverables: [
      "Assessment Report & Scorecard",
      "Strategic Roadmap (12-36 months)",
      "Tool Evaluation Matrix",
      "Governance Policy Documents",
      "Executive Presentation Deck",
    ],
    price: "Starting at $5,000",
    timeline: "4-6 weeks",
    popular: false,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 md:py-32 px-6 bg-navy-900/50"
      aria-labelledby="services-title"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-violet-500/10 text-violet-400 text-sm font-medium mb-4 animate-fade-in">
            What I Offer
          </span>
          <h2
            id="services-title"
            className="text-4xl md:text-5xl font-bold mb-4 animate-slide-up"
          >
            Services &{" "}
            <span className="gradient-text">Engagements</span>
          </h2>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: "100ms" }}>
            End-to-end data analytics and business intelligence services.
            Fixed-scope engagements with clear deliverables, timelines, and
            knowledge transfer included.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <article
              key={service.id}
              className={`relative glass-strong rounded-2xl p-6 md:p-8 animate-slide-up border transition-all duration-300 ${
                service.popular
                  ? "border-violet-500/50 shadow-[0_0_30px_rgba(127,34,254,0.1)]"
                  : "border-navy-700 hover:border-violet-500/30"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-violet-500 text-white text-xs font-semibold rounded-full">
                  Most Popular
                </div>
              )}

              <div className="w-14 h-14 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-400 mb-6">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-slate-400 mb-6">{service.description}</p>

              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-semibold text-sm text-violet-400 mb-2 flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                    Includes
                  </h4>
                  <ul className="space-y-1 text-sm text-slate-300">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <svg className="w-3.5 h-3.5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-amber-400 mb-2 flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Deliverables
                  </h4>
                  <ul className="space-y-1 text-sm text-slate-300">
                    {service.deliverables.map((deliverable) => (
                      <li key={deliverable} className="flex items-center gap-2">
                        <svg className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                        </svg>
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6 p-4 glass rounded-xl">
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Investment</div>
                  <div className="text-2xl font-bold gradient-text">{service.price}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Timeline</div>
                  <div className="text-2xl font-bold text-slate-100">{service.timeline}</div>
                </div>
              </div>

              <Link
                href={`#contact?service=${service.id}`}
                className={`w-full py-3 px-4 rounded-xl text-center font-semibold transition-all ${
                  service.popular
                    ? "bg-violet-500 hover:bg-violet-600 text-white"
                    : "bg-navy-800 hover:bg-navy-700 text-slate-300 border border-navy-700 hover:border-violet-500/50"
                }`}
              >
                {service.popular ? "Start Project" : "Get Quote"}
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-16 glass rounded-2xl p-8 md:p-12 animate-fade-in" style={{ animationDelay: "600ms" }}>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-4">
              <div className="text-4xl font-bold gradient-text mb-2">Fixed Scope</div>
              <div className="text-slate-400">No hourly surprises. Clear deliverables and timeline agreed upfront.</div>
            </div>
            <div className="p-4 border-y border-navy-700 md:border-y-0 md:border-x border-navy-700">
              <div className="text-4xl font-bold gradient-text mb-2">Knowledge Transfer</div>
              <div className="text-slate-400">Documentation, training sessions, and code walkthroughs included.</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold gradient-text mb-2">Ongoing Support</div>
              <div className="text-slate-400">30 days post-delivery support for questions and minor adjustments.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}