import './header.css'
import { Icon } from '@iconify/react';

export function Header() {

  return (
    <>
    <Icon icon="bi:list"  className='mobile-nav-toggle '/> 
  <header id="header" className="d-flex flex-column justify-content-center">

    <nav id="navbar" className="navbar nav-menu">
      <ul>
        <li><a href="#hero" className="nav-link scrollto active"><Icon icon="ic:outline-home" /> <span>Home</span></a></li>
        <li><a href="#about" className="nav-link scrollto"><Icon icon="tdesign:user" /><span>About</span></a></li>
        <li><a href="#portfolio" className="nav-link scrollto"><Icon icon="solar:book-broken" /> <span>Projects</span></a></li>
        <li><a href="#contact" className="nav-link scrollto"><Icon icon="bi:envelope" /><span>Contact</span></a></li>
      </ul>
    </nav>

  </header>
    </>
  )


}