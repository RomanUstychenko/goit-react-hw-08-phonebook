import {Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "components/Loader/Loader";

// import Contacts from "./Pages/Contacts/Contacts"
// import NotFound from "components/Pages/PageNotFound/NotFound";
// import Contacts from "components/Pages/Contacts/Contacts";
// import Navbar from "components/Navbar/Navbar";
// import Login from "components/Pages/Login/Login";
// import Registration from "components/Pages/Registration/Registration";

const Contacts = lazy(() => import("components/Pages/Contacts/Contacts"));
const NotFound = lazy(() => import("components/Pages/PageNotFound/NotFound"));
const Navbar = lazy(() => import("components/Navbar/Navbar"));
const Login = lazy(() => import("components/Pages/Login/Login"));
const Registration = lazy(() => import("components/Pages/Registration/Registration"));

// import React from 'react'

export default function App() {



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
     <Route path="/contacts" element={<Contacts />}/>
     <Route path="/login" element={<Login />}/>
     <Route path="/register" element={<Registration />}/>
     <Route path="*" element={<NotFound />}/>
     </Routes>
     </Suspense>
    </div>
  )
};
