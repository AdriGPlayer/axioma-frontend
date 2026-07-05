import LayOutAvisos from "./avisos/LayOutAvisos";
import LayOutCarrusel from "./carrusel/LayOutCarrusel";
import LayOutContacto from "./contacto/LayOutContacto";
import LayOutEventos from "./eventos/LayOutEventos";
import LayOutOferta from "./oferta-academiaca/LayOutOferta";
export default function LayOutSeccions() {
  return (
    <main id="inicio" className="hero">
        <LayOutCarrusel />
        <LayOutEventos />
        <LayOutAvisos />
        <LayOutOferta />
        <LayOutContacto />
    </main>
  )
}
