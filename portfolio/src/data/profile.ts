/**
 * ─────────────────────────────────────────────────────────────
 *  ALL SITE CONTENT LIVES IN THIS FILE.
 *  To update the site, edit this file, commit and push.
 *  GitHub Actions rebuilds and redeploys automatically.
 * ─────────────────────────────────────────────────────────────
 */

export const site = {
  url: 'https://danisw3.github.io',
  title: 'Daniel Temesgen | Data Engineer, BI & Analytics',
  description:
    'Data Engineer in Addis Ababa with 7 years of experience in SQL, Python, dbt and Power BI: dimensional models, ELT pipelines and dashboards that teams actually use.',
  cvFile: '/Daniel_Temesgen_CV.pdf',
};

export const person = {
  name: 'Daniel Temesgen',
  role: 'Data Engineer',
  focus: 'BI and analytics',
  location: 'Addis Ababa, Ethiopia',
  statement:
    'I turn raw operational data into trusted models, dashboards and decisions.',
  email: 'dasufr194@gmail.com',
  links: {
    github: 'https://github.com/daniSW3',
    linkedin: 'https://www.linkedin.com/in/daniel-temesgen-ab829b155/',
    medium: 'https://medium.com/@dani.switch',
  },
};

export const about = [
  'I am a Data Engineer with seven years of experience across media, agribusiness and supply-chain businesses in Ethiopia, building the models, pipelines and reports that finance, sales and operations teams rely on.',
  'I started as a data analyst consolidating sales data at MultiChoice Ethiopia, moved into BI as a reporting analyst building Power BI dashboards for every major function at EthioChicken, and now design dimensional models, ELT pipelines and Streamlit apps at Hatch Africa.',
  'I pair engineering discipline with clear data storytelling. Alongside my day job I build applied machine-learning projects in forecasting, fraud detection, credit risk and NLP, and I am deepening my work in the Microsoft Fabric ecosystem.',
];

export type Job = {
  role: string;
  company: string;
  place: string;
  start: string;
  end: string;
  points: string[];
};

export const experience: Job[] = [
  {
    role: 'Data Engineer',
    company: 'Hatch Africa',
    place: 'Addis Ababa',
    start: 'Jul 2026',
    end: 'Present',
    points: [
      'Build and optimise dbt-powered dimensional models (fact and dimension tables) in SQL and Python, exposing supply-chain, inventory and market-penetration KPIs that inform expansion decisions across Ethiopia and Africa.',
      'Engineer reusable ELT pipelines with version-controlled documentation, so operations, sales and finance teams can self-serve ad-hoc analysis, cutting reporting turnaround from days to hours.',
      'Audit and optimise Power BI semantic models and SQL views to improve refresh performance, data accuracy and maintainability.',
      'Develop Streamlit web applications on Azure SQL for NPS and recruitment analytics, giving managers interactive access to performance metrics.',
    ],
  },
  {
    role: 'Reporting Analyst',
    company: 'EthioChicken',
    place: 'Addis Ababa',
    start: 'Apr 2024',
    end: 'Jun 2026',
    points: [
      'Designed and delivered Power BI dashboards for Finance, Logistics, Procurement, Sales and Production, giving each function a single source of truth for its core KPIs.',
      'Built a vaccine analytics suite tracking inventory, distribution and usage end to end, improving visibility across the supply chain.',
      'Performed exploratory analysis in Python and SQL to surface insights that shaped operational and commercial decisions.',
      'Optimised SQL queries and Python workflows, significantly reducing data processing time and report latency.',
    ],
  },
  {
    role: 'Data Analyst',
    company: 'MultiChoice Ethiopia',
    place: 'Addis Ababa',
    start: 'Aug 2019',
    end: 'May 2024',
    points: [
      'Consolidated sales data from multiple sources into structured datasets aligned with business requirements.',
      'Produced clear visual reports and presentations on sales performance for stakeholders across the organisation.',
      'Supported management with recurring performance tracking, turning complex data into concise, decision-ready insights.',
    ],
  },
];

export type Category = 'engineering' | 'bi' | 'ml' | 'sql';

