import "../Styles/home.css";
import Login from "./Login";
import { Link } from "react-router-dom";
import { useState } from "react";
const Home = () => {
  const [modal,useModal]=useState(false);
  const HandleLoginForm=()=>
      {
          useModal(!modal)
      }
  return (
    <div>
       {modal && <Login HandleLoginForm={HandleLoginForm} />}
        <div className="Main-Home">
      <div className="Home-Content">
        <div className="SubHome-content">
                   Stay informed about crimes in your area. Awareness is the first step to   ensuring safety for yourself and your community.
        </div>
       <button className="Book-Button" onClick={HandleLoginForm}>REPORT</button>
      </div>
      </div>
    </div>
  );
};

export default Home;
