function About() {
  return (
    <section id="about" className="border-t border-slate-800 bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
          About Me
        </p>

        <h2 className="text-4xl font-bold md:text-5xl">
          Building & Automating with DevOps
        </h2>

        <div className="mt-8 max-w-4xl space-y-5 text-lg leading-8 text-slate-400">
          <p>
            I'm Salim Khan, an aspiring DevOps Engineer focused on
            automation, containerization, CI/CD and cloud-native
            technologies.
          </p>

          <p>
            I build practical projects using Linux, Git, Docker,
            Jenkins, Kubernetes, Argo CD, Terraform, Prometheus and
            Grafana.
          </p>

          <p>
            My goal is to design reliable deployment workflows,
            automate repetitive tasks and continuously improve
            application delivery and infrastructure.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
            <h3 className="text-3xl font-bold text-cyan-400">CI/CD</h3>
            <p className="mt-2 text-slate-400">
              Automated build and deployment pipelines
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
            <h3 className="text-3xl font-bold text-cyan-400">Containers</h3>
            <p className="mt-2 text-slate-400">
              Docker and Kubernetes based deployments
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
            <h3 className="text-3xl font-bold text-cyan-400">Monitoring</h3>
            <p className="mt-2 text-slate-400">
              Prometheus and Grafana observability
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
