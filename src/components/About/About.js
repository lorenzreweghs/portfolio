import React, { useEffect } from 'react';
import './About.scss';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const About = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(".about-me", {
            scrollTrigger: {
                trigger: ".About",
                toggleActions: "restart reverse restart reverse",
                start: "bottom bottom",
                endTrigger: ".about-me",
                end: "top top",
            },
            x: "75px",
            duration: 0.5,
            ease: "power2.inOut",
        });

        gsap.to(".name", {
            scrollTrigger: {
                trigger: ".About",
                start: "top bottom",
                end: "center center",
                scrub: 1,
            },
            x: "52.5vw",
            opacity: 1,
        });
        
        gsap.to(".education", {
            scrollTrigger: {
                trigger: ".About",
                start: "top bottom",
                end: "center center",
                scrub: 1,
            },
            x: "-70vw",
            opacity: 1,
        });
    }, []);

    return (
        <section className="About">
            <span className="about-me">About me</span>
            <h1 className="name">Lorenz Reweghs</h1>
            <h2 className="education">Multimedia and Creative Technologies</h2>
        </section>
    );
};

export default About;