"use client";

const skillCategories = [
  {
    category: "Business Intelligence",
    color: "violet",
    skills: [
      { name: "Power BI", level: 95, icon: "📊" },
      { name: "DAX", level: 90, icon: "🧮" },
      { name: "Power Query (M)", level: 85, icon: "🔄" },
      { name: "Data Modeling", level: 90, icon: "🏗️" },
      { name: "Row-Level Security", level: 80, icon: "🔒" },
      { name: "Power BI Service", level: 85, icon: "☁️" },
    ],
  },
  {
    category: "Databases & SQL",
    color: "blue",
    skills: [
      { name: "SQL (T-SQL, PostgreSQL)", level: 95, icon: "🗄️" },
      { name: "Query Optimization", level: 85, icon: "⚡" },
      { name: "Stored Procedures", level: 80, icon: "📦" },
      { name: "Database Design", level: 75, icon: "📐" },
      { name: "ETL/ELT Pipelines", level: 85, icon: "🔄" },
      { name: "BigQuery / Snowflake", level: 70, icon: "☁️" },
    ],
  },
  {
    category: "Programming & Analysis",
    color: "green",
    skills: [
      { name: "Python (pandas, NumPy)", level: 90, icon: "🐍" },
      { name: "Data Visualization (Matplotlib, Seaborn, Plotly)", level: 85, icon: "📈" },
      { name: "Machine Learning (scikit-learn)", level: 70, icon: "🤖" },
      { name: "Jupyter Notebooks", level: 90, icon: "📓" },
      { name: "Statistical Analysis", level: 80, icon: "📊" },
      { name: "API Integration", level: 75, icon: "🔌" },
    ],
  },
  {
    category: "Spreadsheet & Automation",
    color: "amber",
    skills: [
      { name: "Advanced Excel", level: 95, icon: "📑" },
      { name: "Power Query", level: 90, icon: "🔄" },
      { name: "Power Pivot / DAX", level: 85, icon: "🧮" },
      { name: "VBA / Macros", level: 75, icon: "⚙️" },
      { name: "Financial Modeling", level: 85, icon: "💰" },
      { name: "Office Scripts (TypeScript)", level: 70, icon: "📝" },
    ],
  },
  {
    category: "Visualization & Design",
    color: "pink",
    skills: [
      { name: "Dashboard Design Principles", level: 90, icon: "🎨" },
      { name: "Data Storytelling", level: 85, icon: "📖" },
      { name: "Tableau", level: 70, icon: "📊" },
      { name: "Custom Visuals", level: 75, icon: "🔧" },
      { name: "Color Theory & Accessibility", level: 80, icon: "🌈" },
      { name: "UX for Data Products", level: 75, icon: "👤" },
    ],
  },
  {
    category: "Soft Skills & Process",
    color: "cyan",
    skills: [
      { name: "Stakeholder Communication", level: 90, icon: "💬" },
      { name: "Requirements Gathering", level: 85, icon: "📋" },
      { name: "Agile / Scrum", level: 80, icon: "🏃" },
      { name: "Documentation & Governance", level: 85, icon: "📚" },
      { name: "Training & Enablement", level: 80, icon: "🎓" },
      { name: "Problem Solving", level: 95, icon: "🧩" },
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
            Proficient across the modern data stack — from database design to
            executive dashboards. I continuously expand my toolkit to deliver
            the best solution for each unique challenge.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
          <h3 className="text-2xl font-bold mb-6 text-center">Certifications & Continuous Learning</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Microsoft Certified: Power BI Data Analyst Associate",
              "Microsoft Certified: Azure Data Fundamentals",
              "Google Data Analytics Professional Certificate",
              "SQL for Data Science (UC Davis)",
              "Python for Everybody (University of Michigan)",
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