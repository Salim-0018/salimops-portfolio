const projects = [
  {
    title: "DevOps Toolkit Pro",
    description:
      "A centralized DevOps toolkit for application deployment, infrastructure operations, monitoring and troubleshooting.",
    technologies: [
      "React",
      "Docker",
      "Jenkins",
      "Kubernetes",
      "Argo CD",
      "Prometheus",
      "Grafana",
    ],
    github: "https://github.com/Salim-0018/DevOps-Toolkit-Pro",
    type: "Featured Project",
  },
  {
    title: "DevOps Monitoring Dashboard",
    description:
      "Monitoring-focused project designed to visualize infrastructure and application metrics using modern observability tools.",
    technologies: [
      "Linux",
      "Prometheus",
      "Grafana",
      "Docker",
    ],
    github: "#",
    type: "Monitoring",
  },
  {
    title: "Expense Tracker",
    description:
      "Multi-container application with frontend, backend and MySQL database orchestrated using Docker Compose.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "Express",
      "MySQL",
      "Docker",
    ],
    github: "#",
    type: "Containerization",
  },
  {
    title: "Linux Server Monitor",
    description:
      "Linux monitoring project focused on system resources, server health and automated operational visibility.",
    technologies: [
      "Linux",
      "Shell Scripting",
      "Docker",
      "Jenkins",
    ],
    github: "#",
    type: "Automation",
  },
]

function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-slate-800 bg-slate-950 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        <div className="max-w-3xl">
          <p className="mb-3 font-mono text-sm uppercase tracking-widest text-cyan-400">
            ./projects
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Projects That Solve Real Problems
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            Practical DevOps projects focused on automation,
            containerization, CI/CD, Kubernetes and monitoring.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/5"
            >
              {/* Project number */}
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm text-cyan-400">
                  0{index + 1}
                </span>

                <span className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-400">
                  {project.type}
                </span>
              </div>

              <h3 className="mt-7 text-2xl font-bold text-white group-hover:text-cyan-400">
                {project.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-slate-950 px-3 py-1.5 font-mono text-xs text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-7">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-semibold text-cyan-400 transition hover:text-cyan-300"
                >
                  View on GitHub
                  <span>↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
