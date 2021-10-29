import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Skills() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section className="container skills" id="skills">
      <h2 className="heading">Skills</h2>
      {/* <div className="flex justify_center ">
        <ul className="flex flex_30 flex_wrap justify_center skills">
          <li className="skill">Git</li>
          <li className="skill">HTML</li>
          <li className="skill">CSS</li>
          <li className="skill">SCSS</li>
          <li className="skill">TailwindCSS</li>
          <li className="skill">JavaScript</li>
          <li className="skill">React</li>
          <li className="skill">Redux</li>
          <li className="skill">Material UI</li>
        </ul>
      </div> */}
      <div className="flex justify_center ">
        <ul className="flex flex_30 flex_wrap justify_center skills">
          <li
            className="skill flex justify_center items_center"
            data-aos="flip-left"
          >
            <img src="/images/git.png" alt="" />
          </li>
          <li
            className="skill flex justify_center items_center"
            data-aos="flip-left"
          >
            <img src="/images/html.png" alt="" />
          </li>
          <li
            className="skill flex justify_center items_center"
            data-aos="flip-left"
          >
            <img src="/images/css.png" alt="" />
          </li>
          <li
            className="skill flex justify_center items_center"
            data-aos="flip-left"
          >
            <img src="/images/sass.png" alt="" />
          </li>
          <li
            className="skill flex justify_center items_center"
            data-aos="flip-left"
          >
            <img src="/images/tailwindcss.jpg" alt="" />
          </li>
          <li
            className="skill flex justify_center items_center"
            data-aos="flip-left"
          >
            <img src="/images/js.png" alt="" />
          </li>
          <li
            className="skill flex justify_center items_center"
            data-aos="flip-left"
          >
            <img src="/images/react.png" alt="" />
          </li>
          <li
            className="skill flex justify_center items_center"
            data-aos="flip-left"
          >
            <img src="/images/redux.png" alt="" />
          </li>
          <li
            className="skill flex justify_center items_center"
            data-aos="flip-left"
          >
            <img src="/images/materialui.png" alt="" />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Skills;
