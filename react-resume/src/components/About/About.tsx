import './About.css'
import { Icon } from '@iconify/react';
import  photoVenere  from '../../assets/venere_profile.png';



export function About() {
  
  return (
    <>
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>About</h2>
          <p>IT Manager, I help small agencies and companies organize to bring their ideas to life. Powered by problems, VS Code and coffee.</p>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <img src={photoVenere} className="img-fluid" alt="photo profile About"/>
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content">
            <h3>IT Manager &amp; Developer.</h3>
            <p className="fst-italic">
              I started my career helping small businesses with college work, that's what led me to fall in love with helping people with technology. I've always been someone who has a creative and logical side, I recently joined the development niche which vastly expands the way I can add to a company.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                 
                  <li><Icon icon="fluent-mdl2:website" className='iconfy' /> <strong>Website:</strong> <span>www.marcotorquato.com</span></li>
                  <li><Icon icon="bi:phone" className='iconfy' /> <strong>Phone:</strong> <span>+39 371 5782684</span></li>
                  <li><Icon icon="carbon:location-filled" className='iconfy' /> <strong>City:</strong> <span>Genova, Italy</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><Icon icon="icon-park-outline:degree-hat" className='iconfy' /> <strong>Degree:</strong> <span>Bachelor</span></li>
                  <li><Icon icon="line-md:email" className='iconfy' /> <strong>Email:</strong> <span>contact@marcotorquato.com</span></li>
                  <li><Icon icon="eos-icons:job" className='iconfy' /> <strong>Freelance:</strong> <span>Available</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
    </>
  )


}