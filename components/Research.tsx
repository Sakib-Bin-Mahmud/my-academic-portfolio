import { highlights, publications } from '@/lib/data';

export default function Research() {
  return (
    <section id="research" className="border-t border-line/60 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-detect">[ 01 &mdash; Research ]</p>
        <h2 className="mb-12 font-display text-3xl font-medium text-ink">Selected Contributions</h2>

        <div className="mb-20 grid grid-cols-2 gap-px overflow-hidden rounded-md border border-line bg-line md:grid-cols-4">
          {highlights.map((h) => (
            <div key={h.label} className="bg-panel p-6">
              <p className="font-display text-3xl text-detect">{h.stat}</p>
              <p className="mt-1 font-mono text-xs uppercase tracking-widest text-muted">{h.label}</p>
              <p className="mt-3 font-body text-sm leading-snug text-ink/80">{h.detail}</p>
            </div>
          ))}
        </div>

        <h3 className="mb-8 font-display text-xl font-medium text-ink">Publications</h3>
        <div className="flex flex-col gap-6">
          {publications.map((p) => (
            <div key={p.title} className="group border-b border-line/60 pb-6 last:border-0">
              <p className="font-mono text-xs uppercase tracking-widest text-muted">{p.year}</p>
              <h4 className="mt-2 font-display text-lg text-ink">{p.title}</h4>
              <p className="mt-1 font-body text-sm text-muted">{p.authors}</p>
              <p className="mt-1 font-body text-sm italic text-muted">{p.venue}</p>
              <div className="mt-2 flex flex-wrap gap-4 font-mono text-xs">
                {p.doi && (
                  <a
                    href={p.doiUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-detect hover:underline"
                  >
                    DOI: {p.doi}
                  </a>
                )}
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-detect hover:underline"
                  >
                    {p.linkLabel} &rarr;
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
