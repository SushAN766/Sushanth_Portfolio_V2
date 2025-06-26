import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message sent! 🚀",
      description: "Thanks for reaching out! I'll get back to you soon.",
    });

    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const socialLinks = [
    { Icon: Github, url: 'https://github.com/SushAN766', label: 'GitHub' },
    { Icon: Linkedin, url: 'https://www.linkedin.com/in/sshnth/', label: 'LinkedIn' },
    { Icon: Twitter, url: 'https://x.com/ssnthbs', label: 'Twitter' },
    { Icon: Instagram, url: 'https://www.instagram.com/_sushanth_bs_/', label: 'Instagram' }
  ];

  const contactInfo = [
    { Icon: Mail, text: 'sshnthbs@gmail.com', href: 'mailto:sshnthbs@gmail.com' },
    { Icon: Phone, text: '+918197294087'},
    { Icon: MapPin, text: 'Mangalore Karnataka India'}
  ];

  return (
    <section id="contact" className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyber-pink to-glow-purple bg-clip-text text-transparent">
              Let's Create Together
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have a project in mind? Want to collaborate? Or just want to say hi? 
            I'd love to hear from you!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-pink to-glow-purple mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass-effect p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2 text-sm">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-dark-slate border border-gray-600 rounded-lg focus:border-neon-blue focus:outline-none text-white transition-colors duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2 text-sm">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-dark-slate border border-gray-600 rounded-lg focus:border-neon-blue focus:outline-none text-white transition-colors duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-300 mb-2 text-sm">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-dark-slate border border-gray-600 rounded-lg focus:border-neon-blue focus:outline-none text-white transition-colors duration-300"
                  placeholder="Let's build something amazing!"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2 text-sm">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-dark-slate border border-gray-600 rounded-lg focus:border-neon-blue focus:outline-none text-white transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyber-pink/60 to-glow-purple/60 text-white font-semibold rounded-lg hover:scale-105 transition-transform duration-300"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="glass-effect p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-dark-slate transition-colors duration-300 group"
                  >
                    <div className="p-3 bg-gradient-to-r from-neon-blue to-cyber-pink rounded-lg">
                      <info.Icon size={20} className="text-white" />
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      {info.text}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-effect p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-6">Connect Online</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 glass-effect rounded-lg hover:scale-110 transition-all duration-300 group hover:bg-gradient-to-r hover:from-neon-blue hover:to-cyber-pink"
                    aria-label={social.label}
                  >
                    <social.Icon size={24} className="text-gray-300 group-hover:text-white transition-colors duration-300" />
                  </a>
                ))}
              </div>
              <p className="text-gray-400 text-sm mt-4">
                Follow my journey and let's connect on your preferred platform!
              </p>
            </div>

            {/* Fun Quote */}
            <div className="glass-effect p-8 rounded-xl text-center">
              <div className="text-4xl mb-4">💭</div>
              <blockquote className="text-lg text-gray-300 italic">
                "The best way to predict the future is to create it."
              </blockquote>
              <p className="text-neon-blue mt-2">- Let's create something amazing together!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
