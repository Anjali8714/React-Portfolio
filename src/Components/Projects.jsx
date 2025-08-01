import React from 'react'
import { Link } from "react-router-dom";
import { IoIosArrowRoundUp } from "react-icons/io";


const Projects = () => {
  return (
    <section id='projects' className='relative py-32 px-6 md:px-24 min-h-screen '>
      <div className="sticky top-8 z-30 ">
      <h1 className='text-center font-bold text-white text-5xl md:text-6xl p-10 rounded-xl bg-black bg-opacity-70 shadow-md'>EXPLORE MY <span className='text-purple-500'>PROJECTS</span></h1>
      </div>

      <div className='flex flex-col md:flex-row gap-10 justify-center'>
        <div className='md:w-1/2 text-white'>
        <div className='sticky top-40 flex flex-col gap-10 items-center'>
          <h2 className=' font-semibold text-5xl underline'>Projects</h2>
          <div className='flex flex-col gap-6 text-center text-3xl'>
          <p>Thread Clone App</p>
          <p>Labour Link</p>
          <p>Pets Food</p>
          </div>
        </div>
        </div>

        <div className='md:w-1/2 flex flex-col gap-6'>
        <Link to='/projects/thread-clone'>
        <img src="/Images/tca.png" alt="Threads-clone-app" className='rounded-xl w-full h-[300px] object-cover shadow-lg ' />
        <div className="flex text-white">
          <h6>Click the image</h6>
          <IoIosArrowRoundUp className='mt-1 size-6' />
        </div>       
        </Link>

          <Link to='/projects/labour-link'>
          <img src="/Images/ll.png" alt="Labour-link" className='rounded-xl  w-full h-[300px] object-cover shadow-lg ' />
          <div className="flex text-white">
          <h6>Click the image</h6>
          <IoIosArrowRoundUp className='mt-1 size-6' />
        </div>
          </Link>
          
          <Link to='/projects/pet-food'>
          <img src="/Images/pfe.png" alt="Pets-food-Ecommerce" className='rounded-xl  w-full h-[300px] object-cover shadow-lg ' />
          <div className="flex text-white">
          <h6>Click the image</h6>
          <IoIosArrowRoundUp className='mt-1 size-6' />
        </div>
          </Link>
          
        </div>
      </div>

    </section>
  )
}

export default Projects
