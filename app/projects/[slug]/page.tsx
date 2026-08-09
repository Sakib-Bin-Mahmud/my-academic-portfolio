import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { projects } from '@/lib/data';
import Nav from '@/components/Nav';
import Contact from '@/components/Contact';
import ArchitectureChart from '@/components/ArchitectureChart';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: `${project.title} \u2014 Sakib Mahmud Sovon`,
    description: project.summary,
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === params.slug);
  const next = projects[(currentIndex + 1) % projects.length];

  return (
    <main className="min-h-screen bg-base">
      <Nav />
      <article className="mx-auto max-w-3xl px-6 pb-24 pt-32 md:pt-40">
        <Link
          href="/#projects"
          className="font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-detect"
        >
          &larr; All Projects
        </Link>

        <p className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-detect">
          {project.category}
        </p>
        <h1 className="mt-3 font-display text-3xl font-medium text-ink sm:text-4xl">
          {project.title}
        </h1>
        <p className="mt-5 font-body text-lg leading-relaxed text-muted">{project.summary}</p>

        <div className="mt-8 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-sm border border-line bg-panel px-3 py-1 font-mono text-xs text-muted"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-10 border-t border-line/60 pt-10">
          <h2 className="mb-5 font-display text-xl font-medium text-ink">Details</h2>
          <ul className="flex flex-col gap-3">
            {project.details.map((d, i) => (
              <li key={i} className="flex gap-3 font-body text-base leading-relaxed text-ink/85">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-detect" />
                {d}
              </li>
            ))}
          </ul>
        </div>

        {project.slug === 'bdsl-translation' && (
          <div className="mt-10">
            <ArchitectureChart />
          </div>
        )}

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block rounded-sm bg-detect px-5 py-2.5 font-mono text-xs font-medium uppercase tracking-widest text-base transition-transform hover:-translate-y-0.5"
          >
            {project.linkLabel} &rarr;
          </a>
        )}

        <div className="mt-16 border-t border-line/60 pt-8">
          <p className="font-mono text-xs uppercase tracking-widest text-muted">Next</p>
          <Link
            href={`/projects/${next.slug}`}
            className="mt-2 inline-block font-display text-lg text-ink transition-colors hover:text-detect"
          >
            {next.title} &rarr;
          </Link>
        </div>
      </article>
      <Contact />
    </main>
  );
}
