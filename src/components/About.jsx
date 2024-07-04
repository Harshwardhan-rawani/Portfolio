
import React, { useRef,useEffect } from 'react';
import Aos from 'aos';
import photo from "../assets/photo.png"
import { motion, spring, useScroll } from "framer-motion";
import linkedin from "../assets/linkedin.svg"
import facebook from "../assets/facebook.svg"
import instagram from "../assets/instagram.svg"
import github from "../assets/github.svg"
import { Link } from 'react-router-dom';
function About() {
 const image = [[linkedin,"https://www.linkedin.com/in/harshwardhan-rawani-a0697b24a/"],[instagram,"12"],[github,"https://github.com/Harshwardhan-rawani?tab=repositories"]]
  return (
    <>
    <div className='font-serif '>
 <div className='xl:flex justify-between'>
  <div className='xl:w-1/2'>
  <div className='w-1/2  flex justify-center items-center'>
        <div className='w-fit p-4 overflow-hidden'>
        <motion.div 
        initial={{translateX:"100%"}}
        whileInView={{translateX:"0"}}
        transition={{type:"spring",stiffness:100,damping:10}}
        viewport={{once:true}}
        className='font-serif lg:text-4xl  text-3xl overline text-gray-600'>About Me</motion.div>
        </div>
        
        </div>
        <div className=' w-fit overflow-hidden'>
  <motion.div className='lg:pb-10 pb-5 mt-3' 
    initial={{translateX:"70%"}}
    whileInView={{translateX:"0%"}}
    viewport={{amount:0.1,once:true}}
    transition={{type:"spring" , stiffness:"100",damping:"10",duration:2}}
  >
  <div className='flex justify-center'><img src={photo} alt="" className='w-3/4  px-2 '/></div>
  <div className='flex justify-center'>
  <div className='border-2 w-3/4 border-t-0 p-2 shadow-md '>
  <div className='text-center italic text-gray-600 '>
     Harshwardhan Rawani
  </div>
  
      </div>
  </div>
  </motion.div>
  </div>
  </div>

 <div className='lg:border-l-2 flex flex-col items-center justify-center xl:w-3/4 w-full lg:shadow-lg overflow-hidden'>

<motion.div initial={{translateX:"-80%"}}
whileInView={{translateX:"0"}}
viewport={{once:true,amount:0.1}}
transition={{type:"spring",stiffness:100,damping:10,duration:1}}

>
<div className='text-2xl border-b-2 text-gray-600 w-fit  text-center'>Profile</div>
<br />
<table class="table text-gray-600">

  <tbody>
    <tr>
   
      <td>Age :</td>
      <td>21</td>
 
    </tr>
    <tr>
  
      <td className='w-32 lg:w-56'>Occupation : </td>
      <td>Btech 3rd year</td>

    </tr>
    <tr>
    
      <td >College :</td>
      <td>Aditya College of Engineering and Technology</td>
    </tr>
    <tr>
    
    <td >DOB : </td>
    <td>20/02/2003</td>
  </tr>
  <tr>
    
    <td >Work : </td>
    <td>Web Developer</td>
  </tr>
  </tbody>
</table>
  
    </motion.div>
    <motion.button
          initial={{opacity:0}}
          whileInView={{opacity:1,transition:{duration:1}}}
         
          whileTap={{scale:[0.8,1,1.2,1],transition:{duration:0.5},}}
          viewport={{amount:0.1,once:true}}
        className='bg-gray-800 text-white  p-2 font-bold mt-4 '>Contact me</motion.button>
        <motion.div className='flex mt-5 '
           initial={{opacity:0}}
           whileInView={{opacity:1,transition:{duration:1,delay:0.2}}}
           viewport={{amount:0.2,once:true}}
        >--------
   {image.map((e,index)=>{
    return <Link to={e[1]}><img src={e[0]} alt="" className='w-5 mx-2' /></Link>
   })}--------
        </motion.div>
 </div>
 </div>

    </div>
    </>
  )
}

export default About
