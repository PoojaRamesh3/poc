import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FormInput = (props: any) => {
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

  return (
    <input
      className="w-full text-sm  px-4 py-3 bg-gray-200 focus:bg-gray-100 border  border-gray-200 rounded-lg focus:outline-none focus:border-purple-400"
      type=""
      placeholder={props.placeholder}
      onChange={(e) => setData(e.target.value)}
    />
  );
};

export default FormInput;
