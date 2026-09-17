import type { Publication } from './data';

// Publication.authors is a prose string ("A, B, and C"); BibTeX wants
// " and "-joined names. Order matters: collapse the Oxford comma first,
// then every remaining comma is a plain separator.
function toBibtexAuthors(authors: string): string {
  return authors.replace(/,\s*and\s+/g, ' and ').replace(/,\s*/g, ' and ');
}

export function toBibtex(pub: Publication): string {
  const fields = [
    `  author    = {${toBibtexAuthors(pub.authors)}}`,
    `  title     = {${pub.title}}`,
    `  booktitle = {${pub.venue}}`,
    `  year      = {${pub.year}}`,
  ];
  if (pub.doi) fields.push(`  doi       = {${pub.doi}}`);

  return `@inproceedings{${pub.citeKey},\n${fields.join(',\n')}\n}`;
}
