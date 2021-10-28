import React from "react";
import Contact from "./Contact";
import Header from "./Header";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";

function App() {
  return (
    <div className="">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
export default App;
