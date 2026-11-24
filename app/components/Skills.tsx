"use client";

const skillCategories = [
  {
    category: "Data Analysis",
    color: "green",
    skills: [
      { name: "Python", level: 85, icon: "🐍" },
      { name: "Pandas", level: 85, icon: "📊" },
      { name: "NumPy", level: 80, icon: "🔢" },
      { name: "Data Cleaning", level: 90, icon: "🧹" },
      { name: "Data Analysis", level: 85, icon: "📈" },
      { name: "Data Visualisation", level: 85, icon: "📉" },
    ],
  },
  {
    category: "Business Intelligence",
    color: "violet",
    skills: [
      { name: "Power BI", level: 85, icon: "📊" },
      { name: "Data Visualisation", level: 85, icon: "📈" },
      { name: "Dashboard Development", level: 80, icon: "📋" },
      { name: "Business Intelligence", level: 85, icon: "💡" },
      { name: "Data Reporting", level: 90, icon: "📄" },
      { name: "Data Automation", level: 80, icon: "⚙️" },
    ],
  },
  {
    category: "Databases & SQL",
    color: "blue",
    skills: [
      { name: "SQL", level: 85, icon: "🗄️" },
      { name: "Queries", level: 85, icon: "🔍" },
      { name: "Data Management", level: 80, icon: "📦" },
      { name: "Data Cleaning", level: 85, icon: "🧹" },
      { name: "ETL/ELT Basics", level: 75, icon: "🔄" },
    ],
  },
  {
    category: "Spreadsheets & Automation",
    color: "amber",
    skills: [
      { name: "Microsoft Excel", level: 95, icon: "📑" },
      { name: "Data Cleaning", level: 90, icon: "🧹" },
      { name: "Reporting", level: 90, icon: "📄" },
      { name: "Power Query", level: 85, icon: "🔄" },
      { name: "VBA / Macros", level: 75, icon: "⚙️" },
      { name: "Financial Modeling", level: 80, icon: "💰" },
    ],
  },
];

const getColorClasses = (color: string) => {
  const colors: Record<string, { primary: string; bg: string; border: string }> = {
    violet: { primary: "text-violet-400", bg: "bg-violet-500/10", border: "border-violet-500/20" },
    blue: { primary: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    green: { primary: "text-green-400", bg: "bg-green-500/10", border: "border-green-500/20" },
    amber: { primary: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20" },
    pink: { primary: "text-pink-400", bg: "bg-pink-500/10", border: "border-pink-500/20" },
    cyan: { primary: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
  };
  return colors[color] || colors.violet;
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 md:py-32 px-6"
      aria-labelledby="skills-title"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-violet-500/10 text-violet-400 text-sm font-medium mb-4 animate-fade-in">
            Technical Skills
          </span>
          <h2
            id="skills-title"
            className="text-4xl md:text-5xl font-bold mb-4 animate-slide-up"
          >
            Tools & Technologies I{" "}
            <span className="gradient-text">Master</span>
          </h2>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: "100ms" }}>
            Proficient across the modern data stack — from data cleaning to
            executive dashboards. Built through 5 years of hands-on business
            data experience and formal certification.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, catIndex) => {
            const colorClasses = getColorClasses(cat.color);
            return (
              <div
                key={cat.category}
                className={`glass-strong rounded-2xl p-6 animate-slide-up ${colorClasses.border} border`}
                style={{ animationDelay: `${catIndex * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${colorClasses.bg} ${colorClasses.primary}`}
                  >
                    <span className="text-xl" role="img" aria-hidden="true">
                      {cat.skills[0].icon}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold">{cat.category}</h3>
                </div>

                <div className="space-y-4">
                  {cat.skills.map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      className="animate-slide-up"
                      style={{ animationDelay: `${catIndex * 100 + skillIndex * 50}ms` }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-lg" role="img" aria-hidden="true">
                            {skill.icon}
                          </span>
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <span className={`text-sm font-semibold ${colorClasses.primary}`}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-navy-800 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: "0%",
                            background: `linear-gradient(90deg, var(--color-${cat.color}-500), var(--color-${cat.color}-400))`,
                          }}
                          role="progressbar"
                          aria-valuenow={skill.level}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          aria-label={`${skill.name} proficiency: ${skill.level}%`}
                        >
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 glass rounded-2xl p-8 animate-fade-in" style={{ animationDelay: "600ms" }}>
          <h3 className="text-2xl font-bold mb-6 text-center">Education & Certifications</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Certificate: Data Analyst to Data Scientist — Optimi College (2023)",
              "Matric (National Senior Certificate) — Mathematics & Physical Sciences (2018)",
            ].map((cert, index) => (
              <span
                key={cert}
                className="px-4 py-2 glass-strong rounded-lg text-sm text-slate-300 border border-navy-700 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}