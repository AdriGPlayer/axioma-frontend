import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <>
       <Link to="/">
            <span className="logo__mark">R</span>
            <span className="logo__text">Raices del saber</span>
        </Link>
        <input type="checkbox" id="navToggle" className="nav-toggle" hidden />
        <label htmlFor="navToggle" className="nav-burger" aria-label="Abrir menú">
          <span></span><span></span><span></span>
        </label>
    </>
  )
}
