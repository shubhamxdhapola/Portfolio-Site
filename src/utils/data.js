export const SKILLS = [
    {
        title: "Frontend",
        icon: "./assets/images/frontend-icon.png",
        skills: [
            { skill: "HTML5", percentage: "85%" },
            { skill: "CSS3", percentage: "80%" },
            { skill: "JavaScript", percentage: "75%" },
            { skill: "React.js", percentage: "70%" }
        ],
    },
    {
        title: "Backend",
        icon: "./assets/images/backend-icon.png",
        skills: [
            { skill: "Node.js", percentage: "65%" },
            { skill: "Express.js", percentage: "60%" },
            { skill: "MongoDB", percentage: "55%" }
        ],
    },
    {
        title: "Tools",
        icon: "./assets/images/tools-icon.png",
        skills: [
            { skill: "Git & GitHub", percentage: "70%" },
            { skill: "Visual Studio Code", percentage: "85%" },
            { skill: "Postman", percentage: "70%" },
        ],
    },
    {
        title: "Soft Skills",
        icon: "./assets/images/soft-skills.png",
        skills: [
            { skill: "Critical Thinking", percentage: "70%" },
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
        liveUrl : 'https://quickchat-07q9.onrender.com/login',
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
        gitHubUrl : 'https://github.com/shubhamxdhapola/Password-Manager',
        liveUrl : 'https://password-manager-kohl-alpha.vercel.app/',
    },
];

