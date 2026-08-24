function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">

        <div>
          <p className="text-lg font-bold text-cyan-400">
            Salim<span className="text-white">Ops</span>
          </p>

          <p className="mt-1 text-sm text-slate-500">
            DevOps Engineer • Automation • Cloud • Infrastructure
          </p>
        </div>

        <div className="text-center text-sm text-slate-500 md:text-right">
          <p>
            Built with React + Tailwind CSS
          </p>

          <p className="mt-1">
            © {new Date().getFullYear()} Salim Khan. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
