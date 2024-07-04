import React, { useEffect } from 'react'
import react from "../assets/react.svg"
import nodejs from "../assets/nodejs.svg"
import mongodb from "../assets/monogdb.svg"
import express from "../assets/express.svg"
import java from "../assets/java.svg"
import sql from "../assets/sql.svg"
import js from "../assets/js.svg"
import python from "../assets/python.svg"
import { motion, spring, useScroll } from "framer-motion";
import  "./css/Tools.css";

function Tools() {

  return (
    <>
        <div className='px-10  py-3 font-serif'>
        <div className='flex justify-start items-center'>
        <div className='w-fit p-4 overflow-hidden'>
        <motion.div 
        initial={{translateX:"100%"}}
        whileInView={{translateX:"0"}}
        transition={{type:"spring",stiffness:100,damping:10}}
        viewport={{once:true}}
        className='font-serif lg:text-4xl  text-3xl overline text-gray-600'>Tools</motion.div 
        >
        </div>
        
        </div>
          
           <div className='grid md:grid-cols-4 grid-cols-3 gap-10 mt-2'>
            {[react,nodejs,mongodb,express,js,java,python,sql].map((e,index)=>{
                      return  <motion.div 
                         initial={{opacity:0}}
                         whileInView={{opacity:1}}
                         transition={{duration:1,delay:0.1*Number(index)}}
                         viewport={{amount:0.1,once:true}}
                      className='flex justify-center animate_r '  ><img src={e} key={index} className='xl:w-24 lg:w-22 md:w-20 w-16'  alt={e} /></motion.div>
            })}
           </div>
        </div>
    </>
  )}
export default Tools;
