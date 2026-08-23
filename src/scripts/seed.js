import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const MONGODB_URI = process.env.MONGODB_URI;

async function seed() {
  await mongoose.connect(MONGODB_URI, { bufferCommands: false });
  console.log('Connected to MongoDB');

  const db = mongoose.connection.db;

  // Drop existing collections if they exist to avoid duplicates
  const collections = await db.listCollections().toArray();
  const collNames = collections.map(c => c.name);
  if (collNames.includes('pagecontents')) await db.dropCollection('pagecontents');
  if (collNames.includes('globalcontents')) await db.dropCollection('globalcontents');
  if (collNames.includes('users')) await db.dropCollection('users');
  console.log('Cleared existing collections');

  // ──────────────── ADMIN USER ────────────────
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash('admin123', salt);
  await db.collection('users').insertOne({
    email: 'admin@madnydigitalservices.com',
    password: hashedPassword,
    role: 'admin',
    createdAt: new Date(),
    updatedAt: new Date()
  });
  console.log('Seeded admin user');

  // ──────────────── GLOBAL CONTENT ────────────────
  await db.collection('globalcontents').insertOne({
    key: 'global',
    header: {
      brandName: 'Madny Digital',
      navLinks: [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/#services' },
        { name: 'Projects', href: '/projects' },
        { name: 'FAQs', href: '/faqs' },
        { name: 'Contact', href: '/contact' },
      ],
    },
    footer: {
      description: "Calgary's premier digital agency specializing in web development, e-commerce solutions, and digital marketing for businesses in the tech and retail industry.",
      address: '#216, 55 Westwinds Cres NE, Calgary, AB T3J 5H2, Canada',
      email: 'madny786@hotmail.com',
      phone: '+1 (403) 708-8214',
      copyright: 'Madny Digital Services. All rights reserved.',
      companyLinks: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Projects', href: '/projects' },
        { name: 'FAQs', href: '/faqs' },
        { name: 'Contact', href: '/contact' },
      ],
      socialLinks: [
        { platform: 'Instagram', href: 'https://www.instagram.com/madnydigitalservices' },
        { platform: 'Facebook', href: 'https://www.facebook.com/share/17UsEhwnzo/?mibextid=wwXIfr' },
      ],
    },
    socialWidget: {
      facebook: 'https://www.facebook.com/share/17UsEhwnzo/?mibextid=wwXIfr',
      instagram: 'https://www.instagram.com/madnydigitalservices',
      whatsapp: 'https://wa.me/14037088214',
    },
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  console.log('Seeded global content');

  // ──────────────── HOME PAGE ────────────────
  await db.collection('pagecontents').insertOne({
    slug: 'home',
    meta: {
      title: "Computer & Cell Phone Repair Calgary | Web & Software Development | Madny Digital",
      description: "Madny Digital Services offers computer repair, cell phone repair and unlocking, device sales, software development, and web development services in Calgary, Alberta. Certified technicians, same-day service, free quotes.",
      keywords: "computer repair Calgary, cell phone repair Calgary, phone unlocking Calgary, software development company Calgary, web development services Calgary",
      ogTitle: "Madny Digital Services | Calgary's Trusted Computer, Phone & Web Experts",
      ogDescription: "Certified computer and phone repair, quality device sales, custom software, and web development for Calgary residents and businesses. Book online or visit our shop today.",
    },
    sections: {
      hero: {
        badge: "Calgary's Trusted Tech Partner",
        headingLine1: 'Calgary\'s Trusted',
        headingLine2: 'Repair & Tech',
        headingLine3: 'Solutions',
        subheading: 'Certified computer repair, cell phone repair and unlocking, new and refurbished device sales, and custom software and web development. One trusted team serving Calgary, Airdrie, and Cochrane.',
        ctaPrimary: 'Get Free Quote',
        ctaSecondary: '(403) 708-8214',
        stats: [
          { value: '500+', label: 'Devices Repaired' },
          { value: '50+', label: 'Web Projects' },
          { value: '1000+', label: 'Happy Customers' },
          { value: '24/7', label: 'Support' },
        ],
        floatingCard1Title: 'Website Development',
        floatingCard1Subtitle: 'Custom & responsive',
        floatingCard2Title: 'Phone Repair',
        floatingCard2Subtitle: 'While you wait',
      },
      services: {
        badge: 'Our Services',
        title: 'What We Offer',
        subtitle: 'Computer repair, cell phone repair, device sales, software development, and web development services for Calgary residents, remote workers, and small businesses.',
        items: [
          {
            id: 'computer-repair',
            title: 'Computer Repair',
            shortDesc: 'PC & Mac repair, upgrades, virus removal',
            description: 'Computer repair Calgary residents trust for laptop and desktop screens, charging ports, keyboards, batteries, and RAM, HDD, and SSD upgrades. Our expert technicians handle virus removal, diagnostics, and data recovery.',
            features: ['Screen & Battery Replacement', 'Hardware Upgrades', 'Data Backup & Recovery', 'Virus & Malware Removal'],
          },
          {
            id: 'cell-phone-repair',
            title: 'Cell Phone Repair & Unlocking',
            shortDesc: 'Screen repair & carrier unlocking',
            description: 'Cell phone repair Calgary customers rely on for cracked screens, batteries, cameras, and charging ports on any brand. We also offer legal carrier unlocking and water damage treatment, with most repairs done while you wait.',
            features: ['Carrier Unlocking', 'Screen & Camera Repair', 'Battery & Charging Port', 'Water Damage Treatment'],
          },
          {
            id: 'device-sales',
            title: 'Mobile & Computer Sales',
            shortDesc: 'New & certified refurbished devices',
            description: 'Shop new and certified refurbished smartphones, laptops, and desktops backed by warranty. Custom PC builds, trade-ins, and accessories are available in store and online, at prices that beat big-box retailers.',
            features: ['New & Refurbished Devices', 'Custom PC Builds', 'Trade-In Program', 'Warranty Included'],
          },
          {
            id: 'software-development',
            title: 'Software Development',
            shortDesc: 'Custom apps & automation for Calgary businesses',
            description: 'A software development company Calgary businesses turn to for custom applications, workflow automation tools, and database management built around real requirements, with thorough testing before every launch.',
            features: ['Custom Business Apps', 'Workflow Automation', 'Database Management', 'Testing & Maintenance'],
          },
          {
            id: 'web-development',
            title: 'Web Development',
            shortDesc: 'Websites, e-commerce & UI/UX design',
            description: 'Web development services Calgary businesses use to launch fast, mobile-first websites and e-commerce stores. Every project includes UI/UX design, speed optimization, and built-in SEO to help you get found on Google.',
            features: ['Business Websites', 'E-Commerce Stores', 'UI/UX Design', 'Speed & SEO Optimization'],
          },
        ],
      },
      about: {
        badge: 'About Us',
        title: 'Madny Digital Services',
        titlePrefix: 'We Are',
        paragraph1: "Based in Calgary, Alberta, Madny Digital Services is a full-service technology company serving local residents, remote workers, and small to medium businesses across the city, including the NE, NW, SE, and SW quadrants, plus nearby Airdrie and Cochrane. Our expert technicians and developers handle everything from a cracked phone screen to a full company website.",
        paragraph2: 'One team, five services: computer repair, cell phone repair and unlocking, device sales, software development, and web development. Every job is backed by clear pricing, a written warranty, and technicians who explain the fix in plain language before any work begins.',
        features: [
          'Expert, highly skilled technicians',
          'Free diagnostics with every repair',
          'Warranty on all repairs and devices sold',
          'Transparent, upfront pricing',
          'Same-day service on most repairs',
          'Free consultation for software and web projects',
        ],
        values: [
          {
            title: 'Mission',
            description: 'To keep Calgary connected by repairing devices fast, selling reliable tech at fair prices, and building software and websites that help local businesses grow.',
          },
          {
            title: 'Vision',
            description: 'To be Calgary and Alberta\'s first call for computer repair, phone repair, device sales, and custom digital solutions, one honest job at a time.',
          },
        ],
        achievements: [
          { number: '150+', label: 'Projects Completed' },
          { number: '50+', label: 'Happy Clients' },
          { number: '10+', label: 'Years Experience' },
          { number: '25+', label: 'Team Members' },
        ],
        floatingCard1Value: '10+',
        floatingCard1Label: 'Years of Excellence',
        floatingCard2Value: '50+',
        floatingCard2Label: 'Happy Clients',
      },
      testimonials: {
        badge: 'Testimonials',
        title: 'What Our Clients Say',
        description: "Real reviews from Calgary residents and business owners who trusted us with their computer repair, phone repair, device purchase, or website project.",
        bottomText: 'satisfied customers in Calgary',
        bottomCount: '500+',
        items: [
          {
            name: 'Sarah Mitchell',
            role: 'Small Business Owner',
            image: '/images/client-female-1.webp',
            content: 'Madny Digital fixed my laptop in just a few hours when another shop said it would take a week. Their expertise and speed saved my business.',
          },
          {
            name: 'Michael Chen',
            role: 'Real Estate Agent',
            image: '/images/client-male-1.webp',
            content: 'Got my iPhone screen replaced while I waited. The quality is amazing and the price was very fair. The team is professional and friendly.',
          },
          {
            name: 'Emily Rodriguez',
            role: 'Restaurant Owner',
            image: '/images/client-female-2.webp',
            content: 'They built an amazing website for my restaurant and helped me set up online ordering. The website looks beautiful and has brought in so many new customers.',
          },
          {
            name: 'David Thompson',
            role: 'IT Professional',
            image: '/images/client-male-2.webp',
            content: "I bought a refurbished MacBook from Madny and it's been running perfectly for over a year. Great prices on quality devices.",
          },
          {
            name: 'Jessica Parker',
            role: 'Graphic Designer',
            image: '/images/client-female-2.webp',
            content: 'The web development team understood my vision perfectly. My portfolio site is stunning and loads incredibly fast. Exceptional work!',
          },
          {
            name: 'Robert Kim',
            role: 'Startup Founder',
            image: '/images/client-male-3.webp',
            content: 'Unlocked my phone quickly and professionally. Also got great advice on the best accessories for my business needs. Highly recommend!',
          },
        ],
      },
      projects: {
        badge: 'Portfolio',
        title: 'Featured Projects',
        subtitle: 'A selection of our best work across web development, e-commerce, and digital solutions.',
        items: [
          {
            id: 1,
            title: 'E-Commerce Fashion Store',
            category: 'ecommerce',
            description: 'A modern, responsive e-commerce platform featuring real-time inventory management, secure payment processing, and an intuitive shopping experience.',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
            tags: ['Next.js', 'Stripe', 'Tailwind CSS', 'PostgreSQL'],
            url: '#',
            featured: true,
          },
          {
            id: 2,
            title: 'Restaurant Management System',
            category: 'web',
            description: 'Complete restaurant solution with online ordering, table reservations, and kitchen management.',
            image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
            tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
            url: '#',
            featured: true,
          },
          {
            id: 3,
            title: 'Real Estate Marketplace',
            category: 'web',
            description: 'Comprehensive property listing platform with advanced search filters and virtual tours.',
            image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
            tags: ['Vue.js', 'Laravel', 'Three.js', 'MySQL'],
            url: '#',
            featured: true,
          },
        ],
      },
      gallery: {
        badge: 'Gallery',
        title: 'Innovation Discovery',
        items: [
          { image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80', title: 'Web Development' },
          { image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80', title: 'Mobile Apps' },
          { image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80', title: 'Restaurant System' },
          { image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80', title: 'E-Commerce' },
          { image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=600&q=80', title: 'Computer Repair' },
          { image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600&q=80', title: 'Phone Repair' },
        ],
      },
      contact: {
        badge: 'Get In Touch',
        title: "Let's Build Something Amazing",
        subtitle: 'Book a repair, get a free software consultation, or visit our Calgary shop. We reply to every enquiry within one business day.',
        contactInfo: [
          {
            title: 'Visit Us',
            details: ['#216, 55 Westwinds Cres NE', 'Calgary, AB T3J 5H2', 'Canada'],
          },
          {
            title: 'Email Us',
            details: ['madny786@hotmail.com'],
          },
          {
            title: 'Call Us',
            details: ['+1 (403) 708-8214', '+1 (403) 493-7500'],
          },
        ],
      },
      faqs: {
        badge: 'Frequently Asked Questions',
        title: 'Calgary Tech Questions, Answered',
        subtitle: 'Straight answers about computer repair, phone unlocking, device sales, software development, and web development in Calgary.',
        items: [
          {
            question: 'How much does computer repair cost in Calgary?',
            answer: 'Computer repair in Calgary typically starts at $79 for diagnostics and virus removal, with hardware repairs from $99 plus parts. We provide a free diagnostic assessment with every repair, so you always know the exact cost before we begin.',
          },
          {
            question: 'Where can I get my phone unlocked in Calgary?',
            answer: 'Madny Digital Services unlocks phones from any carrier at our Calgary shop, starting at $29. Carrier unlocking is legal, does not void your manufacturer warranty, and most unlocks are completed the same day, often within the hour.',
          },
          {
            question: 'Do you sell refurbished laptops and phones in Calgary?',
            answer: 'Yes. We stock certified refurbished laptops, desktops, and smartphones from trusted brands, each tested and backed by a warranty. New devices, accessories, and a trade-in program are also available at our Calgary location.',
          },
          {
            question: 'Can I hire a software development company in Calgary for a custom business app?',
            answer: 'Yes. Our Calgary-based software development team builds custom business applications, automation tools, and databases designed around your exact workflow, with a requirements-first approach and testing before every launch.',
          },
          {
            question: 'How much does a website cost from a Calgary web development company?',
            answer: 'Business websites start at $1,499, e-commerce stores from $2,999, and landing pages from $499. Every project includes mobile-responsive design, SEO best practices, and a free consultation to scope your exact needs first.',
          },
        ],
      },
      cta: {
        badge: 'Ready to Get Started?',
        heading: "Let's Fix, Build, or Grow Your Tech Today",
        description: "Whether you need a same-day repair, a new device, or a custom website built for your business, our Calgary team is ready to help. Book online or call us for a free quote.",
        ctaPrimary: 'Book a Repair',
        ctaSecondary: 'Get a Free Quote',
      },
      diagonalBanners: {
        text1: 'Computer Repair Calgary • Cell Phone Repair • Web Development •  ',
        text2: 'Certified Technicians • Same-Day Service • Free Quotes •',
      },
    },
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  console.log('Seeded home page content');

  // ──────────────── ABOUT PAGE ────────────────
  await db.collection('pagecontents').insertOne({
    slug: 'about',
    meta: {
      title: "About Madny Digital Services | Calgary Computer Repair, Phone Repair & Web Development",
      description: "Madny Digital Services is a Calgary, Alberta technology company offering computer repair, cell phone repair and unlocking, device sales, software development, and web development. Expert, highly skilled technicians.",
      keywords: "about madny digital, calgary tech company, computer repair Calgary, web development services Calgary, expert technicians Calgary",
      ogTitle: "About Madny Digital Services | Calgary's Trusted Tech Partner",
      ogDescription: "Expert technicians and developers serving Calgary with computer repair, phone repair, device sales, custom software, and web development since day one.",
    },
    sections: {
      hero: {
        badge: 'About Madny Digital',
        headingPart1: 'Calgary Tech Experts,',
        headingPart2: 'Certified & Local',
        description: "We're a Calgary, Alberta team of certified technicians and developers offering computer repair, cell phone repair and unlocking, device sales, software development, and web development, all under one roof.",
        ctaPrimary: 'Our Projects',
        ctaSecondary: 'Contact Us',
      },
      stats: [
        { value: '500+', label: 'Devices Repaired' },
        { value: '50+', label: 'Web & Software Projects' },
        { value: '1000+', label: 'Happy Customers' },
        { value: '99%', label: 'Repairs Completed On Time' },
      ],
      whyChooseUs: {
        badge: 'The Madny Edge',
        title: 'Certified Technicians, Honest Pricing',
        description: "We combine expert repair skill with modern software and web development, so Calgary residents and businesses get one trusted team instead of juggling five different vendors.",
        features: [
          {
            title: 'Expert Repair Technicians',
            description: 'Our technicians are among the most skilled in Calgary and follow manufacturer repair standards on every computer and phone that comes through our door.',
            metric: '90-Day',
            benefit: 'Warranty on Repairs',
          },
          {
            title: 'Fast, Transparent Service',
            description: 'Every repair starts with a free diagnostic and an upfront price. Most computer repairs finish within 24 to 48 hours, and most phone screen repairs finish while you wait.',
            metric: '24-48h',
            benefit: 'Typical Repair Time',
          },
          {
            title: 'Full-Stack Development Team',
            description: 'Beyond repairs, our developers build custom software, business automation tools, and fast, SEO-ready websites for Calgary small businesses, backed by testing before every launch.',
            metric: '<1s',
            benefit: 'Avg. Site Load Time',
          },
        ],
      },
      mission: {
        badge: 'Our Mission',
        title: 'Keeping Calgary Connected and Growing',
        description: "Our mission is to keep Calgary connected by repairing devices fast, selling reliable tech at fair prices, and building software and websites that help local businesses grow, backed by certified technicians and clear, upfront pricing.",
        bulletPoints: [
          'Repair devices right the first time, with a written warranty',
          'Price every job clearly before work begins',
          'Build software and websites that measurably grow your business',
        ],
      },
      vision: {
        badge: 'Our Vision',
        titlePart1: "Calgary's First Call",
        titlePart2: 'for Tech, Every Time',
        description: 'We want to be the first call Calgary residents and business owners make, whether a laptop screen cracks, a phone needs unlocking, or a business needs a custom website, backed by the same certified, local team every time.',
        pillars: [
          { label: 'Certified Technicians' },
          { label: 'Upfront Pricing' },
          { label: 'Local to Calgary' },
          { label: 'Warrantied Work' },
        ],
      },
      process: {
        badge: 'Our Process',
        title: 'How We Handle Every Project',
        description: 'A clear, consistent process for repairs, device sales, and custom software or web development, so you always know what happens next.',
        steps: [
          {
            step: '01',
            title: 'Free Diagnostic or Discovery Call',
            description: 'For repairs, we run a free diagnostic and quote the fix upfront. For software and web projects, we start with a free consultation to understand your goals and requirements.',
            duration: 'Same day',
            deliverables: ['Upfront repair quote or project scope', 'Clear timeline', 'No-obligation estimate'],
          },
          {
            step: '02',
            title: 'Repair, Design, or Build',
            description: 'Certified technicians repair your device with quality parts, or our developers design and build your software and website using modern, secure technology.',
            duration: '1-8 weeks',
            deliverables: ['Genuine or OEM-quality parts', 'Design mockups for web projects', 'Progress updates throughout'],
          },
          {
            step: '03',
            title: 'Testing & Quality Check',
            description: 'Every repair is cleaned and function-tested before pickup. Every software and web project goes through structured testing before launch to catch issues early.',
            duration: '1-2 days',
            deliverables: ['Full functionality test', 'Cross-device and browser testing', 'Security and performance review'],
          },
          {
            step: '04',
            title: 'Delivery & Ongoing Support',
            description: 'Pick up your repaired device or launch your new software and website, backed by our warranty on repairs and ongoing maintenance plans for web and software clients.',
            duration: 'Ongoing',
            deliverables: ['90-day repair warranty', 'Launch support and training', 'Optional maintenance plan'],
          },
        ],
      },
      faq: {
        badge: 'Frequently Asked Questions',
        title: 'Getting to Know Madny Digital',
        subtitle: 'Common questions about who we are and how we work, before you book a repair or start a project.',
        items: [
          {
            question: 'Is Madny Digital Services a real Calgary company?',
            answer: 'Yes. Madny Digital Services is based in Calgary, Alberta, with a physical shop serving local residents and businesses. We offer computer repair, phone repair, device sales, software development, and web development under one roof.',
          },
          {
            question: 'Are your technicians experienced?',
            answer: 'Yes. Our repair technicians are among the most skilled in Calgary, and our developers follow modern software and web development standards. Every repair and project is backed by testing and a clear warranty.',
          },
          {
            question: 'Do you serve areas outside Calgary, like Airdrie or Cochrane?',
            answer: 'Yes. While our shop is based in Calgary, we regularly serve customers and businesses in Airdrie, Cochrane, and surrounding areas for repairs, device sales, and web or software development projects.',
          },
          {
            question: 'What makes Madny Digital different from other repair shops or agencies?',
            answer: 'We combine certified device repair with software and web development in one company. Instead of hiring separate vendors, Calgary businesses can get a website built and their office computers repaired by the same trusted team.',
          },
        ],
      },
      cta: {
        badge: 'Ready to Get Started?',
        heading: 'Ready to Work With a Team You Can Trust?',
        description: "Book a repair, browse our devices, or get a free consultation for your software or web project. Our Calgary team replies within one business day.",
        ctaPrimary: 'Book a Repair',
        ctaSecondary: 'Schedule a Call',
      },
    },
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  console.log('Seeded about page content');

  // ──────────────── CONTACT PAGE ────────────────
  await db.collection('pagecontents').insertOne({
    slug: 'contact',
    meta: {
      title: "Contact Us | Madny Digital Services | Get In Touch",
      description: "Have a project in mind? Contact Madny Digital Services for web development, e-commerce solutions, and digital marketing. Get a reply within 24 hours.",
      keywords: "contact madny digital, get in touch, project inquiry, web development quote, calgary digital agency contact",
      ogTitle: "Contact Madny Digital Services",
      ogDescription: "Have a project in mind? We'd love to hear about it. Let's discuss how we can help bring your vision to life.",
    },
    sections: {
      hero: {
        badge: "Let's Build Something Amazing",
        headingPart1: 'Get In',
        headingPart2: 'Touch',
        description: "Have a project in mind? We'd love to hear about it. Let's discuss how we can help bring your vision to life.",
        benefits: [
          { title: 'Quick Response', description: 'Get a reply within 24 hours' },
          { title: 'Your Data is Safe', description: 'We respect your privacy' },
          { title: 'Global Support', description: 'Available worldwide' },
        ],
      },
      contactInfo: [
        {
          title: 'Email Us',
          value: 'madny786@hotmail.com',
          description: 'Drop us a line anytime',
          link: 'mailto:madny786@hotmail.com',
        },
        {
          title: 'Call Us',
          value: '+1 (403) 708-8214',
          description: 'Mon-Sat 11am-7pm, Sun 12pm-5pm',
          link: 'tel:+14037088214',
        },
        {
          title: 'Visit Us',
          value: 'Calgary, AB',
          description: '#216, 55 Westwinds Cres NE, T3J 5H2',
          link: '#',
        },
      ],
      form: {
        badge: 'Send us a Message',
        title: 'Tell Us About Your Project',
        description: "Fill out the form below and we'll get back to you within 24 hours",
        privacyText: 'By submitting this form, you agree to our privacy policy',
      },
      responseProcess: {
        badge: 'What Happens Next?',
        title: 'Our Response Process',
        steps: [
          {
            step: '01',
            title: 'We Review Your Message',
            description: 'Our team carefully reads your inquiry and identifies the best person to help you.',
          },
          {
            step: '02',
            title: 'Initial Response',
            description: "You'll hear back from us within 24 hours with next steps or answers to your questions.",
          },
          {
            step: '03',
            title: "Let's Connect",
            description: "We'll schedule a call to discuss your project in detail and provide a custom proposal.",
          },
        ],
      },
    },
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  console.log('Seeded contact page content');

  // ──────────────── PROJECTS PAGE ────────────────
  await db.collection('pagecontents').insertOne({
    slug: 'projects',
    meta: {
      title: "Our Projects | Madny Digital Services | Portfolio Showcase",
      description: "Discover cutting-edge digital solutions built by Madny Digital Services. Browse our portfolio of web development, e-commerce, mobile app, and SaaS projects.",
      keywords: "portfolio, web projects, digital projects, case studies, madny digital portfolio",
      ogTitle: "Our Amazing Work | Madny Digital Services",
      ogDescription: "Discover cutting-edge digital solutions that transform businesses and delight users.",
    },
    sections: {
      hero: {
        badge: 'Portfolio Showcase',
        headingPart1: 'Our',
        headingHighlight: 'Amazing',
        headingPart2: 'Work',
        description: 'Discover cutting-edge digital solutions that transform businesses and delight users',
        stats: [
          { label: 'Projects', value: '50+' },
          { label: 'Clients', value: '200+' },
          { label: 'Rating', value: '4.8' },
        ],
      },
      categories: [
        { id: 'all', name: 'All Projects' },
        { id: 'business', name: 'Business Websites' },
        { id: 'restaurant', name: 'Restaurants & Cafés' },
        { id: 'nonprofit', name: 'Nonprofit & NGO' },
        { id: 'healthcare', name: 'Healthcare' },
        { id: 'automotive', name: 'Automotive' },
        { id: 'renovation', name: 'Renovation & Construction' },
        { id: 'logistics', name: 'Logistics & Delivery' },
      ],
      items: [
        {
          id: "gofast-delivery",
          title: "GoFast Delivery: Same-Day Courier & Fleet Management Platform",
          shortTitle: "GoFast Delivery",
          category: "logistics",
          description: "A full-stack same-day courier platform replacing spreadsheets and phone-based dispatch with live route optimization, real-time tracking, and automated pricing for a multi-city delivery business.",
          longDescription: "GoFast Delivery runs a same-day courier operation across Calgary and surrounding satellite cities, and needed to move off manual dispatch, since drivers were coordinated by phone calls, prices were worked out by hand, and customers had zero visibility into where their package was. I built them a complete operations platform with three connected portals (Admin, Driver, Customer) on Next.js, backed by MongoDB, that turns the whole delivery lifecycle, from booking and pricing to route planning, live tracking, and invoicing, into one automated system.\n\nThe hardest problem was route optimization at scale: a dispatcher can hand-assign a handful of stops, but not efficiently sequence 50-150+ pickups and dropoffs across a fleet while respecting pickup-before-dropoff pairing, live traffic, and mid-shift changes. I built a hybrid routing engine, pairing Google Maps for geocoding, address autocomplete, and turn-by-turn navigation with OpenRouteService/Vroom for stop-sequence optimization, including custom chunking logic to work around the routing engine's real-world request limits so it stays accurate even on large, high-volume routes. When new stops get added mid-route, the driver's live route re-optimizes and pushes to their phone in real time via Pusher, without requiring a restart or manual reshuffle.\n\nOn the business side, I replaced ad hoc, memorized pricing with a zone-based pricing engine (city pairs, weight tiers, automatic hub routing for satellite cities) that both the customer's live quote and the server's final charge run through the same shared calculation, so what a customer sees at checkout is guaranteed to match what gets invoiced. Admins get a full operations dashboard: bulk-assign bookings to drivers, a \"Today's Work\" smart view that surfaces exactly what needs action right now, per-driver performance stats, and built-in PDF invoicing with automated email delivery.\n\nCustomers get self-service booking with map-based pickup/dropoff pins and live price previews, a public tracking page (no login required) with live ETA updates as the driver's route changes, SMS and email confirmations, and the ability to edit or cancel a booking themselves before it's picked up, cutting out a large share of the support calls that used to require a phone call to dispatch.\n\nDrivers get a mobile-first live navigation experience: turn-by-turn voice guidance, an offline-tolerant action queue so a dead zone doesn't lose a completed stop, GPS-based distance tracking for payroll/reporting, and one-tap status updates that immediately reflect on the customer's tracking page and the admin dashboard.",
          image: "/images/projects/gofast-highlight.webp",
          previewImg: "/images/projects/gofast.webp",
          previewImgWidth: 1920,
          previewImgHeight: 12725,
          tags: ["Next.js","React","Node.js","MongoDB","Redis","Google Maps API","OpenRouteService","Pusher","Twilio","Tailwind CSS","PDFKit","JWT Auth"],
          demoUrl: "https://www.gfdelivery.ca",
          githubUrl: "",
          featured: true,
          year: "2026",
          features: [
            "Three role-based portals for Admin, Driver, and Customer, each with tailored dashboards and permissions",
            "Hybrid route optimization engine (Google Maps + OpenRouteService/Vroom) that sequences up to 150+ stops per route with real-time mid-route re-optimization via WebSockets",
            "Turn-by-turn voice navigation for drivers, with speed-scaled announcement timing and an offline-tolerant app that queues actions when signal drops",
            "Zone-based dynamic pricing engine with automatic city-pair rates, weight-based surcharges, and hub routing, shared identically between customer quotes and final billing",
            "Public, no-login package tracking page with live status and ETA updates, plus self-service customer booking, editing, and cancellation",
            "Admin operations dashboard with bulk driver assignment, a \"Today's Work\" smart view, automated PDF invoicing, and per-driver performance analytics"
          ],
          projectImpact: {
            "title": "From Phone-Based Dispatch to a Self-Running Delivery Operation",
            "description": "GoFast Delivery went from coordinating every pickup by phone and pricing deliveries by memory to a system where routes optimize themselves, prices are calculated consistently every time, and customers can track and manage their own bookings without calling in. Dispatchers now manage the whole day from one \"Today's Work\" view instead of cross-referencing spreadsheets, drivers get optimized routes with live re-planning instead of static lists, and the business has a real audit trail of every booking, price, and invoice, instead of tribal knowledge."
          },
        },
        {
          id: "aero-sign-print",
          title: "Aero Sign & Print: Signage & Printing Company Website",
          shortTitle: "Aero Sign & Print",
          category: "business",
          description: "A full-scale marketing website for a Calgary signage and printing company, turning 7 sprawling service lines and hundreds of past jobs into an organized, lead-generating web presence.",
          longDescription: "Aero Sign & Print offers a huge range of services, including 3D channel lettering, pylon signs, LED displays, vehicle wraps, commercial printing, and more, but their online presence couldn't keep up. Customers had no easy way to browse specific services, compare options, or see real past work before calling, which meant lost leads to competitors with clearer websites and every inquiry starting from scratch on the phone.\n\nI built a Next.js marketing site structured around how customers actually shop for signage: browse by category, drill into a specific service, see the sub-types and materials available, view a gallery of real completed installations, then request a quote, all without leaving the flow. Dynamic routing powers individual pages for every service and sub-service, backed by a structured content model so the team can add new services or portfolio photos without touching code. Each service page follows a consistent pain-point → solution → process → proof structure (problem framing, features, design/manufacture/install process, and a gallery of real jobs), so every page does the selling on its own instead of relying on a salesperson to fill in the gaps.\n\nThe result is a site that reads as a serious, established local business: fast, animated, mobile-first, and set up to convert visitors into quote requests instead of bounces.",
          image: "/images/projects/aero-sign-highlight.webp",
          previewImg: "/images/projects/aero-sign.webp",
          previewImgWidth: 1920,
          previewImgHeight: 12321,
          tags: ["Next.js","React","Tailwind CSS","Framer Motion","Swiper"],
          demoUrl: "https://www.aerosign.ca",
          githubUrl: "",
          featured: false,
          year: "2025",
          features: [
            "Dynamic service architecture: category → service → sub-type pages generated from a single structured data source, no hardcoded pages per service",
            "7 major service categories covering 30+ individual offerings, from 3D channel lettering to vehicle wraps to web design",
            "Dedicated service detail pages with consistent problem/solution framing, feature lists, and a 3-step design-manufacture-install process breakdown",
            "Image gallery sliders showcasing real completed projects per service, building trust through proof of past work",
            "Fully responsive, animated UI (Framer Motion) with a custom brand-color system and sticky navigation with dropdown mega-menu for fast discovery",
            "Testimonials carousel, stats section, and multi-slide animated hero, with a structured contact flow driving toward quote requests"
          ],
          projectImpact: {
            "title": "From Scattered Services to a Structured Sales Funnel",
            "description": "Replaced an unclear, hard-to-navigate service list with a self-service browsing experience that lets customers find the exact signage solution they need, see proof it's been done before, and reach out with confidence, reducing unqualified calls and giving the business a website that matches the scale and professionalism of its actual work."
          },
        },
        {
          id: "sharaf-cleaning",
          title: "Sharaf Cleaning: Local Service Business Website & Lead Engine",
          shortTitle: "Sharaf Cleaning",
          category: "business",
          description: "A conversion-focused website for a Calgary-area cleaning company, built to turn visitors into booked quotes instead of just describing the business.",
          longDescription: "The client offered eight distinct cleaning services across nine cities but had no real website to show for it, just word of mouth and no way to capture a lead outside a phone call. Prospective customers had no way to compare services, see real results, or ask for a quote without picking up the phone, so inquiries were being lost outside business hours and to competitors with a stronger online presence.\n\nI designed and built a full marketing site on Next.js with a dedicated landing page for each of the eight services (residential, regular/recurring plans, commercial, move-in/move-out, deep cleaning, post-construction, pet-friendly, and garbage removal add-on), each with its own scope breakdown, process steps, and service-specific FAQ to answer objections before they became a support call. An interactive before/after slider lets visitors drag to compare real cleaning results instead of reading a bulleted claim. The core conversion path is a validated quote-request form with multi-service selection, matching client- and server-side validation, and an automated notification email so the client gets a fully-formatted lead the moment someone submits, with no manual monitoring required. The whole experience runs on a component system built for reuse across service pages rather than one-off layouts, keeping every page consistent and easy to extend as new services or cities get added.",
          image: "/images/projects/sharaf-cleaning-highlight.webp",
          previewImg: "/images/projects/sharaf-cleaning.webp",
          previewImgWidth: 1920,
          previewImgHeight: 12298,
          tags: ["Next.js","React","Tailwind CSS","Node.js","Nodemailer"],
          demoUrl: "https://sharafcleaning.ca",
          githubUrl: "",
          featured: false,
          year: "2026",
          features: [
            "8 dedicated service landing pages, each with its own scope, step-by-step process, and FAQ content",
            "Validated quote-request form with multi-service selection and matching client + server validation",
            "Automated, formatted email notification sent to the business on every form submission",
            "Interactive drag-to-compare before/after slider for real job photos",
            "Service-area coverage display across 9 cities in the Calgary region",
            "Reusable component system (cards, sections, service menu) driving every page from shared data, with a fully responsive, accessible layout"
          ],
          projectImpact: {
            "title": "From word-of-mouth to a self-serve lead channel",
            "description": "Replaced a phone-only intake process with a self-serve site where visitors can research the exact service they need, see real before/after results, and submit a fully-detailed quote request in under a minute, with the client notified by email instantly instead of relying on missed calls."
          },
        },
        {
          id: "hot-and-cool-hvac",
          title: "Hot and Cool HVAC: Calgary Heating, Cooling & Plumbing Website",
          shortTitle: "Hot and Cool HVAC",
          category: "business",
          description: "A full local-service website for a Calgary HVAC & plumbing company, built to turn searches into booked jobs with 20 dedicated service pages, an SEO layer that gets found on Google, and a quote form that converts visitors into leads without them ever picking up the phone.",
          longDescription: "Hot and Cool HVAC needed more than a brochure site. As a home-services business, their revenue depends entirely on showing up when someone searches 'furnace repair Calgary' at 2am in January, and then giving that person an easy way to reach them. The old approach (a generic one-page site listing services in a bullet list) meant they were invisible on Google for anything specific, and every lead had to call in, which loses cold, comparison-shopping traffic.\n\nI rebuilt the site from the ground up on Next.js 16 as a lead-generation engine, not just a digital brochure. Instead of one generic 'services' page, every single service, including furnace repair, AC installation, drain cleaning, tankless water heater repair, and 17 others, got its own dedicated landing page with real, specific content (symptoms, causes, process, FAQs) targeted at the exact terms homeowners actually search. Each page carries its own SEO metadata and Schema.org structured data (Service, FAQPage, LocalBusiness, Breadcrumb) so Google can surface rich results instead of a plain blue link.\n\nOn the conversion side, I replaced 'call us' with a multi-select quote request form: a homeowner can tick every problem they have (e.g. furnace repair + drain cleaning) and submit their address and notes in one go. That request is validated server-side and delivered straight to the business's inbox by a custom Node/Nodemailer backend, formatted as a ready-to-action email. A floating WhatsApp/social bar, a limited-time deals section, a coverage-area map for their 8 service cities, and a testimonials/gallery section round out the trust-building side, so visitors don't have to leave the page to check if this business is legitimate before contacting them.\n\nThe result is a site that works as hard as a salesperson: it ranks for long-tail, high-intent searches across three trades (heating, cooling, plumbing), answers the visitor's exact question the moment they land, and converts that visit into a lead the owner can act on within minutes, even while they're out on a job.",
          image: "/images/projects/hotncool-highlight.webp",
          previewImg: "/images/projects/hotncool.webp",
          previewImgWidth: 1920,
          previewImgHeight: 13667,
          tags: ["Next.js 16","React 19","Tailwind CSS v4","Node.js","Nodemailer","Motion","JSON-LD / Schema.org","SEO"],
          demoUrl: "https://www.hotandcoolhvac.ca",
          githubUrl: "",
          featured: true,
          year: "2026",
          features: [
            "20 dedicated, SEO-written service pages (heating, cooling, plumbing) instead of one generic services list, each targeting its own search intent with symptoms, causes, process, benefits, and FAQs",
            "Structured data (JSON-LD) for LocalBusiness, Service, FAQPage, and Breadcrumbs on every page to win rich results in Google search",
            "Multi-select quote request form with a custom server-validated contact API (pattern checks, header-injection-safe sanitization) backed by a Node/Nodemailer email pipeline",
            "Dynamic sitemap, robots.js, manifest, and auto-generated Open Graph image for full technical SEO coverage out of the box",
            "Deals/promotions section and a coverage-area section listing all 8 serving cities, reinforcing local relevance for local-pack SEO",
            "Floating WhatsApp + social contact widget, photo gallery, testimonials, and team page, in a fully responsive, animated UI (Motion) on Next.js 16"
          ],
          projectImpact: {
            "title": "From invisible brochure site to a 24/7 lead-generation channel",
            "description": "By replacing one generic services page with 20 search-optimized landing pages and a frictionless multi-service quote form, the business went from relying solely on phone calls and word-of-mouth to capturing leads directly from organic search, any time of day, for any of the three trades they offer. The structured SEO foundation (schema markup, sitemap, per-service metadata) positions every page to compete for its own high-intent keyword instead of one page competing for everything and ranking for nothing."
          },
        },
        {
          id: "voice-of-kids-society",
          title: "Voice of Kids Society: Nonprofit Website for a Child Welfare Organization",
          shortTitle: "Voice of Kids Society",
          category: "nonprofit",
          description: "A fast, content-first website for an Ethiopia-based children's charity, built to turn visitor trust into sponsors, donors, and volunteers.",
          longDescription: "Voice of Kids Society (VOKS) is a community-based nonprofit supporting orphaned and vulnerable children in Tembaro, Central Ethiopia. Before this project, the organization had no real digital presence to explain its mission or give supporters a credible way to get involved, a serious handicap for a charity that depends entirely on sponsors, donors, and partners trusting it enough to send money and volunteer time to a small organization abroad.\n\nThe brief called for a full multi-page site (Home, About, six Program pages, Contact) that reads less like a brochure and more like a case for support: clearly naming the problem, showing exactly how VOKS responds to it, and making every page end in a specific next action rather than a vague 'learn more.'\n\nI built the site on Next.js (App Router) with a data-driven architecture: each of the six programs (Education, Nutrition, Health & Well-being, Child Protection & Safe Housing, Life Skills, Community & Sponsorship) is a content object rendered through one shared dynamic template, so adding or editing a program never touches page code, just the data file. This kept the six program pages fully consistent in structure and tone while letting each one tell its own pain-point-to-response-to-impact story.\n\nThe other half of the job was making the site trustworthy where it counts: the contact form. I replaced a bare mailto-style form with a properly validated submission pipeline, with client-side and server-side validation kept in sync, a honeypot field to silently drop bot spam instead of erroring on it, control-character stripping to block email header-injection attacks, and a branded HTML email notification (via Nodemailer/Gmail) so inquiries arrive formatted and readable instead of as raw text. It's a small piece of the site, but it's the one place money and volunteer sign-ups actually enter the organization, so it got the same rigor as a production SaaS form.\n\nThe result is a lightweight, image-optimized (WebP throughout), accessible site that a small nonprofit can actually maintain: no CMS to pay for, no page builder lock-in, just structured data files a non-developer can be shown how to edit safely.",
          image: "/images/projects/voice-of-kids-highlight.webp",
          previewImg: "/images/projects/voice-of-kids.webp",
          previewImgWidth: 1920,
          previewImgHeight: 12496,
          tags: ["Next.js","React","Node.js","Nodemailer","Tailwind CSS"],
          demoUrl: "",
          githubUrl: "",
          featured: false,
          year: "2026",
          features: [
            "Six dynamic program pages (Education, Nutrition, Health, Protection, Life Skills, Sponsorship) driven from a single shared template, so no code changes are needed to add or edit a program",
            "Pain-point-first content structure on every page: the challenge children face, how VOKS responds, and a specific call to action, instead of generic mission-statement copy",
            "Secure contact form with matching client- and server-side validation, a honeypot spam field, and header-injection protection stripping control characters from input",
            "Branded HTML + plain-text email notifications for every inquiry, sent via Nodemailer, so staff get a readable, formatted message instead of raw form data",
            "Fully responsive layout with WebP-optimized imagery across hero, about, and program sections for fast load times on low-bandwidth connections",
            "Reusable UI component library (Button, Select, FAQ accordion, program cards) shared across all pages for visual consistency"
          ],
          projectImpact: {
            "title": "From an Empty Digital Footprint to a Credible Case for Support",
            "description": "VOKS went from having no meaningful web presence to a site built specifically to convert visitor empathy into action, whether sponsorships, donations, volunteers, or partnerships, while giving the organization a maintainable, dependency-light codebase it can grow with as new programs and needs emerge."
          },
        },
        {
          id: "danda-homes",
          title: "Danda Homes: Home Renovation Company Website",
          shortTitle: "Danda Homes",
          category: "renovation",
          description: "A high-converting marketing website for a home renovation contractor, built to turn visitors into booked consultations with a fast, animated, mobile-first experience.",
          longDescription: "Danda Homes is a home renovation and remodeling contractor that needed more than a digital brochure: they needed a website that could actually sell. Contractors in this space lose leads for the same reasons every time: slow, template-y sites that don't build trust, no clear way to showcase past work, and contact forms buried at the bottom of a wall of text.\n\nI designed and built a Next.js site that leads with proof (1000+ projects, 850+ clients, 25 years experience, 4.9-star rating) right in the hero, backs it up with a filterable project gallery so visitors can see real kitchen, bathroom, living room and exterior transformations, and removes every bit of friction between 'interested' and 'booked' with a persistent call-to-action and a dedicated consultation form. The result is a site that reads as premium and credible from the first scroll, exactly what a homeowner about to spend $25K–$100K+ on a renovation needs to see before they'll pick up the phone.",
          image: "/images/projects/danda-home-highlight.webp",
          previewImg: "/images/projects/danda-home.webp",
          previewImgWidth: 1920,
          previewImgHeight: 13472,
          tags: ["Next.js","React","Tailwind CSS","Framer Motion","Swiper.js","Lucide Icons"],
          demoUrl: "",
          githubUrl: "",
          featured: false,
          year: "2025",
          features: [
            "Animated hero slider with rotating value propositions, trust badges, and live stats (projects completed, client count, rating) to build instant credibility",
            "Filterable project gallery (Kitchen, Bathroom, Living Room, Exterior) with a lightbox viewer, so prospects can browse work relevant to their own project",
            "Services showcase covering kitchen & bath remodels, room additions/ADUs, electrical & plumbing, flooring & painting, windows & doors, and HVAC, each with its own feature list and CTA",
            "Trust-building 'Why Choose Us' section with licensing, insurance, and satisfaction-guarantee messaging, plus an FAQ accordion pre-answering questions on timelines, pricing, permits, and living on-site during work",
            "Lead-capture contact form paired with direct call/email/visit info and a 24-hour response promise, designed to convert intent into a booked consultation",
            "Fully responsive, animation-rich UI (Framer Motion) with a sticky license badge and social sidebar for persistent trust signals on mobile"
          ],
          projectImpact: {
            "title": "From Generic Contractor Page to a Lead-Generation Engine",
            "description": "Home renovation is a high-ticket, high-trust purchase, and most contractor websites fail because they look interchangeable and give visitors no reason to believe this company is the safe choice. This build solves that directly: proof-first hero, real project galleries instead of stock-photo promises, objection-crushing FAQs, and a frictionless path to a free consultation at every scroll depth. The site doesn't just describe the business, it's structured around the exact decision path a homeowner takes before hiring a contractor, turning passive visitors into qualified leads."
          },
        },
        {
          id: "ay-cabinets",
          title: "A&Y Cabinets LTD: Custom Kitchen & Cabinetry Website",
          shortTitle: "A&Y Cabinets",
          category: "renovation",
          description: "A lead-generation website for a Calgary custom cabinetry company, built to replace a static online brochure with a fast, service-driven site that turns visitors into qualified quote requests.",
          longDescription: "A&Y Cabinets LTD needed more than a digital business card. With 7 distinct services and 2 client segments (residential and commercial), their old setup couldn't clearly show the right offer to the right visitor, and every inquiry meant a phone tag before anyone even knew what the customer wanted.\n\nI built a Next.js site structured around that exact problem: dedicated, template-driven service and industry pages so each offering, including cabinet refinishing, door replacement, full kitchen builds, countertops, and bathroom remodels, gets its own detailed page with process steps, benefits, and features, instead of being buried in one long homepage. The centerpiece is a contact flow that does the pre-qualification work automatically: visitors can attach photos of their current kitchen directly in the form, and submissions are emailed instantly via a Nodemailer API route as a formatted, branded HTML email with attachments included, so the team opens their inbox to a ready-to-quote lead with visual context, not a vague message they have to chase down. The result is a site that sells the breadth of the business (residential vs. commercial, 7 services, real project stats) while making the most important action, getting a quote, effortless for the visitor and low-friction for the business to act on.",
          image: "/images/projects/ay-kitchen-highlight.webp",
          previewImg: "/images/projects/ay-kitchen.webp",
          previewImgWidth: 1757,
          previewImgHeight: 16383,
          tags: ["Next.js","React","Tailwind CSS","Nodemailer","Vercel"],
          demoUrl: "",
          githubUrl: "",
          featured: true,
          year: "2026",
          features: [
            "Dynamic service pages generated from a single data source: 7 services (cabinet refinishing, door replacement, painting, full kitchen design & installation, countertops & storage, bathroom renovation) each with their own process, benefits, and feature breakdown",
            "Segmented industry pages for Residential vs. Commercial clients, so messaging and stats speak directly to each audience",
            "Photo-attached contact form: customers upload images of their space right from the inquiry form",
            "Automated branded HTML email notifications via Nodemailer, delivering leads with attachments straight to the business inbox",
            "Portfolio/gallery showcase of completed projects to build trust before the visitor ever calls",
            "Fully responsive, animated UI with a WhatsApp click-to-chat button for instant, low-friction contact alongside the form"
          ],
          projectImpact: {
            "title": "From Generic Inquiries to Quote-Ready Leads",
            "description": "By letting customers attach photos and by routing every submission into a formatted, instantly-delivered email, the site turns a cold 'contact us' message into a lead the team can actually quote on sight, cutting the back-and-forth that used to happen before a project could even start."
          },
        },
        {
          id: "rdm-moving-delivery",
          title: "Moving & Delivery Company Website with Smart Multi-Service Quote System",
          shortTitle: "RDM Moving & Delivery",
          category: "logistics",
          description: "A full marketing site for a Calgary logistics company offering moving, junk removal, labour, and delivery services, built around a single quote form that adapts its fields to whatever service the customer picks, plus a full careers pipeline with resume upload and automated emails.",
          longDescription: "The client ran four very different service lines: residential/commercial moving, junk removal, hourly jobsite labour, and same-day delivery, but their old web presence treated every inquiry the same way: one generic contact box. A junk removal customer and a commercial office move need completely different information to get an accurate quote (a pickup address and property type vs. a junk type and volume vs. nothing but a message), so every lead that came in was incomplete. The team was manually calling people back just to ask basic questions before they could even quote the job, and that back-and-forth was costing them bookings to faster-moving competitors.\n\nOn top of that, hiring was running entirely through email. Candidates would send resumes as attachments with no structure, no confirmation they'd been received, and no consistent record of which role they'd applied for. Applicants were left wondering if their application had gone anywhere, and the office had to manually sort incoming mail to figure out who applied for what.\n\nI designed and built a service-first website where the quote form itself does the qualifying work. Pick 'Junk Removal' and the form reveals a junk-type selector and pickup address; pick 'Commercial Moving' and it asks for a moving date, property type, pickup, and drop-off instead, with each service branch validated independently on both the client and the server, so no incomplete or malformed lead reaches the inbox. Every service also got its own dedicated landing page (hero, highlights, FAQs, and cross-links to related services) so paid traffic and SEO could land visitors on a page that speaks directly to the job they need done, rather than a generic homepage.\n\nFor hiring, I built a full application flow: a careers page listing open roles pulled from a shared job data source, an application form with resume upload (PDF-only, size-validated), and a two-sided email system where the employer gets a formatted notification with the resume attached, and the applicant automatically receives a branded confirmation email explaining exactly what happens next. That single change turned a black-box hiring process into one candidates could trust, without adding any manual admin work.\n\nThe result is a site that qualifies its own leads before they hit the owner's inbox, routes each visitor to service-specific content that converts better than a generic page, and runs its hiring pipeline on autopilot, all from a single codebase the client can extend as they add new services or open new roles.",
          image: "/images/projects/rdm-highlight.webp",
          previewImg: "/images/projects/rdm.webp",
          previewImgWidth: 1920,
          previewImgHeight: 10913,
          tags: ["Next.js","React","Tailwind CSS","Motion (Framer Motion)","Node.js","Nodemailer","Vercel"],
          demoUrl: "https://www.rdmenterprise.ca",
          githubUrl: "",
          featured: false,
          year: "2026",
          features: [
            "Adaptive multi-service quote form: fields change based on the selected service (moving, junk removal, labour, delivery), with dual-layer client- and server-side validation",
            "Dedicated landing page per service with hero, highlights, FAQs, and related-service cross-links, generated from a single shared data source",
            "Careers portal with job listings and a PDF resume upload application form, backed by automated two-way hiring emails to employer and applicant",
            "Branded HTML email templates for both quote requests and job applications, built to render correctly across email clients",
            "Interactive service-area map with scroll-triggered animations (hero, stats, cards, form) built with Motion for a polished, modern feel",
            "Fully responsive, mobile-first layout with a sticky nav and slide-out menu, plus SEO fundamentals like dynamic sitemap and per-page metadata"
          ],
          projectImpact: {
            "title": "From generic inquiries to pre-qualified, service-ready leads",
            "description": "By replacing one static contact form with a service-aware quote system, every inquiry now arrives with the exact details needed to quote it, with no follow-up calls just to gather basic information. Pairing that with dedicated per-service landing pages gives the client pages that speak directly to what each visitor is looking for, and the automated hiring pipeline turned a manual, opaque application process into a fast, trustworthy candidate experience, all without adding staff overhead."
          },
        },
        {
          id: "nad-south-sudan",
          title: "NGO Trust & Credibility Website for a South Sudan Development Organization",
          shortTitle: "NAD South Sudan",
          category: "nonprofit",
          description: "A modern, trust-first website for a community development organization working across 9 sectors in South Sudan, built to turn a dense internal profile document into a clear, donor-ready digital presence.",
          longDescription: "The client, a registered development organization operating in one of South Sudan's hardest-to-reach regions, ran programs across nine sectors: peacebuilding, food security, GBV prevention, child protection, education, WASH, governance, environment, and health, but had no real website. Their only asset was a dense, unstructured organizational profile document. Donors, partners, and institutions had no fast way to verify who they were, what they actually did, or whether they were credible enough to fund or partner with. That's a critical gap for any NGO: in this sector, trust is decided in the first 10 seconds on the page, and a wall of unstructured text kills that instantly.\n\nThe brief was to turn that profile into an information system, not a brochure, something a donor could scan in under a minute and still trust, and something a community member could use to find the right program. I mapped the source document into a strict content architecture first: extracted every verifiable fact (registration number, registration body, location, mission, vision, values, all 9 program areas with their activities and outcomes) and explicitly flagged anything that wasn't in the source, like hard impact metrics and named contacts, as a placeholder rather than inventing numbers to make the site look more impressive. That distinction mattered: a fabricated stat is a liability for an NGO's credibility the moment a real funder checks it.\n\nOn the design side, I built a light, futuristic-but-restrained UI system: a hero that leads with the organization's registration and location as trust signals before any marketing copy, a scannable trust strip, and a 9-sector program visualization that shows the breadth of work at a glance instead of forcing a scroll through paragraphs. Every program got its own detail page generated from a single structured content source, with sector color, icon, activities, target groups, and outcomes all driven from one data file, so adding or editing a program never means touching layout code. An accordion component handles long-form content (FAQs, program depth) without overwhelming the page, and every section, from hero to footer, was built mobile-first with accessible contrast, keyboard-navigable interactive elements, and alt text throughout.\n\nThe result is a site that does the credibility work an NGO's homepage needs to do: registration proof, clear mission, structured programs, honest impact framing, without a single invented fact, and with a component system the client can extend as real impact data and media become available.",
          image: "/images/projects/nad-highlight.webp",
          previewImg: "/images/projects/nad.webp",
          previewImgWidth: 1920,
          previewImgHeight: 11247,
          tags: ["Next.js","React","Tailwind CSS","JavaScript","Responsive Design","Accessibility"],
          demoUrl: "",
          githubUrl: "",
          featured: false,
          year: "2026",
          features: [
            "Content architecture built from a raw organizational profile, with every fact traced back to source and nothing invented",
            "Trust-first hero section surfacing registration number, registering body, and location before any marketing language",
            "Interactive 9-sector program visualization for at-a-glance scanning of the organization's full scope of work",
            "Modular program detail pages (title, problem context, approach, activities, target groups, outcomes, CTA) driven from a single structured content source, not hardcoded per page",
            "Reusable component system, including cards, accordions, trust strip, and CTA bands, built for the client to extend as new programs or content are added",
            "Honest impact framing with a results-in-progress structure, fully responsive mobile-first layout, and clear conversion paths for donors, communities, and institutions"
          ],
          projectImpact: {
            "title": "From a static profile document to a credible digital front door",
            "description": "The organization went from having no verifiable online presence to a structured site where any visitor can confirm registration status, understand the full program scope, and find a clear next step, whether funding, partnership, or contact, within seconds, without a single unverified claim on the page."
          },
        },
        {
          id: "quality-auto-glass",
          title: "Quality Auto Glass Ltd: Calgary Auto Glass Website",
          shortTitle: "Quality Auto Glass",
          category: "automotive",
          description: "A fast, local-SEO-optimized website for a Calgary auto glass company, built to turn searches like \"windshield replacement Calgary\" into booked appointments and phone calls.",
          longDescription: "Quality Auto Glass Ltd is a Calgary-based auto glass company offering windshield replacement, rock chip repair, window tinting, and ADAS calibration. Their biggest pain point wasn't the work, it was getting found and getting contacted. Local service businesses like this compete for high-intent searches (\"windshield replacement Calgary,\" \"rock chip repair near me\") where slow load times, thin content, and generic templates cost real jobs to competitors who show up first and look more credible.\n\nI built the site from scratch on Next.js with a focus on three things that actually move the needle for a local business: speed, structured local SEO, and a frictionless path from visitor to lead. Every service (windshield replacement, rock chip repair, glass tinting, ADAS calibration) has its own dedicated, SEO-written landing page with process steps, FAQs, and service-area targeting instead of being buried in one generic \"services\" block, so each page can independently rank for its own set of local search terms. Schema.org structured data (LocalBusiness + FAQPage) is wired into the site so Google can surface pricing, service areas, hours, and FAQs directly in search results.\n\nOn the conversion side, the multi-step contact form captures exactly what the business needs to quote a job (vehicle year/make/model, glass part, insurance-relevant details like rain sensors or heads-up display) and emails it straight to the owner's inbox as a formatted, ready-to-action lead, with no missed messages and no back-and-forth. A dedicated deals/offers section (e.g. $19.99 rock chip repair, 50% off crack repair) gives the business a lever to run promotions without touching code. The result is a site that reads as trustworthy and established, loads fast on mobile where most of this traffic originates, and is structured so every service and every city they serve has its own shot at ranking, turning organic search traffic into real, quotable leads instead of bounces.",
          image: "/images/projects/quality-auto-glass-highlight.webp",
          previewImg: "/images/projects/quality-auto-glass.webp",
          previewImgWidth: 1920,
          previewImgHeight: 10883,
          tags: ["Next.js","React","Tailwind CSS","Node.js","Nodemailer","SEO","Schema.org","Responsive Design"],
          demoUrl: "https://qualityautoglassltd.com",
          githubUrl: "",
          featured: true,
          year: "2026",
          features: [
            "Dedicated, SEO-written landing page for each service (windshield replacement, rock chip repair, glass tinting, ADAS calibration) with process steps and service-specific FAQs",
            "LocalBusiness and FAQPage schema markup for rich Google search results (hours, pricing, service areas, FAQs)",
            "Multi-step quote/contact form capturing vehicle details, glass part, and insurance-relevant options, with server-side validation and sanitization against spam",
            "Live promotions section (e.g. $19.99 rock chip repair) and city/service-area targeting (Calgary, Airdrie, Cochrane, Okotoks, Chestermere, Strathmore, High River) for regional search visibility",
            "Fully responsive, mobile-first design with scroll animations, sticky navigation, and a mobile drawer menu",
            "Photo gallery, testimonials, and \"why choose us\" sections built to establish trust for a service where customers are handing over their vehicle"
          ],
          projectImpact: {
            "title": "From invisible online to lead-ready",
            "description": "Quality Auto Glass Ltd went from having no dedicated digital presence to a site engineered around how local customers actually search and decide: fast-loading service pages that target specific searches and cities, trust signals up front, and a contact form that delivers quote-ready leads straight to the owner's inbox, turning organic search traffic into phone calls and booked appointments."
          },
        },
        {
          id: "professional-epoxy-flooring",
          title: "Professional Epoxy Flooring: Lead-Generating Business Website",
          shortTitle: "Professional Epoxy Flooring",
          category: "renovation",
          description: "A conversion-focused Next.js website for a Calgary epoxy flooring contractor, built to turn cold visitors into qualified quote requests through fast, data-driven service pages and a friction-free contact flow.",
          longDescription: "Professional Epoxy Flooring is a Calgary-based contractor installing flake, quartz, and metallic epoxy systems for homeowners and commercial clients. Like most trades businesses, their biggest challenge wasn't the work, it was the website. A generic template site meant visitors couldn't tell what made their flooring different, couldn't see real project photos, and had no easy way to ask for a quote without picking up the phone. Every unclear page was a lost lead going to a competitor who answered those questions faster.\n\nI designed and built the site from the ground up as a Next.js App Router application with a single goal: answer every question a homeowner or facilities manager has before they'll trust a contractor, including what do you actually install, is it right for my space, have you done this before, and how fast can I reach you, and then make requesting a quote effortless.\n\nEach flooring system (flake, quartz, metallic) got its own dedicated, SEO-optimized service page generated from a single structured data source, covering what it is, ideal use cases, benefits, the actual install process step-by-step, and a service-specific FAQ, so search traffic lands on a page that already answers their exact question instead of a generic homepage. A 33-photo project gallery with a lightbox viewer lets visitors judge real finished work instead of stock photography. The contact form validates input, shows loading/success/error states, and sends a formatted quote-request email straight to the business owner's inbox via a server-side API route, backed by schema validation so bad or malicious input never reaches the mailer. A floating WhatsApp button and click-to-call number cover the customers who'd rather message than fill out a form.\n\nThe result is a site that reads as an established, trustworthy operator rather than a template, built for fast load times, clean SEO structure (sitemap, robots, per-page metadata, Open Graph images), and a clear path from 'just looking' to 'quote requested' on every single page.",
          image: "/images/projects/pef-epoxy-highlight.webp",
          previewImg: "/images/projects/pef-epoxy.webp",
          previewImgWidth: 1920,
          previewImgHeight: 15311,
          tags: ["Next.js","React","JavaScript","Tailwind CSS","React Hook Form","Zod","Nodemailer","Node.js"],
          demoUrl: "",
          githubUrl: "",
          featured: false,
          year: "2026",
          features: [
            "Data-driven service pages (flake, quartz, metallic epoxy) auto-generated from a single content source, with no duplicated markup or copy",
            "33-photo project gallery with a keyboard- and swipe-navigable lightbox for browsing real completed jobs",
            "Validated quote-request contact form (React Hook Form + Zod) with loading, success, and error states, backed by a server-side API route via Nodemailer",
            "Full on-page SEO: per-page metadata, dynamic sitemap.xml and robots.txt, structured data, and generated Open Graph images",
            "Floating WhatsApp button and click-to-call phone link for visitors who prefer messaging over forms",
            "Animated trust indicators and a 'Why Choose Us' section, in a fully responsive, accessible UI with visible focus states throughout"
          ],
          projectImpact: {
            "title": "From Generic Template to a Site That Sells the Work",
            "description": "Replaced a one-size-fits-all placeholder site with a purpose-built lead engine: dedicated pages per flooring system so search traffic lands on relevant content instead of a homepage, a real project gallery that lets the work speak for itself, and a quote form with zero friction between interest and an email in the owner's inbox, turning more visits into actual booked estimates."
          },
        },
        {
          id: "crystal-decor",
          title: "Crystal Decor: Wedding & Event Planning Website",
          shortTitle: "Crystal Decor",
          category: "business",
          description: "A lead-generating website for a Calgary-based wedding and event decor company, built to turn browsing visitors into booked consultations with a fast, visual, mobile-first experience.",
          longDescription: "Crystal Decor is a wedding and event decor company serving Calgary and the surrounding Alberta region, offering everything from floral design and ceiling draping to full wedding coordination and catering. Before this project, their online presence couldn't do justice to the work: no way for couples to browse real event photos by category, no structured way to request a quote for specific services, and no reliable channel for inquiries to actually reach the team. For a visually-driven business like event decor, that's a direct hit to bookings, since couples shop with their eyes first, and a weak or clunky website loses them to competitors before a phone call ever happens.\n\nWe rebuilt the site from the ground up on Next.js as a fast, image-heavy but performance-conscious experience. The homepage leads with the brand story, service highlights, real project galleries, service-area coverage, and testimonials, the exact trust signals a couple compares before choosing a decorator. A dedicated Projects section organizes hundreds of real event photos into categories (Backdrops, Centerpieces, Table Settings, Ceiling Draping, Entrances, Stairs, Lighting) with a lazy-loaded, paginated gallery and lightbox viewer, so visitors can find inspiration for exactly the element they're planning without wading through an unsorted photo dump. A searchable, filterable Products catalog lets visitors browse rental inventory by category and subcategory.\n\nThe core conversion path, the contact/quote form, was rebuilt to actually work end-to-end: client-side and server-side validation, input sanitization against malformed or malicious submissions, a multi-select field so a couple can flag every service they need (flowers, catering, coordination, etc.) in one inquiry, and a Nodemailer-based email pipeline that delivers a formatted request straight to the business inbox with a working reply-to address. That closed the biggest gap in the original setup: inquiries that previously had nowhere reliable to go now land directly in the owner's inbox, ready to follow up on. A floating WhatsApp button gives visitors a lower-friction path to reach out instantly, which matters for a service where couples often want a quick human answer before filling out a form.\n\nThe result is a site that matches the quality of the events it's selling: fast-loading galleries, a frictionless quote request, and clear service-area and service-line information, built to convert visual browsing into real consultation bookings.",
          image: "/images/projects/crystal-decore-highlight.webp",
          previewImg: "/images/projects/crystal-decore.webp",
          previewImgWidth: 1920,
          previewImgHeight: 8802,
          tags: ["Next.js","React","Tailwind CSS","Nodemailer","Swiper.js","Vercel"],
          demoUrl: "https://www.crystaldecor.ca",
          githubUrl: "",
          featured: false,
          year: "2025",
          features: [
            "Categorized project gallery (Backdrops, Centerpieces, Tables, Ceiling Draping, Entrances, Stairs, Lighting) with lazy loading, pagination, and a full lightbox viewer",
            "Searchable, filterable product catalog with category/subcategory browsing for rental inventory",
            "Working quote-request form with multi-select service picker, client- and server-side validation, and input sanitization",
            "Automated email delivery via Nodemailer with a formatted HTML template and reply-to routing straight to the business inbox",
            "Service-area showcase highlighting every city covered, plus a floating WhatsApp button for instant, low-friction visitor contact",
            "Fully responsive, image-optimized layout for a visually-driven audience, patched against known Next.js/React Server Components CVEs"
          ],
          projectImpact: {
            "title": "From Unreachable Inquiries to a Working Booking Funnel",
            "description": "The previous site left couples with no structured way to browse real event work or request a quote for specific services, and inquiries had no dependable path to the owner's inbox, meaning warm leads were likely getting lost before a conversation could even start. The rebuild fixed that: a category-organized gallery lets visitors find inspiration fast, a validated multi-service quote form captures exactly what a couple needs, and every submission now arrives as a formatted email the team can act on immediately. The site went from a static brochure to an active lead-capture tool for the business."
          },
        },
        {
          id: "comfort-home-care",
          title: "Comfort Home Care Services",
          shortTitle: "Comfort Home Care",
          category: "healthcare",
          description: "A fast, SEO-first marketing website for a Calgary home care agency, built to turn worried families searching at 2am into booked consultations.",
          longDescription: "Comfort Home Care Services needed more than a brochure site: they needed a website that could do the emotional and logistical heavy lifting their front desk couldn't. Families searching for home care are usually in crisis mode: a parent just left the hospital, a dementia diagnosis just landed, and they need trustworthy help fast. The old approach (a generic template site) buried the agency under competitors and gave anxious visitors no clear next step.\n\nI designed and built a purpose-built Next.js site around that reality: a services catalog covering all nine care lines with dedicated dynamic pages, a three-step 'Contact → Assessment → Care Begins' path that removes decision paralysis, and government-program landing pages (Alberta Health Services direct billing and the Veterans Independence Program) so eligible families immediately see there's no red tape for them to navigate. Trust signals, including years in service, families helped, satisfaction rate, and licensing, are surfaced above the fold instead of buried in an About page, and a working-areas carousel makes local relevance obvious for every Calgary-region city they serve.\n\nOn the technical side, the site is built for discoverability and speed: full SEO metadata, Open Graph/Twitter cards, JSON-LD structured data for Organization and LocalBusiness schema, and a generated sitemap so the agency ranks for 'home care Calgary' and city-specific searches instead of relying on paid ads. A dedicated careers page also gives them a self-serve channel for recruiting caregivers, which is normally a slow, manual bottleneck for agencies this size.",
          image: "/images/projects/comfort-home-care-highlight.webp",
          previewImg: "/images/projects/comfort-home-care.webp",
          previewImgWidth: 1920,
          previewImgHeight: 12850,
          tags: ["Next.js","React","Tailwind CSS","Framer Motion","Swiper","JSON-LD","SEO"],
          demoUrl: "",
          githubUrl: "",
          featured: false,
          year: "2026",
          features: [
            "Dynamic services catalog with 9 dedicated care-service pages (dementia, nursing, palliative, respite, diabetes care, and more)",
            "Government-program landing pages for Alberta Health Services (CDHCI) direct billing and the Veterans Independence Program (VIP), each with its own eligibility and onboarding flow",
            "Clear 3-step engagement process (Contact → Assessment & Planning → Care Begins) to reduce decision anxiety",
            "Trust-building stats (years of service, families helped, satisfaction rate) and a local-area carousel covering Calgary, Airdrie, Cochrane, Chestermere, Strathmore, High River and Okotoks",
            "Full SEO layer: metadata templates, Open Graph/Twitter cards, JSON-LD Organization & LocalBusiness schema, and sitemap",
            "Careers page for self-serve caregiver recruitment, plus a contact form with service-type selection, file attachments, and blog/FAQ sections for long-tail search traffic"
          ],
          projectImpact: {
            "title": "From invisible to search-ready and lead-ready",
            "description": "Replaced a generic web presence with a locally-optimized, structured-data-backed site that positions the agency to rank for high-intent local searches ('home care Calgary', 'dementia care Alberta') and converts anxious first-time visitors into consultation requests, while giving the agency self-serve pages for government billing programs and hiring, cutting down manual phone/email back-and-forth for common inquiries."
          },
        },
        {
          id: "yyc-cash-for-cars",
          title: "YYC Cash for Cars: Local Lead-Gen Website for a Calgary Car Buying Business",
          shortTitle: "YYC Cash for Cars",
          category: "automotive",
          description: "A conversion-focused website for a Calgary junk & scrap car buying company, built to turn local searches into qualified phone and form leads with instant cash-offer requests, city-specific landing pages, and a fully automated lead-notification pipeline.",
          longDescription: "The client runs a cash-for-junk-cars business in Calgary and needed more than a brochure site: they needed a machine for generating and capturing local leads. Their pain point: most visitors abandon a service business site if they can't quickly tell 'do you serve my area' and 'how much is my car worth,' and every missed or slow-to-answer lead is a car sold to a competitor instead. I designed and built a Next.js site around that problem. Every city they serve (Calgary, Airdrie, Cochrane, Okotoks, Chestermere, High River, Strathmore, Canmore) gets its own dedicated, SEO-optimized landing page with localized copy, neighborhoods served, response times, and page-level metadata and structured data, so the business can rank and convert on 'cash for cars [city]' searches instead of relying on one generic homepage.\n\nThe core conversion tool is a quote-request form that captures vehicle details, reason for selling, and photo uploads, then instantly emails the owner a branded, ready-to-action lead notification (with logo, click-to-call, and click-to-reply built in), turning a form submission into a phone-ready lead within seconds, with no CRM or manual checking required. A floating WhatsApp button gives visitors a second, lower-friction way to reach out instantly. The result is a fast, mobile-first site that functions as an always-on sales rep: it explains the offer, builds trust with a clear 3-step process and service guarantees, and routes every serious visitor straight into the owner's inbox and phone.",
          image: "/images/projects/YYC-Cash-for-Cars-highlight.webp",
          previewImg: "/images/projects/YYC-Cash-for-Cars.webp",
          previewImgWidth: 1920,
          previewImgHeight: 12787,
          tags: ["Next.js","React","Tailwind CSS","Nodemailer","Node.js","SEO","JSON-LD","Vercel"],
          demoUrl: "https://www.yyccash.com",
          githubUrl: "",
          featured: false,
          year: "2026",
          features: [
            "City-specific landing pages (8 service areas) with localized content, dynamic SEO metadata, and per-page Open Graph tags for local search visibility",
            "Instant quote-request form with vehicle details, condition, reason for sale, and multi-image upload, with client-side validation",
            "Automated lead pipeline: form submissions are emailed to the owner as a branded HTML notification with photos attached, click-to-call and click-to-reply actions, and inline logo, with no manual lead checking needed",
            "Local business structured data (JSON-LD / Schema.org AutomotiveBusiness) for stronger local search and map-pack presence, plus Google Tag Manager and GA4 integration for tracking calls, submissions, and traffic sources",
            "Dynamic service pages (junk car buying, scrap car removal) generated from a shared template for easy expansion, with a floating WhatsApp click-to-chat button for instant, low-friction contact",
            "3-step 'how it works' process section, vehicle-type coverage, service area map, testimonials, and FAQ, in a fully responsive, mobile-first layout built for on-the-go visitors"
          ],
          projectImpact: {
            "title": "From Missed Calls to Captured Leads",
            "description": "Replaced a single generic homepage with a city-by-city SEO structure and an automated, photo-rich lead notification system, so every local search has a dedicated landing page to convert on, and every form submission reaches the owner as a call-ready lead in seconds instead of sitting unread."
          },
        },
        {
          id: "fritou-chicken-pizza",
          title: "Fritou Chicken and Pizza",
          shortTitle: "Fritou Chicken and Pizza",
          category: "restaurant",
          description: "A multi-location website for a Calgary halal fried chicken restaurant, built to turn hungry visitors into online orders in seconds, not scrolls.",
          longDescription: "Fritou Chicken and Pizza runs two Calgary locations, each with its own hours, delivery partners, and online ordering system, but the client only wanted to manage one website. The real challenge was speed of trust and speed of action: fast food customers decide in seconds, and every extra click between 'I'm hungry' and 'order placed' is a lost sale. I built a Next.js site with dynamic location routing so both branches share one codebase while serving tailored content, including the correct address, hours, and delivery options per location, with zero duplicated pages to maintain.\n\nOn the front end, the homepage leads with a location picker so customers self-route instantly, then every page reinforces trust (100% Halal certification, 10K+ customers, 5-star ratings) before pushing straight into an 'Order Now' button wired directly to the client's live ordering platform. The result is a fast, visually rich experience that still puts ordering one tap away on every section, from the hero to the combo deals to the final footer CTA.",
          image: "/images/projects/FRITOU-CHICKEN-highlight.webp",
          previewImg: "/images/projects/FRITOU-CHICKEN.webp",
          previewImgWidth: 1844,
          previewImgHeight: 16383,
          tags: ["Next.js","React","Tailwind CSS","Dynamic Routing","Responsive Design"],
          demoUrl: "",
          githubUrl: "",
          featured: false,
          year: "2025",
          features: [
            "Dynamic multi-location routing: one codebase serves both restaurant branches with location-specific address, hours, and delivery info",
            "Conditional delivery integration, with Uber Eats & DoorDash options shown only for the location that offers them",
            "Direct-to-order CTAs throughout every section, linked straight to the client's live online ordering system",
            "Interactive animated hero with rotating featured dishes and a full menu showcase (best sellers, combo deals, desserts) each with direct order buttons",
            "Halal certification section with trust indicators (customer count, ratings) to build instant credibility",
            "Customer testimonials carousel and embedded Google Maps for each location, in a fully responsive design optimized for mobile ordering"
          ],
          projectImpact: {
            "title": "One Site, Two Locations, Zero Ordering Friction",
            "description": "By unifying two restaurant locations into a single dynamic-routed platform, the client avoids maintaining duplicate websites while giving each branch its accurate hours, address, and delivery options. Every section of the site is built around a single goal, getting a hungry visitor from landing page to placed order in as few clicks as possible, turning the website into an active sales channel instead of a static brochure."
          },
        },
        {
          id: "mr-chai",
          title: "Mr. Chai: Calgary Tea Café Website",
          shortTitle: "Mr. Chai",
          category: "restaurant",
          description: "A fast, SEO-optimized website for a Calgary tea café that turns browsers into walk-ins and phone orders, replacing a slow, generic online presence with a mobile-first site built around the menu, location, and call-to-action.",
          longDescription: "Mr. Chai needed more than a digital business card: they needed a website that could do the job of a host, a menu board, and a marketing team at once. Like most local cafés, their biggest challenge wasn't a lack of great food and chai, it was visibility and conversion: customers searching 'best tea in Calgary' or 'chai near me' had no fast, mobile-friendly way to see the menu, trust the place, and decide to visit before landing on a competitor's page instead. Generic templates and slow-loading sites were costing them foot traffic and phone orders.\n\nI built Mr. Chai a custom Next.js website designed around how hungry, on-the-go customers actually browse: an interactive, filterable menu organized by category (Brunch, Appetizers, Drinks, Desserts) so visitors can find what they want in seconds, a real photo gallery and story section that builds trust before a customer ever walks in, a one-tap 'Call Now' button pinned in the header for instant phone orders, and a contact section with embedded location, hours, and a message form. The whole site was engineered for speed and search visibility, with server-rendered pages, optimized images, and full SEO metadata (Open Graph, Twitter cards, structured keywords) so the café ranks for local searches instead of relying on paid ads alone. The result is a clean, on-brand experience that reduces bounce, answers customer questions before they have to ask, and makes it effortless to go from 'just looking' to 'placing an order.'",
          image: "/images/projects/mr-chai-highlight.webp",
          previewImg: "/images/projects/mr-chai.webp",
          previewImgWidth: 1920,
          previewImgHeight: 6488,
          tags: ["Next.js","React","Tailwind CSS","JavaScript","SEO","Responsive Design"],
          demoUrl: "",
          githubUrl: "",
          featured: false,
          year: "2025",
          features: [
            "Interactive, filterable menu with 35+ items across 4 categories (Brunch, Appetizers & Sides, Hot & Cold Drinks, Desserts) with 'show more' pagination for fast browsing",
            "Mobile-first, fully responsive design with a sticky header and animated slide-in navigation for on-the-go customers",
            "One-tap 'Call Now' button and click-to-call phone link for instant order conversion",
            "Dedicated About, Gallery, and Contact pages, with a customer testimonials section, to build trust and showcase the café's atmosphere",
            "Full technical SEO setup covering meta titles/descriptions, Open Graph and Twitter card previews, keyword targeting, and structured metadata for local search ranking",
            "Optimized, lazy-loaded WebP image delivery for fast page speed, plus social integration linking directly to Facebook, Instagram, and TikTok"
          ],
          projectImpact: {
            "title": "From Invisible to In-Demand",
            "description": "Mr. Chai went from having no real digital storefront to a fast, search-optimized website that puts their full menu, atmosphere, and contact info in front of local customers within seconds, turning online searches into walk-ins and phone orders, and giving the café a professional online presence that matches the quality of what they serve in-store."
          },
        },
        {
          id: "reliable-building-developers",
          title: "Reliable Building Developers: Calgary Renovation Company Website",
          shortTitle: "Reliable Building Developers",
          category: "renovation",
          description: "A high-converting marketing website for a Calgary home renovation contractor, built to turn local search traffic into booked quotes with a fast, SEO-optimized Next.js site.",
          longDescription: "Reliable Building Developers, a Calgary-based renovation contractor offering everything from basement suites to kitchen remodels, needed more than a brochure site: they needed a lead engine. Their old web presence wasn't ranking for local searches, gave visitors no fast way to request a quote, and did nothing to build trust before a homeowner picked up the phone. Homeowners researching a $20k+ renovation want proof of experience, a clear list of services, and an easy way to reach a real person, not a generic template.\n\nI designed and built a fully custom Next.js site from the ground up, structured around how homeowners actually shop for a contractor: browse services by category, see the areas served across Calgary and surrounding towns, check credibility signals (years in business, projects completed, client satisfaction), and request a quote in seconds. Every page, from the 14 individual service detail pages to the dynamic project gallery, was built with local SEO in mind, using city- and service-specific metadata, structured page templates, and Open Graph tags so listings look strong on Google and when shared on social media.\n\nOn the backend, I built a serverless contact API (Next.js route handler + Nodemailer) that accepts multipart form submissions with file attachments, embeds the company logo inline via CID, and delivers a branded HTML email straight to the business inbox, turning every form submission into a ready-to-action lead instead of a plain-text email. A floating WhatsApp button gives mobile visitors an even faster path to a real conversation. The result is a site that's fast (Next.js 15 + Turbopack, image-optimized), fully responsive, and built to keep working as the company adds services or expands to new cities, with no rebuild required, just new entries in a data array.",
          image: "/images/projects/reliable-building-highlight.webp",
          previewImg: "/images/projects/reliable-building.webp",
          previewImgWidth: 1920,
          previewImgHeight: 9931,
          tags: ["Next.js","React","Tailwind CSS","Node.js","Nodemailer","Swiper.js","Vercel","SEO"],
          demoUrl: "https://www.reliablebuildingdevelopers.ca",
          githubUrl: "",
          featured: true,
          year: "2025",
          features: [
            "14 dedicated service pages (kitchen, basement, bathroom, flooring, electrical, framing, driveways, and more) each with SEO-tuned copy and feature breakdowns",
            "Dynamic city/project gallery with before-and-after image comparisons to showcase real completed work",
            "Serverless contact form with file attachments, branded HTML email templates, and inline logo embedding via Nodemailer",
            "Local SEO architecture: per-page metadata, Open Graph/Twitter cards, and a radial 'working areas' map covering Calgary and surrounding cities",
            "Animated trust indicators and one-click WhatsApp/click-to-call buttons for instant mobile lead capture",
            "Fully responsive, dark-mode-aware UI with reusable service/project card components for easy content scaling"
          ],
          projectImpact: {
            "title": "From Invisible Online to Lead-Ready",
            "description": "Replaced a generic web presence with a purpose-built lead generation site, giving a local renovation business a professional, trust-building storefront that converts local search traffic into quote requests, with zero manual work needed to route and format incoming leads."
          },
        },
        {
          id: "restyle-renovation",
          title: "Restyle Renovation: Calgary Home Renovation Company Website",
          shortTitle: "Restyle Renovation",
          category: "renovation",
          description: "A lead-generating marketing website for a Calgary home renovation contractor, built to turn website visitors into booked quote requests with service-specific pages, before/after project galleries, and a zero-friction contact pipeline.",
          longDescription: "Restyle Renovation is a full-service home renovation contractor in Calgary (kitchens, basements, bathrooms, framing, electrical, plumbing, flooring, painting, and more) that had no real digital presence to match the quality of its work. Homeowners researching a renovation want three things fast: proof the contractor is licensed and trustworthy, evidence of past work, and an easy way to ask a question without picking up the phone. Without a proper site, the business was losing that first impression to competitors who showed up better in search and looked more credible online.\n\nI designed and built a fast, SEO-structured Next.js site that solves each of those trust gaps directly. Every one of the 14 services has its own dedicated page with a clear description, feature list, and Calgary-specific context (permits, code requirements, climate considerations) so the content ranks for local search intent instead of competing as one generic page. A dynamic before/after project gallery, filterable by service, lets visitors drag a slider to compare real project photos rather than read vague claims. A working-areas section makes the service radius (Calgary plus Airdrie, Cochrane, Chestermere, Strathmore, High River, Okotoks) explicit for local SEO and visitor confidence.\n\nThe core conversion path is the contact system: a validated multi-file-upload quote request form (so homeowners can attach photos of their space) that posts to a Next.js API route, which emails the lead straight to the business inbox as a branded HTML notification with all attachments included, with no third-party form service and no missed leads sitting in a dashboard nobody checks. The whole site is fully responsive, built on the Next.js App Router with Tailwind CSS for a fast, mobile-first experience, since most local-service searches happen on a phone.",
          image: "/images/projects/restyle-renovation-highlight.webp",
          previewImg: "/images/projects/restyle-renovation.webp",
          previewImgWidth: 1920,
          previewImgHeight: 11610,
          tags: ["Next.js","React","Tailwind CSS","Node.js","Nodemailer","Swiper.js","Vercel"],
          demoUrl: "https://www.restylerenovation.ca",
          githubUrl: "",
          featured: false,
          year: "2025",
          features: [
            "14 dedicated, SEO-optimized service pages (kitchen, bathroom, basement, electrical, plumbing, flooring, painting, framing, and more) instead of one generic services list",
            "Interactive before/after project gallery with drag-to-compare image slider, filterable by service type",
            "Quote request form with drag-and-drop multi-file photo upload, client-side validation, and file-size limits",
            "Serverless API route that emails new leads instantly as a branded HTML notification with attachments included, so nothing sits unseen in a dashboard",
            "Local-area targeting section covering Calgary and six surrounding communities, with structured metadata (Open Graph, Twitter cards) for local search visibility",
            "Fully responsive, mobile-first layout with animated hero carousel, testimonials, and a clear process breakdown"
          ],
          projectImpact: {
            "title": "From invisible to inbound",
            "description": "Replaced a business with no real web presence with a fast, credible site that does the selling before the phone even rings, giving the business a 24/7 channel for homeowners to browse real project results, self-qualify by service, and submit a detailed quote request (with photos) in one step, cutting the back-and-forth normally needed just to understand what a lead wants."
          },
        },
        {
          id: "vip-auto-glass",
          title: "VIP Auto Glass: Calgary Auto Glass Repair & ADAS Calibration",
          shortTitle: "VIP Auto Glass",
          category: "automotive",
          description: "A conversion-focused website for a Calgary auto glass company, built to turn urgent, stressed searches ('my windshield just cracked') into booked jobs, with an embedded instant-quote and insurance-billing flow instead of a static contact form.",
          longDescription: "VIP Auto Glass had 9+ years of local reputation and 5000+ customers, but no site to match it, the kind of gap that quietly costs local service businesses their highest-intent leads. Someone with a cracked windshield is comparing 3-4 shops in the next 10 minutes; if the site is slow, generic, or makes them 'call for a quote,' they bounce to the next result. I designed and built a Next.js site around a single goal: get that visitor from 'I have a problem' to 'quote requested' with as few clicks as possible, on any device, without making them wait for a callback.\n\nThe core problem was the quote flow. Most local auto-shop sites route everyone through a generic contact form or a phone-only CTA, which loses people who'd rather self-serve. I integrated GlassBiller, the industry-standard auto-glass quoting/booking platform, directly into the site as a persistent, always-reachable action (hero, services, footer, contact page) so a visitor can request pricing, submit vehicle/VIN details, and route the job toward insurance direct billing without leaving the page or waiting on a phone call. Insurance billing is highlighted everywhere (ICBC-approved, direct billing, no hidden fees) because that's the #1 objection that stalls a repair decision.\n\nThe second problem was trust at a glance: an unfamiliar visitor has no way to judge a glass shop's quality before the work is done, so the site front-loads proof, including a 9+ years / 5000+ customers / 4.9-star stat banner, certifications (ICBC Approved, OEM Certified, 3M Authorized), a 1-year workmanship guarantee, real testimonials, and a project gallery, right where the decision is being made, not buried on an About page.\n\nEach core service (rock chip repair, windshield replacement, window tinting & ceramic coating, and ADAS calibration) got its own dedicated landing page rather than a shared paragraph, so the site can rank and convert for each search intent separately, including educating visitors on why ADAS recalibration (static vs. dynamic) is a safety-critical step after windshield replacement, a nuance most competitors don't explain at all. The result is a fast, mobile-first, animated experience (Framer Motion, Swiper carousels) that reads as premium and trustworthy rather than templated, while staying laser-focused on one conversion action throughout.",
          image: "/images/projects/vip-auto-glass-highlight.webp",
          previewImg: "/images/projects/vip-auto-glass.webp",
          previewImgWidth: 1920,
          previewImgHeight: 12812,
          tags: ["Next.js","React","Tailwind CSS","Framer Motion","Swiper","GlassBiller API"],
          demoUrl: "https://www.vipglass.ca",
          githubUrl: "",
          featured: true,
          year: "2026",
          features: [
            "Embedded GlassBiller instant-quote widget for self-serve pricing and insurance direct billing, triggered from every major CTA on the site",
            "Dedicated landing pages per service, including Rock Chip Repair, Windshield Replacement, Glass Tinting, and ADAS Calibration, each with tailored copy and CTAs",
            "ADAS calibration education (static vs. dynamic) to build trust around a safety-critical, often-skipped post-replacement step",
            "Trust-building stat banner, certifications grid, and 1-year workmanship guarantee surfaced above the fold, not buried in an About page",
            "Full-width animated hero carousel, customer testimonial carousel, and a categorized before/after project gallery",
            "Click-to-call, WhatsApp, and Google Maps location integration, in a fully responsive, animation-rich UI (Framer Motion, Swiper) built mobile-first"
          ],
          projectImpact: {
            "title": "From 'Call for a Quote' to Self-Serve Booking",
            "description": "Replaced a phone-only, one-size-fits-all inquiry process with an always-visible instant-quote and insurance-billing flow, paired with service-specific landing pages and above-the-fold trust signals, turning high-urgency, comparison-shopping visitors into submitted quotes instead of lost tabs."
          },
        },
        {
          id: "waste-plus-inc",
          title: "Waste Plus Inc: Waste Management & Bin Rental Website",
          shortTitle: "Waste Plus Inc",
          category: "logistics",
          description: "A full-featured marketing website for a Calgary waste management company, built to turn visitors into qualified quote requests with a smart multi-bin booking form and automated email delivery.",
          longDescription: "Waste Plus Inc needed more than a brochure site. As a locally-owned waste management company competing against larger Calgary providers, they needed a way to convert visitors across three very different customer types (homeowners, business owners, and industrial site managers) into real, sales-ready leads. Their old approach relied on visitors calling in and describing their needs verbatim, which meant vague inquiries, back-and-forth phone tag, and lost leads whenever a call was missed.\n\nI designed and built a Next.js marketing site with dedicated service pages for Residential, Commercial, and Industrial waste, each speaking directly to that audience's pain points (missed pickups, overflowing bins, compliance risk, landfill impact), paired with a custom multi-step quote request form. The form is the core of the project: instead of a generic 'message us' box, it lets a prospect add multiple bins to a single request (material type, size, quantity, placement, pickup frequency), attach site photos or existing contract documents, and specify their current contract end date, giving the sales team everything needed to send an accurate quote on the first contact instead of chasing details over email.\n\nSubmissions are converted server-side into a branded, easy-to-scan HTML email (with a structured bin-by-bin table and attachments) delivered straight to the business inbox via Nodemailer, removing the need for a database or CRM integration while still giving the owner a professional, actionable lead notification. The result is a site that looks and feels like a much larger operation, is fully optimized for local SEO (structured metadata, Open Graph, keyword targeting for 'Calgary waste management' and related terms), and gives the client a self-contained lead engine they can run without any third-party form tooling.",
          image: "/images/projects/clean-city-waste-highlight.webp",
          previewImg: "/images/projects/clean-city-waste.webp",
          previewImgWidth: 1920,
          previewImgHeight: 9205,
          tags: ["Next.js","React","Tailwind CSS","Nodemailer","Node.js","SEO"],
          demoUrl: "https://www.wasteplus.ca",
          githubUrl: "https://github.com/madnywebtech786/Cleancitywaste",
          featured: false,
          year: "2026",
          features: [
            "Segmented service pages for Residential, Commercial, and Industrial waste, each with tailored messaging and served industries",
            "Dynamic multi-bin quote request form: add unlimited bins per request with material, size, quantity, placement, and pickup frequency",
            "File attachment support so clients can upload site photos or existing contracts, plus a contract-aware intake flow that captures contract end dates for renewal-timed follow-ups",
            "Server-side form handling with Nodemailer that generates a branded, structured HTML email (including a bin-by-bin breakdown table) sent directly to the business inbox, with full client-side validation",
            "SEO-optimized metadata, Open Graph and Twitter cards, and local keyword targeting for Calgary-based search visibility",
            "Responsive, image-rich UI with a reusable service-card/section component pattern, a click-to-call WhatsApp button, and a reusable dynamic service page template for easy expansion"
          ],
          projectImpact: {
            "title": "From Vague Calls to Sales-Ready Leads",
            "description": "By replacing a simple contact form with a structured, multi-bin quote builder, Waste Plus Inc now receives fully-detailed, ready-to-quote leads instead of vague phone inquiries, cutting the back-and-forth needed to price a job and helping the sales team respond faster and win more business."
          },
        },
        {
          id: "b91-automotive",
          title: "B91 Automotive – Auto Repair & Autobody Shop Website",
          shortTitle: "B91 Automotive",
          category: "automotive",
          description: "A conversion-focused website for a Calgary auto repair & autobody shop, built to turn confused, price-shopping drivers into booked appointments and phone calls.",
          longDescription: "B91 Automotive is a Calgary-based auto repair and autobody shop offering everything from engine diagnostics to insurance-claim collision repair. Before this project, their online presence didn't reflect the range or quality of their work: potential customers had no fast way to understand services, trust the shop's expertise, or take the next step (call, quote, or visit). For a local shop, every visitor who leaves without calling is a lost job.\n\nThe brief was to build a fast, mobile-first marketing site that explains the shop's six core services in plain language, builds trust through real numbers (customers served, hours completed, repairs delivered), and removes every bit of friction between 'I found this site' and 'I picked up the phone.' I built it with Next.js 15 (App Router) and Tailwind CSS 4 for performance and easy long-term maintenance, with a dedicated dynamic route per service so each one is easy to find, read, and share.\n\nKey pain points addressed:\n• Customers couldn't tell what the shop actually did beyond 'auto repair,' solved with a dedicated, keyword-rich page per service (engine & transmission, autobody & paint, insurance claims, windshield repair, new/used parts) explaining exactly what's included and why it matters.\n• Insurance claims are a major source of customer anxiety after an accident, addressed with a dedicated 'Insurance Claims Assistance' service page and messaging that promises to handle the paperwork end-to-end.\n• No clear call-to-action meant lost leads, so every section (hero, about, services, mid-page banner) now ends in a direct 'Call Now' or 'Free Quote' button, plus a floating WhatsApp button and a full contact form with hours, phone, email, and address always visible.\n• No trust signals, so we added a stats bar (1000+ happy customers, 500+ services offered, 2000+ hours of work, 1800+ repairs completed) and a testimonials section so first-time visitors have proof before they call.\n• Generic, low-visibility SEO, fixed by writing unique meta titles, descriptions, keywords, and Open Graph tags targeting 'Calgary auto repair' and 'Calgary autobody' search intent.\n\nThe result is a lightweight, fast-loading site where a visitor can land on any page, understand what the shop offers, and be one tap away from calling, exactly what a local service business needs to turn traffic into booked jobs.",
          image: "/images/projects/b91-automotive-highlight.webp",
          previewImg: "/images/projects/b91-automotive.webp",
          previewImgWidth: 1920,
          previewImgHeight: 9682,
          tags: ["Next.js","React","Tailwind CSS","JavaScript","Swiper.js","Responsive Design","SEO"],
          demoUrl: "",
          githubUrl: "https://github.com/madnywebtech786/B91automotive",
          featured: false,
          year: "2025",
          features: [
            "Six dedicated, SEO-friendly service pages (engine & transmission, autobody & paint, insurance claims, windshield repair, new/used auto & body parts) built on a single dynamic Next.js route",
            "Hero banner with rotating service highlights (Swiper.js) and instant call-to-action buttons for each offer",
            "Trust-building stats section (customers served, services offered, hours worked, repairs completed) to reduce first-visit hesitation",
            "Insurance claims messaging and a dedicated page to directly address a top customer pain point after an accident",
            "Sticky floating WhatsApp button, click-to-call links, and a full contact section with business hours, phone, email, address, and an inquiry form",
            "Customer testimonials and a project gallery, plus on-page SEO (meta titles/descriptions, targeted keywords, Open Graph/Twitter cards) in a fully responsive, mobile-first layout"
          ],
          projectImpact: {
            "title": "From an unclear service list to a lead-generating storefront",
            "description": "By replacing vague messaging with clear, benefit-driven service pages and putting a call-to-action within reach on every screen, the site turns local search traffic into phone calls and quote requests instead of silent bounces, the core metric that matters for a service business like B91 Automotive."
          },
        },
        {
          id: "sidhu-exteriors",
          title: "Sidhu Exteriors: Roofing & Exterior Renovation Website",
          shortTitle: "Sidhu Exteriors",
          category: "renovation",
          description: "A fast, lead-focused marketing website for a roofing and exterior renovation contractor, built to turn local homeowner searches into booked quotes.",
          longDescription: "A roofing and exterior renovation contractor serving Calgary and the surrounding Alberta communities needed more than a digital business card. They needed a website that could actually generate leads. Their old presence (like most small contractor sites) buried services under generic text, gave visitors no clear next step, and did nothing to build trust before a homeowner picked up the phone. For a business that depends on local, high-intent searches like \"roof repair near me,\" that's a direct hit to revenue.\n\nI designed and built a multi-page Next.js site structured entirely around the homeowner's decision path: a service-specific hero carousel that speaks to exactly what they're searching for (roofing, siding, eavestroughs, downspouts), a dedicated service breakdown, a transparent step-by-step process section (request → cost calculation → contract) that removes the biggest hesitation in hiring a contractor, not knowing what happens next, a working-areas showcase that reinforces local trust and SEO relevance across every town served, social proof through client testimonials, and a persistent, low-friction quote form paired with a 'get free quote' CTA repeated in the nav so the ask is never more than one click away. The result is a site that reads less like a brochure and more like a sales funnel: every section exists to move a visitor from 'just browsing' to 'request submitted.'",
          image: "/images/projects/sidhu-exterior-highlight.webp",
          previewImg: "/images/projects/sidhu-exterior.webp",
          previewImgWidth: 1920,
          previewImgHeight: 8701,
          tags: ["Next.js","React","Tailwind CSS","Swiper.js"],
          demoUrl: "https://www.sidhuexteriors.com",
          githubUrl: "",
          featured: false,
          year: "2024",
          features: [
            "Auto-playing hero carousel highlighting each core service (roofing, siding, eavestroughs, downspouts) with its own CTA to match search intent",
            "Dedicated services page breaking down every offering, including roofing, siding, eavestrough, downspout, soffit, and fascia, so visitors self-qualify before contacting",
            "Transparent 3-step process page (Request → Cost Calculation → Contract) that sets expectations and reduces booking hesitation",
            "Local service-area showcase across Calgary, Airdrie, Cochrane, Chestermere, Strathmore, High River, and Okotoks for local trust and SEO targeting",
            "Client testimonials carousel for social proof, plus a sticky 'Get Free Quote' button so the primary conversion action is always accessible",
            "Dedicated contact page with an embedded quote-request form repeated site-wide, in a fully responsive layout tested across all breakpoints"
          ],
          projectImpact: {
            "title": "From Digital Brochure to Lead Engine",
            "description": "By restructuring the entire site around the homeowner's buying journey, with service clarity, process transparency, local trust signals, and a frictionless quote path, the client gained a website built to convert local search traffic into real quote requests, not just page views."
          },
        },
        {
          id: "lino-concrete",
          title: "Lino Concrete: Calgary Concrete Contractor Website",
          shortTitle: "Lino Concrete",
          category: "renovation",
          description: "A conversion-focused marketing website for a 26-year Calgary concrete contractor, built to turn local search traffic into quote requests instead of losing leads to competitors.",
          longDescription: "Lino Concrete has 26+ years of experience and six specialized services, but no way to show it up online: no site, no local search visibility, and no structured way for a homeowner or GC to request a quote outside of a phone call. Every lead that searched \"concrete contractor Calgary\" was landing on a competitor's site instead.\n\nI built a full marketing site on Next.js designed around one goal: convert visitors into quote requests. Each of the six services (stamped concrete, epoxy flooring, exposed aggregate, acid-staining, broom finishing, placing & finishing) got its own dedicated page with benefits, a 4-step process breakdown, and FAQs, both to help visitors self-select the right service and to give Google dedicated pages to rank for high-intent local keywords. Separate landing pages for residential and commercial buyers let the messaging speak directly to each audience's priorities (curb appeal and cost vs. durability and code compliance) instead of one generic pitch.\n\nOn the technical side, the site ships full local-SEO infrastructure, including LocalBusiness JSON-LD structured data, geo meta tags, an auto-generated sitemap covering every service and industry page, Open Graph/Twitter cards, and semantic metadata per route, so the business shows up correctly in Google Maps, local pack results, and rich snippets. A branded quote request form accepts project photos and PDFs as attachments and emails the lead straight to the business inbox via Nodemailer, with inline validation, drag-and-drop upload, and file-type restrictions to keep submissions clean. A masonry project gallery with a full lightbox viewer replaces the \"send me photos over text\" workflow with a real portfolio visitors can browse unprompted. Every section, from hero and trust signals to process, testimonials, and service area, was built to move a visitor toward the contact form, not just inform them.\n\nEnd result: a fast, mobile-first site (Next.js 16 + Tailwind 4) that positions Lino Concrete as Calgary's established concrete authority, is structured to rank for the exact searches its customers use, and turns that traffic into qualified leads with photos attached, automatically.",
          image: "/images/projects/linoconcrete-highlight.webp",
          previewImg: "/images/projects/linoconcrete.webp",
          previewImgWidth: 1920,
          previewImgHeight: 14065,
          tags: ["Next.js","React","Tailwind CSS","Framer Motion","Nodemailer","JSON-LD SEO","Node.js"],
          demoUrl: "",
          githubUrl: "",
          featured: true,
          year: "2026",
          features: [
            "6 dedicated service pages (stamped concrete, epoxy flooring, exposed aggregate, acid-staining, broom finishing, placing & finishing) each with benefits, process steps, and FAQs for SEO and visitor self-selection",
            "Separate residential vs. commercial landing pages with audience-specific messaging",
            "Quote request form with drag-and-drop photo/PDF upload, file-type validation, and automated email delivery to the business inbox",
            "Masonry project gallery with full-screen lightbox and keyboard/click navigation",
            "Local SEO infrastructure: LocalBusiness JSON-LD schema, geo meta tags, auto-generated XML sitemap, Open Graph/Twitter cards on every route",
            "Animated, mobile-first UI (Framer Motion) with WhatsApp click-to-chat, click-to-call shortcuts, and custom 404-safe dynamic routing"
          ],
          projectImpact: {
            "title": "From Invisible to Bookable",
            "description": "Replaced an offline, referral-only business with a searchable, structured web presence, giving a 26-year contractor the local SEO foundation and lead-capture system to compete for Calgary concrete searches instead of relying on word of mouth."
          },
        },
        {
          id: "little-spice",
          title: "Little Spice: Restaurant Website",
          shortTitle: "Little Spice",
          category: "restaurant",
          description: "A fast, mobile-first website for a Calgary Indian & Pakistani restaurant that turns browsing visitors into phone calls, table bookings, and walk-ins.",
          longDescription: "Little Spice, an Indian & Pakistani restaurant in Calgary, needed more than a digital menu. Their old web presence made it hard for hungry visitors to quickly find what they served, whether they were open, or how to get in touch, and every menu update meant calling a developer.\n\nI built them a full marketing website on Next.js with a searchable, categorized menu of 89 dishes across 14 categories (Starters, Biryani, Tandoori, Seafood, Vindaloo, Desserts and more), a rotating offers section to spotlight daily specials, a photo gallery, customer testimonials, live Google Maps directions, and a direct contact form, all wrapped in a fast, responsive layout that looks as good on a phone in a parking lot as it does on desktop. The menu and offers content is centralized in structured data files, so the restaurant's day-to-day content (prices, dishes, specials) can be updated without touching component code. The result is a site that answers a hungry visitor's three questions, what do you serve, are you open, and how do I get there or order, in under a few seconds.",
          image: "/images/projects/little-spice-highlight.webp",
          previewImg: "/images/projects/little-spice.webp",
          previewImgWidth: 1920,
          previewImgHeight: 11626,
          tags: ["Next.js","React","Tailwind CSS","JavaScript","Swiper.js","Responsive Design","Vercel"],
          demoUrl: "https://www.littlespice.ca",
          githubUrl: "https://github.com/madnywebtech786/Littlespice",
          featured: false,
          year: "2025",
          features: [
            "Interactive full menu with 89 dishes across 14 categories, filterable by category (Starters, Biryani, Tandoori, Seafood, Vegetarian, Desserts, etc.)",
            "Centralized, structured menu data layer so prices and dishes can be updated without editing UI code",
            "Rotating hero and daily-offers carousels to highlight promotions and lunch specials",
            "Photo gallery and customer testimonials carousel to showcase the food, atmosphere, and build trust with new visitors",
            "Embedded Google Maps with live directions and opening hours, plus a direct contact form with one-tap call and location links",
            "Fully responsive design built on Next.js for fast page loads, strong SEO, and mobile ordering behavior"
          ],
          projectImpact: {
            "title": "From a Static Handout to a Working Sales Tool",
            "description": "The previous web presence couldn't answer a hungry visitor's basic questions fast enough, including what's on the menu, is it open, and how do I get there, and every menu change was a developer request. The new site puts a searchable 89-item menu, live hours, directions, and one-tap calling in front of visitors in seconds, with content the owner can keep current without code changes, directly reducing friction between 'I'm hungry' and 'I'm ordering.'"
          },
        },
      ],
    },
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  console.log('Seeded projects page content');

  // ──────────────── SERVICES PAGE ────────────────
  await db.collection('pagecontents').insertOne({
    slug: 'services',
    meta: {
      title: "Our Services | Madny Digital Services | Computer & Phone Repair, Web Development",
      description: "Professional computer repair, cell phone repair & unlocking, device sales, and web development services in Calgary. Quality service at competitive prices.",
      keywords: "computer repair calgary, cell phone repair, phone unlocking, device sales, web development services",
      ogTitle: "Our Services | Madny Digital Services",
      ogDescription: "Expert computer & cell phone repair, quality device sales, and professional web development services.",
    },
    sections: {
      items: [
        {
          id: 'computer-repair',
          title: 'Computer Repair',
          shortDesc: 'Computer repair Calgary: PC and Mac diagnostics, upgrades & virus removal',
          heroDescription: 'Madny Digital Services provides computer repair in Calgary for residents, remote workers, and businesses across the NE, NW, SE, SW, and nearby Airdrie and Cochrane. Our expert technicians repair and upgrade PCs and Macs of every brand, remove viruses, recover lost data, and run full diagnostics so your system runs reliably again.',
          image: '/images/services/computer-repair.webp',
          features: [
            { title: 'Laptop Screen Replacement', description: 'Fast, precise LCD and LED screen replacements for all laptop and Mac brands.' },
            { title: 'Charging Port Replacement', description: 'Repair or replace worn and damaged charging ports on laptops and desktops.' },
            { title: 'Keyboard Replacement', description: 'Full keyboard replacements for damaged, sticking, or missing keys.' },
            { title: 'Battery Replacement', description: 'Restore your laptop battery life with certified, quality replacement batteries.' },
            { title: 'RAM, SSD & Storage Upgrades', description: 'Upgrade your RAM, SSD, hard drive, or optical drive for faster, more reliable performance.' },
            { title: 'Virus & Malware Removal', description: 'Full system diagnostics with removal of viruses, malware, and spyware from PCs and Macs.' },
            { title: 'Data Backup & Recovery', description: 'Protect your files with scheduled backups, or recover data from failed or damaged drives.' },
            { title: 'Computer Systems Design & Sales', description: 'Custom system design plus ongoing sales and service support for Calgary businesses.' },
          ],
          pricing: [
            { service: 'Diagnostic & Assessment', price: 'FREE', note: 'With repair' },
            { service: 'Virus/Malware Removal', price: '$79+', note: 'Same day service' },
            { service: 'Hardware Repair', price: '$99+', note: 'Parts extra' },
            { service: 'Data Recovery', price: '$149+', note: 'Based on complexity' },
            { service: 'SSD/RAM Upgrade', price: '$49+', note: 'Plus parts' },
            { service: 'OS Installation', price: '$69', note: 'Windows/Linux' },
          ],
          benefits: ['Expert, highly skilled technicians', 'Free diagnostics with repair', '90 day warranty on repairs', 'Same day service available', 'All PC and Mac brands supported', 'Pickup and delivery available'],
          faqs: [
            { question: 'How much does computer repair cost in Calgary?', answer: 'Computer repair in Calgary typically starts at $79 for virus removal and $99 for hardware repairs, with parts priced separately. Diagnostics are free with any repair. We provide an upfront quote after inspection, so there are no surprise charges.' },
            { question: 'How long does a typical computer repair take?', answer: 'Most repairs are completed within 24 to 48 hours. Simple issues like virus removal can often be finished same day, while complex hardware repairs or parts orders may take 2 to 3 business days. We confirm timelines before starting work.' },
            { question: 'Do you offer a warranty on repairs?', answer: 'Yes. Every repair we complete includes a 90 day warranty covering both parts and labor. If the same issue returns within that window, we fix it again at no additional cost to you.' },
            { question: 'Can you recover data from a dead hard drive?', answer: 'In many cases, yes. Our technicians use specialized data recovery tools for failed or corrupted drives. Success depends on the type and severity of the failure. We offer a free assessment before quoting any recovery work.' },
            { question: 'Do you repair both PC and Mac computers?', answer: 'Yes. Our certified technicians service PCs and Macs of every brand, including screen replacements, battery service, RAM and SSD upgrades, and full hardware and software diagnostics for desktops and laptops alike.' },
          ],
        },
        {
          id: 'cell-phone-repair',
          title: 'Cell Phone Repair & Unlocking',
          shortDesc: 'Cell phone repair Calgary: screens, batteries & carrier unlocking',
          heroDescription: 'Madny Digital Services offers cell phone repair in Calgary for iPhone, Samsung Galaxy, and every major Android device, serving the NE, NW, SE, SW, downtown, and nearby Airdrie and Cochrane. Our certified technicians handle phone unlocking in Calgary for any carrier, along with screen, battery, camera, and water damage repairs, all cleaned and tested before pickup.',
          image: '/images/services/cell-phone-repair.webp',
          features: [
            { title: 'Carrier Unlocking', description: 'Unlock your phone from any Canadian or international carrier to use with any network.' },
            { title: 'Broken Screen Repair', description: 'Premium quality screen replacements for iPhones, Samsung Galaxy, and all Android devices.' },
            { title: 'Camera Repair', description: 'Fix blurry, cracked, or non functioning front and rear cameras.' },
            { title: 'Microphone & Speaker Repair', description: 'Restore clear calls and audio with microphone and speaker repairs.' },
            { title: 'Charging Port Repair', description: 'Fix charging issues with port replacement and connector cleaning services.' },
            { title: 'Battery Replacement', description: 'Restore your phone battery life with quality, safety tested replacement batteries.' },
            { title: 'Water Damage Treatment', description: 'Diagnostic cleaning and component level repair for liquid damaged devices.' },
            { title: 'Cell Phone Sales & Service', description: 'Cellphone sales alongside ongoing repair, unlocking, and service support.' },
          ],
          pricing: [
            { service: 'iPhone Screen Repair', price: '$89+', note: 'Model dependent' },
            { service: 'Samsung Screen Repair', price: '$99+', note: 'Model dependent' },
            { service: 'Battery Replacement', price: '$49+', note: 'Most models' },
            { service: 'Carrier Unlock', price: '$29+', note: 'Network dependent' },
            { service: 'Water Damage Treatment', price: '$79+', note: 'No fix, no fee' },
            { service: 'Charging Port Repair', price: '$59+', note: 'Parts included' },
          ],
          benefits: ['Certified repair technicians', 'While you wait repairs', 'Quality OEM grade parts', 'Lifetime warranty on screens', 'All phone brands supported', 'IMEI unlocking for any carrier'],
          faqs: [
            { question: 'Where can I get my phone unlocked in Calgary?', answer: 'Madny Digital Services unlocks phones from any Canadian or international carrier at our Calgary location. Unlocking starts at $29, is completed same day in most cases, and is fully legal, so it will not void your manufacturer warranty.' },
            { question: 'How much does cell phone screen repair cost in Calgary?', answer: 'Screen repair in Calgary starts at $89 for iPhones and $99 for Samsung devices, depending on the model. Most screen repairs are completed in 30 to 60 minutes while you wait, using OEM or high quality aftermarket parts.' },
            { question: 'Will unlocking my phone void the warranty?', answer: 'No. Carrier unlocking is legal in Canada and does not void your manufacturer warranty. It simply removes the network restriction so your phone can be used with any compatible carrier, including when traveling internationally.' },
            { question: 'Can a water damaged phone be repaired?', answer: 'Often, yes, if it is brought in quickly before corrosion spreads. We offer diagnostic cleaning and component level repair with a no fix, no fee policy on water damage treatment, so you only pay if we can restore your device.' },
            { question: 'Do you use original or aftermarket parts?', answer: 'We offer both OEM and high quality aftermarket options for screens, batteries, and components. Our technicians explain the tradeoffs in cost and longevity so you can choose the best fit for your device and budget.' },
          ],
        },
        {
          id: 'device-sales',
          title: 'Mobile & Computer Sales',
          shortDesc: 'New & refurbished phones and computers in Calgary, plus trade ins',
          heroDescription: 'Madny Digital Services sells new and certified refurbished smartphones, laptops, and desktop computers to customers across Calgary, including the NE, NW, SE, SW, and nearby Airdrie and Cochrane. Every refurbished device is inspected, tested, and backed by a warranty, and we accept trade ins toward your next purchase, in store or online.',
          image: '/images/services/mobile-computer-sale.webp',
          features: [
            { title: 'New & Refurbished Smartphones', description: 'Latest iPhones, Samsung Galaxy, Google Pixel, and budget friendly certified options.' },
            { title: 'Laptops, Desktops & Custom PC Builds', description: 'Gaming laptops, business notebooks, desktops, and custom built PCs to your specs.' },
            { title: 'Certified Refurbished Devices', description: 'Quality tested refurbished devices at significant savings, each backed by a warranty.' },
            { title: 'Computer Parts & Components', description: 'RAM, SSDs, graphics cards, and components for upgrades and custom builds.' },
            { title: 'Accessories', description: 'Cases, chargers, cables, screen protectors, and peripherals for phones and PCs.' },
            { title: 'Protection Plans & Trade Ins', description: 'Extended warranty options plus trade in credit toward your next device.' },
          ],
          pricing: [
            { service: 'Refurbished iPhones', price: '$299+', note: 'Grade A condition' },
            { service: 'Refurbished Laptops', price: '$399+', note: 'Warranty included' },
            { service: 'New Smartphones', price: '$199+', note: 'All brands' },
            { service: 'Phone Cases', price: '$15+', note: 'Wide selection' },
            { service: 'Chargers & Cables', price: '$12+', note: 'Fast charging' },
            { service: 'Screen Protectors', price: '$10+', note: 'Free installation' },
          ],
          benefits: ['Price match guarantee', '30 day return policy', 'Warranty on all devices', 'Trade in program', 'Financing available', 'Expert, no pressure advice'],
          faqs: [
            { question: 'What does certified refurbished mean?', answer: 'Our certified refurbished devices are professionally inspected, repaired where needed, and restored to like new condition. Each unit is functionally tested before sale and comes with a warranty, so you get reliable performance at a lower price than new.' },
            { question: 'Do you buy or trade in old devices in Calgary?', answer: 'Yes. Bring your old phone, laptop, or computer to our Calgary location and we will assess its condition and offer trade in credit toward a new or refurbished device, reducing the out of pocket cost of your upgrade.' },
            { question: 'Can I finance a phone or computer purchase?', answer: 'Yes. We offer flexible financing options for approved customers, letting you spread the cost of a new or refurbished device over time. Ask our staff in store or online for current financing terms and eligibility.' },
            { question: 'Is it cheaper to buy refurbished than new?', answer: 'Generally, yes. Certified refurbished smartphones and laptops typically cost 20 to 40 percent less than new equivalents while offering comparable performance, since each device is tested and warrantied before resale.' },
          ],
        },
        {
          id: 'software-development',
          title: 'Software Development',
          shortDesc: 'Custom software development company in Calgary for automation & apps',
          heroDescription: 'Madny Digital Services is a software development company in Calgary building custom business applications, automation tools, and databases for local companies and remote teams across the NE, NW, SE, SW, and surrounding areas. Every project is scoped to your exact workflow, thoroughly tested, and supported after launch.',
          image: '/images/services/software-development.webp',
          features: [
            { title: 'Custom Software Development', description: 'Software built around your exact business processes and requirements, not a generic template.' },
            { title: 'Web Application Development', description: 'Full featured web apps, from internal tools to customer facing platforms.' },
            { title: 'Business Process Automation', description: 'Automation tools that remove manual, repetitive work from your daily operations.' },
            { title: 'Database Development & Management', description: 'Designing, building, and managing databases that scale as your business grows.' },
            { title: 'Software Testing & QA', description: 'Structured testing to catch issues before they reach your users.' },
            { title: 'Software Maintenance & Support', description: 'Ongoing updates, bug fixes, and support after launch to keep systems reliable.' },
          ],
          benefits: ['Requirements first approach', 'Regular progress updates', 'Structured testing before launch', 'Post launch support included', 'Local Calgary consultation', 'Built to scale with your business'],
          faqs: [
            { question: 'How long does custom software take to build?', answer: 'Timeline depends entirely on project scope. A focused automation tool or internal app takes less time than a multi feature platform with integrations. During your free consultation, we assess your requirements and provide a project specific timeline before work begins.' },
            { question: 'How much does custom software development cost in Calgary?', answer: 'Pricing is project based and depends on complexity, features, and integrations required. We do not use flat rate packages for custom builds. Contact us for a free consultation and a detailed quote scoped to your specific business needs.' },
            { question: 'Do you provide ongoing software maintenance?', answer: 'Yes. Every custom software project includes post launch support, and we offer ongoing maintenance plans for updates, bug fixes, and improvements after your application goes live, so your system keeps running reliably as your business changes.' },
            { question: 'What kind of businesses do you build software for?', answer: 'We work with Calgary small and medium businesses, local teams, and remote companies that need custom applications, workflow automation, or database systems tailored to how they actually operate, rather than adapting their process to off the shelf software.' },
          ],
        },
        {
          id: 'web-development',
          title: 'Web Development',
          shortDesc: 'Calgary web development services: websites, e-commerce & SEO',
          heroDescription: 'Madny Digital Services delivers web development services in Calgary for local businesses in the NE, NW, SE, SW, and surrounding areas like Airdrie and Cochrane. Our team builds fast, mobile responsive websites, e-commerce stores, and custom web portals, then supports them with SEO and Google Ads so Calgary customers can find you.',
          image: '/images/hero.webp',
          features: [
            { title: 'Local Business Website Design', description: 'Custom, mobile responsive websites designed to convert Calgary visitors into paying customers.' },
            { title: 'E-Commerce Store Development', description: 'Secure online stores with fast checkout, inventory management, and payment processing built in.' },
            { title: 'UI/UX Design', description: 'User-focused interfaces and clear navigation that keep visitors engaged and reduce bounce rate.' },
            { title: 'Website Speed Optimization', description: 'Core Web Vitals tuning and performance audits so your site loads in under 3 seconds.' },
            { title: 'Website Maintenance & Hosting', description: 'Ongoing updates, security monitoring, and managed hosting to keep your site online and current.' },
            { title: 'Local SEO for Calgary Businesses', description: 'On page SEO, Google Business Profile optimization, and local keyword targeting to improve rankings.' },
            { title: 'PPC & Digital Marketing', description: 'Targeted Google Ads campaigns built to drive qualified local traffic and measurable leads.' },
            { title: 'Mobile Responsive Development', description: 'Every site is built and tested across phones, tablets, and desktops for a consistent experience.' },
          ],
          pricing: [
            { service: 'Landing Page', price: '$499+', note: 'Single page site' },
            { service: 'Business Website', price: '$1,499+', note: '5 to 10 pages' },
            { service: 'E-Commerce Store', price: '$2,999+', note: 'Full featured' },
            { service: 'Custom Web App', price: '$4,999+', note: 'Quote required' },
            { service: 'Website Redesign', price: '$999+', note: 'Modernize existing' },
            { service: 'Monthly Maintenance', price: '$99/mo', note: 'Updates & support' },
          ],
          benefits: ['Certified Calgary developers', 'Mobile first, responsive design', 'SEO optimized from day one', 'Sub 3 second load times', 'Secure, PIPEDA aware builds', 'Local support and training'],
          faqs: [
            { question: 'How much does web development cost in Calgary?', answer: 'Calgary web development typically starts around $499 for a landing page, $1,499 for a full business website, and $2,999 for an e-commerce store. Final pricing depends on features, page count, and integrations. We provide a free, itemized quote before any work begins.' },
            { question: 'How long does it take to build a website?', answer: 'A standard business website takes about 1 week from approved design to launch. E-commerce websites typically take 3 to 4 weeks depending on product catalog size, payment integrations, and the number of revision rounds required.' },
            { question: 'Do you provide hosting and site maintenance?', answer: 'Yes. We offer managed hosting, security monitoring, and monthly maintenance plans starting at $99 per month, or we can deploy your site to a hosting provider of your choice, whichever fits your business best.' },
            { question: 'Can I update the website content myself after launch?', answer: 'Yes. Every site we build includes a custom content management dashboard, so you can edit text, images, and pages in real time without touching code or calling a developer. We walk you through it at launch so your team can manage updates independently from day one.' },
            { question: 'Will my website show up on Google?', answer: 'Every website we build includes on page SEO fundamentals: fast load times, mobile responsiveness, structured headings, and metadata. For competitive Calgary keywords, we also offer ongoing local SEO and Google Ads packages to accelerate rankings.' },
            { question: 'What platform or technology do you build websites with?', answer: 'We build custom websites using modern frameworks rather than generic page builders, which means faster load times, stronger SEO performance, and more flexibility to add features as your business grows, without the limitations of drag and drop templates.' },
            { question: 'Do I need a website if my business already has social media?', answer: 'Yes. Social media accounts are rented space you do not control, while a website is a permanent, searchable asset that ranks on Google, builds trust with customers researching your business, and works alongside your social channels rather than replacing them.' },
          ],
        },
      ],
    },
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  console.log('Seeded services page content');

  console.log('\n✅ All data seeded successfully!');
  await mongoose.disconnect();
  process.exit(0);
}

seed().catch((error) => {
  console.error('Seed error:', error);
  process.exit(1);
});
