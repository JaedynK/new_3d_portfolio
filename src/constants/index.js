import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    python,
    cotiviti,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    git,
    docker,
    WorkoutTracker,
    idlePlatoon,
    threejs,
    seqtek,
    codePlatoon,
    USAF
  } from "../assets";
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Sr. Support Analyst",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML",
      icon: html,
    },
    {
      name: "CSS",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Ground Transportation Operater",
      company_name: "United States Air Force",
      icon: USAF,
      iconBg: "#E6DEDD",
      date: "Jan 2017 - Oct 2020",
      points: [
        "Moved over $30 Million worth of assets for a $4.9 Billion Nuclear program. ",
        "Completed 17K request, moved 100K passengers, and over 15M lbs.",
        "High perfomering trainer; developed skill-specific training for airmen logged over 300 hours of on the road training.",
      ],
    },
    {
      title: "Documented Cargo Manager",
      company_name: "United States Air Force",
      icon: USAF,
      iconBg: "#E6DEDD",
      date: "Oct 2020 - Oct 2022",
      points: [
        "Managed the tracking of a diverse array of assets using NoSQL databases, totaling $30M in classified, hazardous, and oversized cargo, to ensure efficiency.",
        "Pioneered a successful $10k innovation project that connected delivery data in real-time via Getac tablets for Data Processing and tracking.",
        "Managed Airmens input of data points into the Air Force Network, utilizing a CSV platform to show precise delivery timelines and robust data tracking mechanisms",
      ],
    },
    {
      title: "Code Platoon Student",
      company_name: "Code Platoon",
      icon: codePlatoon,
      iconBg: "#E6DEDD",
      date: "Oct 2022 - Feb 2023",
      points: [
        "Learned frontend development using JavaScript, HTML, and CSS on the React.js framework.",
        "Learned backend development using Python, SQL, and PostgreSQL on the Django framework.",
        "Created personal and team projects, leveraging Git for version control and Agile methodolgoies among the class.",
      ],
    },
    {
      title: "Full stack Developer Intern",
      company_name: "SeqTek",
      icon: seqtek,
      iconBg: "#E6DEDD",
      date: "Feb 2023 - May 2023",
      points: [
        "Successfully orchestrated the migration of a C#/.NET application to the FastAPI framework, ensuring impeccable integration.",
        "Demonstrated proficiency in the front-end using React, JavaScript, and C#; back-end using FastAPI, Python, and SQLAlchemy.",
        "Harnessed the power of Docker, Visual Studio Code, and GitHub to elevate debugging techniques and collaborated seamlessly with senior developers.",
      ],
    },
    {
      title: "Coding Bootcamp Assistant",
      company_name: "Code Platoon",
      icon: codePlatoon,
      iconBg: "#E6DEDD",
      date: "Jun 2023 - Sep 2023",
      points: [
        "Skillfully led students through hands-on exercises while addressing Django and React challenges",
        "Offered personalized one-on-one mentorship to students in JavaScript, Python, HTML, and CSS throughout the course.",
        "Collaborated seamlessly with instructors to deliver concise and comprehensible guidance, through different OS systems such as macOS and Linux.",
      ],
    },
    {
      title: "Sr. Support Analysist",
      company_name: "Cotiviti",
      icon: cotiviti,
      iconBg: "#E6DEDD",
      date: "Oct 2023 - Current",
      points: [
        "Diligently monitored, analyzed, and resolved intricate data platform, configuration, and infrastructure-related issues for system stability through SQL Databases.",
        "Fostered cross-functional collaboration, seamlessly coordinating with developers, network engineers, and other stakeholders to rapidly address issues.",
        "Keep strict compliance with security and industry standards, mitigating potential risks associated with data platforms and infrastructure.",
      ],
    },
  ];
  
  const testimonials = [
    // {
    //   testimonial:
    //   name:
    //   designation:
    //   company:
    //   image:
    // },
  ];
  
  const projects = [
    {
      name: "Workout Tracker",
      description:
        "Application that allows users to track future and pass workouts.",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "Django",
          color: "green-text-gradient",
        },
        {
          name: "Javascript & Python",
          color: "pink-text-gradient",
        },
      ],
      image: WorkoutTracker,
      source_code_link: "https://github.com/JaedynK/exercise_planner",
    },
    {
      name: "Idle Platton",
      description:
        "Game that has idle functionality that runs without you having to be present.",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "Django",
          color: "green-text-gradient",
        },
        {
          name: "Javascript & Python",
          color: "pink-text-gradient",
        },
      ],
      image: idlePlatoon,
      source_code_link: "https://github.com/YebraL/Game-Idle",
    },
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };