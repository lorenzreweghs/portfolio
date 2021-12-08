import React, { useEffect } from 'react';
import './Skills.scss';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import HTML from '../../assets/images/skills/HTML.png';
import CSS from '../../assets/images/skills/CSS.png';
import JavaScript from '../../assets/images/skills/JavaScript.png';
import Angular from '../../assets/images/skills/Angular.png';
import Reactjs from '../../assets/images/skills/React.png';
import Nodejs from '../../assets/images/skills/Nodejs.png';
import Adobe_XD from '../../assets/images/skills/Adobe_XD.png';

const Skills = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(".skills-tag", {
            scrollTrigger: {
                trigger: ".Skills",
                toggleActions: "restart reverse restart reverse",
                start: "bottom bottom",
                endTrigger: ".skills-tag",
                end: "top top",
            },
            x: "50px",
            duration: 0.5,
            ease: "power2.inOut",
        });
    }, []);

    return (
        <section className="Skills">
            <span className="skills-tag">Skills</span>
            <div className="skills-div">
                <img src={HTML} alt="rocket with HTML icon inside" />
                <img src={CSS} alt="rocket with CSS icon inside" />
                <img src={JavaScript} alt="rocket with JavaScript icon inside" />
                <img src={Angular} alt="rocket with Angular icon inside" />
                <img src={Reactjs} alt="rocket with React icon inside" />
                <img src={Nodejs} alt="rocket with Node.js icon inside" />
                <img src={Adobe_XD} alt="rocket with Adobe XD icon inside" />
            </div>
        </section>
    );
};

export default Skills;