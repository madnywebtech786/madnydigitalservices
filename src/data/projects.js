export const projectCategories = [
  { id: 'all', name: 'All Projects', color: 'from-primary to-secondary' },
  { id: 'web', name: 'Web Development', color: 'from-blue-500 to-cyan-500' },
  { id: 'mobile', name: 'Mobile Apps', color: 'from-purple-500 to-pink-500' },
  { id: 'ecommerce', name: 'E-Commerce', color: 'from-orange-500 to-red-500' },
  { id: 'saas', name: 'SaaS Platforms', color: 'from-green-500 to-emerald-500' },
  { id: 'ai', name: 'AI/ML', color: 'from-indigo-500 to-violet-500' },
];

export const projects = [
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
    stats: {
      users: '50K+',
      rating: '4.8/5',
      performance: '98/100'
    }
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
    stats: {
      users: '30K+',
      rating: '4.9/5',
      performance: '95/100'
    }
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
    stats: {
      users: '100K+',
      rating: '4.7/5',
      performance: '96/100'
    }
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
    stats: {
      users: '75K+',
      rating: '4.6/5',
      performance: '94/100'
    }
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
    stats: {
      users: '200K+',
      rating: '4.8/5',
      performance: '97/100'
    }
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
    stats: {
      users: '15K+',
      rating: '4.9/5',
      performance: '93/100'
    }
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
    stats: {
      users: '45K+',
      rating: '4.7/5',
      performance: '99/100'
    }
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
    stats: {
      users: '120K+',
      rating: '4.8/5',
      performance: '96/100'
    }
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
    stats: {
      users: '80K+',
      rating: '4.6/5',
      performance: '95/100'
    }
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
    stats: {
      users: '25K+',
      rating: '4.7/5',
      performance: '92/100'
    }
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
    stats: {
      users: '90K+',
      rating: '4.5/5',
      performance: '94/100'
    }
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
    stats: {
      users: '35K+',
      rating: '4.7/5',
      performance: '93/100'
    }
  }
];

export function getProjectsByCategory(category) {
  if (category === 'all') {
    return projects;
  }
  return projects.filter(project => project.category === category);
}

export function getFeaturedProjects() {
  return projects.filter(project => project.featured);
}

export function getProjectById(id) {
  return projects.find(project => project.id === id);
}
