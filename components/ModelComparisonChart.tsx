import { neuroponicModelComparison } from '@/lib/data';

const models = ['GPT', 'Gemini', 'Grok'] as const;

export default function ModelComparisonChart() {
  const maxScore = 100;

  return (
    <div className="rounded-sm border border-line bg-panel p-6 sm:p-8">
      <p className="font-mono text-xs uppercase tracking-widest text-muted">
        Overall Decision-Quality Score &middot; English vs. Bangla, three LLMs evaluated
      </p>
      <div className="mt-6 flex flex-col gap-6">
        {models.map((model) => {
          const rows = neuroponicModelComparison.filter((r) => r.model === model);
          return (
            <div key={model}>
              <p className="mb-2 font-body text-sm font-semibold text-ink/85">{model}</p>
              <div className="flex flex-col gap-2">
                {rows.map((r) => (
                  <div key={r.language}>
                    <div className="mb-1 flex items-baseline justify-between gap-4">
                      <span
                        className={`font-mono text-xs ${r.language === 'Bangla' ? 'text-detect' : 'text-muted'}`}
                      >
                        {r.language}
                      </span>
                      <span
                        className={`shrink-0 font-mono text-xs ${r.language === 'Bangla' ? 'text-detect' : 'text-muted'}`}
                      >
                        {r.overall.toFixed(2)}%
                      </span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-base">
                      <div
                        className={`h-full rounded-full ${r.language === 'Bangla' ? 'bg-detect' : 'bg-line'}`}
                        style={{ width: `${(r.overall / maxScore) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <p className="mt-6 font-body text-xs leading-relaxed text-muted">
        GPT holds the smallest English-to-Bangla gap (92.05% &rarr; 91.67%); Gemini and Grok
        degrade more sharply on Bangla, voice-transcribed-style queries (85.00% &rarr; 82.58%
        and 80.08% &rarr; 77.78%). Source: NeuroPonic, ICSASD 2026.
      </p>
    </div>
  );
}
