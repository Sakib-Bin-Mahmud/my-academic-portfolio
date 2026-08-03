'use client';

import { profile } from '@/lib/data';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="pointer-events-none absolute inset-0 bg-grid bg-gridpattern opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_20%,transparent_75%)]" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-5">
        <div className="md:col-span-3">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-detect">
            Computer Vision &middot; Multimodal AI &middot; Accessibility
          </p>
          <h1 className="font-display text-4xl font-medium leading-[1.05] text-ink sm:text-5xl md:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-6 max-w-xl font-body text-lg leading-relaxed text-muted">
            Building efficient computer vision and multimodal AI systems for accessibility
            and low-resource language applications &mdash; starting with a real-time Bengali
            Sign Language translation system reaching 99.56% accuracy.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {profile.researchInterests.map((tag) => (
              <span
                key={tag}
                className="rounded-sm border border-line bg-panel px-3 py-1 font-mono text-xs text-muted"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a
              href="#research"
              className="rounded-sm bg-detect px-5 py-2.5 font-mono text-xs font-medium uppercase tracking-widest text-base transition-transform hover:-translate-y-0.5"
            >
              View Research
            </a>
            <a
              href="#contact"
              className="font-mono text-xs uppercase tracking-widest text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-detect"
            >
              Get in touch
            </a>
          </div>
        </div>

        <div className="md:col-span-2">
          <DetectionVisual />
        </div>
      </div>
    </section>
  );
}

function DetectionVisual() {
  return (
    <div className="relative mx-auto aspect-square max-w-sm rounded-md border border-line bg-panel p-6">
      <div className="absolute left-3 top-3 font-mono text-[10px] uppercase tracking-widest text-muted">
        frame_0421.mp4
      </div>
      <div className="absolute right-3 top-3 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-detect">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-detect" />
        live
      </div>

      <svg viewBox="0 0 200 200" className="mt-4 h-full w-full" fill="none">
        {/* stylized open-palm hand silhouette */}
        <g transform="translate(100,102)">
          <path
            d="M -6,40 
               C -22,40 -34,26 -34,8 
               L -34,-6
               C -34,-11 -30,-15 -25,-15
               C -20,-15 -16,-11 -16,-6
               L -16,-30
               C -16,-35 -12,-39 -7,-39
               C -2,-39 2,-35 2,-30
               L 2,-34
               C 2,-39 6,-43 11,-43
               C 16,-43 20,-39 20,-34
               L 20,-30
               C 20,-35 24,-39 29,-39
               C 34,-39 38,-35 38,-30
               L 38,4
               C 38,24 24,40 6,40
               Z"
            fill="#1C2740"
            stroke="#8B93A7"
            strokeWidth="1.5"
          />
        </g>

        {/* animated bounding box */}
        <g className="animate-[draw_2.4s_ease-in-out_infinite]">
          <rect
            x="52"
            y="46"
            width="96"
            height="112"
            fill="none"
            stroke="#5EEAD4"
            strokeWidth="1.5"
            strokeDasharray="4 3"
            opacity="0.8"
          />
          {/* corner brackets */}
          {[
            [52, 46, 1, 1],
            [148, 46, -1, 1],
            [52, 158, 1, -1],
            [148, 158, -1, -1],
          ].map(([x, y, dx, dy], i) => (
            <path
              key={i}
              d={`M ${x} ${y + 10 * (dy as number)} L ${x} ${y} L ${x + 10 * (dx as number)} ${y}`}
              stroke="#5EEAD4"
              strokeWidth="2.5"
              fill="none"
            />
          ))}
        </g>
      </svg>

      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-sm border border-detectDim bg-base/80 px-3 py-2 font-mono text-[11px] text-detect">
        <span>BdSL_GESTURE</span>
        <span>99.56%</span>
      </div>
    </div>
  );
}
