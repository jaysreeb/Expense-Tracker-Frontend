import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { StyledEngineProvider } from "@mui/material/styles";
import GlobalStyles from "@mui/material/GlobalStyles";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import "./index.css";
import Home from "./pages/Dashboard/home.tsx";
import Login from "./pages/Auth/Login.tsx";
import SignUp from "./pages/Auth/SignUp.tsx"
import type { JSX } from "@emotion/react/jsx-runtime";
import ProtectedRoutes from "./components/ProtectedRoutes.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StyledEngineProvider enableCssLayer>
      <GlobalStyles styles="@layer theme, base, mui, components, utilities;" />
      <BrowserRouter>
        <Routes>        
          <Route path="/" element={<Navigate to="/login" replace />}/>
          <Route path="/login" element = {<Login/>}/>
          <Route path ="/signup" element ={< SignUp/>} /> 
          <Route element = {<ProtectedRoutes />} >
            <Route path ="/home" element ={ <Home/>} />
          </Route>
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Routes>
      </BrowserRouter>
    </StyledEngineProvider>
  </StrictMode>
);
