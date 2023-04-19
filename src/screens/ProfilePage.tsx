import NavBar from "../components/NavBar";

const ProfilePage = () => {
  const profile = require("../assets/profile.png");

  return (
    <>
      <NavBar />
      <div className="flex items-center justify-center h-screen">
        <img src={profile} />
        <div className="bg-black text-white font-bold rounded-lg border shadow-lg p-10">
          <h1>Profile setting will be displayed here!</h1>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
