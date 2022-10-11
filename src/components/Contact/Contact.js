import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <a href={`mailto:${contact.email}`}>
        <span type='button' className='button-ui'>
          Email me
        </span>
      </a>
      <h1>Hola</h1>
    </section>
  )
}

export default Contact;
