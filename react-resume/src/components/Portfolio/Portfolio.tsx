import './Portfolio.css'


import { Projects } from './Projects/Projects';


export function Portfolio() {

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
          category="Web"
          imageUrl="assets/img/portfolio/lascitiimpolinare.png"
          galleryLink="assets/img/portfolio/lascitiimpolinare.png"
          externalLink="https://lasciatiimpollinare.com/"
        />
        <Projects
          category="Web"
          imageUrl="assets/img/portfolio/lascitiimpolinare.png"
          galleryLink="assets/img/portfolio/lascitiimpolinare.png"
          externalLink="https://lasciatiimpollinare.com/"
        />
        <Projects
          category="Web"
          imageUrl="assets/img/portfolio/lascitiimpolinare.png"
          galleryLink="assets/img/portfolio/lascitiimpolinare.png"
          externalLink="https://lasciatiimpollinare.com/"
        />
        </div>

      </div>
    </section>
     
    </>
  )
}