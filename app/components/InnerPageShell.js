import Link from "next/link";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

/** Navy hero band shared across inner pages */
export function PageHeader({ eyebrow, title, breadcrumbs, lead }) {
  return (
    <section className="bg-navy py-12 text-white md:py-16">
      <div className="container mx-auto w-[90%] max-w-6xl">
        {eyebrow ? (
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-gold">{eyebrow}</p>
        ) : null}
        {breadcrumbs ? (
          <nav aria-label="Breadcrumb" className="mt-2 text-sm text-white/70">
            {breadcrumbs}
          </nav>
        ) : null}
        <h1 className="mt-2 text-3xl font-bold md:text-4xl">{title}</h1>
        {lead ? <p className="mt-4 max-w-3xl text-lg leading-relaxed text-white/85">{lead}</p> : null}
      </div>
    </section>
  );
}

/** Breadcrumb link styled for navy hero backgrounds */
export function CrumbLink({ href, children }) {
  return (
    <Link href={href} className="text-gold transition-colors hover:text-white">
      {children}
    </Link>
  );
}

export default function InnerPageShell({ eyebrow, title, breadcrumbs, lead, children }) {
  return (
    <>
      <SiteHeader variant="inner" />
      <main id="main">
        <PageHeader eyebrow={eyebrow} title={title} breadcrumbs={breadcrumbs} lead={lead} />
        <div className="bg-soft-gray py-12 md:py-16">
          <div className="container mx-auto w-[90%] max-w-6xl inner-page-content">{children}</div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
