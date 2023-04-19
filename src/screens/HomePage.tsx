import MuiButton from "../components/MuiButton";
import NavBar from "../components/NavBar";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-black text-white font-bold rounded-lg border shadow-lg p-10">
          <h1>Welcome to Home Page!</h1>
          <MuiButton />
        </div>
      </div>
    </>
  );
};

export default HomePage;
