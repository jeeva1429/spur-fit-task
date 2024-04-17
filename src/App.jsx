import React from 'react';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './components/navbar';
import HomePageCard from './components/homePageCard';

function App() {

  return (
    <div className='snap-y snap-mandatory overflow-y-scroll'>
      <Navbar/>
      <HomePageCard/>
      <HomePageCard/>
    </div>
  );
}

export default App;
