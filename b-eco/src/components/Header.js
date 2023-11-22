import "../styles/Header.css"
import Logo from '../Assets/Logo.png'

function Header() {
  return (
    <header>
      <section className="content-container">
          <section className='image-container'>
              <a href="#inicio"><img src={Logo} alt="logo" className='menu-logo'/></a>
          </section>
          <ul className="menu-container">
              <li className='menu-link'><a href="#inicio">Inicio</a></li>
              <li className='menu-link'><a href="#QS">¿Quiénes Somos?</a></li>
              <li className='menu-link'><a href="#Proyectos">Proyectos</a></li>
              <li className='menu-link'><a href="#Siguenos">Siguenos</a></li>
              <li className='menu-link'><a href="#EcoSerpiente">EcoSerpiente</a></li>
          </ul>
      </section>
    </header>
  )
}

export default Header