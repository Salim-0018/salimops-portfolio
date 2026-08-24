const pipeline = [
  { name: "GitHub", icon: "01", description: "Source Control" },
  { name: "Jenkins", icon: "02", description: "CI / Build" },
  { name: "Docker", icon: "03", description: "Containerize" },
  { name: "Kubernetes", icon: "04", description: "Orchestrate" },
  { name: "Argo CD", icon: "05", description: "GitOps Deploy" },
  { name: "Prometheus", icon: "06", description: "Monitor" },
  { name: "Grafana", icon: "07", description: "Visualize" },
]

function DevOpsJourney() {
  return (
    <section
      id="journey"
      className="border-t border-slate-800 bg-slate-900/30 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="mb-3 font-mono text-sm uppercase tracking-widest text-cyan-400">
            ./deployment-pipeline
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            From Code to Production
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            My approach to modern application delivery combines
            automation, containerization, orchestration, GitOps and
            observability.
          </p>
        </div>

        <div className="relative mt-16">
          {/* Pipeline line */}
          <div className="absolute left-0 right-0 top-12 hidden h-px bg-slate-800 lg:block" />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-7">
            {pipeline.map((item) => (
              <div
                key={item.name}
                className="group relative"
              >
                <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-2xl border border-slate-700 bg-slate-950 transition duration-300 group-hover:border-cyan-400 group-hover:shadow-lg group-hover:shadow-cyan-500/10">
                  <span className="font-mono text-xl font-bold text-cyan-400">
                    {item.icon}
                  </span>
                </div>

                <div className="mt-5 text-center">
                  <h3 className="font-bold text-white group-hover:text-cyan-400">
                    {item.name}
                  </h3>

                  <p className="mt-1 text-xs text-slate-500">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Terminal */}
        <div className="mt-16 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950">
          <div className="flex items-center gap-2 border-b border-slate-800 px-5 py-4">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-400" />

            <span className="ml-3 font-mono text-xs text-slate-500">
              deployment.log
            </span>
          </div>

          <div className="space-y-3 p-6 font-mono text-sm">
            <p>
              <span className="text-emerald-400">[SUCCESS]</span>{" "}
              Source code pushed to GitHub
            </p>

            <p>
              <span className="text-emerald-400">[SUCCESS]</span>{" "}
              Jenkins pipeline triggered
            </p>

            <p>
              <span className="text-emerald-400">[SUCCESS]</span>{" "}
              Docker image built and published
            </p>

            <p>
              <span className="text-emerald-400">[SUCCESS]</span>{" "}
              Kubernetes deployment updated
            </p>

            <p>
              <span className="text-emerald-400">[SUCCESS]</span>{" "}
              Argo CD synchronization completed
            </p>

            <p>
              <span className="text-cyan-400">[INFO]</span>{" "}
              Prometheus metrics available
            </p>

            <p>
              <span className="text-cyan-400">[INFO]</span>{" "}
              Grafana dashboard monitoring application
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DevOpsJourney
