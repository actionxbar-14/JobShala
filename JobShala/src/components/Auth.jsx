import React, { useState } from "react";
import { Link } from "react-router-dom";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const toggleAuthMode = () => setIsLogin(!isLogin);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#001a26] text-white px-4">
      <div className="w-full max-w-md bg-white/5 backdrop-blur-md p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isLogin ? "Login to JobBazar" : "Sign Up for JobBazar"}
        </h2>

        <form className="flex flex-col gap-4">
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="bg-white/10 px-4 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          )}

          <input
            type="email"
            placeholder="Email"
            className="bg-white/10 px-4 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            placeholder="Password"
            className="bg-white/10 px-4 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 transition text-white py-2 rounded-md font-medium"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          {isLogin ? "Don't have an account?" : "Already have an account?"} {" "}
          <button
            onClick={toggleAuthMode}
            className="text-blue-400 hover:underline"
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>

        {isLogin && (
          <p className="text-xs text-center mt-2 text-gray-400">
            Forgot your password? <span className="text-blue-400 cursor-pointer hover:underline">Reset</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
