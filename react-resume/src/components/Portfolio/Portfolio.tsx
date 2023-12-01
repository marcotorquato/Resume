import './Portfolio.css'
import  Kross from '../../assets/portfolio/kross.png'

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
          <Projects imageSrc={Kross} altText="Project Kross" />
          <Projects imageSrc={Kross} altText="Project Kross" />
          <Projects imageSrc={Kross} altText="Project Kross" />
          <Projects imageSrc={Kross} altText="Project Kross" />
          <Projects imageSrc={Kross} altText="Project Kross" />
          <Projects imageSrc={Kross} altText="Project Kross" />
          <Projects imageSrc={Kross} altText="Project Kross" />
          <Projects imageSrc={Kross} altText="Project Kross" />
          <Projects imageSrc={Kross} altText="Project Kross" />
          <Projects imageSrc={Kross} altText="Project Kross" />
          <Projects imageSrc={Kross} altText="Project Kross" />
          <Projects imageSrc={Kross} altText="Project Kross" />
          <Projects imageSrc={Kross} altText="Project Kross" />
          <Projects imageSrc={Kross} altText="Project Kross" />
          <Projects imageSrc={Kross} altText="Project Kross" />
          <Projects imageSrc={Kross} altText="Project Kross" />
          <Projects imageSrc={Kross} altText="Project Kross" />
          <Projects imageSrc={Kross} altText="Project Kross" />
          <Projects imageSrc={Kross} altText="Project Kross" />
          <Projects imageSrc={Kross} altText="Project Kross" />
          <Projects imageSrc={Kross} altText="Project Kross" />
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