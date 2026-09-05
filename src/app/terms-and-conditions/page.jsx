import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Container from '@/components/ui/Container';
import { getGlobalContent } from '@/lib/content';

export const revalidate = 3600;

const TITLE = 'Terms & Conditions | Madny Digital Services';
const DESCRIPTION = 'Terms and Conditions for products and services provided by Madny Digital Services Group Ltd.';
const BASE_URL = 'https://www.madnydigitalservices.com';

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${BASE_URL}/terms-and-conditions` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${BASE_URL}/terms-and-conditions`,
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

// 4 real topic groups — the flat 16-clause list actually falls into these
// natural categories, and readers looking something up think in these terms
// ("is this a money question or a data question?") more than a linear index.
const groups = [
  { id: 'work', name: 'Services & Work', accent: 'primary' },
  { id: 'devices', name: 'Devices & Data', accent: 'secondary' },
  { id: 'money', name: 'Money & Rights', accent: 'tertiary' },
  { id: 'basics', name: 'Legal Basics', accent: 'ink' },
];

const sections = [
  {
    id: 'services-authorization',
    group: 'work',
    title: 'Services & Authorization',
    body: [
      'Customers authorize Madny and its employees, technicians, and authorized service providers to inspect, diagnose, test, configure, disassemble, repair, upgrade, or otherwise service equipment as reasonably necessary for the requested work.',
      'Customers confirm that they own the equipment, account, website, software, or system submitted for service or have authority from the owner to authorize the work.',
    ],
  },
  {
    id: 'estimates-additional-work',
    group: 'work',
    title: 'Estimates & Additional Work',
    body: [
      'Quotes and completion times are estimates based on the information available at the time.',
      'Additional problems may be discovered during diagnosis, repair, or development. Where required, Madny will obtain customer authorization before performing additional chargeable work.',
      'Parts availability, technical complexity, third-party services, shipping, and customer requested changes may affect pricing and completion times.',
    ],
  },
  {
    id: 'hardware-software-services',
    group: 'work',
    title: 'Hardware & Software Services',
    body: [
      'Madny may install, configure, repair, replace, upgrade, or troubleshoot hardware, operating systems, software, drivers, and related technology.',
      'Customers are responsible for valid software licences.',
      'Madny cannot guarantee continued compatibility with future software updates, operating systems, third-party applications, networks, or hardware changes.',
    ],
  },
  {
    id: 'computer-systems-software-web-development',
    group: 'work',
    title: 'Computer Systems, Software & Web Development',
    body: [
      'Computer systems, custom software, websites, web applications, databases, and related digital solutions are provided according to the agreed project scope.',
      'Customers are responsible for providing accurate requirements, content, credentials, approvals, and feedback.',
      'Requests outside the agreed scope may result in additional charges and extended timelines.',
      'Madny cannot guarantee that software or websites will operate without interruption under every future device, browser, operating system, network, API, plugin, or third party platform.',
    ],
  },
  {
    id: 'seo-digital-marketing',
    group: 'work',
    title: 'SEO & Digital Marketing',
    body: [
      'SEO, Google Ads, PPC, digital marketing, and related services do not guarantee specific search rankings, traffic, leads, sales, revenue, advertising approval, or other business results.',
      "Search engines, advertising platforms, algorithms, competitors, and market conditions are outside Madny's control.",
    ],
  },
  {
    id: 'data-backup-recovery',
    group: 'devices',
    title: 'Data Backup & Data Recovery',
    quickAnswer: { question: 'Is my data guaranteed to come back?', answer: 'No. Back it up first.' },
    body: [
      'Customers are responsible for backing up important data before submitting equipment for service.',
      'Repair, diagnosis, upgrades, software work, storage failure, and data recovery may involve a risk of data loss or corruption.',
      'Data recovery cannot be guaranteed. Files may be incomplete, corrupted, or unrecoverable, and damaged storage devices may deteriorate during reasonable recovery attempts.',
      'To the maximum extent permitted by applicable law, Madny and its employees are not responsible for data loss resulting from pre-existing equipment or storage failure or risks inherent in authorized services.',
    ],
  },
  {
    id: 'device-repairs-pre-existing-damage',
    group: 'devices',
    title: 'Device Repairs & Pre-Existing Damage',
    body: [
      'Devices may contain hidden defects, previous damage, corrosion, liquid damage, damaged components, or previous repairs that are not visible during initial inspection.',
      'Madny is not responsible for pre-existing damage or failures not caused by Madny.',
      'Liquid-damaged, burnt, heavily impacted, corroded, or severely damaged devices may develop additional problems even after repair.',
    ],
  },
  {
    id: 'repair-warranty',
    group: 'devices',
    title: 'Repair Warranty',
    quickAnswer: { question: 'Do repairs come with a warranty?', answer: 'Yes. Scope and term are on your invoice.' },
    body: [
      'Warranty coverage, where provided, applies only to the specific repair or replacement part identified by Madny and for the warranty period stated on the applicable invoice, receipt, or work order.',
      'Unless required by law or expressly stated otherwise, warranty does not cover damage caused by accidents, physical damage, broken glass or displays, liquid exposure, misuse, electrical damage, malware, third-party repairs, customer modifications, normal wear and tear, or unrelated component failures.',
      'Certain services, including liquid-damage repair, data recovery, software troubleshooting, motherboard-level repair, and severely damaged devices, may have limited or no warranty where disclosed to the customer.',
    ],
  },
  {
    id: 'third-party-services',
    group: 'devices',
    title: 'Third-Party Services',
    body: [
      'Some services may depend on hosting providers, domain registrars, cloud services, APIs, plugins, payment processors, email providers, advertising platforms, software vendors, or other third parties.',
      'Madny is not responsible for independent outages, policy changes, price changes, suspensions, security incidents, or service discontinuation by third-party providers, except where liability cannot lawfully be excluded.',
      'Customers are responsible for applicable third-party subscriptions and renewal fees unless otherwise agreed.',
    ],
  },
  {
    id: 'privacy-confidentiality',
    group: 'devices',
    title: 'Privacy & Confidentiality',
    body: [
      'Madny will take reasonable measures to protect customer information and limit access to what is reasonably necessary to perform the requested service.',
      'Technicians may need temporary access to devices, files, accounts, passwords, or systems for diagnosis and service. Customers should remove unnecessary sensitive information and change temporary or shared passwords after service where appropriate.',
    ],
  },
  {
    id: 'payments-products-unclaimed-equipment',
    group: 'money',
    title: 'Payments, Products & Unclaimed Equipment',
    body: [
      'Customers are responsible for authorized charges, approved work, parts, products, third-party costs, and applicable taxes.',
      'Deposits or advance payments may be required for projects, special-order parts, software, domains, hosting, or other services.',
      'New, used, and refurbished products are subject to the warranty or return conditions provided at the time of sale and applicable consumer law.',
      'Customers must collect serviced equipment within a reasonable period after notification. Storage charges or other action concerning long-term unclaimed equipment will only be taken where permitted by applicable law.',
    ],
  },
  {
    id: 'limitation-of-liability',
    group: 'money',
    title: 'Limitation of Liability',
    body: [
      'To the maximum extent permitted by applicable law, Madny Digital Services Group Ltd., its directors, employees, technicians, contractors, and representatives will not be liable for indirect, incidental, special, punitive, or consequential losses, including lost profits, lost revenue, business interruption, or lost business opportunities arising from the services.',
      "Where liability may lawfully be limited, Madny's aggregate liability relating to a particular service will not exceed the amount paid by the customer for that specific service.",
      'Nothing in these Terms excludes or limits liability or consumer rights that cannot legally be excluded or limited.',
    ],
  },
  {
    id: 'client-content-intellectual-property',
    group: 'money',
    title: 'Client Content & Intellectual Property',
    body: [
      'Customers are responsible for ensuring they have the right to use content, images, logos, software, data, and other materials supplied to Madny.',
      'Madny retains ownership of its pre-existing code, tools, templates, processes, libraries, and technology. Ownership of custom project deliverables will be governed by the applicable project agreement and may be conditional upon full payment.',
    ],
  },
  {
    id: 'cancellation-project-changes',
    group: 'money',
    title: 'Cancellation & Project Changes',
    quickAnswer: { question: 'Can I cancel a project?', answer: 'Yes. Completed work and costs already committed are still owed.' },
    body: [
      'Customers remain responsible for authorized work already completed, specially ordered parts, approved expenses, and non-refundable third-party costs if a service or project is cancelled.',
      'Changes outside an approved project scope may require a revised quotation, additional payment, and additional completion time.',
    ],
  },
  {
    id: 'governing-law',
    group: 'basics',
    title: 'Governing Law',
    body: [
      'These Terms are governed by the laws of the Province of Alberta and applicable federal laws of Canada.',
      'Nothing in these Terms is intended to waive any consumer or other statutory right that cannot legally be waived.',
    ],
  },
  {
    id: 'acceptance',
    group: 'basics',
    title: 'Acceptance',
    body: [
      'By submitting equipment for service, purchasing products, approving a quotation or project, making a payment or deposit, or otherwise authorizing Madny to perform services, the customer acknowledges and accepts these Terms.',
    ],
  },
];

const quickAnswers = sections.filter((s) => s.quickAnswer);

export default async function TermsAndConditionsPage() {
  const global = await getGlobalContent();

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Terms & Conditions', item: `${BASE_URL}/terms-and-conditions` },
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
              Terms &amp; Conditions
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              How repairs, sales, and web &amp; software projects work between you and Madny Digital Services Group Ltd. Plain terms, organized so you can find the part that matters to you.
            </p>
          </div>

          {/* Quick answers — the signature element: real one-line answers to
              the 3 questions people actually search this page for, each
              jumping straight to its clause instead of making them read
              16 sections to find out. */}
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
