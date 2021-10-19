// Change website animations
const animation = {
  // make it false to switch off fade-up animation
  animate: true,
  // animation playing duration
  duration: 750,
  // if true, animation plays only once when element comes on screen
  once: false,
};
// Change your display name on tha landing display
const header = {
  name: "DeQuan Sanders",
};
const background = {
  // Options: Snow or Particle
  type: "Particle",
};
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const section2title = "About Me";
const about = {
  paragraph:
    "Just shy of two years experience I gained a passion for Software Engineering / Web Developing 🚀 with experience in designing and building Web and Mobile applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks.",
};
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [
  {
    name: "HTML5",
    faClass: "fab fa-html5",
  },
  {
    name: "CSS3",
    faClass: "fab fa-css3",
  },
  {
    name: "Javascript",
    faClass: "fab fa-js",
  },
  {
    name: "SASS",
    faClass: "fab fa-sass",
  },
  {
    name: "Node",
    faClass: "fab fa-node",
  },
  {
    name: "Python",
    faClass: "fab fa-python",
  },
  {
    name: "Java",
    faClass: "fab fa-java",
  },
  {
    name: "PHP",
    faClass: "fab fa-php",
  },
  {
    name: "Database",
    faClass: "fas fa-database",
  },
  {
    name: "AWS",
    faClass: "fab fa-aws",
  },
];
// Edit your projects, its name, your skills used to make it, and the url.
// You can omit freely anything if you dont have it
// To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
const section3Title = "CATALOG";
const projects = [
  {
    // Add image in './styles/images.css' in #project1
    id: "project1",
    name: "E-Commerce",
    skills: ["SEO Ready, Responsive, Integrate seamlessly with the most common ecommerce platforms, with an addition to Security with STRIPE"],
    url: "https://commerce-kappa-flax.vercel.app/",
  },
  {
    // Add image in './styles/images.css' in #project2
    id: "project2",
    name: "YOUR CATALOG",
    skills: ["Ready for your taking, sytling and customizations"],
    url: "https://hull-shopify-starter-1.vercel.app/",
  },
  {
    // Add image in './styles/images.css' in #project3
    id: "project3",
    name: "Quote Generator",
    skills: ["Generates Quotes from API"],
    url: "https://supadupa24.github.io/QuoteGenerator/",
  },
  {
    // Add image in './styles/images.css' in #project4
    id: "project4",
    name: "Simple Blog",
    skills: ["Simple Blog Starter"],
    url: "https://next-js-blog-with-comments-roan-five.vercel.app/",
  },
  {
    // Add image in './styles/images.css' in #project5
    id: "project5",
    name: "Infinite Unscrollio",
    skills: ["Infnite Amazing photos using an API"],
    url: "https://supadupa24.github.io/InfiniteUnScrollio/",
  },
  {
    // Add image in './styles/images.css' in #project6
    id: "project6",
    name: "DigiTrends",
    skills: ["Light/Dark"],
    url: "https://supadupa24.github.io/DigiTrends/",
  },
];
// Edit your Miscellaneous Activities, its name and the url.
// You can omit freely anything if you dont have it
// To Add a Activity, copy any one below and paste it after the last comma and increment the id's Miscellaneous number
const section4Title = "Miscellaneous";
const miscellaneous = [
  {
    // Add image in './styles/images.css' in #misc1
    id: "misc1",
    name: "more commerece",
    url: "https://blissful-pare-16588b.netlify.app/",
  },
  {
    // Add image in './styles/images.css' in #misc2
    id: "misc2",
    name: "Robo Homies",
    url: "https://real-robo.vercel.app/",
  },
  {
    // Add image in './styles/images.css' in #misc3
    id: "misc3",
    name: "Landing Page",
    url: "https://land-11.netlify.app/",
  },
];
// Contact form text, and Jotforms link
// To get your own jotform link, go to https://www.jotform.com/
// If you hacve the link already, paste it in the contactUrl below
const section5Title = "Get in Touch";
const contact = {
  pitch:
    "This dedicated developer is open to request no matter how big or small and solving technical issues that require certain skills needed to achieve digital growth and success in connecting with your clients.",
  copyright: "DeQuan Sanders",
  contactUrl: "https://form.jotform.com/212157792931056",
};
// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
  github: "https://github.com/SupaDupa24",
  facebook: "https://facebook.com",
  linkedin: "www.linkedin.com/in/dequan-sanders-3937b364",
  instagram: "https://instagram.com",
  resume: "https://my.indeed.com/p/dequans-5oqoqnw",
};
// Dont change anything here
export {
  animation,
  header,
  background,
  about,
  skillsBar,
  projects,
  miscellaneous,
  contact,
  social,
  section2title,
  section3Title,
  section4Title,
  section5Title,
};
