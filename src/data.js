export const personal = {
  name: 'Mahesh T',
  role: 'Full-Stack Developer',
  tagline: 'I build real-time systems and AI-powered web apps that scale.',
  bio: `I'm a Full-Stack Developer from Bangalore pursuing my MCA at CMR Institute of Technology. I specialize in the MERN stack, with a deep passion for real-time collaboration systems, AI integration, and shipping products that actually work at scale. I believe great software is equal parts engineering rigor and user empathy.`,
  email: 'mahesh.mca24@cmrit.ac.in',
  phone: '+91-9663293978',
  location: 'Bangalore, India',
  linkedin: 'https://linkedin.com/in/mahesht07a8634',
  github: 'https://github.com/Mahesh-T7',
  resumeUrl: '/resume.pdf',
}

export const skills = {
  languages: [
    { name: 'JavaScript', level: 92 },
    { name: 'Java', level: 78 },
    { name: 'Python', level: 72 },
    { name: 'C', level: 65 },
  ],
  frontend: [
    { name: 'React.js', level: 90 },
    { name: 'Tailwind CSS', level: 88 },
    { name: 'HTML5 / CSS3', level: 92 },
    { name: 'AngularJS', level: 65 },
  ],
  backend: [
    { name: 'Node.js', level: 88 },
    { name: 'Express.js', level: 85 },
    { name: 'REST API', level: 90 },
    { name: 'Socket.io', level: 82 },
  ],
  database: [
    { name: 'MongoDB', level: 85 },
    { name: 'MySQL', level: 75 },
    { name: 'MongoDB Atlas', level: 80 },
  ],
  tools: [
    { name: 'Git / GitHub', level: 88 },
    { name: 'JWT / Auth', level: 82 },
    { name: 'OpenAI API', level: 80 },
    { name: 'WebRTC', level: 75 },
  ],
}

export const skillTags = [
  'React.js', 'Node.js', 'MongoDB', 'Express.js', 'Socket.io', 'WebRTC',
  'OpenAI API', 'JWT', 'Tailwind CSS', 'REST API', 'Java', 'Python',
  'JavaScript ES6+', 'MySQL', 'Git', 'Postman', 'VS Code',
]

export const projects = [
  {
    id: 1,
    title: 'AI Collaborative Coding Platform',
    status: 'Ongoing',
    description: 'Real-time collaborative IDE supporting 50+ concurrent users with AI-powered code completion, video conferencing, and automated documentation generation.',
    highlights: [
      '50+ concurrent users, sub-200ms latency',
      '1000+ requests/min, 99.9% uptime',
      '40% reduction in debugging time via AI',
      'JWT-based role access control',
    ],
    tech: ['React.js', 'Node.js', 'MongoDB', 'Socket.io', 'WebRTC', 'OpenAI API', 'JWT'],
    color: '#00ff87',
    github: 'https://github.com/Mahesh-T7',
    demo: null,
    icon: '⚡',
  },
  {
    id: 2,
    title: 'Smart Image Recognition App',
    status: '2024',
    description: 'Production-ready web app for real-time image analysis using OpenAI Vision API with camera access, drag-and-drop upload, and batch processing.',
    highlights: [
      '95%+ accuracy for object detection',
      '100+ images processed in production',
      '90+ Lighthouse performance score',
      'WCAG 2.1 AA accessibility compliant',
    ],
    tech: ['React.js', 'OpenAI API', 'Navigator API', 'Canvas API', 'FileReader API'],
    color: '#00d4ff',
    github: 'https://github.com/Mahesh-T7',
    demo: 'https://mag32-imagerecognitionapp.web.val.run/',
    icon: '👁',
  },
  {
    id: 3,
    title: 'AI Chatbot with Voice Interaction',
    status: '2024',
    description: 'Interactive AI chatbot with natural voice recognition and text-to-speech, achieving 200ms response time across 500+ user queries with context-aware NLP.',
    highlights: [
      '200ms average response time',
      '500+ queries handled across domains',
      'Context-aware NLP conversations',
      'WCAG 2.1 AA compliant UI',
    ],
    tech: ['JavaScript', 'Web Speech API', 'REST API', 'CSS3'],
    color: '#ff6b6b',
    github: 'https://github.com/Mahesh-T7',
    demo: null,
    icon: '🎙',
  },
]

export const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'CMR Institute of Technology',
    location: 'Bangalore, India',
    period: '2024 – May 2026',
    gpa: '7.49 / 10.0',
    status: 'Ongoing',
  },
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'Government First Grade College',
    location: 'Sindhanur, India',
    period: '2021 – 2024',
    gpa: '8.37 / 10.0',
    status: 'Completed',
  },
]

export const certifications = [
  { name: 'Learn Java Programming – Beginner to Master', issuer: 'Udemy' },
  { name: 'Front End Web Development', issuer: 'Infosys Springboard' },
  { name: 'Machine Learning with Python', issuer: 'Infosys Springboard' },
]

export const stats = [
  { value: '99.9%', label: 'Uptime achieved' },
  { value: '1000+', label: 'Requests/min handled' },
  { value: '50+', label: 'Concurrent users supported' },
  { value: '40%', label: 'Debug time reduced' },
]
