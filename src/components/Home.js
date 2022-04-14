import React from "react";

export default function Home() {
  return (
    <section className="home-section">
      <div className="home-container">
        <p className="introduction">
          Hello, I'm <span className="fullname">Brandon Artigue</span>.<br></br>
          Web Developer
        </p>
        <lottie-player
          src="https://assets9.lottiefiles.com/packages/lf20_80nu1g6c.json"
          background="transparent"
          speed="1"
          style={{
            width: "200px",
            height: "200px",
            margin: "0 auto",
            cursor: "pointer",
            transform: "rotate(90deg)",
          }}
          loop
          autoplay
        ></lottie-player>
      </div>
    </section>
  );
}
