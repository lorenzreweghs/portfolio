import React, { useEffect } from 'react';
import './Projects.scss';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Projects = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(".projects-tag", {
            scrollTrigger: {
                trigger: ".Projects",
                toggleActions: "restart reverse restart reverse",
                start: "bottom bottom",
                endTrigger: ".projects-tag",
                end: "top top",
            },
            x: "55px",
            duration: 0.5,
            ease: "power2.inOut",
        });
    }, []);

    return (
        <section className="Projects">
            <span className="projects-tag">Projects</span>
        </section>
    );
}

export default Projects;