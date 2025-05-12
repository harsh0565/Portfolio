const projects = [
  {
    title: "FreshCart",
    description: "FreshCart is a responsive and modern online grocery store designed to offer a smooth shopping experience with features like secure login, smart product search, seamless checkout, and integrated payment gateways. It includes an admin dashboard for managing products and orders, and is built with a scalable tech stack optimized for performance and mobile use.",
    image: "./assets/projectImages/Freshcart.jpg",
    link: "https://freshcart-red.vercel.app/"
  },
  {
    title: "Ecommerce Watch Store",
    description: "A fully responsive ecommerce platform built with the MERN stack (MongoDB, Express, React, Node.js). It features product listings, a shopping cart, and user authentication for a seamless shopping experience.",
    image: "./assets/projectImages/Ecommerce.jpg",
    link: "https://ecommerce-harsh.vercel.app/"
  },
  {
    title: "Edu-Hive",
    description: "An online education platform built with the MERN stack. It offers courses, quizzes, and user dashboards, allowing educators and students to interact in real-time.",
    image: "./assets/projectImages/Eduhive.jpg",
    link: "https://edu-hive-steel.vercel.app/"
  },
  {
    title: "Cinescope",
    description: "A movie discovery app built with the MERN stack that allows users to search for movies, view details, and save their favorites. The backend is powered by Node.js and MongoDB, while the frontend is built with React.",
    image: "./assets/projectImages/Cinescope.png",
    link: "https://github.com/harsh0565/CINESCOPE"
  },
  {
    title: "TextUtils",
    description: "A React-based utility app that allows users to analyze and manipulate text quickly. It includes features like word/character count, case conversion, and text formatting.",
    image: "./assets/projectImages/TextUtils.png",
    link: "https://harsh0565.github.io/Harsh_Text_Utils/"
  },
 
  {
    title: "Chat App",
    description: "A real-time chat application allowing users to communicate instantly through a simple user interface.",
    image: "./assets/projectImages/ChatApp.webp",
    link: "https://github.com/harsh0565/Chat_App"
  },
  {
    title: "Infovista",
    description: "A React-based app that integrates with external APIs to fetch real-time news, analytics, and insights, delivering personalized content using advanced algorithms.",
    image: "./assets/projectImages/Infovista.png",
    link: "https://github.com/harsh0565/Infovista"
  },
  {
    title: "Sorting Visualizer",
    description: "A tool that visualizes different sorting algorithms in action, helping users understand how each algorithm works.",
    image: "./assets/projectImages/SortingVisualizer.png",
    link: "https://harsh0565.github.io/Sorting-Visualizer/"
  },
  {
    title: "ToDo App",
    description: "A simple and intuitive To-Do List app built with React that allows users to add, remove, and update tasks. The app uses Local Storage for data persistence.",
    image: "./assets/projectImages/ToDo.png",
    link: "https://github.com/harsh0565/ToDo-App"
  },
  {
    title: "Calculator",
    description: "A simple, user-friendly calculator app built with React that supports basic arithmetic operations. It features a clean interface and responsive design.",
    image: "./assets/projectImages/Calculator.png",
    link: "https://harsh0565.github.io/Calculator/"
  },
  {
    title: "Currency Convertor",
    description: "An app that allows users to convert currencies using real-time exchange rates from various global markets.",
    image: "./assets/projectImages/Currency.jpg",
    link: "https://github.com/harsh0565/Currency_Convertor"
  },
  {
    title: "Pilgrim",
    description: "A travel planning app built with React that helps users organize their journeys, explore popular destinations, and plan itineraries.",
    image: "./assets/projectImages/Pilgrim.png",
    link: "https://harsh0565.github.io/Mangosorange/"
  },
  {
    title: "Crudify",
    description: "A full-stack CRUD application built with Node.js, Express, MongoDB, and React that allows users to create, read, update, and delete records. It offers authentication and data persistence.",
    image: "./assets/projectImages/Crudify.webp",
    link: "https://github.com/harsh0565/CRUDify"
  },
  
  // Add more projects as needed
];

  // Select container
  const container = document.getElementById("project-container");
  
  // Loop through projects and add to DOM
  projects.forEach(project => {
    const projectBox = document.createElement("div");
    projectBox.classList.add("portfolio-box");
  
    projectBox.innerHTML = `
      <img src="${project.image}" alt="${project.title}">
      <div class="portfolio-layer">
        <h4>${project.title}</h4>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank"><i class="bx bx-link-external"></i></a>
      </div>
    `;
  
    container.appendChild(projectBox);
  });
  