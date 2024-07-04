import React from 'react'
import photo from "../assets/resume.png"
import { motion, spring, useScroll } from "framer-motion";
function Resume() {
  return (
   <>
   <div className='mt-5'>
    <div className='flex md:flex-row flex-col-reverse'>
        <div className='md:w-1/2 w-full  drop-shadow-lg  p-5 flex'>
        <motion.img 

        
        src={photo} className='w-1/2 -rotate-3 ' alt="" />
        <motion.img
    
        src={photo} className='w-1/2 rotate-3' alt="" />
        <motion.img 
         initial={{scale:1,translateX:"-150%"}}
         whileInView={{scale:[1.2,1.1,1.2,1.1],translateX:"-150%"}}
         transition={{duration:1}}
        src={photo} className='w-1/2 shadow-lg' alt="" />
        </div>
        <div className='w-1/2  flex justify-center items-center'>
        <div className='w-fit p-4 overflow-hidden'>
        <motion.div 
        initial={{translateX:"100%"}}
        whileInView={{translateX:"0"}}
        transition={{type:"spring",stiffness:100,damping:10}}
        viewport={{once:true}}
        className='font-serif lg:text-4xl  text-3xl overline text-gray-600'>Resume</motion.div 
        >
        </div>
        
        </div>
    </div>
   </div>
   </>
  )
}

export default Resume
