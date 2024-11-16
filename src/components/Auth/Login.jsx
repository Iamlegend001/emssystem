import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password); 

    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 shadow-xl rounded-lg border border-gray-700">
        <h2 className="text-2xl font-bold text-center text-gray-100">Login</h2>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-5 py-3 border rounded-lg outline-none border-gray-600 focus:border-emerald-500 bg-gray-700 text-gray-200 placeholder-gray-500"
            type="email"
            placeholder="Enter your email"
            aria-label="Email"
            required
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-5 py-3 border rounded-lg outline-none border-gray-600 focus:border-emerald-500 bg-gray-700 text-gray-200 placeholder-gray-500"
            type="password"
            placeholder="Enter your password"
            aria-label="Password"
            required
          />
          <button
            type="submit"
            className="w-full py-3 text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 transition duration-200 focus:outline-none focus:ring focus:ring-emerald-500"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
