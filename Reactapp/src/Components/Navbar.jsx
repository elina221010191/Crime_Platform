import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import "../Styles/navbar.css";


// const Navbar = () => {
//   return (
//     <nav>
//       <div className="navbar">
//       <div>
//       <h1 className="crime">Crime Reporting</h1>
//     </div>
//         <ul  className="crime2">
//           {/* Use a single Link per list item */}
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           {/* <li>
//             <Link to="/services">
//               Services
//             </Link>
//           </li> */}
//           {/* If you had nested links before, restructure them */}
//           <li>
//             <Link to="/contact">Contact</Link>
//             <li>
//               <Link to="/Login">Login</Link>
//             </li>
//            <li>
//               <Link to="/SignUpForm">SignUpForm</Link>
//             </li> 
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

function Navbar() {
  const [modal,setModal]= useState(false);
  const handleLoginForm = () =>
  {
      setModal(!modal)
  }
  return (

      <div>
          {/* {modal && <UsestateHook handleLoginForm={handleLoginForm}/>} */}
          <div className='all'>
          {/* <h1 className="title">Botiga</h1> */}
       <div className="allcategories">
  <div className="dropdown">
      {/* <button className="dropbtn">All Categories <MdArrowDropDown className='dropicon' /></button>  */}
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
              <Link to="/Login"><li>Login</li> </Link>
              <Link to="/SignUpForm"><li>SignUpForm</li></Link>
              <Link to="/Contact"><li>Contact</li></Link>
              <Link to="/Dashboard"><li>Dashboard</li></Link>
          </ul>
      </nav>
      </div>
);
}

export default Navbar;