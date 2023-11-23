import './Portfolio.css'
import  Kross from '../../assets/portfolio/kross.png'

import { Projects } from './Projects/Projects';
import { useEffect } from 'react';
import Isotope from 'isotope-layout';
import AOS from 'aos';


export function Portfolio() {

  useEffect(() => {
    const portfolioContainer = document.querySelector('.portfolio-container') as HTMLElement;

    if (portfolioContainer) {
      const portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item',
      });

      const portfolioFilters = document.querySelectorAll('#portfolio-flters li') as NodeListOf<HTMLElement>;

      const handleClick = (e: Event) => {
        e.preventDefault();

        portfolioFilters.forEach((el) => {
          el.classList.remove('filter-active');
        });

        if (e.target instanceof HTMLElement) {
          e.target.classList.add('filter-active');

          portfolioIsotope.arrange({
            filter: e.target.getAttribute('data-filter') || '',
          });

          // Refresh AOS after the arrangement is complete
          AOS.refresh();
        }
      };

      portfolioFilters.forEach((filter) => {
        filter.addEventListener('click', handleClick, true);
      });

      return () => {
        // Cleanup event listeners when the component unmounts
        portfolioFilters.forEach((filter) => {
          filter.removeEventListener('click', handleClick, true);
        });
      };
    }
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  return (
    <>
    <section id="portfolio" className="portfolio section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Projects</h2>
        </div>

        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">All</li>
              <li data-filter=".filter-web">Web</li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-pratices">Pratices</li>
              <li data-filter=".filter-templates">Templates</li>
            </ul>
          </div>
        </div>

        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
          <Projects
          category="web"
          imageUrl={Kross}
          externalLink="https://lasciatiimpollinare.com/"
        />
         <Projects
          category="web"
          imageUrl={Kross}
          externalLink="https://lasciatiimpollinare.com/"
        />
         <Projects
          category="app"
          imageUrl={Kross}
          externalLink="https://lasciatiimpollinare.com/"
        />
         <Projects
          category="pratices"
          imageUrl={Kross}
          externalLink="https://lasciatiimpollinare.com/"
        /> <Projects
        category="Web"
        imageUrl={Kross}
        externalLink="https://lasciatiimpollinare.com/"
      />
       <Projects
          category="Web"
          imageUrl={Kross}
          externalLink="https://lasciatiimpollinare.com/"
        />

        </div>

      </div>
    </section>
     
    </>
  )
}