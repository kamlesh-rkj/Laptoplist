import React from "react";
import { Link } from "react-router-dom";

export default function Footer(){
    return (<>
    
    <section className="container-fluid shadow-lg ">
      <footer className="py-5 px-3">
        <div className="row justify-content-between">
          <div className="col-2 ">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><Link to="/laptop/Home" className="nav-link p-0 text-muted">Home</Link></li>
              <li className="nav-item mb-2"><Link to="/laptop/About" className="nav-link p-0 text-muted">About</Link></li>
              <li className="nav-item">
                <Link to = "/laptop/AddNew" className="nav-link " style={{"color":"black"}} >Add New laptop</Link>
              </li>
            </ul>
          </div>

      
      <div className="col-4 offset-1">
        <form>
          <h5>Subscribe to our website</h5>
          <p>give your Email ID.so,we will send prossiger to get login id and password</p>
          <div className="d-flex w-100 gap-2">
            <label htmlFor="footer-get-id" className="visually-hidden">Email address</label>
            <input id="footer-get-id" type="text" className="form-control" placeholder="Email address" />
            <button className="btn btn-primary" type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>

    <div className="d-flex justify-content-center py-4 my-4 border-top border-bottom">
    <p className="fw-bolder">© 2022 KAMLESH-Patel, Inc. All rights reserved.</p>
    <ul className="list-unstyled d-flex">
      <li className="ms-3"><a className="link-dark" href="#"><i className="fab fa-twitter" style={{"fontSize":"23.5px"}}></i></a></li>
      <li className="ms-3"><a className="link-dark" href="#"><i className="fab fa-instagram" style={{"fontSize":"23.5px"}}></i></a></li>
      <li className="ms-3"><a className="link-dark" href="#"><i className="fab fa-facebook" style={{"fontSize":"23.5px"}}></i></a></li>
      <li className="ms-3">
        <a className="link-dark" href="#"><i className="fab fa-youtube" style={{"fontSize":"23.5px"}}></i>
        </a>
      </li>
    </ul>

  </div>
</footer>
</section>
    </>)
}