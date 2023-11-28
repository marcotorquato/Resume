import './Pomotimer.css'
import { Icon } from '@iconify/react';

export function Pomotimer() {
    return (
      <>
      <footer id="footer">
    <div className="container">
      <div className="social-links">
        <a href="https://github.com/marcotorquato" className="github" target="_blank"><Icon icon="mdi:github" />
        </a>
        <a href="https://www.instagram.com/marcotorquat/" target="_blank" className="instagram"><Icon icon="mdi:instagram" /></a>
        <a href="https://www.linkedin.com/in/marcotorquato/"target="_blank" className="linkedin" ><Icon icon="mdi:linkedin" /></a>
      </div>
      <div className="copyright">
        &copy; Copyright <strong><span></span></strong>. All Rights Reserved
      </div>
      <div className="credits">
        Designed by <a href="https://marcotorquato.com/">Marco Torquato</a>
      </div>
    </div>
  </footer>
      </>
    )
  }