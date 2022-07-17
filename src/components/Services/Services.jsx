import React from 'react';
import "./Services.css";
import HeartEmoji from "../../assets/img/heartemoji.png";
import Humble from "../../assets/img/humble.png";
import Glasses from "../../assets/img/glasses.png";
import Card from '../Card/Card';
import Resume from "./sample.pdf";
import { themeContext } from '../../Context/Context';
import { useContext } from 'react';
import { motion } from 'framer-motion';


const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  
  const transition = {duration: 2, type: "spring"}
  return (
    <div class="services" id="Services">
        {/* left side */}
        <div className="awesome">
            <span style={{ color: darkMode ? "white" : ""}}>My Awesome</span>
            <span>services</span>
            <span>Lorem ispum is simply dummy text Lorem ispum is simply <br />  dummy text Lorem ispum is simply dummy text</span>
            <a href={Resume} download>
                <button className="button s-button">Download CV</button>
            </a>
            <div className="blur s-blur1" style={{ background: "#ABF1FF94"}}></div>
        </div>
        {/* right side */}
        <div className="cards">
            <motion.div
              initial={{top: "-5rem", left: "28rem"}}
              whileInView={{left: "22rem"}}
              transition={transition}
              style={{ top: "-5rem", left: "24rem" }}
            >
                <Card
                  emoji={HeartEmoji}
                  heading={"Design"}
                  desc={"Figma, Sketch, Photoshop, Adobe, Adobe XD"}
                />
            </motion.div>
            <motion.div
              initial={{top: "7rem", left: "0rem"}}
              whileInView={{left: "4rem"}}
              transition={transition}
              style={{ top: "7rem", left: "2rem" }}
            >
                <Card
                  emoji={Glasses}
                  heading={"Developer"}
                  desc={"HTML, CSS, JavaScript, TypeScript, React, ReactNative"}
                />
            </motion.div>
            <motion.div
              initial={{top: "14rem", left: "25rem"}}
              whileInView={{left: "19rem"}}
              transition={transition}
              style={{ top: "14rem", left: "21rem" }}
            >
                <Card
                  emoji={Humble}
                  heading={"UI/UX"}
                  desc={"simple dummy text simple dummy text simple dummy text"}
                />
            </motion.div>
            <div className="blur s-blur2" style={{backgroud: "var(--purple)"}}></div>
        </div>
    </div>
  )
}

export default Services