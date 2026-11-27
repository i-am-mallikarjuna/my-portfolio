export const PROFILE = {
  name: 'Mallikarjuna',
  role: '.NET Full Stack Developer',
  careerStart: '2023-07-01',
  linkedIn: 'https://www.linkedin.com/in/i-am-mallikarjuna/',
  email: 'mallikarjun.akunuri1999@gmail.com',
  whatsApp: 'https://wa.me/917989202940',
};

export function calculateExperienceYears(now = new Date()): number {
  const diffInMs = now.getTime() - new Date(PROFILE.careerStart).getTime();
  const diffInYears = diffInMs / (1000 * 60 * 60 * 24 * 365.25);
  return Math.round(diffInYears + 1.3);
}

export interface Project {
  title: string;
  role: string;
  company: string;
  description: string;
  techStack: string[];
  caseStudy: { challenge: string; solution: string; outcome: string };
}

export const PROJECTS: Project[] = [
  {
    title: 'Enterprise Lending & Dealer Platform',
    role: '.NET Developer',
    company: 'FS Technosol LLP',
    description: 'Maintain and extend an enterprise financial-services platform: WPF desktop screens, a CRM dealer module, a layer of about 60 WCF and REST services on IIS, and the T-SQL behind them. Also help run an AI-assisted development, code-review and QA workflow.',
    techStack: ['C#', '.NET Framework 4.8', 'WPF', 'ASP.NET', 'WCF', 'REST / JSON', 'IIS', 'MSSQL', 'T-SQL', 'MVC', 'MVVM', 'XAML', 'Telerik', 'SignNow', 'Twilio', 'SendGrid', 'PowerShell', 'Claude Code', 'GitHub Copilot'],
    caseStudy: {
      challenge: 'A large, long-lived platform needed new features and a more responsive UI, plus reliable integration with dozens of external partners. Meanwhile, a high volume of tickets had to move through development, review and QA quickly without lowering quality.',
      solution: 'Built new WPF screens following MVC and MVVM patterns and a CRM dealer module backed by dedicated schema objects. Maintained a service layer of about 60 ASP.NET/WCF projects on IIS, with REST/JSON calls via Newtonsoft and scheduled console jobs. It integrates credit bureaus, dealer credit-application feeds, vehicle valuation, payments, SMS/voice messaging (Twilio), email (SendGrid), shipping, e-signature (SignNow), document generation (Telerik) and GenAI providers. Wrote stored procedures, functions and views to consistent SQL standards and change logs. Put AI coding agents to work in a structured workflow covering AI-assisted development, automated code review against team standards, and AI-driven QA, with PowerShell automation for ticket routing, history notes and sandbox database promotion.',
      outcome: 'Delivered milestones on time with ~30% lower data-retrieval latency, stable third-party integrations, faster ticket turnaround, and more consistent reviews thanks to codified standards and automated checks before manager review.',
    },
  },
  {
    title: 'Self-Service Auto Loan Borrower Portal',
    role: '.NET Full Stack Developer',
    company: 'FS Technosol LLP',
    description: 'A self-service web portal where auto-loan borrowers who applied through a dealer finish their loan online: secure sign-in, offer review, identity and vehicle verification, document upload, e-signing and AutoPay enrollment, without paperwork or phone calls.',
    techStack: ['Angular', 'NgRx', 'Angular Material', 'Tailwind CSS', 'TypeScript', 'C#', 'REST / JSON', 'IIS', 'MSSQL', 'Veriff'],
    caseStudy: {
      challenge: 'Borrowers who applied through a dealer had to finish their loan with paperwork at the dealership or calls with staff, which slowed funding and created manual work for the operations team.',
      solution: 'Built a single-page Angular app styled with Tailwind and Angular Material, with NgRx managing state across a multi-step borrower journey: email verification and one-time-passcode sign-in, offer review and optional products, identity verification via the Veriff SDK, vehicle, employment and military-status checks, document upload, contract signing and AutoPay/paperless enrollment. The code is organised into core (services, guards, store), feature-per-step and shared modules. All data flows through a versioned REST API into the loan-origination database, so staff see each completed step immediately in the internal servicing platform. Deployed as an Angular build served from IIS.',
      outcome: 'Moved loan completion from the dealership and phone to a secure, guided online flow, reducing manual follow-up for staff and giving borrowers a faster, paperless path to funding.',
    },
  },
  {
    title: 'Multi-Site Enterprise Web Platform',
    role: '.NET Developer',
    company: 'FS Technosol LLP',
    description: 'Developed and supported a suite of 5 interconnected enterprise websites. Managed complex data integration, API handling, and optimized MSSQL stored procedures for efficient CRUD operations and high scalability.',
    techStack: ['C#', '.NET', 'MSSQL', 'MVC', 'Web Services'],
    caseStudy: {
      challenge: 'The business required a highly scalable and performant back-end architecture capable of supporting and integrating data across an ecosystem of 5 distinct websites without latency issues.',
      solution: 'Engineered the core back-end logic using C#, .NET and the MVC pattern, with shared services handling business logic and data exchange between sites. Designed and optimized MSSQL database interactions using custom stored procedures and functions to handle heavy CRUD operations. Seamlessly managed cross-site API integrations and performed rigorous debugging.',
      outcome: 'Increased overall system reliability and scalability, ensuring seamless communication across 5 platforms and improving API response times by ~25%.',
    },
  },
  {
    title: 'Traveler Ticket Booking',
    role: '.NET Full Stack Developer',
    company: 'Rudrani Technologies',
    description: 'Engineered a comprehensive booking platform for flights, buses, and hotels. Designed the core API architecture in .NET Core, implemented JWT authentication for secure access, and seamlessly integrated 3rd-party real-time availability APIs.',
    techStack: ['.NET Core', 'MSSQL', '3rd party API Integration'],
    caseStudy: {
      challenge: 'The client needed a unified platform that could query multiple third-party travel APIs in real-time without causing significant latency for the end user.',
      solution: 'Built robust asynchronous .NET Core API calls and implemented JWT authentication for secure access. Coordinated sprint planning to ensure the UI successfully consumed the complex data structures.',
      outcome: 'Successfully delivered real-time pricing and availability features, reducing booking friction and increasing user conversion rates.',
    },
  },
  {
    title: 'Agxcel Application',
    role: 'Associate Software Engineer',
    company: 'Nexgile Technologies',
    description: 'An agricultural web application that allows users to seamlessly control field machinery and manage fertilizer application via an Injection Unit.',
    techStack: ['Angular', '.NET Core', 'MSSQL', 'Jira', 'Git'],
    caseStudy: {
      challenge: 'The project required a highly intuitive web interface that could reliably communicate with and control physical agricultural hardware (Injection Units) in the field without overwhelming the end-user.',
      solution: 'Developed dynamic, responsive UI screens using Angular and collaborated with senior developers to design and integrate robust .NET Core APIs. Actively participated in Agile sprint meetings to continuously refine the interface based on usability feedback.',
      outcome: 'Delivered a seamless, bug-free application allowing remote management of field hardware with zero reported critical production failures during the initial rollout.',
    },
  },
];

