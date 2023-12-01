import './header.css'
import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';

export function Header() {

  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
  };

  useEffect(() => {
    const onClickMobileNavToggle = (e: Event) => {
      const body = document.querySelector('body');
      const mobileNavToggle = e.target as HTMLElement;

     if (mobileNavToggle.classList.contains('mobile-nav-toggle')) {
      if (body) {
        body.classList.toggle('mobile-nav-active');
        mobileNavToggle.classList.toggle('bi-list');
        mobileNavToggle.classList.toggle('bi-x');
      }
    }
    };

    document.addEventListener('click', onClickMobileNavToggle);

    return () => {
      document.removeEventListener('click', onClickMobileNavToggle);
    };
  }, []);
  
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
  }, []); 

  return (
    <>
    
      <Icon
          icon={isMobileNavOpen ? 'bi:x' : 'bi:list'}
          className="mobile-nav-toggle"
          onClick={toggleMobileNav}
        />


      <header id="header" className="d-flex flex-column justify-content-center">
        <nav id="navbar" className={`navbar nav-menu${isMobileNavOpen ? ' mobile-nav-active' : ''}`}>
          <ul>
            <li>
              <a href="#hero" className="nav-link scrollto active" onClick={closeMobileNav}>
                <Icon icon="ic:outline-home" /> <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#about" className="nav-link scrollto" onClick={closeMobileNav}>
                <Icon icon="tdesign:user" /><span>About</span>
              </a>
            </li>
            <li>
              <a href="#projects" className="nav-link scrollto" onClick={closeMobileNav}>
                <Icon icon="solar:book-broken" /> <span>Projects</span>
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link scrollto" onClick={closeMobileNav}>
                <Icon icon="bi:envelope" /><span>Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )


}