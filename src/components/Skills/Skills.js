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
        gsap.defaults({duration: 0.5, ease: "power2.inOut"});

        gsap.to(".skills-tag", {
            scrollTrigger: {
                trigger: ".Skills",
                toggleActions: "restart reverse restart reverse",
                start: "bottom bottom",
                endTrigger: ".skills-tag",
                end: "top top",
            },
            x: "50px"
        });

        const skillsTimeline = gsap.timeline();

        skillsTimeline
        .from(".html", {opacity: 0, y: "25px"})
        .from(".css", {opacity: 0, y: "25px"})
        .from(".javascript", {opacity: 0, y: "25px"})
        .from(".angular", {opacity: 0, y: "25px"})
        .from(".react", {opacity: 0, y: "25px"})
        .from(".node", {opacity: 0, y: "25px"})
        .from(".xd", {opacity: 0, y: "25px"});

        ScrollTrigger.create({
            animation: skillsTimeline,
            trigger: ".Skills",
            toggleActions: "restart none none reset",
            start: "center bottom",
            end: "center top",
        })
    }, []);

    return (
        <section className="Skills">
            <span className="skills-tag">Skills</span>
            <div className="skills-div">
                <img src={HTML} className="html" alt="rocket with HTML icon inside" />
                <img src={CSS} className="css" alt="rocket with CSS icon inside" />
                <img src={JavaScript} className="javascript" alt="rocket with JavaScript icon inside" />
                <img src={Angular} className="angular" alt="rocket with Angular icon inside" />
                <img src={Reactjs} className="react" alt="rocket with React icon inside" />
                <img src={Nodejs} className="node" alt="rocket with Node.js icon inside" />
                <img src={Adobe_XD} className="xd" alt="rocket with Adobe XD icon inside" />
            </div>
        </section>
    );
};

export default Skills;