// import React from "react";
// import {Link} from "react-router-dom"
// import "../styles/home.css"
// import {useNavigate} from 'react-router-dom';
// // import { CiSearch } from "react-icons/ci";
// function Home(){
   
//     const navigation = useNavigate();
//     const handleNavigate = (id) => {
//         navigation(`/SinglePage/${id}`)
//     }
//     return(
        
//         <div className="home">
//               <div className="allcategories">
//     <div className="dropdown">
//         {/* <button className="dropbtn">All Categories <MdArrowDropDown className='dropicon' /></button>  */}
//         <div className="dropdown-content">
//             <a href="#">Uncategorized</a>
//             <a href="#">General</a>
//             <a href="#">Shoes</a>
//             <a href="#">Clothes</a>
//             <a href="#">Fashion</a>
//         </div>
//     </div>
//     {/* <input placeholder='   Search products...' className='input'/><CiSearch className='search'/> */}
// </div>

//             <div className="homecontent">
//                 <ul>
//             <option>Crime Categories</option>
//             <option>Sexual Violence</option>
//             <option>Psychological Violence</option>
//             <option>Physical Violence</option>
//             </ul>
// </div>
//             <h1 className="home-title">Crime Reporting</h1>
//             <button className="button">Report</button>
//             {/* <div className="card-container">
//                 {cards.map((card) => (
//                     <div key={card.id} className="card">
//                         <img src={card.image} alt={card.title} className="card-image"/>
//                         <div className="card-content">
//                             <h2 className="card-title">{card.title}</h2>
//                             <p className="card-text">{card.content}</p> */}
//                             <button type="button" className="button11" onClick={() =>handleNavigate(card.id)}>View</button>
//                         </div>
//                     // </div>
//                 // ))}
//                 // </div>
//         // </div>
//     )
// }
// export default Home

import React, { useState } from 'react';
import { Button } from '../Components/Button.jsx';
import { Card, CardContent, CardHeader, CardTitle } from '../Components/Card.jsx';
import "../Styles/home.css";

const Home = () => {
  const [activeFeature, setActiveFeature] = useState(null);

  const platformFeatures = [
    {
      title: "Anonymous Reporting",
      description: "Submit reports confidentially without revealing your identity.",
      icon: "🕵️"
    },
    {
      title: "Real-Time Tracking",
      description: "Track the status of your report in real-time.",
      icon: "🕒"
    },
    {
      title: "Community Safety",
      description: "Help law enforcement prevent and solve crimes in your area.",
      icon: "🏘️"
    }
  ];

  return (
    <div className="container">
      <div className="header">
        <header className="header">
          <h1 className="header h1">
            Community Crime Reporting Platform
          </h1>
          <p className="header p">
         Trusted platform for safe and anonymous crime reporting
          </p>
        </header>

        <div className="card">
          {platformFeatures.map((feature, index) => (
            <Card 
              key={index} 
              className={`transition-all duration-300 ${
                activeFeature === index 
                  ? 'border-blue-500 shadow-lg scale-105' 
                  : 'border-gray-200'
              }`}
              onMouseEnter={() => setActiveFeature(index)}
              onMouseLeave={() => setActiveFeature(null)}
            >
              <CardHeader className="flex items-center justify-center">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <CardTitle className="text-center">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

     <div className="btn">
          <Button 
            className="btn"
          >
            Start Reporting
          </Button>
        </div> 

        <section className="feature-grid">
          <h2 className="text-2xl font-bold mb-4 text-center">
            {/* How It Works */}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              {/* <div className="text-5xl mb-4">1️⃣</div>
              <h3 className="font-semibold mb-2">Create Report</h3>
              <p className="text-gray-600">
                Provide details about the incident securely and anonymously.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">2️⃣</div>
              <h3 className="font-semibold mb-2">Submit Safely</h3>
              <p className="text-gray-600">
                Our platform ensures your privacy and data protection.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">3️⃣</div>
              <h3 className="font-semibold mb-2">Follow Up</h3>
              <p className="text-gray-600">
                Track your report and receive updates if applicable.
              </p> */}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Home;