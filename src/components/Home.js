import React from "react";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="home-section">
        <div className="home-container">
          <p className="introduction">
            Hello, I'm <span className="fullname">Brandon Artigue</span>.
            <br></br>
            Web Developer
          </p>
          <lottie-player
            src="https://assets9.lottiefiles.com/packages/lf20_80nu1g6c.json"
            background="transparent"
            speed="1"
            style={{
              width: "150px",
              height: "150px",
              margin: "0 auto",
              transform: "rotate(90deg)",
            }}
            loop
            autoplay
          ></lottie-player>
        </div>
      </section>
    </>
  );
}
