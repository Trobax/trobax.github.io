// Portfolio data extracted from legacy HTML
export const portfolioData = {
  // Hero section
  hero: {
    name: "Zakaria Hammoud",
    title: "Software Developer",
    valueProposition: "Building Software by writing code as well as Modifying it to fix errors, adapt it to new hardware, Improve its performance, or upgrade interfaces.",
    ctaButtons: [
      { text: "View Work", href: "#portfolio", isPrimary: true },
      { text: "Download CV", href: "#", isPrimary: false },
      { text: "Contact Me", href: "#contact", isPrimary: false }
    ],
    socialLinks: [
      { platform: "facebook", url: "https://bit.ly/2Lb6m0r", icon: "facebook" },
      { platform: "twitter", url: "https://bit.ly/2DEYFt1", icon: "twitter" },
      { platform: "linkedin", url: "https://bit.ly/2GOFsWy", icon: "linkedin" },
      { platform: "instagram", url: "https://bit.ly/2LedzN9", icon: "instagram" },
      { platform: "skype", url: "skype:zakaria_hd_2?chat", icon: "skype" }
    ]
  },

  // About section
  about: {
    bio: [
      "Senior software engineer with 7+ years delivering enterprise applications end to end, from requirements and architecture to backend services and UI.",
      "I write clean, testable and maintainable code, with a focus on error handling, performance and clear technical documentation.",
      "I lead and mentor engineers in agile teams, and pick up new languages and frameworks quickly."
    ],
    itTools: "JAVA 8, JAVA 7, Spring-boot, Angular, Aurelia, JavaScript, HTML5, CSS3, XML, Python, MySQL, Postger, PgAdmin, GitHub, Gitlab",
    adobeTools: "Photoshop, Illustrator, Premiere Pro, After Effects",
    contactDetails: {
      address: "Zakaria Hammoud\nAV NADOR RES ZIANE N6\nTETOUAN, 93030 MA",
      phone: "+212 6 23 26 19 49",
      email: "zhammoud.zakaria@gmail.com"
    },
    resumeLinks: [
      { language: "English", url: "https://drive.google.com/file/d/1mNgySDpiR4fYTTJ2UdFCRFXqvg06vWWj/view?usp=sharing" },
      { language: "French", url: "https://drive.google.com/file/d/1e_eoktYwGRgbwkiAqcPJqJGgOq-RHMiF/view?usp=sharing" }
    ]
  },

  // Skills section - grouped by category
  skills: {
    categories: [
      {
        title: "Languages & Frameworks",
        skills: ["Java", "Spring Boot", "Angular", "Aurelia", "JavaScript", "HTML5", "CSS3", "XML", "Python"]
      },
      {
        title: "Databases & Tools",
        skills: ["MySQL", "PostgreSQL/PgAdmin", "GitHub", "GitLab"]
      },
      {
        title: "Design Tools",
        skills: ["Adobe Creative Cloud", "Photoshop", "Illustrator", "Premiere Pro", "After Effects"]
      }
    ]
  },

  // Experience section
  experience: [
    {
      company: "NTT DATA Middle East and Africa",
      position: "Senior Software Engineer",
      level: "Senior - Software Engineer",
      dateRange: "May 2025 - Present",
      description: "Leading a team of engineers on enterprise Java projects: owning delivery, technical decisions, code reviews and mentoring.",
      responsibilities: [
        "Team Management"
      ],
      technologies: ""
    },
    {
      company: "NTT DATA Middle East and Africa",
      position: "Software Developer",
      level: "Software Developer",
      dateRange: "June 2022 - July 2025",
      description: "Designed and built Java backend services and features for enterprise clients as part of an agile team.",
      responsibilities: [
        "Java Development"
      ],
      technologies: "Java"
    },
    {
      company: "Grupo AVALON",
      position: "Software Developer",
      level: "Advanced - Software Developer",
      dateRange: "March 2020 - June 2022",
      description: "Full-stack development and maintenance of a Java / SOAP client application; acted as Scrum Master and led a small team.",
      responsibilities: [
        "Maintain the client application, Fixing application bugs, Fixing front and back end problems of the application, Scrum Master of several projects, Management of a group of collaborators, Finding solutions to user problems, Interacting with the database and managing data, Create solutions for new developments requested by the client, Maintain proper operation and workflow, Create new interface according to functional documents for development"
      ],
      technologies: "Java, SOAP"
    },
    {
      company: "Berger-Levrault",
      position: "Software Engineer",
      level: "Intermediate - Software Engineer",
      dateRange: "Sep 2019 - Mar 2020",
      description: "Migrated a Silverlight / C# client to Aurelia and TypeScript with a responsive UI, and moved data from SQL Server to PostgreSQL.",
      responsibilities: [
        "Project to migrate the Silverlight C# client application to the C# Aurelia application, Transforming C# classes into Aurelia Typescript, Recreate a Silverlight page in HTML Bootstrap responsive design, Managing data conversion from SQL Server to PostgreSQL, Holding sprints to check the progress of each given task in a specific sprint"
      ],
      technologies: "Aurelia, C#, PostgreSQL"
    },
    {
      company: "everis",
      position: "Intern Software Developer",
      level: "Intern - Software Developer",
      dateRange: "Apr 2019 - Jul 2019",
      description: "First professional role: learned enterprise engineering practices and agile methodology on a .NET / C# project.",
      responsibilities: [
        "Learning the concepts for working in enterprise, Solving different kind of problems as I gain knowledge about the project"
      ],
      technologies: ".NET, C#, ASP."
    }
  ],

  // Education & Certifications combined
  education: {
    degrees: [
      {
        title: "DCA - Software Engineering and Web Development (BAC+3)",
        details: "Software Development • 2021-2022 (In progress)",
        description: "Coursework in Java, Java EE, JavaScript, HTML5, CSS3, SQL and PHP."
      },
      {
        title: "Institute Specialized In Offshoring Trades (ISMO) (BAC+2)",
        details: "Software Development • June 2019",
        description: "Two-year specialised programme in software development: Java, C#, SQL Server, ASP.NET MVC, Angular, JavaScript, HTML and CSS."
      },
      {
        title: "Abdelmalek Essaâdi University - Bachelor of Science (B.S.)",
        details: "Student • June 2017",
        description: "One year of science studies before switching to software development, which I pursued at ISMO."
      }
    ],
    certifications: [
      {
        title: "Microsoft Office Specialist 2016 Master",
        details: "MOS Master Degree • June 2018",
        description: "Master-level certification covering Excel, Word, PowerPoint and Access."
      },
      {
        title: "Software development technician",
        details: "Institute Specialized In Offshoring Trades • June 2019",
        description: "Two-year technical diploma covering Java, C#, SQL Server, ASP.NET MVC, Angular, JavaScript, HTML and CSS."
      },
      {
        title: "1 Million Arab Coders Initiative",
        details: "Full-Stack Course • March 2019",
        description: "Full-stack programme covering HTML5, CSS3, JavaScript and Python across two milestones."
      },
      {
        title: "Conceptos Básicos de Seguridad en everis",
        details: "Seguridad Course • April 2019",
        description: "Corporate security-policy training completed during onboarding at everis (NTT DATA), covering common security risks and their impact on daily work."
      },
      {
        title: "Scrum Foundation Professional Certificate",
        details: "(SFPC) – (English) • June 2020",
        description: "Foundation-level certification in Scrum principles and agile practices."
      }
    ]
  },

  // Projects section
  projects: [
    {
      id: 1,
      title: "Face-App Recognition",
      description: "This App was build just for a test on my school project system attendese.",
      image: "/images/portfolio/face.jpg",
      modalImage: "/images/portfolio/modals/m-facerecognition.jpg",
      techTags: ["Android Studio"],
      link: "https://bit.ly/2H1LX8D",
      categories: ["Recognition", "Mobile-App"]
    },
    {
      id: 2,
      title: "Portfolio",
      description: "Here you'll find how i build my portfolio from scratch you can fork my work on github if you want.",
      image: "/images/portfolio/console.jpg",
      modalImage: "/images/portfolio/modals/m-portfolio.jpg",
      techTags: ["Web Development"],
      link: "https://bit.ly/2GZbIq8",
      categories: ["Portfolio", "Web Development"]
    },
    {
      id: 3,
      title: "React Native",
      description: "My First React Native Application.",
      image: "/images/portfolio/react-native.jpg",
      modalImage: "/images/portfolio/modals/m-judah.jpg",
      techTags: ["React"],
      link: "https://bit.ly/2vCDvrh",
      categories: ["React"]
    },
    {
      id: 4,
      title: "Angular",
      description: "Here you will find my Angular POS systems on my github page",
      image: "/images/portfolio/Angular.jpg",
      modalImage: "/images/portfolio/modals/tutorial-cover.png",
      techTags: ["FrameWork"],
      link: "https://bit.ly/2GZ8LWF",
      categories: ["FrameWork"]
    }
  ],

  // Testimonials section (to be rebranded as Dev Philosophy)
  philosophy: {
    title: "Words I Code By",
    quotes: [
      {
        text: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.",
        author: "Steve Jobs"
      },
      {
        text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
        author: "Martin Fowler"
      },
      {
        text: "First, solve the problem. Then, write the code.",
        author: "John Johnson"
      },
      {
        text: "Java is to JavaScript what car is to Carpet.",
        author: "Chris Heilmann"
      }
    ]
  },

  // Contact section
  contact: {
    email: "zhammoud.zakaria@gmail.com",
    phone: "+212 6 23 26 19 49",
    location: "TETOUAN, MA",
    socialLinks: [
      { platform: "facebook", url: "https://bit.ly/2Lb6m0r", icon: "facebook" },
      { platform: "twitter", url: "https://bit.ly/2DEYFt1", icon: "twitter" },
      { platform: "linkedin", url: "https://bit.ly/2GOFsWy", icon: "linkedin" },
      { platform: "instagram", url: "https://bit.ly/2LedzN9", icon: "instagram" },
      { platform: "skype", url: "skype:zakaria_hd_2?chat", icon: "skype" }
    ],
    resumeLinks: [
      { language: "English", url: "https://drive.google.com/file/d/1mNgySDpiR4fYTTJ2UdFCRFXqvg06vWWj/view?usp=sharing" },
      { language: "French", url: "https://drive.google.com/file/d/1e_eoktYwGRgbwkiAqcPJqJGgOq-RHMiF/view?usp=sharing" }
    ]
  }
};