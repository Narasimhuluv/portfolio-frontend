import React from "react";

function Hero() {
  return (
    <section className="container flex justify_center hero column">
      <figure className="flex_48">
        <img src="/images/profession3.png" alt="" />
      </figure>

      <div className="hero_data flex_48 flex justify_center items_center">
        <div>
          <h1>
            Hi, I am <span className="name_color">Narasimhulu Vasam.</span>
          </h1>
          <h2>A Full Stack Web Developer.</h2>
          <p>
            Proficient in MERN stack, Passionate about implementing and
            launching new projects. Ability to translate business requirements
            into technical solutions. Looking to start the career as an
            entry-level software engineer with a reputed firm driven by
            technology.
          </p>
          <nav className="flex justify_center items_center">
            <ul className="flex_15 flex justify_between icons">
              <li>
                <a href="https://github.com/Narasimhuluv">
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/vasam-narasimhulu-8085901b3/">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/NarasimhuluV7">
                  <i className="fab fa-twitter-square"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}

export default Hero;
