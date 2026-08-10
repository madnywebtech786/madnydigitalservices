import {
  Monitor,
  Smartphone,
  ShoppingBag,
  Code2,
  Terminal,
  Wrench,
  Unlock,
  Cpu,
  HardDrive,
  Shield,
  Zap,
  BadgeCheck,
  Laptop,
  Battery,
  Globe,
  Palette,
  Search,
  ShoppingCart,
  Camera,
  Mic,
  Keyboard,
  Database,
  TestTube,
  FileCode,
  Megaphone,
} from 'lucide-react';

export const services = [
  {
    id: 'computer-repair',
    title: 'Computer Repair',
    shortDesc: 'Computer repair Calgary: PC and Mac diagnostics, upgrades & virus removal',
    heroDescription: 'Madny Digital Services provides computer repair in Calgary for residents, remote workers, and businesses across the NE, NW, SE, SW, and nearby Airdrie and Cochrane. Our CompTIA A+ certified technicians repair and upgrade PCs and Macs of every brand, remove viruses, recover lost data, and run full diagnostics so your system runs reliably again.',
    icon: Monitor,
    secondaryIcon: Wrench,
    color: 'from-primary to-primary-dark',
    image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=1200&q=80',
    features: [
      {
        icon: Monitor,
        title: 'Laptop Screen Replacement',
        description: 'Fast, precise LCD and LED screen replacements for all laptop and Mac brands.',
      },
      {
        icon: Zap,
        title: 'Charging Port Replacement',
        description: 'Repair or replace worn and damaged charging ports on laptops and desktops.',
      },
      {
        icon: Keyboard,
        title: 'Keyboard Replacement',
        description: 'Full keyboard replacements for damaged, sticking, or missing keys.',
      },
      {
        icon: Battery,
        title: 'Battery Replacement',
        description: 'Restore your laptop battery life with certified, quality replacement batteries.',
      },
      {
        icon: HardDrive,
        title: 'RAM, SSD & Storage Upgrades',
        description: 'Upgrade your RAM, SSD, hard drive, or optical drive for faster, more reliable performance.',
      },
      {
        icon: Shield,
        title: 'Virus & Malware Removal',
        description: 'Full system diagnostics with removal of viruses, malware, and spyware from PCs and Macs.',
      },
      {
        icon: HardDrive,
        title: 'Data Backup & Recovery',
        description: 'Protect your files with scheduled backups, or recover data from failed or damaged drives.',
      },
      {
        icon: ShoppingBag,
        title: 'Computer Systems Design & Sales',
        description: 'Custom system design plus ongoing sales and service support for Calgary businesses.',
      },
    ],
    pricing: [
      { service: 'Diagnostic & Assessment', price: 'FREE', note: 'With repair' },
      { service: 'Virus/Malware Removal', price: '$79+', note: 'Same day service' },
      { service: 'Hardware Repair', price: '$99+', note: 'Parts extra' },
      { service: 'Data Recovery', price: '$149+', note: 'Based on complexity' },
      { service: 'SSD/RAM Upgrade', price: '$49+', note: 'Plus parts' },
      { service: 'OS Installation', price: '$69', note: 'Windows/Linux' },
    ],
    benefits: [
      'CompTIA A+ certified technicians',
      'Free diagnostics with repair',
      '90 day warranty on repairs',
      'Same day service available',
      'All PC and Mac brands supported',
      'Pickup and delivery available',
    ],
    faqs: [
      {
        question: 'How much does computer repair cost in Calgary?',
        answer: 'Computer repair in Calgary typically starts at $79 for virus removal and $99 for hardware repairs, with parts priced separately. Diagnostics are free with any repair. We provide an upfront quote after inspection, so there are no surprise charges.',
      },
      {
        question: 'How long does a typical computer repair take?',
        answer: 'Most repairs are completed within 24 to 48 hours. Simple issues like virus removal can often be finished same day, while complex hardware repairs or parts orders may take 2 to 3 business days. We confirm timelines before starting work.',
      },
      {
        question: 'Do you offer a warranty on repairs?',
        answer: 'Yes. Every repair we complete includes a 90 day warranty covering both parts and labor. If the same issue returns within that window, we fix it again at no additional cost to you.',
      },
      {
        question: 'Can you recover data from a dead hard drive?',
        answer: 'In many cases, yes. Our technicians use specialized data recovery tools for failed or corrupted drives. Success depends on the type and severity of the failure. We offer a free assessment before quoting any recovery work.',
      },
      {
        question: 'Do you repair both PC and Mac computers?',
        answer: 'Yes. Our certified technicians service PCs and Macs of every brand, including screen replacements, battery service, RAM and SSD upgrades, and full hardware and software diagnostics for desktops and laptops alike.',
      },
    ],
  },
  {
    id: 'cell-phone-repair',
    title: 'Cell Phone Repair & Unlocking',
    shortDesc: 'Cell phone repair Calgary: screens, batteries & carrier unlocking',
    heroDescription: 'Madny Digital Services offers cell phone repair in Calgary for iPhone, Samsung Galaxy, and every major Android device, serving the NE, NW, SE, SW, downtown, and nearby Airdrie and Cochrane. Our certified technicians handle phone unlocking in Calgary for any carrier, along with screen, battery, camera, and water damage repairs, all cleaned and tested before pickup.',
    icon: Smartphone,
    secondaryIcon: Unlock,
    color: 'from-secondary to-secondary-dark',
    image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=1200&q=80',
    features: [
      {
        icon: Unlock,
        title: 'Carrier Unlocking',
        description: 'Unlock your phone from any Canadian or international carrier to use with any network.',
      },
      {
        icon: Smartphone,
        title: 'Broken Screen Repair',
        description: 'Premium quality screen replacements for iPhones, Samsung Galaxy, and all Android devices.',
      },
      {
        icon: Camera,
        title: 'Camera Repair',
        description: 'Fix blurry, cracked, or non functioning front and rear cameras.',
      },
      {
        icon: Mic,
        title: 'Microphone & Speaker Repair',
        description: 'Restore clear calls and audio with microphone and speaker repairs.',
      },
      {
        icon: Cpu,
        title: 'Charging Port Repair',
        description: 'Fix charging issues with port replacement and connector cleaning services.',
      },
      {
        icon: Battery,
        title: 'Battery Replacement',
        description: 'Restore your phone battery life with quality, safety tested replacement batteries.',
      },
      {
        icon: Shield,
        title: 'Water Damage Treatment',
        description: 'Diagnostic cleaning and component level repair for liquid damaged devices.',
      },
      {
        icon: ShoppingBag,
        title: 'Cell Phone Sales & Service',
        description: 'Cellphone sales alongside ongoing repair, unlocking, and service support.',
      },
    ],
    pricing: [
      { service: 'iPhone Screen Repair', price: '$89+', note: 'Model dependent' },
      { service: 'Samsung Screen Repair', price: '$99+', note: 'Model dependent' },
      { service: 'Battery Replacement', price: '$49+', note: 'Most models' },
      { service: 'Carrier Unlock', price: '$29+', note: 'Network dependent' },
      { service: 'Water Damage Treatment', price: '$79+', note: 'No fix, no fee' },
      { service: 'Charging Port Repair', price: '$59+', note: 'Parts included' },
    ],
    benefits: [
      'Certified repair technicians',
      'While you wait repairs',
      'Quality OEM grade parts',
      'Lifetime warranty on screens',
      'All phone brands supported',
      'IMEI unlocking for any carrier',
    ],
    faqs: [
      {
        question: 'Where can I get my phone unlocked in Calgary?',
        answer: 'Madny Digital Services unlocks phones from any Canadian or international carrier at our Calgary location. Unlocking starts at $29, is completed same day in most cases, and is fully legal, so it will not void your manufacturer warranty.',
      },
      {
        question: 'How much does cell phone screen repair cost in Calgary?',
        answer: 'Screen repair in Calgary starts at $89 for iPhones and $99 for Samsung devices, depending on the model. Most screen repairs are completed in 30 to 60 minutes while you wait, using OEM or high quality aftermarket parts.',
      },
      {
        question: 'Will unlocking my phone void the warranty?',
        answer: 'No. Carrier unlocking is legal in Canada and does not void your manufacturer warranty. It simply removes the network restriction so your phone can be used with any compatible carrier, including when traveling internationally.',
      },
      {
        question: 'Can a water damaged phone be repaired?',
        answer: 'Often, yes, if it is brought in quickly before corrosion spreads. We offer diagnostic cleaning and component level repair with a no fix, no fee policy on water damage treatment, so you only pay if we can restore your device.',
      },
      {
        question: 'Do you use original or aftermarket parts?',
        answer: 'We offer both OEM and high quality aftermarket options for screens, batteries, and components. Our technicians explain the tradeoffs in cost and longevity so you can choose the best fit for your device and budget.',
      },
    ],
  },
  {
    id: 'device-sales',
    title: 'Mobile & Computer Sales',
    shortDesc: 'New & refurbished phones and computers in Calgary, plus trade ins',
    heroDescription: 'Madny Digital Services sells new and certified refurbished smartphones, laptops, and desktop computers to customers across Calgary, including the NE, NW, SE, SW, and nearby Airdrie and Cochrane. Every refurbished device is inspected, tested, and backed by a warranty, and we accept trade ins toward your next purchase, in store or online.',
    icon: ShoppingBag,
    secondaryIcon: Cpu,
    color: 'from-primary to-secondary',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1200&q=80',
    features: [
      {
        icon: Smartphone,
        title: 'New & Refurbished Smartphones',
        description: 'Latest iPhones, Samsung Galaxy, Google Pixel, and budget friendly certified options.',
      },
      {
        icon: Laptop,
        title: 'Laptops, Desktops & Custom PC Builds',
        description: 'Gaming laptops, business notebooks, desktops, and custom built PCs to your specs.',
      },
      {
        icon: BadgeCheck,
        title: 'Certified Refurbished Devices',
        description: 'Quality tested refurbished devices at significant savings, each backed by a warranty.',
      },
      {
        icon: Cpu,
        title: 'Computer Parts & Components',
        description: 'RAM, SSDs, graphics cards, and components for upgrades and custom builds.',
      },
      {
        icon: Battery,
        title: 'Accessories',
        description: 'Cases, chargers, cables, screen protectors, and peripherals for phones and PCs.',
      },
      {
        icon: Shield,
        title: 'Protection Plans & Trade Ins',
        description: 'Extended warranty options plus trade in credit toward your next device.',
      },
    ],
    pricing: [
      { service: 'Refurbished iPhones', price: '$299+', note: 'Grade A condition' },
      { service: 'Refurbished Laptops', price: '$399+', note: 'Warranty included' },
      { service: 'New Smartphones', price: '$199+', note: 'All brands' },
      { service: 'Phone Cases', price: '$15+', note: 'Wide selection' },
      { service: 'Chargers & Cables', price: '$12+', note: 'Fast charging' },
      { service: 'Screen Protectors', price: '$10+', note: 'Free installation' },
    ],
    benefits: [
      'Price match guarantee',
      '30 day return policy',
      'Warranty on all devices',
      'Trade in program',
      'Financing available',
      'Expert, no pressure advice',
    ],
    faqs: [
      {
        question: 'What does certified refurbished mean?',
        answer: 'Our certified refurbished devices are professionally inspected, repaired where needed, and restored to like new condition. Each unit is functionally tested before sale and comes with a warranty, so you get reliable performance at a lower price than new.',
      },
      {
        question: 'Do you buy or trade in old devices in Calgary?',
        answer: 'Yes. Bring your old phone, laptop, or computer to our Calgary location and we will assess its condition and offer trade in credit toward a new or refurbished device, reducing the out of pocket cost of your upgrade.',
      },
      {
        question: 'Can I finance a phone or computer purchase?',
        answer: 'Yes. We offer flexible financing options for approved customers, letting you spread the cost of a new or refurbished device over time. Ask our staff in store or online for current financing terms and eligibility.',
      },
      {
        question: 'Is it cheaper to buy refurbished than new?',
        answer: 'Generally, yes. Certified refurbished smartphones and laptops typically cost 20 to 40 percent less than new equivalents while offering comparable performance, since each device is tested and warrantied before resale.',
      },
    ],
  },
  {
    id: 'software-development',
    title: 'Software Development',
    shortDesc: 'Custom software development company in Calgary for automation & apps',
    heroDescription: 'Madny Digital Services is a software development company in Calgary building custom business applications, automation tools, and databases for local companies and remote teams across the NE, NW, SE, SW, and surrounding areas. Every project is scoped to your exact workflow, thoroughly tested, and supported after launch.',
    icon: Terminal,
    secondaryIcon: FileCode,
    color: 'from-primary to-secondary-dark',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&q=80',
    features: [
      {
        icon: Terminal,
        title: 'Custom Software Development',
        description: 'Software built around your exact business processes and requirements, not a generic template.',
      },
      {
        icon: Globe,
        title: 'Web Application Development',
        description: 'Full featured web apps, from internal tools to customer facing platforms.',
      },
      {
        icon: Zap,
        title: 'Business Process Automation',
        description: 'Automation tools that remove manual, repetitive work from your daily operations.',
      },
      {
        icon: Database,
        title: 'Database Development & Management',
        description: 'Designing, building, and managing databases that scale as your business grows.',
      },
      {
        icon: TestTube,
        title: 'Software Testing & QA',
        description: 'Structured testing to catch issues before they reach your users.',
      },
      {
        icon: Wrench,
        title: 'Software Maintenance & Support',
        description: 'Ongoing updates, bug fixes, and support after launch to keep systems reliable.',
      },
    ],
    benefits: [
      'Requirements first approach',
      'Regular progress updates',
      'Structured testing before launch',
      'Post launch support included',
      'Local Calgary consultation',
      'Built to scale with your business',
    ],
    faqs: [
      {
        question: 'How long does custom software take to build?',
        answer: 'Timeline depends entirely on project scope. A focused automation tool or internal app takes less time than a multi feature platform with integrations. During your free consultation, we assess your requirements and provide a project specific timeline before work begins.',
      },
      {
        question: 'How much does custom software development cost in Calgary?',
        answer: 'Pricing is project based and depends on complexity, features, and integrations required. We do not use flat rate packages for custom builds. Contact us for a free consultation and a detailed quote scoped to your specific business needs.',
      },
      {
        question: 'Do you provide ongoing software maintenance?',
        answer: 'Yes. Every custom software project includes post launch support, and we offer ongoing maintenance plans for updates, bug fixes, and improvements after your application goes live, so your system keeps running reliably as your business changes.',
      },
      {
        question: 'What kind of businesses do you build software for?',
        answer: 'We work with Calgary small and medium businesses, local teams, and remote companies that need custom applications, workflow automation, or database systems tailored to how they actually operate, rather than adapting their process to off the shelf software.',
      },
    ],
  },
  {
    id: 'web-development',
    title: 'Web Development',
    shortDesc: 'Calgary web development services: websites, e-commerce & SEO',
    heroDescription: 'Madny Digital Services delivers web development services in Calgary for local businesses in the NE, NW, SE, SW, and surrounding areas like Airdrie and Cochrane. Our team builds fast, mobile responsive websites, e-commerce stores, and custom web portals, then supports them with SEO and Google Ads so Calgary customers can find you.',
    icon: Code2,
    secondaryIcon: Globe,
    color: 'from-secondary to-primary',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
    features: [
      {
        icon: Globe,
        title: 'Local Business Website Design',
        description: 'Custom, mobile responsive websites designed to convert Calgary visitors into paying customers.',
      },
      {
        icon: ShoppingCart,
        title: 'E-Commerce Store Development',
        description: 'Secure online stores with fast checkout, inventory management, and payment processing built in.',
      },
      {
        icon: Palette,
        title: 'UI/UX Design',
        description: 'User-focused interfaces and clear navigation that keep visitors engaged and reduce bounce rate.',
      },
      {
        icon: Zap,
        title: 'Website Speed Optimization',
        description: 'Core Web Vitals tuning and performance audits so your site loads in under 3 seconds.',
      },
      {
        icon: Wrench,
        title: 'Website Maintenance & Hosting',
        description: 'Ongoing updates, security monitoring, and managed hosting to keep your site online and current.',
      },
      {
        icon: Search,
        title: 'Local SEO for Calgary Businesses',
        description: 'On page SEO, Google Business Profile optimization, and local keyword targeting to improve rankings.',
      },
      {
        icon: Megaphone,
        title: 'PPC & Digital Marketing',
        description: 'Targeted Google Ads campaigns built to drive qualified local traffic and measurable leads.',
      },
      {
        icon: Smartphone,
        title: 'Mobile Responsive Development',
        description: 'Every site is built and tested across phones, tablets, and desktops for a consistent experience.',
      },
    ],
    pricing: [
      { service: 'Landing Page', price: '$499+', note: 'Single page site' },
      { service: 'Business Website', price: '$1,499+', note: '5 to 10 pages' },
      { service: 'E-Commerce Store', price: '$2,999+', note: 'Full featured' },
      { service: 'Custom Web App', price: '$4,999+', note: 'Quote required' },
      { service: 'Website Redesign', price: '$999+', note: 'Modernize existing' },
      { service: 'Monthly Maintenance', price: '$99/mo', note: 'Updates & support' },
    ],
    benefits: [
      'Certified Calgary developers',
      'Mobile first, responsive design',
      'SEO optimized from day one',
      'Sub 3 second load times',
      'Secure, PIPEDA aware builds',
      'Local support and training',
    ],
    faqs: [
      {
        question: 'How much does web development cost in Calgary?',
        answer: 'Calgary web development typically starts around $499 for a landing page, $1,499 for a full business website, and $2,999 for an e-commerce store. Final pricing depends on features, page count, and integrations. We provide a free, itemized quote before any work begins.',
      },
      {
        question: 'How long does it take to build a website?',
        answer: 'A standard business website takes about 1 week from approved design to launch. E-commerce websites typically take 3 to 4 weeks depending on product catalog size, payment integrations, and the number of revision rounds required.',
      },
      {
        question: 'Do you provide hosting and site maintenance?',
        answer: 'Yes. We offer managed hosting, security monitoring, and monthly maintenance plans starting at $99 per month, or we can deploy your site to a hosting provider of your choice, whichever fits your business best.',
      },
      {
        question: 'Can I update the website content myself after launch?',
        answer: 'Yes. Every site we build includes a custom content management dashboard, so you can edit text, images, and pages in real time without touching code or calling a developer. We walk you through it at launch so your team can manage updates independently from day one.',
      },
      {
        question: 'Will my website show up on Google?',
        answer: 'Every website we build includes on page SEO fundamentals: fast load times, mobile responsiveness, structured headings, and metadata. For competitive Calgary keywords, we also offer ongoing local SEO and Google Ads packages to accelerate rankings.',
      },
      {
        question: 'What platform or technology do you build websites with?',
        answer: 'We build custom websites using modern frameworks rather than generic page builders, which means faster load times, stronger SEO performance, and more flexibility to add features as your business grows, without the limitations of drag and drop templates.',
      },
      {
        question: 'Do I need a website if my business already has social media?',
        answer: 'Yes. Social media accounts are rented space you do not control, while a website is a permanent, searchable asset that ranks on Google, builds trust with customers researching your business, and works alongside your social channels rather than replacing them.',
      },
    ],
  },
];

export function getServiceById(id) {
  return services.find((service) => service.id === id);
}

export function getAllServiceIds() {
  return services.map((service) => service.id);
}
