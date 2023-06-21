import React from 'react'
import {Link} from 'react-router-dom'
export default function Navbar() {
  return (
  
         <header className="header_section" style={{fontSize:"1.2rem"}}>
      <div className="container p-3">
        <nav className="navbar navbar-expand-lg custom_nav-container ">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="d-flex mx-auto flex-column flex-lg-row align-items-center">
          <Link className="navbar-brand fw-bold" style={{fontSize:"1.3rem"}} to="/">Flower Aura</Link>
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link  className="nav-link d-flex justify-content-center" to="/">
                    
                    <span class="material-symbols-outlined">home</span>
                    <span className='ms-3'>Home</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/product">
                    Products
                  </Link>
                </li>
               
                <li className="nav-item">
                  <Link className="nav-link " to="/contact">
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>

            <div className="quote_btn-container d-flex justify-content-center">
            
              <form className="form-inline">
                <button className="btn my-2 my-sm-0 nav_search-btn" type="submit"></button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </header>
    
  )
}
