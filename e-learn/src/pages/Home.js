import { React, useState } from "react";
import { Link } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import Typewriter from "typewriter-effect";
import Footer from "../components/Footer";
import Logo from "./../../src/edu10.jpeg";
import Logo1 from "./../../src/edu12.png";
import Logo2 from "./../../src/edu13.jpeg";
import Logo3 from "./../../src/banner.jpg";
import './Home.scss';


export default function Home() {
  const { user } = useUserAuth();
  function CheckUser(user) {
    if (user) {
      return true;
    }
  }

  return (
    <div className="home page">
      <div className="hero">
        <div className="container2">
        <img className="imgsize1" src={Logo3}/>
        <div className="centeredtext">
        <p>
            Start, switch, or advance your career with more than 5,000 courses,
            Professional Certificates, and degrees from world-class universities
            and companies.
          </p>
          <Typewriter
            options={{
              strings: ["Learn From Anywhere", "Learn Without Limits"],
              autoStart: true,
              loop: true,
            }}
          />
          <br/>
          <br/>
                    <div className="cta">
            {CheckUser(user) ? (
              <div>
                <Link to="/courses" className="link-1">
                  Explore all courses
                </Link>
              </div>
            ) : (
              <div>
                <Link to="/login" className="btn">
                  Login
                </Link>
                <Link to="/signup" className="btn">
                  Signup
                </Link>
              </div>
            )}
          </div>

        </div>


        </div>
        <h1 className="banner-heading1"> </h1>
        <span className="banner-heading2"></span>

        <div className="content">

        </div>


        
        {/* <div className="image">
          <img src="/images/hero.svg" alt="Hero-image" />
        </div> */}
      </div>
      <div className="p-2">

       
      </div>
      <div>
      <img className="imgsize" src={Logo}/>
      <br/>
      <br/>
      <img className="imgsize" src={Logo2}/>
      <br/>
      <br/>
      </div>
      <Footer />
    </div>
  );
}
