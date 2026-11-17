/**
 * Single source of truth for every piece of content on the site.
 * All copy is derived from `CV_Joshua_Aranda_Moreno.pdf`
 * (the "CV_JOSHUA_2026_APR-10-1.pdf" resume supplied for this portfolio).
 */

export interface Profile {
    name: string;
    firstName: string;
    headline: string;
    location: string;
    email: string;
    phone: string;
    phoneHref: string;
    github: string;
    linkedin: string;
    whatsapp: string;
    resumeUrl: string;
    roles: string[];
    tagline: string;
    summary: string;
}

export const profile: Profile = {
    name: 'Joshua Aranda Emmanuel Moreno',
    firstName: 'Joshua',
    headline: 'Full Stack Developer & Software Engineer',
    location: 'Mérida, Yucatán',
    email: 'joshuamoreno21@gmail.com',
    phone: '+52 999 385 3588',
    phoneHref: 'tel:+529993853588',
    github: 'https://github.com/joshmorenx',
    linkedin: 'https://www.linkedin.com/in/joshua-emmanuel-aranda-moreno/',
    whatsapp: 'https://wa.me/529993853588',
    resumeUrl: `${import.meta.env.BASE_URL}CV_Joshua_Aranda_Moreno.pdf`,
    roles: [
        'Full Stack Developer',
        'Cloud & Serverless Engineer',
        'Software Engineer',
        '.NET Developer',
        'Computer Systems Engineer'
    ],
    tagline: 'I build serverless banking systems, real-time platforms and data-driven tools.',
    summary:
        'Computer Systems Engineer with 5+ years building production software. Currently on the banking section of Fundación Rafael Dondé with AWS Lambda, Step Functions, API Gateway and SQS, shipping token issuance, regulatory deposits and SPEI flows. Experienced across the MERN and .NET stacks, and comfortable owning a feature from database query to shipped UI.'
};

export interface Stat {
    value: string;
    label: string;
}

export const stats: Stat[] = [
    { value: '5+', label: 'Years building software' },
    { value: '4', label: 'Companies & projects' },
    { value: '6', label: 'Shipped banking products' },
    { value: '3', label: 'Languages spoken & coded' }
];

export interface Experience {
    role: string;
    company: string;
    place: string;
    date: string;
    period: string;
    summary: string;
    highlights: { title: string; body: string }[];
    stack: string[];
    links?: { label: string; href: string }[];
    current?: boolean;
}

