import React from "react";

const Navbar = () => {
  return (
      <nav className="fixed backdrop-blur-md bg-black w-full z-50 p-4 flex justify-between">
        <div>
          <h1 className=" text-purple-500 text-7xl font-bold font-serif pl-20">
            A<sub>T</sub>
          </h1>
        </div>
        <div className="flex gap-8 font-mono text-xl font-bold items-center pr-5 text-white">
          <a href="#home">HOME</a>
          <a href="#about">ABOUT</a>
          <a href="#skills">SKILLS</a>
          <a href="#projects">PROJECTS</a>
          <a href="#contact">CONTACT</a>
        </div>
      </nav>
  );
};

export default Navbar;
