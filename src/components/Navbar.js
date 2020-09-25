import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = ()=>{
return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>                        
      </button>
      <Link className="navbar-brand" active= "true" to="/"><img src="http://www.odbc.live/wp-content/uploads/2020/09/homepage-3-9.png" srcSet="http://www.odbc.live/wp-content/uploads/2020/09/homepage-3-9.png 1x" width="187" height="33" alt="ODBC Logo" data-retina_logo_url="" className="fusion-standard-logo"/></Link>
    </div>
    <div className="collapse navbar-collapse" id="myNavbar">
      <ul className="nav navbar-nav navbar-right">
        <li className="nav-item"><Link className="nav-link" exact="true" to="/">Home</Link></li>
        <li className="nav-item"><Link className="nav-link" exact="true" to="/Services">Test</Link></li>
        <li className="nav-item"><Link className="nav-link" exact="true" to="/about">About Us</Link></li>
        <li className="nav-item"><Link className="nav-link" exact="true" to="/portfolio">Porfolio</Link></li>
        <li className="nav-item"><Link className="nav-link" exact="true" to="/pricing">The Road Map</Link></li>
        <li className="nav-item"><Link className="nav-link" exact="true" to="/contact">Contact Us</Link></li>
        <li className="nav-item"><Link className="nav-link" exact="true" to="/signlogin">Sign In</Link></li>
      </ul>
    </div>
  </div>
</nav>
);
}

export default Navbar;