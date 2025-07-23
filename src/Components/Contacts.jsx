import React from 'react';
import { MdAddIcCall } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";


const Contacts = () => {
  return (
    <section id='contact' className='flex items-center flex-col justify-center p-6 md:p-6'>
      <h1 className='text-white text-3xl flex justify-center font-bold p-8'>CONTACT ME</h1>
      <div className='w-[60%] h-100 bg-white/70 rounded-lg flex justify-center items-center flex-col gap-10 text-2xl font-bold'>
      <div className='flex flex-row gap-10'>
      <div>
         <h1><MdAddIcCall />+91 8714369714</h1>
      </div>
      <div>
         <h1> <MdOutlineMail /> anjaliofficial8714@gmail.com</h1>
         <h1>anjalit9714@gmail.com</h1>
      </div>
      </div>
         <h1>https://www.linkedin.com/in/anjali-t-b92748311/</h1>
      </div>
    </section>
  );
};

export default Contacts;

