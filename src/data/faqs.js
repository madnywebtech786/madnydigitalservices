// Dedicated /faqs page content. Written as real visitor search queries and
// voice/AI-assistant phrasings (AEO/GEO), grouped by topic for scannability.
// Every factual claim here (price, warranty, hours, certification, service
// area) traces back to src/data/services.js or src/scripts/seed.js — no
// invented numbers. New question angles not already covered elsewhere on
// the site — see docs/superpowers/specs/2026-08-10-faqs-page-design.md.

export const faqGroups = [
  {
    id: 'general',
    name: 'General & Getting Started',
    questions: [
      {
        question: 'How do I get a quote from Madny Digital Services?',
        answer: 'Contact us through the website contact form, by phone, or by visiting our Calgary location. Computer and phone repairs start with a free diagnostic assessment, and software or web development projects start with a free consultation, so you always know the cost before any work begins.',
      },
      {
        question: 'What areas does Madny Digital Services serve?',
        answer: 'Our shop is based in Calgary, and we regularly serve customers and businesses across the NE, NW, SE, and SW quadrants, as well as nearby Airdrie and Cochrane, for repairs, device sales, and web or software development projects.',
      },
      {
        question: 'What are your hours?',
        answer: 'We are open Monday to Saturday from 11am to 7pm, and Sunday from 12pm to 5pm.',
      },
      {
        question: 'Do I need an appointment for a repair?',
        answer: 'Walk-ins are welcome for most computer and phone repairs. If you want to guarantee a specific time or you have a larger job, contacting us ahead lets us prepare for your device and give you a more accurate timeline.',
      },
      {
        question: 'How do I know if a repair shop is trustworthy?',
        answer: 'Look for certified technicians, a clear warranty on the work, transparent pricing before repairs start, and a physical location you can visit. Our technicians hold CompTIA A+ and Apple certifications, every repair includes a 90 day warranty on parts and labor, and diagnostics are free so you get a real quote before agreeing to anything.',
      },
      {
        question: 'Is Madny Digital Services good for both personal and business needs?',
        answer: 'Yes. We work with individual residents, remote workers, and small to medium Calgary businesses, covering everything from a single cracked phone screen to a full company website or custom business software.',
      },
    ],
  },
  {
    id: 'computer-repair',
    name: 'Computer Repair',
    questions: [
      {
        question: 'Can you fix a laptop that will not turn on?',
        answer: 'In most cases, yes. A laptop that will not power on can be caused by a failed battery, charging port, motherboard issue, or RAM problem. Our free diagnostic assessment identifies the actual cause before we quote a hardware repair, so you know exactly what is wrong and what it costs to fix.',
      },
      {
        question: 'Do you repair gaming PCs and custom-built desktops?',
        answer: 'Yes. Our CompTIA A+ certified technicians work on all PC and Mac brands, including custom-built and gaming desktops, for hardware repair, RAM and SSD upgrades, and full diagnostics.',
      },
      {
        question: 'What is the difference between a diagnostic and a repair?',
        answer: 'A diagnostic is the free assessment where we identify what is actually wrong with your device. A repair is the fix itself, quoted separately after the diagnostic, such as virus removal starting at $79 or hardware repair starting at $99, so you approve the cost before any work is done.',
      },
      {
        question: 'Can you recover files from a laptop that will not boot?',
        answer: 'Often, yes. Our technicians use specialized data recovery tools for drives that will not boot or have failed. Data recovery starts at $149 depending on complexity, and we offer a free assessment before quoting any recovery work.',
      },
      {
        question: 'Is it worth repairing an old computer instead of buying a new one?',
        answer: 'It depends on the issue and the computer\'s age. A screen, battery, or storage upgrade is usually far cheaper than a new computer and can add years of useful life. During your free diagnostic, we give you an honest recommendation on whether repair or replacement makes more sense for your specific device.',
      },
    ],
  },
  {
    id: 'cell-phone-repair',
    name: 'Cell Phone Repair & Unlocking',
    questions: [
      {
        question: 'Can any phone be unlocked?',
        answer: 'We unlock phones from any Canadian or international carrier at our Calgary location. Unlocking starts at $29, is legal, and does not void your manufacturer warranty, so your phone can be used with any compatible carrier, including while travelling.',
      },
      {
        question: 'Do you fix cracked back glass, not just the front screen?',
        answer: 'Yes. In addition to broken front screen repairs starting at $89 for iPhone and $99 for Samsung, our technicians handle other physical damage including camera, charging port, and speaker repairs, all cleaned and tested before pickup.',
      },
      {
        question: 'Is it worth repairing an old phone instead of buying a new one?',
        answer: 'For most common issues like a cracked screen or worn battery, repair is significantly cheaper than replacing the phone and can restore it to full working condition. Battery replacement starts at $49 and screen repair starts at $89, both a fraction of the cost of a new device.',
      },
      {
        question: 'How can I tell if my phone has water damage that can still be fixed?',
        answer: 'Signs include a phone that will not turn on, a distorted speaker, or a fogged camera lens after contact with liquid. We offer diagnostic cleaning and component-level repair for water damaged devices with a no fix, no fee policy, so you only pay if we can restore it, and success is much more likely the sooner the device is brought in.',
      },
      {
        question: 'Do you sell screen protectors and cases as well as repair phones?',
        answer: 'Yes. Alongside repairs, we sell phone cases, chargers, cables, and screen protectors, with free screen protector installation available at our Calgary location.',
      },
    ],
  },
  {
    id: 'device-sales',
    name: 'Device Sales & Trade-Ins',
    questions: [
      {
        question: 'How long do refurbished devices last compared to new ones?',
        answer: 'Our certified refurbished devices are professionally inspected, repaired where needed, and functionally tested before sale, and each one is backed by a warranty. With normal use, a certified refurbished laptop or phone offers comparable performance and lifespan to new, at a lower price.',
      },
      {
        question: 'Can I sell my old device without buying a new one?',
        answer: 'Bring your old phone, laptop, or computer to our Calgary location and we will assess its condition and offer trade-in credit, which you can put toward a new or refurbished device or use as store credit, depending on the item.',
      },
      {
        question: 'What is your return policy on devices?',
        answer: 'We offer a 30 day return policy on devices purchased from us, plus a price match guarantee and a warranty on all devices sold, whether new or certified refurbished.',
      },
      {
        question: 'Do you offer financing on phones or laptops?',
        answer: 'Yes. We offer flexible financing options for approved customers, letting you spread the cost of a new or refurbished device over time. Ask our staff in store or online for current financing terms and eligibility.',
      },
      {
        question: 'How much cheaper is a refurbished device than buying new?',
        answer: 'Certified refurbished smartphones and laptops typically cost significantly less than new equivalents while offering comparable tested performance. Refurbished iPhones start at $299 and refurbished laptops start at $399, both backed by a warranty.',
      },
    ],
  },
  {
    id: 'software-development',
    name: 'Software Development',
    questions: [
      {
        question: 'Do you sign an NDA before discussing my business idea or project?',
        answer: 'We are happy to discuss confidentiality requirements, including an NDA, during your free consultation before any detailed scoping begins, so you can share what you need to without concern.',
      },
      {
        question: 'Can you work with our existing codebase instead of starting from scratch?',
        answer: 'Yes. Our requirements-first approach means we assess your existing systems and codebase during the free consultation and scope the project around what already exists, rather than assuming a full rebuild is always necessary.',
      },
      {
        question: 'Do I own the code after the software project is finished?',
        answer: 'Ownership terms are confirmed as part of your project agreement before work begins. Every project also includes post-launch support, and we offer ongoing maintenance plans for updates and bug fixes after your application goes live.',
      },
      {
        question: 'What happens if I need changes after the software is delivered?',
        answer: 'Every custom software project includes post-launch support, and we offer ongoing maintenance plans for updates, bug fixes, and improvements after your application goes live, so your system keeps running reliably as your business changes.',
      },
      {
        question: 'Can a small business afford custom software, or is it only for large companies?',
        answer: 'We work with Calgary small and medium businesses building automation tools, internal apps, and database systems tailored to their exact workflow. Pricing is project-based on complexity and features rather than a fixed enterprise rate, and a free consultation gives you a real quote scoped to your actual needs.',
      },
    ],
  },
  {
    id: 'web-development',
    name: 'Web Development',
    questions: [
      {
        question: 'Do you build websites on WordPress or a custom platform?',
        answer: 'We build custom websites using modern frameworks rather than generic page builders or template-based platforms, which means faster load times, stronger SEO performance, and more flexibility to add features as your business grows.',
      },
      {
        question: 'Can you redesign my existing website without losing my current SEO rankings?',
        answer: 'Yes, this is a normal part of a website redesign or platform migration. Redesigns start at $999, and every project includes on-page SEO fundamentals like fast load times, mobile responsiveness, and structured metadata from day one.',
      },
      {
        question: 'Can I update my website content myself after it launches?',
        answer: 'Yes. Every site we build includes a custom content management dashboard, so you can edit text, images, and pages in real time without touching code or calling a developer. We walk you through it at launch so your team can manage updates independently from day one.',
      },
      {
        question: 'Do you build e-commerce stores with payment processing?',
        answer: 'Yes. Our e-commerce store development, starting at $2,999, includes secure checkout, inventory management, and payment processing built in.',
      },
      {
        question: 'Will my new website actually show up on Google?',
        answer: 'Every website we build includes on-page SEO fundamentals: fast load times, mobile responsiveness, structured headings, and metadata. For competitive Calgary keywords, we also offer ongoing local SEO and Google Ads packages to accelerate rankings further.',
      },
      {
        question: 'How much does website maintenance cost after launch?',
        answer: 'Monthly maintenance, including updates and support, starts at $99 per month. Alternatively, we can deploy your site to a hosting provider of your choice if you prefer to manage it independently.',
      },
    ],
  },
  {
    id: 'trust-comparisons-local',
    name: 'Trust, Comparisons & Local',
    questions: [
      {
        question: 'Is it better to use a local Calgary repair shop or a manufacturer repair service?',
        answer: 'Manufacturer repair often means mailing your device away and waiting longer, sometimes at a higher cost. A local certified shop lets you get a free diagnostic in person, ask questions directly, and in many cases get same day service, while still using CompTIA A+ and Apple certified technicians and backing repairs with a warranty.',
      },
      {
        question: 'Should I hire a freelancer, a large agency, or a local Calgary company for my website?',
        answer: 'A freelancer can be lower cost but often has limited availability and no team to fall back on. A large agency may have overhead that drives up pricing. A local company like ours gives you direct access to the people building your project, in-person consultation, and ongoing local support, at pricing that starts at $499 for a landing page rather than enterprise agency rates.',
      },
      {
        question: 'Why choose Madny Digital Services over a national repair or electronics chain?',
        answer: 'We offer certified technicians, free diagnostics, a 90 day repair warranty, and direct in-person service at our Calgary location, without the wait times or scripted service often associated with larger chains. We also cover a broader range under one roof, including computer repair, phone repair, device sales, software development, and web development.',
      },
      {
        question: 'Can one company really handle both my computer repairs and my business website?',
        answer: 'Yes. Madny Digital Services offers computer repair, cell phone repair and unlocking, device sales, custom software development, and web development all under one roof, so both your hardware needs and your business\'s digital presence can be handled by a team that already knows you.',
      },
      {
        question: 'Do you offer any guarantees on your work?',
        answer: 'Yes. Repairs include a 90 day warranty on parts and labor, phone screen repairs include a lifetime warranty, device purchases include a price match guarantee and 30 day return policy, and water damage treatment is no fix, no fee.',
      },
    ],
  },
];

export const allFaqs = faqGroups.flatMap((group) => group.questions);
