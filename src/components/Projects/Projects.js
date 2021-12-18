import React, { useEffect } from 'react';
import './Projects.scss';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import JSON from '../../assets/projects.json';
import Project from './Project/Project';
import Carousel from 'react-elastic-carousel';

const Projects = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(".projects-tag", {
            scrollTrigger: {
                trigger: ".projects-tag",
                toggleActions: "restart reverse restart reverse",
                start: "top center",
                end: "top top",
            },
            x: "55px",
            duration: 0.5,
            ease: "power2.inOut",
        });

        gsap.to(".carousel", {
            scrollTrigger: {
                trigger: ".projects-list",
                toggleActions: "restart none none reset",
                start: "top bottom",
                end: "bottom top",
            },
            opacity: 1,
            duration: 1
        })
    }, []);

    return (
        <section className="Projects" id="projects">
            <span className="projects-tag">Projects</span>
            <div className="projects-list">
                <Carousel className="carousel">
                    {JSON.projects.map((project) => <Project key={project.name} name={project.name} image={project.image} description={project.description} />)}   
                </Carousel>         
            </div>
        </section>
    );
}

export default Projects;