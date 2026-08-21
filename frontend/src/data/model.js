export const profile = {
  name: 'Feyistu Endale',
  title: 'Full Stack Developer',
  study: '4th Year Software Engineering Student at Addis Ababa University',
  description: 'I build polished full-stack applications with React, Node.js, MongoDB, and API-driven design. I am enthusiastic about AI and machine learning, and I present every project with professional structure and clear delivery.',
  email: 'fayistuendale@gmail.com',
  phone: '+251985214646',
  location: 'Addis Ababa, Ethiopia',
  github: 'https://github.com/feyistu123',
  githubHandle: '@feyistu123',
  linkedin: 'https://www.linkedin.com/in/feyistu-endale-8b9198377',
  linkedinHandle: 'Feyistu Endale'
};

export const skills = [
  'React.js & Vite',
  'JavaScript / ES6+',
  'Node.js & Express',
  'MongoDB Atlas & Mongoose',
  'MySQL',
  'PostgreSQL',
  'HTML & CSS',
  'REST APIs',
  'Python',
  'Responsive UI',
  'Git & GitHub',
  'CapCut & Video Editing',
  'Flutter & Dart',
  'Problem Solving Mindset',
  'AI & Machine Learning Enthusiast'
];

export const projects = [
  {
    title: 'Personal Professional Portfolio Website',
    description: 'A polished portfolio experience built with React and modern UI patterns to showcase skills, projects, and contact flow.',
    tags: ['React', 'Vite', 'Responsive UI', 'Portfolio'],
    liveDemo: 'https://feyistu-endale-profile.onrender.com/'
  },
  {
    title: 'Client Lead Management System (Mini CRM)',
    description: 'A CRM-style app for tracking clients, leads, and follow-up activity, backed by Node.js and MongoDB Atlas.',
    tags: ['JavaScript', 'Node.js', 'Express', 'MongoDB'],
    liveDemo: 'https://mini-crm-07g1.onrender.com'
  },
  {
    title: 'Solomon Tutoring',
    description: 'A tutoring platform concept for managing schedules, courses, and service discovery.',
    tags: ['JavaScript', 'Vite', 'Express', 'MongoDB', 'Responsive UI'],
    liveDemo: 'https://solomon-tutoring-frontend.onrender.com'
  },
  {
    title: 'Odaa Medium Clinic Website',
    description: 'A professional medical clinic website built for a real healthcare provider. Features appointment booking, doctor profiles, service descriptions, and health information resources. Successfully pitched and delivered to the clinic owner.',
    tags: ['React', 'JavaScript', 'PHP', 'Client Project', 'Healthcare'],
    liveDemo: 'https://oda-medium-clinic.onrender.com',
  },
  {
    title: 'Search Algorithm Visualizer',
    description: 'An interactive visualization tool that teaches searching and sorting algorithms with step-by-step animations.',
    tags: ['Python', 'Education', 'Algorithms']
  },
  {
    title: 'Perfume Shopping',
    description: 'A cross-platform mobile app for perfume enthusiasts. Features product catalog, filtering, cart management, and seamless checkout experience. Built with Flutter for Android.',
    tags: ['Flutter', 'Dart', 'Firebase', 'Mobile App', 'E-commerce'],
    galleryImages: [
      new URL('../assets/perfume_app1.jpg', import.meta.url).href,
      new URL('../assets/perfume_app2.jpg', import.meta.url).href,
      new URL('../assets/perfume_app3.jpg', import.meta.url).href,
      new URL('../assets/perfume_app4.jpg', import.meta.url).href
    ]
  },
  {
    title: 'Ichthys Charity Organization (Full Stack)',
    description: 'A full-stack nonprofit website built with React for the frontend, Node.js/Express for the backend, and MongoDB (Mongoose) for content and donation management. Features: program pages, volunteer sign-up, donation flow, admin content management, and contact forms.',
    tags: ['React', 'Node.js', 'MongoDB', 'Mongoose', 'Full Stack'],
  },
  {
    title: 'Namer App',
    description: 'A creative name generator utility for brand naming, project ideas, and naming workflows.',
    tags: ['Flutter', 'Dart', 'Android App'],
  }
];
