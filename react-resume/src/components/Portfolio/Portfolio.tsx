import './Portfolio.css'
import  Devilink from '../../assets/portfolio/devlink.png'
import  Lascitiimpolinare from '../../assets/portfolio/lascitiimpolinare.png'
import  Webfurlans from '../../assets/portfolio/webfurlans.png'
import  Pomotimer from '../../assets/portfolio/webpomotimer.png'
import  Converter from '../../assets/portfolio/weconverter.png'

import { Projects } from './Projects/Projects';

import AOS from 'aos';


export function Portfolio() {

  // Refresh AOS after the arrangement is complete
  AOS.refresh();

  return (
    <>
      <section className='projectsSection' id="projects">
      <div className="section-title">
        <h2>Projects</h2>
      </div>

    
    <div className='looptext-projects'>
        <div>
          <Projects imageSrc={Pomotimer} altText="Project Pomotimer" />
          <Projects imageSrc={Webfurlans} altText="Project Webfurlans" />
          <Projects imageSrc={Lascitiimpolinare} altText="Project Lascitiimpolinare" />
          <Projects imageSrc={Converter} altText="Project Converter" />
          <Projects imageSrc={Devilink} altText="Project Devilink" />
        </div>
      </div>
    

      <div className='looptext'>
        <div>
          <h3>• #StartYourProject</h3>
          <h3>• #StartYourProject</h3>
          <h3>• #StartYourProject</h3>
          <h3>• #StartYourProject</h3>
          <h3>• #StartYourProject</h3>
          <h3>• #StartYourProject</h3>
          <h3>• #StartYourProject</h3>
          <h3>• #StartYourProject</h3>
          <h3>• #StartYourProject</h3>
          <h3>• #StartYourProject</h3>
          <h3>• #StartYourProject</h3>

        </div>
      </div>
    </section>
     
    </>
  )
}