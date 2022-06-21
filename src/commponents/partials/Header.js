import React from "react";
import {Link} from 'react-router-dom'

function Header() {
  return <div>
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to ="/">
      Logo
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to ="/add">
            Add-product
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to ="read">
            All-products
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to ="#">
            Pricing
          </Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

  </div>;
}

export default Header;