export const categories: { id: Category; label: string }[] = [
  { id: 'engineering', label: 'Data engineering' },
  { id: 'bi', label: 'BI & dashboards' },
  { id: 'sql', label: 'SQL & analytics' },
  { id: 'ml', label: 'Machine learning' },
];

export type Project = {
  title: string;
  summary: string;
  details: string[];
  stack: string[];
  category: Category;
  featured?: boolean;
  repo?: string;
  article?: string;
  demo?: string;
};

const gh = (r: string) => `https://github.com/daniSW3/${r}`;
const md = (slug: string) => `https://medium.com/@dani.switch/${slug}`;

export const projects: Project[] = [
  {
    title: 'Telegram data product: raw messages to analytical API',
    summary:
      'An end-to-end pipeline that extracts Telegram channel data, models it with dbt, enriches images with YOLOv8 and serves the result through an API.',
    details: [
      'dbt handles transformation into analysis-ready models.',
      'Dagster orchestrates the pipeline from extraction through to the API layer.',
      'YOLOv8 object detection enriches image posts with structured labels.',
      'Containerised with Docker and docker-compose for reproducible runs.',
    ],
    stack: ['Python', 'dbt', 'Dagster', 'YOLOv8', 'Docker'],
    category: 'engineering',
    featured: true,
    repo: gh('Shipping-a-Data-Product-From-Raw-Telegram-Data-to-an-Analytical-API'),
    article: md('building-a-scalable-telegram-data-pipeline-from-extraction-to-api-d70f899e6f30'),
  },
  {
    title: 'Agent NPS dashboard (multi-market)',
    summary:
      'A Streamlit app on Azure SQL that gives managers interactive access to agent Net Promoter Score results across markets.',
    details: [
      'Multi-market NPS reporting for field and sales managers.',
      'Reads directly from an Azure SQL warehouse.',
      'Includes an AI assistant module for asking questions of the data.',
    ],
    stack: ['Python', 'Streamlit', 'Azure SQL'],
    category: 'bi',
    featured: true,
    repo: gh('hatch-nps-dashboard'),
  },
  {
    title: 'SQL analytics assessment: customers, frequency, inactivity, CLV',
    summary:
      'Four business questions answered in SQL against a savings and investment platform database.',
    details: [
      'High-value customers holding both a funded savings plan and a funded investment plan, ranked by total deposits.',
      'Transaction-frequency segmentation into high, medium and low bands.',
      'Inactivity alerts for active accounts with no inflow in 365 days.',
      'Customer lifetime value estimated from tenure and transaction volume.',
    ],
    stack: ['SQL'],
    category: 'sql',
    featured: true,
    repo: gh('DataAnalytics-Assessment'),
  },
  {
    title: 'Sales forecasting dashboard',
    summary:
      'A Streamlit dashboard for sales analysis, ARIMA time-series forecasting and product-mix optimisation.',
    details: [
      'Sales data analysis and visualisation.',
      'Time-series forecasting with ARIMA models.',
      'Product-mix optimisation with interactive charts and reports.',
    ],
    stack: ['Python', 'Streamlit', 'ARIMA'],
    category: 'bi',
    featured: true,
    repo: gh('Sales-Data-Forecasting'),
  },
  {
    title: 'Credit risk probability model for alternative data',
    summary:
      'A credit-scoring model built around a proxy default variable, designed with Basel II interpretability requirements in mind.',
    details: [
      'Constructs a proxy target where explicit default labels are missing.',
      'Weighs interpretable logistic regression with Weight of Evidence against gradient boosting.',
      'Documents the regulatory trade-offs between transparency and performance.',
    ],
    stack: ['Python', 'scikit-learn', 'Logistic regression', 'Gradient boosting'],
    category: 'ml',
    featured: true,
    repo: gh('Credit-Risk-Probability-Model-for-Alternative-Data'),
  },
  {
    title: 'Fraud detection for e-commerce and bank transactions',
    summary:
      'Fraud-detection models that handle the different challenges of e-commerce and bank transaction data.',
    details: [
      'Separate treatment of e-commerce and bank transaction datasets.',
      'Model development and evaluation written up as a full case study.',
    ],
    stack: ['Python', 'scikit-learn'],
    category: 'ml',
    featured: true,
    repo: gh('Improved-detection-of-fraud-cases-for-e-commerce-and-bank-transactions'),
    article: md('improved-detection-of-fraud-cases-for-e-commerce-and-bank-transactions-65f3aa00ca26'),
  },
  {
    title: 'RAG chatbot for financial-services complaints',
    summary:
      'A retrieval-augmented chatbot that turns customer complaints into actionable insight for financial-services teams.',
    details: [
      'Retrieval-augmented generation over customer feedback.',
      'Answers questions about complaint themes in plain language.',
    ],
    stack: ['Python', 'RAG', 'LLMs'],
    category: 'ml',
    repo: gh('Intelligent-Complaint-Analysis-for-Financial-Services'),
    article: md('building-a-rag-powered-chatbot-to-turn-customer-feedback-into-actionable-insights-a26f6b99a7c5'),
  },
  {
    title: 'Amharic e-commerce data extractor and vendor scorecard',
    summary:
      'Scrapes Ethiopian e-commerce Telegram channels, extracts products, prices and locations with a fine-tuned NER model, and scores vendors for micro-lending.',
    details: [
      'Amharic text scraping and normalisation from 5+ channels.',
      'Named-entity recognition fine-tuned and compared across XLM-RoBERTa, mBERT and DistilBERT.',
      'Model interpretability with SHAP and LIME.',
      'Vendor lending scorecard built from posting frequency, views and price.',
    ],
    stack: ['Python', 'Hugging Face Transformers', 'Telethon', 'SHAP', 'LIME'],
    category: 'ml',
    repo: gh('Building-an-Amharic-E-commerce-Data-Extractor'),
  },
  {
    title: 'Time-series forecasting for portfolio optimisation',
    summary:
      'Forecasting and portfolio analysis on ten years of TSLA, BND and SPY data.',
    details: [
      'Data pulled from Yahoo Finance with yfinance, July 2015 to July 2025.',
      'Stationarity testing (ADF), outlier detection and rolling statistics.',
      'Risk metrics including Value at Risk and Sharpe ratio.',
    ],
    stack: ['Python', 'pandas', 'statsmodels', 'yfinance'],
    category: 'ml',
    repo: gh('Time-Series-Forecasting-for-Portfolio-Management-Optimization-'),
    article: md('interim-report-time-series-forecasting-for-portfolio-management-optimization-e9cfbe7775ad'),
  },
  {
    title: 'Brent oil price change-point analysis',
    summary:
      'A Bayesian change-point model that links structural breaks in Brent oil prices to geopolitical, economic and OPEC events.',
    details: [
      'Compiled dataset of key oil-market events by category.',
      'Bayesian change-point detection with PyMC3.',
      'Interpretation of detected breaks against historical events.',
    ],
    stack: ['Python', 'PyMC3', 'statsmodels'],
    category: 'ml',
    repo: gh('Change-point-analysis-and-statistical-modelling-of-time-series-data-'),
  },
  {
    title: 'Insurance risk analytics and predictive modelling',
    summary:
      'End-to-end exploratory analysis and predictive modelling on insurance data, with data versioning.',
    details: [
      'Exploratory analysis of insurance risk drivers.',
      'Data versioned with DVC.',
    ],
    stack: ['Python', 'DVC', 'pandas'],
    category: 'ml',
    repo: gh('Insurance_Risk_Analysis'),
    article: md('end-to-end-insurance-risk-analytics-predictive-modeling-8938722e64c0'),
  },
  {
    title: 'Bank customer review analysis',
    summary:
      'Collects bank customer reviews with a scraper, loads them into a database and analyses them.',
    details: [
      'Scraping, database loading and analysis scripts with tests.',
      'Visual summaries of review findings.',
    ],
    stack: ['Python', 'SQL'],
    category: 'sql',
    repo: gh('Bank-Data-Review'),
  },
  {
    title: 'Stock news and technical analysis',
    summary:
      'Combines financial news with technical indicators to study stock price movements.',
    details: ['Technical indicators computed with TA-Lib.'],
    stack: ['Python', 'TA-Lib', 'pandas'],
    category: 'ml',
    repo: gh('KAIM-Week1'),
    article: md('stock-news-and-technical-analysis-project-ee721891587a'),
  },
  {
    title: 'Cross-country solar potential: Benin, Sierra Leone, Togo',
    summary:
      'Exploratory comparison of solar irradiance data across three West African countries.',
    details: ['Reproducible Python environment and notebook-based analysis.'],
    stack: ['Python', 'Jupyter', 'pandas'],
    category: 'sql',
    repo: gh('solar-challenge-week1'),
    article: md('cross-country-comparison-of-solar-potential-benin-sierra-leone-and-togo-afcd050e6ee9'),
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: 'Languages & querying', items: ['SQL', 'Python (pandas, NumPy, scikit-learn)', 'R', 'DAX'] },
  {
    group: 'Data engineering',
    items: [
      'dbt',
      'ELT pipelines',
      'Dimensional modelling (fact & dimension tables)',
      'Microsoft Fabric',
      'Azure SQL',
      'Query optimisation',
      'Git version control',
    ],
  },
  {
    group: 'BI & visualisation',
    items: ['Power BI (semantic modelling, DAX)', 'Tableau', 'Streamlit', 'Matplotlib', 'Seaborn'],
  },
  {
    group: 'Analytics & ML',
    items: ['Exploratory data analysis', 'KPI design', 'Regression', 'Classification', 'Clustering', 'NLP fundamentals'],
  },
  {
    group: 'Professional',
    items: ['Data storytelling', 'Stakeholder management', 'Cross-functional collaboration', 'Problem-solving'],
  },
];

