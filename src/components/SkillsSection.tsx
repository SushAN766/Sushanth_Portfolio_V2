
import React from 'react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Magic",
      skills: [
        "React",
        "TypeScript", 
        "Next.js",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
        "JavaScript",
        "ShadCN UI",
        "Framer Motion"
        
      ]
    },
    {
      title: "Backend Wizardry ",
      skills: [
        "Node.js",
        "Python",
        "PostgreSQL",
        "MongoDB", 
        "Express.js",
        "Java",
        "GOLANG",
        "Spring Boot",
        "Convex",
        
      ]
    },
    {
      title: "DevOps & Tools",
      skills: [
        "Docker",
        "AWS",
        "Git",
        "GitHub Actions",
        "Vercel",
        "Netlify",
        "Render",
      ]
    },
    {
      title: "Creative Arts",
      skills: [
        "UI/UX Design",
        "Figma",
        "Canva",
      ]
    }
  ];

  return (
    <section id="skills" className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-glow-purple to-neon-blue bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A diverse toolkit honed through countless hours of coding, creating, and learning.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-glow-purple to-neon-blue mx-auto rounded-full mt-6"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="glass-effect p-8 rounded-xl hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill) => (
                  <div 
                    key={skill}
                    className="bg-gradient-to-r from-neon-blue/20 to-cyber-pink/20 rounded-lg p-3 text-center"
                  >
                    <span className="text-gray-300 font-medium text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Philosophy Section */}
        <div className="glass-effect p-8 rounded-xl text-center">
          <h3 className="text-2xl font-bold text-neon-blue mb-4">
            My Development Philosophy
          </h3>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="space-y-3">
              <div className="text-4xl">🚀</div>
              <h4 className="text-lg font-semibold text-white">Performance First</h4>
              <p className="text-gray-400 text-sm">
                Every millisecond matters. I optimize for speed without compromising quality.
              </p>
            </div>
            <div className="space-y-3">
              <div className="text-4xl">🎯</div>
              <h4 className="text-lg font-semibold text-white">User-Centric</h4>
              <p className="text-gray-400 text-sm">
                Beautiful code means nothing if it doesn't solve real problems for real people.
              </p>
            </div>
            <div className="space-y-3">
              <div className="text-4xl">🔄</div>
              <h4 className="text-lg font-semibold text-white">Always Learning</h4>
              <p className="text-gray-400 text-sm">
                Technology evolves rapidly, and so do I. Continuous improvement is key.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
