
export default function HeaderPanel({title, subtitle, perfil}) {


  return (
    <header className="header-panel-minerva"> 
      <div className="brand-panel-minerva">
        <div className="brand-logo-panel-minerva">
            p
        </div>
        <div className="brand-text-panel-minerva">
            <h1>{title}</h1>
            <span>{subtitle}</span>
        </div>
      </div>

      <div className="user-area-panel-minerva">
      <div className="user-info-panel-minerva">
        <div className="name-panel-minerva">{perfil.name}</div>
        <div className="role">{perfil.puesto}</div>
      </div>
      <div className="avatar-panel-minerva">LM</div>
      <button className="btn-salir-panel-minerva" onclick="salir()">
       
        Salir
      </button>
    </div>
    </header>
  )
}
