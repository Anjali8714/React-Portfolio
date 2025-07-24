import React from 'react';
import { MdAddIcCall } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";


const Contacts = () => {
  return (
    <section id='contact' className='flex items-center flex-col justify-center px-4 py-10'>
      <h1 className='text-white text-3xl font-bold p-8'>CONTACT ME</h1>
      <div className='w-full max-w-4xl h-100 bg-white/70 rounded-lg p-8 flex items-center flex-col gap-10 text-lg md:text-2xl font-bold'>
      <div className='flex flex-col md:flex-row justify-between w-full gap-8'>
      <div className='flex items-center gap-3'><MdAddIcCall className='mt-4'/><span>+91 8714369714</span></div >
      <div className='flex items-center gap-3'>
      <MdOutlineMail /> <span>anjaliofficial8714@gmail.com</span> 
      </div>
      <div className='flex items-center gap-3'>
      <MdOutlineMail /> <span> anjalit9714@gmail.com</span>
      </div>
      </div>
      <div>
         <FaLinkedin /><a href='https://www.linkedin.com/in/anjali-t-b92748311/' className='hover:underline'>https://www.linkedin.com/in/anjali-t-b92748311/</a>
      </div>
      </div>
    </section>
  );
};

export default Contacts;

