"use client";

const excelProjects = [
  {
    id: "financial-model",
    title: "Dynamic Financial Planning Model",
    description:
      "Comprehensive 3-statement financial model with dynamic assumptions, scenario analysis, sensitivity tables, and automated consolidation across 15 business units.",
    image: "/projects/excel-financial.jpg",
    features: [
      "3-statement model (IS, BS, CF) with circularity handling",
      "Driver-based revenue/expense forecasting",
      "Monte Carlo simulation (10,000 iterations)",
      "Scenario manager (Base/Bull/Bear)",
      "Sensitivity analysis with tornado charts",
      "Automated roll-forward templates",
    ],
    techniques: [
      "Power Query for data ingestion",
      "Power Pivot / DAX for calculations",
      "Dynamic arrays (LET, LAMBDA, MAP)",
      "VBA for automation & UDFs",
      "Office Scripts for web automation",
      "Custom ribbon with RibbonX",
    ],
    github: "https://github.com/julian/excel-financial-model",
    download: "/downloads/financial-model.xlsm",
  },
  {
    id: "sales-dashboard-excel",
    title: "Interactive Sales Dashboard",
    description:
      "Fully interactive sales dashboard using only native Excel features: pivot charts, slicers, timelines, conditional formatting, and dynamic named ranges — no Power BI required.",
    image: "/projects/excel-sales.jpg",
    features: [
      "Dynamic chart switching with form controls",
      "Cascading slicers (Region → Country → City)",
      "Top N / Bottom N dynamic filtering",
      "Variance waterfall charts",
      "KPI cards with conditional icons",
      "Print-ready executive summary tab",
    ],
    techniques: [
      "PivotTables with Data Model",
      "CUBE formulas for custom layouts",
      "Dynamic named ranges (OFFSET/INDEX)",
      "Advanced conditional formatting",
      "Form controls (Combo Box, Scroll Bar)",
      "Camera tool for live snapshots",
    ],
    github: "https://github.com/julian/excel-sales-dashboard",
    download: "/downloads/sales-dashboard.xlsx",
  },
  {
    id: "automation-toolkit",
    title: "Excel Automation Toolkit",
    description:
      "Collection of reusable VBA modules and Office Scripts for common data tasks: data cleaning, report generation, file processing, email automation, and API integration.",
    image: "/projects/excel-automation.jpg",
    features: [
      "Data Cleaner: dedupe, trim, case, validate",
      "Report Builder: template → multi-sheet output",
      "File Processor: batch combine/split workbooks",
      "Email Engine: Outlook integration with templates",
      "REST Client: GET/POST with OAuth2",
      "Scheduler: Windows Task / Office Scripts timer",
    ],
    techniques: [
      "VBA Classes & Interfaces (SOLID principles)",
      "Office Scripts (TypeScript) for Excel Online",
      "ADODB for SQL connectivity",
      "MSXML2 for HTTP requests",
      "Dictionary / Collection for performance",
      "Error handling with centralized logging",
    ],
    code: `' Data Cleaner Module - Main Entry
Public Sub CleanWorkbook(Optional ws As Worksheet)
    Dim cleaner As New DataCleaner
    Dim config As CleanConfig

    Set config = New CleanConfig
    config.TrimWhitespace = True
    config.RemoveDuplicates = True
    config.StandardizeCase = CaseType.Proper
    config.ValidateEmails = True
    config.CustomRules = GetBusinessRules()

    Set ws = If(ws Is Nothing, ActiveSheet, ws)
    cleaner.Clean ws, config

    MsgBox "Cleaned " & cleaner.RowsProcessed & " rows. " & _
           cleaner.IssuesFixed & " issues fixed.", vbInformation
End Sub

' Office Scripts equivalent (TypeScript)
/**
 * @CustomFunction
 */
async function cleanData(
  context: Excel.RequestContext,
  range: Excel.Range,
  options: CleanOptions
): Promise<CleanResult> {
  const sheet = context.workbook.worksheets.getActiveWorksheet();
  const data = range.getValues();

  let cleaned = data.map(row =>
    options.trim ? row.map(c => typeof c === 'string' ? c.trim() : c) : row
  );

  if (options.removeDuplicates) {
    cleaned = [...new Set(cleaned.map(JSON.stringify))]
      .map(JSON.parse);
  }

  range.getResizedRange(cleaned.length - 1, cleaned[0].length - 1).setValues(cleaned);
  return { rowsProcessed: cleaned.length, duplicatesRemoved: data.length - cleaned.length };
}`,
    github: "https://github.com/julian/excel-automation-toolkit",
    download: "/downloads/automation-toolkit.xlam",
  },
  {
    id: "power-query-patterns",
    title: "Advanced Power Query Patterns",
    description:
      "Library of reusable Power Query (M) functions for complex data transformations: recursive hierarchies, fuzzy matching, API pagination, incremental refresh patterns, and custom connectors.",
    image: "/projects/excel-powerquery.jpg",
    features: [
      "Recursive CTE for org charts / BOMs",
      "Fuzzy matching with Jaro-Winkler",
      "REST API pagination (cursor/offset/page)",
      "Incremental refresh with watermarks",
      "Custom data connector (ODATA/GraphQL)",
      "Query folding optimization guide",
    ],
    techniques: [
      "M functions with type annotations",
      "List.Generate for complex iterations",
      "Table.Buffer for query folding",
      "Error handling with try/otherwise",
      "Parameterized queries for security",
      "Documentation with metadata tags",
    ],
    code: `(SourceTable as table, JoinKey as text, Threshold as nullable number) as table =>
let
    // Fuzzy Match Function using Jaro-Winkler
    JaroWinkler = (s1 as text, s2 as text) as number =>
        let
            len1 = Text.Length(s1),
            len2 = Text.Length(s2),
            matchDistance = Number.RoundUp(Number.Max({len1, len2}) / 2) - 1,
            matches1 = List.Buffer(List.Generate(
                () => [i=0, matches=""],
                each [i] < len1,
                each [i=[i]+1, matches=if List.ContainsAny(Text.Middle(s2, Number.Max({0,[i]-matchDistance}), Number.Min({len2, [i]+matchDistance+1})), {[i]}) then [matches] & Text.Middle(s1, [i], 1) else [matches]],
                each [matches]
            )),
            // ... Jaro-Winkler implementation continues
            score = if List.Count(matches1) = 0 then 0 else
                (List.Count(matches1)/len1 + List.Count(matches1)/len2 + (List.Count(matches1)-Transpositions)/List.Count(matches1))/3
        in
            score,

    // Apply fuzzy match to all combinations
    Cartesian = Table.AddColumn(SourceTable, "Matches", each
        Table.SelectRows(SourceTable, (r) => JaroWinkler(Record.Field(_, JoinKey), r[JoinKey]) >= (Threshold ?? 0.85))
    ),
    Expanded = Table.ExpandTableColumn(Cartesian, "Matches", {JoinKey}, {"MatchKey"})
in
    Expanded`,
    github: "https://github.com/julian/power-query-patterns",
    download: "/downloads/power-query-patterns.pq.txt",
  },
];

