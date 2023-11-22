import './header.css'
import { Icon } from '@iconify/react';
import { useEffect } from 'react';

export function Header() {
  useEffect(() => {
    const navbarlinks = document.querySelectorAll('#navbar .scrollto') as NodeListOf<HTMLAnchorElement>;

    const navbarlinksActive = () => {
      const position = window.scrollY + 200;

      navbarlinks.forEach((navbarlink) => {
        if (navbarlink.hash) {
          const section = document.querySelector(navbarlink.hash) as HTMLElement | null;

          if (section && position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight) {
            navbarlink.classList.add('active');
          } else {
            navbarlink.classList.remove('active');
          }
        }
      });
    };

    window.addEventListener('load', navbarlinksActive);
    window.addEventListener('scroll', navbarlinksActive);

    // Cleanup: remove event listeners on component unmount
    return () => {
      window.removeEventListener('load', navbarlinksActive);
      window.removeEventListener('scroll', navbarlinksActive);
    };
  }, []); // Empty dependency array means this effect runs once after initial render



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