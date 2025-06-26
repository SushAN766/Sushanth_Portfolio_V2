
import React, { useState } from 'react';
import { Code, Cpu, Zap, Star, Circle, Triangle } from 'lucide-react';

const FloatingElements = () => {
  const [visibleSnippets, setVisibleSnippets] = useState<number[]>([]);

  const codeSnippets = [
    "const dream = () => code",
    "while(alive) { learn() }",
    "git commit -m 'magic'"
  ];

  const floatingIcons = [
    { Icon: Code, delay: '0s', position: 'top-20 left-20' },
    { Icon: Cpu, delay: '3s', position: 'top-40 right-32' },
    { Icon: Zap, delay: '6s', position: 'bottom-40 left-32' },
    { Icon: Star, delay: '2s', position: 'top-60 left-1/2' }
  ];

  const toggleSnippetVisibility = (index: number) => {
    setVisibleSnippets(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      {/* Click-to-Show Code Snippets */}
      {codeSnippets.map((snippet, index) => (
        <div
          key={snippet}
          className={`absolute floating-element transition-all duration-500 pointer-events-auto cursor-pointer group z-40 ${
            visibleSnippets.includes(index) ? 'opacity-100' : 'opacity-20 hover:opacity-40'
          }`}
          style={{
            top: `${30 + (index * 20)}%`,
            left: `${15 + (index * 25)}%`,
            animationDelay: `${index * 2}s`
          }}
          onClick={() => toggleSnippetVisibility(index)}
        >
          <div className={`glass-effect px-3 py-1 rounded text-xs font-mono transition-all duration-300 ${
            visibleSnippets.includes(index) 
              ? 'text-neon-blue shadow-2xl shadow-neon-blue/80 scale-125 bg-neon-blue/30 border border-neon-blue/50 brightness-150' 
              : 'text-neon-blue/70 shadow-lg shadow-neon-blue/20'
          }`}>
            {snippet}
          </div>
        </div>
      ))}

      {/* Gentle Floating Icons */}
      {floatingIcons.map(({ Icon, delay, position }, index) => (
        <div
          key={index}
          className={`absolute ${position} floating-element opacity-20 hover:opacity-40 transition-opacity duration-500 z-30`}
          style={{ animationDelay: delay }}
        >
          <Icon 
            size={20} 
            className="text-cyber-pink/60 drop-shadow-sm" 
          />
        </div>
      ))}

      {/* Reduced Ambient Particles */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-glow-purple/30 rounded-full z-20"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            filter: 'blur(0.5px)'
          }}
        />
      ))}

      {/* Subtle Background Glows */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-1/3 left-1/5 w-80 h-80 bg-neon-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/5 w-60 h-60 bg-cyber-pink/5 rounded-full blur-3xl" />
      </div>
    </div>
  );
};

export default FloatingElements;
