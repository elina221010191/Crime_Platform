// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useState } from 'react';
// import "../Styles/navbar.css";

// function Navbar() {
//   const [modal,setModal]= useState(false);
//   const handleLoginForm = () =>
//   {
//       setModal(!modal)
//   }
//   return (

//       <div>
          
//           <div className='all'>
         
//        <div className="allcategories">
//   <div className="dropdown">
     
//       <div className="dropdown-content">
//           {/* <a href="#">Uncategorized</a>
//           <a href="#">General</a>
//           <a href="#">Shoes</a>
//           <a href="#">Clothes</a>
//           <a href="#">Fashion</a> */}
//       </div>
//   </div>
// </div>

// <div className='icons'>

// </div>
// </div>


//       <nav className="navbar">
//           <div className="nav-left">
//           <div className="dropdown">

//   <div className="dropdown-content">
//   </div>
//       </div>
//       <div>
//        <h1 className="crime">Crime Insight</h1>
//    </div>
//           </div>
//           <ul className="nav-center">
//           <Link to="/"> <li>Home</li></Link>
//               <Link to="/About"><li>About</li></Link>
//               <Link to="/SignUpForm"><li>Login</li></Link>
//               <Link to="/Contact"><li>Contact</li></Link>
//               <Link to="/Dashboard"><li>Dashboard</li></Link>
//           </ul>
//       </nav>
//       </div>
// );
// }

// export default Navbar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../Styles/navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between h-16">
          {/* Logo and main nav section */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <svg className="h-8 w-8 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="font-bold text-xl">CrimeWatch</span>
            </Link>
            
            {/* Desktop menu */}
            <div className="hidden md:ml-6 md:flex md:space-x-6">
              <Link to="/" className="py-2 px-3 text-gray-300 hover:text-white hover:border-b-2 hover:border-blue-400">
              Home
              </Link>
              <Link to="/About" className="py-2 px-3 text-gray-300 hover:text-white hover:border-b-2 hover:border-blue-400">
               About
              </Link>
              <Link to="/Dashboard" className="py-2 px-3 text-gray-300 hover:text-white hover:border-b-2 hover:border-blue-400">
                Dashboard
              </Link>
              <Link to="/Contact" className="py-2 px-3 text-gray-300 hover:text-white hover:border-b-2 hover:border-blue-400">
            Contact
              </Link>
              <div className="relative group">
                <button className="py-2 px-3 text-gray-300 hover:text-white hover:border-b-2 hover:border-blue-400 flex items-center">
                   <Link to="/Contact">Report</Link>
                  <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-xl z-20 hidden group-hover:block">
                  <Link to="/report" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white">
                    File a Report
                  </Link>
                  <Link to="/anonymous-reporting" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white">
                    Anonymous Reporting
                  </Link>
                  <Link to="/missing-persons" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white">
                    Missing Persons
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right section with search and auth buttons */}
          <div className="flex items-center">
            {/* Search button */}
            <div className="hidden md:flex items-center relative">
              <input 
                type="text" 
                placeholder="Search..." 
                className="bg-gray-800 text-white px-3 py-1 text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 w-40"
              />
              <button className="ml-2 text-gray-300 hover:text-white">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>

            {/* Auth buttons */}
            <div className="hidden md:flex md:ml-4">
              <Link to="/SignUpForm" className="px-3 py-1 text-sm text-gray-300 hover:text-white">
                Login
              </Link>
              {/* <Link to="/register" className="ml-2 px-3 py-1 text-sm bg-blue-600 hover:bg-blue-700 rounded-md"> */}
                {/* Register
              </Link> */}
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden ml-4">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link to="/crime-map" className="block px-3 py-2 text-base text-gray-300 hover:text-white hover:bg-gray-700 rounded-md">
            Crime Map
          </Link>
          <Link to="/statistics" className="block px-3 py-2 text-base text-gray-300 hover:text-white hover:bg-gray-700 rounded-md">
            Statistics
          </Link>
          <Link to="/resources" className="block px-3 py-2 text-base text-gray-300 hover:text-white hover:bg-gray-700 rounded-md">
            Resources
          </Link>
          <Link to="/blog" className="block px-3 py-2 text-base text-gray-300 hover:text-white hover:bg-gray-700 rounded-md">
            Blog
          </Link>
          
          {/* Report dropdown items */}
          <div className="px-3 py-2 text-base text-gray-300 font-semibold">Report</div>
          <Link to="/report" className="block px-5 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-700 rounded-md">
            File a Report
          </Link>
          <Link to="/anonymous-reporting" className="block px-5 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-700 rounded-md">
            Anonymous Reporting
          </Link>
          <Link to="/missing-persons" className="block px-5 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-700 rounded-md">
            Missing Persons
          </Link>
          
          {/* Search in mobile view */}
          <div className="px-3 py-2 flex">
            <input 
              type="text" 
              placeholder="Search..." 
              className="bg-gray-800 text-white px-3 py-1 text-sm rounded-l-md focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
            />
            <button className="bg-gray-700 px-3 rounded-r-md">
              <svg className="h-5 w-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
          
          {/* Auth buttons in mobile view */}
          <div className="px-3 py-2 flex space-x-3">
            <Link to="/login" className="flex-1 px-3 py-1 text-center text-gray-300 border border-gray-600 hover:text-white hover:border-gray-500 rounded-md">
              Login
            </Link>
            <Link to="/register" className="flex-1 px-3 py-1 text-center bg-blue-600 hover:bg-blue-700 rounded-md">
              Register
            </Link>
          </div>
        </div>
      </div>

      {/* Emergency alert banner (optional - can be conditionally rendered) */}
      <div className="bg-red-600 text-white px-4 py-1 text-center text-sm">
        <span className="font-bold">ALERT:</span> Recent spike in vehicle break-ins in the downtown area. Please secure your belongings.
        <button className="ml-2 text-xs underline hover:no-underline">View Details</button>
      </div>
    </nav>
  );
};

export default Navbar;