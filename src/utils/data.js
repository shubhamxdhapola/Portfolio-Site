export const SKILLS = [
    {
        title: "Frontend",
        icon: "./images/frontend-icon.png",
        skills: [
            { skill: "HTML5", percentage: "85%" },
            { skill: "CSS3 + Tailwind", percentage: "80%" },
            { skill: "JavaScript", percentage: "75%" },
            { skill: "React.js", percentage: "70%" }
        ],
    },
    {
        title: "Backend",
        icon: "./images/backend-icon.png",
        skills: [
            { skill: "Node.js", percentage: "80%" },
            { skill: "Express.js", percentage: "85%" },
            { skill: "MongoDB", percentage: "70%" },
            { skill: "RESTful API", percentage: "80%" }
        ],
    },
    {
        title: "Tools",
        icon: "./images/tools-icon.png",
        skills: [
            { skill: "Git & GitHub", percentage: "70%" },
            { skill: "Visual Studio Code", percentage: "85%" },
            { skill: "Postman", percentage: "75%" },
            { skill: "MongoDB Atlas", percentage: "70%" },
        ],
    },
    {
        title: "Soft Skills",
        icon: "./images/soft-skills.png",
        skills: [
            { skill: "Critical Thinking", percentage: "70%" },
            { skill: "Creativity", percentage: "80%" },
            { skill: "Time Management", percentage: "85%" },
            { skill: "Adaptability", percentage: "70%" },
        ],
    }
];

export const PORTFOLIO = [
    {
        title: "QuickChat",
        techStacks: ['Node.js', "React.js", "Socket.io", "Zustand", "MongoDB", "Tailwind"],
        description: [
            "Built a real-time chat application using React for the frontend and Node.js with Express for the backend.",
            "Integrated Socket.io to enable instant messaging and real-time updates between users.",
            "Utilized MongoDB for efficient storage and retrieval of chat messages.",
            "Demonstrated proficiency in full-stack development, web sockets, and handling real-time data flow.",
        ],
        gitHubUrl : 'https://github.com/shubhamxdhapola/QuickChat',
        liveUrl : 'https://quickchatapp-3zbz.onrender.com/',
    },
    {
        title: "Weather Application",
        techStacks: ['React', 'CSS3', "JavaScript", "Openweather API"],
        description: [
            "Built using React, with a responsive and interactive user interface. ",
            "Displays real-time weather data including temperature, humidity, wind speed, and more. ",
            "Showcases the current time, date, month, and year for added convenience. ",
            "Integrated with the OpenWeather API to fetch accurate weather information based on the user's location. ",
        ],
        gitHubUrl : 'https://github.com/shubhamxdhapola/Weather-App',
        liveUrl : 'https://weatherapp-delta-mocha.vercel.app/',
    },
    
    {
        title: "Quizzy",
        techStacks: ['HTML5', 'CSS3', "JavaScript", "Trivia API"],
        description: [
            "Built using HTML, CSS, and JavaScript with smooth animations for a seamless experience.",
            "Implemented a custom timer for each question to enhance user engagement.",
            "Fetched questions from the Open Trivia Database API, covering a wide range of topics.",
            "Showcased skills in interactive UI design, API integration, and creating an engaging user experience.",
        ],
        gitHubUrl : 'https://github.com/shubhamxdhapola/Quizzy',
        liveUrl : 'https://shubhamxdhapola.github.io/Quizzy/',
    },
    {
        title: "Password Manager",
        techStacks: ['React.js', 'Tailwind', "LocalStorage", "JavaScript"],
        description: [
            "Developed a Password Manager application using React and Tailwind CSS for a modern and responsive user interface.",
            "Enables users to securely store, view, and manage passwords, all saved locally in the browser's localStorage.",
            "Implemented features like copy to clipboard for easy retrieval of saved passwords.",
            "Demonstrated expertise in React state management, Tailwind styling, and working with browser storage APIs.",        
        ],
        imageUrl : './images/heroImage.jpg',
        gitHubUrl : 'https://github.com/shubhamxdhapola/Password-Manager',
        liveUrl : 'https://password-manager-kohl-alpha.vercel.app/',
    },
    {
        title: "Listify",
        techStacks: ['HTML5', 'CSS3', "LocalStorage", "JavaScript"],
        description: [
            "Developed using HTML, CSS, and JavaScript for a seamless user experience.",
            "Enabled users to add, edit, and delete tasks dynamically.",
            "Integrated input validation to prevent empty task entries.",
            "Featured a responsive, user-friendly interface with dynamic task list updates.",
            "Implemented localStorage to save tasks across page reloads, enhancing usability.",
        ],
        gitHubUrl : 'https://github.com/shubhamxdhapola/Listify',
        liveUrl : 'https://shubhamxdhapola.github.io/Listify/',
    },
    {
        title: "Calculator",
        techStacks: ['HTML5', 'CSS3', "JavaScript"],
        description: [
            "A web-based calculator that allows users to perform basic arithmetic operations.",
            "Built using HTML, CSS, and JavaScript with a clean and intuitive UI.",
            "Supported operations include addition, subtraction, multiplication, and division.",
            "Featured dark and light theme switching for user preference.",
            "Validated user input to prevent invalid expressions and ensure accurate calculations.",
        ],
        gitHubUrl : 'https://github.com/shubhamxdhapola/Calculator',
        liveUrl : 'https://shubhamxdhapola.github.io/Calculator/'
    },
];

export const SOCIAL_HANDLES = [
    {
        socialHandleUrl : 'https://www.linkedin.com/in/shubhamdhapola/',
        iconUrl : 'fa-brands fa-linkedin-in',
    },
    {
        socialHandleUrl : 'https://github.com/shubhamxdhapola',
        iconUrl : 'fa-brands fa-github',
    },
    {
        socialHandleUrl : 'https://www.instagram.com/orewashubham/',
        iconUrl : 'fa-brands fa-instagram',
    },
    {
        socialHandleUrl : 'mailto:shubhamdhapola143@gmail.com',
        iconUrl : 'fa-solid fa-envelope',
    }
]

export const navPages = ['home', 'skills', 'portfolio', 'contact']

