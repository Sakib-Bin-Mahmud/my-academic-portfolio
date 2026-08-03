// lib/data.ts
// Single source of truth for site content. Update here, not in components.
// Every fact in this file should be traceable to the academic CV / verified
// conversation record. Do not add unverified claims.

export const profile = {
  name: 'Sakib Mahmud Sovon',
  tagline: 'Computer Vision & Multimodal AI for Accessibility',
  location: 'Dhaka, Bangladesh',
  email: 'sakibmahmud.pepilika@gmail.com',
  links: {
    github: 'https://github.com/Sakib-Bin-Mahmud',
    linkedin: 'https://www.linkedin.com/in/sakib-bin-mahmud/',
    scholar: 'https://scholar.google.com/citations?hl=en&user=L0SVFNsAAAAJ',
    orcid: 'https://orcid.org/0009-0005-0727-6282',
  },
  bio: [
    "I'm a Computer Science and Engineering graduate from Khulna University working at the intersection of computer vision, multimodal AI, and accessibility technology.",
    'My research started with a specific question: could a lightweight model translate Bengali Sign Language in real time, on a device that could actually reach the people who need it? That question became my undergraduate thesis, then a two-stage YOLOv8n + MobileNetV2 pipeline that reached 99.56% accuracy at a 17.55MB footprint \u2014 published at IEEE COMPAS 2025.',
    "Since then I've extended that interest in low-resource, human-centered AI to multilingual LLM reasoning (NeuroPonic, presented at ICSASD 2026), while building production systems as a software engineer \u2014 from backend microservices for ed-tech platforms to a national government learning platform.",
    "I'm currently preparing for PhD applications (Fall 2027) in Computer Vision and Multimodal AI, focused on accessibility and low-resource language technology.",
  ],
  researchInterests: [
    'Computer Vision',
    'Multimodal AI',
    'Deep Learning',
    'Vision-Language Models',
    'Accessibility Technology',
    'Low-Resource NLP',
    'Human-Centered AI',
  ],
};

export const highlights = [
  {
    stat: '99.56%',
    label: 'Test Accuracy',
    detail: 'Real-time Bengali Sign Language translation on the BdSL49 benchmark \u2014 top performer among six architectures evaluated.',
  },
  {
    stat: '17.55MB',
    label: 'Model Footprint',
    detail: 'Compact enough for edge / mobile deployment, without trading away accuracy.',
  },
  {
    stat: '5,000+',
    label: 'Students Reached',
    detail: 'Mathematics instruction delivered across 20 schools in the Jhenaidah district.',
  },
  {
    stat: '3',
    label: 'Publications',
    detail: 'IEEE COMPAS 2025, ICSASD 2026, and IEEE CS BDC Symposium 2024.',
  },
];

export type Publication = {
  authors: string;
  title: string;
  venue: string;
  year: string;
  doi?: string;
  doiUrl?: string;
  link?: string;
  linkLabel?: string;
};

export const publications: Publication[] = [
  {
    authors: 'S. P. Mistry, S. M. Sovon, M. Gain, and R. Debnath',
    title: 'A Lightweighted CNN-Based Framework for Real-Time Bengali Sign Language Recognition and Translation',
    venue: 'IEEE 2nd International Conference on Computing, Applications and Systems (COMPAS 2025), Kushtia, Bangladesh',
    year: '2025',
    doi: '10.1109/COMPAS67506.2025.11381726',
    doiUrl: 'https://doi.org/10.1109/COMPAS67506.2025.11381726',
    link: 'https://ieeexplore.ieee.org/document/11381726',
    linkLabel: 'IEEE Xplore',
  },
  {
    authors: 'H. R. Shihab, S. M. Sovon, and M. M. Hossain',
    title: 'NeuroPonic: Exploring Multilingual, Voice-Enabled LLM Reasoning for Intelligent and Sustainable Aquaponics',
    venue: '1st International Conference on Smart Agriculture for Sustainable Development (ICSASD 2026)',
    year: '2026',
  },
  {
    authors: 'S. M. Sovon and S. P. Mistry',
    title: 'Text Generation from Bengali Sign Language (BdSL) Image using Convolutional Neural Networks',
    venue: 'IEEE Computer Society Bangladesh Chapter (BDC) Symposium 2024, Jagannath University, Bangladesh',
    year: '2024',
    link: 'https://s24.ieeecsbdc.org/papers/129-text-generation-frombengali-sign-language-image-using-convolutional-neural-networks',
    linkLabel: 'Paper details',
  },
];

