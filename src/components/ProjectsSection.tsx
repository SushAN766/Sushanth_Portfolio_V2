import { useState, useRef, useEffect } from "react";
import { ExternalLink, Code } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Splendz",
      description:
        "Splendz is an AI-powered platform for effortless event planning and expense sharing. It helps users organize events, track budgets, assign tasks, and simplify settlements with real-time coordination and intelligent recommendations.",
      tech: [
        "Convex",
        "Next.js",
        "Gemini AI",
        "Inngest",
        "Resend",
        "ShadCN UI",
        "TypeScript",
        "Tailwind CSS",
        "Vercel",
      ],
      gradient: "from-neon-blue to-cyber-pink",
      imageUrl: "/images/splendz.png",
      demoUrl: "https://pay-split-ai-dhrp.vercel.app/",
      codeUrl: "https://github.com/SushAN766/PaySplit-AI",
    },
    {
      title: "Travaera ",
      description:
        "Build an AI-powered travel agent that helps users plan personalized trips effortlessly. Integrates Google Gemini for AI-driven travel suggestions and SerpAPI to fetch real-time flight data. Features include an interactive itinerary builder, chat assistant for travel advice, customizable settings, and a fully responsive UI",
      tech: ["React", "TypeScript", "Tailwind CSS", "ShadCN UI", "Gemini API", "Serpapi"],
      gradient: "from-cyber-pink to-glow-purple",
      imageUrl: "/images/travaera.png",
      demoUrl: "https://travaera.vercel.app",
      codeUrl: "https://github.com/SushAN766/travaera",
    },
    {
      title: "Sea Gaurdian",
      description:
        "An AI-driven application that identifies marine debris in images and videos using advanced computer vision. Users can upload single images or multiple frames to detect trash, view bounding boxes with confidence scores, and analyze detection statistics via an analytics dashboard. The system features a modern React frontend and a Python FastAPI backend for seamless, real-time processing.",
      tech: ["React", "TypeScript", "Tailwind", "Framer Motion", "Ultralytics", "OpenCV", "Python FastAPI", "YOLO"],
      gradient: "from-neon-blue to-electric-blue",
      imageUrl: "/images/ocean-glance.png",
      demoUrl: "#",
      codeUrl: "https://github.com/SushAN766/SeaTrash",
    },
    {
      title: "Employee Data Management Portal",
      description:
        "A Java-based desktop application to efficiently manage employee records. Supports CRUD operations—adding, updating, deleting, and retrieving employee information—integrated with a MySQL database. The user interface is built using Swing, offering an intuitive and organized workflow for HR departments or small businesses.",
      tech: ["Java", "MySQL", "Swing"],
      gradient: "from-cyber-pink to-glow-purple",
      imageUrl: "/images/EmpTrack.png",
      demoUrl: "#",
      codeUrl: "https://github.com/SushAN766/EmpTrack",
    },
  ];

  const [activeOverlay, setActiveOverlay] = useState(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        activeOverlay !== null &&
        cardRefs.current[activeOverlay] &&
        !cardRefs.current[activeOverlay].contains(event.target)
      ) {
        setActiveOverlay(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activeOverlay]);

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
            A collection of projects that showcase my passion for creating beautiful, functional, and innovative digital experiences.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-cyber-pink mx-auto rounded-full mt-6"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              ref={(el) => (cardRefs.current[index] = el)}
              className="relative glass-effect rounded-xl overflow-hidden group hover:scale-105 transition-transform duration-500"
            >
              {/* Project Image */}
              {project.imageUrl && (
                <div className="w-full h-64 flex items-center justify-center bg-dark-slate">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              )}

              {/* Gradient Bar */}
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-neon-blue transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-dark-slate text-neon-blue text-xs rounded-full border border-neon-blue/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Demo & Code Icons BELOW content */}
                <div className="flex gap-3 mt-3">
                  <button
                    className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-neon-blue to-cyber-pink text-white rounded-full shadow-lg hover:shadow-neon-blue hover:scale-110 transition-all duration-300"
                    onClick={() => window.open(project.demoUrl, "_blank")}
                  >
                    <ExternalLink size={20} />
                  </button>
                  <button
                    className="flex items-center justify-center w-10 h-10 glass-effect text-neon-blue rounded-full shadow-lg hover:shadow-cyber-pink hover:scale-110 transition-all duration-300"
                    onClick={() => window.open(project.codeUrl, "_blank")}
                  >
                    <Code size={20} />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
