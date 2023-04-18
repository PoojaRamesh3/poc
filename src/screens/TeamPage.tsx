import NavBar from "../components/NavBar";

const TeamPage = () => {
  return (
    <>
      <NavBar />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-black text-white font-bold rounded-lg border shadow-lg p-10">
          <h1>Team</h1>
        </div>
      </div>
    </>
  );
};

export default TeamPage;
