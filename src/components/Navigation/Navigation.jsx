import { NavLink } from "react-router-dom";
import clsx from "clsx";

import css from "./Navigation.module.css";

const getNavLinkClass = (props) => {
  return clsx(props.isActive && css.active);
};

export default function Navigation() {
  return (
    <ul className={css.list}>
      <li className={css.item}>
        <NavLink to="/" className={getNavLinkClass}>
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink to="/movies" className={getNavLinkClass}>
          MOVIES
        </NavLink>
      </li>
    </ul>
  );
}
