/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import './Intro.css';
import Github from '../../assets/img/github.png';
import LinkedIn from '../../assets/img/linkedin.png';
import Instagram from '../../assets/img/instagram.png';
import Vector1 from '../../assets/img/Vector1.png';
import Vector2 from '../../assets/img/Vector2.png';
import Boy from '../../assets/img/boy.png';
import GlassesImoji from '../../assets/img/glassesimoji.png';
import Computer from '../../assets/3dimg/computer.png';
import Mobile from '../../assets/3dimg/mobile.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { themeContext } from '../../Context/Context';
import { useContext } from 'react';
import { motion } from 'framer-motion';

const Intro = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const transition = {duration: 2, type: "spring"}
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span style={{ color: darkMode ? "white" : ""}}>Hy! I Am</span>
                <span>Sai Kiran Bh V</span>
                <span>Frontend Developer with high level of experience in
                    web development, mobile app development and producting the quality work
                </span>
            </div>
            <button className="button i-button">Hire me</button>
            <div className="i-icons">
                <a href="https://google.com" target="_blank">
                    <img src={Github} alt="Github" />
                </a>
                {/* <img src={Github} alt="Github" /> */}
                <img src={LinkedIn} alt="LinkedIn" />
                <img src={Instagram} alt="Instagram" />
            </div>
        </div>
        <div className="i-right">
            <img src={Vector1} alt="Vector1" />
            <img src={Vector2} alt="Vector2" />
            <img src={Boy} alt="Boy" />
            <motion.img
              initial={{left: "-36%"}}
              whileInView={{left: "-24%"}}
              transition={transition}
              src={GlassesImoji}
              alt="Glasses"
            />
            <motion.div
              initial={{ top: "-4%", left: "75%" }}
              whileInView={{ left: "65%"}}
              transition={transition}
              style={{ top: "-4%", left: "70%" }}
              className="floating-dev"
            >
                <FloatingDiv image={Computer} txt1="Web" txt2="Developer" />
            </motion.div>
            <motion.div
              initial={{ top: "18rem", left: "9rem" }}
              whileInView={{ left: "2rem"}}
              transition={transition}
              style={{ top: "18rem", left: "5rem" }}
              className="floating-dev"
            >
                <FloatingDiv image={Mobile} txt1="Mobile App" txt2="Developer" />
            </motion.div>
            {/* Blur divs */}
            <div className="blur" style={{background: "rgb(238 210 255)"}}></div>
            <div
              className="blur"
              style={{
                background: "#C1F5FF",
                top: "17rem",
                width: "21rem",
                height: "11rem",
                left: "-8rem"
              }}></div>
        </div>
    </div>
  )
}

export default Intro