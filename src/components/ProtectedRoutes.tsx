import { Outlet, Navigate } from "react-router";


export default function ProtectedRoutes() {
    const token = localStorage.getItem('token');
    // if(!token)
    if(!token){
        return <Navigate to = "/login" replace/>
    }

  return (
    <div>
        <Outlet/>      
    </div>
  )
}
