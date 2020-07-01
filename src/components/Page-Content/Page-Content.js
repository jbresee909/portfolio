import React from "react";
import "./Page-Content.css";
import AboutMe from "../About-Me/About-Me";
import Portfolio from "../Portfolio/Portfolio";
import Skills from "../Skills/Skills";

function Page_Content() {
  return (
    <div className="Page-Content">
      <AboutMe />
      <Portfolio />
      <Skills />
    </div>
  );
}

export default Page_Content;
