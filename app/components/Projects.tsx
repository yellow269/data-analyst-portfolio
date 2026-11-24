"use client";

import Link from "next/link";

const projects = [
  {
    id: "sales-dashboard",
    title: "Executive Sales Dashboard",
    category: "Power BI",
    description:
      "Enterprise-grade sales performance dashboard with real-time data refresh, drill-through capabilities, and role-based access control for 200+ users across 5 regions.",
    image: "/projects/sales-dashboard.jpg",
    technologies: ["Power BI", "DAX", "Power Query", "Azure SQL", "Row-Level Security"],
    highlights: [
      "Reduced reporting time from 4 hours to 15 minutes",
      "Enabled self-service analytics for regional managers",
      "Implemented dynamic KPI targeting with what-if parameters",
    ],
    github: "https://github.com/julian/sales-dashboard",
    live: "https://app.powerbi.com/view?r=example",
    download: "/downloads/sales-dashboard.pbix",
  },
  {
    id: "customer-analytics",
    title: "Customer 360 Analytics Platform",
    category: "SQL + Python",
    description:
      "End-to-end customer analytics solution combining SQL data warehousing with Python ML models for churn prediction, lifetime value estimation, and segmentation.",
    image: "/projects/customer-analytics.jpg",
    technologies: ["PostgreSQL", "Python", "scikit-learn", "dbt", "Airflow", "Tableau"],
    highlights: [
      "Identified 23% of at-risk customers 60 days before churn",
      "Increased customer retention by 15% through targeted campaigns",
      "Automated weekly scoring pipeline for 2M+ customers",
    ],
    github: "https://github.com/julian/customer-analytics",
    live: null,
    download: "/downloads/customer-analytics.ipynb",
  },
  {
    id: "financial-reporting",
    title: "Automated Financial Reporting Suite",
    category: "Excel + Power Query",
    description:
      "Comprehensive financial reporting automation replacing manual processes. Dynamic dashboards with drill-down capabilities, variance analysis, and executive summaries.",
    image: "/projects/financial-reporting.jpg",
    technologies: ["Excel", "Power Query", "Power Pivot", "DAX", "VBA", "Office Scripts"],
    highlights: [
      "Eliminated 40+ hours of manual work per month",
      "Zero-error rate in automated consolidation",
      "Real-time variance alerts for finance leadership",
    ],
    github: "https://github.com/julian/financial-reporting",
    live: null,
    download: "/downloads/financial-reporting.xlsm",
  },
  {
    id: "inventory-optimization",
    title: "Inventory Optimization Model",
    category: "Python + SQL",
    description:
      "Predictive inventory management system using demand forecasting and optimization algorithms to reduce stockouts while minimizing carrying costs.",
    image: "/projects/inventory-optimization.jpg",
    technologies: ["Python", "Prophet", "PostgreSQL", "Optimization", "Streamlit", "Docker"],
    highlights: [
      "Reduced stockouts by 35% while cutting inventory costs 18%",
      "Dynamic safety stock calculations per SKU/location",
      "Integrated with ERP via automated API pipeline",
    ],
    github: "https://github.com/julian/inventory-optimization",
    live: "https://inventory-opt.example.com",
    download: null,
  },
  {
    id: "marketing-attribution",
    title: "Multi-Touch Marketing Attribution",
    category: "SQL + Power BI",
    description:
      "Marketing attribution model analyzing customer journeys across 12+ channels. Custom attribution logic with Power BI visualization for marketing ROI optimization.",
    image: "/projects/marketing-attribution.jpg",
    technologies: ["SQL Server", "Power BI", "DAX", "Google Analytics API", "Facebook Ads API"],
    highlights: [
      "Revealed 40% of budget allocated to underperforming channels",
      "Enabled data-driven budget reallocation saving $200K annually",
      "Real-time campaign performance monitoring",
    ],
    github: "https://github.com/julian/marketing-attribution",
    live: null,
    download: "/downloads/marketing-attribution.pbix",
  },
  {
    id: "hr-analytics",
    title: "HR Workforce Analytics Dashboard",
    category: "Power BI",
    description:
      "Comprehensive HR analytics platform tracking headcount, turnover, diversity, compensation, and engagement metrics with predictive workforce planning.",
    image: "/projects/hr-analytics.jpg",
    technologies: ["Power BI", "DAX", "Azure Synapse", "Python", "HRIS Integration"],
    highlights: [
      "Predicted turnover risk with 82% accuracy",
      "Identified compensation inequities across departments",
      "Supported workforce planning for 5,000+ employees",
    ],
    github: "https://github.com/julian/hr-analytics",
    live: "https://app.powerbi.com/view?r=hr-example",
    download: null,
  },
];

const categoryColors: Record<string, string> = {
  "Power BI": "violet",
  "SQL + Python": "blue",
  "Excel + Power Query": "amber",
  "Python + SQL": "green",
  "SQL + Power BI": "pink",
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 md:py-32 px-6"
      aria-labelledby="projects-title"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-violet-500/10 text-violet-400 text-sm font-medium mb-4 animate-fade-in">
            Featured Work
          </span>
          <h2
            id="projects-title"
            className="text-4xl md:text-5xl font-bold mb-4 animate-slide-up"
          >
            Selected{" "}
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: "100ms" }}>
            A curated collection of real-world data analytics and business
            intelligence solutions. Each project demonstrates end-to-end delivery
            from requirements gathering to production deployment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="glass-strong rounded-2xl overflow-hidden animate-slide-up border border-navy-700 hover:border-violet-500/30 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-video bg-navy-800 overflow-hidden">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl opacity-50" role="img" aria-hidden="true">
                    {project.category === "Power BI" && "📊"}
                    {project.category === "SQL + Python" && "🐍"}
                    {project.category === "Excel + Power Query" && "📑"}
                    {project.category === "Python + SQL" && "⚙️"}
                    {project.category === "SQL + Power BI" && "🔗"}
                  </span>
                </div>
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${
                      categoryColors[project.category]
                        ? `bg-${categoryColors[project.category]}-500/20 text-${categoryColors[project.category]}-400`
                        : "bg-violet-500/20 text-violet-400"
                    }`}
                  >
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-navy-800 text-slate-300 rounded border border-navy-700"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 text-xs bg-navy-800 text-slate-500 rounded border border-navy-700">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                <ul className="space-y-2 mb-6">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                      <svg
                        className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-navy-700">
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[120px] px-3 py-2 text-center text-sm font-medium text-slate-300 hover:text-violet-400 transition-colors border border-navy-700 rounded-lg hover:border-violet-500/50"
                  >
                    Code
                  </Link>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-w-[120px] px-3 py-2 text-center text-sm font-medium text-slate-300 hover:text-violet-400 transition-colors border border-navy-700 rounded-lg hover:border-violet-500/50"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.download && (
                    <a
                      href={project.download}
                      className="flex-1 min-w-[120px] px-3 py-2 text-center text-sm font-medium text-white bg-violet-500 hover:bg-violet-600 transition-colors rounded-lg"
                      download
                    >
                      Download
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: "600ms" }}>
          <p className="text-slate-400 mb-4">Want to see more projects or discuss a custom solution?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-violet-500 hover:bg-violet-600 text-white font-semibold rounded-xl transition-all"
          >
            Let&apos;s Work Together
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}