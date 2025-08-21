import Navigation from '@/components/Navigation';
import FloatingElements from '@/components/FloatingElements';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';

import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="relative">
      {/* Navigation */}
      <Navigation />
      
      {/* Floating Background Elements */}
      <FloatingElements />
      
      {/* Main Content Sections */}
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
       
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="glass-effect border-t border-gray-700 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400 mb-4">
         
          </p>
          <p className="text-sm text-WHITE-500">
            © 2025 Sushanth. All rights reserved. Made with passion and pixels.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
