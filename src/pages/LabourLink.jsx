import React from 'react'
import { Link } from 'react-router-dom'

const LabourLink = () => {
  return (
    <div className="bg-[#1a1a1a] text-white min-h-screen p-10">
      <h1 className="text-4xl font-bold mb-4 text-purple-400 flex items-center justify-center">
        Labour Link
      </h1>
      <div className="mb-6 text-lg space-y-4 text-justify ">
        <p>
          Labour Link is a modern job-matching platform that connects laborers 
          with employers to simplify and speed up the hiring process. The application 
          provides a clean, user-friendly interface where users can search, filter, 
          and apply for jobs efficiently.
        </p>

        <p>
          I developed the responsive front-end using React.js, TypeScript, and Tailwind 
          CSS, ensuring a smooth experience across devices. A key contribution was building 
          an advanced filtering system that allows users to narrow job listings by location, 
          category, wages, and availability.
        </p>

        <p>
          Collaborating with the backend team (C#), I helped integrate real-time features and 
          maintain a scalable, well-structured codebase. This project highlights my ability to 
          work in cross-functional teams, implement strong UI design, and build functional, 
          data-driven features for real-world applications.
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-3xl font-bold mb-4 text-purple-300">
          Technologies Used
        </h3>
        <ul>
          <li className="font-semibold">
            <span className="text-xl">Frontend</span>:- React.js, TypeScript
          </li>
          <li className="font-semibold">
            <span className="text-xl">Styling</span>:- Tailwind CSS
          </li>
          <li className="font-semibold">
            <span className="text-xl">Data Handling & State Management</span>:- React Query
          </li>
          <li className="font-semibold">
            <span className="text-xl">Backend</span>:- C# (.NET)
          </li>
        </ul>
      </div>
      <ul className="mb-6 text-lg space-y-2">
        <li className="flex items-start gap-2">
          <span>✔️</span>Advanced job filtering system (by location, category, wages, availability)
        </li>
        <li className="flex items-start gap-2">
          <span>✔️</span> Responsive and accessible UI across all screen sizes
          descriptions
        </li>
        <li className="flex items-start gap-2">
          <span>✔️</span>Developed using modern React with TypeScript for better type safety
        </li>
        <li className="flex items-start gap-2">
          <span>✔️</span>State and server data synced using React Query
        </li>
        <li className="flex items-start gap-2">
          <span>✔️</span>Smooth collaboration with backend team for real-time feature integration
        </li>
        <li className="flex items-start gap-2">
          <span>✔️</span>User-friendly interface for both job seekers and employers
        </li>
      </ul>
      <a
        href="https://your-petfood-demo.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-400 underline"
      >
        🔗 Live Demo
      </a>
      <div>
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
      <div>
        <Link to="/" className="inline-block mt-8">
          <button className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-lg transition">
            ← Back to Projects
          </button>
        </Link>
      </div>
    </div>
  )
}

export default LabourLink
