import './Skilss.css'
import { Icon } from '@iconify/react';


import { Progressbar } from './Progressbar';


export function Skilss() {

  return (
    <>
      <section id="skills" className="skills section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Skills</h2>
        </div>
        <div className="row skills-content">
          <div className="col-lg-6">
            <Progressbar skillName="HTML" skillValue={80} />
            <Progressbar skillName="HTML" skillValue={80} />
            <Progressbar skillName="HTML" skillValue={80} />
          </div>

          <div className="col-lg-6">
            <Progressbar skillName="HTML" skillValue={80} />
            <Progressbar skillName="HTML" skillValue={80} />
            <Progressbar skillName="HTML" skillValue={80} />
          </div>
        </div>

      </div>
    </section>
    </>
  )
}