import { useState } from "react";
import { 
  Heart, Coffee, Code2, Lightbulb, GraduationCap, 
  Briefcase, Award, Trophy, 
  Monitor,
  Palette,
  Database,
  Code,
  Cloud,
  Brain
} from 'lucide-react';

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("education");

  const passions = [
    { icon: Monitor, title: "Frontend Development", description: "Building responsive, interactive, and modern web interfaces" },
    { icon: Palette, title: "UI/UX Design", description: "Designing intuitive and visually engaging user experiences" },
    { icon: Database, title: "Backend & Database", description: "Creating robust APIs and managing structured data efficiently" },
    { icon: Code, title: "Java Development", description: "Developing scalable, object-oriented applications with Java" },
    { icon: Cloud, title: "DevOps & Deployment", description: "Automating pipelines and cloud deployment for scalability" },
    { icon: Brain, title: "AI & Machine Learning", description: "Leveraging data and models to unlock smart solutions" }
  ];

  const techStack = [
    "React", "TypeScript","Next.js","AWS","Docker","Node.js", "MongoDB", "Express", "Java", "SQL",
    "Python", "AI", "HTML", "JavaScript", "Git", "GitHub","UI/UX", "Figma", "REST APIs",
    "TailwindCSS", "C"
  ];

  const education = [
    { degree: "Bachelor of Engineering in Computer Science", institution: "St Joseph Engineering College, Mangalore", period: "2022 - 2026", description: "Focused on software engineering, data structures, and algorithms" },
    { degree: "Pre-University Course", institution: "Vivekananda Pre-University College, Puttur", period: "2020 - 2022", description: "Studied science with a focus on mathematics and Biology" }
  ];

  const workExperience = [
    { position: "Virtual Internship", company: "ServiceNow", period: "Nov 2024 - Dec 2024", description: "Hands-on experience with ServiceNow's platform and tools. Collaborated to solve technical challenges and present solutions." },
    { position: "Machine Learning Intern", company: "Acmegrade", period: "Aug 2023 - Sep 2023", description: "Worked on ML projects: preprocessing, training models with Python (NumPy, Pandas, Scikit-learn)." }
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-neon-blue to-glow-purple bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-cyber-pink mx-auto rounded-full"></div>
        </div>

        {/* Journey + Passions */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="glass-effect p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-neon-blue mb-4">The Journey So Far...</h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
               I’m a Computer Science Engineering student at SJEC Mangaluru (2022–2026), specializing in Full-Stack Development and AI/ML. I’m passionate about building creative and impactful digital solutions while contributing to tech communities.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
               I’m currently focused on AI-powered applications, Graph Neural Networks (GNNs) for multimodal data analysis, and exploring Generative AI, Cloud Computing, and advanced ML techniques. I love collaborating on open-source projects and innovative startups. Explore my work at sshnth.tech or connect with me on LinkedIn.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Problem Solver', 'Creative Thinker', 'Team Player', 'Lifelong Learner'].map((trait) => (
                  <span key={trait} className="px-3 py-1 bg-gradient-to-r from-cyber-pink to-glow-purple text-white text-sm rounded-full">
                    {trait}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Passions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {passions.map((passion) => (
              <div key={passion.title} className="glass-effect p-6 rounded-xl hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-neon-blue to-cyber-pink rounded-lg mr-4">
                    <passion.icon size={24} className="text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white">{passion.title}</h4>
                </div>
                <p className="text-gray-400 text-sm">{passion.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Arsenal (Moved before Education/Experience) */}
<div className="mt-20 mb-16">
  <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
    {/* Gradient underline */}
    <span className="w-10 h-[2px] bg-gradient-to-r from-neon-blue to-cyber-pink inline-block rounded-full"></span> 
    {/* Gradient text */}
    <span className="bg-gradient-to-r from-neon-blue to-cyber-pink bg-clip-text text-transparent">
      Skills & Expertise
    </span>
  </h3>

  <div className="flex flex-wrap gap-3">
    {techStack.map((tech, index) => (
      <span
        key={index}
        className="px-4 py-2 rounded-full bg-gray-800 text-gray-200 text-sm shadow-md border border-gray-700 hover:scale-110 transition-transform"
      >
        {tech}
      </span>
    ))}
  </div>
</div>


        {/* Toggle Tabs */}
        <div className="flex items-center bg-[#1e1e2f] rounded-2xl p-1 w-fit mx-auto mb-10 border border-gray-700">
          <button onClick={() => setActiveTab("education")} className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${activeTab === "education" ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-md" : "text-gray-400 hover:text-white"}`}>
            <GraduationCap size={18} /> Education
          </button>
          <button onClick={() => setActiveTab("experience")} className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${activeTab === "experience" ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-md" : "text-gray-400 hover:text-white"}`}>
            <Briefcase size={18} /> Experience
          </button>
        </div>

        {/* Tab Content */}
        <div>
          {activeTab === "education" && (
            <div className="relative border-l-2 border-neon-blue/40 pl-6 space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-3 top-2 w-5 h-5 rounded-full bg-gradient-to-r from-neon-blue to-cyber-pink border-2 border-dark-slate"></div>
                  <div className="glass-effect p-6 rounded-xl">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h4 className="text-xl font-semibold text-neon-blue">{edu.degree}</h4>
                      <span className="text-cyber-pink font-medium">{edu.period}</span>
                    </div>
                    <p className="text-lg text-white mb-2">{edu.institution}</p>
                    <p className="text-gray-400">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "experience" && (
            <div className="relative border-l-2 border-neon-blue/40 pl-6 space-y-8">
              {workExperience.map((work, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-3 top-2 w-5 h-5 rounded-full bg-gradient-to-r from-cyber-pink to-glow-purple border-2 border-dark-slate"></div>
                  <div className="glass-effect p-6 rounded-xl">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h4 className="text-xl font-semibold text-neon-blue">{work.position}</h4>
                      <span className="text-cyber-pink font-medium">{work.period}</span>
                    </div>
                    <p className="text-lg text-white mb-2">{work.company}</p>
                    <p className="text-gray-400">{work.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
