import NavBar from "../components/NavBar";

const CalendarPage = () => {
  return (
    <>
      <NavBar />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-black text-white font-bold rounded-lg border shadow-lg p-10">
          <h1>Calendar will be displayed here!</h1>
        </div>
      </div>
    </>
  );
};

export default CalendarPage;
