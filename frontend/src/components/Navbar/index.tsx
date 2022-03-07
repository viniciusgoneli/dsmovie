import {ReactComponent as GithubIcon} from 'assets/img/github.svg'
import 'components/Navbar/styles.css'

function Navbar(){
    return (
        <header>
        <nav className='container'>
          <div className='dsmovie-nav-content'>
            <h1>DSMovie</h1>
            <div>
              <a href="https://github.com/devsuperior">
                <div className='dsmovie-contact-container'>
                  <GithubIcon />
                  <p className='dsmovie-contact-link'>/devsuperior</p>
                </div>
              </a>
            </div>
          </div>
        </nav>
      </header>
    )
}

export default Navbar