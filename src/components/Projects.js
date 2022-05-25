import React, { useState } from "react";

export default function Projects(props) {
  const [hoverState, setHoverState] = useState(props.isActive);
  const [isDisabled, setIsDisabled] = useState(true);

  function handleHover() {
    setHoverState((prevState) => !prevState);
    setIsDisabled((prevState) => !prevState);
  }
  function handleHoverLeave() {
    setHoverState((prevState) => !prevState);
    setIsDisabled((prevState) => !prevState);
  }

  const styles = {
    transition: "opacity .2s ease-in",
    opacity: hoverState ? 1 : 0,
  };

  const linkDisplay = {
    display: isDisabled ? "none" : "inherit",
    textDecoration: "none",
  };
  return (
    <div className="project-card">
      {props.image}
      <div
        className="project-card-info"
        style={styles}
        onMouseOver={handleHover}
        onMouseOut={handleHoverLeave}
      >
        <h4 className="card-title">{props.title}</h4>
        <h6 className="card-language">{props.languages}</h6>
        <p className="card-description">{props.description}</p>
        {props.link !== "" && (
          <a
            href={props.link}
            style={linkDisplay}
            target="_blank"
            rel="noreferrer"
          >
            <button
              className="card-btn"
              styles={linkDisplay}
              disabled={isDisabled}
            >
              Check it out
            </button>
          </a>
        )}
      </div>
    </div>
  );
}
