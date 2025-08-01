import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import BlurText from "./BlurText";

const Home = () => {
  useGSAP (()=>{
    gsap.to('#box-model',{
      x:250,
      repeat:-1,
      yoyo:true,
      rotation:360,
      duration:2,
      ease:"power1"
    })
  },[])
  useGSAP (()=>{
    gsap.to('#box-model1',{
      y:250,
      repeat:-1,
      yoyo:true,
      rotation:360,
      duration:2,
      ease:"power1"
    })
  },[])

  return (
    <section id="home">
    <div className=" w-full min-h-screen flex justify-baseline pt-40">
      <div className="flex flex-col font-bold text-4xl pt-40 pl-4 md:pl-20 gap-y-4 text-white">
      <h6>Hello,</h6>
      <p>
        I'm <span className="text-purple-500">ANJALI</span>
      </p>
      <div className=" text-white">
        <BlurText
          text="I'M A FRONT-END DEVELOPER AND UI DEVELOPER"
          delay={150}
          animateBy="words"
          direction="top"
          className="text-purple-500"
        />
        </div>

      </div>
      <div className="ml-0 md:ml-36 mt-20 md:mt-40">
        <div id="box-model" className="w-20 h-20 bg-purple-500 rounded-xl"></div>
        <div id="box-model1" className="w-20 h-20 bg-purple-500 rounded-xl"></div>
      </div>
    </div>
    </section>
  );
};

export default Home;
