import React, { useState } from "react";

export default function Projects(props) {
  const [hoverState, setHoverState] = useState(props.isActive);

  function handleHover() {
    setHoverState((prevState) => !prevState);
    console.log("hello");
  }
  function handleHoverLeave() {
    setHoverState((prevState) => !prevState);
  }

  const styles = {
    transition: "opacity .2s ease-in",
    opacity: hoverState ? 1 : 0,
  };
  return (
    <div
      className="project-card"
      onMouseOver={handleHover}
      onMouseOut={handleHoverLeave}
    >
      {props.image}
      <div className="project-card-info" style={styles}>
        <h4 className="card-title">{props.title}</h4>
        <h6 className="card-language">{props.languages}</h6>
        <p className="card-description">{props.description}</p>
      </div>
    </div>
  );
}
