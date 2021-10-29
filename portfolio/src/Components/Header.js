import React from "react";

function Header() {
  return (
    <header className="container flex justify_between items_center">
      <div className="portfolio">
        <h3>Portfolio</h3>
        <div className="underLine"></div>
      </div>
      <nav>
        <ul className="flex">
          <li className="each_nav">
            <a href="#projects">
              <h4>Projects</h4>
              <div className="underLine"></div>
            </a>
          </li>
          <li className="each_nav">
            <a href="#skills">
              <h4>Skills</h4>
              <div className="underLine"></div>
            </a>
          </li>
          <li className="each_nav">
            <a href="#contact">
              <h4>Contact</h4>
              <div className="underLine"></div>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