export const SKILL_GROUPS = [
  {
    name: 'Languages',
    icon: 'code',
    blurb: 'Writing clean, typed and maintainable code.',
    skills: ['C#', 'TypeScript', 'T-SQL', 'PowerShell', 'HTML', 'CSS', 'JavaScript', 'Xaml'],
  },
  {
    name: 'Frameworks',
    icon: 'layers',
    blurb: 'Building robust back-ends and modern front-ends.',
    skills: ['ASP.NET', 'ASP.NET MVC', '.NET Framework 4.8', '.NET Core', 'ADO .NET', 'WPF / MVVM', 'Angular', 'Angular Material', 'Entity Framework'],
  },
  {
    name: 'Services & Integrations',
    icon: 'hub',
    blurb: 'Connecting systems reliably through services and partner APIs.',
    skills: ['WCF', 'REST / JSON APIs', 'Web Services', 'Newtonsoft.Json', 'IIS', 'Scheduled Jobs', 'Twilio', 'SendGrid', 'SignNow', 'Telerik Reporting', '3rd-party API Integration'],
  },
  {
    name: 'Tools',
    icon: 'construction',
    blurb: 'Shipping confidently with a proven toolchain.',
    skills: ['Visual Studio', 'SSMS', 'VS code', 'TFS', 'Git', 'GitHub Actions', 'Postman', 'Jira'],
  },
  {
    name: 'AI & Automation',
    icon: 'auto_awesome',
    blurb: 'Using AI agents and scripts to ship faster with consistent quality.',
    skills: ['Claude Code', 'GitHub Copilot', 'Agentic Workflows', 'AI Code Review', 'Prompt Engineering', 'PowerShell Automation', 'Playwright'],
  },
];
