import {Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "components/Loader/Loader";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { current } from "redux/auth/auth-operation";

const Contacts = lazy(() => import("Pages/Contacts/Contacts"));
const NotFound = lazy(() => import("Pages/PageNotFound/NotFound"));
const Navbar = lazy(() => import("components/Navbar/Navbar"));
const Login = lazy(() => import("Pages/Login/Login"));
const Registration = lazy(() => import("Pages/Registration/Registration"));


export default function App() {

const dispatch = useDispatch();

useEffect(() => {
  dispatch(current())
}, [dispatch])

  return (
    <div
      style={{
        height: '100vh',
        // display: 'flex',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Suspense fallback={<Loader/>}>
        <Navbar />
      <Routes>
      <Route path="/" element={<Contacts />}/>
     <Route path="/contacts" element={<Contacts />}/>
     <Route path="/login" element={<Login />}/>
     <Route path="/register" element={<Registration />}/>
     <Route path="*" element={<NotFound />}/>
     </Routes>
     </Suspense>
    </div>
  )
};
