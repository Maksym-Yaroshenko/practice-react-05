import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

export default function Navigation() {
  const getLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" className={getLinkClass}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" className={getLinkClass}>
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={getLinkClass}>
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
