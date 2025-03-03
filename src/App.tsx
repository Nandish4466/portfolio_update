import React, { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Menu, 
  X, 
  Moon, 
  Sun, 
  Code, 
  Palette, 
  Rocket, 
  Database, 
  Globe, 
  Smartphone,
  ExternalLink,
  ChevronDown
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  // Toggle dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Track scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const currentScroll = window.scrollY;
      const progress = (currentScroll / totalScroll) * 100;
      setScrollProgress(progress);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-light dark:bg-dark text-dark dark:text-light">
      {/* Tech Background Animation */}
      <div className="tech-background">
        <div className="tech-grid"></div>
        <div className="floating-particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="particle"></div>
          ))}
        </div>
        <div className="circuit-lines">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="circuit-line"></div>
          ))}
        </div>
      </div>

      {/* Progress bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 z-50"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Navigation */}
      <header className="fixed w-full bg-light/80 dark:bg-dark/80 backdrop-blur-md z-40 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-display font-bold"
          >
            <span className="gradient-text">Portfolio</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <ul className="flex space-x-6">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className={`nav-link capitalize ${
                      activeSection === item ? 'text-primary-600 dark:text-primary-400' : ''
                    }`}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 mr-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-light dark:bg-dark border-t border-gray-200 dark:border-gray-800"
          >
            <ul className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className={`block w-full text-left py-2 capitalize ${
                      activeSection === item ? 'text-primary-600 dark:text-primary-400 font-medium' : ''
                    }`}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center pt-20 relative">
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="md:w-1/2 mb-10 md:mb-0"
              >
                <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
                  Hi, I'm <span className="gradient-text">Alex</span>
                </h1>
                <div className="text-xl md:text-2xl mb-6 h-16">
                  <TypeAnimation
                    sequence={[
                      'Frontend Developer',
                      1000,
                      'UI/UX Designer',
                      1000,
                      'Web Enthusiast',
                      1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    className="font-mono text-primary-600 dark:text-primary-400"
                  />
                </div>
                <p className="text-lg mb-8 text-gray-700 dark:text-gray-300 max-w-lg">
                  I build beautiful, responsive, and user-friendly web applications 
                  with modern technologies and best practices.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={() => scrollToSection('projects')}
                    className="btn btn-primary"
                  >
                    View My Work
                  </button>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="btn btn-outline"
                  >
                    Contact Me
                  </button>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="md:w-1/2 flex justify-center"
              >
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 animate-pulse"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                    alt="Profile" 
                    className="absolute inset-2 rounded-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
            >
              <button 
                onClick={() => scrollToSection('about')}
                className="flex flex-col items-center text-gray-500 hover:text-primary-500 transition-colors"
              >
                <span className="text-sm mb-2">Scroll Down</span>
                <ChevronDown size={24} className="animate-bounce-slow" />
              </button>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section bg-gray-50 dark:bg-gray-900 relative">
          <div className="container mx-auto px-4 relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="section-title gradient-text"
            >
              About Me
            </motion.h2>
            <div className="flex flex-col md:flex-row items-center gap-10">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="md:w-1/2"
              >
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80" 
                  alt="Working on laptop" 
                  className="rounded-lg shadow-lg w-full"
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="md:w-1/2"
              >
                <h3 className="text-2xl font-display font-bold mb-4">Who am I?</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  I'm a passionate web developer and designer with over 5 years of experience creating 
                  modern and user-friendly web applications. I specialize in frontend development 
                  with React, but I'm also comfortable working with backend technologies.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  My journey in web development started when I was in college, and since then, 
                  I've been constantly learning and improving my skills. I believe in writing clean, 
                  maintainable code and creating intuitive user experiences.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold mb-2">Education</h4>
                    <p className="text-gray-700 dark:text-gray-300">B.S. Computer Science</p>
                    <p className="text-gray-600 dark:text-gray-400">University of Technology</p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Experience</h4>
                    <p className="text-gray-700 dark:text-gray-300">5+ Years</p>
                    <p className="text-gray-600 dark:text-gray-400">Frontend Development</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section relative">
          <div className="container mx-auto px-4 relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="section-title gradient-text"
            >
              My Skills
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="card"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 mr-4">
                    <Code size={24} />
                  </div>
                  <h3 className="text-xl font-bold">Frontend</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-32">React</span>
                    <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-primary-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <span className="w-32">TypeScript</span>
                    <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-primary-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <span className="w-32">Tailwind CSS</span>
                    <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-primary-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <span className="w-32">Next.js</span>
                    <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-primary-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </li>
                </ul>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="card"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-secondary-100 dark:bg-secondary-900 text-secondary-600 dark:text-secondary-300 mr-4">
                    <Database size={24} />
                  </div>
                  <h3 className="text-xl font-bold">Backend</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-32">Node.js</span>
                    <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-secondary-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <span className="w-32">Express</span>
                    <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-secondary-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <span className="w-32">MongoDB</span>
                    <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-secondary-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <span className="w-32">GraphQL</span>
                    <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-secondary-500 h-2 rounded-full" style={{ width: '70%' }}></div>
                    </div>
                  </li>
                </ul>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="card"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 mr-4">
                    <Palette size={24} />
                  </div>
                  <h3 className="text-xl font-bold">Design</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-32">Figma</span>
                    <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-primary-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <span className="w-32">UI/UX</span>
                    <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-primary-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <span className="w-32">Responsive</span>
                    <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-primary-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <span className="w-32">Animation</span>
                    <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-primary-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-12 flex flex-wrap justify-center gap-3"
            >
              {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'GraphQL', 
                'Tailwind CSS', 'Framer Motion', 'Git', 'Figma', 'Responsive Design', 'REST API', 'Redux'].map((skill) => (
                <span key={skill} className="skill-badge">
                  {skill}
                </span>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section bg-gray-50 dark:bg-gray-900 relative">
          <div className="container mx-auto px-4 relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="section-title gradient-text"
            >
              My Projects
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'E-Commerce Platform',
                  description: 'A full-featured online store with cart, checkout, and payment integration.',
                  image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
                  tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
                  link: '#'
                },
                {
                  title: 'Task Management App',
                  description: 'A productivity app for managing tasks, projects, and team collaboration.',
                  image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80',
                  tech: ['React', 'TypeScript', 'Firebase', 'Tailwind'],
                  link: '#'
                },
                {
                  title: 'Weather Dashboard',
                  description: 'Real-time weather information with forecasts and interactive maps.',
                  image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
                  tech: ['React', 'OpenWeather API', 'Chart.js'],
                  link: '#'
                },
                {
                  title: 'Social Media App',
                  description: 'A platform for connecting with friends, sharing content, and messaging.',
                  image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
                  tech: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
                  link: '#'
                },
                {
                  title: 'Fitness Tracker',
                  description: 'An app to track workouts, nutrition, and fitness progress over time.',
                  image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
                  tech: ['React Native', 'Redux', 'Firebase'],
                  link: '#'
                },
                {
                  title: 'Portfolio Website',
                  description: 'A personal portfolio showcasing projects and skills (like this one!).',
                  image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
                  tech: ['React', 'Tailwind CSS', 'Framer Motion'],
                  link: '#'
                }
              ].map((project, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="project-card h-72"
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="project-card-overlay">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="mb-4 text-gray-200">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="text-xs px-2 py-1 bg-primary-500/30 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a 
                      href={project.link} 
                      className="inline-flex items-center text-primary-400 hover:text-primary-300"
                    >
                      View Project <ExternalLink size={16} className="ml-1" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section relative">
          <div className="container mx-auto px-4 relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="section-title gradient-text"
            >
              Get In Touch
            </motion.h2>
            <div className="flex flex-col md:flex-row gap-10">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="md:w-1/2"
              >
                <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Feel free to reach out to me for any questions, project inquiries, 
                  or just to say hello. I'm always open to discussing new projects and opportunities.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="mr-4 text-primary-600 dark:text-primary-400" />
                    <span>alex@example.com</span>
                  </div>
                  <div className="flex items-center">
                    <Smartphone className="mr-4 text-primary-600 dark:text-primary-400" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="mr-4 text-primary-600 dark:text-primary-400" />
                    <span>San Francisco, CA</span>
                  </div>
                </div>
                <div className="mt-8">
                  <h4 className="text-lg font-bold mb-4">Connect with me</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-500 hover:text-white transition-colors">
                      <Github size={20} />
                    </a>
                    <a href="#" className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-500 hover:text-white transition-colors">
                      <Linkedin size={20} />
                    </a>
                    <a href="#" className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-500 hover:text-white transition-colors">
                      <Twitter size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="md:w-1/2"
              >
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="Subject"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary w-full"
                  >
                    Send Message
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-display font-bold gradient-text mb-2">Portfolio</h3>
              <p className="text-gray-400">Building amazing web experiences</p>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                Terms of Service
              </a>
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                Back to Top
              </button>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;