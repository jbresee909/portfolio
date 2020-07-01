import React, {useState} from "react";
import "./Page-Header-Nav.css";
import { Spiral as Hamburger } from 'hamburger-react'

function Page_Header_Nav() {
  const [isOpen, setOpen] = useState(false)

  // prettier-ignore
  return (
    <div className="Page-Header-Nav" id="Page-Header-Nav">
        <ul>
          <li><a href="/#About">About</a></li>
          <li><a href="/#Portfolio">Portfolio</a></li>
          <li><a href="/#Skills">Skills</a></li>
        </ul>

        <Hamburger toggled={isOpen} toggle={setOpen} color="#fff" duration={0.8}></Hamburger>
        <ul className="mobile-menu" style={{display: isOpen ? "block" : "none"}}>
          <li><a href="/#About">About</a></li>
          <li><a href="/#Portfolio">Portfolio</a></li>
          <li><a href="/#Skills">Skills</a></li>
        </ul>
    </div>
  );
}

export default Page_Header_Nav;
