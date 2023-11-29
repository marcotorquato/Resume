import './Portfolio.css'
import  Kross from '../../assets/portfolio/kross.png'

import { Projects } from './Projects/Projects';

import AOS from 'aos';


export function Portfolio() {

  // Refresh AOS after the arrangement is complete
  AOS.refresh();

  return (
    <>
      <section className='instagramSection' id="instagram">
      <div className="container">
        <h2>Projects</h2>
        <p>Todos os nossos clientes são tratados</p>
      </div>

      <div className="my-carousel gallery ">
      <Projects imageSrc={Kross} altText="Project Kross" />
      <Projects imageSrc={Kross} altText="Project Kross" />
      <Projects imageSrc={Kross} altText="Project Kross" />
      <Projects imageSrc={Kross} altText="Project Kross" />
      <Projects imageSrc={Kross} altText="Project Kross" />
      </div>

      <div className='looptext'>
        <div>
          <h3>• #Royalsburger</h3>
          <h3>• #Royalsburger</h3>
          <h3>• #Royalsburger</h3>
          <h3>• #Royalsburger</h3>
          <h3>• #Royalsburger</h3>
          <h3>• #Royalsburger</h3>
          <h3>• #Royalsburger</h3>
          <h3>• #Royalsburger</h3>
          <h3>• #Royalsburger</h3>
          <h3>• #Royalsburger</h3>
          <h3>• #Royalsburger</h3>
          <h3>• #Royalsburger</h3>
          <h3>• #Royalsburger</h3>
          <h3>• #Royalsburger</h3>
          <h3>• #Royalsburger</h3>
        </div>
      </div>
    </section>
     
    </>
  )
}