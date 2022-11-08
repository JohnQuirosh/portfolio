import uniqid from 'uniqid'
import { skills } from '../../portfolio'
import './Skills.css'

const Skills = () => {
  if (!skills.length) return null

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Skills</h2>
      <div className="content" >
        <div className="carousel">
          {skills.map((skill) => (
            <article key={uniqid()} className='card'>
              <h2>{skill}</h2>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Skills
