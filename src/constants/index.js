//ye khud bharna hai so do change it yourself once you have desogned it


import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    chess,
    virtual,
    iris,
    scikit,
    unity,
    python,
    cpp,
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
        title: "AI/ML",
        icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Unity Developer",
        icon: backend,
    },
    {
        title: "Problem Solving",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
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
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: 'Scikit',
        icon: scikit,
    },
    {
        name: 'Unity',
        icon: unity,
    },
    {
        name: 'Python',
        icon: python,
    },
    {
        name: 'C++',
        icon: cpp,
    }


];

const experiences = [
    {
        title: "Chess Engine Development",
        company_name: "Sloth",
        icon: chess,
        iconBg: "#383E56",
        date: "March 2023 - April 2023",
        points: [
            "The project typically involves several components, including board representation, move generation, evaluation function, search algorithms, and user interface.",
            "The search algorithm component involves exploring the various possible moves and evaluating the board state after each move. This component typically involves a tree search to identify the best move..",
            "the user interface component provides an interface for human players to interact with the engine and play chess games against it",
        ],
    },
    {
        title: "Game Developer",
        company_name: "Virtual Guy",
        icon: virtual,
        iconBg: "#E6DEDD",
        date: "Dec 2022 - Jan 2023",
        points: [
            "Developing and maintaining a 2D platformer using Unity Software .",
            "Implementing proper physics to the main character using various self made C# scripts",
            "Read various documentations and surfed youtube for guidance",
        ],
    },
    {
        title: "Machine Learning",
        company_name: "Iris Dataset",
        icon: iris,
        iconBg: "#383E56",
        date: "Feb 2023 - March 2023",
        points: [
            "Created a notebook on Kaggle.com",
            "Implemented various python libraries such as matplotlib,scikit-learn,seaborn,pandas and numpy",
            "Participated in code reviews with peers to enhance my learning for other future project",
        ],
    },
    /*{
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },*/
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Car Rent",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };