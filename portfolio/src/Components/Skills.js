import React from "react";

function Skills() {
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
          <li className="skill flex justify_center items_center">
            <img src="/images/git.png" alt="" />
          </li>
          <li className="skill flex justify_center items_center">
            <img src="/images/html.png" alt="" />
          </li>
          <li className="skill flex justify_center items_center">
            <img src="/images/css.png" alt="" />
          </li>
          <li className="skill flex justify_center items_center">
            <img src="/images/sass.png" alt="" />
          </li>
          <li className="skill flex justify_center items_center">
            <img src="/images/tailwindcss.jpg" alt="" />
          </li>
          <li className="skill flex justify_center items_center">
            <img src="/images/js.png" alt="" />
          </li>
          <li className="skill flex justify_center items_center">
            <img src="/images/react.png" alt="" />
          </li>
          <li className="skill flex justify_center items_center">
            <img src="/images/redux.png" alt="" />
          </li>
          <li className="skill flex justify_center items_center">
            <img src="/images/materialui.png" alt="" />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Skills;
