import React, { useState } from 'react';
import { Linkedin, Mail, MessageCircle, Send, Code, BookOpen, Music, Film } from 'lucide-react';

// Main App Component
export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const navLinks = [
    { id: 'home', title: 'Home' },
    { id: 'about', title: 'About' },
    { id: 'experience', title: 'Experience' },
    { id: 'projects', title: 'Projects' },
    { id: 'education', title: 'Education' },
    { id: 'hobbies', title: 'Hobbies' },
    { id: 'contact', title: 'Contact' },
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const constructGmailUrl = () => {
    const to = 'mnauvalshah@gmail.com';
    const subject = `Message from ${formData.name} (${formData.email})`;
    const body = `${formData.message}`;
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };


  return (
    <div className="bg-gray-900 text-gray-200 font-sans leading-normal tracking-wider">
      {/* --- Header & Navigation --- */}
      <header className="bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50 shadow-md shadow-gray-800/20">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-white">
              <a href="#home" onClick={() => handleNavClick('home')}>Muhammad Nauval Shah</a>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-lg transition duration-300 ${
                    activeSection === link.id
                      ? 'text-cyan-400 border-b-2 border-cyan-400'
                      : 'text-gray-300 hover:text-cyan-400'
                  }`}
                >
                  {link.title}
                </a>
              ))}
            </div>
             <div className="md:hidden">
                {/* Mobile menu button can be added here */}
            </div>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-12">
        {/* --- Hero Section --- */}
        <section id="home" className="min-h-screen flex items-center justify-center text-center">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              Welcome to My Digital Space
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8">
              I build beautiful and functional things for the web.
            </p>
            <a href="#projects" onClick={() => handleNavClick('projects')} className="bg-cyan-500 text-white font-bold py-3 px-8 rounded-full hover:bg-cyan-600 transition duration-300 text-lg">
              View My Work
            </a>
          </div>
        </section>

        {/* --- About Me Section --- */}
        <section id="about" className="py-20">
          <h2 className="text-4xl font-bold text-center text-white mb-12">About Me</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="text-lg text-gray-400 space-y-4">
              <p>
                Hello! I'm Muhammad Nauval Shah, a passionate developer with a love for creating intuitive, dynamic user experiences. I specialize in front-end development, particularly with React and modern JavaScript frameworks.
              </p>
              <p>
                My journey into web development started [Your Story Here]. Since then, I've been honing my skills in building scalable and efficient web applications. I'm a lifelong learner, always excited to explore new technologies and methodologies.
              </p>
              <p>
                When I'm not coding, I enjoy [Your Hobbies Here].
              </p>
            </div>
             <div className="w-full h-80 bg-gray-800 rounded-lg shadow-lg flex items-center justify-center">
                 <p className="text-gray-500">Image Placeholder</p>
            </div>
          </div>
        </section>

        {/* --- Experience Section --- */}
        <section id="experience" className="py-20">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Experience</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative border-l-2 border-cyan-500 pl-10 space-y-12">
              {/* Experience Item 1 */}
              <div className="relative">
                <div className="absolute -left-12 -top-1.5 w-6 h-6 bg-cyan-500 rounded-full border-4 border-gray-900"></div>
                <h3 className="text-2xl font-bold text-white">Software Engineer</h3>
                <p className="text-cyan-400 text-lg mb-1">Tech Company Inc. | 2021 - Present</p>
                <p className="text-gray-400">
                  Describe your role and responsibilities here. Mention key achievements and technologies used. For example: Developed and maintained front-end features for a large-scale e-commerce platform using React, Redux, and TypeScript.
                </p>
              </div>
              {/* Experience Item 2 */}
              <div className="relative">
                <div className="absolute -left-12 -top-1.5 w-6 h-6 bg-cyan-500 rounded-full border-4 border-gray-900"></div>
                <h3 className="text-2xl font-bold text-white">Junior Web Developer</h3>
                <p className="text-cyan-400 text-lg mb-1">Startup Solutions | 2019 - 2021</p>
                <p className="text-gray-400">
                  Describe your role and responsibilities here. For example: Built responsive landing pages and user dashboards from Figma designs, contributing to a 20% increase in user engagement.
                </p>
              </div>
               {/* Add more experience items as needed */}
            </div>
          </div>
        </section>

        {/* --- Projects Section --- */}
        <section id="projects" className="py-20">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition duration-300">
              <div className="w-full h-48 bg-gray-700 flex items-center justify-center"><p className="text-gray-500">Project Thumbnail</p></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Project Title 1</h3>
                <p className="text-gray-400 mb-4">A brief description of the project, its purpose, and the technologies used.</p>
                <a href="#" className="text-cyan-400 hover:underline">View Project</a>
              </div>
            </div>
            {/* Project Card 2 */}
            <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition duration-300">
              <div className="w-full h-48 bg-gray-700 flex items-center justify-center"><p className="text-gray-500">Project Thumbnail</p></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Project Title 2</h3>
                <p className="text-gray-400 mb-4">A brief description of the project, its purpose, and the technologies used.</p>
                <a href="#" className="text-cyan-400 hover:underline">View Project</a>
              </div>
            </div>
            {/* Project Card 3 */}
            <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition duration-300">
              <div className="w-full h-48 bg-gray-700 flex items-center justify-center"><p className="text-gray-500">Project Thumbnail</p></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Project Title 3</h3>
                <p className="text-gray-400 mb-4">A brief description of the project, its purpose, and the technologies used.</p>
                <a href="#" className="text-cyan-400 hover:underline">View Project</a>
              </div>
            </div>
             {/* Add more project cards as needed */}
          </div>
        </section>

        {/* --- Education Section --- */}
        <section id="education" className="py-20">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Education</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Education Item 1 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-white">Bachelor of Science in Computer Science</h3>
              <p className="text-cyan-400 text-lg mb-2">University of Technology | 2015 - 2019</p>
              <p className="text-gray-400">Relevant coursework: Data Structures, Algorithms, Web Development, Database Systems.</p>
            </div>
            {/* Education Item 2 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-white">High School Diploma</h3>
              <p className="text-cyan-400 text-lg mb-2">Science High School | 2012 - 2015</p>
              <p className="text-gray-400">Focused on mathematics and physics. Participated in coding clubs.</p>
            </div>
          </div>
        </section>

        {/* --- Hobbies Section --- */}
        <section id="hobbies" className="py-20">
            <h2 className="text-4xl font-bold text-center text-white mb-12">Hobbies & Interests</h2>
            <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div className="flex flex-col items-center">
                    <div className="bg-gray-800 p-5 rounded-full mb-4">
                        <Code size={40} className="text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Coding</h3>
                </div>
                 <div className="flex flex-col items-center">
                    <div className="bg-gray-800 p-5 rounded-full mb-4">
                        <BookOpen size={40} className="text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Reading</h3>
                </div>
                 <div className="flex flex-col items-center">
                    <div className="bg-gray-800 p-5 rounded-full mb-4">
                        <Music size={40} className="text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Music</h3>
                </div>
                 <div className="flex flex-col items-center">
                    <div className="bg-gray-800 p-5 rounded-full mb-4">
                        <Film size={40} className="text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Movies</h3>
                </div>
            </div>
        </section>

        {/* --- Contact Me Section --- */}
        <section id="contact" className="py-20 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
                Want to have chat or conduct something? Drop me a message below.
            </p>

            <div className="max-w-xl mx-auto text-left">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-400 mb-2">Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-500" />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-400 mb-2">Your Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-500" />
                </div>
                <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-400 mb-2">Message</label>
                    <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleInputChange} required className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-500"></textarea>
                </div>
                <div className="text-center">
                    <a
                        href={constructGmailUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-cyan-500 text-white font-bold py-3 px-8 rounded-full hover:bg-cyan-600 transition duration-300 text-lg inline-flex items-center"
                    >
                        <Send className="mr-2" size={20} /> Send Message
                    </a>
                </div>
            </div>

            <div className="mt-16">
                <p className="text-lg text-gray-400 mb-4">Or reach me directly:</p>
                <div className="flex justify-center items-center space-x-8">
                    <a href="https://wa.me/6281288099215" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-gray-400 hover:text-cyan-400 transition duration-300">
                        <MessageCircle size={32} />
                        <span className="mt-2">WhatsApp</span>
                    </a>
                    <a href="https://www.linkedin.com/in/muhammad-nauval-shah-aa342a269" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-gray-400 hover:text-cyan-400 transition duration-300">
                        <Linkedin size={32} />
                        <span className="mt-2">LinkedIn</span>
                    </a>
                </div>
            </div>
        </section>
      </main>

      {/* --- Footer --- */}
      <footer className="bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-6 py-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Muhammad Nauval Shah. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
