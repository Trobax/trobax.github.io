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
      "Software Developer able to build a programme from the ground up from concept, Exceptions handling, multiforms and programming to UI.",
      "Skilled at writing well-designed, testable and efficient code using current best practices in IT development.",
      "Fast learner, hard worker and team player who is proficient in an array of programming languages and material design."
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
      company: "GRUPO AVALON",
      position: "Software Developer",
      level: "Advanced - Software Developer",
      dateRange: "MARCH 2020 - Present",
      description: "Maintains the client application, Fixing application bugs, Fixing front and back end problems of the application, Scrum Master of several projects, Managing a group of co-workers.",
      responsibilities: [
        "Find solutions to users problems",
        "Interact with database and manage the data",
        "Create solutions for new developments requested by the client",
        "Keep everything working and good workflow",
        "Creation of a new interfaces according to functional documents for the development"
      ],
      technologies: "JAVA 8, JAVA 7, Spring-boot, Javascript, HTML5, CSS3, Servlet JSP"
    },
    {
      company: "Berger-Levrault",
      position: "Software Developer",
      level: "Intermediate - Software Developer",
      dateRange: "September 2019 - MARCH 2020",
      description: "imigration project from Silverlight C# client application to Aurelia C# application",
      responsibilities: [
        "Transform C# classes to Aurelia Typescript",
        "Re-create page Silverlight to HTML Bootstrap responsive design",
        "Managing data conversion from SQL Server to PostgreSQL",
        "Holding sprints to check progress for each task giving in a specific sprinted"
      ],
      technologies: "Aurelia, C#, PostgreSQL"
    },
    {
      company: "Everis",
      position: "Software Developer",
      level: "Junior - Software Developer",
      dateRange: "April 2019 - July 2019",
      description: "first professional project to work on discovering the concepts and the methodologies",
      responsibilities: [
        "Learning the concepts for working in enterprise",
        "Solving different kind of problems as i gain knowledge about the project"
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
        description: "Java, JAVA/EE, JavaScript, HTML5, CSS3, SQL, PHP"
      },
      {
        title: "Institute Specialized In Offshoring Trades (ISMO) (BAC+2)",
        details: "Software Development • June 2019",
        description: "During my period of studying I've learned how to put myself to work and do all what it takes to manage the job. So I've studied Java, C#, SQL Server, ASP.NET, MVC, Angular, JavaScript, HTML, CSS."
      },
      {
        title: "Abdelmalek Essaâdi University - Bachelor of Science (B.S.)",
        details: "Student • June 2017",
        description: "At University, I've studied science for one years but I didn't found my passion in life the real sense of coding so I decided to quite university and start at Institute Specialized In Offshoring Trades (ISMO)."
      }
    ],
    certifications: [
      {
        title: "Microsoft Office Specialist 2016 Master",
        details: "MOS Master Degree • June 2018",
        description: "I passed Microsoft Master degree On Excel, Word, Power Point and Access."
      },
      {
        title: "Software development technician",
        details: "Institute Specialized In Offshoring Trades • June 2019",
        description: "I've studied I've studied Java, C#, SQL Server, ASP.NET, MVC, Angular, JavaScript, HTML, CSS during two years."
      },
      {
        title: "1 Million Arab Coders Initiative",
        details: "Full-Stack Course • March 2019",
        description: "I've studied two milestones as a full-stack developer by learning HTML5, CSS3, JavaScript and Python. It was a great opportunity to learn new languages and I'm aiming to be certified with a nano degree on June 1st from this initiative"
      },
      {
        title: "Conceptos Básicos de Seguridad en everis",
        details: "Seguridad Course • April 2019",
        description: "As part of the integration process with NTT DATA I've passed Security Policy test to strengthen Corporate security in the way we work. You access to the course and knows how problems caused by lack of security may arise in a company like everis and how they can have an impact our daily work at everis."
      },
      {
        title: "Scrum Foundation Professional Certificate",
        details: "(SFPC) – (English) • June 2020",
        description: "I passed Scrum Foundation Professional degree for scrums."
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