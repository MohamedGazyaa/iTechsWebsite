import { notFound } from 'next/navigation';

// Matches any otherwise-unmatched path inside the locale segment (e.g.
// /en/ayhaga, /ar/foo/bar) and immediately reports not-found, so the nearest
// boundary — the localized app/[locale]/not-found.jsx — renders instead of the
// bare root fallback.
export default function CatchAll() {
  notFound();
}
