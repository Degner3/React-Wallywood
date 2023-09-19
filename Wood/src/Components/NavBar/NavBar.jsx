import style from "./NavBar.module.scss"

import { NavLink } from 'react-router-dom'


export const NavBar = () => {

  const navArray = [
    { Link: "/", page: "Home" },
    { Link: "/posters", page: "Plakater" },
    { Link: "/about", page: "Om os" },
    { Link: "/contact", page: "Kontakt" },
    { Link: "/login", page: "Login" },
  ];


    return (
      <nav className={style.nav}>
        <ul>
          {navArray.map((item, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={item.Link}
                  // className={style.links}
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "#D97852" : "#524641",
                    };
                  }}
                >
                  {item.page}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    );
}