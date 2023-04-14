import React from "react";

const SignInButton = () => {
  return (
    <>
      <button
        type="submit"
        className="w-full flex justify-center bg-purple-800  hover:bg-purple-700 text-gray-100 p-3  rounded-lg tracking-wide font-semibold  cursor-pointer transition ease-in duration-500"
      >
        Sign in
      </button>
    </>
  );
};

export default SignInButton;
