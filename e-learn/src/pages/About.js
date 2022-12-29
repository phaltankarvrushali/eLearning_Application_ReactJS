import React from "react";
import "./about.scss";
//import img from "./../../src/components/img/ganesh.jpeg";

//Added about team members
export default function About() {
  return (
    <div className="page">
      <div className="p-2">
        <h2 className="title">EdEasy</h2>

        <br></br>
        <br></br>

        <div className="row">
          <div className="column">
            <h4 className="text-image">Vrushali Phaltankar</h4>
            <img alt="timer" src="./assets/images/Vrushali.jpeg" />

            <div className="card">
            <img className="linkedin" src="./assets/images/Linkedin.avif" />
            <a href="https://www.linkedin.com/in/vrushaliphaltankar/">https://www.linkedin.com/in/vrushaliphaltankar</a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
