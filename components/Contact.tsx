import { profile } from '@/lib/data';

const socials = [
  { label: 'Email', href: `mailto:${profile.email}`, value: profile.email },
  { label: 'GitHub', href: profile.links.github, value: 'Sakib-Bin-Mahmud' },
  { label: 'LinkedIn', href: profile.links.linkedin, value: 'sakib-bin-mahmud' },
  { label: 'Google Scholar', href: profile.links.scholar, value: 'View profile' },
  { label: 'ORCID', href: profile.links.orcid, value: '0009-0005-0727-6282' },
];

export default function Contact() {
  return (
    <section id="contact" className="border-t border-line/60 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-detect">[ 05 &mdash; Contact ]</p>
        <h2 className="mb-4 font-display text-3xl font-medium text-ink md:text-4xl">
          Open to research conversations &mdash;<br />reach out anytime.
        </h2>
        <p className="mb-12 max-w-xl font-body text-base text-muted">
          Preparing PhD applications for Fall 2027 in Computer Vision and Multimodal AI.
          Always happy to talk research fit, collaboration, or feedback.
        </p>

        <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2 md:grid-cols-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="group flex flex-col border-b border-line/60 pb-3 transition-colors hover:border-detect"
            >
              <span className="font-mono text-xs uppercase tracking-widest text-muted group-hover:text-detect">
                {s.label}
              </span>
              <span className="mt-1 font-body text-sm text-ink">{s.value}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-24 max-w-6xl border-t border-line/60 px-6 pt-8">
        <p className="font-mono text-xs text-muted">
          &copy; {new Date().getFullYear()} {profile.name}. Built with Next.js & Tailwind CSS.
        </p>
      </div>
    </section>
  );
}
