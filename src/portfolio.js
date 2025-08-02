/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ayu Amelia Agustin",
  title: "Hallo allerseits, I’m Ayu!",
  subTitle: emoji(
    "A passionate Backend Engineer 🛠️ experienced in delivering scalable Web and Mobile applications with a strong focus on system integration, APIs, and microservices using Python, PHP (Laravel & Lumen), TypeScript (NestJS), and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/drive/folders/1Py6sTD5Pq9lSMZk6z-4XHwKZKqON9oGt?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links
const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/ayu-amelia-agustin/",
  gmail: "ayu.amelia.agustin@gmail.com",
  github: "https://github.com/ayuamelia",
  gitlab: "https://gitlab.com/ayu.amelia.agustin",
  instagram: "https://www.instagram.com/ayuameliags",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section
const skillsSection = {
  title: "Trace of My Craft",
  subTitle:
    "Crafting backend systems with care, precision, and quiet resilience, because the best work is often the one unnoticed.",
  skills: [
    emoji(
      "⚡ Designing resilient backend systems that don’t just work, they scale, survive, and serve real impact"
    ),
    emoji(
      "⚡ Seamlessly connecting pieces of large ecosystems, from ticketing systems to HR platforms, even when no documentation exists"
    ),
    emoji(
      "⚡ Turning complex business flows into elegant APIs, with special care for clean architecture, integration, and performance"
    ),
    emoji(
      "⚡ Shipping production-grade software with Docker, GitLab CI/CD, Oracle, PostgreSQL, Grafana and RESTful services"
    ),
    emoji(
      "⚡ Rewriting legacy chaos into maintainable code that teams can rely on"
    )
  ],
  softwareSkills: [
    // Programming Languages
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "devicon-typescript-plain"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "devicon-javascript-plain"
    },
    {
      skillName: "Dart",
      fontAwesomeClassname: "devicon-dart-plain"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },

    // Frameworks & Runtimes
    {
      skillName: "Laravel",
      fontAwesomeClassname: "devicon-laravel-original"
    },
    {
      skillName: "Lumen",
      fontAwesomeClassname: "devicon-lumen-original"
    },
    {
      skillName: "NestJS",
      fontAwesomeClassname: "devicon-nestjs-original"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Flutter",
      fontAwesomeClassname: "devicon-flutter-plain"
    },
    {
      skillName: "React Native",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Apache Airflow",
      fontAwesomeClassname: "devicon-apacheairflow-plain"
    },

    // Databases & Storage
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "devicon-postgresql-plain"
    },
    {
      skillName: "Oracle",
      fontAwesomeClassname: "devicon-oracle-plain"
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: "devicon-mysql-plain"
    },
    {
      skillName: "MariaDB",
      fontAwesomeClassname: "devicon-mariadb-plain"
    },
    {
      skillName: "Redis",
      fontAwesomeClassname: "devicon-redis-plain"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },

    // DevOps & Tools
    {
      skillName: "Swagger",
      fontAwesomeClassname: "devicon-swagger-plain"
    },
    {
      skillName: "OpenAPI",
      fontAwesomeClassname: "devicon-openapi-plain"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "devicon-git-plain"
    },
    {
      skillName: "GitLab",
      fontAwesomeClassname: "devicon-gitlab-plain"
    },
    {
      skillName: "Grafana",
      fontAwesomeClassname: "devicon-grafana-plain"
    },
    {
      skillName: "Postman",
      fontAwesomeClassname: "devicon-postman-plain"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "Yarn",
      fontAwesomeClassname: "devicon-yarn-plain"
    },
    {
      skillName: "Composer",
      fontAwesomeClassname: "devicon-composer-plain"
    },

    // Frontend Basics
    {
      skillName: "HTML5",
      fontAwesomeClassname: "devicon-html5-plain"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "devicon-css3-plain"
    },
    {
      skillName: "Bootstrap",
      fontAwesomeClassname: "devicon-bootstrap-plain"
    },
    {
      skillName: "Astro",
      fontAwesomeClassname: "devicon-astro-plain"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Proficient stacks/tech experience
const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend Development",
      progressPercentage: "96%"
    },
    {
      Stack: "API Design & Integration",
      progressPercentage: "94%"
    },
    {
      Stack: "Programming (General)",
      progressPercentage: "88%"
    },
    {
      Stack: "Database Design & Optimization",
      progressPercentage: "85%"
    },
    {
      Stack: "Monitoring & Observability",
      progressPercentage: "80%"
    },
    {
      Stack: "DevOps / CI-CD",
      progressPercentage: "50%"
    },
    {
      Stack: "Frontend / UI Integration",
      progressPercentage: "40%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Education and Courses Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Mercu Buana University",
      logo: require("./assets/images/mercu-buana.png"),
      subHeader: "Bachelor of Computer Science — Major in Information Systems",
      duration: "Jakarta, Indonesia | Aug 2016 – Dec 2020",
      desc: "Graduated with GPA: 3.75 / 4.0",
      descBullets: [
        "Established a solid foundation in software engineering, enterprise systems, and scalable backend architecture.",
        "Relevant coursework: Database Systems, Algorithms and Data Structures, Web Enterprise Programming, Business Intelligence, PL/SQL Programming.",
        "Built robust backend prototypes for real-world use cases during the final-year project, blending technical implementation with business logic."
      ]
    },
    {
      schoolName: "State Vocational School 22 Jakarta",
      logo: require("./assets/images/smkn-22-jakarta.png"),
      subHeader: "Computer and Network Engineering",
      duration: "Jakarta, Indonesia | Jul 2010 – May 2013",
      desc: "Graduated with a technical specialization in IT systems and network infrastructure.",
      descBullets: [
        "Hands-on experience in server setup, TCP/IP configuration, LAN/WAN, and network maintenance.",
        "Built strong foundational skills in programming, hardware assembly, and system diagnostics.",
        "Formed the core technical expertise that fueled a transition into IT support and later backend development."
      ]
    },
    {
      schoolName: "One Third Consulting & Abroad (OTCA)",
      logo: require("./assets/images/otca.png"),
      subHeader: "Certified German Language Program (A1–B1), Platinum Class",
      duration: "Online | Jan 2025 – Aug 2025 (expected)",
      desc: "Certified intensive language training designed for professional migration and cultural integration in Germany.",
      descBullets: [
        "Completed certified German language training from A1 to B1 level.",
        "Participated in an intensive Platinum Class with structured curriculum and live instruction.",
        "Focused on communication, grammar, listening, and cultural fluency.",
        "Taken in parallel with full-time work to prepare for future relocation and possible dual study/master program in Germany."
      ]
    }
  ]
};

