import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"
import mock6 from "../img/mock6.png"
import mock7 from "../img/mock7.png"

export let colors = [" #00ffa4", " #a668ff"]; 

export let singlePage = false;

export const info = {
    firstName: "Kayro",
    lastName: "Barbosa",
    initials: "KB",
    position: "Software Developer",
    selfPortrait: self,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '💻',
            text: 'Software Developer'
        },
        {
            emoji: "🎓",
            text: "Web Development and Multimedia"
        },
        {
            emoji: "📧",
            text: "kayromatheus584@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://instagram.com/kayrosmb",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/kayro-barbosa",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com/in/kayro-barbosa",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        }
    ],
    bio: "Hello! I'm Kayro, a 21 years old Software Developer who loves learning new things and is always looking for new challenges. I'm recently graduated in Web Development and Multimedia from IPCA. Currently open to job opportunities or professional internships in Software Development.",
    skills: {
        proficientWith: ['c#', 'javascript', 'flutter', 'react', 'strapi', 'html5', 'css3', 'mysql'],
        exposedTo: ['nodejs', 'typescript', 'vuejs', 'php', 'angular', 'unity'],
        softSkills: ['teamwork', 'time-management', 'adaptability', 'resilience', 'problem-solving', 'proactivity']
    },
    hobbies: [
        { label: 'gym', emoji: '💪' },
        { label: 'gaming', emoji: '🎮' },
        { label: 'football', emoji: '⚽' },
        { label: 'cooking', emoji: '🔪' },
        { label: 'music', emoji: '🎵' }
    ],
    portfolio: [
        {
            title: "Personal Portfolio",
            live: "https://kayrobarbosa.netlify.app",
            source: "https://github.com/kayro-barbosa/kayro-portfolio",
            image: mock1,
            description: "This is my personal portfolio, showcasing some of the projects I have worked on.",
            technologies: ['JavaScript', 'React', 'HTML', 'SCSS']
        },
        {
            title: "Gastronomia & Clima",
            live: "#",
            source: "https://github.com/kayro-barbosa/gastronomia-clima",
            image: mock2,
            description: "A web app using NodeJS and Supabase database.",
            technologies: ['JavaScript', 'NodeJS', 'ExpressJS', 'Supabase', 'Docker', 'HTML', 'CSS']
        },
        {
            title: "Stock App",
            live: "#",
            source: "https://github.com/kayro-barbosa/stock-app",
            image: mock3,
            description: "A React app for tracking stock prices.",
            technologies: ['JavaScript', 'React', 'HTML', 'CSS']
        },
        {
            title: "Gestão Livraria",
            live: "#",
            source: "https://github.com/kayro-barbosa/gestao-livraria",
            image: mock4,
            description: "A C# .NET Console App for managing a library system.",
            technologies: ['C#']
        },
        {
            title: "Strapi GitHub Integration",
            live: "#",
            source: "https://github.com/kayro-barbosa/github_strapi",
            image: mock6,
            description: "A Strapi backend project to fetch and manage GitHub repository data with Rocketchat integration.",
            technologies: ['TypeScript', 'NodeJS', 'Strapi']
        },
        {
            title: "Strapi GitHub Dashboard",
            live: "#",
            source: "https://github.com/kayro-barbosa/Strapi-Github-Dashboard",
            image: mock7,
            description: "A web dashboard built with VueJS that displays GitHub repository data fetched from a Strapi backend.",
            technologies: ['TypeScript', 'VueJS', 'HTML', 'CSS']
        },
        {
            title: "XP Academy",
            live: "#",
            source: "https://www.behance.net/gallery/218138889/XP-Academy-Projeto",
            image: mock5,
            description: "Visual Identity for an e-learning gamified platform to develop skills in various areas.",
            technologies: ['Figma']
        }
    ]
}
