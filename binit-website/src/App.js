import React from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { Home } from './components/home/Home';
import { Features } from './components/features/Features';
import { HowItWorks } from './components/how_it_works/HowItWorks';

export const App = () => {
  return (
    <div className='main'>
      <Header />
      <main className='column-layout'>
        <Home />
        <Features />
        <HowItWorks />
      </main>
    </div>
  );
};
