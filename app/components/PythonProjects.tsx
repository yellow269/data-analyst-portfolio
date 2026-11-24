"use client";

const pythonProjects = [
  {
    id: "etl-pipeline",
    title: "Automated ETL Pipeline Framework",
    description:
      "Production-grade ETL framework with configurable extractors, transformers, and loaders. Supports incremental loads, data quality checks, lineage tracking, and orchestration via Airflow/Prefect.",
    image: "/projects/python-etl.jpg",
    features: [
      "Plugin-based architecture for connectors",
      "Schema validation with Great Expectations",
      "Incremental CDC with watermark tracking",
      "Automatic retry with exponential backoff",
      "Data lineage graph generation",
      "Slack/Email alerting on failures",
    ],
    code: `# config/etl_config.yaml
pipelines:
  - name: sales_daily
    schedule: "0 6 * * *"
    extractor:
      type: postgres
      connection: source_db
      query: "SELECT * FROM sales WHERE updated_at > :last_run"
    transformer:
      - type: rename_columns
        mapping: {cust_id: customer_id, amt: amount}
      - type: validate
        expectations:
          - column: customer_id
            not_null: true
          - column: amount
            between: [0, 100000]
    loader:
      type: postgres
      connection: warehouse
      table: fact_sales
      mode: upsert
      keys: [sale_id]`,
    github: "https://github.com/julian/python-etl-framework",
    download: "/downloads/etl-framework.zip",
  },
  {
    id: "demand-forecasting",
    title: "Demand Forecasting System",
    description:
      "Time series forecasting pipeline using Prophet, ARIMA, and LightGBM with automated model selection, backtesting, and A/B testing framework for retail demand prediction across 10,000+ SKUs.",
    image: "/projects/python-forecast.jpg",
    features: [
      "Multi-model ensemble (Prophet + LightGBM)",
      "Automated hyperparameter tuning (Optuna)",
      "Walk-forward validation with expanding window",
      "Hierarchical forecasting (store/category/SKU)",
      "Holiday & promotion calendar integration",
      "Model monitoring & drift detection",
    ],
    code: `from prophet import Prophet
from lightgbm import LGBMRegressor
import optuna

class DemandForecaster:
    def __init__(self, freq='D', horizon=30):
        self.freq = freq
        self.horizon = horizon
        self.models = {}

    def prepare_features(self, df):
        df = df.copy()
        df['dayofweek'] = df['ds'].dt.dayofweek
        df['month'] = df['ds'].dt.month
        df['quarter'] = df['ds'].dt.quarter
        df['is_weekend'] = df['dayofweek'].isin([5, 6]).astype(int)
        # Lag features
        for lag in [7, 14, 30]:
            df[f'lag_{lag}'] = df['y'].shift(lag)
        # Rolling stats
        for window in [7, 30]:
            df[f'rolling_mean_{window}'] = df['y'].rolling(window).mean()
            df[f'rolling_std_{window}'] = df['y'].rolling(window).std()
        return df.dropna()

    def objective(self, trial, X_train, y_train, X_val, y_val):
        params = {
            'n_estimators': trial.suggest_int('n_estimators', 100, 1000),
            'learning_rate': trial.suggest_float('learning_rate', 0.01, 0.3),
            'max_depth': trial.suggest_int('max_depth', 3, 10),
            'num_leaves': trial.suggest_int('num_leaves', 10, 100),
        }
        model = LGBMRegressor(**params, random_state=42)
        model.fit(X_train, y_train)
        preds = model.predict(X_val)
        return mean_absolute_error(y_val, preds)

    def train(self, df, sku_id):
        df = self.prepare_features(df)
        split = int(len(df) * 0.8)
        X_train, X_val = df.iloc[:split].drop(['y', 'ds'], axis=1), df.iloc[split:].drop(['y', 'ds'], axis=1)
        y_train, y_val = df.iloc[:split]['y'], df.iloc[split:]['y']

        study = optuna.create_study(direction='minimize')
        study.optimize(lambda t: self.objective(t, X_train, y_train, X_val, y_val), n_trials=50)

        best_model = LGBMRegressor(**study.best_params, random_state=42)
        best_model.fit(X_train, y_train)
        self.models[sku_id] = best_model
        return best_model`,
    github: "https://github.com/julian/demand-forecasting",
    download: "/downloads/demand-forecasting.zip",
  },
  {
    id: "anomaly-detection",
    title: "Real-Time Anomaly Detection",
    description:
      "Streaming anomaly detection for metrics monitoring using Isolation Forest, statistical process control, and LSTM autoencoders. Deployed on Kubernetes with Prometheus/Grafana integration.",
    image: "/projects/python-anomaly.jpg",
    features: [
      "Multiple detection algorithms (Isolation Forest, SPC, LSTM)",
      "Adaptive thresholding with concept drift handling",
      "Real-time scoring via Kafka Streams",
      "Root cause analysis with feature attribution",
      "Automated incident creation (PagerDuty/Jira)",
      "Model retraining pipeline with human feedback",
    ],
    code: `import numpy as np
from sklearn.ensemble import IsolationForest
from sklearn.preprocessing import RobustScaler
from river import drift

class StreamingAnomalyDetector:
    def __init__(self, contamination=0.01, window_size=1000):
        self.contamination = contamination
        self.window_size = window_size
        self.scaler = RobustScaler()
        self.model = IsolationForest(
            contamination=contamination,
            n_estimators=200,
            max_samples='auto',
            random_state=42,
            n_jobs=-1
        )
        self.drift_detector = drift.ADWIN()
        self.buffer = []
        self.is_fitted = False

    def partial_fit(self, X):
        X_scaled = self.scaler.fit_transform(X.reshape(-1, 1)) if not self.is_fitted else self.scaler.transform(X.reshape(-1, 1))
        self.buffer.extend(X_scaled.flatten())

        if len(self.buffer) >= self.window_size:
            self.model.fit(np.array(self.buffer).reshape(-1, 1))
            self.buffer = self.buffer[-self.window_size//2:]
            self.is_fitted = True

    def score(self, x):
        if not self.is_fitted:
            return 0.0, False

        x_scaled = self.scaler.transform([[x]])[0, 0]
        anomaly_score = -self.model.score_samples([[x_scaled]])[0]
        is_anomaly = anomaly_score > self.threshold_

        # Check for concept drift
        self.drift_detector.update(anomaly_score)
        if self.drift_detector.drift_detected:
            self.reset()

        return anomaly_score, is_anomaly

    @property
    def threshold_(self):
        if not self.is_fitted:
            return np.inf
        scores = -self.model.score_samples(
            np.array(self.buffer).reshape(-1, 1)
        )
        return np.percentile(scores, (1 - self.contamination) * 100)

    def reset(self):
        self.model = IsolationForest(
            contamination=self.contamination,
            n_estimators=200,
            random_state=42
        )
        self.buffer = []
        self.is_fitted = False`,
    github: "https://github.com/julian/anomaly-detection",
    download: "/downloads/anomaly-detection.zip",
  },
  {
    id: "nlp-text-analytics",
    title: "NLP Text Analytics Pipeline",
    description:
      "End-to-end NLP pipeline for customer feedback analysis: sentiment analysis, topic modeling, entity extraction, and automated insight generation. Processes 50K+ documents monthly.",
    image: "/projects/python-nlp.jpg",
    features: [
      "Multi-language sentiment (VADER, Transformers)",
      "BERTopic for dynamic topic modeling",
      "Custom NER for domain entities",
      "Aspect-based sentiment analysis",
      "Automated executive summary generation",
      "Dashboard with interactive drill-down",
    ],
    code: `from transformers import pipeline
from bertopic import BERTopic
import spacy
from sentence_transformers import SentenceTransformer

class FeedbackAnalyzer:
    def __init__(self):
        self.sentiment_pipe = pipeline(
            "sentiment-analysis",
            model="cardiffnlp/twitter-roberta-base-sentiment-latest",
            device=0
        )
        self.embedding_model = SentenceTransformer('all-MiniLM-L6-v2')
        self.topic_model = BERTopic(
            embedding_model=self.embedding_model,
            min_topic_size=10,
            nr_topics="auto"
        )
        self.nlp = spacy.load("en_core_web_lg")
        # Add custom entities
        ruler = self.nlp.add_pipe("entity_ruler", before="ner")
        ruler.add_patterns([
            {"label": "PRODUCT", "pattern": [{"lower": "ipad"}]},
            {"label": "FEATURE", "pattern": [{"lower": "battery"}, {"lower": "life"}]},
        ])

    def analyze_batch(self, texts, metadata=None):
        results = []

        # Sentiment
        sentiments = self.sentiment_pipe(texts, batch_size=32)

        # Topics
        topics, probs = self.topic_model.fit_transform(texts)
        topic_info = self.topic_model.get_topic_info()

        # Entities & Aspects
        for i, text in enumerate(texts):
            doc = self.nlp(text)
            entities = [(ent.text, ent.label_) for ent in doc.ents]

            # Aspect-based sentiment
            aspects = self.extract_aspects(doc)

            results.append({
                'text': text,
                'sentiment': sentiments[i],
                'topic': topics[i],
                'topic_prob': probs[i],
                'entities': entities,
                'aspects': aspects,
                'metadata': metadata[i] if metadata else {}
            })

        return results, topic_info

    def extract_aspects(self, doc):
        aspects = []
        for token in doc:
            if token.dep_ in ('amod', 'acomp') and token.head.pos_ == 'NOUN':
                aspect = token.head.text
                sentiment = token.text
                aspects.append({'aspect': aspect, 'sentiment': sentiment})
        return aspects

    def generate_summary(self, results):
        total = len(results)
        positive = sum(1 for r in results if r['sentiment']['label'] == 'POSITIVE')
        negative = sum(1 for r in results if r['sentiment']['label'] == 'NEGATIVE')
        top_topics = self.topic_model.get_topic_info().head(5)

        return f"""
        Feedback Summary ({total} documents)
        ====================================
        Positive: {positive} ({positive/total*100:.1f}%)
        Negative: {negative} ({negative/total*100:.1f}%)
        Neutral: {total-positive-negative} ({(total-positive-negative)/total*100:.1f}%)

        Top Topics:
        {top_topics[['Name', 'Count']].to_string(index=False)}
        """`,
    github: "https://github.com/julian/nlp-text-analytics",
    download: "/downloads/nlp-pipeline.zip",
  },
];

