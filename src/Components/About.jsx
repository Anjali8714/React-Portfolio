import React from 'react'
import {motion} from 'framer-motion'

const About = () => {
  return (
    <section id='about' className="p-16">
      <div>
        <h1 className='text-white text-3xl font-bold flex justify-center gap-3 mt-10'>KNOW WHO<span className="text-purple-500"> I'M</span></h1>
        <div className='flex gap-10 p-8 mt-6 justify-between'>
            <img src="Images/photo.jpg" alt="Personal photo" width="22%" className='rounded-2xl' />
          <div className='text-white text-xl flex flex-col justify-center gap-8 pl-3 pr-3 w-[900px] h-[400px] rounded-[30px] bg-[#212121] shadow-[15px_15px_30px_rgb(25,25,25),-15px_-15px_30px_rgb(60,60,60)]'>
            <motion.p initial={{x:-100, opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:0.8,ease:'easeOut'}} viewport={{ once:false, amount:0.4 }} >I'm Anjali, a dedicated Front-End Developer with a strong foundation in building responsive and interactive web applications using React.js, TypeScript, Next.js, Tailwind CSS, and other modern web technologies.</motion.p>
            <motion.p initial={{x:100, opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:0.8,ease:'easeOut'}} viewport={{ once:false, amount:0.4 }} >Currently, I’m working as a Trainee Front-End Developer at Bridgeon Solutions, where I've been actively involved in real-world projects, collaborating with teams, and continuously sharpening my development skills.</motion.p>
            <motion.p initial={{x:-100, opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:0.8,ease:'easeOut'}} viewport={{ once:false, amount:0.4 }} >I’m passionate about crafting clean, user-focused interfaces and turning creative ideas into fully functional digital experiences. I'm a fast learner, a team player, and always eager to grow in the ever-evolving tech world.</motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

    