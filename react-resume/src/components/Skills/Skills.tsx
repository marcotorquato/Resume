import './Skills.css'


import { Progressbar } from './Progressbar/Progressbar';


export function Skills() {

  return (
    <>
      <section id="skills" className="skills section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Skills</h2>
        </div>
        <div className="row skills-content">
          <div className="col-lg-6">
            <Progressbar skillName="HTML" skillValue={90} />
            <Progressbar skillName="CSS" skillValue={85} />
            <Progressbar skillName="JavaScript" skillValue={80} />
            <Progressbar skillName="Angular" skillValue={50} />
            <Progressbar skillName="Python" skillValue={75} />
            <Progressbar skillName="PMBOK" skillValue={80} />
          </div>

          <div className="col-lg-6">
            <Progressbar skillName="React" skillValue={80} />
            <Progressbar skillName="SASS" skillValue={85} />
            <Progressbar skillName="TypeScript" skillValue={87} />
            <Progressbar skillName="VUE" skillValue={45} />
            <Progressbar skillName="Tailwind" skillValue={87} />
            <Progressbar skillName="ITIL" skillValue={80} />
          </div>
        </div>

      </div>
    </section>
    </>
  )
}