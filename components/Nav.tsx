'use client';

import { useEffect, useState } from 'react';
import { profile } from '@/lib/data';

const links = [
  { href: '#research', label: 'Research' },
  { href: '#projects', label: 'Projects' },
  { href: '#teaching', label: 'Teaching' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
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
              className="hidden font-mono text-xs uppercase tracking-widest text-detect hover:underline md:inline"
            >
              Scholar &rarr;
            </a>
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
              className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-sm border border-line transition-colors hover:border-detect md:hidden"
            >
              <span className="h-px w-4 bg-ink" />
              <span className="h-px w-4 bg-ink" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay + drawer */}
      <div
        aria-hidden={!open}
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-base/70 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className={`fixed inset-y-0 right-0 z-50 flex w-[min(84vw,320px)] flex-col border-l border-line bg-panel px-6 py-6 shadow-xl transition-transform duration-300 ease-out md:hidden ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between">
          <span className="font-display text-sm tracking-wide text-ink">S. M. SOVON</span>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="flex h-9 w-9 items-center justify-center rounded-sm border border-line text-ink transition-colors hover:border-detect hover:text-detect"
          >
            &times;
          </button>
        </div>

        <ul className="mt-10 flex flex-col gap-1 font-mono text-sm uppercase tracking-widest text-muted">
          {links.map((l) => (
            <li key={l.href} className="border-b border-line/40">
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-4 transition-colors hover:text-detect"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col gap-4 font-mono text-xs uppercase tracking-widest">
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="text-ink transition-colors hover:text-detect"
          >
            Download CV
          </a>
          <a
            href={profile.links.scholar}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="text-detect hover:underline"
          >
            Scholar &rarr;
          </a>
        </div>
      </div>
    </>
  );
}
