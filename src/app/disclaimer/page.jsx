import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Container from '@/components/ui/Container';
import { getGlobalContent } from '@/lib/content';

export const revalidate = 3600;

const TITLE = 'Disclaimer | Madny Digital Services';
const DESCRIPTION = 'Disclaimer covering website information, repairs, data recovery, and digital services provided by Madny Digital Services Group Ltd.';
const BASE_URL = 'https://www.madnydigitalservices.com';

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${BASE_URL}/disclaimer` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${BASE_URL}/disclaimer`,
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/og-image.png'],
  },
};

const EFFECTIVE_DATE = 'August 29, 2026';

// Same grouped pattern as Terms & Conditions / Privacy Policy — group by
// what the reader is actually asking, not document order.
const groups = [
  { id: 'general', name: 'What This Covers', accent: 'primary' },
  { id: 'repairs', name: 'Repairs & Data', accent: 'secondary' },
  { id: 'digital', name: 'Digital Services', accent: 'tertiary' },
  { id: 'basics', name: 'Legal Basics', accent: 'ink' },
];

const sections = [
  {
    id: 'service-information',
    group: 'general',
    title: 'Service Information',
    body: [
      'The information provided on this website is for general informational purposes only. Madny Digital Services Group Ltd. provides computer systems design, software development, web development, hardware and software services, data services, digital solutions, device sales, maintenance, diagnostics, and repair services.',
      'Madny Digital Services Group Ltd. makes reasonable efforts to keep information about services, products, pricing, availability, and promotions accurate. However, information may change without notice.',
      'Website content does not constitute a guaranteed quotation, warranty, or contractual commitment unless confirmed in writing by Madny Digital Services Group Ltd.',
    ],
  },
  {
    id: 'repairs-technical-services',
    group: 'repairs',
    title: 'Repairs & Technical Services',
    quickAnswer: { question: 'Will every issue be found before repair?', answer: 'Not always. Some damage is hidden until diagnosis.' },
    body: [
      'Electronic devices may contain hidden defects, previous damage, liquid damage, corrosion, failing components, or other conditions that cannot always be identified before diagnosis or repair.',
      'Repair results and completion times may vary depending on device condition, parts availability, technical complexity, and other circumstances.',
      'Customers are responsible for backing up important data before submitting equipment for service.',
    ],
  },
  {
    id: 'data-recovery',
    group: 'repairs',
    title: 'Data Recovery',
    quickAnswer: { question: 'Is data recovery guaranteed?', answer: 'No. Some files may be unrecoverable.' },
    body: [
      'Data recovery results cannot be guaranteed. Damaged or failing storage devices may contain files that are incomplete, corrupted, damaged, or permanently unrecoverable.',
      'To the maximum extent permitted by applicable law, Madny Digital Services Group Ltd., its employees, technicians, contractors, and representatives are not responsible for data loss resulting from pre-existing device or storage failure or risks inherent in authorized diagnostic, repair, backup, or recovery procedures.',
    ],
  },
  {
    id: 'software-websites-computer-systems',
    group: 'digital',
    title: 'Software, Websites & Computer Systems',
    body: [
      'Software, websites, web applications, databases, computer systems, and other technology solutions may depend on third-party software, hosting providers, APIs, operating systems, browsers, networks, plugins, cloud services, and other external technologies.',
      'Madny Digital Services Group Ltd. cannot guarantee uninterrupted operation or permanent compatibility with all current or future third-party technologies.',
    ],
  },
  {
    id: 'seo-digital-marketing',
    group: 'digital',
    title: 'SEO & Digital Marketing',
    quickAnswer: { question: 'Are marketing results guaranteed?', answer: 'No. Rankings and traffic are never guaranteed.' },
    body: [
      'SEO, Google Ads, PPC, digital marketing, and related services do not guarantee specific search rankings, website traffic, leads, sales, revenue, or other business results.',
    ],
  },
  {
    id: 'third-party-services',
    group: 'digital',
    title: 'Third-Party Services',
    body: [
      'Madny Digital Services Group Ltd. is not responsible for independent outages, changes, failures, pricing, policies, security incidents, or actions of third-party platforms and service providers, except where applicable law provides otherwise.',
    ],
  },
  {
    id: 'limitation-of-liability',
    group: 'basics',
    title: 'Limitation of Liability',
    body: [
      'To the maximum extent permitted by applicable law, Madny Digital Services Group Ltd., its directors, officers, employees, technicians, contractors, and representatives will not be liable for indirect, incidental, special, punitive, or consequential losses arising from the use of this website or the services provided.',
      'Nothing in this Disclaimer excludes or limits any rights or liability that cannot legally be excluded or limited under applicable Alberta or Canadian law.',
      'For complete service conditions, please review the Terms & Conditions or contact Madny Digital Services Group Ltd.',
    ],
  },
];

