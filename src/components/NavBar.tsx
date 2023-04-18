import { Link } from "react-router-dom";

const NavBar = () => {
  const pooja = require("../assets/pooja.jfif");

  const sideBarLists = [
    {
      id: 1,
      title: "Home",
      url: "/home",
    },
    {
      id: 2,
      title: "Teams",
      url: "/teams",
    },
    {
      id: 4,
      title: "Projects",
      url: "/projects",
    },
    {
      id: 5,
      title: "Calendar",
      url: "/calendar",
    },
  ];

  return (
    <div className="flex flex-row">
      <ul className="">
        <li className="nav-item">
          {sideBarLists.map((item, index) => (
            <Link
              key={index}
              to={item.url}
              className="nav-link"
              aria-current="page"
            >
              {item.title}
            </Link>
          ))}
        </li>
      </ul>
      <ul>
        <li>{pooja}</li>
      </ul>
    </div>
  );
};

export default NavBar;
