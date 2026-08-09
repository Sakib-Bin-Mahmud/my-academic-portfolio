import { profile } from '@/lib/data';

function IconEmail() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 shrink-0">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 6 8.5 7 8.5-7" />
    </svg>
  );
}

function IconDownload() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 shrink-0">
      <path d="M12 4v11" />
      <path d="m7 11 5 5 5-5" />
      <path d="M4 19h16" />
    </svg>
  );
}

function IconGitHub() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 shrink-0">
      <path d="M12 3a9 9 0 0 0-2.85 17.54c.45.08.61-.2.61-.43v-1.68c-2.5.54-3.03-1.2-3.03-1.2-.41-1.04-1-1.32-1-1.32-.82-.56.06-.55.06-.55.9.06 1.38.93 1.38.93.8 1.38 2.11.98 2.63.75.08-.58.32-.98.57-1.21-2-.23-4.1-1-4.1-4.44 0-.98.35-1.78.92-2.41-.09-.23-.4-1.15.09-2.4 0 0 .75-.24 2.46.92a8.4 8.4 0 0 1 4.48 0c1.71-1.16 2.46-.92 2.46-.92.49 1.25.18 2.17.09 2.4.57.63.92 1.43.92 2.41 0 3.45-2.11 4.2-4.12 4.42.33.29.62.85.62 1.72v2.55c0 .24.16.51.62.43A9 9 0 0 0 12 3Z" />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 shrink-0">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M7.5 10.5v6" />
      <path d="M7.5 7.5v.01" />
      <path d="M12 16.5v-3.75a2.25 2.25 0 0 1 4.5 0v3.75" />
      <path d="M12 12.75v3.75" />
    </svg>
  );
}

function IconScholar() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 shrink-0">
      <path d="M2 9.5 12 4l10 5.5-10 5.5-10-5.5Z" />
      <path d="M6 12v4.5c0 1.1 2.69 2.5 6 2.5s6-1.4 6-2.5V12" />
    </svg>
  );
}

function IconOrcid() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 shrink-0">
      <circle cx="12" cy="12" r="9" />
      <path d="M9.5 8.25v7.5" />
      <path d="M9.5 8.25v.01" />
      <path d="M13 8.25h1.75a3.5 3.5 0 0 1 0 7H13v-7Z" />
    </svg>
  );
}

const socials = [
  { label: 'Email', href: `mailto:${profile.email}`, value: profile.email, Icon: IconEmail },
  { label: 'Download CV', href: '/cv.pdf', value: 'PDF, updated regularly', Icon: IconDownload },
  { label: 'GitHub', href: profile.links.github, value: 'Sakib-Bin-Mahmud', Icon: IconGitHub },
  { label: 'LinkedIn', href: profile.links.linkedin, value: 'sakib-bin-mahmud', Icon: IconLinkedIn },
  { label: 'Google Scholar', href: profile.links.scholar, value: 'View profile', Icon: IconScholar },
  { label: 'ORCID', href: profile.links.orcid, value: '0009-0005-0727-6282', Icon: IconOrcid },
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
              <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted group-hover:text-detect">
                <s.Icon />
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
