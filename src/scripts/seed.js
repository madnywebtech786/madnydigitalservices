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
    email: 'admin@madenydigital.com',
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
      brandName: 'Madeny Digital',
      navLinks: [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/#services' },
        { name: 'Projects', href: '/projects' },
        { name: 'Contact', href: '/contact' },
      ],
    },
    footer: {
      description: "Calgary's premier digital agency specializing in web development, e-commerce solutions, and digital marketing for businesses in the tech and retail industry.",
      address: 'Calgary, AB T2P 1J9, Canada',
      email: 'hello@madeneydigital.ca',
      phone: '+1 (403) 555-0123',
      copyright: 'Madeny Digital Services. All rights reserved.',
      serviceLinks: [
        { name: 'Website Development', href: '#' },
        { name: 'E-Commerce Solutions', href: '#' },
        { name: 'Mobile App Development', href: '#' },
        { name: 'UI/UX Design', href: '#' },
        { name: 'Digital Marketing', href: '#' },
      ],
      companyLinks: [
        { name: 'About Us', href: '#about' },
        { name: 'Our Projects', href: '#projects' },
        { name: 'Careers', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Contact', href: '#contact' },
      ],
      supportLinks: [
        { name: 'Help Center', href: '#' },
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
        { name: 'Cookie Policy', href: '#' },
      ],
      socialLinks: [
        { platform: 'LinkedIn', href: '#' },
        { platform: 'Twitter', href: '#' },
        { platform: 'Instagram', href: '#' },
        { platform: 'Facebook', href: '#' },
      ],
    },
    socialWidget: {
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com',
      whatsapp: 'https://wa.me/1234567890',
    },
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  console.log('Seeded global content');

  // ──────────────── HOME PAGE ────────────────
  await db.collection('pagecontents').insertOne({
    slug: 'home',
    meta: {
      title: "Madeny Digital Services | Web Development & E-Commerce Solutions | Calgary",
      description: "Calgary's premier digital agency specializing in website development, e-commerce solutions, mobile apps, and digital marketing for mobiles, laptops & accessories businesses.",
      keywords: "web development, e-commerce, mobile app development, digital marketing, Calgary, Canada, Madeny Digital",
      ogTitle: "Madeny Digital Services | Calgary's Premier Digital Agency",
      ogDescription: "Transform your business with stunning websites, powerful e-commerce solutions, and cutting-edge digital experiences.",
    },
    sections: {
      hero: {
        badge: "Calgary's Trusted Tech Partner",
        headingLine1: 'Your One-Stop',
        headingLine2: 'Tech Solution',
        headingLine3: 'Center',
        subheading: 'Expert computer & cell phone repair, quality device sales, and professional web development services. All under one roof in Calgary, Alberta.',
        ctaPrimary: 'Get Free Quote',
        ctaSecondary: '(403) 555-0123',
        stats: [
          { value: '500+', label: 'Devices Repaired' },
          { value: '50+', label: 'Web Projects' },
          { value: '1000+', label: 'Happy Customers' },
          { value: '24/7', label: 'Support' },
        ],
        floatingCard1Title: 'Computer Repair',
        floatingCard1Subtitle: 'Same-day service',
        floatingCard2Title: 'Phone Repair',
        floatingCard2Subtitle: 'While you wait',
      },
      services: {
        badge: 'Our Services',
        title: 'What We Offer',
        subtitle: 'From device repairs to web solutions, we provide comprehensive tech services to keep you connected and your business growing.',
        items: [
          {
            id: 'computer-repair',
            title: 'Computer Repair',
            shortDesc: 'Expert diagnostics & repair',
            description: 'Professional computer repair services for all brands. From hardware issues to software problems, virus removal to data recovery, we fix it all with quick turnaround times.',
            features: ['Hardware Repair', 'Virus Removal', 'Data Recovery', 'Upgrades'],
          },
          {
            id: 'cell-phone-repair',
            title: 'Cell Phone Repair & Unlocking',
            shortDesc: 'Screen repair & carrier unlock',
            description: 'Fast and reliable cell phone repair services. Screen replacements, battery changes, water damage repair, and professional carrier unlocking for all phone models.',
            features: ['Screen Repair', 'Battery Replacement', 'Unlocking', 'Water Damage'],
          },
          {
            id: 'device-sales',
            title: 'Mobile & Computer Sales',
            shortDesc: 'Quality devices & accessories',
            description: 'Wide selection of new and refurbished mobile phones, laptops, and computers. Quality accessories including cases, chargers, and peripherals at competitive prices.',
            features: ['New Devices', 'Refurbished', 'Accessories', 'Best Prices'],
          },
          {
            id: 'web-development',
            title: 'Web Development',
            shortDesc: 'Custom websites & apps',
            description: 'Professional web development services from stunning business websites to powerful e-commerce platforms. Modern, responsive designs that drive results.',
            features: ['Custom Websites', 'E-Commerce', 'SEO Optimized', 'Responsive'],
          },
        ],
      },
      about: {
        badge: 'About Us',
        title: 'Madeny Digital Services',
        titlePrefix: 'We Are',
        paragraph1: "Based in Calgary, Canada, we are a full-service digital agency specializing in creating exceptional digital experiences. With over a decade of experience, we've helped businesses in the mobile, laptop, and accessories industry establish powerful online presences.",
        paragraph2: 'Our team of designers, developers, and strategists work together to deliver solutions that not only look stunning but also drive real business results. We believe in the power of technology to transform businesses and create meaningful connections with customers.',
        features: [
          'Custom solutions tailored to your business',
          'Cutting-edge technologies and frameworks',
          'Transparent communication throughout',
          'On-time delivery guaranteed',
          'Post-launch support and maintenance',
          'SEO and performance optimization',
        ],
        values: [
          {
            title: 'Mission',
            description: 'To empower businesses in Calgary and beyond with innovative digital solutions that drive growth and success in the modern marketplace.',
          },
          {
            title: 'Vision',
            description: 'To be the leading digital agency in Canada, known for exceptional creativity, technical excellence, and unwavering commitment to client success.',
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
        description: "Don't just take our word for it. Here's what Calgary businesses and individuals have to say about our services.",
        bottomText: 'satisfied customers in Calgary',
        bottomCount: '500+',
        items: [
          {
            name: 'Sarah Mitchell',
            role: 'Small Business Owner',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
            content: 'Madeny Digital fixed my laptop in just a few hours when another shop said it would take a week. Their expertise and speed saved my business.',
          },
          {
            name: 'Michael Chen',
            role: 'Real Estate Agent',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
            content: 'Got my iPhone screen replaced while I waited. The quality is amazing and the price was very fair. The team is professional and friendly.',
          },
          {
            name: 'Emily Rodriguez',
            role: 'Restaurant Owner',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
            content: 'They built an amazing website for my restaurant and helped me set up online ordering. The website looks beautiful and has brought in so many new customers.',
          },
          {
            name: 'David Thompson',
            role: 'IT Professional',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
            content: "I bought a refurbished MacBook from Madeny and it's been running perfectly for over a year. Great prices on quality devices.",
          },
          {
            name: 'Jessica Parker',
            role: 'Graphic Designer',
            image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80',
            content: 'The web development team understood my vision perfectly. My portfolio site is stunning and loads incredibly fast. Exceptional work!',
          },
          {
            name: 'Robert Kim',
            role: 'Startup Founder',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
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
        subtitle: 'Ready to start your project? Contact us today and let\'s discuss how we can help transform your digital presence.',
        contactInfo: [
          {
            title: 'Visit Us',
            details: ['123 Innovation Drive', 'Calgary, AB T2P 1J9', 'Canada'],
          },
          {
            title: 'Email Us',
            details: ['hello@madenydigital.ca', 'support@madenydigital.ca'],
          },
          {
            title: 'Call Us',
            details: ['+1 (403) 555-0123', '+1 (403) 555-0124'],
          },
        ],
      },
      cta: {
        badge: 'Ready to Transform Your Business?',
        heading: "Let's Create Something Extraordinary Together",
        description: "Whether you need a stunning website, a powerful e-commerce platform, or a complete digital transformation, we're here to make it happen.",
        ctaPrimary: 'Start Your Project',
        ctaSecondary: 'Schedule a Call',
      },
      diagonalBanners: {
        text1: 'Best in Canada • Website Development • Cell Phone Repair •  ',
        text2: 'Premium Products • Premium Services • Best Prices •',
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
      title: "About Us | Madeny Digital Services | Calgary's Premier Digital Agency",
      description: "Learn about Madeny Digital Services - Calgary's leading digital agency with 10+ years of experience in web development, e-commerce, and digital solutions.",
      keywords: "about madeny digital, calgary digital agency, web development team, digital services company",
      ogTitle: "About Madeny Digital Services",
      ogDescription: "We're a team of passionate innovators transforming ideas into powerful digital experiences that drive real business growth.",
    },
    sections: {
      hero: {
        badge: 'About Madeny Digital',
        headingPart1: 'Crafting Digital',
        headingPart2: 'Excellence',
        description: "We're a team of passionate innovators transforming ideas into powerful digital experiences that drive real business growth",
        ctaPrimary: 'Our Projects',
        ctaSecondary: 'Contact Us',
      },
      stats: [
        { value: '500+', label: 'Happy Clients' },
        { value: '50+', label: 'Awards Won' },
        { value: '1000+', label: 'Projects Completed' },
        { value: '99%', label: 'Success Rate' },
      ],
      whyChooseUs: {
        badge: 'The Madeny Edge',
        title: 'Engineered for Digital Dominance',
        description: "We don't just build websites; we architect digital powerhouses. Our methodology merges high-end aesthetics with aggressive performance engineering.",
        features: [
          {
            title: 'Technical Excellence',
            description: 'Zero-compromise code quality using the latest Next.js architectures. We prioritize scalability, security, and lightning-fast load times.',
            metric: '99.9%',
            benefit: 'System Uptime',
          },
          {
            title: 'Strategic Innovation',
            description: 'We align every pixel with your business objectives. Our solutions are designed to disrupt markets and capture attention immediately.',
            metric: '400%',
            benefit: 'Avg. Engagement',
          },
          {
            title: 'Hyper-Performance',
            description: 'Optimized for core web vitals and conversion. We ensure your digital presence is as fast as your business growth.',
            metric: '< 1s',
            benefit: 'LCP Speed',
          },
        ],
      },
      mission: {
        badge: 'Our Mission',
        title: 'Transforming Ideas Into Digital Reality',
        description: "We exist to bridge the gap between imagination and execution. Every project we undertake is an opportunity to create something extraordinary—solutions that don't just solve problems but inspire progress.",
        bulletPoints: [
          'Empower businesses with cutting-edge technology',
          'Deliver measurable results and lasting value',
          'Build partnerships based on trust and transparency',
        ],
      },
      vision: {
        badge: 'Our Vision',
        titlePart1: 'A World Where Technology',
        titlePart2: 'Elevates Everyone',
        description: 'We envision a future where innovative digital solutions are accessible to all businesses, regardless of size or industry. A world where technology serves as an equalizer, enabling every organization to compete, grow, and thrive.',
        pillars: [
          { label: 'Global Impact' },
          { label: 'Innovation First' },
          { label: 'Human-Centered' },
          { label: 'Sustainable Growth' },
        ],
      },
      process: {
        badge: 'Our Process',
        title: 'How We Transform Ideas',
        description: 'A proven methodology that turns vision into exceptional digital products',
        steps: [
          {
            step: '01',
            title: 'Discovery & Strategy',
            description: 'We dive deep into your business goals, target audience, and competitive landscape to craft a strategic roadmap.',
            duration: '1-2 weeks',
            deliverables: ['Comprehensive project roadmap', 'Competitive analysis report', 'Technical architecture plan'],
          },
          {
            step: '02',
            title: 'Design & Prototype',
            description: 'Our designers create stunning, user-centric interfaces and interactive prototypes for your approval.',
            duration: '2-3 weeks',
            deliverables: ['Interactive prototypes & mockups', 'Design system & style guide', 'User feedback integration'],
          },
          {
            step: '03',
            title: 'Development & Testing',
            description: 'Expert developers build your solution using cutting-edge tech, with rigorous testing at every stage.',
            duration: '4-6 weeks',
            deliverables: ['Fully tested codebase', 'Performance optimization', 'Security & code reviews'],
          },
          {
            step: '04',
            title: 'Launch & Support',
            description: 'Seamless deployment to production with ongoing support, monitoring, and continuous optimization.',
            duration: 'Ongoing',
            deliverables: ['Live deployment & documentation', 'Training & knowledge transfer', '24/7 monitoring & support'],
          },
        ],
      },
      cta: {
        badge: 'Ready to Build Something Amazing?',
        heading: 'Ready to Build Something Amazing?',
        description: "Let's collaborate and turn your vision into reality. Join hundreds of satisfied clients who trust us with their digital future.",
        ctaPrimary: 'Start Your Project',
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
      title: "Contact Us | Madeny Digital Services | Get In Touch",
      description: "Have a project in mind? Contact Madeny Digital Services for web development, e-commerce solutions, and digital marketing. Get a reply within 24 hours.",
      keywords: "contact madeny digital, get in touch, project inquiry, web development quote, calgary digital agency contact",
      ogTitle: "Contact Madeny Digital Services",
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
          value: 'hello@madenydigital.com',
          description: 'Drop us a line anytime',
          link: 'mailto:hello@madenydigital.com',
        },
        {
          title: 'Call Us',
          value: '+1 (555) 123-4567',
          description: 'Mon-Fri from 8am to 6pm',
          link: 'tel:+15551234567',
        },
        {
          title: 'Visit Us',
          value: 'San Francisco, CA',
          description: '123 Innovation Street, Suite 100',
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
      title: "Our Projects | Madeny Digital Services | Portfolio Showcase",
      description: "Discover cutting-edge digital solutions built by Madeny Digital Services. Browse our portfolio of web development, e-commerce, mobile app, and SaaS projects.",
      keywords: "portfolio, web projects, digital projects, case studies, madeny digital portfolio",
      ogTitle: "Our Amazing Work | Madeny Digital Services",
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
        { id: 'web', name: 'Web Development' },
        { id: 'mobile', name: 'Mobile Apps' },
        { id: 'ecommerce', name: 'E-Commerce' },
        { id: 'saas', name: 'SaaS Platforms' },
        { id: 'ai', name: 'AI/ML' },
      ],
      items: [
        {
          id: 1,
          title: 'E-Commerce Fashion Store',
          category: 'ecommerce',
          description: 'A modern, responsive e-commerce platform featuring real-time inventory management, secure payment processing, and an intuitive shopping experience.',
          longDescription: 'Built with Next.js and integrated with Stripe for seamless transactions. Features include product filtering, wishlist, shopping cart, order tracking, and admin dashboard.',
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
          tags: ['Next.js', 'Stripe', 'Tailwind CSS', 'PostgreSQL'],
          demoUrl: '#',
          githubUrl: '#',
          featured: true,
          stats: { users: '50K+', rating: '4.8/5', performance: '98/100' },
          features: ['Responsive design for all devices', 'Real-time inventory management', 'Secure Stripe payment integration', 'Product filtering and wishlist', 'Order tracking and admin dashboard'],
          projectImpact: { title: 'Project Impact', description: 'This platform increased client revenue by 40% in the first quarter, with a 60% reduction in cart abandonment rate and seamless shopping across all devices.' },
        },
        {
          id: 2,
          title: 'Restaurant Management System',
          category: 'web',
          description: 'Complete restaurant solution with online ordering, table reservations, and kitchen management.',
          longDescription: 'Features real-time order tracking, customer reviews, and integrated delivery system for modern dining experiences. Built with React and Node.js.',
          image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
          tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
          demoUrl: '#',
          githubUrl: '#',
          featured: true,
          stats: { users: '30K+', rating: '4.9/5', performance: '95/100' },
          features: ['Real-time order tracking with Socket.io', 'Online ordering and table reservations', 'Kitchen display system integration', 'Customer reviews and ratings', 'Integrated delivery management'],
          projectImpact: { title: 'Project Impact', description: 'Streamlined restaurant operations reduced order processing time by 50%, increased customer satisfaction scores by 35%, and enabled seamless delivery management.' },
        },
        {
          id: 3,
          title: 'Healthcare Booking Platform',
          category: 'saas',
          description: 'Patient-friendly healthcare platform enabling easy appointment scheduling and telemedicine consultations.',
          longDescription: 'Streamlines doctor-patient communication with secure messaging, medical record management, and video consultations. HIPAA compliant.',
          image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
          tags: ['Next.js', 'TypeScript', 'WebRTC', 'Redis'],
          demoUrl: '#',
          githubUrl: '#',
          featured: false,
          stats: { users: '100K+', rating: '4.7/5', performance: '96/100' },
          features: ['Easy appointment scheduling', 'Secure telemedicine video consultations', 'HIPAA-compliant data storage', 'Secure patient-doctor messaging', 'Medical record management'],
          projectImpact: { title: 'Project Impact', description: 'Reduced patient wait times by 45% and enabled over 100K patients to access healthcare remotely, dramatically improving care accessibility and clinic efficiency.' },
        },
        {
          id: 4,
          title: 'Real Estate Marketplace',
          category: 'web',
          description: 'Comprehensive property listing platform with advanced search filters and virtual tours.',
          longDescription: 'Features mortgage calculators, neighborhood insights, direct agent communication, and 3D property tours for informed decisions.',
          image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
          tags: ['Vue.js', 'Laravel', 'Three.js', 'MySQL'],
          demoUrl: '#',
          githubUrl: '#',
          featured: true,
          stats: { users: '75K+', rating: '4.6/5', performance: '94/100' },
          features: ['Advanced property search and filters', 'Interactive 3D virtual property tours', 'Mortgage calculator and affordability tools', 'Direct agent communication system', 'Neighborhood insights and analytics'],
          projectImpact: { title: 'Project Impact', description: 'Helped 75K+ buyers find their dream homes with 3D virtual tours reducing in-person visits by 30%, saving time for both buyers and agents while accelerating sales.' },
        },
        {
          id: 5,
          title: 'Fitness & Wellness App',
          category: 'mobile',
          description: 'Personal fitness companion with workout tracking, nutrition planning, and progress analytics.',
          longDescription: 'Includes video tutorials, custom workout plans, and integration with popular fitness wearables. Cross-platform mobile app.',
          image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
          tags: ['React Native', 'Firebase', 'TensorFlow', 'HealthKit'],
          demoUrl: '#',
          githubUrl: '#',
          featured: false,
          stats: { users: '200K+', rating: '4.8/5', performance: '97/100' },
          features: ['Personalized AI workout recommendations', 'Nutrition planning and calorie tracking', 'Wearable device integration (Apple Watch, Fitbit)', 'Video tutorials and exercise library', 'Progress analytics and goal tracking'],
          projectImpact: { title: 'Project Impact', description: 'With 200K+ active users, this app has helped people achieve their fitness goals with 78% of users reporting improved health outcomes within 3 months of use.' },
        },
        {
          id: 6,
          title: 'AI Content Generator',
          category: 'ai',
          description: 'Advanced AI-powered content creation platform for marketing and creative professionals.',
          longDescription: 'Leverages GPT-4 and DALL-E for generating blog posts, social media content, and marketing materials with brand consistency.',
          image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
          tags: ['Python', 'FastAPI', 'OpenAI', 'React'],
          demoUrl: '#',
          githubUrl: '#',
          featured: true,
          stats: { users: '15K+', rating: '4.9/5', performance: '93/100' },
          features: ['GPT-4 powered blog and article generation', 'DALL-E image creation for marketing', 'Brand voice consistency controls', 'Social media content scheduler', 'Multi-language content support'],
          projectImpact: { title: 'Project Impact', description: 'Marketing teams using this platform produce content 10x faster, reducing content creation costs by 65% while maintaining brand consistency across all channels.' },
        },
        {
          id: 7,
          title: 'Crypto Trading Dashboard',
          category: 'saas',
          description: 'Real-time cryptocurrency trading platform with advanced analytics and portfolio management.',
          longDescription: 'Features live market data, technical indicators, automated trading bots, and multi-exchange integration.',
          image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80',
          tags: ['React', 'WebSocket', 'D3.js', 'Node.js'],
          demoUrl: '#',
          githubUrl: '#',
          featured: false,
          stats: { users: '45K+', rating: '4.7/5', performance: '99/100' },
          features: ['Real-time market data via WebSocket', 'Advanced technical indicators and charts', 'Automated trading bot integration', 'Multi-exchange portfolio management', 'Risk management and stop-loss alerts'],
          projectImpact: { title: 'Project Impact', description: 'Traders using this dashboard reported a 25% improvement in trade execution speed and better portfolio diversification, managing over $50M in combined assets.' },
        },
        {
          id: 8,
          title: 'Social Learning Platform',
          category: 'saas',
          description: 'Interactive online learning platform with live classes, assessments, and student collaboration.',
          longDescription: 'Features video streaming, interactive quizzes, discussion forums, and progress tracking for educators and students.',
          image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80',
          tags: ['Next.js', 'Prisma', 'Zoom SDK', 'Stripe'],
          demoUrl: '#',
          githubUrl: '#',
          featured: true,
          stats: { users: '120K+', rating: '4.8/5', performance: '96/100' },
          features: ['Live video classes with Zoom integration', 'Interactive quizzes and assessments', 'Student discussion forums and collaboration', 'Progress tracking and certificates', 'Subscription billing with Stripe'],
          projectImpact: { title: 'Project Impact', description: 'Over 120K students have completed courses, with an 85% course completion rate — far above the industry average of 10% — driving significant educational impact globally.' },
        },
        {
          id: 9,
          title: 'Task Management Pro',
          category: 'mobile',
          description: 'Professional task and project management app with team collaboration features.',
          longDescription: 'Kanban boards, Gantt charts, time tracking, and real-time team updates. Available on iOS and Android.',
          image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80',
          tags: ['Flutter', 'Firebase', 'GraphQL', 'Supabase'],
          demoUrl: '#',
          githubUrl: '#',
          featured: false,
          stats: { users: '80K+', rating: '4.6/5', performance: '95/100' },
          features: ['Kanban and Gantt chart project views', 'Real-time team collaboration and updates', 'Time tracking and productivity analytics', 'Cross-platform iOS and Android support', 'Offline mode with automatic sync'],
          projectImpact: { title: 'Project Impact', description: 'Teams using this app report a 30% increase in on-time project delivery and significant improvement in team communication, boosting overall productivity.' },
        },
        {
          id: 10,
          title: 'Smart Home Dashboard',
          category: 'ai',
          description: 'IoT home automation dashboard with AI-powered energy optimization and security.',
          longDescription: 'Control lights, thermostats, cameras, and appliances. ML-based pattern recognition for automated routines.',
          image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&q=80',
          tags: ['React', 'MQTT', 'Python', 'TensorFlow'],
          demoUrl: '#',
          githubUrl: '#',
          featured: false,
          stats: { users: '25K+', rating: '4.7/5', performance: '92/100' },
          features: ['Unified control for lights, thermostats, and appliances', 'AI-powered energy optimization routines', 'Security camera monitoring and alerts', 'Voice assistant compatibility', 'Energy usage analytics and cost savings'],
          projectImpact: { title: 'Project Impact', description: 'Homeowners using this dashboard save an average of 25% on energy bills monthly, with AI routines automatically adapting to their lifestyle for maximum comfort and efficiency.' },
        },
        {
          id: 11,
          title: 'Travel Booking Platform',
          category: 'web',
          description: 'Comprehensive travel booking system for flights, hotels, and vacation packages.',
          longDescription: 'Real-time availability, price comparison, itinerary planning, and integrated payment processing.',
          image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80',
          tags: ['Angular', 'NestJS', 'PostgreSQL', 'Redis'],
          demoUrl: '#',
          githubUrl: '#',
          featured: false,
          stats: { users: '90K+', rating: '4.5/5', performance: '94/100' },
          features: ['Real-time flight and hotel availability', 'Price comparison across multiple providers', 'Itinerary planning and trip builder', 'Integrated payment with multi-currency support', 'Travel alerts and booking management'],
          projectImpact: { title: 'Project Impact', description: 'Travelers booked over $10M in trips through this platform, saving an average of 18% compared to traditional booking sites with a streamlined, stress-free experience.' },
        },
        {
          id: 12,
          title: 'Inventory Management System',
          category: 'saas',
          description: 'Cloud-based inventory and warehouse management solution for businesses.',
          longDescription: 'Track stock levels, automate reordering, manage multiple warehouses, and generate detailed reports.',
          image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80',
          tags: ['Vue.js', 'Django', 'PostgreSQL', 'Docker'],
          demoUrl: '#',
          githubUrl: '#',
          featured: false,
          stats: { users: '35K+', rating: '4.7/5', performance: '93/100' },
          features: ['Real-time stock level tracking', 'Automated low-stock reorder alerts', 'Multi-warehouse management', 'Detailed inventory reports and analytics', 'Barcode scanning and supplier integration'],
          projectImpact: { title: 'Project Impact', description: 'Businesses using this system reduced stockouts by 70% and overstock by 45%, cutting inventory costs significantly while improving order fulfillment speed.' },
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
      title: "Our Services | Madeny Digital Services | Computer & Phone Repair, Web Development",
      description: "Professional computer repair, cell phone repair & unlocking, device sales, and web development services in Calgary. Quality service at competitive prices.",
      keywords: "computer repair calgary, cell phone repair, phone unlocking, device sales, web development services",
      ogTitle: "Our Services | Madeny Digital Services",
      ogDescription: "Expert computer & cell phone repair, quality device sales, and professional web development services.",
    },
    sections: {
      items: [
        {
          id: 'computer-repair',
          title: 'Computer Repair',
          shortDesc: 'Expert diagnostics & repair for all brands',
          heroDescription: 'Get your computer running like new with our professional repair services. From hardware failures to software issues, our certified technicians handle it all with precision and care.',
          image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=1200&q=80',
          features: [
            { title: 'Hardware Repair', description: 'Motherboard, RAM, power supply, and component-level repairs for desktops and laptops.' },
            { title: 'Virus & Malware Removal', description: 'Complete system cleaning and protection setup to keep your data safe.' },
            { title: 'Data Recovery', description: 'Recover lost files from crashed hard drives, SSDs, and corrupted storage devices.' },
            { title: 'Performance Upgrades', description: 'RAM upgrades, SSD installation, and optimization for faster performance.' },
            { title: 'Screen Replacement', description: 'LCD/LED screen repairs and replacements for laptops and monitors.' },
            { title: 'System Diagnostics', description: 'Comprehensive testing to identify issues and recommend solutions.' },
          ],
          pricing: [
            { service: 'Diagnostic & Assessment', price: 'FREE', note: 'With repair' },
            { service: 'Virus/Malware Removal', price: '$79+', note: 'Same day service' },
            { service: 'Hardware Repair', price: '$99+', note: 'Parts extra' },
            { service: 'Data Recovery', price: '$149+', note: 'Based on complexity' },
            { service: 'SSD/RAM Upgrade', price: '$49+', note: 'Plus parts' },
            { service: 'OS Installation', price: '$69', note: 'Windows/Linux' },
          ],
          benefits: ['Same-day service available', 'Free diagnostics with repair', '90-day warranty on repairs', 'Certified technicians', 'All brands supported', 'Pickup & delivery available'],
          faqs: [
            { question: 'How long does a typical repair take?', answer: 'Most repairs are completed within 24-48 hours. Simple issues like virus removal can often be done same-day, while complex hardware repairs may take 2-3 days.' },
            { question: 'Do you offer a warranty on repairs?', answer: 'Yes! All our repairs come with a 90-day warranty covering both parts and labor.' },
            { question: 'Can you recover data from a dead hard drive?', answer: 'In many cases, yes. We have specialized tools for data recovery. Success rate depends on the type of failure. We offer free assessment.' },
          ],
        },
        {
          id: 'cell-phone-repair',
          title: 'Cell Phone Repair & Unlocking',
          shortDesc: 'Fast repairs & carrier unlocking for all phones',
          heroDescription: 'Cracked screen? Dead battery? Locked to a carrier? We provide fast, reliable cell phone repair and unlocking services for iPhone, Samsung, and all major brands.',
          image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=1200&q=80',
          features: [
            { title: 'Screen Repair', description: 'Premium quality screen replacements for iPhones, Samsung Galaxy, and all Android devices.' },
            { title: 'Battery Replacement', description: "Restore your phone's battery life with genuine replacement batteries." },
            { title: 'Carrier Unlocking', description: 'Unlock your phone from any carrier to use with any network worldwide.' },
            { title: 'Water Damage Repair', description: 'Professional cleaning and component repair for water-damaged devices.' },
            { title: 'Charging Port Repair', description: 'Fix charging issues with port replacement and cleaning services.' },
            { title: 'Software Issues', description: 'Fix boot loops, software crashes, and restore bricked devices.' },
          ],
          pricing: [
            { service: 'iPhone Screen Repair', price: '$89+', note: 'Model dependent' },
            { service: 'Samsung Screen Repair', price: '$99+', note: 'Model dependent' },
            { service: 'Battery Replacement', price: '$49+', note: 'Most models' },
            { service: 'Carrier Unlock', price: '$29+', note: 'Network dependent' },
            { service: 'Water Damage Treatment', price: '$79+', note: 'No fix, no fee' },
            { service: 'Charging Port Repair', price: '$59+', note: 'Parts included' },
          ],
          benefits: ['While-you-wait repairs', 'Quality OEM parts', 'Lifetime warranty on screens', 'All phone brands', 'IMEI unlocking', 'No appointment needed'],
          faqs: [
            { question: 'How long does a screen repair take?', answer: 'Most screen repairs are completed in 30-60 minutes while you wait.' },
            { question: 'Will unlocking void my warranty?', answer: 'No, carrier unlocking is legal and does not void your manufacturer warranty.' },
            { question: 'Do you use original parts?', answer: "We offer both OEM and high-quality aftermarket options. We'll discuss the best choice for your needs and budget." },
          ],
        },
        {
          id: 'device-sales',
          title: 'Mobile & Computer Sales',
          shortDesc: 'Quality new & refurbished devices',
          heroDescription: 'Find the perfect device at the right price. We offer a curated selection of new and certified refurbished smartphones, laptops, and computers, plus all the accessories you need.',
          image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1200&q=80',
          features: [
            { title: 'Smartphones', description: 'Latest iPhones, Samsung Galaxy, Google Pixel, and budget-friendly options.' },
            { title: 'Laptops & Computers', description: 'Gaming laptops, business notebooks, desktops, and custom builds.' },
            { title: 'Certified Refurbished', description: 'Quality-tested refurbished devices at significant savings with warranty.' },
            { title: 'Computer Parts', description: 'RAM, SSDs, graphics cards, and components for upgrades and builds.' },
            { title: 'Accessories', description: 'Cases, chargers, cables, screen protectors, and peripherals.' },
            { title: 'Protection Plans', description: 'Extended warranty and accidental damage protection options.' },
          ],
          pricing: [
            { service: 'Refurbished iPhones', price: '$299+', note: 'Grade A condition' },
            { service: 'Refurbished Laptops', price: '$399+', note: 'Warranty included' },
            { service: 'New Smartphones', price: '$199+', note: 'All brands' },
            { service: 'Phone Cases', price: '$15+', note: 'Wide selection' },
            { service: 'Chargers & Cables', price: '$12+', note: 'Fast charging' },
            { service: 'Screen Protectors', price: '$10+', note: 'Free installation' },
          ],
          benefits: ['Price match guarantee', '30-day return policy', 'Warranty on all devices', 'Trade-in program', 'Financing available', 'Expert advice'],
          faqs: [
            { question: 'What does "certified refurbished" mean?', answer: 'Our certified refurbished devices are professionally restored to like-new condition, thoroughly tested, and come with a warranty.' },
            { question: 'Do you offer trade-ins?', answer: 'Yes! Bring in your old device and get credit toward your new purchase.' },
            { question: 'Can I finance my purchase?', answer: 'We offer flexible financing options with approved credit. Ask our staff for details.' },
          ],
        },
        {
          id: 'web-development',
          title: 'Web Development',
          shortDesc: 'Custom websites that drive results',
          heroDescription: 'Transform your online presence with a stunning, high-performance website. From business sites to e-commerce platforms, we build digital experiences that convert visitors into customers.',
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
          features: [
            { title: 'Business Websites', description: 'Professional websites that showcase your brand and attract customers.' },
            { title: 'E-Commerce', description: 'Powerful online stores with secure payments and inventory management.' },
            { title: 'UI/UX Design', description: 'Beautiful, intuitive designs that provide exceptional user experiences.' },
            { title: 'SEO Optimization', description: 'Built-in SEO best practices to help you rank higher on Google.' },
            { title: 'Mobile Responsive', description: 'Websites that look perfect on all devices - phones, tablets, and desktops.' },
            { title: 'Performance', description: 'Lightning-fast loading speeds for better user experience and SEO.' },
          ],
          pricing: [
            { service: 'Landing Page', price: '$499+', note: 'Single page site' },
            { service: 'Business Website', price: '$1,499+', note: '5-10 pages' },
            { service: 'E-Commerce Store', price: '$2,999+', note: 'Full featured' },
            { service: 'Custom Web App', price: '$4,999+', note: 'Quote required' },
            { service: 'Website Redesign', price: '$999+', note: 'Modernize existing' },
            { service: 'Monthly Maintenance', price: '$99/mo', note: 'Updates & support' },
          ],
          benefits: ['Modern technologies', 'Mobile-first design', 'SEO optimized', 'Fast loading', 'Secure & reliable', 'Ongoing support'],
          faqs: [
            { question: 'How long does it take to build a website?', answer: 'A typical business website takes 2-4 weeks. E-commerce sites and custom applications may take 4-8 weeks depending on complexity.' },
            { question: 'Do you provide hosting?', answer: 'Yes, we offer managed hosting packages or can deploy to your preferred hosting provider.' },
            { question: 'Can I update the website myself?', answer: 'Absolutely! We build with user-friendly CMS systems and provide training so you can easily make updates.' },
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
