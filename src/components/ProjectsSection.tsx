import { ExternalLink, Code } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Splendz — Smart Expense Splitting, Simplified with AI.",
      description: "An AI-powered expense splitting app that makes managing shared expenses effortless and fun.",
      tech: ["Convex", "Next.js", "Gemini AI", "Inngest","Resend","ShadCN UI","TypeScript","Tailwind CSS","Vercel"],
      gradient: "from-neon-blue to-cyber-pink",
      demoUrl: "https://pay-split-ai-dhrp.vercel.app/",
      codeUrl: "https://github.com/SushAN766/PaySplit-AI"
    },
    {
      title: "NovaMart – A Full-Stack PERN CRUD Application",
      description: "Build a Product Store with Postgres & React, featuring product management, and advanced features like rate limiting and bot detection.",
      tech: ["React (Vite) + TailwindCSS + DaisyUI + Zustand", "Node.js + Express.js", "PostgreSQL"],
      gradient: "from-glow-purple to-neon-blue",
      demoUrl: "https://novamart-z7fh.onrender.com",
      codeUrl: "https://github.com/SushAN766/CrudStore"
    },
    {
      title: "Travaera — AI Travel Companion.",
      description: "AI-powered travel planning app that helps users discover and plan their perfect trips with personalized recommendations.",
      tech: ["React", "TypeScript", "Tailwind CSS", "ShadCN UI","Gemini API","Serpapi"],
      gradient: "from-cyber-pink to-glow-purple",
      demoUrl: "https://travaera.vercel.app",
      codeUrl: "https://github.com/SushAN766/travaera"
    },
    {
      title: "AI-Powered Vision for Underwater Waste Detection.",
      description: "An AI-powered underwater trash detection application that uses advanced computer vision to identify marine debris in images and videos.",
      tech: ["React", "TypeScript", "Tailwind", "Framer Motion","Ultralytics","OpenCV","Python FastAPI","YOLO"],
      gradient: "from-neon-blue to-electric-blue",
      demoUrl: "#",
      codeUrl: "https://github.com/SushAN766/ocean-glance"
    },
    
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-neon-blue to-cyber-pink bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A collection of projects that showcase my passion for creating 
            beautiful, functional, and innovative digital experiences.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-cyber-pink mx-auto rounded-full mt-6"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="glass-effect rounded-xl overflow-hidden hover:scale-105 transition-all duration-500 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Header */}
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              
              <div className="p-8">
                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-neon-blue transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-dark-slate text-neon-blue text-xs rounded-full border border-neon-blue/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <button 
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-neon-blue to-cyber-pink text-white rounded-lg hover:scale-105 transition-transform duration-300"
                    onClick={() => window.open(project.demoUrl, '_blank')}
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </button>
                  <button 
                    className="flex items-center gap-2 px-4 py-2 glass-effect text-neon-blue rounded-lg hover:bg-neon-blue hover:text-deep-navy transition-all duration-300"
                    onClick={() => window.open(project.codeUrl, '_blank')}
                  >
                    <Code size={16} />
                    View Code
                  </button>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        {/*<div className="text-center mt-16">
          <p className="text-lg text-gray-300 mb-6">
            Want to see more of my work?
          </p>
          <button className="px-8 py-3 glass-effect text-neon-blue font-semibold rounded-lg hover:scale-105 transition-all duration-300 hover:bg-neon-blue hover:text-deep-navy">
            View All Projects
          </button>
        </div>*/}
      </div>
    </section>
  );
};

export default ProjectsSection;
