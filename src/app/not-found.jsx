import Link from 'next/link';

const buttonStyle = {
  borderRadius: '9999px',
  backgroundColor: '#143980',
  color: '#ffffff',
  padding: '0.75rem 2rem',
  fontSize: '0.875rem',
  fontWeight: 600,
  textDecoration: 'none',
};

// Structural root fallback rendered only when the [locale] segment itself never
// resolves — an unsupported locale code (e.g. /fr/about) or a prefix middleware
// didn't rewrite. It renders OUTSIDE the locale layout, so it owns its
// <html>/<body>, pulls in no next-intl context, and hardcodes bilingual text.
// Not locale-aware by design (lang="en"/dir="ltr"): since we can't know the
// intended locale, it offers one entry-point button per supported locale.
// Styling is inline so it doesn't depend on the Tailwind theme being available.
// Link comes from next/link (plain Next.js, not next-intl) to satisfy routing.
export default function NotFound() {
  return (
    <html lang="en" dir="ltr">
      <body
        style={{
          margin: 0,
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.75rem',
          padding: '2rem',
          textAlign: 'center',
          backgroundColor: '#EAF6F7',
          color: '#143980',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <h1 style={{ fontSize: '1.75rem', fontWeight: 700, margin: 0 }}>
          Page not found
        </h1>
        <p style={{ margin: 0, opacity: 0.7 }}>
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <p dir="rtl" style={{ margin: 0, opacity: 0.7 }}>
          الصفحة التي تبحث عنها غير موجودة أو تم نقلها.
        </p>
        <div
          style={{
            marginTop: '0.75rem',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            justifyContent: 'center',
          }}
        >
          <Link href="/en" style={buttonStyle}>
            Go to homepage (English)
          </Link>
          <Link href="/ar" dir="rtl" style={buttonStyle}>
            الذهاب للصفحة الرئيسية (عربي)
          </Link>
        </div>
      </body>
    </html>
  );
}
