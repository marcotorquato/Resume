import { useEffect } from 'react';
import './Preloader.css'


export function Preloader() {

  useEffect(() => {
    const removePreloader = () => {
      const preloader = document.getElementById('preloader');

      if (preloader) {
        preloader.remove();
      }
    };

    window.addEventListener('load', removePreloader);

    // Limpar o evento ao desmontar o componente
    return () => {
      window.removeEventListener('load', removePreloader);
    };
  }, []); 
  
  useEffect(() => {
    const backToTop = document.querySelector('.back-to-top') as HTMLElement | null;

    const toggleBackToTop = () => {
      if (backToTop) {
        if (window.scrollY > 100) {
          backToTop.classList.add('active');
        } else {
          backToTop.classList.remove('active');
        }
      }
    };

    if (backToTop) {
      window.addEventListener('load', toggleBackToTop);
      window.onscroll = () => toggleBackToTop;

      // Limpar o evento ao desmontar o componente
      return () => {
        window.removeEventListener('load', toggleBackToTop);
        window.onscroll = null;
      };
    }
  }, []);


    return (
      <>
      <div id="preloader"></div>
      </>
    )
  
  
  }