// Work experience section
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Software Developer",
      company: "PT PELNI (Persero)",
      companylogo: require("./assets/images/pelniLogo.png"),
      date: "May 2022 – Present",
      desc: "Led the full rebuild of PelniOne, the national HR system from backend to Flutter, code to cloud.",
      descBullets: [
        "Built 35+ services (Python, NestJS, Lumen), integrated 10+ systems incl. Oracle EBS & HRIS.",
        "Revived the Flutter app from scratch and now used daily by teams across Indonesia.",
        "Automated payroll, port logs, and attendance via Apache Airflow, slashing manual tasks.",
        "Team’s go-to dev for system rescue; awarded Developer of the Month (Q1 2025)."
      ]
    },
    {
      role: "IT Staff – Software Engineer",
      company: "PT Bank Central Asia Tbk",
      companylogo: require("./assets/images/bcaLogo.png"),
      date: "Nov 2019 – Apr 2022",
      desc: "Developed and maintained secure, high-scale enterprise systems powering mobile banking and internal ops.",
      descBullets: [
        "Built APIs using Java Spring + Hibernate, and led React Native dev for internal apps.",
        "Optimized Oracle DBs with advanced SQL tuning and large-scale data processing.",
        "Ran SIT/UAT cycles and API testing with Git, JMeter, and Postman.",
        "Ensured seamless backend-to-frontend delivery across high-traffic services."
      ]
    },
    {
      role: "System Engineer & Tech Support",
      company: "PT Access Mobile",
      companylogo: require("./assets/images/amiLogo.png"),
      date: "Sep 2016 – Nov 2019",
      desc: "Ensured system reliability, automation, and support across infrastructure and internal apps.",
      descBullets: [
        "Monitored Linux/Windows servers and reduced downtime risks via proactive maintenance.",
        "Automated ops using Python, Bash, and PHP to improve internal workflows.",
        "Supported Android app development and system testing during internal R&D projects.",
        "Hands-on with MySQL, MariaDB, VMware, Selenium, XSHELL, and integration debugging."
      ]
    },
    {
      role: "IT Support Technician",
      company: "PT Erdikha Elit Sekuritas",
      companylogo: require("./assets/images/erdikhaLogo.png"),
      date: "Sep 2013 – Sep 2016",
      desc: "Managed internal IT systems and daily support with calm precision and reliable execution.",
      descBullets: [
        "Resolved LAN (MikroTik), hardware, and software issues across teams and branches.",
        "Maintained daily to yearly backups and ensuring business continuity and data safety.",
        "Provided user support on Windows/Linux servers, printers, and Wi-Fi systems.",
        "Assisted in MySQL database work, light scripting, and basic design tasks (Photoshop, CorelDRAW)."
      ]
    }
  ]
};

// Some big projects you have worked on
const bigProjects = {
  title: "Big Project",
  subtitle: "REAL SYSTEMS BUILT FOR REAL IMPACT AT SCALE.",
  projects: [
    {
      image: require("./assets/images/pelnioneLogo.jpg"),
      projectName: "PelniOne",
      projectDesc:
        "Enterprise HR super app for Indonesia’s national shipping company. Handles attendance, payroll, and port operations for 3K+ employees.",
      footerLink: [
        {
          name: "Available on Google Play",
          url: "https://play.google.com/store/search?q=PelniOne&c=apps&hl=en"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

// Other Project Section
// Include certificates, talks etc
const otherProjectSection = {
  title: emoji("Built With Love"),
  subtitle: "Some Cool Stuff that I have done!",
  otherProjectCards: [
    {
      slug: "airflow-dag-monitoring", // useful for routing
      title: "Airflow DAG Monitoring",
      image: require("./assets/images/airflow.png"),
      imageAlt: "Airflow DAG Graph",
      subtitle:
        "Developed and maintained Apache Airflow DAGs to automate data integration between multiple internal and external systems, ensuring reliable and efficient backend workflows.",
      intro:
        "Below are selected DAGs I developed and managed within Airflow to automate backend workflows. Each DAG serves a specific business function, with tailored logic for data validation, transformation, and system integration.",
      detailComponent: "AirflowDetail",
      footerLink: [
        // {name: "GitHub Repo", url: "https://github.com/your-repo"},
        // {name: "Live Demo", url: "https://your-demo-link.com"},
        {
          name: "View Details",
          url: `/otherProjects/${slugify("Airflow DAG Monitoring")}`
        }
      ]
    },
    {
      title: "Open API Document",
      image: require("./assets/images/swagger.png"),
      subtitle:
        "Developed scalable RESTful microservices and delivered clear, developer-friendly API documentation using Swagger OpenAPI, enabling smooth integration across multiple platforms and teams.",
      intro:
        "These documentation pieces weren’t just side tasks, they were daily building blocks. Every time a service was built or updated, a matching API spec was designed to reflect it with accuracy, clarity, and intention. From HR systems like PelniOne to various backend integrations, this documentation became the backbone of collaboration across development, QA, and external partners.",
      detailComponent: "OpenApiDetail",
      footerLink: [
        {
          name: "View Details",
          url: `/otherProjects/${slugify("Open API Document")}`
        }
      ]
    },
    {
      title: "N8N AI",
      image: require("./assets/images/n8n.png"),
      subtitle:
        "Exploring AI-driven automation with n8n: crafted no-code workflows that integrate Ollama, APIs, and internal tools to enhance productivity and decision-making.",
      intro:"In response to PT PELNI’s growing initiative to explore AI-driven solutions, this project focuses on developing an internal tool using n8n, a no-code automation platform, to streamline and enhance decision-making related to IT Change Request (ITCR) prioritization. The system integrates AI models and internal data sources to provide quick, data-informed suggestions on which CRs should be addressed first, increasing productivity and consistency in project planning.",
      detailComponent: "OpenApiDetail",
      footerLink: [
        {
          name: "View Details",
          url: `/otherProjects/${slugify("N8N AI")}`
        }
      ]
    },
    {
      title: "Golek Pet Shop",
      image: require("./assets/images/gps-icon.png"),
      subtitle:
        "Web application framework to seamlessly connect pet owners with pet shop services in Jakarta.",
      intro: "Golek Pet Shop (GPS) is a web application framework with a clear and focused purpose: to seamlessly connect pet owners with pet shop services in South Jakarta. We believe development should result in practical, user-friendly tools that solve real-world problems. GPS aims to simplify the process of finding and booking pet services by centralizing information and functionality into one intuitive platform.",
      detailComponent: "GpsDetail",
        footerLink: [
        {
          name: "View Details",
          url: `/otherProjects/${slugify("golek-pet-shop")}`
          // url: "https://github.com/ayuamelia/golek-pet-shop"
        }
      ]
    },
    {
      title: "HireLit Platform",
      image: require("./assets/images/hirelitLogo.png"),
      subtitle:
        "HireLit E-Recruitment Platform is a full-stack web-based recruitment system built with Laravel for PT Erdikha Elit Sekuritas.",
      intro: "The application was designed to solve the challenges of a traditional, paper-based hiring process, which was often inefficient and prone to data loss or damage. The system digitizes and integrates the entire recruitment workflow, from the initial request for a new employee to the final approval by a director. The core goal is to create a structured, efficient, and transparent recruitment process for all stakeholders.",
      detailComponent: "HirelitDetail",
      footerLink: [
        {
          name: "View Details",
          url: `/otherProjects/${slugify("Hirelit Platform")}`
          // url: "https://github.com/ayuamelia/recruitment-app"
        }
      ]
    },

    {
      title: "POS CoffeeShop",
      image: require("./assets/images/poscoffeeshopLogo.png"),
      imageAlt: "POS CoffeeShop Logo",
      subtitle:
        "POS CoffeeShop is a fun side project built with Flutter for managing coffee shop orders, inventory, and payments. Designed with a minimalist UI and offline-first logic to support small businesses in handling real-time transactions smoothly.",
      detailComponent: "PosCoffeeshopDetail",
      footerLink: [
        {
          name: "View Details",
          url: `/otherProjects/${slugify("POS CoffeeShop")}`
          // url: "https://github.com/ayuamelia/pos-cofeeshop"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */
const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle:
    "Want to know how I build things behind the scenes? My resume is just a click away.",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Have a bold idea, a dev challenge, or just wanna talk code and coffee? I’m all ears :)",
  // number: "+6282138440457",
  email_address: "ayu.amelia.agustin@gmail.com"
};

// Blogs Section
const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections
const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section
const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Twitter Section
const twitterDetails = {
  userName: "ayuameliags", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  bigProjects,
  otherProjectSection,
  blogSection,
  talkSection,
  podcastSection,
  openSource,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
