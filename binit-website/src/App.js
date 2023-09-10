import React from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { Home } from './components/home/Home';
import { Features } from './components/features/Features';

export const App = () => {
  return (
    <div className='main'>
      <Header />
      <main className='column-layout'>
        <Home />
        <Features />
      </main>
    </div>
  );
};
