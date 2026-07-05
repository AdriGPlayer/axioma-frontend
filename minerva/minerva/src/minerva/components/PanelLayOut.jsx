import HeaderPanel from "./header/HeaderPanel";


export default function PanelLayOut() {
    const perfil = {
        name:'Marco Adrian',
        puesto:'Administrador'
    }

  return (
    <>
      <HeaderPanel title={"Bienvenido a Minerva"}
                    subtitle={"Sistema de Gestión"}
                    perfil={perfil}/>
    </>
  )
}
