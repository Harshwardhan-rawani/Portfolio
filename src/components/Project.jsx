import React from 'react'
import resume from '../assets/portfolio.png';
import ecom from "../assets/ecom.png"
import photogallery from "../assets/photogallery.png"
import space from "../assets/space.png"
import { motion, spring, useScroll } from "framer-motion";
function Project() {
  const project=[[resume,"Frontend","Portfolio"],[ecom,"FullStack","E-Commerce"],[space,"Frontend","Blog"],[photogallery,"Frontend","Photogallery"]]
  return (
    <>
        <div className='mt-5 font-serif lg:mb-20'>
            <div className='flex md:flex-row flex-col '>
            <div className='w-1/2  flex justify-center items-center'>
        <div className='w-fit p-4 overflow-hidden'>
        <motion.div 
        initial={{translateX:"100%"}}
        whileInView={{translateX:"0"}}
        transition={{type:"spring",stiffness:100,damping:10}}
        viewport={{once:true}}
        className='font-serif lg:text-4xl  text-3xl overline text-gray-600'>Project</motion.div 
        >
        </div>
        
        </div>
               <div className='md:w-3/4 grid lg:grid-cols-4 grid-cols-2 gap-4'>
               {project.map(((e,index)=>{
                return <motion.div 
                key={index}
                initial={{scale:0.5}}
                whileInView={{scale:1}}
                viewport={{once:true}}
                transition={{duration:0.5,type:"spring",stiffness:100,damping:10}}
                className='shadow-md h-38'>
                <img src={e[0]}  className='w-full ' alt="" />
                <div className='text-gray-500 text-center mb-3 text-sm mt-2' >{e[1]}</div>
              
                <div className='text-gray-500 text-center mb-1 font-semibold'>{e[2]}</div>

              </motion.div>
               }))}
                
                
          
               </div>
           
          
            </div>
        </div>
        
    </>
  )
}

export default Project
