import { Course } from '@/types'

export const mockCourses: Course[] = [
  {
    id: '1',
    title: 'AI & Machine Learning Fundamentals',
    slug: 'ai-ml-fundamentals',
    shortDescription: 'Master the fundamentals of AI and ML with hands-on projects using NVIDIA AI Lab',
    description: 'Comprehensive course covering AI, Machine Learning, and Deep Learning concepts with practical implementation.',
    category: 'AI',
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
    bannerImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200',
    instructor: {
      name: 'Dr. Rajesh Kumar',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
      bio: 'PhD in AI with 15+ years of experience in Machine Learning and Deep Learning',
      designation: 'Senior AI Researcher & NVIDIA Certified Instructor',
    },
    curriculum: [
      {
        module: 1,
        title: 'Introduction to AI',
        topics: ['What is AI?', 'History of AI', 'AI Applications', 'AI Ethics'],
        duration: '4 hours',
      },
      {
        module: 2,
        title: 'Machine Learning Basics',
        topics: ['Supervised Learning', 'Unsupervised Learning', 'Algorithms', 'Model Training'],
        duration: '6 hours',
      },
      {
        module: 3,
        title: 'Deep Learning & Neural Networks',
        topics: ['Neural Networks', 'CNNs', 'RNNs', 'Transfer Learning'],
        duration: '8 hours',
      },
      {
        module: 4,
        title: 'Hands-on Projects',
        topics: ['Image Classification', 'NLP Project', 'Model Deployment', 'Real-world Applications'],
        duration: '10 hours',
      },
    ],
    learningOutcomes: [
      'Understand core AI and ML concepts',
      'Build and train ML models from scratch',
      'Implement neural networks using TensorFlow/PyTorch',
      'Deploy AI models in production',
      'Work on real-world AI projects',
    ],
    prerequisites: [
      'Basic Python programming',
      'High school mathematics',
      'Passion for learning AI',
    ],
    projects: [
      {
        title: 'Image Classification System',
        description: 'Build a CNN-based image classifier for real-world objects',
      },
      {
        title: 'Chatbot using NLP',
        description: 'Create an intelligent chatbot using natural language processing',
      },
    ],
    pricing: {
      originalPrice: 1100,
      discountedPrice: 1100,
      currency: 'INR',
      isDiscountActive: false,
      discountEndDate: '2024-12-31',
    },
    duration: {
      weeks: 12,
      hoursPerWeek: 4,
      totalHours: 48,
    },
    level: 'Beginner',
    language: 'English & Hindi',
    certificateIncluded: true,
    rating: {
      average: 4.8,
      count: 234,
    },
    studentsEnrolled: 1250,
    features: [
      'NVIDIA AI Lab Access',
      'Live Projects',
      'Industry Mentorship',
      'Placement Assistance',
      'Lifetime Access',
      'Certificate of Completion',
    ],
    faqs: [
      {
        question: 'Do I need prior programming experience?',
        answer: 'Basic Python knowledge is recommended but not mandatory. We cover Python basics in the initial modules.',
      },
      {
        question: 'Will I get a certificate?',
        answer: 'Yes, you will receive an MPIT CoE verified certificate upon successful completion.',
      },
    ],
    isFeatured: true,
    tags: ['AI', 'Machine Learning', 'Deep Learning', 'NVIDIA', 'Python'],
  },
  {
    id: '2',
    title: 'Advanced Cyber Security & Ethical Hacking',
    slug: 'cyber-security-ethical-hacking',
    shortDescription: 'Become a certified ethical hacker and learn to secure systems against cyber threats',
    description: 'Comprehensive cybersecurity course covering penetration testing, network security, and ethical hacking.',
    category: 'CyberSecurity',
    thumbnail: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800',
    bannerImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200',
    instructor: {
      name: 'Amit Sharma',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200',
      bio: 'Certified Ethical Hacker (CEH) with 10+ years in cybersecurity',
      designation: 'Senior Security Consultant & CEH Instructor',
    },
    curriculum: [
      {
        module: 1,
        title: 'Introduction to Cybersecurity',
        topics: ['Cyber Threats', 'Security Fundamentals', 'CIA Triad', 'Attack Vectors'],
        duration: '5 hours',
      },
      {
        module: 2,
        title: 'Network Security',
        topics: ['Network Protocols', 'Firewalls', 'IDS/IPS', 'VPNs'],
        duration: '6 hours',
      },
      {
        module: 3,
        title: 'Ethical Hacking Techniques',
        topics: ['Penetration Testing', 'Vulnerability Assessment', 'Exploitation', 'Post-Exploitation'],
        duration: '8 hours',
      },
      {
        module: 4,
        title: 'Security Tools & Labs',
        topics: ['Kali Linux', 'Metasploit', 'Wireshark', 'Real-world Labs'],
        duration: '9 hours',
      },
    ],
    learningOutcomes: [
      'Master ethical hacking techniques',
      'Perform penetration testing',
      'Secure networks and systems',
      'Use industry-standard security tools',
      'Prepare for CEH certification',
    ],
    prerequisites: [
      'Basic networking knowledge',
      'Understanding of operating systems',
      'Interest in cybersecurity',
    ],
    projects: [
      {
        title: 'Network Penetration Test',
        description: 'Conduct a full penetration test on a simulated corporate network',
      },
      {
        title: 'Web Application Security Audit',
        description: 'Identify and exploit vulnerabilities in web applications',
      },
    ],
    pricing: {
      originalPrice: 3000,
      discountedPrice: 3000,
      currency: 'INR',
      isDiscountActive: false,
      discountEndDate: '2024-12-31',
    },
    duration: {
      weeks: 16,
      hoursPerWeek: 4,
      totalHours: 64,
    },
    level: 'Intermediate',
    language: 'English & Hindi',
    certificateIncluded: true,
    rating: {
      average: 4.9,
      count: 189,
    },
    studentsEnrolled: 890,
    features: [
      'Cyber Security Lab Access',
      'Kali Linux Training',
      'Live Hacking Demos',
      'CEH Exam Preparation',
      'Job Placement Support',
      'Industry Certificate',
    ],
    faqs: [
      {
        question: 'Is this course suitable for beginners?',
        answer: 'This course is designed for intermediate learners. Basic networking and OS knowledge is recommended.',
      },
      {
        question: 'Will I be certified as an ethical hacker?',
        answer: 'You will receive MPIT CoE certification and be prepared for CEH certification exam.',
      },
    ],
    isFeatured: true,
    tags: ['Cybersecurity', 'Ethical Hacking', 'Penetration Testing', 'Network Security', 'CEH'],
  },
  {
    id: '3',
    title: 'Drone Technology & Aerial Robotics',
    slug: 'drone-technology-aerial-robotics',
    shortDescription: 'Learn to build, program, and fly drones with hands-on training',
    description: 'Complete drone technology course from basics to advanced aerial robotics and autonomous flight.',
    category: 'Drone',
    thumbnail: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800',
    bannerImage: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=1200',
    instructor: {
      name: 'Vikram Singh',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200',
      bio: 'Drone pilot and robotics expert with 8+ years experience',
      designation: 'Senior Drone Engineer & DGCA Certified Instructor',
    },
    curriculum: [
      {
        module: 1,
        title: 'Introduction to Drones',
        topics: ['Drone Types', 'Components', 'Flight Mechanics', 'Regulations'],
        duration: '4 hours',
      },
      {
        module: 2,
        title: 'Drone Assembly & Hardware',
        topics: ['Frame Assembly', 'Motors & ESCs', 'Flight Controllers', 'Sensors'],
        duration: '6 hours',
      },
      {
        module: 3,
        title: 'Programming & Autonomous Flight',
        topics: ['Flight Programming', 'GPS Navigation', 'Obstacle Avoidance', 'Mission Planning'],
        duration: '7 hours',
      },
      {
        module: 4,
        title: 'Practical Training & Projects',
        topics: ['Manual Flight', 'FPV Flying', 'Aerial Photography', 'Competition Preparation'],
        duration: '8 hours',
      },
    ],
    learningOutcomes: [
      'Build drones from scratch',
      'Program autonomous flight systems',
      'Fly drones manually and autonomously',
      'Understand drone regulations',
      'Prepare for DGCA certification',
    ],
    prerequisites: [
      'Basic electronics knowledge',
      'Interest in robotics',
      'No prior drone experience needed',
    ],
    projects: [
      {
        title: 'Build Your Own Drone',
        description: 'Assemble and program a fully functional quadcopter',
      },
      {
        title: 'Autonomous Delivery Drone',
        description: 'Create a GPS-guided delivery drone system',
      },
    ],
    pricing: {
      originalPrice: 3000,
      discountedPrice: 3000,
      currency: 'INR',
      isDiscountActive: false,
      discountEndDate: '2024-12-31',
    },
    duration: {
      weeks: 10,
      hoursPerWeek: 5,
      totalHours: 50,
    },
    level: 'Beginner',
    language: 'English & Hindi',
    certificateIncluded: true,
    rating: {
      average: 4.7,
      count: 156,
    },
    studentsEnrolled: 678,
    features: [
      'Drone Lab Access',
      'Drone Kit Included',
      'Flight Training',
      'DGCA Exam Prep',
      'Competition Participation',
      'Certificate & License Support',
    ],
    faqs: [
      {
        question: 'Do I get to keep the drone I build?',
        answer: 'Yes! The drone kit is included in the course fee and you take it home.',
      },
      {
        question: 'Is DGCA certification included?',
        answer: 'We prepare you for DGCA certification. The exam fee is separate.',
      },
    ],
    isFeatured: true,
    tags: ['Drones', 'Robotics', 'Aerial Photography', 'DGCA', 'Autonomous Flight'],
  },
  {
    id: '4',
    title: '3D Printing & Additive Manufacturing',
    slug: '3d-printing-additive-manufacturing',
    shortDescription: 'Master 3D printing technology from design to production',
    description: 'Comprehensive course on 3D printing, CAD design, and additive manufacturing technologies.',
    category: '3DPrinting',
    thumbnail: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800',
    bannerImage: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200',
    instructor: {
      name: 'Priya Mehta',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
      bio: 'CAD expert and 3D printing specialist with 7+ years experience',
      designation: 'Senior Design Engineer & 3D Printing Consultant',
    },
    curriculum: [
      {
        module: 1,
        title: 'Introduction to 3D Printing',
        topics: ['3D Printing Basics', 'Technologies', 'Materials', 'Applications'],
        duration: '3 hours',
      },
      {
        module: 2,
        title: 'CAD Design for 3D Printing',
        topics: ['Fusion 360', 'Tinkercad', '3D Modeling', 'Design Principles'],
        duration: '6 hours',
      },
      {
        module: 3,
        title: '3D Printer Operation',
        topics: ['Printer Setup', 'Slicing Software', 'Print Settings', 'Troubleshooting'],
        duration: '5 hours',
      },
      {
        module: 4,
        title: 'Advanced Projects',
        topics: ['Complex Designs', 'Multi-material Printing', 'Post-processing', 'Business Applications'],
        duration: '6 hours',
      },
    ],
    learningOutcomes: [
      'Design 3D models using CAD software',
      'Operate 3D printers professionally',
      'Choose right materials for projects',
      'Start a 3D printing business',
      'Create commercial products',
    ],
    prerequisites: [
      'Basic computer skills',
      'Creative mindset',
      'No prior 3D design experience needed',
    ],
    projects: [
      {
        title: 'Custom Product Design',
        description: 'Design and 3D print a functional consumer product',
      },
      {
        title: 'Prototype Development',
        description: 'Create prototypes for a startup idea',
      },
    ],
    pricing: {
      originalPrice: 6000,
      discountedPrice: 6000,
      currency: 'INR',
      isDiscountActive: false,
      discountEndDate: '2024-12-31',
    },
    duration: {
      weeks: 8,
      hoursPerWeek: 4,
      totalHours: 32,
    },
    level: 'Beginner',
    language: 'English & Hindi',
    certificateIncluded: true,
    rating: {
      average: 4.6,
      count: 142,
    },
    studentsEnrolled: 567,
    features: [
      '3D Printing Lab Access',
      'CAD Software Training',
      'Material Samples',
      'Business Startup Guide',
      'Portfolio Building',
      'Industry Certificate',
    ],
    faqs: [
      {
        question: 'Do I need a 3D printer at home?',
        answer: 'No, you will have full access to our 3D printing lab with multiple printers.',
      },
      {
        question: 'Which CAD software will we learn?',
        answer: 'We cover Fusion 360, Tinkercad, and other industry-standard tools.',
      },
    ],
    isFeatured: false,
    tags: ['3D Printing', 'CAD', 'Design', 'Manufacturing', 'Prototyping'],
  },
]

export const getCourseBySlug = (slug: string): Course | undefined => {
  return mockCourses.find(course => course.slug === slug)
}

export const getCoursesByCategory = (category: string): Course[] => {
  if (category === 'all') return mockCourses
  return mockCourses.filter(course => course.category === category)
}

export const getFeaturedCourses = (): Course[] => {
  return mockCourses.filter(course => course.isFeatured)
}
