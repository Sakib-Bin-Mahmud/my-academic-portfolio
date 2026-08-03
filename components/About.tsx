import { profile, education } from '@/lib/data';

export default function About() {
  return (
    <section id="about" className="border-t border-line/60 py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 md:grid-cols-5">
        <div className="md:col-span-1">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-detect">[ 00 &mdash; About ]</p>
        </div>
        <div className="md:col-span-3">
          {profile.bio.map((para, i) => (
            <p key={i} className="mb-5 font-body text-base leading-relaxed text-ink/90 last:mb-0">
              {para}
            </p>
          ))}
        </div>
        <div className="md:col-span-1">
          <div className="border-l border-line pl-5 font-mono text-xs text-muted">
            <p className="mb-1 text-ink">{education.degree}</p>
            <p className="mb-1">{education.org}</p>
            <p className="mb-4">{education.period}</p>
            <p className="text-ink">CGPA {education.cgpa}</p>
            <p>IELTS {education.ielts}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
