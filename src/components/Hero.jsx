function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-950 px-6 pt-32"
    >
      {/* Background grid */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(34,211,238,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.12) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Glow */}
      <div className="absolute left-1/2 top-1/4 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="mx-auto grid min-h-[75vh] max-w-7xl items-center gap-16 lg:grid-cols-2">

        {/* Left */}
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/5 px-4 py-2 text-sm text-emerald-400">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            SYSTEM ONLINE
          </div>

          <p className="mb-3 font-mono text-cyan-400">
            $ whoami
          </p>

          <h1 className="text-5xl font-black tracking-tight text-white md:text-7xl">
            Salim
            <span className="text-cyan-400"> Khan</span>
          </h1>

          <h2 className="mt-5 text-2xl font-bold text-slate-300 md:text-4xl">
            DevOps Engineer
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
            I build automated CI/CD pipelines, containerized applications,
            Kubernetes deployments and reliable monitoring systems.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-cyan-400 px-6 py-3 font-bold text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-300"
            >
              View Projects →
            </a>

            <a
              href="/resume.pdf"
              download
              className="rounded-lg border border-slate-700 px-6 py-3 font-bold text-white transition hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
            >
              Download Resume
            </a>
          </div>

          {/* Tech stack */}
          <div className="mt-10">
            <p className="mb-3 text-xs uppercase tracking-widest text-slate-500">
              Current Stack
            </p>

            <div className="flex flex-wrap gap-2">
              {[
                "Linux",
                "Docker",
                "Jenkins",
                "Kubernetes",
                "Argo CD",
                "Terraform",
                "AWS",
                "Prometheus",
                "Grafana",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-slate-800 bg-slate-900 px-3 py-1.5 font-mono text-xs text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="relative mx-auto w-full max-w-md">

          {/* Main profile card */}
          <div className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-slate-900/80 p-4 shadow-2xl shadow-cyan-500/10 backdrop-blur">

            {/* Terminal header */}
            <div className="mb-4 flex items-center justify-between rounded-xl bg-slate-950 px-4 py-3">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>

              <span className="font-mono text-xs text-slate-500">
                salim@devops:~
              </span>
            </div>

            {/* Photo */}
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-slate-800 bg-slate-950">
             <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-cyan-950 via-slate-950 to-slate-900">
  <div className="text-center">
    <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full border-2 border-cyan-400 text-5xl font-black text-cyan-400 shadow-lg shadow-cyan-500/20">
      SK
    </div>

    <p className="mt-5 font-mono text-sm text-cyan-400">
      salim@devops:~
    </p>

    <p className="mt-1 text-slate-400">
      DevOps Engineer
    </p>
  </div>
</div>  

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent p-6 pt-20">
                <p className="font-mono text-sm text-cyan-400">
                  ./salim-khan
                </p>

                <p className="mt-1 text-xl font-bold text-white">
                  DevOps Engineer
                </p>
              </div>
            </div>

            {/* Status */}
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-slate-950 p-4">
                <p className="text-xs text-slate-500">CI/CD</p>
                <p className="mt-1 font-semibold text-emerald-400">
                  ACTIVE
                </p>
              </div>

              <div className="rounded-xl bg-slate-950 p-4">
                <p className="text-xs text-slate-500">Kubernetes</p>
                <p className="mt-1 font-semibold text-emerald-400">
                  RUNNING
                </p>
              </div>
            </div>
          </div>

          {/* Floating pipeline */}
          <div className="absolute -bottom-8 -left-8 hidden rounded-xl border border-slate-800 bg-slate-950 p-4 shadow-xl md:block">
            <p className="mb-2 font-mono text-xs text-slate-500">
              deployment pipeline
            </p>

            <div className="flex items-center gap-2 font-mono text-xs">
              <span className="text-cyan-400">Git</span>
              <span className="text-slate-600">→</span>
              <span className="text-cyan-400">Jenkins</span>
              <span className="text-slate-600">→</span>
              <span className="text-cyan-400">Docker</span>
              <span className="text-slate-600">→</span>
              <span className="text-cyan-400">K8s</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
