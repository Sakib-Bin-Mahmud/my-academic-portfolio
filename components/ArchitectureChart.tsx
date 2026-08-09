import { architectureComparison } from '@/lib/data';

export default function ArchitectureChart() {
  const maxAcc = 100;

  return (
    <div className="rounded-sm border border-line bg-panel p-6 sm:p-8">
      <p className="font-mono text-xs uppercase tracking-widest text-muted">
        Test Accuracy on BdSL49 &middot; six architectures benchmarked
      </p>
      <div className="mt-6 flex flex-col gap-4">
        {architectureComparison.map((a) => (
          <div key={a.model}>
            <div className="mb-1.5 flex items-baseline justify-between gap-4">
              <span
                className={`font-body text-sm ${a.isProposed ? 'font-semibold text-detect' : 'text-ink/85'}`}
              >
                {a.model}
              </span>
              <span
                className={`shrink-0 font-mono text-xs ${a.isProposed ? 'text-detect' : 'text-muted'}`}
              >
                {a.testAcc}% &middot; {a.modelSizeMb}MB
              </span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-base">
              <div
                className={`h-full rounded-full ${a.isProposed ? 'bg-detect' : 'bg-line'}`}
                style={{ width: `${(a.testAcc / maxAcc) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      <p className="mt-6 font-body text-xs leading-relaxed text-muted">
        The proposed model leads on accuracy while staying near the smallest footprint in the
        comparison (17.55MB) &mdash; only the custom CNN baseline is smaller, at roughly 18
        points lower accuracy. Source: IEEE COMPAS 2025.
      </p>
    </div>
  );
}
