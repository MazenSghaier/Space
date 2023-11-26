import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';

type Props ={};

export default function ContactMe( {}: Props ) {
  return (
    <div className='flex relative  flex-col text-center md:text-left md:flex-row max-w-2xl px-20 w-full justify-evenly mx-auto items-center mb-20'>
        
        <h3 className=' absolute top-24 uppercase tracking-px[20] text-white text-4xl font-bold '>Contact</h3>
        <div className='flex flex-col space-y-10 mt-40'>
            <h4 className='text-2xl text-center text-white font-semibold'>I have got just what you need. {""}  
                <span className='underline decoration-[#F7AB0A]/50'>
                    Lets Talk
                </span>
            </h4>
            <div className='space-y-10'>
            <div className='flex items-center space-x-5 justify-center'>
                <PhoneIcon className='text-[#790af7] h-7 w-7 animate-pulse'/>
                <p className='text-xl text-white'>+216 56265093 / +216 52139995</p>
            </div>
            <div className='flex items-center space-x-5 justify-center'>
                <EnvelopeIcon className='text-[#790af7] h-7 w-7 animate-pulse'/>
                <p className='text-xl text-white'>Sghaiermazen7@gmail.com</p>
            </div>
            <div className='flex items-center space-x-5 justify-center'>
                <MapPinIcon className='text-[#790af7] h-7 w-7 animate-pulse'/>
                <p className='text-xl text-white'>Cité essourrore Gafsa 2100</p>
            </div>
        </div>

        <form className='flex flex-col space-y-2 w-fit mx-auto'>
            <div className='flex gap-2 flex-col md:flex-row'>
                <input placeholder='First Name' className='outline-none bg-slate-400/10 rounded-sm border-b px-6 py-4 border-[#d1d1d1] text-gray-500 placeholder-gray-500 transition-all focus:border-[#F7AB0A]/40 focus:text-[#F7ABA0A]/40 hover:border-[#F7AB0A]/40' title='First Name' type="text"/>
                <input placeholder='Last Name' className='outline-none bg-slate-400/10 rounded-sm border-b px-6 py-4 border-[#d1d1d1] text-gray-500 placeholder-gray-500 transition-all focus:border-[#F7AB0A]/40 focus:text-[#F7ABA0A]/40 hover:border-[#F7AB0A]/40' title='Last Name' type="text"/>
            </div>
            <input placeholder='Email' className='outline-none bg-slate-400/10 rounded-sm border-b px-6 py-4 border-[#d1d1d1] text-gray-500 placeholder-gray-500 transition-all focus:border-[#F7AB0A]/40 focus:text-[#F7ABA0A]/40 hover:border-[#F7AB0A]/40' title='Email' type="text"/>
            <textarea placeholder='Message' className='outline-none bg-slate-400/10 rounded-sm border-b px-6 py-4 border-[#d1d1d1] text-gray-500 placeholder-gray-500 transition-all focus:border-[#F7AB0A]/40 focus:text-[#F7ABA0A]/40 hover:border-[#F7AB0A]/40' title='text'/>
            <button className='bg-[#F7AB0A] py-5 px-10 rounded-md text-white font-bold text-lg' type='submit' title='submit'>Submit</button>
        </form>
        </div>
    </div>
  )
}
