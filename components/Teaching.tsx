import { teaching } from '@/lib/data';

export default function Teaching() {
  return (
    <section id="teaching" className="border-t border-line/60 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-detect">[ 03 &mdash; Teaching ]</p>
        <h2 className="mb-12 font-display text-3xl font-medium text-ink">Teaching & Mentoring</h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {teaching.map((t) => (
            <div key={t.role + t.org} className="rounded-sm border border-line bg-panel p-6">
              <p className="font-mono text-xs uppercase tracking-widest text-detect">{t.period}</p>
              <h3 className="mt-2 font-display text-lg text-ink">{t.role}</h3>
              <p className="font-body text-sm text-muted">{t.org}</p>
              <p className="mt-3 font-body text-sm leading-relaxed text-ink/80">{t.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
