import NavbarMenu from "components/NavbarMenu/NavbarMenu"
import NavbarAuth from "components/NavbarAuth/NavbarAuth"
import scss from "./Navbar.module.scss"

export default function Navbar() {
  return (
    <nav className={scss.navbarList}>
        <div>
            <NavbarMenu />
            <NavbarAuth />
        </div>
    
    </nav>
  )
}