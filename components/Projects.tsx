import Link from 'next/link';
import { projects } from '@/lib/data';

export default function Projects() {
  return (
    <section id="projects" className="border-t border-line/60 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-detect">[ 02 &mdash; Projects ]</p>
        <h2 className="mb-12 font-display text-3xl font-medium text-ink">Research & Engineering</h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="bracket-frame group block rounded-sm bg-panel p-7 transition-colors hover:bg-panel2"
            >
              <span className="bracket-br" />
              <p className="font-mono text-[11px] uppercase tracking-widest text-muted">{p.category}</p>
              <h3 className="mt-2 font-display text-xl text-ink">{p.title}</h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-ink/80">{p.summary}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-sm border border-line px-2 py-0.5 font-mono text-[10px] text-muted">
                    {t}
                  </span>
                ))}
              </div>

              <span className="mt-5 inline-block font-mono text-xs text-detect group-hover:underline">
                View project &rarr;
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
