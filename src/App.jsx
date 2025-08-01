import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contacts from './Components/Contacts'
import { Route, Router, Routes, useLocation } from 'react-router-dom'
import ThreadClone from './pages/ThreadClone'
import LabourLink from './pages/LabourLink'
import PetFoodEcommerce from './pages/PetFoodEcommerce'

const App = () => {
  const location = useLocation();

  const hideNavbarRoutes = [
    "/projects/thread-clone",
    "/projects/labour-link",
    "/projects/pet-food"
  ];

  const shouldNavbarRoutes = hideNavbarRoutes.includes(location.pathname);

  return (
      <div className='bg-black min-h-screen'>
        {!shouldNavbarRoutes && <Navbar/>}

        <Routes>
          <Route path="/"
          element={
            <>
            <Home/>
            <About/>
            <Skills/>
            <Projects/>
            <Contacts/>
            </>
          }
          />

          <Route path="/projects/thread-clone" element={<ThreadClone/>} />
          <Route path="/projects/labour-link" element={<LabourLink/>} />
          <Route path="/projects/pet-food" element={<PetFoodEcommerce/>} />
        </Routes>
      </div>
  )
}

export default App
