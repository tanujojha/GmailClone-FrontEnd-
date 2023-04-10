import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';


// Outlet is used to render its children


function PrivateRoute({Guser}) {

    const token = localStorage.getItem("x-auth-token") === null ? false : true;


  return (
    <>
        {token || Guser ? <Outlet /> : <Navigate to = "/"/>}
    </>
  )
}

export default PrivateRoute