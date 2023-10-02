import "../styles/Footer.css"
import Logo from '../Assets/Logo.png'
import Insta from '../Assets/Instagram.png'

function Footer() {
  return (
    <footer>
      <section className='footer-container'>
          <h2>Todos los derechos reservados © B-ECO 2023</h2>
          <section className='links-container'>
                <a target="_blank" href="https://www.instagram.com/grupoestudiantil_b.eco/" className='insta-container'><img src={Insta} alt="logo" className='insta-logo'/></a>
                <a href="/" className='logo-container'><img src={Logo} alt="logo" className='logo-footer'/></a>
          </section>
      </section>
    </footer>
  )
}

export default Footer