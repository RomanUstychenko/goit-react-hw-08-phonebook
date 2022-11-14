import { useDispatch, useSelector } from "react-redux"
import { logout } from "redux/auth/auth-operation"
import scss from "./NavbarUser.module.scss"
import { getUser } from "redux/auth/auth-selector";

export default function NavbarUser() {
const user = useSelector(getUser)
const dispatch = useDispatch();
const onLogout =() => {
    dispatch(logout())
}
const chekName = Boolean(user)
  return (
    <div className={scss.navbarUser}>
      {chekName ? <p>Welcome, {user.name}</p> : <p>Welcome, User</p> }
    <button onClick={onLogout}>Logout</button></div>
  )
}
