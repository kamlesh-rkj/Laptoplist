import  React  from "react";
import  ReactDom  from "react-dom/client";

import { BrowserRouter,Route, Routes } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Layout from "./Layout";
import AddNew from "./AddNew";
import Detailpage from "./detailpage";

const root =ReactDom.createRoot(document.getElementById('root'));





root.render(
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route  path="/laptop/Home" element={<Home/>}></Route>
                    <Route path="/laptop/About" element={<About/>}></Route>
                    <Route path="/laptop/:id" element={<AddNew/>}></Route>
                    <Route path="/laptop/Home/:id" element={<Detailpage/>}></Route>
                   
                </Route>
            </Routes>
        </BrowserRouter>       
    </>
);