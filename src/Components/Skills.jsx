import { motion } from "framer-motion";
import React from "react";

const skills = [
  { src: "Images/HTML.jpg", alt: "HTML" },
  { src: "Images/CSS.webp", alt: "CSS" },
  { src: "Images/js.webp", alt: "JavaScript" },
  { src: "Images/react.png", alt: "React" },
  { src: "Images/redux.jpg", alt: "Redux" },
  { src: "Images/ts.jpg", alt: "TypeScript" },
  { src: "Images/nextjs.png", alt: "Next.js" },
  { src: "Images/tailwindcss.png", alt: "TailwindCSS" },
  { src: "Images/gsap.png", alt: "GSAP" },
  { src: "Images/bootstrap.png", alt: "Bootstrap" },
  { src: "Images/mui.webp", alt: "MUI" },
];

const softSkills = [
  { name: "Self-Learner", percent: 90 },
  { name: "Quick-Learner", percent: 85 },
  { name: "Time Management", percent: 80 },
  { name: "Decision Making", percent: 75 },
  { name: "Team Collaboration", percent: 85 },
  { name: "Communication Skill", percent: 80 },
  { name: "Listening & Reading", percent: 70 },
  { name: "Problem Solving", percent: 80 },
];

const Skills = () => {
  return (
    <section id="skills" className="p-16 md:p-16">
      <h1 className="text-3xl font-bold flex justify-center gap-3 mt-10 text-purple-500 text-center mb-10">
        MY SKILLS
      </h1>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-3/5 ">
        <h2 className="text-white font-bold flex justify-center text-2xl pb-10 underline">Technical skills</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {
            skills.map((skill, index) => (
              <motion.div key={index} className="w-[30%] max-w-[220px] h-38 bg-white border rounded-xl shadow-md hover:shadow-xl overflow-hidden transform transition hover:scale-110"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.2 }} >
                <img
              src={skill.src}
              alt={skill.alt}
              className="object-cover w-full h-full rounded-xl"
            />
              </motion.div>
            ))
          }
        </div>
        </div>
        <div className="md:w-2/5">
        <h2 className="text-white font-bold flex justify-center text-2xl pb-10 underline">Soft Skills</h2>
        <div className="grid grid-cols-2 justify-center items-center gap-6">
         {softSkills.map((skill, index) => {
      const radius = 40;
      const circumference = 2 * Math.PI * radius;
      const progress = (skill.percent / 100) * circumference;

      return (
        <motion.div
          key={index}
          className="flex flex-col items-center text-white"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: false }}
        >
          <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r={radius}
              stroke="white"
              strokeWidth="10"
              fill="transparent"
              opacity="0.2"
            />
            <motion.circle
              cx="50"
              cy="50"
              r={radius}
              stroke="#a855f7" 
              strokeWidth="10"
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={circumference}
              whileInView={{ strokeDashoffset:circumference - progress }}
              transition={{ duration: 2.5,ease: "easeInOut",delay: index * 0.3  }}
              viewport={{ once: false, amount: 0.6 }}
            />
            <text
              x="50"
              y="55"
              textAnchor="middle"
              fill="white"
              fontSize="16"
              fontWeight="bold"
            >
              {skill.percent}%
            </text>
          </svg>
          <p className="mt-2 text-center text-sm">{skill.name}</p>
        </motion.div>
      );
    })}
        </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
