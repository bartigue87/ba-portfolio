import React from "react";
import cssLogo from "../images/css-3-logo.png";
import htmlLogo from "../images/html5-logo.png";
import jsLogo from "../images/javascript-logo.png";
import reactLogo from "../images/react-logo.png";
import nodeLogo from "../images/node-logo.png";
import csharpLogo from "../images/csharp-logo.png";
import sqlLogo from "../images/postgreSQL-logo.png";

export default function About() {
  return (
    <section className="about-section" id="about">
      <h2 className="about-header">About</h2>
      <div className="about-container">
        <div className="left-side">
          <lottie-player
            src="https://assets5.lottiefiles.com/packages/lf20_btyie10d.json"
            background="transparent"
            speed="1"
            style={{ width: "240px", height: "240px", margin: "0 auto" }}
            loop
            autoplay
          ></lottie-player>
          <p className="about-paragraph">
            My interest in web development started back in 2020 when I enrolled
            in a web development bootcamp. Later that year I completed that
            training and decided to further my education and eventually earned
            my Bachelor of Science, Software Development from Western Governors
            University.
          </p>
          <p className="about-paragraph">
            Fast-forward to today, and I’ve had the privilege of working at a
            start-up developing sims for clients like Verizon, Adobe, Dell and
            more. I am currently doing contract work as a developer and use my
            spare time building personal projects and honing my skills.
          </p>
        </div>
        <div className="skills-container">
          <img className="language-logo" src={htmlLogo} alt="html logo" />
          <img className="language-logo" src={cssLogo} alt="css logo" />
          <img className="language-logo" src={jsLogo} alt="javascript logo" />
          <img className="language-logo" src={reactLogo} alt="react logo" />
          <img className="language-logo" src={csharpLogo} alt="c# logo" />
          <img className="language-logo" src={sqlLogo} alt="postgreSQL logo" />
          <img
            className="language-logo sql-child"
            src={nodeLogo}
            alt="node logo"
          />
        </div>
      </div>
    </section>
  );
}
