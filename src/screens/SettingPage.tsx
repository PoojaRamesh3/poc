import NavBar from "../components/NavBar";

const SettingPage = () => {
  const setting = require("../assets/setting.png");

  return (
    <>
      <NavBar />
      <div className="flex items-center justify-center h-screen">
        <img src={setting} alt="" />
        <div className="bg-black text-white font-bold rounded-lg border shadow-lg p-10">
          <h1>Settings options will be displayed here!</h1>
        </div>
      </div>
    </>
  );
};

export default SettingPage;
