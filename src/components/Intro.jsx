import React, { useEffect } from 'react'
import { TypeAnimation } from 'react-type-animation';
import { motion, spring, useScroll } from "framer-motion";
import photo from "../assets/photo.png"
import Aos from 'aos';
import 'aos/dist/aos.css';
function Intro() {
  useEffect(() => {
    Aos.init({
      duration: 1200, 
      easing: 'ease', 
      once: true, 
      mirror: false,
    });
  }, []);
  return (
    <>
    
   <div>
    <div className='xl:px-32 px-10 flex justify-between relative font-serif'>
      <div className='xl:my-20 md:my-10 my-8'>
        <p className='  text-gray-800 font-bold xl:text-5xl text-4xl' data-aos = "fade-in" data-aos-delay= "0">Hello! I Am </p>
        <br />
        <p className=' text-gray-800 font-bold xl:text-4xl text-3xl ' data-aos = "fade-in" data-aos-delay= "400">Harshwardhan Rawani</p>
        <div data-aos = "fade-in"
        data-aos-delay = "700">

<TypeAnimation
    
    sequence={[
    
      'I am  Frontend developer',
      1000, 
      'I am backend developer',
      1000
    ]}
    wrapper="span"
    speed={20}
    style={{ fontSize: '1.5em', display: 'inline-block', fontStyle:"italic" }}
    repeat={Infinity}
  />
        </div>

        <motion.button
          initial={{opacity:0}}
          whileInView={{opacity:1,transition:{duration:1,delay:1}}}
         
          whileTap={{scale:[0.8,1,1.2,1],transition:{duration:0.5},}}
          viewport={{amount:0.1,once:true}}
        className='bg-gray-800 text-white  p-2 font-bold mt-4 '>Download cv</motion.button>
      </div>
      <div className='md:block hidden absolute bottom-0  right-10'>
        <img src={photo} alt="" className='xl:w-[26vw] lg:w-[28vw] md:w-[32vw] ' data-aos = "fade-in" data-aos-delay="300"/>
      </div>
    </div>
   </div>
    </>
  )
}

export default Intro
