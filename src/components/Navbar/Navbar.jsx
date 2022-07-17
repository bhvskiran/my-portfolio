import React from 'react';
import Toggle from '../Toggle/Toggle';
import './Navbar.css';
import { Link } from "react-scroll";

function Navbar() {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">Sai Kiran</div>
            <Toggle />
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul>
                    <Link spy={true} to="NavBar" activeClass="activeClass" smooth={true}>
                      <li>Home</li>
                    </Link>
                    <Link spy={true} to="Services" smooth={true}>
                      <li>Services</li>
                    </Link>
                    <Link spy={true} to={"Experience"} smooth={true}>
                      <li>Experience</li>
                    </Link>
                    <Link spy={true} to={"Portfolio"} smooth={true}>
                      <li>Portfolio</li>
                    </Link>
                    <Link spy={true} to={"Testimonisals"} smooth={true}>
                      <li>Testimonisals</li>
                    </Link>
                </ul>
            </div>
            <Link spy={true} to={"Contact"} smooth={true}>
              <button className="button n-button">Contact</button>
            </Link>
        </div>
    </div>
  )
}

export default Navbar