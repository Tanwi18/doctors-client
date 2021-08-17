import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item  ms-5">
        <Link className="nav-link mr-5" to="/">Home</Link>
        </li>
        <li class="nav-item  ms-5">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item  ms-5">
        <Link className="nav-link" to="/dashboard">Dashboard</Link>
        </li>
        <li class="nav-item  ms-5">
        <Link className="nav-link text-white" to="/dashboard">Admin</Link>
        </li>
        <li className="nav-item ms-5">
                        <Link className="nav-link text-white" to="#">Blogs</Link>
                    </li>
                    <li className="nav-item ms-5">
                        <a className="nav-link  text-white" href="#contact">Contact Us</a>
                    </li>
      
          </ul>
      
    </div>
  </div>
</nav>
    );
};

export default Navbar;