"use client";

import Link from "next/link";

const services = [
  {
    id: "excel-data-cleaning",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    title: "Excel Data Cleaning",
    description:
      "Clean, standardize, and validate messy datasets in Excel. Remove duplicates, fix formatting, handle missing values, and prepare data for analysis.",
    features: [
      "Duplicate detection & removal",
      "Data standardization (trim, case, formats)",
      "Missing value handling & imputation",
      "Data validation rules & error flagging",
      "Automated cleaning with Power Query",
      "Reusable cleaning templates",
    ],
    deliverables: [
      "Cleaned dataset (.xlsx/.csv)",
      "Power Query steps (reproducible)",
      "Data quality report",
      "Validation rules documentation",
    ],
    price: "From R2,500 / $140",
    timeline: "3-7 days",
    popular: false,
  },
  {
    id: "excel-automation",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "Excel Automation",
    description:
      "Automate repetitive Excel tasks with VBA macros, Office Scripts, or Power Query. Reduce manual work from hours to minutes.",
    features: [
      "VBA macros for repetitive workflows",
      "Office Scripts for Excel Online",
      "Power Query automated refresh",
      "Custom functions (UDFs) & add-ins",
      "Scheduled report generation",
      "Email/PDF export automation",
    ],
    deliverables: [
      "Macro-enabled workbook (.xlsm)",
      "Office Scripts (TypeScript) code",
      "User guide & documentation",
      "Installation & setup instructions",
    ],
    price: "From R5,000 / $280",
    timeline: "1-3 weeks",
    popular: true,
  },
  {
    id: "powerbi-dashboards",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Power BI Dashboards",
    description:
      "Interactive business dashboards with DAX measures, drill-through, bookmarks, and mobile-ready layouts. Deploy to Power BI Service with scheduled refresh.",
    features: [
      "Star schema data modeling",
      "Advanced DAX & time intelligence",
      "Drill-through & cross-filtering",
      "Row-level security (RLS)",
      "Mobile-optimized layouts",
      "Scheduled refresh & email subscriptions",
    ],
    deliverables: [
      ".PBIX file with full documentation",
      "Data model diagram & dictionary",
      "DAX measure library",
      "RLS setup guide",
      "Deployment checklist",
    ],
    price: "From R15,000 / $850",
    timeline: "3-6 weeks",
    popular: false,
  },
  {
    id: "sql-data-analysis",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    title: "SQL Data Analysis",
    description:
      "Complex SQL queries, stored procedures, and data extraction for reporting. Query optimization, indexing, and performance tuning.",
    features: [
      "Complex analytical queries (CTEs, windows)",
      "Stored procedures & functions",
      "Query optimization & indexing",
      "Data extraction for BI tools",
      "Schema design & normalization",
      "PostgreSQL / SQL Server / MySQL",
    ],
    deliverables: [
      "Optimized SQL scripts (.sql)",
      "Query execution plans",
      "Index recommendations",
      "Data dictionary & ER diagram",
    ],
    price: "From R7,500 / $420",
    timeline: "2-4 weeks",
    popular: false,
  },
  {
    id: "python-data-processing",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "Python Data Processing",
    description:
      "Custom Python scripts for ETL, data cleaning, analysis, and automation using pandas, NumPy, and modern data libraries.",
    features: [
      "ETL pipelines (pandas, SQLAlchemy)",
      "Automated data cleaning & validation",
      "Exploratory data analysis (EDA)",
      "Statistical analysis & visualization",
      "Jupyter notebooks for reproducibility",
      "Scheduled automation (cron/Airflow)",
    ],
    deliverables: [
      "Python package / scripts (.py/.ipynb)",
      "Requirements.txt / environment.yml",
      "Documentation & usage examples",
      "Unit tests (pytest)",
    ],
    price: "From R10,000 / $560",
    timeline: "2-5 weeks",
    popular: false,
  },
  {
    id: "business-reporting",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Business Reporting",
    description:
      "Professional business reports combining Excel modeling, Power BI dashboards, and automated distribution. Financial, operational, and KPI reporting.",
    features: [
      "Financial statements (P&L, BS, CF)",
      "KPI dashboards & scorecards",
      "Variance & trend analysis",
      "Automated report generation",
      "Executive summary templates",
      "Multi-format export (PDF, Excel, PPT)",
    ],
    deliverables: [
      "Report templates (.xlsx/.pbix)",
      "Automation scripts",
      "Distribution setup (email/SharePoint)",
      "User guide & maintenance docs",
    ],
    price: "From R12,000 / $680",
    timeline: "3-5 weeks",
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
            Fixed-scope data analytics and business intelligence services for international clients,
            remote employers, and small businesses. Clear deliverables, timelines, and knowledge transfer included.
            Prices in ZAR (R) and USD ($) — payment in your preferred currency.
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