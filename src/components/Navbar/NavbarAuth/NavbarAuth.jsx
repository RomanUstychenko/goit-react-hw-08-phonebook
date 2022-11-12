import items from "./items"
import { NavLink } from "react-router-dom"
import scss from "./NavbarAuth.module.scss"

const getClassName = ({isActive}) => {
    return isActive ? `${scss.link} ${scss.active}` : `${scss.link}`;
}

export default function NavbarAuth() {
  return (
    <ul className={scss.navbarMenuList}>
        {items.map(({id, to, text}) => {
            return (
                <li className={scss.navbarMenuListItem} key={id}>
                    <NavLink className={getClassName} to={to} end>{text}</NavLink>
                </li>
            )})
        }
    </ul>
  )
}