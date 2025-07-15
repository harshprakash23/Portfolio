
import React from "react";
import DineDash from '../assets/DineDash.png'
import Portfolio from '../assets/Portfolio.png'
import Footer from './Footer'
import { GoCopilot } from "react-icons/go";

const ProjectCard = ({ image, title, description, git, technologies }) => {
    return (
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            {title=='Dine_Dash' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={DineDash} alt="" />
            </a>}
            {title=='Portfolio' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={Portfolio} alt="" />
            </a>}
            <div className="p-4 sm:p-6">
                <a href="#">
                    <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
                </a>
                <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">{description}</p>
            </div>
            <div className='m-2 sm:m-4 lg:m-6 flex justify-between'>
                <div className='flex flex-wrap gap-2 pl-2'>
                    {technologies.map((tag, index) => (
                        <p
                            key={`${index}-${tag}`}
                            className='text-[14px] text-blue-500'
                        >
                            #{tag}
                        </p>
                    ))}
                </div>
                <a href={git} className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300">GitHub</a>
            </div>
        </div>
    );
};
  
const Projects = () => {
    return (
        <div className="bg-black">
            <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        links={item.links}
                        git={item.git}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer/>
        </div>
    );
}


export const project = [
    {
        title:'Dine_Dash',
        description:'DineDash is an online food ordering platform designed to provide a seamless and enjoyable user experience. The platform enables users to browse menus, place orders. It has been crafted using HTML, CSS, and JavaScript to ensure a responsive and user-friendly interface across various devices.',
        image: {DineDash},
        git:'https://github.com/harshprakash23/DineDash',
        technologies:['HTML' ,'CSS' , 'JavaScript']
    },
    {
        title:'Portfolio',
        description:'Developed a personal portfolio website using HTML, CSS, JavaScript, and React.js. The project showcases a clean and modern design, featuring interactive UI components and a responsive layout. The portfolio includes sections for projects, skills, education, and contact information, providing a comprehensive overview of the users professional background and achievements. This project highlights the users expertise in front-end development and ability to create visually appealing and functional web applications.',
        image: {Portfolio},
        git:"https://github.com/harshprakash23/Portfolio",
        technologies:[ 'JavaScript', 'tailwind CSS','ReactJs']
    }
]

export default Projects