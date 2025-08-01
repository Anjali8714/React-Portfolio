import React from "react";
import { Link } from "react-router-dom";

const PetsFood = () => {
  return (
    <div className="bg-[#1a1a1a] text-white min-h-screen p-10">
      <h1 className="text-4xl font-bold mb-4 text-purple-400 flex items-center justify-center">
        Pet Food E-Commerce
      </h1>
      <div className="mb-6 text-lg space-y-4 text-justify ">
        <p>
          This project is a fully responsive and feature-rich e-commerce web
          application built for a pet food store. The platform is designed to
          provide a smooth and intuitive experience for both users and
          administrators. Customers can browse through a wide range of pet food
          products, view detailed descriptions, and make purchases with ease. To
          enhance user engagement, the platform includes personalized product
          recommendations and advanced search and filtering functionalities that
          help users quickly find relevant items.
        </p>

        <p>
          User authentication is implemented to allow secure registration and
          login, with each user having a dedicated profile section to track
          orders, view purchase history, and reorder products. A shopping cart
          system ensures users can manage their purchases conveniently and
          reduces the chances of cart abandonment through clear, step-by-step
          interactions.
        </p>

        <p>
          From an administrative perspective, the application includes a secure
          admin dashboard with role-based access. Admin users can manage the
          product inventory (add/edit/delete products), process and track
          customer orders, and monitor user activity. Additionally, the platform
          offers integrated support features where users can submit queries or
          issues through a contact interface, ensuring prompt communication and
          improved customer service.
        </p>

        <p>
          Though the backend is handled using JSON for this project, the
          application structure mirrors real-world e-commerce platforms, making
          it scalable for future backend integrations. This project demonstrates
          my ability to build complete front-end systems, manage application
          state effectively, and create user-focused, responsive designs.
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-3xl font-bold mb-4 text-purple-300">
          Technologies Used
        </h3>
        <ul>
          <li className="font-semibold">
            <span className="text-xl">Frontend</span>:- React.js
          </li>
          <li className="font-semibold">
            <span className="text-xl">Styling</span>:- Tailwind CSS
          </li>
          <li className="font-semibold">
            <span className="text-xl">Backend (Data Handling)</span>:- JSON
            (Local/Mock Backend)
          </li>
        </ul>
      </div>
      <ul className="mb-6 text-lg space-y-2">
        <li className="flex items-start gap-2">
          <span>✔️</span>Secure user authentication (registration & login)
        </li>
        <li className="flex items-start gap-2">
          <span>✔️</span>Browse and view pet food products with detailed
          descriptions
        </li>
        <li className="flex items-start gap-2">
          <span>✔️</span>Personalized recommendations for better user engagement
        </li>
        <li className="flex items-start gap-2">
          <span>✔️</span>Advanced search and filtering options for easier
          product discovery
        </li>
        <li className="flex items-start gap-2">
          <span>✔️</span>Interactive shopping cart to add, update, or remove
          items
        </li>
        <li className="flex items-start gap-2">
          <span>✔️</span>User profile section for order tracking and reordering
        </li>
        <li className="flex items-start gap-2">
          <span>✔️</span>Order management with status updates
        </li>
        <li className="flex items-start gap-2">
          <span>✔️</span>Admin dashboard with role-based access
        </li>
        <li className="flex items-start gap-2">
          <span>✔️</span>Product management: add, update, and delete products
        </li>
        <li className="flex items-start gap-2">
          <span>✔️</span>Fully responsive design for desktop, tablet, and mobile
          views
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
  );
};

export default PetsFood;
