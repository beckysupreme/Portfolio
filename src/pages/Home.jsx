import React from 'react';
import Hero from '../components/home/Hero';
import TechStack from '../components/home/TechStack';
import About from '../components/about/AboutSection';
import Services from '../components/services/ServicesSection';
import Resume from '../components/resume/ResumeSection';
import Projects from '../components/projects/ProjectsSection';
import Contact from '../components/contact/ContactSection';

const Home = () => {
  return (
    <div>
      <Hero />
      <TechStack />
      <About/>
      <Services/>
      <Resume/>
      <Projects/>
      <Contact/>
    </div>
  );
};

export default Home;