import React from 'react'
import { motion, spring, useScroll } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
function Contact() {
  return (
    <>
    <div className='mt-5'>
        <div className='flex lg:flex-row flex-col-reverse font-serif'>
            <div className='lg:w-1/2 flex overflow-hidden justify-center items-center shadow-md scale-110 bg-gray-50'>
            <motion.div
            initial={{translateX:"100%"}}
            whileInView={{translateX:"0"}}
            viewport={{amount:0.2,once:true}}
            className='lg:text-5xl font-bold text-3xl  text-center'>Get In Touch</motion.div>
            </div>
            <div className='lg:w-1/2 px-4'>
        <div className='w-fit p-4 overflow-hidden'>
        <motion.div 
        initial={{translateX:"100%"}}
        whileInView={{translateX:"0"}}
        transition={{type:"spring",stiffness:100,damping:10}}
        viewport={{once:true}}
        className='font-serif lg:text-4xl  text-3xl overline text-gray-600'>Contact</motion.div>


        </div>
        <div className='lg:w-1/2 mx-auto py-3 overflow-hidden'>
     <motion.form 
  
     initial={{translateX:"-100%"}}
     whileInView={{translateX:"0"}}
         viewport={{once:true}}
     action="" className='space-y-6 w-full'>
        <div>
            
            <input type="text" name='name' placeholder='Name' className='bg-transparent border-b-2 w-full'/>
        </div>
        <div>
           
            <input type="email" name="email" placeholder='Email' className='bg-transparent border-b-2 w-full' />
        </div>
        <div>
        
            <input type="text" name='message' placeholder='Message' className='bg-transparent border-b-2 w-full'/>
        </div>
        <div>
            <button className='bg-gray-800 text-white  px-2 py-1'>Submit</button>
        </div>
     </motion.form>


     <br />
     <div className='text-center text-gray-600'>-----or------</div>
     <motion.div 
     initial={{opacity:0}}
     whileInView={{opacity:1,transition:{duration:1,delay:0.2}}}
     viewport={{amount:0.2,once:true}}
     className='flex text-gray-600 justify-center'>
        <div className='m-2 text-xl'><FaGithub /></div>
        <div className='m-2 text-xl'><FaLinkedin /></div>
        <div className='m-2 text-xl'><FaFacebook /></div>
        <div className='m-2 text-xl'><FaInstagram /></div>
     </motion.div>
</div>
        </div>
            
        </div>
    </div>
    
    </>
  )
}

export default Contact
