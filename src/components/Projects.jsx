import React from "react";
import { motion } from "framer-motion";
import Footer from './Footer';

const DineDash = "/assets/dinedash.png";
const Portfolio = "/assets/portfolio.png";
const Attendance = "/assets/attendance.png";
const DynamicForm = "/assets/dynamicform.png";


const ProjectCard = ({ image, title, description, git, technologies, index }) => {
    return (
        <motion.div 
            className="max-w-sm bg-gray-900/50 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-500 group"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                ease: "easeOut"
            }}
            whileHover={{ 
                y: -10, 
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
            }}
        >
            <div className="relative overflow-hidden">
                <img 
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" 
                    src={image} 
                    alt={title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            <div className="p-6">
                <motion.h5 
                    className="text-2xl font-bold tracking-tight mb-3 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500"
                    whileHover={{ scale: 1.05 }}
                >
                    {title}
                </motion.h5>
                <p className="font-normal text-gray-300 leading-relaxed mb-4 line-clamp-4">
                    {description}
                </p>
            </div>
            
            <div className='px-6 pb-6 flex justify-between items-end'>
                <div className='flex flex-wrap gap-2'>
                    {technologies.map((tag, tagIndex) => (
                        <motion.span
                            key={`${index}-${tag}`}
                            className='px-3 py-1 text-xs font-medium text-blue-400 bg-blue-400/10 border border-blue-400/20 rounded-full'
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: (index * 0.2) + (tagIndex * 0.1) + 0.5 }}
                            whileHover={{ scale: 1.1, backgroundColor: "rgba(59, 130, 246, 0.2)" }}
                        >
                            #{tag}
                        </motion.span>
                    ))}
                </div>
                <motion.a 
                    href={git} 
                    className="px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </motion.a>
            </div>
        </motion.div>
    );
};

const project = [
    {
        title:'Dine_Dash',
        description:'DineDash is an online food ordering platform designed to provide a seamless and enjoyable user experience. The platform enables users to browse menus, place orders. It has been crafted using HTML, CSS, and JavaScript to ensure a responsive and user-friendly interface across various devices.',
        image: DineDash,
        git:'https://github.com/harshprakash23/DineDash',
        technologies:['HTML' ,'CSS' , 'JavaScript']
    },
    {
        title:'Portfolio',
        description:'Developed a personal portfolio website using HTML, CSS, JavaScript, and React.js. The project showcases a clean and modern design, featuring interactive UI components and a responsive layout. The portfolio includes sections for projects, skills, education, and contact information, providing a comprehensive overview of the users professional background and achievements.',
        image: Portfolio,
        git:"https://github.com/harshprakash23/Portfolio",
        technologies:[ 'JavaScript', 'tailwind CSS','ReactJs']
    },
    {
        title: 'Attendance Management System',
        description: 'Developed a comprehensive Attendance Management System using the MERN-like stack with MySQL as the database. The application enables users to add and manage volunteer attendance records, mark presence or absence, assign custom attendance periods, and export data as CSV files. It features role-based access control, allowing admins to manage users and data securely.',
        image: Attendance, 
        git: "https://github.com/harshprakash23/Attendance-Management-System",
        technologies: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'JavaScript']
    },
    {
        title: 'Dynamic Forms',
        description: 'Built a dynamic form-building application using React.js for the frontend, Spring Boot for the backend, and MySQL as the database. The system allows role-based access where admins can create forms, assign users, and download responses in Excel format. Users can fill out forms multiple times, with partial or full edit rights based on their roles.',
        image: DynamicForm,  
        git: "https://github.com/harshprakash23/DynamicForms",
        technologies: ['React.js', 'Spring Boot', 'MySQL', 'JavaScript', 'Excel Export']
    },
];

const Projects = () => {
    return (
        <div className='relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden'>
            {/* Animated Background Circles */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-gradient-to-r from-blue-400/10 to-purple-400/10 backdrop-blur-sm"
                        style={{
                            width: Math.random() * 200 + 100,
                            height: Math.random() * 200 + 100,
                            left: Math.random() * 100 + '%',
                            top: Math.random() * 100 + '%',
                        }}
                        animate={{
                            x: [0, Math.random() * 50 - 25],
                            y: [0, Math.random() * 50 - 25],
                            scale: [1, 1.1, 1],
                            opacity: [0.1, 0.3, 0.1],
                        }}
                        transition={{
                            duration: Math.random() * 15 + 10,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20" />

            {/* Floating Particles */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full opacity-20"
                        style={{
                            left: Math.random() * 100 + '%',
                            top: Math.random() * 100 + '%',
                        }}
                        animate={{
                            y: [0, -80, 0],
                            opacity: [0, 0.5, 0],
                        }}
                        transition={{
                            duration: Math.random() * 4 + 3,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            {/* Main Content */}
            <div className="relative z-10 pt-20 pb-16">
                {/* Header Section */}
                <motion.div 
                    className="text-center mb-16 px-4"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <motion.h1 
                        className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        My{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500">
                            Projects
                        </span>
                    </motion.h1>
                    <motion.p 
                        className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        Explore my journey through code, creativity, and innovation. Each project represents 
                        a step forward in my development as a{' '}
                        <span className="text-green-400 font-semibold">Software Engineer</span>.
                    </motion.p>
                </motion.div>

                {/* Projects Grid */}
                <div className="flex flex-wrap gap-8 justify-center items-start max-w-7xl mx-auto px-4">
                    {project.map((item, index) => (
                        <ProjectCard
                            key={index}
                            index={index}
                            image={item.image}
                            title={item.title}
                            description={item.description}
                            git={item.git}
                            technologies={item.technologies}
                        />
                    ))}
                </div>

                {/* Bottom CTA Section */}
                <motion.div 
                    className="text-center mt-20 px-4"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 1 }}
                >
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Ready to{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                            Collaborate?
                        </span>
                    </h2>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                        I'm always excited to work on new projects and tackle interesting challenges. 
                        Let's build something amazing together!
                    </p>
                    <motion.a
                        href="/contact"
                        className="inline-block px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Get In Touch
                    </motion.a>
                </motion.div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default Projects;