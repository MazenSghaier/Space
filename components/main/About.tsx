"use client";
import { motion } from 'framer-motion';
import React from 'react'
import image from '../image.jpg'
type Props ={};

export default function About({}:Props) {
  return (
    <div className='flex flex-col relative h-screen mt-40 text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <div className='flex flex-col md:w-1/2 w-full justify-center items-center'>
            <h3 className='align-middle justify-center uppercase tracking-px[20] text-white max-w-[600px] w-auto h-auto text-4xl font-bold'>
            About</h3>
            <motion.img 
                initial = {{
                    x :-200,
                    opacity:0,
                }}
                transition={{
                    duration: 1.2,
                }}
                whileInView={{x:0, opacity:1}}
                viewport={{once:true}}
                src={image.src}
                className='mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[450px]'>
                
            </motion.img>
        </div>
        <div className='space-y-10 px-0 md:px-10 md:w-1/2 w-full'>
            <h4 className='text-4xl text-white text-center font-semibold'>Here is a {""}  
            <span className='underline decoration-[#F7AB0A]/50'>
                little
            </span>  background</h4>
            <p className='text-1xl text-white font-sans'>
                I'm a full-stack developer with a passion for creating intuitive and interactive web I'm a full-stack developer with a passion for creating intuitive and interactive web 
                I'm a full-stack developer with a passion for creating intuitive and interactive web I'm a full-stack developer with a passion for creating intuitive and interactive web 
                I'm a full-stack developer with a passion for creating intuitive and interactive web I'm a full-stack developer with a passion for creating intuitive and interactive web 
               
            </p>
        </div>
    </div>
  )
}
