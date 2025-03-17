import React from "react";

function Error() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mt-4">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-500 mt-2">
          The page you are looking for does not exist.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 mt-6 text-white bg-blue-500 rounded-md hover:bg-marshalls-blue transition-colors"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
}

export default Error;
