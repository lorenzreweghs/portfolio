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

    const onSkillHover = (e) => {
        const skillElement = e.target.className;
        const hoverTimeline = gsap.timeline();

        hoverTimeline
        .to(`.${skillElement}`, {x: "5px"})
        .to(`.${skillElement}`, {x: "-5px"})
        .to(`.${skillElement}`, {x: "4px"})
        .to(`.${skillElement}`, {x: "-4px"})
        .to(`.${skillElement}`, {x: "3px"})
        .to(`.${skillElement}`, {x: "-3px"})
        .to(`.${skillElement}`, {x: "2px"})
        .to(`.${skillElement}`, {x: "-2px"})
        .to(`.${skillElement}`, {x: "1px"})
        .to(`.${skillElement}`, {x: "-1px"});

        hoverTimeline.duration(0.75);
    }

    const onSkillClick = (e) => {
        const skillElement = e.target.className;
        const clickTimeline = gsap.timeline();

        clickTimeline
        .to(`.${skillElement}`, {y: "-300px", ease: "power3.in"})
        .set(`.${skillElement}`, {y: "300px"})
        .to(`.${skillElement}-p`, {y: "-300px"}, 0.5)
        .set(`.${skillElement}-p`, {y: "150px"})
        .to(`.${skillElement}`, {y: "0px", ease: "power3.out"})
        .to(`.${skillElement}-p`, {y: "0px"}, 1.25);
    }

    return (
        <section className="Skills" id="skills">
            <span className="skills-tag">Skills</span>
            <div className="skills-div">
                <div>
                    <img src={HTML} className="html" alt="rocket with HTML icon inside" 
                        onMouseOver={(e) => onSkillHover(e)}
                        onClick={(e) => onSkillClick(e)}
                    />
                    <p className="html-p">HTML</p>                    
                </div>

                <div>
                    <img src={CSS} className="css"  alt="rocket with CSS icon inside" 
                        onMouseOver={(e) => onSkillHover(e)}
                        onClick={(e) => onSkillClick(e)}
                    />
                    <p className="css-p">CSS</p>                   
                </div>

                <div>
                    <img src={JavaScript} className="javascript" alt="rocket with JavaScript icon inside" 
                        onMouseOver={(e) => onSkillHover(e)}
                        onClick={(e) => onSkillClick(e)}
                    />        
                    <p className="javascript-p">JavaScript</p>            
                </div>

                <div>
                    <img src={Angular} className="angular" alt="rocket with Angular icon inside" 
                        onMouseOver={(e) => onSkillHover(e)}
                        onClick={(e) => onSkillClick(e)}
                    />    
                    <p className="angular-p">Angular</p>                
                </div>

                <div>
                    <img src={Reactjs} className="react" alt="rocket with React icon inside" 
                        onMouseOver={(e) => onSkillHover(e)}
                        onClick={(e) => onSkillClick(e)}
                    />      
                    <p className="react-p">React</p>              
                </div>

                <div>
                    <img src={Nodejs} className="node" alt="rocket with Node.js icon inside" 
                        onMouseOver={(e) => onSkillHover(e)}
                        onClick={(e) => onSkillClick(e)}
                    />         
                    <p className="node-p">Node.js</p>           
                </div>

                <div>
                    <img src={Adobe_XD} className="xd" alt="rocket with Adobe XD icon inside" 
                        onMouseOver={(e) => onSkillHover(e)}
                        onClick={(e) => onSkillClick(e)}
                    />   
                    <p className="xd-p">Adobe XD</p>                 
                </div>
            </div>
        </section>
    );
};

export default Skills;