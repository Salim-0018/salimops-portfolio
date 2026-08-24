const skills = [
  {
    category: "Operating Systems",
    items: ["Linux", "Ubuntu", "Shell Scripting"],
  },
  {
    category: "Version Control",
    items: ["Git", "GitHub"],
  },
  {
    category: "Containers",
    items: ["Docker", "Docker Compose"],
  },
  {
    category: "CI/CD",
    items: ["Jenkins", "Argo CD"],
  },
  {
    category: "Orchestration",
    items: ["Kubernetes", "kubectl"],
  },
  {
    category: "Infrastructure",
    items: ["Terraform", "AWS"],
  },
  {
    category: "Monitoring",
    items: ["Prometheus", "Grafana"],
  },
]

function Skills() {
  return (
    <section id="skills" className="border-t border-slate-800 bg-slate-900/30 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Technical Skills
        </p>

        <h2 className="text-4xl font-bold md:text-5xl">
          DevOps Toolkit
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill.category}
              className="rounded-xl border border-slate-800 bg-slate-950 p-6 transition hover:-translate-y-1 hover:border-cyan-400"
            >
              <h3 className="text-xl font-semibold text-white">
                {skill.category}
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md bg-slate-800 px-3 py-1.5 text-sm text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
