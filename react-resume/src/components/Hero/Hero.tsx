import './hero.css'
import { Icon } from '@iconify/react';

import Typed from "typed.js";
import { useEffect, useRef } from "react";


export function Hero() {

  // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Front-End Developer", "IT Manager"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  
  return (
    <>
    <section id="hero" className="d-flex flex-column justify-content-center">
    <div className="container" data-aos="zoom-in" data-aos-delay="100">
      <h1>Marco Antonio Torquato</h1>
      <p>I'm <span ref={el}></span></p>
      <div className="social-links">
        <a href="https://github.com/marcotorquato" className="github" target="_blank"> <Icon icon="mdi:github" />
        </a>
        <a href="https://www.instagram.com/marcotorquat/" target="_blank" className="instagram"><Icon icon="mdi:instagram" /></a>
        <a href="https://www.linkedin.com/in/marcotorquato/"target="_blank" className="linkedin" ><Icon icon="mdi:linkedin" /></a>
      </div>
    </div>
  </section>
    </>
  )


}