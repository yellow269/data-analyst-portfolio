"use client";

const sqlProjects = [
  {
    id: "data-warehouse",
    title: "Enterprise Data Warehouse Design",
    description:
      "Designed and implemented a Kimball-style dimensional data warehouse on PostgreSQL supporting 50+ fact tables, 200+ dimensions, and serving 30+ downstream analytics applications.",
    image: "/projects/sql-dw.jpg",
    features: [
      "Star schema with conformed dimensions",
      "Slowly Changing Dimensions (Type 1/2/3)",
      "Partitioned fact tables for performance",
      "Automated ETL with dbt + Airflow",
      "Data quality tests (dbt tests + Great Expectations)",
      "Column-level lineage documentation",
    ],
    code: `-- Fact Sales - Partitioned by Month
CREATE TABLE fact_sales (
    sale_key BIGSERIAL,
    date_key INTEGER NOT NULL,
    customer_key INTEGER NOT NULL,
    product_key INTEGER NOT NULL,
    store_key INTEGER NOT NULL,
    quantity INTEGER NOT NULL,
    unit_price NUMERIC(10,2) NOT NULL,
    discount_amount NUMERIC(10,2) DEFAULT 0,
    net_sales_amount NUMERIC(12,2) GENERATED ALWAYS AS
        (quantity * unit_price - discount_amount) STORED,
    created_at TIMESTAMPTZ DEFAULT NOW()
) PARTITION BY RANGE (date_key);

-- Monthly partitions
CREATE TABLE fact_sales_2024_01 PARTITION OF fact_sales
    FOR VALUES FROM (20240101) TO (20240201);
CREATE TABLE fact_sales_2024_02 PARTITION OF fact_sales
    FOR VALUES FROM (20240201) TO (20240301);
-- ... additional partitions`,
    github: "https://github.com/julian/sql-data-warehouse",
    download: "/downloads/data-warehouse-schema.sql",
  },
  {
    id: "customer-ltv",
    title: "Customer Lifetime Value Modeling",
    description:
      "Advanced SQL-based LTV calculation using probabilistic models (BG/NBD + Gamma-Gamma) implemented entirely in PostgreSQL with recursive CTEs and window functions for cohort analysis.",
    image: "/projects/sql-ltv.jpg",
    features: [
      "BG/NBD model for purchase frequency",
      "Gamma-Gamma for monetary value",
      "Cohort-based retention curves",
      "Predictive LTV at customer level",
      "Automated monthly recalculation",
      "Integration with marketing platforms",
    ],
    code: `-- Cohort Retention Analysis with Recursive CTE
WITH RECURSIVE customer_cohorts AS (
    SELECT
        customer_id,
        DATE_TRUNC('month', MIN(order_date))::DATE AS cohort_month
    FROM orders
    GROUP BY customer_id
),
cohort_activity AS (
    SELECT
        cc.cohort_month,
        DATE_TRUNC('month', o.order_date)::DATE AS activity_month,
        COUNT(DISTINCT cc.customer_id) AS active_customers
    FROM customer_cohorts cc
    JOIN orders o ON cc.customer_id = o.customer_id
    GROUP BY cc.cohort_month, DATE_TRUNC('month', o.order_date)
),
cohort_sizes AS (
    SELECT cohort_month, COUNT(*) AS cohort_size
    FROM customer_cohorts
    GROUP BY cohort_month
)
SELECT
    ca.cohort_month,
    ca.activity_month,
    EXTRACT(MONTH FROM AGE(ca.activity_month, ca.cohort_month))::INTEGER AS period_number,
    ca.active_customers,
    cs.cohort_size,
    ROUND(ca.active_customers::NUMERIC / cs.cohort_size * 100, 1) AS retention_rate
FROM cohort_activity ca
JOIN cohort_sizes cs ON ca.cohort_month = cs.cohort_month
ORDER BY ca.cohort_month, ca.activity_month;`,
    github: "https://github.com/julian/sql-customer-ltv",
    download: "/downloads/customer-ltv.sql",
  },
  {
    id: "query-optimization",
    title: "Query Performance Optimization",
    description:
      "Systematic query optimization reducing average query time from 45s to <2s across 200+ reporting queries. Index strategy, partition pruning, statistics tuning, and plan analysis.",
    image: "/projects/sql-perf.jpg",
    features: [
      "Index optimization (B-tree, BRIN, GIN, Partial)",
      "Partition pruning verification",
      "Extended statistics for correlated columns",
      "Parallel query configuration",
      "Plan cache analysis and parameterization",
      "Query rewriting for predicate pushdown",
    ],
    code: `-- Before: 45s execution time
EXPLAIN (ANALYZE, BUFFERS, FORMAT TEXT)
SELECT c.customer_name, SUM(f.net_sales) AS total_sales
FROM fact_sales f
JOIN dim_customer c ON f.customer_key = c.customer_key
JOIN dim_date d ON f.date_key = d.date_key
WHERE d.year = 2024
  AND d.month BETWEEN 1 AND 6
  AND c.region = 'EMEA'
GROUP BY c.customer_name
ORDER BY total_sales DESC
LIMIT 20;

-- After: 1.2s with optimized indexes
-- Added composite index:
CREATE INDEX CONCURRENTLY idx_fact_sales_date_customer
ON fact_sales (date_key, customer_key)
INCLUDE (net_sales_amount)
WHERE date_key >= 20240101;`,
    github: "https://github.com/julian/sql-optimization",
    download: "/downloads/query-optimization.sql",
  },
  {
    id: "real-time-analytics",
    title: "Real-Time Analytics with Materialized Views",
    description:
      "Built near-real-time analytical layer using incrementally refreshed materialized views, triggers, and pg_cron for sub-minute data freshness without impacting OLTP performance.",
    image: "/projects/sql-realtime.jpg",
    features: [
      "Incremental materialized view refresh",
      "Trigger-based change capture",
      "pg_cron scheduled refreshes",
      "Concurrent refresh for zero downtime",
      "Monitoring with pg_stat_statements",
      "Fallback to base tables during refresh",
    ],
    code: `-- Incrementally refreshed materialized view
CREATE MATERIALIZED VIEW mv_hourly_sales AS
SELECT
    DATE_TRUNC('hour', sale_timestamp) AS hour_bucket,
    store_key,
    product_key,
    COUNT(*) AS transaction_count,
    SUM(quantity) AS total_quantity,
    SUM(net_sales_amount) AS total_sales,
    AVG(net_sales_amount) AS avg_basket_size
FROM fact_sales_raw
WHERE sale_timestamp >= NOW() - INTERVAL '90 days'
GROUP BY 1, 2, 3
WITH DATA;

-- Unique index for concurrent refresh
CREATE UNIQUE INDEX idx_mv_hourly_sales_unique
ON mv_hourly_sales (hour_bucket, store_key, product_key);

-- pg_cron job for 5-min refresh
SELECT cron.schedule(
    'refresh-hourly-sales',
    '*/5 * * * *',
    'REFRESH MATERIALIZED VIEW CONCURRENTLY mv_hourly_sales;'
);`,
    github: "https://github.com/julian/sql-realtime",
    download: "/downloads/realtime-analytics.sql",
  },
];

