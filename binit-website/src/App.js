import React from 'react';
import './App.css';
// import { About } from './components/about/About';
import { Header } from './components/header/Header';
// import { Home } from './components/home/Home';
// import { Skills } from './components/skills/Skills';
// import { Services } from './components/services/Services';
// import { Qualification } from './components/qualification/Qualification';
// import { Testimonials } from './components/testimotions/Testimonial';
// import { Contact } from './components/contact/Contact';
// import { Footer } from './components/footer/Footer';
// import { ScrollUp } from './components/scrollup/ScrollUp';
// import { Work } from './components/work/Work';

export const App = () => {
  return (
    <div className='main'>
      <Header />
      {/* <main className='main'>
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Work />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollUp /> */}
    </div>
  );
};
