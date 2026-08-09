'use client';

import { profile } from '@/lib/data';

const links = [
  { href: '#research', label: 'Research' },
  { href: '#projects', label: 'Projects' },
  { href: '#teaching', label: 'Teaching' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-line/60 bg-base/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-sm tracking-wide text-ink">
          S. M. SOVON
        </a>
        <ul className="hidden gap-8 font-mono text-xs uppercase tracking-widest text-muted md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-detect">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-6">
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden font-mono text-xs uppercase tracking-widest text-ink hover:text-detect sm:inline"
          >
            Download CV
          </a>
          <a
            href={profile.links.scholar}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-widest text-detect hover:underline"
          >
            Scholar &rarr;
          </a>
        </div>
      </nav>
    </header>
  );
}
