'use client'
// import { useNavigate } from "react-router-dom";
import React from 'react'
const page = () => {
  // const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700">
      <div className="text-center p-8 bg-white/90 rounded-xl shadow-xl max-w-lg">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
          🚧 Page Under Construction 🚧
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          This page is currently being built. We appreciate your patience as we
          create something awesome for you!
        </p>
        {/* <button
          onClick={() => navigate(-1)}
          className="bg-teal-500 text-white py-2 px-6 rounded-full shadow-lg hover:bg-teal-600 hover:shadow-xl transition duration-300"
        >
          Go Back
        </button> */}
      </div>
    </div>
  );
};

export default page;
