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
             How It Works 
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-5xl mb-4">1️⃣</div>
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
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Home;