export const experiences: Experience[] = [
    {
        role: 'Full Stack Developer',
        company: 'IT Talent',
        place: 'Mérida, Yucatán',
        date: 'Jan 2025 – Present',
        period: 'current',
        current: true,
        summary:
            "IT Talent is a consulting firm. I provide my services to Fundación Rafael Dondé — a foundation offering loans and pawns to people in need, with a banking section where users fund and withdraw money.",
        highlights: [
            {
                title: 'Serverless banking platform',
                body: 'I work on the banking section using AWS Lambda, Step Functions, API Gateway and SQS with the Serverless Framework, Node.js and JavaScript.'
            },
            {
                title: 'Anti-money laundering migration',
                body: 'My team and I migrated the AML services: receiving responses from a third-party provider to decide whether to block a user and report them to the authorities, or proceed with their registration.'
            },
            {
                title: 'Tokens App — backend (completed)',
                body: "I built the backend for a token application. Tesseract, a third-party token provider, built the frontend; my backend let their frontend consume our services and exchange tokens so end users can approve operations on the banking website securely."
            },
            {
                title: 'Monthly deposit limit — N2 accounts (completed)',
                body: 'I delivered the solution that evaluates N2 level accounts against their monthly deposit limit, optimising the queries and significantly reducing response times.'
            },
            {
                title: 'CEDES — Dondé bank certificates (completed)',
                body: "I shipped CEDES, a certificate product similar to CETES but issued by Dondé Bank, expanding the bank's investment offering."
            },
            {
                title: 'SPEI Out re-engineering (ongoing)',
                body: "I'm currently re-engineering the SPEI Out flow for several of Dondé Bank's satellites, ensuring more efficient and reliable outbound transfers across the system."
            }
        ],
        stack: ['AWS Lambda', 'Step Functions', 'API Gateway', 'SQS', 'Serverless', 'Node.js', 'JavaScript']
    },
    {
        role: 'Full Stack MERN Developer',
        company: 'NodeNetwork',
        place: 'Open source · Mérida, Yucatán',
        date: 'Jun 2021 – Present',
        period: 'side project',
        summary:
            'I developed a full-featured social network on the MERN stack, showcasing advanced user management and security measures.',
        highlights: [
            {
                title: 'Dynamic permission system',
                body: 'Includes conditional deletion, so a permission can never be removed while it is still assigned to users.'
            },
            {
                title: 'Profile editor',
                body: 'A comprehensive profile editor lets users update personal information and profile pictures seamlessly.'
            },
            {
                title: 'Security by design',
                body: 'bcrypt for password encryption and JWT for session management. Tokens are stored in cookies without exposing sensitive data, and password verification is handled through bcrypt.compare.'
            },
            {
                title: 'Real-time interactions',
                body: 'Socket.io powers instant notifications for new followers, likes, dislikes and comments.'
            }
        ],
        stack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Socket.IO', 'JWT', 'Mongoose'],
        links: [{ label: 'View repository', href: 'https://github.com/joshmorenx/nodeNetwork' }]
    },
    {
        role: 'Software .NET Developer Engineer',
        company: 'Decorama Estudio',
        place: 'Mérida, Yucatán',
        date: 'Sep 2021 – Jan 2025',
        period: '3+ years',
        summary:
            'I worked primarily in VB.NET, writing and debugging code for Excel document processing within MVC-architected applications backed by MS SQL.',
        highlights: [
            {
                title: 'VB.NET & Excel automation',
                body: 'Primary focus on writing and debugging code for automated Excel document processing.'
            },
            {
                title: 'MVC architecture & MS SQL',
                body: 'Trained in Model-View-Controller architecture and proficient in MS SQL, T-SQL and PL/SQL for querying and managing application data — stored procedures, transactions, joins and complex queries.'
            },
            {
                title: 'Zero-downtime WordPress migration',
                body: 'Migrated a live WordPress site between hosting providers using only Regular Expressions and SQL queries via phpMyAdmin — no third-party plugins or migration tools.'
            }
        ],
        stack: ['VB.NET', 'MVC', 'MSSQL', 'T-SQL', 'PL/SQL', 'Regex']
    },
    {
        role: 'Full Stack Django Developer & Data Scientist',
        company: 'CentroGeo',
        place: 'Social work & professional internship · Mérida, Yucatán',
        date: '2021 – Jun 2022',
        period: 'internship',
        summary:
            'I independently developed a multi-format geo-referenced data extraction platform by leveraging an open-source social network and adapting its code to meet the project requirements.',
        highlights: [
            {
                title: 'REST APIs with Django',
                body: 'Used Python and the Django framework to build the REST APIs powering the platform.'
            },
            {
                title: 'Geospatial data handling',
                body: 'Handled geographic data with Pandas, NumPy, Matplotlib, Shapely and GeoPandas.'
            },
            {
                title: 'Geolocation on the frontend',
                body: 'Implemented vanilla JavaScript and CSS frontend functionality, including a geolocation feature that captured and stored user coordinates on posting — enabling retrieval of geo-referenced content.'
            },
            {
                title: 'Self-taught delivery',
                body: 'I self-taught Python and integrated diverse tools to deliver a working solution end to end.'
            }
        ],
        stack: ['Python', 'Django', 'Pandas', 'GeoPandas', 'NumPy', 'Shapely', 'JavaScript'],
        links: [{ label: 'View CitySends', href: 'https://github.com/joshmorenx/CitySends' }]
    }
];

export interface Education {
    degree: string;
    school: string;
    place: string;
    date: string;
}

export const education: Education = {
    degree: "Bachelor's degree in Computer Systems Engineering",
    school: 'Instituto Tecnológico de Mérida',
    place: 'Mérida, Yucatán',
    date: 'Jan 2017 – Aug 2023'
};

export interface Language {
    name: string;
    level: string;
    proficiency: number;
}

export const languages: Language[] = [
    { name: 'Spanish', level: 'Native', proficiency: 100 },
    { name: 'English', level: 'Fluent', proficiency: 90 }
];

export interface SkillGroup {
    title: string;
    icon: 'code' | 'layout' | 'server' | 'database' | 'chart' | 'wrench' | 'flask' | 'boxes';
    skills: string[];
}

export const skillGroups: SkillGroup[] = [
    {
        title: 'Programming Languages',
        icon: 'code',
        skills: ['VB.NET', 'TypeScript', 'JavaScript', 'Python']
    },
    {
        title: 'Frontend',
        icon: 'layout',
        skills: ['React', 'React Native', 'TailwindCSS', 'Context API', 'Redux', 'Redux Persist']
    },
    {
        title: 'Backend',
        icon: 'server',
        skills: ['Node.js', 'Express.js', 'Django', 'RESTful APIs']
    },
    {
        title: 'Databases',
        icon: 'database',
        skills: ['MSSQL', 'MongoDB', 'Complex queries', 'Migrations']
    },
    {
        title: 'Data Science',
        icon: 'chart',
        skills: ['Pandas', 'GeoPandas', 'Matplotlib', 'NumPy']
    },
    {
        title: 'Tools',
        icon: 'wrench',
        skills: ['Docker', 'GitHub', 'Ubuntu', 'Vite', 'Regex', 'CI/CD Pipelines']
    },
    {
        title: 'Testing',
        icon: 'flask',
        skills: ['Vitest', 'Jest']
    },
    {
        title: 'Others',
        icon: 'boxes',
        skills: ['OOP', 'JWT', 'Socket.IO', 'Postman', 'Mongoose ODM']
    }
];

