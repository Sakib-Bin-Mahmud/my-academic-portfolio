'use client';

import { useState } from 'react';
import type { Publication } from '@/lib/data';
import { toBibtex } from '@/lib/bibtex';

export default function CopyBibtex({ publication }: { publication: Publication }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(toBibtex(publication));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable (e.g. insecure context) — fail silently,
      // the DOI/paper links remain a working fallback.
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="font-mono text-xs text-detect hover:underline"
    >
      {copied ? 'Copied!' : 'Copy BibTeX'}
    </button>
  );
}