export const certifications: { name: string; issuer: string }[] = [
  { name: 'Microsoft Certified: Fabric Data Engineer Associate', issuer: 'Microsoft' },
  { name: 'Advanced SQL for Data Engineering', issuer: '365 Data Science' },
  { name: 'Data Visualization with Tableau Specialization', issuer: 'Coursera' },
  { name: 'The Complete SQL Bootcamp: Go from Zero to Hero', issuer: 'Udemy' },
  { name: 'AI Career Essentials', issuer: 'ALX Ethiopia' },
];

export const education = {
  degree: 'BSc, Electrical and Computer Engineering',
  school: 'Jimma University',
  place: 'Jimma, Ethiopia',
  years: '2012 – 2016',
};

export const articles: { title: string; date: string; url: string }[] = [
  {
    title: 'Time Series Forecasting for Portfolio Management Optimization',
    date: '2025-08-10',
    url: md('interim-report-time-series-forecasting-for-portfolio-management-optimization-e9cfbe7775ad'),
  },
  {
    title: 'Improved detection of fraud cases for e-commerce and bank transactions',
    date: '2025-07-29',
    url: md('improved-detection-of-fraud-cases-for-e-commerce-and-bank-transactions-65f3aa00ca26'),
  },
  {
    title: 'Building a Scalable Telegram Data Pipeline: From Extraction to API',
    date: '2025-07-15',
    url: md('building-a-scalable-telegram-data-pipeline-from-extraction-to-api-d70f899e6f30'),
  },
  {
    title: 'Building a RAG-Powered Chatbot to Turn Customer Feedback into Actionable Insights',
    date: '2025-07-05',
    url: md('building-a-rag-powered-chatbot-to-turn-customer-feedback-into-actionable-insights-a26f6b99a7c5'),
  },
  {
    title: 'End-to-End Insurance Risk Analytics & Predictive Modeling',
    date: '2025-06-17',
    url: md('end-to-end-insurance-risk-analytics-predictive-modeling-8938722e64c0'),
  },
  {
    title: 'Stock News and Technical Analysis Project',
    date: '2025-06-03',
    url: md('stock-news-and-technical-analysis-project-ee721891587a'),
  },
  {
    title: 'Cross-Country Comparison of Solar Potential: Benin, Sierra Leone, and Togo',
    date: '2025-05-26',
    url: md('cross-country-comparison-of-solar-potential-benin-sierra-leone-and-togo-afcd050e6ee9'),
  },
];
