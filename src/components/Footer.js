import React from "react";
import email from "../images/email.png";
import github from "../images/github.svg";
import linkedin from "../images/linkedin.svg";

export default function Footer() {
  return (
    <>
      <footer role="contentinfo" class="footer">
        <div class="row">
          <ul class="footer__social-links">
            <li class="footer__social-link-item">
              <a href="mailto:bwartigue@gmail.com">
                <img src={email} class="footer__social-image" alt="Email" />
              </a>
            </li>
            <li class="footer__social-link-item">
              <a
                href="https://github.com/bartigue87"
                title="Link to Github Profile"
              >
                <img src={github} class="footer__social-image" alt="Github" />
              </a>
            </li>

            <li class="footer__social-link-item">
              <a href="https://www.linkedin.com/in/brandon-artigue/">
                <img
                  src={linkedin}
                  title="Link to Linkedin Profile"
                  class="footer__social-image"
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