export default function ExcelProjects() {
  return (
    <section
      id="excel"
      className="py-24 md:py-32 px-6"
      aria-labelledby="excel-title"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-amber-500/10 text-amber-400 text-sm font-medium mb-4 animate-fade-in">
            Excel & Advanced Modeling
          </span>
          <h2
            id="excel-title"
            className="text-4xl md:text-5xl font-bold mb-4 animate-slide-up"
          >
            Excel{" "}
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: "100ms" }}>
            Advanced Excel solutions leveraging Power Query, Power Pivot, DAX,
            dynamic arrays, VBA, and Office Scripts. Production-grade models
            and automation toolkits used by finance and operations teams.
          </p>
        </div>

        <div className="space-y-8">
          {excelProjects.map((project, index) => (
            <article
              key={project.id}
              className="glass-strong rounded-2xl p-6 md:p-8 animate-slide-up border border-navy-700"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <div className="aspect-video bg-navy-800 rounded-xl flex items-center justify-center relative overflow-hidden">
                    <span className="text-8xl opacity-30" role="img" aria-hidden="true">📑</span>
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent" />
                  </div>
                </div>

                <div className="lg:col-span-2">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0 text-amber-400">
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
                      <h4 className="font-semibold mb-3 flex items-center gap-2 text-amber-400">
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
                      <h4 className="font-semibold mb-3 flex items-center gap-2 text-amber-400">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                        Techniques Used
                      </h4>
                      <ul className="space-y-2">
                        {project.techniques.map((tech, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                            <svg className="w-4 h-4 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {project.code && (
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 flex items-center gap-2 text-amber-400">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                        Sample Code
                      </h4>
                      <pre className="bg-navy-950 border border-navy-700 rounded-xl p-4 overflow-x-auto max-h-80">
                        <code className="text-sm text-slate-300 font-mono leading-relaxed">
                          {project.code}
                        </code>
                      </pre>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors border border-navy-700 rounded-lg hover:border-amber-500/50"
                    >
                      View Repository
                    </a>
                    {project.download && (
                      <a
                        href={project.download}
                        className="px-4 py-2 text-sm font-medium text-white bg-amber-500 hover:bg-amber-600 transition-colors rounded-lg"
                        download
                      >
                        Download File
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