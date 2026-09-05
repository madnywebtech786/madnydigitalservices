import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Container from '@/components/ui/Container';
import { getGlobalContent } from '@/lib/content';

export const revalidate = 3600;

const TITLE = 'Privacy Policy | Madny Digital Services';
const DESCRIPTION = 'How Madny Digital Services Group Ltd. collects, uses, protects, and discloses personal information.';
const BASE_URL = 'https://www.madnydigitalservices.com';

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${BASE_URL}/privacy-policy` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${BASE_URL}/privacy-policy`,
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

// 4 real topic groups — mirrors the Terms & Conditions page's pattern:
// group by what the reader is actually asking, not document order.
const groups = [
  { id: 'collect', name: 'What We Collect', accent: 'primary' },
  { id: 'use', name: 'How We Use It', accent: 'secondary' },
  { id: 'control', name: 'Your Control & Rights', accent: 'tertiary' },
  { id: 'basics', name: 'Legal & Updates', accent: 'ink' },
];

const sections = [
  {
    id: 'information-we-collect',
    group: 'collect',
    title: 'Information We May Collect',
    body: [
      'Depending on how customers interact with Madny Digital Services Group Ltd., information collected may include name and contact information, phone number and email address, and business or company information.',
      'Billing and transaction information, service requests and communications, device and repair information, and website, software, or project requirements may also be collected.',
      'Technical information necessary to provide services, plus website usage and analytics information, may be collected as well.',
      'Where necessary to provide an authorized service, customers may also provide device passwords, account credentials, system access, files, databases, or other technical information.',
    ],
  },
  {
    id: 'device-data-access',
    group: 'collect',
    title: 'Device & Data Access',
    quickAnswer: { question: 'Can you access my device or files?', answer: 'Only what a requested service actually needs.' },
    body: [
      "Some computer, repair, software, backup, data recovery, or technical services may require access to a customer's device, operating system, files, accounts, databases, or other information.",
      'Employees, technicians, and authorized personnel of Madny Digital Services Group Ltd. will limit such access to what is reasonably necessary to perform the requested service and for legitimate security, administrative, or legal purposes.',
      'Customers are encouraged to remove unnecessary sensitive information and sign out of accounts that are not required for service where reasonably possible.',
    ],
  },
  {
    id: 'passwords-credentials',
    group: 'collect',
    title: 'Passwords & Credentials',
    body: [
      'Where passwords, administrator access, or account credentials are required to perform a service, they will be used only for authorized purposes.',
      'Customers are encouraged to use temporary passwords where practical and change passwords provided to Madny Digital Services Group Ltd. after completion of the service.',
    ],
  },
  {
    id: 'how-we-use-information',
    group: 'use',
    title: 'How We Use Information',
    body: [
      'Madny Digital Services Group Ltd. may use personal information to provide requested products and services, communicate with customers, and prepare quotations and invoices.',
      'Information may be used to diagnose and repair devices, provide computer systems and technical support, develop software, websites, and digital solutions, and provide data backup or recovery services.',
      'Information may also be used to process transactions, maintain and improve services, protect systems and prevent misuse, and meet applicable legal, accounting, regulatory, and business requirements.',
      'Personal information will not be used for unrelated purposes except with consent or where otherwise permitted or required by law.',
    ],
  },
  {
    id: 'sharing-of-information',
    group: 'use',
    title: 'Sharing of Information',
    quickAnswer: { question: 'Do you sell my personal information?', answer: 'No. Madny does not sell customer data.' },
    body: [
      'Madny Digital Services Group Ltd. does not sell customer personal information.',
      'Information may be shared with employees, authorized contractors, technology providers, hosting providers, payment providers, software platforms, or other service providers where reasonably necessary to provide services or operate the business.',
      'Information may also be disclosed where required or permitted by applicable law.',
    ],
  },
  {
    id: 'website-analytics-cookies',
    group: 'use',
    title: 'Website Analytics & Cookies',
    body: [
      'The Madny Digital Services Group Ltd. website may use cookies, analytics tools, and similar technologies to understand website usage, improve website performance, measure marketing effectiveness, and improve customer experience.',
      'Third-party services used on the website may collect information according to their own privacy policies.',
      'Where required by applicable law, appropriate consent choices will be provided for applicable cookies or tracking technologies.',
    ],
  },
  {
    id: 'third-party-websites-services',
    group: 'use',
    title: 'Third-Party Websites & Services',
    body: [
      'The website or services of Madny Digital Services Group Ltd. may contain links to or integrate with third-party websites, software, payment systems, hosting platforms, social media services, cloud services, or other providers.',
      "Madny Digital Services Group Ltd. is not responsible for the independent privacy practices of third-party organizations. Customers should review the applicable third party's privacy policy before providing personal information.",
    ],
  },
  {
    id: 'data-security',
    group: 'control',
    title: 'Data Security',
    quickAnswer: { question: 'How is my data protected?', answer: 'Reasonable safeguards, but no system is 100% secure.' },
    body: [
      'Madny Digital Services Group Ltd. uses reasonable administrative, technical, and physical safeguards appropriate to the nature of the information being handled.',
      'However, no electronic system, network, website, email service, cloud platform, storage system, or method of electronic transmission can be guaranteed to be completely secure.',
    ],
  },
  {
    id: 'data-retention',
    group: 'control',
    title: 'Data Retention',
    body: [
      'Personal information will generally be retained only for as long as reasonably necessary for the purposes for which it was collected and to satisfy applicable business, accounting, warranty, security, legal, or regulatory requirements.',
      'Information that is no longer reasonably required will be securely deleted, destroyed, or anonymized where appropriate and subject to applicable law.',
    ],
  },
  {
    id: 'access-privacy-requests',
    group: 'control',
    title: 'Access & Privacy Requests',
    body: [
      'Subject to applicable law, individuals may contact Madny Digital Services Group Ltd. to ask about their personal information or request access, correction, or other applicable privacy rights.',
      'Madny Digital Services Group Ltd. may need to verify the identity of the person making a request before providing access to or modifying personal information.',
    ],
  },
  {
    id: 'changes-to-this-policy',
    group: 'basics',
    title: 'Changes to This Privacy Policy',
    body: [
      'Madny Digital Services Group Ltd. may update this Privacy Policy from time to time to reflect changes in services, technology, business practices, or applicable legal requirements.',
    ],
  },
  {
    id: 'contact-us',
    group: 'basics',
    title: 'Contact Us',
    body: [
      'For questions, requests, or concerns regarding this Privacy Policy or the handling of personal information, please contact Madny Digital Services Group Ltd. at 55 Westwinds Crescent NE, Unit 216, Calgary, Alberta T3J 5H2, Canada, or by phone at (403) 708-8214.',
    ],
  },
];

const quickAnswers = sections.filter((s) => s.quickAnswer);

export default async function PrivacyPolicyPage() {
  const global = await getGlobalContent();

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Privacy Policy', item: `${BASE_URL}/privacy-policy` },
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
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              How Madny Digital Services Group Ltd. collects, uses, protects, and discloses personal information across our services, website, and projects.
            </p>
          </div>

          {/* Quick answers — same signature pattern as Terms & Conditions:
              real one-line answers to what people actually worry about,
              each jumping straight to its clause. */}
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
