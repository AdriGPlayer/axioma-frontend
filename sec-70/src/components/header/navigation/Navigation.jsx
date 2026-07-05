
import { Link } from "react-router-dom";
export default function Navigation() {
  return (
    <>
      <nav className="nav">
        <Link to="/">Inicio</Link>
        <Link to='/eventos'>Eventos</Link>
        <Link to='/avisos'>Avisos</Link>
        <Link to='/oferta-academica'>Oferta Academica</Link>
        <Link to='/contacto' className="nav__cta">Contacto</Link>
      </nav>
    </>
  )
}
