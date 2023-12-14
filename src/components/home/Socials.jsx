import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Socials = () => {
  return (
    <ul className="social--links--container">
    <li className='social--links--item'>
        <a href="mailto:simonedessi1984@gmail.com" className="link--mail" >
        <FontAwesomeIcon className='icon mail' icon={faEnvelope} />      
             </a>
    </li>
    <li className='social--links--item'>
      <a href="https://github.com/SimoneDessi" className="link--github" target='blank'>
      <FontAwesomeIcon className='icon github' icon={faGithub} />
      </a>
    </li>
    <li className='social--links--item'>
      <a href="https://www.linkedin.com/in/simone-dessi/" className="link--linkedin" target='blank'>
      <FontAwesomeIcon className='icon linkedin' icon={faLinkedin} />
      </a>
    </li>
    </ul>

  )
}

export default Socials