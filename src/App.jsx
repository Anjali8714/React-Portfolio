import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contacts from './Components/Contacts'

const App = () => {
  return (
    <div className="bg-black">
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contacts/>
    </div>
  )
}

export default App
