import React from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { Home } from './components/home/Home';
import { Features } from './components/features/Features';
import { HowItWorks } from './components/how_it_works/HowItWorks';
import { Mission } from './components/mission/Mission';
import { Questions } from './components/questions/Questions';
import { ContactUs } from './components/contact_us/ContactUs';
import { Footer } from './components/footer/Footer';

import { Privacy } from './components/privacy/Privacy';
import { Terms } from './components/terms/Terms';

import Route from './components/Route';

export const App = () => {
  return (
    <div>
      <div className='main'>
        <Header />
        <Route path='/'>
          <main className='column-layout'>
            <Home />
            <Features />
            <HowItWorks />
            <Mission />
            <Questions />
            <ContactUs />
            <Footer />
          </main>
        </Route>
        <Route path='/privacy'>
          <Privacy />
        </Route>
        <Route path='/terms'>
          <Terms />
        </Route>
      </div>
    </div>
  );
};