export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  details: string[];
  tags: string[];
  link?: string;
  linkLabel?: string;
};

export const projects: Project[] = [
  {
    slug: 'bdsl-translation',
    title: 'Real-Time Bengali Sign Language Translation',
    category: 'Research \u2014 Computer Vision',
    summary: 'A two-stage YOLOv8n + MobileNetV2 pipeline that translates continuous BdSL gestures into Bengali text in real time.',
    details: [
      'Curated and pre-processed the BdSL49 dataset (29,490 images, 49 classes).',
      'Benchmarked against six architectures (VGG16, Xception, EfficientNetV2B0, ResNet50, custom CNN) \u2014 99.56% test accuracy, 17.55MB footprint.',
      'Validated with 5-fold cross-validation and an ablation study.',
      'Built a buffering algorithm converting gestures into grammatically structured Bengali sentences.',
    ],
    tags: ['YOLOv8n', 'MobileNetV2', 'Computer Vision', 'Accessibility'],
    link: 'https://doi.org/10.1109/COMPAS67506.2025.11381726',
    linkLabel: 'Read the paper (IEEE COMPAS 2025)',
  },
  {
    slug: 'neuroponic',
    title: 'NeuroPonic',
    category: 'Research \u2014 Multimodal AI',
    summary: 'A multilingual, voice-enabled LLM reasoning benchmark for sustainable aquaponics decision-making.',
    details: [
      'Co-authored a 22-scenario benchmark spanning normal, stress, failure, and recovery conditions.',
      'Contributed to a four-dimension evaluation protocol: risk identification, action correctness, reasoning quality, decision quality.',
      'Helped design multilingual (English + Bangla) and voice-transcribed query evaluation.',
      'Findings: GPT held 91\u201392% cross-lingual stability; Gemini and Grok degraded under Bangla / voice conditions.',
    ],
    tags: ['LLM Evaluation', 'Multilingual NLP', 'Applied AI'],
  },
  {
    slug: 'neurone-onuraunon-platform',
    title: 'Neurone Onuraunon Platform',
    category: 'Engineering \u2014 Web Platform',
    summary: 'The web platform for Neurone Onuraunon, the mathematics outreach organization I led for four years \u2014 co-built as a university group project.',
    details: [
      'Node.js / Express platform supporting event management and Olympiad-style problem content.',
      'Co-developed with S. P. Mistry as coursework for CSE 3200: Web Programming Project.',
      'Supported an organization that reached 5,000+ students across 20 schools.',
    ],
    tags: ['Node.js', 'Express', 'Web Development'],
    link: 'https://github.com/SWPRANTA/Neurone_Onuraunon',
    linkLabel: 'View on GitHub',
  },
  {
    slug: 'edge-icampus',
    title: 'iCampus \u2014 EDGE Project',
    category: 'Engineering \u2014 Government / National Scale',
    summary: 'Contributed as a Programmer to iCampus, the learning management platform for the EDGE project \u2014 a World Bank\u2013 and Government of Bangladesh\u2013funded digital transformation initiative under the Bangladesh Computer Council.',
    details: [
      'April\u2013June 2026 attachment via Prime Tech Solutions Ltd.',
      'Part of a national-scale digital government infrastructure effort.',
    ],
    tags: ['LMS', 'Government Technology', 'National Scale'],
    link: 'https://edge.gov.bd/',
    linkLabel: 'About the EDGE project',
  },
  {
    slug: 'techoptions-microservices',
    title: 'Backend Microservices \u2014 TechOptions',
    category: 'Engineering \u2014 Ed-Tech',
    summary: 'Backend engineering work on exam, question-bank, and cognitive-skills services for ed-tech platforms.',
    details: [
      'Design and implementation of backend services supporting live ed-tech products.',
      'Details kept high-level here by design \u2014 this work involves employer systems.',
    ],
    tags: ['FastAPI', 'PostgreSQL', 'Backend Systems'],
  },
];

