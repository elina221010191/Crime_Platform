import React, { useState } from 'react';
import { Button } from '../Components/Button.jsx';
import { Card, CardContent, CardHeader, CardTitle } from '../Components/Card.jsx';
import "../Styles/home.css";
import { Link } from 'react-router-dom';

// const Home = () => {
//   const [activeFeature, setActiveFeature] = useState(null);

//   const platformFeatures = [
//     {
//       title: "Anonymous Reporting",
//       description: "Submit reports confidentially without revealing your identity.",
//       icon: "🕵️"
//     },
//     {
//       title: "Real-Time Tracking",
//       description: "Track the status of your report in real-time.",
//       icon: "🕒"
//     },
//     {
//       title: "Community Safety",
//       description: "Help law enforcement prevent and solve crimes in your area.",
//       icon: "🏘️"
//     }
//   ];

//   return (
//     <div className="container">
//       <div className="header">
//         <header className="header">
//           <h1 className="header h1">
//             Community Crime Reporting Platform
//           </h1>
//           <p className="header p">
//          Trusted platform for safe and anonymous crime reporting
//           </p>
//         </header>

//         <div className="card">
//           {platformFeatures.map((feature, index) => (
//             <Card 
//               key={index} 
//               className={`transition-all duration-300 ${
//                 activeFeature === index 
//                   ? 'border-blue-500 shadow-lg scale-105' 
//                   : 'border-gray-200'
//               }`}
//               onMouseEnter={() => setActiveFeature(index)}
//               onMouseLeave={() => setActiveFeature(null)}
//             >
//               <CardHeader className="flex items-center justify-center">
//                 <div className="text-5xl mb-4">{feature.icon}</div>
//                 <CardTitle className="text-center">{feature.title}</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-center text-gray-600">
//                   {feature.description}
//                 </p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//      <div className="btn">
//           <Button 
//             className="btn"
//           > <Link to="/Contact"><li>Start Reporting</li></Link>
         
//           </Button>
//         </div> 

//         <section className="feature-grid">
//           <h2 className="text-2xl font-bold mb-4 text-center">
//              How It Works 
//           </h2>
//           <div className="grid md:grid-cols-3 gap-6">
//             <div className="text-center">
//               <div className="text-5xl mb-4">1️⃣</div>
//               <h3 className="font-semibold mb-2">Create Report</h3>
//               <p className="text-gray-600">
//                 Provide details about the incident securely and anonymously.
//               </p>
//             </div>
//             <div className="text-center">
//               <div className="text-5xl mb-4">2️⃣</div>
//               <h3 className="font-semibold mb-2">Submit Safely</h3>
//               <p className="text-gray-600">
//                 Our platform ensures your privacy and data protection.
//               </p>
//             </div>
//             <div className="text-center">
//               <div className="text-5xl mb-4">3️⃣</div>
//               <h3 className="font-semibold mb-2">Follow Up</h3>
//               <p className="text-gray-600">
//                 Track your report and receive updates if applicable.
//               </p>
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };
// export default Home;

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 text-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Crime Awareness & Prevention</h1>
        <p className="text-lg mb-6">
          Stay informed about crimes in your area. Awareness is the first step to
          ensuring safety for yourself and your community.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-lg p-4 rounded-lg">
            <img src="/images/crime2.jpg" alt="Crime Report" className="w-full h-32 object-cover rounded-md mb-3" />
            <h2 className="text-xl font-semibold mb-2">Crime Reports</h2>
            <p className="text-sm mb-3">
              Get real-time crime reports and updates on incidents near you.
            </p>
            <Link
              to="/report"
              className="text-blue-600 hover:underline"
            >
              File a Report
            </Link>
          </div>
          
          <div className="bg-white shadow-lg p-4 rounded-lg">
            <img src="/images/safety-tips.jpg" alt="Safety Tips" className="w-full h-32 object-cover rounded-md mb-3" />
            <h2 className="text-xl font-semibold mb-2">Safety Tips</h2>
            <p className="text-sm mb-3">
              Learn how to protect yourself from crime with expert safety tips.
            </p>
            <Link
              to="/resources"
              className="text-blue-600 hover:underline"
            >
              View Tips
            </Link>
          </div>

          <div className="bg-white shadow-lg p-4 rounded-lg">
            <img src="/images/crime-stats.jpg" alt="Crime Statistics" className="w-full h-32 object-cover rounded-md mb-3" />
            <h2 className="text-xl font-semibold mb-2">Crime Statistics</h2>
            <p className="text-sm mb-3">
              Explore detailed statistics on crime trends in different areas.
            </p>
            <Link
              to="/statistics"
              className="text-blue-600 hover:underline"
            >
              View Statistics
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
