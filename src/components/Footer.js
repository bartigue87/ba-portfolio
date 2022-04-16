import React from "react";
import email from "../images/email.png";
import github from "../images/github.svg";
import linkedin from "../images/linkedin.svg";

export default function Footer() {
  return (
    <>
      <footer role="contentinfo" className="footer">
        <div className="row">
          <ul className="footer__social-links">
            <li className="footer__social-link-item">
              <a href="mailto:bwartigue@gmail.com">
                <img src={email} className="footer__social-image" alt="Email" />
              </a>
            </li>
            <li className="footer__social-link-item">
              <a
                href="https://github.com/bartigue87"
                title="Link to Github Profile"
              >
                <img
                  src={github}
                  className="footer__social-image"
                  alt="Github"
                />
              </a>
            </li>

            <li className="footer__social-link-item">
              <a href="https://www.linkedin.com/in/brandon-artigue/">
                <img
                  src={linkedin}
                  title="Link to Linkedin Profile"
                  className="footer__social-image"
                  alt="Linkedin"
                />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
