// src/App.js
import React from 'react';
import './App.css';
import Header from './components/Header';

import { Link, Element, animateScroll as scroll } from 'react-scroll';

import Intro from './components/Intro';
import About from './components/About';
import Tools from './components/Tools';
import Skill from './components/Skill';
import Indicator from './components/Indicator';
import Resume from './components/Resume';
import Project from './components/Project';
import Dashbord from './components/Dashbord';
import Contact from './components/Contact';

function App() {


  return (
    <>
      <Header />
      <Indicator/>
       <br />
       <br />
       <br />
       <br />
       <br />
      <Element name="home" className="element flex flex-col items-center   w-[100%]">
        <div className='w-[90vw] bg-gray-50 '><Intro/></div>
           
        <div className='w-[90vw]'><Dashbord/></div>
        <div className='w-[90vw]'><Tools/></div>
      </Element>
      <br />
   
      <Element name="about" className="element w-[100%] flex justify-center ">
        <div className='w-[90vw] '>
           <About/>
        </div>
    
      </Element>
      <Element name="service" className="element w-[100%] flex justify-center">
      <div className='w-[90vw]'>
          <Skill/>
        </div>
      </Element>
      <Element name="resume" className="element  w-[100%] flex justify-center">
       <div className='w-[90vw]'>
        <Resume/>
       </div>
      </Element>
      <Element name="project" className="element  w-[100%] flex justify-center">
       <div className='w-[90vw]'>
        <Project/>
       </div>
      </Element>
      <Element name="contact" className="element w-[100%] flex justify-center">
      <div className='w-[90vw]'>
          <Contact/>
        </div>
      </Element>
    </>
  );
}

export default App;
