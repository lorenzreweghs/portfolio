import React, { useEffect } from 'react';
import './Header.scss';
import nightSky from '../../assets/images/nightsky3_sky.jpg';
import trees from '../../assets/images/nightsky_only_trees.png';
import titleRocket from '../../assets/svg/title-rocket-outline.svg';
import smallRocketIcon from '../../assets/images/rocket_icon.png';
import bigRocketIcon from '../../assets/svg/big-rocket-icon-outline.svg';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Navigation from '../Navigation/Navigation';

const Header = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(".big-rocket-icon", {
          scrollTrigger: {
            trigger: ".background",
            start: "top top",
            endTrigger: ".big-rocket-icon",
            end: "bottom top",
            scrub: 1,
          },
          x: '99.9vw',
        });
        
        gsap.to(".title-quote", {
          scrollTrigger: {
            trigger: ".background",
            start: "top top",
            endTrigger: ".big-rocket-icon",
            end: "top top",
            scrub: 1,
          },
          opacity: 0,
        });
      }, []);

    return (
        <header className="Header">
            <div className="background">
                <Navigation />
                <div className="title-rocket-div">
                <img src={titleRocket} className="title-quote" alt="quote with a rocket icon" />
                <img src={bigRocketIcon} className="big-rocket-icon" alt="big icon of a rocket" />
                </div>
                <img src={trees} className="trees" alt="silhouette of trees in front of the night sky" />
                <img src={nightSky} className="nightsky" alt="a moving night sky as the website background" />
                <a href="#aboutme"><img src={smallRocketIcon} className="small-rocket-icon" alt="small clickable icon of a rocket that scrolls down the page" /></a>
            </div>
        </header>
    );
}

export default Header;