export type TeachingEntry = {
  role: string;
  org: string;
  period: string;
  detail: string;
};

export const teaching: TeachingEntry[] = [
  {
    role: 'Academic Instructor',
    org: 'Neurone Onuraunon',
    period: 'Jun 2020 \u2013 Jul 2024',
    detail: 'Designed hands-on, student-centered mathematics sessions for over 5,000 students across 20 schools in the Jhenaidah district.',
  },
  {
    role: 'Teaching Assistant',
    org: 'Prottoy',
    period: 'Feb 2023 \u2013 Jul 2023',
    detail: 'Supported curriculum design and product feature ideation to improve learner engagement.',
  },
  {
    role: 'Doubt Solver',
    org: 'Roots Edu',
    period: 'Jan 2022 \u2013 Dec 2022',
    detail: 'Provided live, forum-style academic support in Mathematics and Physics, resolving over 1,000 student doubts.',
  },
];

export type ExperienceEntry = {
  role: string;
  org: string;
  period: string;
  bullets: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: 'Junior Software Engineer',
    org: 'TechOptions',
    period: 'Jun 2025 \u2013 Present',
    bullets: [
      'Design and implement user-facing features using React.js and FastAPI.',
      'Backend microservices work on exam, question-bank, and cognitive-skills services.',
    ],
  },
  {
    role: 'Programmer',
    org: 'EDGE Project (Enhancing Digital Government and Economy)',
    period: 'Apr 2026 \u2013 Jun 2026',
    bullets: [
      'Contributed to iCampus, the LMS for a World Bank\u2013 and GoB\u2013funded national digital transformation initiative.',
    ],
  },
  {
    role: 'Intern Developer',
    org: 'Appstick',
    period: 'Dec 2023 \u2013 Feb 2024',
    bullets: ['Contributed to the frontend architecture of a live web application.'],
  },
  {
    role: 'Brand Partner',
    org: 'Roots Edu',
    period: 'Jan 2022 \u2013 Dec 2022',
    bullets: ['Partnered with an ed-tech platform to strengthen brand presence.'],
  },
];

export const leadership = [
  {
    role: 'President',
    org: 'Neurone Onuraunon',
    period: 'Jun 2020 \u2013 Jul 2024',
    detail: 'Led a four-year student initiative organizing mathematics outreach and competitions under the Bangladesh Mathematical Olympiad network.',
  },
  {
    role: 'Convenor, Promotion Team',
    org: 'SynergyX National Symposium',
    period: 'Dec 2024',
    detail: 'Led nationwide promotional strategy for a major ICT symposium bridging academia and industry.',
  },
  {
    role: 'Academic Team Member',
    org: 'Bangladesh Mathematical Olympiad',
    period: 'Dec 2023 \u2013 Present',
    detail: 'Organized regional and national olympiads, expanding mathematics outreach.',
  },
];

export const awards = [
  { title: 'Champion, University Innovation Hub Program (UIHP) Cohort-I', org: 'Khulna University', period: 'Jul \u2013 Dec 2024' },
  { title: '1st Runner-Up, Innovation Showcasing, SynergyX', org: 'Khulna', period: 'Dec 2024' },
];

export const education = {
  degree: 'B.Sc. in Computer Science and Engineering',
  org: 'Khulna University',
  period: '2020 \u2013 2025',
  cgpa: '3.68 / 4.00',
  thesis: 'Text Generation from Bengali Sign Language (BdSL) Image using Convolutional Neural Networks',
  supervisor: 'Dr. Rameswar Debnath',
  coursework: ['Machine Learning', 'Artificial Intelligence', 'Computer Vision', 'Digital Image Processing', 'Data Structures', 'Algorithms'],
  ielts: '8.0 Overall',
};
