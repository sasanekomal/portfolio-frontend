// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import cLogo from './assets/tech_logo/c.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import netlifyLogo from './assets/tech_logo/netlify.png';



// Experience Section Logo's
import codecLogo from './assets/company_logo/codeclogo.png';


// Education Section Logo's
import csmssLogo from './assets/education_logo/csmsslogo.png';
import gpaLogo from './assets/education_logo/gpalogo.png';


// Project Section Logo's
import portfolioLogo from './assets/work_logo/portfoliologo.png';
import retailLogo from './assets/work_logo/retaillogo.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },    
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },      
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },

    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },     
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },     
      { name: 'JavaScript', logo: javascriptLogo },
      
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Netlify', logo: netlifyLogo },
      
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: codecLogo,
      role: "Fullstack Developer intern",
      company: "Codec Technologies",
      date: "February 2025 - August 2025",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development.  Developed a responsive personal portfolio website to showcase my skills, education, and projects, Built using React.js(Vite), Node.js & Express.js, Mysql. Integrated smooth scroll animations, contact form with EmailJS, and a modern responsive UI using Tailwind CSS.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.JS(Vite)",
        "Node.JS",
        "Express.js",
        "Tailwind CSS",
        "Mysql",
        
        
      ],
    },
    
  ];
  
  export const education = [
    {
      id: 0,
      img: csmssLogo,
      school: "CSMSS Chh. Shahu College of Engineering, Aurangabad ",
      date: "2022 - 2025",
      grade: "7.64 CGPA",
      desc: "I have completed my B.Tech in Electronics and Computer Engineering from CSMSS Chh. Shahu College of Engineering, Aurangabad(DBATU University). I gained a strong foundation in programming, I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering, which enhanced my skills and knowledge. My experience at CSMSS has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Bachelor of technology - B.tech (Electronics and Computer Engineering)",
    },
    {
      id: 1,
      img: gpaLogo,
      school: "Government Polytechnic Aurangabad",
      date: "2019 - 2022",
      grade: "79.18%",
      desc: "I completed my Diploma in Information Technology from Government Polytechnic Aurangabad. which provided me with practical, technical knowledge and a strong foundation for my B.Tech studies.",
      degree: "Diploma - IT (Information Technology)",
    },
   
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Full-Stack Portfolio Website",
      description:
       "Developed a fully responsive personal portfolio website to showcase my skills, experience, education, and projects. Built using React.Js (Vite), Tailwind CSS, Node.js, and MySQL for dynamic content and smooth performance.Integrated EmailJS for contact form functionality and used animations for an interactive user experience." ,
      image: portfolioLogo,
      tags: ["HTML", "CSS", "JavaScript", "React.js(Vite)", "Tailwind css", "Node.js", "Mysql"],
      github: "https://github.com/sasanekomal/retail-billing-netlify",
      webapp: "https://retail-billing.netlify.app/",
    },
    {
      id: 1,
      title: "Retail billing system",
      description:
        "Developed a java full-stack Retail Billing System using React.js(Vite), Spring Boot, and MySQL. Integrated AWS S3 for image storage and Razorpay (test mode) for online UPI payments. Features include dashboard analytics, order History, and category-based item management.",
      image: retailLogo,
      tags: ["React.jS", "Springboot", "Mysql", "HTML", "CSS", "JavaScript", "Bootstrap 5"],
      github: "https://github.com/sasanekomal/retail-billing-netlify",
      webapp: "https://retail-billing.netlify.app/",
    },
  
    
  ];  