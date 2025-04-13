/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: false, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Maksym Ivanenko",
  title: "Hi all, I'm Maksym",
  subTitle: emoji(
    "Experienced Software Architect with over 12 years in the industry, specializing in Cloud Computing, Microservices, Event-Driven and Service-Oriented Architectures. Adept at building cloud-native distributed systems, multi-threaded applications, and desktop solutions. Proven track record of providing technical leadership and mentorship, guiding teams to deliver innovative solutions that drive efficiency and reduce operational costs. Skilled in collaborating with clients and business stakeholders to inform technical decision-making and successfully execute projects. Passionate about staying at the forefront of emerging technologies and industry trends, consistently integrating diverse frameworks and tools to craft cohesive, high-performance solutions. My work is showcased through well-documented prototypes on my public GitHub account, demonstrating my commitment to continuous learning and sharing knowledge."
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ivanenkomaksym",
  linkedin: "https://www.linkedin.com/in/ivanenkomaksym/",
  gmail: "ivanenkomak@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "EXPLORE AND CONNECT THINGS",
  skills: [
    emoji(
      "⚡ Build backend services and APIs using C#, Rust, Go, TypeScript, C++"
    ),
    emoji(
      "⚡ React, and Angular for frontend development"
    ),
    emoji(
      "⚡ Deploying using Docker, Kubernetes, and CI/CD pipelines"
    ),
    emoji(
      "⚡ Cloud-native development using Azure, AWS and Google Cloud"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      "skillName": "C#",
      "badgeURL": "https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=csharp&logoColor=white"
    },
    {
      "skillName": "Azure",
      "badgeURL": "https://img.shields.io/badge/azure-%230072C6.svg?style=for-the-badge&logo=microsoftazure&logoColor=white"
    },
    {
      "skillName": "AWS",
      "badgeURL": "https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white"
    },
    {
      "skillName": "Google Cloud",
      "badgeURL": "https://img.shields.io/badge/Google%20Cloud-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white"
    },
    {
      "skillName": "Docker",
      "badgeURL": "https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white"
    },
    {
      "skillName": "Kubernetes",
      "badgeURL": "https://img.shields.io/badge/kubernetes-%23326ce5.svg?style=for-the-badge&logo=kubernetes&logoColor=white"
    },
    {
      "skillName": "C++",
      "badgeURL": "https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white"
    },
    {
      "skillName": "PowerShell",
      "badgeURL": "https://img.shields.io/badge/PowerShell-%235391FE.svg?style=for-the-badge&logo=powershell&logoColor=white"
    },
    {
      "skillName": "Rust",
      "badgeURL": "https://img.shields.io/badge/rust-%23000000.svg?style=for-the-badge&logo=rust&logoColor=white"
    },
    {
      "skillName": "Go",
      "badgeURL": "https://img.shields.io/badge/go-%2300ADD8.svg?style=for-the-badge&logo=go&logoColor=white"
    },
    {
      "skillName": "Python",
      "badgeURL": "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54"
    },
    {
      "skillName": "TypeScript",
      "badgeURL": "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"
    },
    {
      "skillName": "Git",
      "badgeURL": "https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white"
    },
    {
      "skillName": "Postman",
      "badgeURL": "https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white"
    },
    {
      "skillName": "Swagger",
      "badgeURL": "https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Ivan Franko National University of Lviv",
      logo: require("./assets/images/unilogo.jpg"),
      subHeader: "Master of Science in Information Technologies",
      duration: "September 2008 - Jul 2013"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Demo Projects",
  subtitle: "SOME PUBLICLY ACCESSIBLE DEMO PROJECTS",
  projects: [
    {
      image: require("./assets/images/shorturl.png"),
      projectName: "Short URL",
      projectDesc: "Simple URL shortening service written in Rust. ",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://short.ivanenkomak.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/twitterclone.png"),
      projectName: "Twitter Clone",
      projectDesc: "Simple twitter clone in Go with Server-Sent Events and React client. Supports multi-environment setup, containerization, CI/CD, Google Cloud deployment.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://twitter.ivanenkomak.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),

  achievementsCards: [
    {
      title: "AWS Certified Cloud Practitioner",
      image: require("./assets/images/aws.png"),
      imageAlt: "AWS Certified Cloud Practitioner",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1PRNDS02T6XXas3SqdgVIjp2pQDErxUMj/view?usp=sharing"
        }
      ]
    },
    {
      title: "Microsoft Certified: Azure Fundamentals",
      image: require("./assets/images/azurecertified.png"),
      imageAlt: "Microsoft Certified: Azure Fundamentals",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1b8FzFyuQ3Ixotz4dBuThvR9RNTpkEL2e/view?usp=drive_link"
        }
      ]
    },
    {
      title: "Certified Qt Developer",
      image: require("./assets/images/qt.png"),
      imageAlt: "Certified Qt Developer",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B9OCCPtRH_y1X3JFWDBoVjlvcFE/view?usp=drive_link&resourcekey=0-QsrLB4mLkxDLPAN8WPkRMw"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
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

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+380 96 966 1240",
  email_address: "ivanenkomak@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "ivanenkomak", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = null; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
