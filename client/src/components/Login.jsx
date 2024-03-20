import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  document.title = "Login";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // Ensure credentials are sent with the request
  axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/auth/login", { username, password })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));

    // navigate("/landing");
  };
  
  return (
    <div className="flex justify-center items-center h-screen bg-zinc-600">
      <div className="w-96 p-6 shadow-lg bg-white rounded-md">
        <h1 className="text-3xl font-lexend block font-semibold text-center">
          Login
        </h1>
        <hr className="mt-3" />
        <form onSubmit={handleSubmit}>
          <div className="mt-3">
            <label htmlFor="username" className="block text-base mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              placeholder="Enter Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mt-3">
            <label htmlFor="password" className="block text-base mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex justify-center items-center">
            <button
              className="text-white font-semibold mt-5  
              border-2 border-indigo-700 bg-indigo-700 rounded-md px-5 py-1 hover:bg-transparent hover:text-indigo-700"
              type="submit"
            >
              Submit
            </button>
          </div>
          <div className="flex justify-between items-center mt-3">
            <div>
              <input type="checkbox" />
              <label className="px-1">Remember Me</label>
            </div>
            <div>
              <a href="#">Forgot Password</a>
            </div>
          </div>
          <div
            className="text-white font-semibold mt-5 flex justify-center items-center 
          border-2 border-red-400 bg-red-400 rounded-md px-5 py-1 hover:bg-transparent hover:text-red-400"
          >
            <Link to={`/register`}>
              <button>New User? Register Here</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
