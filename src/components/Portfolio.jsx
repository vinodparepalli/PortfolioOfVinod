import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Globe, Zap, ChevronDown, Star, Sparkles } from 'lucide-react';

export default function Portfolio() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleWebsiteLink=(e)=>{
    window.location.href=e;
  }

  const projects = [
    {
      title: "AI-Powered EdTech Platform",
      description: "An AI-driven learning platform with GPT-generated content, Firebase Auth, Spring Boot backend, PostgreSQL database, and a responsive React + Tailwind UI. Features include dynamic Table of Contents, tab-based content layout, and analytics APIs.",
      tech: ["React", "Spring Boot", "PostgreSQL", "Firebase", "Gemini"],
      gradient: "from-purple-600 via-pink-600 to-blue-600",
      icon: <Sparkles className="w-6 h-6" />,
      WebSiteLink:""
    },
    {
      title: "SocialPrachar Webpage",
      description: "Developed a responsive React.js website for SocialPrachar using Bootstrap and Axios for dynamic content rendering.",
      tech: ["React.js", "Bootstrap", "Axios"],
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
      icon: <Globe className="w-6 h-6" />,
      WebSiteLink:"https://socialprachar.com/"
    },
    {
      title: "Trustly Payment App",
      description: "Designed and developed Trustly PSP Integration using Java Spring Boot and Microservices. Built a modular validation framework to implement critical field and business validation rules.Secured the application using Spring Security with HmacSHA256 and integrated security APIs",
      tech: ["RESTful APIs", " JWT Authentication", "Micro Services"],
      gradient: "from-orange-500 via-red-500 to-pink-500",
      icon: <Zap className="w-6 h-6" />,
      WebSiteLink:""
    }
  ];

  const skills = [
    { name: "Node.js / Express", level: 90, icon: <Code className="w-5 h-5" /> },
    { name: "React.js / Redux", level: 95, icon: <Code className="w-5 h-5" /> },
    { name: "MongoDB ", level: 75, icon: <Database className="w-5 h-5" /> },
    { name: "PostgreSQL", level: 85, icon: <Database className="w-5 h-5" /> },
    { name: "MySQL", level: 85, icon: <Database className="w-5 h-5" /> },
    { name: "Spring Boot", level: 80, icon: <Code className="w-5 h-5" /> },
    { name: "Firebase (Auth)", level: 85, icon: <Zap className="w-5 h-5" /> },
    { name: "REST APIs", level: 90, icon: <Globe className="w-5 h-5" /> },
    { name: "Tailwind CSS", level: 95, icon: <Star className="w-5 h-5" /> },
    { name: "Microservices", level: 75, icon: <Code className="w-5 h-5" /> },
    { name: "OpenAI/Gemini API", level: 80, icon: <Sparkles className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Floating cursor effect */}
      <div 
        className="fixed w-96 h-96 pointer-events-none z-0 opacity-30"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)',
          filter: 'blur(40px)',
          transition: 'all 0.1s ease-out'
        }}
      ></div>

      <main className="relative z-10 min-h-screen">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 relative">
          <div className={`text-center transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative mb-8">
              <h1 className="text-7xl md:text-9xl font-black bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent animate-pulse">
                Vinod
              </h1>
              <h1 className="text-5xl md:text-7xl font-light text-gray-300 -mt-4">
                Parepalli
              </h1>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-bounce"></div>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">
                Full Stack Developer
              </span> crafting the future with Node.js, React, MongoDB, Spring Boot, Firebase & AI
            </p>
            
            <div className="flex justify-center space-x-6 mb-12">
              <a href="mailto:parepallivinod@gmail.com" className="group relative p-4 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110">
                <Mail className="w-6 h-6 text-white group-hover:text-purple-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </a>
              <a href="https://github.com/vinodparepalli" className="group relative p-4 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110">
                <Github className="w-6 h-6 text-white group-hover:text-purple-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </a>
              <a href="https://linkedin.com/in/vinod-parepalli-b1802b261" className="group relative p-4 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110">
                <Linkedin className="w-6 h-6 text-white group-hover:text-purple-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </a>
            </div>
            
            <ChevronDown className="w-8 h-8 text-white/60 animate-bounce mx-auto" />
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`group relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 cursor-pointer border border-white/10 hover:border-white/20 ${
                    activeProject === index ? 'ring-2 ring-purple-500' : ''
                  }`}
                  onClick={() => setActiveProject(index)}
                  onMouseEnter={() => setActiveProject(index)}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${project.gradient} text-white mr-4`}>
                        {project.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-white/10 rounded-full text-sm text-purple-300 backdrop-blur-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <ExternalLink  onClick={()=>handleWebsiteLink(project.WebSiteLink)} className="w-5 h-5 text-white/60 group-hover:text-purple-300 mt-4 ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white mr-3">
                      {skill.icon}
                    </div>
                    <span className="text-white font-semibold">{skill.name}</span>
                  </div>
                  
                  <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: `${skill.level}%`,
                        transform: isLoaded ? 'translateX(0)' : 'translateX(-100%)'
                      }}
                    ></div>
                  </div>
                  
                  <div className="text-right mt-2">
                    <span className="text-sm text-purple-300 font-medium">{skill.level}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Let's Build Something Amazing
            </h2>
            
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Ready to turn your ideas into reality? Let's connect and create something extraordinary together.
            </p>
            
            <div className="space-y-4">
              <a
                href="mailto:parepallivinod@gmail.com"
                className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
              >
                <Mail className="w-5 h-5 mr-3" />
                parepallivinod@gmail.com
                <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              
              <div className="flex justify-center space-x-6 pt-8">
                <a
                  href="https://github.com/vinodparepalli"
                  className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
                >
                  github.com/vinodparepalli
                </a>
                <span className="text-gray-600">•</span>
                <a
                  href="https://linkedin.com/in/vinod-parepalli-b1802b261"
                  className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 text-center text-gray-500 border-t border-white/10">
          <p>© 2025 Vinod Parepalli. Crafted with passion and code.</p>
        </footer>
      </main>
    </div>
  );
}