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


console.log(user)
// const chekName = {
// if (useSelector(getUser)) 

// {return Hi, ${name}}
// }


  return (
    <div className={scss.navbarMenuList}>
      {/* <p>Hello {!user.name}</p> */}
    <button onClick={onLogout}>Logout</button></div>
  )
}
