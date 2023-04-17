import SocialMediaButton from "./SocialMediaButton";
import Link from "./Link";
import CopyRight from "./CopyRight";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();

  const [loginInfo, setLoginInfo] = useState([]);
  const [userData, setData] = useState("");

  useEffect(() => {
    fetch("https://64393d6f4660f26eb1adef4f.mockapi.io/users")
      .then((res) => res.json())
      .then((result) => {
        setLoginInfo(result);
      });
  }, []);

  const data = loginInfo.filter((res) => {
    return JSON.stringify(res)
      .toLocaleLowerCase()
      .match(userData.toLocaleLowerCase());
  });

  if (data != null && userData === "pooja.ramesh331@gmail.com") {
    navigate("/home");
  }

  const submitHandler = (event: any) => {
    event.preventDefault();
  };

  return (
    <div className="p-12 bg-white mx-auto rounded-3xl w-96 ">
      <div className="mb-7">
        <h3 className="font-semibold text-2xl text-gray-800">Sign In</h3>
        <p className="text-gray-400">
          Don't have an account? <Link text={"Sign Up"} />
        </p>
      </div>
      <form className="space-y-6" onSubmit={submitHandler}>
        <input
          className="w-full text-sm  px-4 py-3 bg-gray-200 focus:bg-gray-100 border  border-gray-200 rounded-lg focus:outline-none focus:border-purple-400"
          type=""
          placeholder="Email"
          onChange={(e) => setData(e.target.value)}
        />
        <input
          className="w-full text-sm  px-4 py-3 bg-gray-200 focus:bg-gray-100 border  border-gray-200 rounded-lg focus:outline-none focus:border-purple-400"
          type=""
          placeholder="Password"
          onChange={(e) => setData(e.target.value)}
        />
        <div className="flex items-center justify-between">
          <div className="text-sm ml-auto">
            <Link text={"Forgot your password?"} />
          </div>
        </div>
        <button
          type="submit"
          className="w-full flex justify-center bg-purple-800  hover:bg-black text-gray-100 p-3  rounded-lg tracking-wide font-semibold  cursor-pointer transition ease-in duration-500"
        >
          Sign in
        </button>
        <div className="flex items-center justify-center space-x-2 my-5">
          <span className="h-px w-16 bg-gray-200"></span>
          <span className="text-gray-500 font-normal">or</span>
          <span className="h-px w-16 bg-gray-200"></span>
        </div>
        <div className="flex justify-center gap-5 w-full ">
          <SocialMediaButton label={"Google"} />
          <SocialMediaButton label={"Facebook"} />
        </div>
      </form>
      <CopyRight />
    </div>
  );
};

export default Form;
