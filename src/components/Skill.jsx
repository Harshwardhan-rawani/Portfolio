import React, { useState, useEffect } from 'react';
import Progressbar from "./Progressbar"
import 'aos/dist/aos.css';
import react from "../assets/react.svg"
import python from "../assets/python.svg"
import nodejs from "../assets/nodejs.svg"
import mongodb from "../assets/monogdb.svg"
import express from "../assets/express.svg"
import java from "../assets/java.svg"
import sql from "../assets/sql.svg"
import js from "../assets/js.svg"
import { motion, spring, useScroll } from "framer-motion";
function Skill() {

  return (
   <>
   <div className='lg:flex justify-between space-y-4 lg:space-y-0  lg:px-10 xl:px-32  p-4 lg:mt-20 '>
   <div className='w-1/2  flex justify-center items-center'>
        <div className='w-fit p-4 overflow-hidden'>
        <motion.div 
        initial={{translateX:"-100%"}}
        whileInView={{translateX:"0"}}
        transition={{type:"spring",stiffness:100,damping:10}}
        viewport={{once:true}}
        className='font-serif lg:text-4xl  text-3xl overline text-gray-600'>Skill</motion.div 
        >
        </div>
        
        </div>
     <div  className='grid  md:grid-cols-4 md:gap-10 grid-cols-2  gap-3 '>
      {[["Python",80,python],["Java",70,java],["React",68,react],["JavaScript",70,js],["Nodejs",85,nodejs],["Express",85,express],["SQL",79,sql]].map((e,index)=>{
         return  <motion.div 
                  initial={{scale:0.4}}
                  whileInView={{scale:1}}
                  transition={{duration:4,type:"spring",stiffness:"100",damping:"10",delay:0.1}}
                  viewport={{amount:0.2,once:true}}
         className = "flex justify-center"> <Progressbar value={e[1]} text={e[0]} icon={e[2]} /></motion.div>
      })}
        
       
        
     </div>
   </div>
   </>
  )
}

export default Skill
