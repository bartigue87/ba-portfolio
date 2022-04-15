import React from "react";

export default function Projects(props) {
  return (
    <div className="project-card">
      {props.image}
      <div>
        <h4>{props.title}</h4>
        <h6>{props.languages}</h6>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
