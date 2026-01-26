import React, { useState } from "react";

const LoginModal = ({ setLogin }) => {
  const [isSignup, setIsSignup] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill all fields");
      setSuccess("");
      return;
    }

    setError("");
    setSuccess(isSignup ? "Signup successful ✅" : "Login successful ✅");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* background */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={() => setLogin(false)}
      ></div>

      {/* login/signup box */}
      <div className="relative bg-white w-[90%] max-w-md p-6 rounded-xl shadow-xl">
        <h2 className="text-2xl font-bold text-center mb-4">
          {isSignup ? "Sign Up" : "Login"}
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="w-full border px-4 py-2 rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border px-4 py-2 rounded-lg focus:border-orange-500 "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="text-red-500 text-sm">{error}</p>}
          {success && <p className="text-green-500 text-sm">{success}</p>}

          <button className="w-full text-black py-2 rounded-lg cursor-pointer hover:bg-orange-500 hover:text-white hover:scale-105 duration-300 transition-all">
            {isSignup ? "Create Account" : "Submit"}
          </button>
        </form>

        {/* Toggle login / signup */}
        <p className="text-center mt-4 text-sm">
          {isSignup ? "Already have an account? " : "Don’t have an account? "}
          <span
            className="text-blue-500 cursor-pointer"
            onClick={() => {
              setIsSignup(!isSignup);
              setError("");
              setSuccess("");
            }}
          >
            {isSignup ? "Login" : "Sign up"}
          </span>
        </p>

        {/* Close button */}
        <button
          onClick={() => setLogin(false)}
          className="absolute top-2 right-3 text-xl cursor-pointer"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
