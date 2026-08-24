function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-slate-800 bg-slate-950 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl text-center">

        <p className="mb-3 font-mono text-sm uppercase tracking-widest text-cyan-400">
          ./contact
        </p>

        <h2 className="text-4xl font-bold md:text-5xl">
          Let's Build Something Reliable
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
          I'm open to DevOps opportunities, internships, projects and
          conversations around automation, cloud and infrastructure.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <a
            href="https://github.com/Salim-0018"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-slate-700 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
          >
            GitHub ↗
          </a>

          <a
            href="#"
            className="rounded-lg border border-slate-700 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
          >
            LinkedIn ↗
          </a>

          <a
            href="mailto:salimkhan30891@gmail.com"
            className="rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Email Me
          </a>

        </div>
      </div>
    </section>
  )
}

export default Contact
