import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";

function Footer() {
  return (
    <footer className="d-flex justify-content-center">
      <h2>🩷 See You Later 🩷</h2>
      <p>
        <div className="d-inline-flex">
          <a href="https://github.com/amandajduva"  className="footer-links mx-4">
            <p className="logo">
              <VscGithubAlt size = {33}/>
            </p>
          </a>
          <a href="https://www.linkedin.com/in/amanda-duva-8aa15314a/" className="footer-links mx-4">
            <p className="logo">
              <AiOutlineLinkedin size = {33}/>
            </p>
          </a>
        </div>
      </p>
    </footer>
  );
}

export default Footer;