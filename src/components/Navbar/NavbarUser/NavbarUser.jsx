import { useDispatch, useSelector } from "react-redux"
import { logout } from "redux/auth/auth-operation"
import scss from "./NavbarUser.module.scss"
import { getUser } from "redux/auth/auth-selector";
import { Button } from "components/Button/Button";

export default function NavbarUser() {
const user = useSelector(getUser)
const dispatch = useDispatch();
const onLogout =() => {
    dispatch(logout())
}
const chekName = Boolean(user)
  return (
    <div className={scss.navbarUser}>
      {chekName ? <p className={scss.navbarUserName}>Welcome, <b>{user.name}</b></p> : <p>Welcome, <b>User</b></p> }
      <span className={scss.navbarUserBtn}><Button 
      text="Logout"
      type="button"
      onClick={onLogout}
      /></span>
    </div>
  )
}