export default function SQLProjects() {
  return (
    <section
      id="sql"
      className="py-24 md:py-32 px-6"
      aria-labelledby="sql-title"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-4 animate-fade-in">
            SQL & Database Engineering
          </span>
          <h2
            id="sql-title"
            className="text-4xl md:text-5xl font-bold mb-4 animate-slide-up"
          >
            SQL{" "}
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: "100ms" }}>
            Advanced SQL solutions including data warehouse architecture,
            predictive modeling in-database, query optimization, and
            real-time analytics layers.
          </p>
        </div>

        <div className="space-y-8">
          {sqlProjects.map((project, index) => (
            <article
              key={project.id}
              className="glass-strong rounded-2xl p-6 md:p-8 animate-slide-up border border-navy-700"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <div className="aspect-video bg-navy-800 rounded-xl flex items-center justify-center relative overflow-hidden">
                    <span className="text-8xl opacity-30" role="img" aria-hidden="true">🗄️</span>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent" />
                  </div>
                </div>

                <div className="lg:col-span-2">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0 text-blue-400">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                      <p className="text-slate-400 mt-1">{project.description}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 flex items-center gap-2 text-blue-400">
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

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 flex items-center gap-2 text-blue-400">
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

                  <div className="flex flex-wrap gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors border border-navy-700 rounded-lg hover:border-blue-500/50"
                    >
                      View Repository
                    </a>
                    {project.download && (
                      <a
                        href={project.download}
                        className="px-4 py-2 text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 transition-colors rounded-lg"
                        download
                      >
                        Download SQL
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