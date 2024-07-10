import React, { useState } from "react";

const Login = () => {
  const [signInBtn, setSignInBtn] = useState(true);
  const toggleSignInForm = () => {
    setSignInBtn(!signInBtn);
  };
  return (
    <div className="w-screen h-screen">
      <div className="absolute">
        <img
          className="w-full bg-gray-900 bg-opacity-70"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/0552717c-9d8c-47bd-9640-4f4efa2de663/537e2c5e-c750-4d4c-9f7a-e66fe93eb977/IN-en-20240701-POP_SIGNUP_TWO_WEEKS-perspective_WEB_b00eeb83-a7e8-4b5b-8ff7-86ed92c51caf_medium.jpg"
          alt="login"
        />
      </div>
      <form className="w-4/12 absolute p-11 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-85">
        <h1 className="font-bold text-3xl py-4">
          {signInBtn ? "Sign In" : "Sign Up"}
        </h1>
        {!signInBtn && (
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-900 bg-opacity-50 border-2 border-gray-800"
          />
        )}
        <input
          name="email"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-900 bg-opacity-50 border-2 border-gray-800"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-900 bg-opacity-50 border-2 border-gray-800"
        />
        <button className="p-4 my-6 bg-red-600 w-full text-lg">
          {signInBtn ? "Sign In" : "Sign Up"}
        </button>
        {/* <p className="text-center">OR</p>
        <div>
        <button className="p-4 my-6 bg-gray-600 w-full">
        Use a sign-in code
        </button> */}
        <div>
          <p className="text-gray-400">
            {signInBtn ? "New to Netflix? " : "Already have an account? "}
            <span
              className="text-white cursor-pointer"
              onClick={() => toggleSignInForm()}
            >
              {signInBtn ? "Sign up now." : "Sign in."}
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
