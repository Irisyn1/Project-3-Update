import react from "react";
import {createRoot} from "react-dom/client";
import {
    Home,
    Quiz,
} from "./components/index";

import{BrowserRouter, Route, Routes, NavLink} from "react-router-dom";
import "./style.css";


const App = () => {
    return <>
         <h1 className="logo">Blind Web</h1>
        
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/Quiz">Quiz</NavLink>
        </nav>
        <hr></hr>
        <h1>Welcome to Blind Web</h1>
        <h3>Have some fun here!</h3>
        
        <Routes>
            <Route path ="/" exaxt element={<Home />} />
            <Route path ="/Quiz" exaxt element={<Quiz />} />
        </Routes>
        
    </>
}

const app = document.querySelector("#app");
const root = createRoot(app);
root.render(
    <BrowserRouter>
        <App /> 
    </BrowserRouter>

)