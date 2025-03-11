import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import "../Styles/navbar.css";

function Navbar() {
  const [modal,setModal]= useState(false);
  const handleLoginForm = () =>
  {
      setModal(!modal)
  }
  return (

      <div>
          
          <div className='all'>
         
       <div className="allcategories">
  <div className="dropdown">
     
      <div className="dropdown-content">
          {/* <a href="#">Uncategorized</a>
          <a href="#">General</a>
          <a href="#">Shoes</a>
          <a href="#">Clothes</a>
          <a href="#">Fashion</a> */}
      </div>
  </div>
</div>

<div className='icons'>

</div>
</div>


      <nav className="navbar">
          <div className="nav-left">
          <div className="dropdown">

  <div className="dropdown-content">
  </div>
      </div>
      <div>
       <h1 className="crime">Crime Insight</h1>
   </div>
          </div>
          <ul className="nav-center">
          <Link to="/"> <li>Home</li></Link>
              <Link to="/About"><li>About</li></Link>
              <Link to="/SignUpForm"><li>Login</li></Link>
              <Link to="/Contact"><li>Contact</li></Link>
              <Link to="/Dashboard"><li>Dashboard</li></Link>
          </ul>
      </nav>
      </div>
);
}

export default Navbar;