import React from 'react';
import { Heart, Coffee, Code2, Lightbulb, GraduationCap, Briefcase, Award, Trophy } from 'lucide-react';

const AboutSection = () => {
  const passions = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing elegant, maintainable code that tells a story"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Turning wild ideas into digital reality"
    },
    {
      icon: Heart,
      title: "User Experience",
      description: "Crafting experiences that users fall in love with"
    },
    {
      icon: Coffee,
      title: "Continuous Learning",
      description: "Always curious, always growing, always coding"
    }
  ];

  const education = [
    {
      degree: "Bachelor of Engineering in Computer Science",
      institution: "St Joseph Engineering College, Mangalore",
      period: "2022 - 2026",
      description: "Focused on software engineering, data structures, and algorithms"
    },
    {
      degree: "Pre-University Course",
      institution: "Vivekananda Pre-University College, Puttur",
      period: "2020 - 2022",
      description: "Studied science with a focus on mathematics and Biology"
    }
  ];

  const workExperience = [
    {
      position: "Virtual Internship",
      company: "ServiceNow",
      period: "Nov 2024 - Dec 2024",
      description: "Gained hands-on experience with ServiceNow's platform and tools.Collaborated with a diverse cohort to complete assignments, resolve technical challenges, and present practical solutions."
    },
    {
      position: "Machine Learning Intern",
      company: "Acmegrade",
      period: "Aug2023 - Sep2023",
      description: "Completed a virtual internship focused on core machine learning concepts and hands-on projects.Worked on projects involving data preprocessing, training ML models using Python (NumPy, Pandas, Scikit-learn)."
    }
  ];

  const certifications = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      description: "Professional level certification for designing distributed systems on AWS"
    },
    {
      title: "Privacy and Security in Online Social Media",
      issuer: "NPTEL",
      date: "May 2025",
      description: "Course on privacy and security issues in online social media platforms, covering data protection, user privacy, and security measures"
    },
    {
      title: "MERN Stack Web Development",
      issuer: "30 Days Coding",
      date: "2024",
      description: "Comprehensive course covering MongoDB, Express.js, React, and Node.js for full-stack development"
    }
  ];

  const hackathons = [
    {
      title: "Hackfest 25",
      position: "Top 15 Finalist",
      date: "April 2025",
      description: "Hackfest 25 -the 36-hour National Level hackathon held at NMAM Institute of Technology on 18-20 April, 2025."
    },
    {
      title: "INFOTHON 4.0",
      position: "Shortlisted",
      date: "February 2025",
      description: "INFOTHON 4.0, a 24-hours National Level Hackathon organized by Vidyavardhaka College of Engineering, Mysuru on 15-16 February, 2025."
    },
    {
      title: "Rangotsav Celebration",
      position: "Golden Art Award",
      date: "2017-18",
      description: "National Level Art Competition"
    }
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

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Main Content */}
          <div className="space-y-6">
            <div className="glass-effect p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-neon-blue mb-4">
                The Journey So Far...
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I'm a passionate developer who believes that code is poetry and every 
                project is a canvas for creativity. With a background in full-stack 
                development, I love bringing ideas to life through clean, efficient code 
                and stunning user experiences.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open source projects, or sketching out the next big idea 
                on a napkin. I believe in the power of technology to make the world a 
                better place, one line of code at a time.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Problem Solver', 'Creative Thinker', 'Team Player', 'Lifelong Learner'].map((trait) => (
                  <span 
                    key={trait}
                    className="px-3 py-1 bg-gradient-to-r from-cyber-pink to-glow-purple text-white text-sm rounded-full"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Passions Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {passions.map((passion, index) => (
              <div 
                key={passion.title}
                className="glass-effect p-6 rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-neon-blue/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-neon-blue to-cyber-pink rounded-lg mr-4">
                    <passion.icon size={24} className="text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white">
                    {passion.title}
                  </h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {passion.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <div className="p-3 bg-gradient-to-r from-neon-blue to-cyber-pink rounded-lg mr-4">
              <GraduationCap size={28} className="text-white" />
            </div>
            <h3 className="text-3xl font-bold text-white">Education</h3>
          </div>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="glass-effect p-6 rounded-xl">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h4 className="text-xl font-semibold text-neon-blue">{edu.degree}</h4>
                  <span className="text-cyber-pink font-medium">{edu.period}</span>
                </div>
                <p className="text-lg text-white mb-2">{edu.institution}</p>
                <p className="text-gray-400">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Work Experience Section */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <div className="p-3 bg-gradient-to-r from-neon-blue to-cyber-pink rounded-lg mr-4">
              <Briefcase size={28} className="text-white" />
            </div>
            <h3 className="text-3xl font-bold text-white">Work Experience</h3>
          </div>
          <div className="space-y-6">
            {workExperience.map((work, index) => (
              <div key={index} className="glass-effect p-6 rounded-xl">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h4 className="text-xl font-semibold text-neon-blue">{work.position}</h4>
                  <span className="text-cyber-pink font-medium">{work.period}</span>
                </div>
                <p className="text-lg text-white mb-2">{work.company}</p>
                <p className="text-gray-400">{work.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <div className="p-3 bg-gradient-to-r from-neon-blue to-cyber-pink rounded-lg mr-4">
              <Award size={28} className="text-white" />
            </div>
            <h3 className="text-3xl font-bold text-white">Certifications</h3>
          </div>
          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <div key={index} className="glass-effect p-6 rounded-xl">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h4 className="text-xl font-semibold text-neon-blue">{cert.title}</h4>
                  <span className="text-cyber-pink font-medium">{cert.date}</span>
                </div>
                <p className="text-lg text-white mb-2">{cert.issuer}</p>
                <p className="text-gray-400">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Hackathons Section */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <div className="p-3 bg-gradient-to-r from-neon-blue to-cyber-pink rounded-lg mr-4">
              <Trophy size={28} className="text-white" />
            </div>
            <h3 className="text-3xl font-bold text-white">Hackathons & Competitions</h3>
          </div>
          <div className="space-y-6">
            {hackathons.map((hackathon, index) => (
              <div key={index} className="glass-effect p-6 rounded-xl">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h4 className="text-xl font-semibold text-neon-blue">{hackathon.title}</h4>
                  <span className="text-cyber-pink font-medium">{hackathon.date}</span>
                </div>
                <p className="text-lg text-white mb-2 font-medium">{hackathon.position}</p>
                <p className="text-gray-400">{hackathon.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '30+', label: 'Projects Built' },
            { number: '3+', label: 'Years Experience' },
            { number: '∞', label: 'Cups of Coffee' },
            { number: '24/7', label: 'Learning Mode' }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-neon-blue mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
