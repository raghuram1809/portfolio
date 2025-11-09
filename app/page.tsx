const highlights = [
  {
    label: "AI agents",
    value: "RAG copilots",
    description: "Azure OpenAI workflows that deliver KPI and CRM insights in real time.",
  },
  {
    label: "Cloud data stacks",
    value: "Azure, AWS, Databricks",
    description: "Designed reliable pipelines across Data Factory, Delta Lake, and streaming services.",
  },
  {
    label: "Impact",
    value: "25% faster ops",
    description: "Workflow automation that replaced manual status updates and task routing.",
  },
];

const experience = [
  {
    company: "Cloudsy, Inc.",
    role: "Data Engineer Intern",
    period: "Aug 2025 - Present",
    location: "San Jose, CA",
    summary: "Automating client communication pipelines that connect WhatsApp, CRM, and Azure data services.",
    bullets: [
      "Integrated the WhatsApp Business API for automated status updates, improving customer response efficiency.",
      "Engineered workflow automation rules that trigger actions on data events and cut manual task handling by 25%.",
      "Co-built AI-enabled CRM modules that unify messaging, invoicing, and ticket management inside one workflow.",
    ],
    stack: ["Azure", "WhatsApp Business API", "Python", "Automation"],
  },
  {
    company: "Cognizant",
    role: "Programmer Analyst / Data Engineer",
    period: "May 2022 - Aug 2023",
    location: "Chennai, India",
    summary: "Owned Azure data warehousing initiatives and analytics dashboards for enterprise clients.",
    bullets: [
      "Utilized Azure, Power BI, Hadoop, Hive, and PySpark to manage data warehouses and build KPI dashboards.",
      "Enhanced decision-making with comprehensive sales and inventory reporting plus visualization layers.",
      "Implemented Oracle-to-Azure migration and optimized ETL pipelines for scalable, reliable delivery.",
      "Containerized PySpark jobs with Docker and standardized CI/CD with Git to improve deployment parity.",
      "Streamlined workflows with JIRA, Ab Initio, and Power BI to raise data quality and cross-functional alignment.",
    ],
    stack: ["Azure", "Power BI", "PySpark", "Docker", "CI/CD"],
  },
  {
    company: "Tata Consultancy Services",
    role: "Data Scientist Intern",
    period: "Jun 2020 - Aug 2020",
    location: "Remote",
    summary: "Delivered sentiment analysis prototypes for cross-functional teams in a fast-paced internship.",
    bullets: [
      "Built and fine-tuned NLP pipelines in Python to classify sentiments and surface actionable insights.",
      "Presented model outcomes plus the supporting statistics to stakeholders to guide product decisions.",
      "Managed timelines and adapted quickly to keep deliveries aligned with strategic objectives.",
    ],
    stack: ["Python", "NLP", "SQL"],
  },
];

const projects = [
  {
    title: "LLM-Augmented Analytics",
    subtitle: "Azure OpenAI RAG pipeline for KPI copilots",
    description:
      "Designed a Retrieval-Augmented Generation workflow that ingests KPI documentation into a vector store, applies guardrailed Azure OpenAI prompts, and answers context-aware business questions.",
    results: [
      "Implemented prompt evaluation and logging to monitor accuracy, latency, and reliability.",
      "Demonstrated applied prompt engineering techniques that improved executive reporting workflows.",
    ],
    technologies: ["Azure OpenAI", "Cognitive Search", "Vector DB", "Prompt engineering"],
  },
  {
    title: "Cryptocurrency Analysis and Price Prediction",
    subtitle: "LSTM neural networks on Yahoo Finance data",
    description:
      "Built multivariate LSTM models that predicted asset movements using streaming market indicators and custom feature engineering.",
    results: ["Reached 96% prediction accuracy and published the research in IEEE."],
    technologies: ["Python", "TensorFlow", "LSTM", "Data visualization"],
  },
  {
    title: "Cardiac Arrhythmia Prediction",
    subtitle: "PCG and CNN-based early detection",
    description:
      "Combined CNN architectures with VGG-16 transfer learning to detect cardiac arrhythmia and heart failure risk from phonocardiogram signals.",
    results: [
      "Achieved 95% accuracy, secured Government of Telangana funding, and published findings in IEEE.",
    ],
    technologies: ["CNN", "VGG-16", "Signal processing", "Medical AI"],
  },
  {
    title: "Diabetes Prediction Models",
    subtitle: "Fine-tuning XGBoost and Random Forest",
    description:
      "Compared multiple ML models to predict diabetes risk and tuned the top performers for higher recall.",
    results: [
      "Boosted Random Forest to 89% accuracy and XGBoost to 90% accuracy across validation cohorts.",
    ],
    technologies: ["XGBoost", "Random Forest", "Model evaluation"],
  },
];

