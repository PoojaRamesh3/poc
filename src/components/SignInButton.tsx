import React from "react";

const SignInButton = (props: any) => {
  return (
    <>
      <button
        type="submit"
        className="w-full flex justify-center bg-purple-800  hover:bg-black text-gray-100 p-3  rounded-lg tracking-wide font-semibold  cursor-pointer transition ease-in duration-500"
      >
        {props.label}
      </button>
    </>
  );
};

export default SignInButton;
