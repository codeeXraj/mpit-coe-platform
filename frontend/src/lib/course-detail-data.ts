import { Course } from '@/types'

// Simplified course data for detail page
export interface SimpleCourse {
  slug: string;
  title: string;
  description: string;
  category: string;
  duration: string;
  enrolled: string;
  rating: number;
  reviews: number;
  price: number;
  originalPrice?: number;
  discount?: number;
  curriculum: string[];
}

export const mockCourses: SimpleCourse[] = [
  {
    slug: 'ai-ml-fundamentals',
    title: 'AI & Machine Learning Fundamentals',
    description: 'Master the fundamentals of AI and ML with hands-on projects using NVIDIA AI Lab. Learn from industry experts and build real-world applications.',
    category: 'Artificial Intelligence',
    duration: '30-80 Hours',
    enrolled: '1,250+',
    rating: 4.8,
    reviews: 234,
    price: 1100,
    curriculum: [
      'Introduction to AI & Machine Learning',
      'Python for Data Science',
      'Supervised Learning Algorithms',
      'Unsupervised Learning & Clustering',
      'Deep Learning & Neural Networks',
      'Convolutional Neural Networks (CNN)',
      'Recurrent Neural Networks (RNN)',
      'Natural Language Processing (NLP)',
      'Computer Vision Applications',
      'Model Deployment & Production',
      'Real-world AI Projects',
      'Capstone Project'
    ]
  },
  {
    slug: 'cyber-security-ethical-hacking',
    title: 'Advanced Cyber Security & Ethical Hacking',
    description: 'Become a certified ethical hacker and learn to secure systems against cyber threats. Master penetration testing and network security.',
    category: 'Cyber Security',
    duration: '40 Hours',
    enrolled: '890+',
    rating: 4.9,
    reviews: 189,
    price: 3000,
    curriculum: [
      'Introduction to Cybersecurity',
      'Network Security Fundamentals',
      'Linux & Kali Linux Basics',
      'Ethical Hacking Methodology',
      'Scanning & Enumeration',
      'Vulnerability Assessment',
      'System Hacking & Exploitation',
      'Web Application Security',
      'Wireless Network Security',
      'Cryptography & Encryption',
      'Penetration Testing',
      'Security Tools & Lab Practice'
    ]
  },
  {
    slug: 'drone-technology-aerial-robotics',
    title: 'Drone Technology & Aerial Robotics',
    description: 'Learn to build, program, and fly drones with hands-on training. Get DGCA certification preparation and compete in drone competitions.',
    category: 'Drone Technology',
    duration: '40 Hours',
    enrolled: '678+',
    rating: 4.7,
    reviews: 156,
    price: 3000,
    curriculum: [
      'Introduction to Drones & UAVs',
      'Drone Components & Assembly',
      'Flight Controllers & Sensors',
      'Drone Electronics & Wiring',
      'Manual Flight Training',
      'FPV (First Person View) Flying',
      'Drone Programming Basics',
      'Autonomous Flight Systems',
      'GPS Navigation & Waypoints',
      'Aerial Photography & Videography',
      'DGCA Regulations & Certification',
      'Drone Business Applications'
    ]
  },
  {
    slug: '3d-printing-additive-manufacturing',
    title: '3D Printing & Additive Manufacturing',
    description: 'Master 3D printing technology from design to production. Learn CAD design, printer operation, and build commercial products.',
    category: '3D Printing',
    duration: '80 Hours',
    enrolled: '567+',
    rating: 4.6,
    reviews: 142,
    price: 6000,
    curriculum: [
      'Introduction to 3D Printing',
      'CAD Design with Fusion 360',
      'Tinkercad for Beginners',
      '3D Modeling Techniques',
      '3D Printer Setup & Operation',
      'Slicing Software (Cura, Simplify3D)',
      'Materials & Filaments',
      'Print Optimization & Settings',
      'Troubleshooting Common Issues',
      'Post-processing Techniques',
      'Advanced Multi-material Printing',
      'Business Applications & Prototyping'
    ]
  }
];