const quickAnswers = sections.filter((s) => s.quickAnswer);

export default async function DisclaimerPage() {
  const global = await getGlobalContent();

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Disclaimer', item: `${BASE_URL}/disclaimer` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Header data={global?.header} />
      <main className="min-h-screen bg-background" style={{ paddingTop: '8rem', paddingBottom: '6rem' }}>
        <Container size="lg">
          {/* Header block — left-aligned editorial, no faux letterhead */}
          <div className="mb-10">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
              Updated {EFFECTIVE_DATE}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-foreground leading-[1.05] mb-5">
              Disclaimer
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              What to know about the information on this website and the limits of our repair, data, and digital services.
            </p>
          </div>

          {/* Quick answers — same signature pattern as Terms & Conditions
              and Privacy Policy: real one-line answers to what people
              actually worry about, each jumping straight to its clause. */}
          <div className="grid sm:grid-cols-3 gap-3 mb-16">
            {quickAnswers.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="terms-quick-card group flex flex-col gap-2 p-5 rounded-2xl border border-border bg-card"
              >
                <span className="text-xs font-semibold text-muted-foreground leading-snug">
                  {section.quickAnswer.question}
                </span>
                <span className="text-[15px] font-bold text-foreground leading-snug">
                  {section.quickAnswer.answer}
                </span>
                <span className="terms-quick-arrow mt-1 inline-flex items-center gap-1 text-xs font-semibold text-primary">
                  Read the clause
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
            ))}
          </div>

          {/* Sectioned clause cards, grouped by topic */}
          <div>
            {groups.map((group) => {
              const groupSections = sections.filter((s) => s.group === group.id);
              return (
                <div key={group.id} className="mb-14 last:mb-0">
                  <h2 className={`terms-group-label terms-group-label--${group.accent} text-xs font-black uppercase tracking-[0.2em] mb-5`}>
                    {group.name}
                  </h2>
                  <div className="space-y-5">
                    {groupSections.map((section) => (
                      <section
                        key={section.id}
                        id={section.id}
                        className={`terms-card terms-card--${group.accent} scroll-mt-28 rounded-2xl border border-border bg-card p-6 md:p-8`}
                      >
                        <h3 className="text-xl md:text-2xl font-black text-foreground tracking-tight mb-5">
                          {section.title}
                        </h3>
                        <ul className="space-y-4">
                          {section.body.map((paragraph, j) => (
                            <li key={j} className="flex gap-3.5">
                              <span className={`terms-point-dot terms-point-dot--${group.accent} mt-[9px] w-2 h-2 rounded-full shrink-0`} aria-hidden="true" />
                              <p className="text-[15px] text-foreground/75 leading-[1.75]">{paragraph}</p>
                            </li>
                          ))}
                        </ul>
                      </section>
                    ))}
                  </div>
                </div>
              );
            })}

            {/* Closing */}
            <div className="mt-14 rounded-2xl bg-gradient-primary p-8 md:p-10">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white/70 mb-4">
                Registered Address
              </p>
              <p className="text-2xl md:text-3xl font-black text-white tracking-tight mb-3">
                Madny Digital Services Group Ltd.
              </p>
              <p className="text-white/90 text-base leading-relaxed">
                55 Westwinds Crescent NE, Unit 216<br />
                Calgary, Alberta T3J 5H2, Canada<br />
                Phone: (403) 708-8214
              </p>
            </div>
          </div>
        </Container>
      </main>
      <Footer data={global?.footer} />
    </>
  );
}
