// const fs= require('node:fs');
import React from "react";
import { Link } from "react-router-dom";


export default function Header(){
    return(<>
             <section className="mx-1 my-1"> 
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark main-navbar-backgrund rounded-3 border border-2 " >
        <div className="container-fluid">
          <Link to="/Home" className="navbar-brand" >R.K.PATEL</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-navbar" aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="main-navbar">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/laptop/Home" className="nav-link active" style={{"color":"black"}} aria-current="page" >Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/laptop/About" className="nav-link" style={{"color":"black"}} >About</Link>
              </li>
              
              <li className="nav-item">
                <Link to = "/laptop/AddNew" className="nav-link " style={{"color":"black"}} >Add New laptop</Link>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    </section>


    
    </>)
}