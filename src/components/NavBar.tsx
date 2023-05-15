import { Link } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const pooja = require("../assets/pooja.jfif");
  const logo = require("../assets/Logo.svg.png");
  const bell = require("../assets/Capture.PNG");
  const profile = require("../assets/profile.png");
  const setting = require("../assets/setting.png");
  const logout = require("../assets/logout.png");

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const menuItems = [
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

  const dropDownLists = [
    {
      img: profile,
      title: "Profile",
      url: "/profile",
    },
    {
      img: setting,
      title: "Settings",
      url: "/settings",
    },
    {
      img: logout,
      title: "Logout",
      url: "/",
    },
  ];
  const localRemove = (item: any) => {
    item.title === "Logout" && localStorage.removeItem("user");
  };
  return (
    <>
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
          {menuItems.map((item, index) => (
            <li className="nav-item">
              <Link
                key={item.id}
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
            <button onClick={handleOpen}>
              <img
                src={pooja}
                alt="Profile"
                width={35}
                height={35}
                className="rounded-full hover:border-2 hover:border-white"
              />
            </button>
          </li>
        </ul>
      </div>
      {open && (
        <div className="absolute right-0 z-10 w-48 origin-top-right rounded-md bg-gray-800 text-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <ul>
            {dropDownLists.map((item, index) => (
              <li className="p-2.5 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white rounded-md">
                <Link
                  key={index}
                  to={item.url}
                  onClick={() => localRemove(item)}
                >
                  <span>
                    <img
                      src={item.img}
                      alt=""
                      width={25}
                      height={25}
                      className="bg-white inline-block rounded-full mr-2.5"
                    />
                  </span>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default NavBar;
