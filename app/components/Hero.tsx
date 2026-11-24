"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse"
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/5 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <span className="inline-block px-4 py-2 rounded-full bg-violet-500/10 text-violet-400 text-sm font-medium mb-6 animate-fade-in">
              Data Analyst & Business Intelligence Specialist
            </span>

            <h1
              id="hero-title"
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-slide-up"
              style={{ animationDelay: "100ms" }}
            >
              Transforming Data into{" "}
              <span className="gradient-text">Actionable Insights</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed animate-slide-up" style={{ animationDelay: "200ms" }}>
              I help businesses make data-driven decisions through expert analysis,
              interactive dashboards, and automated reporting solutions using
              Power BI, SQL, Python, and Excel.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: "300ms" }}>
              <Link
                href="#projects"
                className="px-8 py-4 bg-violet-500 hover:bg-violet-600 text-white font-semibold rounded-xl transition-all hover:shadow-[0_0_30px_rgba(127,34,254,0.4)]"
              >
                View My Work
              </Link>
              <Link
                href="#contact"
                className="px-8 py-4 border border-violet-500/50 hover:bg-violet-500/10 text-violet-400 hover:text-white font-semibold rounded-xl transition-all"
              >
                Get In Touch
              </Link>
            </div>

            <div className="mt-16 grid grid-cols-3 gap-6 animate-slide-up" style={{ animationDelay: "400ms" }}>
              <div className="p-4 glass rounded-xl">
                <div className="text-3xl font-bold gradient-text">5+</div>
                <div className="text-slate-400 text-sm">Years Experience</div>
              </div>
              <div className="p-4 glass rounded-xl">
                <div className="text-3xl font-bold gradient-text">50+</div>
                <div className="text-slate-400 text-sm">Projects Delivered</div>
              </div>
              <div className="p-4 glass rounded-xl">
                <div className="text-3xl font-bold gradient-text">100%</div>
                <div className="text-slate-400 text-sm">Client Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="relative animate-scale-in" style={{ animationDelay: "500ms" }}>
            <div className="relative glass-strong rounded-2xl p-2">
              <div className="bg-navy-900 rounded-xl overflow-hidden border border-navy-700">
                <div className="flex items-center gap-2 px-4 py-3 bg-navy-950 border-b border-navy-800">
                  <div className="w-3 h-3 rounded-full bg-red-500" aria-hidden="true" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" aria-hidden="true" />
                  <div className="w-3 h-3 rounded-full bg-green-500" aria-hidden="true" />
                  <div className="ml-4 text-xs text-slate-500 font-mono">dashboard.pbix</div>
                </div>
                <div className="p-6 h-[400px] relative">
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {[
                      { label: "Total Revenue", value: "$2.4M", change: "+12.5%", trend: "up" },
                      { label: "Active Users", value: "18.7K", change: "+8.2%", trend: "up" },
                      { label: "Conversion Rate", value: "3.24%", change: "-0.4%", trend: "down" },
                    ].map((kpi, i) => (
                      <div
                        key={i}
                        className="glass rounded-xl p-4"
                      >
                        <div className="text-slate-400 text-sm mb-1">{kpi.label}</div>
                        <div className="text-2xl font-bold mb-1">{kpi.value}</div>
                        <div
                          className={`text-sm font-medium ${
                            kpi.trend === "up" ? "text-green-400" : "text-red-400"
                          }`}
                        >
                          {kpi.change}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="glass rounded-xl p-4 h-48 flex items-end justify-around">
                      {[
                        { month: "Jan", value: 45 },
                        { month: "Feb", value: 62 },
                        { month: "Mar", value: 48 },
                        { month: "Apr", value: 75 },
                        { month: "May", value: 68 },
                        { month: "Jun", value: 82 },
                      ].map((bar, i) => (
                        <div key={i} className="flex flex-col items-center gap-1 w-full">
                          <div
                            className="w-full bg-gradient-to-t from-violet-500 to-violet-400 rounded-t"
                            style={{ height: `${bar.value}%` }}
                          />
                          <span className="text-xs text-slate-500">{bar.month}</span>
                        </div>
                      ))}
                    </div>
                    <div className="glass rounded-xl p-4 h-48">
                      <div className="text-slate-400 text-sm mb-4">Revenue by Category</div>
                      <div className="space-y-3 h-[calc(100%-2rem)]">
                        {[
                          { name: "Electronics", value: 45, color: "violet-500" },
                          { name: "Clothing", value: 28, color: "violet-400" },
                          { name: "Home & Garden", value: 18, color: "violet-300" },
                          { name: "Sports", value: 9, color: "violet-200" },
                        ].map((cat, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <div
                              className="w-8 h-2 rounded"
                              style={{ backgroundColor: `var(--color-${cat.color})` }}
                            />
                            <span className="text-sm text-slate-300 flex-1">{cat.name}</span>
                            <span className="text-sm font-medium">{cat.value}%</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="absolute -bottom-6 -right-6 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
        aria-hidden="true"
      >
        <svg
          className="w-6 h-6 text-slate-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}