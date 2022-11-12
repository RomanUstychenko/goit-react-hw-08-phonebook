import { useDispatch } from "react-redux"
import { logout } from "redux/auth/auth-operation"

export default function NavbarUser() {

const dispatch = useDispatch();
const onLogout =() => {
    dispatch(logout())
}

  return (
    <div>
    <button onClick={onLogout}>Logout</button></div>
  )
}