const education = [
  {
    school: "University of Massachusetts - Lowell",
    credential: "M.S. Computer Science",
    period: "Sep 2023 - May 2025",
    details: "Coursework in LLM systems, distributed cloud data platforms, and responsible AI. GPA 3.7.",
  },
  {
    school: "Sreenidhi Institute of Science and Technology",
    credential: "B.Tech Computer Engineering",
    period: "Jul 2018 - Aug 2022",
    details: "Graduated with GPA 3.7 while leading applied ML projects sponsored by the Government of Telangana.",
  },
];

const skillGroups = [
  {
    title: "Programming languages",
    items: ["Python", "SQL", "JavaScript", "R", "Java", "MATLAB"],
  },
  {
    title: "Web and APIs",
    items: ["React", "Node.js", "FastAPI", "Flask", "REST APIs", "CSS", "Git"],
  },
  {
    title: "Data and ETL",
    items: ["MongoDB", "MySQL", "PySpark", "Hadoop", "Hive", "Databricks", "Talend", "Data warehousing"],
  },
  {
    title: "Analytics and ML",
    items: ["Power BI", "Machine learning", "NLP", "LLM prompting", "TensorFlow", "Keras", "NumPy", "SciPy", "Tableau"],
  },
  {
    title: "Cloud and DevOps",
    items: ["Microsoft Azure", "AWS", "Oracle Cloud", "Azure Data Factory", "Delta Lake", "Docker", "Kubernetes", "CI/CD"],
  },
  {
    title: "Collaboration",
    items: ["Databricks", "JIRA", "Agile", "MS Office 365"],
  },
];

const certifications = [
  "Microsoft Certified Azure Data Fundamentals (DP-900)",
  "Oracle Cloud Infrastructure Certified Data Scientist Professional (1Z0-1110-25)",
  "Microsoft Certified Fabric Data Engineer Associate (DP-700, in progress)",
  "HackerRank SQL Advanced",
  "Python Programming by Coursera",
  "Databricks Data Engineer",
];

const navLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-16 lg:flex-row lg:gap-16">
        <section className="flex flex-1 flex-col gap-8 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0px_40px_120px_-40px_rgba(0,0,0,0.8)]">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.5em] text-amber-300">AI/ML + Cloud Engineer</p>
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Srinivasa Daita builds intelligent data systems that turn LLM research into production-grade automation.
            </h1>
            <p className="text-base leading-relaxed text-zinc-300">
              Developed AI agents leveraging LLMs for intelligent data retrieval, predictive analytics, and automation on
              Azure-first pipelines. Comfortable moving from data modeling and PySpark jobs to guardrailed prompt design
              and DevOps hardening.
            </p>
            <p className="text-base leading-relaxed text-zinc-300">
              I thrive when I can pair cloud-native engineering with AI experimentation, shipping copilots, dashboards,
              and ETL that unblock business stakeholders without compromising reliability.
            </p>
            <div className="text-sm text-zinc-400">
              <p>San Jose, CA | +1 (978) 677-0484</p>
              <p>raghuramd123@gmail.com</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:raghuramd123@gmail.com"
              className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-sm font-medium text-zinc-950 transition hover:bg-amber-300"
            >
              Email me
            </a>
            <a
              href="https://www.linkedin.com/in/raghuramdaita"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-5 py-2 text-sm font-medium text-white transition hover:border-amber-300 hover:text-amber-200"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/raghuramdaita"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-5 py-2 text-sm font-medium text-white transition hover:border-amber-300 hover:text-amber-200"
            >
              GitHub
            </a>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="inline-flex items-center justify-center rounded-full border border-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-zinc-300 transition hover:border-amber-200 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-amber-300">{item.label}</p>
                <p className="mt-2 text-2xl font-semibold text-white">{item.value}</p>
                <p className="mt-1 text-sm text-zinc-300">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="flex flex-1 flex-col gap-8">
          <section
            id="experience"
            className="rounded-3xl border border-white/10 bg-zinc-900/60 p-8 shadow-[0px_40px_120px_-60px_rgba(0,0,0,0.9)]"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-amber-300">Experience</p>
                <h2 className="text-2xl font-semibold text-white">Recent roles and measurable results</h2>
              </div>
              <span className="text-sm text-zinc-400">AI, analytics, and cloud operations</span>
            </div>
            <div className="mt-6 space-y-8">
              {experience.map((item) => (
                <article key={`${item.company}-${item.period}`} className="rounded-2xl border border-white/5 bg-white/5 p-6">
                  <header className="flex flex-wrap items-baseline justify-between gap-3">
                    <div>
                      <p className="text-sm uppercase tracking-[0.3em] text-zinc-400">{item.period}</p>
                      <h3 className="text-xl font-semibold text-white">
                        {item.role} at <span className="text-amber-200">{item.company}</span>
                      </h3>
                    </div>
                    <div className="text-right text-sm text-zinc-400">
                      <p>{item.location}</p>
                      <div className="mt-2 flex flex-wrap justify-end gap-2 text-xs text-zinc-300">
                        {item.stack.map((tech) => (
                          <span key={tech} className="rounded-full border border-white/15 px-3 py-1">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </header>
                  <p className="mt-4 text-sm leading-relaxed text-zinc-300">{item.summary}</p>
                  <ul className="mt-4 space-y-2 text-sm text-zinc-200">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2">
                        <span className="text-amber-300">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section
            id="projects"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0px_40px_120px_-60px_rgba(0,0,0,0.9)]"
          >
            <p className="text-xs uppercase tracking-[0.4em] text-amber-300">Projects</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">Applied AI and analytics builds</h2>
            <div className="mt-6 grid gap-6">
              {projects.map((project) => (
                <article key={project.title} className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6">
                  <header className="space-y-1">
                    <p className="text-sm uppercase tracking-[0.3em] text-zinc-400">{project.subtitle}</p>
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  </header>
                  <p className="mt-3 text-sm text-zinc-300">{project.description}</p>
                  <ul className="mt-4 space-y-2 text-sm text-zinc-200">
                    {project.results.map((result) => (
                      <li key={result} className="flex gap-2">
                        <span className="text-amber-300">•</span>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2 text-xs text-zinc-300">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="rounded-full border border-white/15 px-3 py-1">
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section
            id="education"
            className="rounded-3xl border border-white/10 bg-zinc-900/60 p-8 shadow-[0px_40px_120px_-60px_rgba(0,0,0,0.9)]"
          >
            <p className="text-xs uppercase tracking-[0.4em] text-amber-300">Education</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">Academic foundations</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {education.map((school) => (
                <article key={school.school} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <header className="space-y-1">
                    <p className="text-sm uppercase tracking-[0.3em] text-zinc-400">{school.period}</p>
                    <h3 className="text-lg font-semibold text-white">{school.school}</h3>
                    <p className="text-sm text-amber-200">{school.credential}</p>
                  </header>
                  <p className="mt-3 text-sm text-zinc-300">{school.details}</p>
                </article>
              ))}
            </div>
          </section>

          <section
            id="skills"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0px_40px_120px_-60px_rgba(0,0,0,0.9)]"
          >
            <p className="text-xs uppercase tracking-[0.4em] text-amber-300">Skills</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">Stacks, tools, and methods</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {skillGroups.map((group) => (
                <div key={group.title} className="rounded-2xl border border-white/10 bg-zinc-900/60 p-5">
                  <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="rounded-full border border-white/15 px-3 py-1 text-sm text-zinc-200">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section
            id="certifications"
            className="rounded-3xl border border-white/10 bg-zinc-900/60 p-8 shadow-[0px_40px_120px_-60px_rgba(0,0,0,0.9)]"
          >
            <p className="text-xs uppercase tracking-[0.4em] text-amber-300">Certifications</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">Credentials that back the work</h2>
            <ul className="mt-6 space-y-3 text-sm text-zinc-200">
              {certifications.map((cert) => (
                <li key={cert} className="flex gap-2">
                  <span className="text-amber-300">•</span>
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
