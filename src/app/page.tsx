export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50">
      {/* Container */}
      <div className="mx-auto max-w-5xl px-6 py-16">
        {/* Hero */}
        <section className="space-y-6">
          <p className="text-sm text-zinc-400">
            Taguatinga, DF • Deskside Support • M365
          </p>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Gabriel Vynicius Rocha Lima
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
            Senior Agent (Deskside Support) com foco em suporte, automação e melhorias
            contínuas. Construindo soluções com qualidade, documentação e CI/CD.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-zinc-50 px-5 py-2.5 text-sm font-medium text-zinc-950 shadow hover:bg-zinc-200 transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/gabriel-vynicius/"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-zinc-700 px-5 py-2.5 text-sm font-medium text-zinc-50 hover:bg-zinc-900 transition"
            >
              LinkedIn
            </a>

            <a
              href="#contato"
              className="rounded-2xl border border-zinc-700 px-5 py-2.5 text-sm font-medium text-zinc-50 hover:bg-zinc-900 transition"
            >
              Contato
            </a>
          </div>
        </section>

        {/* Divider */}
        <div className="my-12 h-px w-full bg-zinc-800" />

        {/* Preview sections */}
        <section className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/50 p-5 shadow">
            <h2 className="text-lg font-semibold">Projetos</h2>
            <p className="mt-2 text-sm text-zinc-400">
              Em breve: cases com desafio, solução e resultados.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/50 p-5 shadow">
            <h2 className="text-lg font-semibold">Sobre</h2>
            <p className="mt-2 text-sm text-zinc-400">
              Minha trajetória, stack e foco em melhoria contínua.
            </p>
          </div>

          <div
            id="contato"
            className="rounded-2xl border border-zinc-800 bg-zinc-950/50 p-5 shadow"
          >
            <h2 className="text-lg font-semibold">Contato</h2>
            <p className="mt-2 text-sm text-zinc-400">
              Email e redes para conversarmos.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 text-sm text-zinc-500">
          © {new Date().getFullYear()} • Gabriel Vynicius Rocha Lima
        </footer>
      </div>
    </main>
  );
}
``