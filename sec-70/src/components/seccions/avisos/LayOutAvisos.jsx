
export default function LayOutAvisos() {
  // Más adelante esto vendrá del backend
  const avisos = [
    {
      id: 1,
      tipo: "Urgente",
      titulo: "Suspensión de clases",
      descripcion:
        "Por mantenimiento eléctrico, no habrá clases el viernes 12 de abril.",
      fecha: "8 Abr 2026",
    },
    {
      id: 2,
      tipo: "Importante",
      titulo: "Entrega de boletas",
      descripcion:
        "La entrega de calificaciones será el 18 de abril en horario habitual.",
      fecha: "5 Abr 2026",
    },
    {
      id: 3,
      tipo: "General",
      titulo: "Nuevo menú de cafetería",
      descripcion:
        "A partir de mayo contaremos con opciones saludables renovadas.",
      fecha: "2 Abr 2026",
    },
    {
      id: 4,
      tipo: "General",
      titulo: "Inscripciones abiertas",
      descripcion:
        "Ya puedes inscribir a tus hijos en los talleres del próximo ciclo.",
      fecha: "1 Abr 2026",
    },
  ];

  const obtenerClaseTipo = (tipo) => {
    switch (tipo.toLowerCase()) {
      case "urgente":
        return "aviso aviso--urgente";

      case "importante":
        return "aviso aviso--importante";

      default:
        return "aviso aviso--general";
    }
  };

  return (
    <section id="avisos" className="section section--alt">
      <div className="container">
        <header className="section__head">
          <span className="section__eyebrow">
            Comunicados
          </span>

          <h2 className="section__title">
            Avisos
          </h2>

          <p className="section__subtitle">
            Información importante para padres y alumnos.
          </p>
        </header>

        <div className="avisos-grid">
          {avisos.map((aviso) => (
            <article
              key={aviso.id}
              className={obtenerClaseTipo(aviso.tipo)}
            >
              <span className="aviso__tag">
                {aviso.tipo}
              </span>

              <h3 className="aviso__title">
                {aviso.titulo}
              </h3>

              <p className="aviso__text">
                {aviso.descripcion}
              </p>

              <span className="aviso__date">
                {aviso.fecha}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}