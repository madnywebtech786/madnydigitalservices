import {
  Monitor,
  Smartphone,
  ShoppingBag,
  Code2,
  Wrench,
  Unlock,
  Cpu,
  HardDrive,
  Shield,
  Zap,
  Clock,
  BadgeCheck,
  Laptop,
  Battery,
  Droplets,
  Wifi,
  Globe,
  Palette,
  Search,
  ShoppingCart,
} from 'lucide-react';

export const services = [
  {
    id: 'computer-repair',
    title: 'Computer Repair',
    shortDesc: 'Expert diagnostics & repair for all brands',
    heroDescription: 'Get your computer running like new with our professional repair services. From hardware failures to software issues, our certified technicians handle it all with precision and care.',
    icon: Monitor,
    secondaryIcon: Wrench,
    color: 'from-primary to-primary-dark',
    image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=1200&q=80',
    features: [
      {
        icon: HardDrive,
        title: 'Hardware Repair',
        description: 'Motherboard, RAM, power supply, and component-level repairs for desktops and laptops.',
      },
      {
        icon: Shield,
        title: 'Virus & Malware Removal',
        description: 'Complete system cleaning and protection setup to keep your data safe.',
      },
      {
        icon: HardDrive,
        title: 'Data Recovery',
        description: 'Recover lost files from crashed hard drives, SSDs, and corrupted storage devices.',
      },
      {
        icon: Zap,
        title: 'Performance Upgrades',
        description: 'RAM upgrades, SSD installation, and optimization for faster performance.',
      },
      {
        icon: Monitor,
        title: 'Screen Replacement',
        description: 'LCD/LED screen repairs and replacements for laptops and monitors.',
      },
      {
        icon: Cpu,
        title: 'System Diagnostics',
        description: 'Comprehensive testing to identify issues and recommend solutions.',
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
      'Same-day service available',
      'Free diagnostics with repair',
      '90-day warranty on repairs',
      'Certified technicians',
      'All brands supported',
      'Pickup & delivery available',
    ],
    faqs: [
      {
        question: 'How long does a typical repair take?',
        answer: 'Most repairs are completed within 24-48 hours. Simple issues like virus removal can often be done same-day, while complex hardware repairs may take 2-3 days.',
      },
      {
        question: 'Do you offer a warranty on repairs?',
        answer: 'Yes! All our repairs come with a 90-day warranty covering both parts and labor.',
      },
      {
        question: 'Can you recover data from a dead hard drive?',
        answer: 'In many cases, yes. We have specialized tools for data recovery. Success rate depends on the type of failure. We offer free assessment.',
      },
    ],
  },
  {
    id: 'cell-phone-repair',
    title: 'Cell Phone Repair & Unlocking',
    shortDesc: 'Fast repairs & carrier unlocking for all phones',
    heroDescription: 'Cracked screen? Dead battery? Locked to a carrier? We provide fast, reliable cell phone repair and unlocking services for iPhone, Samsung, and all major brands.',
    icon: Smartphone,
    secondaryIcon: Unlock,
    color: 'from-secondary to-secondary-dark',
    image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=1200&q=80',
    features: [
      {
        icon: Smartphone,
        title: 'Screen Repair',
        description: 'Premium quality screen replacements for iPhones, Samsung Galaxy, and all Android devices.',
      },
      {
        icon: Battery,
        title: 'Battery Replacement',
        description: 'Restore your phone\'s battery life with genuine replacement batteries.',
      },
      {
        icon: Unlock,
        title: 'Carrier Unlocking',
        description: 'Unlock your phone from any carrier to use with any network worldwide.',
      },
      {
        icon: Droplets,
        title: 'Water Damage Repair',
        description: 'Professional cleaning and component repair for water-damaged devices.',
      },
      {
        icon: Cpu,
        title: 'Charging Port Repair',
        description: 'Fix charging issues with port replacement and cleaning services.',
      },
      {
        icon: Wifi,
        title: 'Software Issues',
        description: 'Fix boot loops, software crashes, and restore bricked devices.',
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
      'While-you-wait repairs',
      'Quality OEM parts',
      'Lifetime warranty on screens',
      'All phone brands',
      'IMEI unlocking',
      'No appointment needed',
    ],
    faqs: [
      {
        question: 'How long does a screen repair take?',
        answer: 'Most screen repairs are completed in 30-60 minutes while you wait.',
      },
      {
        question: 'Will unlocking void my warranty?',
        answer: 'No, carrier unlocking is legal and does not void your manufacturer warranty.',
      },
      {
        question: 'Do you use original parts?',
        answer: 'We offer both OEM and high-quality aftermarket options. We\'ll discuss the best choice for your needs and budget.',
      },
    ],
  },
  {
    id: 'device-sales',
    title: 'Mobile & Computer Sales',
    shortDesc: 'Quality new & refurbished devices',
    heroDescription: 'Find the perfect device at the right price. We offer a curated selection of new and certified refurbished smartphones, laptops, and computers, plus all the accessories you need.',
    icon: ShoppingBag,
    secondaryIcon: Cpu,
    color: 'from-primary to-secondary',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1200&q=80',
    features: [
      {
        icon: Smartphone,
        title: 'Smartphones',
        description: 'Latest iPhones, Samsung Galaxy, Google Pixel, and budget-friendly options.',
      },
      {
        icon: Laptop,
        title: 'Laptops & Computers',
        description: 'Gaming laptops, business notebooks, desktops, and custom builds.',
      },
      {
        icon: BadgeCheck,
        title: 'Certified Refurbished',
        description: 'Quality-tested refurbished devices at significant savings with warranty.',
      },
      {
        icon: Cpu,
        title: 'Computer Parts',
        description: 'RAM, SSDs, graphics cards, and components for upgrades and builds.',
      },
      {
        icon: Battery,
        title: 'Accessories',
        description: 'Cases, chargers, cables, screen protectors, and peripherals.',
      },
      {
        icon: Shield,
        title: 'Protection Plans',
        description: 'Extended warranty and accidental damage protection options.',
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
      '30-day return policy',
      'Warranty on all devices',
      'Trade-in program',
      'Financing available',
      'Expert advice',
    ],
    faqs: [
      {
        question: 'What does "certified refurbished" mean?',
        answer: 'Our certified refurbished devices are professionally restored to like-new condition, thoroughly tested, and come with a warranty.',
      },
      {
        question: 'Do you offer trade-ins?',
        answer: 'Yes! Bring in your old device and get credit toward your new purchase.',
      },
      {
        question: 'Can I finance my purchase?',
        answer: 'We offer flexible financing options with approved credit. Ask our staff for details.',
      },
    ],
  },
  {
    id: 'web-development',
    title: 'Web Development',
    shortDesc: 'Custom websites that drive results',
    heroDescription: 'Transform your online presence with a stunning, high-performance website. From business sites to e-commerce platforms, we build digital experiences that convert visitors into customers.',
    icon: Code2,
    secondaryIcon: Globe,
    color: 'from-secondary to-primary',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
    features: [
      {
        icon: Globe,
        title: 'Business Websites',
        description: 'Professional websites that showcase your brand and attract customers.',
      },
      {
        icon: ShoppingCart,
        title: 'E-Commerce',
        description: 'Powerful online stores with secure payments and inventory management.',
      },
      {
        icon: Palette,
        title: 'UI/UX Design',
        description: 'Beautiful, intuitive designs that provide exceptional user experiences.',
      },
      {
        icon: Search,
        title: 'SEO Optimization',
        description: 'Built-in SEO best practices to help you rank higher on Google.',
      },
      {
        icon: Smartphone,
        title: 'Mobile Responsive',
        description: 'Websites that look perfect on all devices - phones, tablets, and desktops.',
      },
      {
        icon: Zap,
        title: 'Performance',
        description: 'Lightning-fast loading speeds for better user experience and SEO.',
      },
    ],
    pricing: [
      { service: 'Landing Page', price: '$499+', note: 'Single page site' },
      { service: 'Business Website', price: '$1,499+', note: '5-10 pages' },
      { service: 'E-Commerce Store', price: '$2,999+', note: 'Full featured' },
      { service: 'Custom Web App', price: '$4,999+', note: 'Quote required' },
      { service: 'Website Redesign', price: '$999+', note: 'Modernize existing' },
      { service: 'Monthly Maintenance', price: '$99/mo', note: 'Updates & support' },
    ],
    benefits: [
      'Modern technologies',
      'Mobile-first design',
      'SEO optimized',
      'Fast loading',
      'Secure & reliable',
      'Ongoing support',
    ],
    faqs: [
      {
        question: 'How long does it take to build a website?',
        answer: 'A typical business website takes 2-4 weeks. E-commerce sites and custom applications may take 4-8 weeks depending on complexity.',
      },
      {
        question: 'Do you provide hosting?',
        answer: 'Yes, we offer managed hosting packages or can deploy to your preferred hosting provider.',
      },
      {
        question: 'Can I update the website myself?',
        answer: 'Absolutely! We build with user-friendly CMS systems and provide training so you can easily make updates.',
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
