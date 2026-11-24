"use client";

const powerBIProjects = [
  {
    id: "executive-sales",
    title: "Executive Sales Performance Dashboard",
    description:
      "Enterprise sales dashboard with real-time Azure SQL connectivity, drill-through to transaction level, and role-based security for 200+ users across global regions.",
    image: "/projects/powerbi-sales.jpg",
    features: [
      "Real-time DirectQuery to Azure SQL",
      "Dynamic KPI targeting with What-If parameters",
      "Row-level security by region/role",
      "Automated email subscriptions",
      "Mobile-optimized layout",
      "Custom DAX time intelligence",
    ],
    metrics: ["200+ daily active users", "15-min refresh cycle", "99.9% uptime"],
    github: "https://github.com/julian/powerbi-sales",
    download: "/downloads/executive-sales.pbix",
  },
  {
    id: "financial-planning",
    title: "FP&A Planning & Forecasting Model",
    description:
      "Integrated financial planning solution with driver-based forecasting, scenario analysis, and writeback capability for collaborative budgeting across 12 business units.",
    image: "/projects/powerbi-fpna.jpg",
    features: [
      "Driver-based revenue/expense modeling",
      "Scenario manager (Base/Best/Worst case)",
      "Power Apps integration for data entry",
      "Variance analysis with waterfall charts",
      "Currency conversion with live rates",
      "Audit trail and version control",
    ],
    metrics: ["12 business units", "50+ input templates", "40% faster cycle"],
    github: "https://github.com/julian/powerbi-fpna",
    download: "/downloads/fpna-planning.pbix",
  },
  {
    id: "supply-chain",
    title: "Supply Chain Operations Monitor",
    description:
      "End-to-end supply chain visibility dashboard tracking inventory turns, supplier performance, logistics costs, and demand fulfillment across 50+ warehouses.",
    image: "/projects/powerbi-supply.jpg",
    features: [
      "Multi-source data integration (ERP, WMS, TMS)",
      "Inventory aging and obsolescence alerts",
      "Supplier scorecards with trend analysis",
      "Network optimization what-if scenarios",
      "Real-time shipment tracking map",
      "Automated exception reporting",
    ],
    metrics: ["50+ warehouses", "$50M inventory tracked", "22% cost reduction"],
    github: "https://github.com/julian/powerbi-supply",
    download: null,
  },
  {
    id: "customer-success",
    title: "Customer Success & Health Scoring",
    description:
      "Customer 360 view with predictive health scoring, usage analytics, expansion opportunity identification, and automated alerting for CSM team.",
    image: "/projects/powerbi-cs.jpg",
    features: [
      "ML-powered health score (Azure ML integration)",
      "Product adoption heatmaps",
      "Renewal probability modeling",
      "Expansion playbook recommendations",
      "Executive sponsor relationship mapping",
      "Automated QBR deck generation",
    ],
    metrics: ["5,000+ accounts scored", "85% prediction accuracy", "$2M expansion ARR"],
    github: "https://github.com/julian/powerbi-cs",
    download: "/downloads/customer-health.pbix",
  },
];

export default function PowerBIProjects() {
  return (
    <section
      id="powerbi"
      className="py-24 md:py-32 px-6 bg-navy-900/50"
      aria-labelledby="powerbi-title"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-violet-500/10 text-violet-400 text-sm font-medium mb-4 animate-fade-in">
            Power BI Expertise
          </span>
          <h2
            id="powerbi-title"
            className="text-4xl md:text-5xl font-bold mb-4 animate-slide-up"
          >
            Power BI{" "}
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: "100ms" }}>
            Enterprise-grade Power BI solutions with advanced DAX modeling,
            row-level security, DirectQuery optimization, and production
            deployment at scale.
          </p>
        </div>

        <div className="space-y-8">
          {powerBIProjects.map((project, index) => (
            <article
              key={project.id}
              className="glass-strong rounded-2xl p-6 md:p-8 animate-slide-up border border-navy-700"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <div className="aspect-video bg-navy-800 rounded-xl flex items-center justify-center relative overflow-hidden">
                    <span className="text-8xl opacity-30" role="img" aria-hidden="true">📊</span>
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-transparent" />
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.metrics.map((metric, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs bg-violet-500/10 text-violet-400 rounded-full border border-violet-500/20"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-2">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center flex-shrink-0 text-violet-400">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                      <p className="text-slate-400 mt-1">{project.description}</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2 text-violet-400">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                        </svg>
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                            <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2 text-violet-400">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                        Impact Metrics
                      </h4>
                      <ul className="space-y-2">
                        {project.metrics.map((metric, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                            <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                            {metric}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-violet-400 transition-colors border border-navy-700 rounded-lg hover:border-violet-500/50"
                    >
                      View Code
                    </a>
                    {project.download && (
                      <a
                        href={project.download}
                        className="px-4 py-2 text-sm font-medium text-white bg-violet-500 hover:bg-violet-600 transition-colors rounded-lg"
                        download
                      >
                        Download .pbix
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}