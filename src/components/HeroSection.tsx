import React, { useEffect, useState } from 'react';
import { ArrowDown, Download } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    // This would typically link to your actual resume file
    console.log('Resume download clicked');
    window.open("/resume.pdf", "_blank");
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Subtle Glowing Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyber-pink/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-glow-purple/10 rounded-full blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
        {/* Profile Picture */}
        <div className={`mb-8 transition-all duration-800 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/30 via-cyber-pink/30 to-glow-purple/30 rounded-full blur-md"></div>
            <Avatar className="relative w-40 h-40 md:w-48 md:h-48 border-2 border-white/10 shadow-2xl shadow-neon-blue/20">
              <AvatarImage 
                src="/sushanthProfile.jpg" 
                alt="Sushanth's Profile Picture"
                className="object-cover"
              />
              <AvatarFallback className="bg-gradient-to-br from-neon-blue/80 to-cyber-pink/80 text-4xl font-bold text-white">
                S
              </AvatarFallback>
            </Avatar>
          </div>
        </div>

        {/* Name with Subtle Glow */}
        <div className={`transition-all duration-1000 delay-200 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-neon-blue via-cyber-pink to-glow-purple bg-clip-text text-transparent drop-shadow-sm">
              SUSHANTH
            </span>
          </h1>
        </div>

        {/* Subtitle with Gentle Glow */}
        <div className={`transition-all duration-1000 delay-400 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Hey, I'm Sushanth 🚀 — a <span className="text-neon-blue/90 drop-shadow-sm">Full Stack Developer</span>, 
            <span className="text-cyber-pink/90 drop-shadow-sm"> Software Engineer </span>, and a 
            <span className="text-glow-purple/90 drop-shadow-sm"> AI/ML enthusiast</span>.
          </p>
        </div>

        {/* CTA Buttons with Soft Glow */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-600 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <button 
            onClick={() => scrollToNext()}
            className="px-8 py-3 bg-gradient-to-r from-neon-blue/80 to-cyber-pink/80 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-300 shadow-lg shadow-neon-blue/20"
          >
            Explore My World
          </button>
          <button 
            onClick={downloadResume}
            className="px-8 py-3 glass-effect text-glow-purple font-semibold rounded-lg hover:scale-105 transition-all duration-300 hover:bg-glow-purple/20 hover:shadow-lg hover:shadow-glow-purple/20 flex items-center gap-2"
          >
            <Download size={20} />
            Resume
          </button>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 glass-effect text-neon-blue font-semibold rounded-lg hover:scale-105 transition-all duration-300 hover:bg-neon-blue/20 hover:shadow-lg hover:shadow-neon-blue/20"
          >
            Let's Connect
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-800 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}>
          <button 
            onClick={scrollToNext}
            className="animate-bounce p-2 rounded-full glass-effect hover:bg-neon-blue/20 hover:shadow-lg hover:shadow-neon-blue/20 transition-all duration-300"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>

      {/* Reduced Particle Count */}
      <div className="absolute inset-0 z-10">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-neon-blue/40 rounded-full transition-all duration-2000 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              filter: 'blur(0.5px)'
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