export default function PythonProjects() {
  return (
    <section
      id="python"
      className="py-24 md:py-32 px-6 bg-navy-900/50"
      aria-labelledby="python-title"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-green-500/10 text-green-400 text-sm font-medium mb-4 animate-fade-in">
            Python & Data Science
          </span>
          <h2
            id="python-title"
            className="text-4xl md:text-5xl font-bold mb-4 animate-slide-up"
          >
            Python{" "}
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: "100ms" }}>
            Production-ready Python solutions for ETL, forecasting, anomaly
            detection, NLP, and machine learning. Built with pandas, scikit-learn,
            Prophet, Transformers, and modern MLOps practices.
          </p>
        </div>

        <div className="space-y-8">
          {pythonProjects.map((project, index) => (
            <article
              key={project.id}
              className="glass-strong rounded-2xl p-6 md:p-8 animate-slide-up border border-navy-700"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <div className="aspect-video bg-navy-800 rounded-xl flex items-center justify-center relative overflow-hidden">
                    <span className="text-8xl opacity-30" role="img" aria-hidden="true">🐍</span>
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent" />
                  </div>
                </div>

                <div className="lg:col-span-2">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0 text-green-400">
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
                    <h4 className="font-semibold mb-3 flex items-center gap-2 text-green-400">
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
                    <h4 className="font-semibold mb-3 flex items-center gap-2 text-green-400">
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
                      className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-green-400 transition-colors border border-navy-700 rounded-lg hover:border-green-500/50"
                    >
                      View Repository
                    </a>
                    {project.download && (
                      <a
                        href={project.download}
                        className="px-4 py-2 text-sm font-medium text-white bg-green-500 hover:bg-green-600 transition-colors rounded-lg"
                        download
                      >
                        Download Code
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