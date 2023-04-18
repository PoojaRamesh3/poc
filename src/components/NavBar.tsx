import { Link } from "react-router-dom";

const NavBar = () => {
  const pooja = require("../assets/pooja.jfif");
  const logo = require("../assets/Logo.svg.png");
  const bell = require("../assets/Capture.PNG");

  const sideBarLists = [
    {
      id: 1,
      title: "Home",
      url: "/home",
    },
    {
      id: 2,
      title: "Teams",
      url: "/team",
    },
    {
      id: 3,
      title: "Projects",
      url: "/projects",
    },
    {
      id: 4,
      title: "Calendar",
      url: "/calendar",
    },
  ];

  return (
    <div className="flex flex-row justify-between items-center bg-gray-800 text-white font-bold">
      <ul className="flex flex-row justify-between items-center">
        <li className="nav-item">
          <Link to={"/home"}>
            <img
              src={logo}
              alt="Logo"
              className="nav-link p-4"
              width={75}
              height={75}
            />
          </Link>
        </li>
        {sideBarLists.map((item, index) => (
          <li className="nav-item">
            <Link
              key={index}
              to={item.url}
              className="nav-link p-4 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-current="page"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      <ul className="flex flex-row justify-between items-center">
        <li className="nav-item p-4">
          <button>
            <img
              src={bell}
              alt="Notofication"
              width={30}
              height={30}
              className="rounded-full bg-white"
            />
          </button>
        </li>
        <li className="nav-item p-4">
          <button>
            <img
              src={pooja}
              alt="Profile"
              width={35}
              height={35}
              className="rounded-full border-2 border-white"
            />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
