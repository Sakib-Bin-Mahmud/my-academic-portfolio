import { experience, leadership, awards } from '@/lib/data';

export default function Experience() {
  return (
    <section id="experience" className="border-t border-line/60 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-detect">[ 04 &mdash; Experience ]</p>
        <h2 className="mb-12 font-display text-3xl font-medium text-ink">Professional Experience</h2>

        <div className="relative border-l border-line pl-8">
          {experience.map((e, i) => (
            <div key={e.role + e.org} className="relative mb-10 last:mb-0">
              <span className="absolute -left-[37px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-detect bg-base" />
              <p className="font-mono text-xs uppercase tracking-widest text-muted">{e.period}</p>
              <h3 className="mt-1 font-display text-lg text-ink">
                {e.role} <span className="text-muted">&middot; {e.org}</span>
              </h3>
              <ul className="mt-2 flex flex-col gap-1">
                {e.bullets.map((b, j) => (
                  <li key={j} className="font-body text-sm leading-relaxed text-ink/80">
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <h3 className="mb-6 font-display text-xl font-medium text-ink">Leadership & Service</h3>
            <div className="flex flex-col gap-5">
              {leadership.map((l) => (
                <div key={l.role + l.org}>
                  <p className="font-mono text-xs uppercase tracking-widest text-muted">{l.period}</p>
                  <p className="mt-1 font-display text-base text-ink">
                    {l.role} <span className="text-muted">&middot; {l.org}</span>
                  </p>
                  <p className="mt-1 font-body text-sm text-ink/80">{l.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-6 font-display text-xl font-medium text-ink">Awards & Honors</h3>
            <div className="flex flex-col gap-4">
              {awards.map((a) => (
                <div key={a.title} className="border-l-2 border-warm pl-4">
                  <p className="font-body text-sm text-ink">{a.title}</p>
                  <p className="mt-0.5 font-mono text-xs text-muted">
                    {a.org} &middot; {a.period}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
