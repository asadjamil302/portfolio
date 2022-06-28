import React, { useContext } from "react";
import "./Works.css";
import Upwork from "../../img/deploy.png";
import Fiverr from "../../img/testing.png";
import Amazon from "../../img/design.png";
import Shopify from "../../img/requirment.png";
import Facebook from "../../img/development.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Work Flow
          </span>
          <span>SDLC</span>
          <span>
            Software Development Life Cycle is the application of standard 
            <br />
            business practices to building software applications. 
            <br />
            It’s typically divided into seven steps: 
            <br />
            <br />
            1- Planning.
            <br />
            2- Requirements.
            <br />
            3- Design and Prototyping.
            <br />
            4- Software Development. 
            <br />
            5- Testing.
            <br />
            6- Deployment.
            <br />
            7- Operations and Maintenance.
          </span>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
