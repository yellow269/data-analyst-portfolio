"use client";

const projects = [
  {
    id: "superstore-sales",
    title: "Superstore Sales Performance Dashboard",
    category: "Power BI",
    description:
      "Interactive Power BI dashboard analyzing sales performance across categories, regions, and time periods. Built with DAX measures, drill-through capabilities, and dynamic filtering for business users.",
    image: "/projects/superstore-sales.svg",
    technologies: ["Power BI", "DAX", "Power Query", "Data Modeling"],
    highlights: [
      "Analyzes 9,994 orders across 3 categories and 4 regions",
      "Dynamic KPIs: Total Sales, Orders, Average Order Value",
      "Drill-through to transaction-level detail",
      "Time intelligence for YoY, MoM, YTD comparisons",
    ],
    github: null,
    live: null,
    download: "/downloads/superstore-sales.pbix",
    status: "completed",
  },
  {
    id: "customer-analytics",
    title: "Customer Analytics & Segmentation",
    category: "SQL + Excel",
    description:
      "Customer segmentation analysis using RFM (Recency, Frequency, Monetary) modeling and SQL queries. Identifies high-value segments, churn risk, and retention opportunities for targeted marketing.",
    image: "/projects/customer-analytics.svg",
    technologies: ["SQL", "Excel", "Power Query", "Pivot Tables"],
    highlights: [
      "RFM segmentation with 5 customer tiers",
      "Churn risk scoring based on purchase patterns",
      "Segment-level revenue and retention analysis",
      "Automated monthly refresh via Power Query",
    ],
    github: null,
    live: null,
    download: "/downloads/customer-analytics.xlsx",
    status: "completed",
  },
  {
    id: "python-automation",
    title: "Python Data Analysis & Automation",
    category: "Python + Pandas",
    description:
      "Collection of Python scripts and Jupyter notebooks for automated data cleaning, exploratory analysis, and report generation. Demonstrates pandas, NumPy, and visualization workflows for business datasets.",
    image: "/projects/python-automation.svg",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter"],
    highlights: [
      "Automated data cleaning pipeline with validation rules",
      "Exploratory data analysis templates for new datasets",
      "Statistical summaries and correlation analysis",
      "Automated chart generation for reporting",
    ],
    github: null,
    live: null,
    download: "/downloads/python-automation.zip",
    status: "in-progress",
  },
  {
    id: "financial-reporting",
    title: "Business Financial Reporting",
    category: "Excel + Power BI",
    description:
      "Comprehensive financial reporting solution combining Excel modeling with Power BI visualization. Includes P&L, balance sheet, cash flow, variance analysis, and executive dashboards with drill-down.",
    image: "/projects/financial-reporting.svg",
    technologies: ["Excel", "Power BI", "Power Query", "DAX", "Power Pivot"],
    highlights: [
      "3-statement financial model (P&L, BS, CF)",
      "Variance analysis with waterfall charts",
      "Dynamic scenario modeling (Base/Best/Worst)",
      "Automated data refresh from source systems",
    ],
    github: null,
    live: null,
    download: "/downloads/financial-reporting.pbix",
    status: "in-progress",
  },
];

const categoryColors: Record<string, string> = {
  "Power BI": "violet",
  "SQL + Excel": "blue",
  "Python + Pandas": "green",
  "Excel + Power BI": "amber",
};

const statusLabels: Record<string, { label: string; color: string }> = {
  completed: { label: "Completed", color: "text-green-400 bg-green-500/10 border-green-500/20" },
  "in-progress": { label: "In Progress", color: "text-amber-400 bg-amber-500/10 border-amber-500/20" },
  placeholder: { label: "Placeholder", color: "text-slate-500 bg-slate-500/10 border-slate-500/20" },
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
            A curated collection of data analytics and business intelligence projects.
            Each demonstrates end-to-end delivery from requirements to deployment.
            Projects marked &#34;In Progress&#34; are actively being developed &mdash; check GitHub for updates.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                    {project.category === "SQL + Excel" && "🗄️"}
                    {project.category === "Python + Pandas" && "🐍"}
                    {project.category === "Excel + Power BI" && "📑"}
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
                <div className="absolute top-4 right-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium border ${statusLabels[project.status]?.color || statusLabels.placeholder.color}`}>
                    {statusLabels[project.status]?.label || "Project"}
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
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-w-[120px] px-3 py-2 text-center text-sm font-medium text-slate-300 hover:text-violet-400 transition-colors border border-navy-700 rounded-lg hover:border-violet-500/50"
                    >
                      View Code
                    </a>
                  )}
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
                  {(!project.github && !project.live && !project.download) && (
                    <span className="flex-1 min-w-[120px] px-3 py-2 text-center text-sm font-medium text-slate-500 bg-navy-800 border border-navy-700 rounded-lg">
                      Assets Pending
                    </span>
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