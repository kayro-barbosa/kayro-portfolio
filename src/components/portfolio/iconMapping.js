import { 
    SiJavascript, 
    SiReact, 
    SiHtml5, 
    SiCss3, 
    SiNodedotjs, 
    SiSupabase,
    SiDocker,
    SiTypescript,
    SiVuedotjs,
    SiStrapi,
    SiFigma,
    SiExpress
} from 'react-icons/si';
import { FaCode } from 'react-icons/fa';
import { TbBrandCSharp } from 'react-icons/tb';

// Map technology names to their corresponding icons
export const getTechIcon = (techName) => {
    const iconMap = {
        'JavaScript': SiJavascript,
        'React': SiReact,
        'HTML': SiHtml5,
        'HTML5': SiHtml5,
        'CSS': SiCss3,
        'CSS3': SiCss3,
        'SCSS': SiCss3,
        'NodeJS': SiNodedotjs,
        'ExpressJS': SiExpress,
        'Supabase': SiSupabase,
        'Docker': SiDocker,
        'C#': TbBrandCSharp,
        'TypeScript': SiTypescript,
        'VueJS': SiVuedotjs,
        'Strapi': SiStrapi,
        'Figma': SiFigma
    };

    return iconMap[techName] || FaCode; // Return FaCode as fallback for unknown technologies
};
