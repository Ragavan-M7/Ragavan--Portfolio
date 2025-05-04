import React from "react";
import About from "./Main/About";
import Skills from "./Main/Skills";
import Resume from "./Main/Resume";
import Footer from "./Main/Footer";

function Maincontent({ hideLinkClick }) {
  return (
    <>
      <div role="button" onClick={hideLinkClick}>
        <About />
        <Skills />
        <Resume />
        <Footer />
      </div>
    </>
  );
}

export default Maincontent;
