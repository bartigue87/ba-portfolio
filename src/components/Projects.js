import React from "react";

export default function Projects(props) {
  return (
    <div className="project-card" onClick={props.handleClick}>
      {props.image}
      {props.isActive ? (
        <div className="project-card-info fadein">
          <h4 className="card-title">{props.title}</h4>
          <h6 className="card-language">{props.languages}</h6>
          <p className="card-description">{props.description}</p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
