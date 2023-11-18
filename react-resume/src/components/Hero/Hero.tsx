import './hero.css'
import { Icon } from '@iconify/react';


export function Hero() {
  return (
    <>
    <section id="hero" className="d-flex flex-column justify-content-center">
    <div className="container" data-aos="zoom-in" data-aos-delay="100">
      <h1>Marco Antonio Torquato</h1>
      <p>I'm <span className="typed" data-typed-items="Front-End, Developer, Back-End, Developer"></span></p>
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