import React from "react";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

function Contact() {
  return (
    <section className="container contact" id="contact">
      <h2 className="heading">Contact</h2>
      <div className="flex justify_center justify_between items_center">
        <div className="flex_15 flex">
          <a
            href="https://vasamnarasimhulu123@gmail.com"
            className="contact_email"
          >
            <div className="bgc"></div>
            <h4> Email</h4>
          </a>

          <div className="flex items_center  resume justify_between">
            <div className="bgc"></div>
            <CloudDownloadIcon className="resume_icon" />
            <a href="/images/profession1.png" download>
              Resume
            </a>
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify_center items_center links_contact">
          <nav className="flex_48 flex justify_center items_center">
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

      <h3>Created By Narasimhulu Vasam</h3>
    </section>
  );
}

export default Contact;
