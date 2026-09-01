// Dedicated /faqs page content. Sourced verbatim from FAQs.txt (client-
// provided), grouped by topic for scannability. Replaces the earlier
// pricing/AEO-focused question set — see docs/superpowers/specs/2026-08-10-faqs-page-design.md
// for the original design rationale, still followed structurally (grouping,
// search, accordion), just with new content.

export const faqGroups = [
  {
    id: 'computer-systems-it',
    name: 'Computer Systems & IT Services',
    questions: [
      {
        question: 'What computer and IT services does Madny Digital Services provide?',
        answer: 'Madny Digital Services provides computer systems design, hardware and software solutions, system configuration, upgrades, optimization, technical support, data backup and recovery, and related computer services for businesses and individuals.',
      },
      {
        question: 'Can you help businesses with computer systems and IT solutions?',
        answer: 'Yes. We work with businesses to understand their technology requirements and provide practical computer systems, hardware, software, database, and technical solutions.',
      },
      {
        question: 'Do you install and upgrade computer hardware?',
        answer: 'Yes. We provide computer hardware installation and upgrades, including RAM, HDDs, SSDs, batteries, and other compatible components.',
      },
      {
        question: 'Do you provide software installation and troubleshooting?',
        answer: 'Yes. Madny Digital Services provides software installation, configuration, troubleshooting, operating system support, updates, and other technical assistance.',
      },
      {
        question: 'Do you provide data backup and recovery?',
        answer: 'Yes. We provide data backup and recovery services for supported computers and storage devices. Recovery depends on the condition of the device or storage media, so successful recovery cannot be guaranteed.',
      },
    ],
  },
  {
    id: 'software-development',
    name: 'Software Development',
    questions: [
      {
        question: 'Does Madny Digital Services develop custom software?',
        answer: 'Yes. We develop custom software solutions tailored to specific business requirements, workflows, processes, and operational needs.',
      },
      {
        question: 'Do you develop custom web applications?',
        answer: 'Yes. Madny Digital Services designs and develops custom web applications with a focus on functionality, usability, performance, and scalability.',
      },
      {
        question: 'Can you develop database solutions for businesses?',
        answer: 'Yes. We provide database development and integration solutions designed to help businesses organize, manage, and access information efficiently.',
      },
      {
        question: 'Can you improve or maintain existing software?',
        answer: 'Yes. Depending on the technology and existing system, we can provide software testing, troubleshooting, maintenance, modifications, enhancements, and ongoing technical support.',
      },
      {
        question: 'How much does custom software development cost?',
        answer: "The cost depends on the project's features, complexity, integrations, development requirements, and timeline. Contact Madny Digital Services for a consultation and customized quotation.",
      },
      {
        question: 'Do you provide ongoing software maintenance?',
        answer: 'Yes. We can provide ongoing software maintenance, updates, troubleshooting, enhancements, and technical support based on your project requirements.',
      },
    ],
  },
  {
    id: 'web-development',
    name: 'Web Development & Digital Solutions',
    questions: [
      {
        question: 'Does Madny Digital Services build professional websites?',
        answer: 'Yes. We design and develop professional business websites, e-commerce stores, custom web portals, web applications, and other digital solutions.',
      },
      {
        question: 'Do you build e-commerce websites?',
        answer: 'Yes. We develop e-commerce solutions with features such as product management, online ordering, payment integrations, customer functionality, and other features based on your business requirements.',
      },
      {
        question: 'Can you redesign my existing website?',
        answer: 'Yes. We can modernize existing websites, improve design and structure, enhance mobile responsiveness, improve user experience, and add new functionality.',
      },
      {
        question: 'Will my website be mobile-friendly?',
        answer: 'Yes. Our modern websites are developed using responsive design principles to provide a professional user experience across supported desktops, tablets, and mobile devices.',
      },
      {
        question: 'Do you provide website maintenance?',
        answer: 'Yes. Madny Digital Services provides website maintenance, content updates, troubleshooting, enhancements, security-related updates, and ongoing technical support.',
      },
      {
        question: 'Do you provide SEO services?',
        answer: 'Yes. We provide SEO services designed to improve website structure, content, technical performance, and search visibility. Search-engine rankings depend on many external factors, so specific positions cannot be guaranteed.',
      },
      {
        question: 'Do you provide Google Ads and digital marketing?',
        answer: 'Yes. Our digital services include Google Ads/PPC and digital marketing solutions designed to strengthen your online presence, reach potential customers, and support business growth.',
      },
    ],
  },
  {
    id: 'computer-repair',
    name: 'Computer Sales, Service & Repair',
    questions: [
      {
        question: 'Do you sell computers and laptops?',
        answer: 'Yes. Madny Digital Services offers new and refurbished computers and laptops, subject to current inventory and availability.',
      },
      {
        question: 'What computer repair services do you provide?',
        answer: 'We provide laptop and desktop diagnostics and repairs, including screen, keyboard, battery, charging port, RAM, HDD, SSD, motherboard-related issues, liquid damage assessment, software troubleshooting, and system upgrades.',
      },
      {
        question: 'Can you upgrade my existing computer?',
        answer: "Yes. Depending on your computer's compatibility, we can upgrade components such as RAM and storage and recommend other improvements to enhance system performance.",
      },
      {
        question: "Can you repair a computer that won't turn on?",
        answer: 'Yes. Our technicians can diagnose supported computers to determine whether the issue is related to the power system, battery, charging port, RAM, storage, motherboard, software, or another component.',
      },
      {
        question: 'Do you repair laptop screens and keyboards?',
        answer: 'Yes. Madny Digital Services provides laptop screen and keyboard replacement services for supported makes and models.',
      },
      {
        question: 'Can you replace an HDD with an SSD?',
        answer: 'Yes. We can upgrade compatible computers from traditional HDD storage to SSD storage, which can significantly improve startup times and overall system responsiveness.',
      },
      {
        question: 'Is my data guaranteed to remain safe during repair?',
        answer: 'Customers should back up important information before submitting a device for service. Although reasonable care is taken when handling equipment and data, diagnostic and repair procedures can involve data-loss risks, especially when hardware or storage devices are already damaged.',
      },
    ],
  },
  {
    id: 'cell-phone-repair',
    name: 'Cellphone Sales & Repair',
    questions: [
      {
        question: 'What cellphone repair services do you provide?',
        answer: 'Madny Digital Services provides screen replacement, battery replacement, charging port repair, camera repair, microphone and speaker services, back-glass replacement, liquid-damage assessment, cleaning, testing, and other repairs for supported devices.',
      },
      {
        question: 'Do you provide cellphone unlocking?',
        answer: 'Yes. Cellphone unlocking is available for supported devices and networks. Contact us with your device information to confirm availability.',
      },
      {
        question: 'Do you sell new and refurbished cellphones?',
        answer: 'Yes. We offer new and refurbished mobile devices depending on current inventory and availability.',
      },
      {
        question: 'Can you replace a broken cellphone screen?',
        answer: 'Yes. We provide screen replacement for many supported cellphone makes and models. Contact us with your phone model for availability and pricing.',
      },
      {
        question: 'Can you repair a liquid-damaged cellphone?',
        answer: 'We can inspect and assess liquid-damaged devices to determine whether repair is possible. Because liquid damage can affect multiple internal components and may cause future problems, successful or permanent repair cannot be guaranteed.',
      },
      {
        question: 'Do your cellphone repairs come with a warranty?',
        answer: 'Warranty coverage depends on the repair, replacement part, and type of damage. Any applicable warranty information will be provided with the service. Certain repairs, including liquid-damaged or severely damaged devices, may have limited or no warranty.',
      },
    ],
  },
  {
    id: 'pricing-projects-support',
    name: 'Pricing, Projects & Support',
    questions: [
      {
        question: 'How much do your services cost?',
        answer: 'Pricing depends on the type of service, project requirements, parts, complexity, and work involved. Contact Madny Digital Services with your requirements for a customized quotation.',
      },
      {
        question: 'How long does a software or website project take?',
        answer: 'Project timelines depend on the scope, features, integrations, content requirements, approvals, and overall complexity. We provide an estimated timeline after reviewing your project requirements.',
      },
      {
        question: 'Can I request changes during a software or website project?',
        answer: 'Yes. Changes can be discussed throughout the project. Requests outside the originally agreed scope may require additional development time and charges.',
      },
      {
        question: 'Do you provide ongoing technical support?',
        answer: 'Yes. Madny Digital Services provides technical support, troubleshooting, maintenance, and ongoing technology services depending on your requirements and service agreement.',
      },
      {
        question: 'Do you work with both individuals and businesses?',
        answer: 'Yes. We provide technology solutions for individuals, small businesses, organizations, and other clients based on their specific requirements.',
      },
      {
        question: 'What areas does Madny Digital Services serve?',
        answer: 'We are based in Calgary and serve customers and businesses throughout Calgary and nearby areas.',
      },
      {
        question: 'Why choose Madny Digital Services?',
        answer: 'Madny Digital Services brings computer systems, software development, web development, digital solutions, hardware and software services, device sales, technical support, and professional repair services together under one roof.',
      },
      {
        question: 'How can I get started?',
        answer: 'Contact our team to discuss your technology needs, request a quotation, arrange a repair or technical service, or schedule a consultation.',
      },
    ],
  },
];

export const allFaqs = faqGroups.flatMap((group) => group.questions);