/** Flat list used by the hero marquee. */
export const marqueeSkills: string[] = [
    'AWS Lambda',
    'Step Functions',
    'API Gateway',
    'SQS',
    'Serverless',
    'Node.js',
    'TypeScript',
    'React',
    'React Native',
    'Django',
    'Python',
    'VB.NET',
    'MSSQL',
    'MongoDB',
    'Docker',
    'Socket.IO',
    'Redux',
    'TailwindCSS',
    'Vitest',
    'Jest'
];

export interface Project {
    title: string;
    subtitle: string;
    description: string;
    highlights: string[];
    stack: string[];
    href?: string;
    linkLabel?: string;
    image?: string;
    accent: string;
    badge: string;
}

export const projects: Project[] = [
    {
        title: 'NodeNetwork',
        subtitle: 'Full-featured MERN social network',
        description:
            'A social platform built from the ground up: dynamic permissions with conditional deletion, a full profile editor, bcrypt + JWT security, and real-time notifications with Socket.io.',
        highlights: [
            'Dynamic permission system that blocks deletion while assigned',
            'bcrypt password hashing and secure cookie-based JWT sessions',
            'Live notifications for followers, likes, dislikes and comments'
        ],
        stack: ['MERN', 'Socket.IO', 'JWT', 'Mongoose'],
        href: 'https://github.com/joshmorenx/nodeNetwork',
        linkLabel: 'View on GitHub',
        accent: '#6366f1',
        badge: 'Open Source'
    },
    {
        title: 'Tokens App',
        subtitle: 'Backend for third-party token exchange',
        description:
            "Backend services that let Tesseract's token-provider frontend consume Dondé Bank services and exchange tokens, so end users can securely approve banking operations.",
        highlights: [
            'Delivered and shipped end to end from the backend',
            'Integrated with a third-party token provider (Tesseract)',
            'Token exchange enforcing secure user approval of operations'
        ],
        stack: ['AWS Lambda', 'API Gateway', 'Node.js', 'Serverless'],
        accent: '#06b6d4',
        badge: 'Completed · Banking'
    },
    {
        title: 'CEDES',
        subtitle: 'Dondé Bank Certificates',
        description:
            "A certificate investment product — similar to CETES but issued by Dondé Bank — that expanded the bank's investment offering for end users.",
        highlights: [
            'Shipped a brand new financial product',
            'Extends the bank portfolio beyond CETES',
            'Built on the existing serverless banking platform'
        ],
        stack: ['AWS', 'Node.js', 'Serverless', 'SQS'],
        accent: '#f59e0b',
        badge: 'Completed · Banking'
    },
    {
        title: 'SPEI Out Re-engineering',
        subtitle: 'Reliable outbound transfers at scale',
        description:
            "Re-engineering the SPEI Out flow for several of Dondé Bank's satellite systems to guarantee more efficient and reliable outbound transfers.",
        highlights: [
            'Serves multiple satellite systems from one flow',
            'Focus on efficiency and reliability of transfers',
            'In progress — currently owning the migration'
        ],
        stack: ['AWS Step Functions', 'Lambda', 'SQS', 'Node.js'],
        accent: '#a855f7',
        badge: 'In Progress · Banking'
    },
    {
        title: 'CitySends',
        subtitle: 'Geo-referenced data extraction platform',
        description:
            'A multi-format geo-referenced data extraction platform built with Django REST APIs, geolocation capture on the frontend, and geospatial analysis with Pandas and GeoPandas.',
        highlights: [
            'Multi-format ingestion and extraction',
            'Geolocation stored on post, enabling geo-referenced retrieval',
            'Shapely + GeoPandas geospatial processing pipeline'
        ],
        stack: ['Django', 'Python', 'GeoPandas', 'Shapely'],
        href: 'https://github.com/joshmorenx/CitySends',
        linkLabel: 'View on GitHub',
        accent: '#10b981',
        badge: 'CentroGeo'
    },
    {
        title: 'Deposit Limit Engine',
        subtitle: 'N2 accounts monthly deposit evaluation',
        description:
            'A solution that evaluates N2 level accounts against their accumulated monthly deposit limit, with heavily optimised queries that significantly reduced response times.',
        highlights: [
            'Optimised SQL for heavy evaluation workloads',
            'Significant reduction in response times',
            'Delivered and completed in production'
        ],
        stack: ['MSSQL', 'Node.js', 'AWS Lambda'],
        accent: '#ec4899',
        badge: 'Completed · Banking'
    }
];

export interface NavItem {
    id: string;
    label: string;
}

export const navItems: NavItem[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
];
