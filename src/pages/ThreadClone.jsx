import React from 'react'
import { Link } from 'react-router-dom' 

const ThreadClone = () => {
  return (
    <div className="bg-[#1a1a1a] text-white min-h-screen p-10">
      <h1 className="text-4xl font-bold mb-4 text-purple-400 flex items-center justify-center">
        Threads Clone
      </h1>
      <div className="mb-6 text-lg space-y-4 text-justify ">
        <p>
          Threads Clone is a fully functional social media web application inspired by Meta’s 
          Threads. Built with modern technologies like React.js, Next.js, and TypeScript, the 
          platform replicates essential social features while leveraging the performance 
          advantages of server-side rendering.
        </p>

        <p>
          The project allows users to create accounts, post and delete content, follow or 
          unfollow other users, engage through comments, and update their profiles—all in 
          a smooth, interactive UI. I focused on creating reusable components and optimizing 
          them for performance and scalability.
        </p>

        <p>
          State management is handled using Redux, enabling a centralized and consistent state 
          flow throughout the app. With the power of Next.js, server-side rendering ensures faster 
          page loads, improved SEO, and a better overall experience.
        </p>

        <p>This project showcases my skills in building scalable social applications with real-world 
          features, managing complex state logic, and writing clean, maintainable front-end code using 
          best practices.</p>
      </div>

      <div className="mb-6">
        <h3 className="text-3xl font-bold mb-4 text-purple-300">
          Technologies Used
        </h3>
        <ul>
          <li className="font-semibold">
            <span className="text-xl">Frontend</span>:- React.js, Next.js, TypeScript
          </li>
          <li className="font-semibold">
            <span className="text-xl">Styling</span>:- Tailwind CSS
          </li>
          <li className="font-semibold">
            <span className="text-xl">Data Handling & State Management</span>:- Redux
          </li>
          <li className="font-semibold">
            <span className="text-xl">Backend</span>:- C# (.NET)
          </li>
        </ul>
      </div>
      <ul className="mb-6 text-lg space-y-2">
        <li className="flex items-start gap-2">
          <span>✔️</span>User authentication and account creation
        </li>
        <li className="flex items-start gap-2">
          <span>✔️</span>Post creation and deletion
        </li>
        <li className="flex items-start gap-2">
          <span>✔️</span>Follow/unfollow functionality
        </li>
        <li className="flex items-start gap-2">
          <span>✔️</span>Profile editing and updates
        </li>
        <li className="flex items-start gap-2">
          <span>✔️</span>Reusable and optimized components for performance
        </li>
        <li className="flex items-start gap-2">
          <span>✔️</span>Centralized state management using Redux
        </li>
        <li className="flex items-start gap-2">
          <span>✔️</span>Server-side rendering for faster load times and SEO benefits
        </li>
        <li className="flex items-start gap-2">
          <span>✔️</span>Centralized state management using Redux
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

export default ThreadClone
