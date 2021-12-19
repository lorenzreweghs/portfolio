import React, { useEffect } from 'react';
import './Navigation.scss';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Navigation = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(".anchor-nav", {
            scrollTrigger: {
                trigger: ".anchor-nav",
                toggleActions: "restart none restart none",
                start: "top top",
                end: "+=95",
            },
            top: "10px",
            duration: 0.6,
            ease: "power2.inOut"
        });
      }, []);

    return (
        <nav className="anchor-nav">
            <ul>
                <a href="#aboutme"><li>About me</li></a>
                <a href="#skills"><li>Skills</li></a>
                <a href="#projects"><li>Projects</li></a>
            </ul>
        </nav>
    );
}

export default Navigation;